---
title: "Using Another Icon Font"
---

# Using Another Icon Web Font
Redux uses Elusive Icons in our panel. Why? @aristath, a good friend of the Redux team designed the icon pack. As a 
result, we can use any icon we want.  We understand our choice in icon pack may not match or suit everyone's needs. 
This is why we've made it easy to add a new icon pack. Here's how:

```php
$opt_name = 'YOUR_OPT_NAME'; # TODO - Replace with your opt_name
function new_icon_font() {
    // Uncomment this to remove elusive icon from the panel completely
    //wp_deregister_style( 'redux-elusive-icon' );
    //wp_deregister_style( 'redux-elusive-icon-ie7' );

    wp_register_style(
        'redux-font-awesome',
        '//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css',
        array(),
        time(),
        'all'
    );  
    wp_enqueue_style( 'redux-font-awesome' );
}
add_action( 'redux/page/' . $opt_name . '/enqueue', 'new_icon_font' );
```

Now to use the added icons, you can do the following for a [section](../../configuration/objects/section.md) declaration:

```php
Redux::addSection( 'OPT_NAME', array( 
    'id'     => 'icon_section',
    'title'  => esc_html__('Home Settings', 'redux-framework-demo'),
    'header' => esc_html__('Welcome to the Redux Framework Demo', 'redux-framework-demo'),
    'desc'   => esc_html__('Description goes here.', 'redux-framework-demo'),
    'icon'   => 'fa fa-bell-o',
    'fields' => array()
) );
```

That's it! You're good to go!