---
title: "Installing" 
---

# Installing
There are several easy ways to quickly begin using Redux, each one appealing to different skill levels and use cases. Read 
through to see what suits your particular needs.

::: warning Table of Contents
[[toc]]
:::

## Downloading
  
### WordPress.org Plugin
By using the Redux plugin, you can ensure your users will always be up to date with the most stable release.

[WordPress.org Plugin](https://wordpress.org/plugins/redux-framework)

### [GitHub Repository](https://github.com/reduxframework/redux-framework/)
If stability isn't enough for you, why not work with the cutting edge? Our [repo](https://github.com/reduxframework/redux-framework/) 
is highly active.  We work with the community to vet any changes or improvements to the Redux core.

[GitHub Repository](https://github.com/reduxframework/redux-framework/)

### Custom Bundle
Looking for a custom build? Do you want to customize Redux for your needs or want to have a solid example of where to begin? 
Try the [builder](https://build.redux.io) and you'll be developing in no time at all.

[Redux Builder](https://build.redux.io)

## Using Composer
You're not a developer, you're a code jedi. You laugh at copy and paste! Why not try Composer and Redux. It will make 
your development time that much easier.

### WP Packagist
The most stable of releases reside on WordPress.org. Only those releases that have been tested by the masses. Use this configuration 
for the ultimate in stability.

```json
{
    "repositories": [
        {
            "type": "composer",
            "url": "https://wpackagist.org"
        }
    ],
    "require": {
        "wpackagist-plugin/redux-framework": "*"
    }
}
```

### Repo Stable Release
These releases are often pre-release to WordPress.org. Although they are considered stable, they've not yet been fully tested by our community.

```json
{
    "require": {
        "redux-framework/redux-framework": "*"
    }
}
```

### Repo Master Branch
Go forth young Padawan. Do not underestimate the potential bugs of the master branch. :)

```json
{
    "require": {
        "redux-framework/redux-framework": "dev-master"
    }
}
```

## File Structure
Redux comes in two forms. The first is a plugin form.  The second is the full repo of which you only need a subset 
to run Redux. In both of these packages, `ReduxCore` is the only folder that matters.  The rest of the files add 
additional features.

### Plugin Structure
Once downloaded, unzip the compressed folder to view the structure of the compiled Redux Framework plugin. You'll 
see something similar to this:

```text
redux-framework/
├── code-styles/
├── ReduxCore/
├── sample/
    ├── sample-config.php
    ├── barebones-config.php
```

As you can see, the sample config is present here.  The Redux sample-config file can be loaded by activating the Redux 
plugin and clicking on the **Activate Demo Mode** on the plugin's view within your WordPress admin.

### Repository or Composer Structure
In this download, you'll find many more files than found in the plugin. It should look something like this:

```text
redux-framework/
├── .tx/
├── bin/
├── code-styles/
├── ReduxCore/
├── sample/
    ├── sample-config.php
    ├── barebones-config.php
├── tests/
```

::: danger Embedding the Redux repo will not pass approval
Be warned that attempting to embed the entire Redux repo inside a theme or plugin will not pass approval for many 
marketplaces including WordPress.org and [ThemeForest](https://themeforest.net?ref=TeamRedux).
:::
