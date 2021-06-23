# WordPress.org Submissions

As of December 2014, the WordPress.org theme submission guidelines require Redux be embedded and not installed as a plugin. 
They also require that all aspects of tracking be removed from themes, even opt-in. Redux has an opt-in tracking 
platform built in to help us gather statistics about users who use Redux. We use this to debug our code and learn of 
plugin conflict impact.

There is a new argument titled `disable_tracking`. When set to true, the `Redux_Statistics` class is not called. A develiper can then delete this class and be fully compliant with WordPress.org requirements. The location of this file is found below.

|Redux Version|Path|
|--|--|
|<= 3.7|`~/ReduxCore/inc/classes/tracking.php`|
|>= 4|`~/ReduxCore/inc/classes/class-redux-statistics.php`|
