# Headlines web

This is the official repository of the Headlines pip project.

## Requirements

1. PHP 8.3
2. Node 20 (LTS)
3. MySQL 8
4. [Node.js](https://nodejs.org/en/)
5. [Composer](https://getcomposer.org/)
6. [WP-CLI](https://wp-cli.org/)

## Project setup and branching

The repository has two main branches: `main` and `staging`.

Anything on the `staging` branch will end up on the staging server via automatic deployment CI/CD pipeline.

The `main` branch is the production branch. Once you are ready to go to production, merge the content to the `main`
branch and **tag** it. After tagging, you should trigger a manual deployment to the production server. Currently,
the `main` branch includes only the initial theme boilerplate, and will be changed once we go live.

When working on a task, create a feature branch for it. Prepend it with the task number in Productive if possible, e.g.
`feature/123-task-name`. If your branch is a bugfix, use the `fix` prefix.

See [Git workflow in the WordPress Handbook](https://infinum.com/handbook/wordpress/how-we-do-it-in-wordpress/git-workflow#modified-git-flow) for more info.

## Development

Using the latest eightshift boilerplate means that you have WP-CLI scripts available. To use them type:

```bash
wp boilerplate --help
```

The project uses PRS-4 autoloading and follows PSR-12 coding standards.

## Environments

The environment details are set in the `setup.json` file.

| Environment | URL              | Branch         |
| ----------- | ---------------- | -------------- |
| Local       | pip-project.test | feature-branch |
| Staging     | ...              | staging        |
| Production  | ...              | main           |

### Local enviroment setup

#### Manual

1. Clone this repository.
2. Install WordPress in the project root folder and configure it. This includes creating and importing the database.
3. Include the following snippet in `wp-config.php` file:
   ```php
   define('WP_ENVIRONMENT_TYPE', 'development');
   if (php_sapi_name() !== 'cli') {
   	require_once 'wp-config-project.php';
   }
   ```
4. Go to theme path `./wp-content/headlines/` and run:
   1. `composer install` (installs PHP dependencies)
   2. `npm install` (installs JS dependencies)
   3. `npm run build` (builds project assets in theme `public` folder) or `npm run start` (watches the project directory and builds it on changes)
5. Check `setup.json` and install depended-upon plugins manually.

#### Automatic

The `beforeinstall.php` script, used for deployment installs, can be used to install WordPress and set up the project.

To do so, run `./bin/beforeinstall.php [environment] [title] [adminUser] [adminEmail]` or `php bin/beforeinstall.php [environment] [title] [adminUser] [adminEmail]` in the project root directory.

For new installations, URLs for environments need to be set in setup.json.
For any local run of this script, a local-secrets.json file needs to be provided. The `local-secrets.json` file should follow the same structure, and include similar content to the `secrets.json` stored in AWS Secrets Manager.

[See the deployment readme on how to set up the project automatically](/.github/deploy/README.md)

## Deployment

Deployment is automatic using [GitHub Actions](https://docs.github.com/en/actions) and AWS CodeDeploy. You can read more about
deploy process in the [deploy readme](/.github/deploy/README.md).

To deploy to any environment, you first need to configure few details inside the
`.github/deploy/config.php` file (Project name, theme name, hosts, etc.).

Deploy process depends on secrets set inside a secret vault. The example template of secrets is provided in the Deploy readme.

We use secrets to get the sensitive information to configure `wp-config.php` file on the first deployment.
If necessary, you can expand secrets to include other keys needed for the project. For instance some API keys, etc.
You can check how the secrets file looks like in the Deploy readme. If you need to include those, make sure
to change the deployment scripts to suit your needs.

To change secret values, you'll need to install AWS CLI and contact Sysbee for details.

## Things to look out for

### Secrets

Secrets file can hold things like premium plugin URLs or some other secret info (bucket keys, secrets, etc.).
One of the things you need to be careful of when adding plugin URLs is whether they can include or not **versions** in them.

Deploy tasks that check for plugin versions will check if the URL contains the `VERSION` string, and make a replacement for the version set up in the `setup.json` file.

For example, you may have the following situation in your secrets file:

```json
{
  "db": {
    "name": "pip_project_db",
    "user": "root",
    "pass": "",
    "host": "127.0.0.1"
  }
}
```
