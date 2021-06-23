---
title: "Updating an Option Manually"
---

# Updating an Option Manually
Most of the time, options for your theme or plugin will be set via the Redux option panel. But what if the need to 
update an option from someplace else arises? Perhaps an option would need to be changed behind the scenes, based on certain 
conditions.  Can it be done?

You better believe it! All thanks to the Redux API.

```php
$opt_name = 'OPT_NAME'; // TODO - Replace with your opt_name
Redux::set_option( $opt_name, 'KEY', $option );
```

The `KEY` is the [field ID](../../configuration/objects/field.md) you are seeking to update. The `$option` is the value you 
wish to save.

This method will save the values in the database as well as update the global variable.
