---
title: "Removing the Demo Notice"
---

# Removing the Demo Mode Notice
The Redux Framework plugin ships with a sample config.  This permits folks to try Redux out without effort. 
This may be less than desirable if you intend to ship Redux with a premium theme or product. The demo items are easily 
disabled with the code block below.

```php
Redux::disable_demo();
```

Place that anywhere in your theme or plugin and all demo mode references will be hidden.
