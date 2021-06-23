---
title: "Using Extensions"
---

# Using and Creating Extensions
Extensions are one of the most powerful features of Redux. Any part of Redux can be overloaded to do virtually
__***anything***__ with extensions. 

::: warning Table of Contents
[[toc]]
:::

::: danger WARNING: Extensions must be loaded BEFORE you use them
For best results, always load your extension before attempting to reference them in a config. Some extensions have 
custom APIs that will not be included and thus results may be poor. Always load extensions first, **then** use them.
:::

## Loading an Extension
Using the Redux API, loading a single extension or a folder of extensions is simple.

```php
Redux::load_extensions( 'OPT_NAME', 'RELATIVE_PATH_TO_DIRECTORY' );
```

That's it! Redux will recognize your extension(s) for your instance.  You may then begin using their functionality in 
your config code.

::: tip
If multiple extensions are in use, ensure they are loading properly in their own named folders within the specified 
directory to load them all.

```text
extensions/
├── metaboxes/
├── customizer/
├── custom_field/
    ├── extension_custom_field.php
    ├── custom_field/
        ├── field_custom_field.css
        ├── field_custom_field.js
        ├── field_custom_field.php
```
:::

## Fetching Extensions
Sometimes you need to fetch the existing extensions to identify what is being used. 

### Redux::get_extensions()
This method requires one or two parameters depending on the desired return value.

#### Fetching all Extensions

```php
Redux::get_extensions( $opt_name );
```
This returns an array of loaded extensions containing key/pair information of `path` (the path to the extension) and 
`class` (the classname of the extension). False is returned on failure.

#### Fetching a Single Extension
Use the following to fetch the path of a single extension:

```php
Redux::get_extensions( $opt_name, 'EXTENSION_NAME' );
```

## Creating a Custom Extension
Creating your own extension is simple. In fact, to change the way a Redux field works, an extension solution is 
preferred to modifying the core code. 

Try it yourself using our [extension boilerplate](https://github.com/reduxframework/redux-framework/tree/master/sample/extension) 
included in the sample folder.

### Extension Folder Structure
All extensions must follow a similar structure. 

```text
├── custom_field/
    ├── extension_custom_field.php
    ├── custom_field/
        ├── field_custom_field.css
        ├── field_custom_field.js
        ├── field_custom_field.php
        ├── field_custom_field.php
```