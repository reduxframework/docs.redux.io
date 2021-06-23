# Generating a Support Hash

In order to provide you with the best support possible, we request you generate a support hash. This is entirely secure
and **contains no personally identifying information**. If you want to see what will be sent, you can refer to the `Health Report/Status`
in the `About Redux` page within your WordPress instance.

::: danger Redux 3.4.5+ is required
If you have an early version, please update.
:::

::: warning Table of Contents
[[toc]]
:::

<span style="display:block;text-align:center">![](../img/support_hash.png)</span>

## Initiate a Support Hash Request
In your control panel, navigate on the left side to Tools -> Redux Framework. Once on that page, click on the `Support` 
tab and follow the instructions.

### But the Menu Item is Missing
If the menu item is missing then navigate to the URL manually.

```text
~/wp-admin/tools.php?page=redux-support
```

Replace `~` with your WordPress base URL (site URL).

### That didn't work!
Then Redux isn't running or your theme/plugin developer has modified the core and embedded Redux. You'll need to install a
different version of Redux. We suggest [installing the WordPress.org plugin](install.md#wordpressorg-plugin).

## Ok, now what?
Once you have the full Support URL/Hash, you need to [post it on our issue tracker](https://github.com/ReduxFramework/redux-framework/issues).
