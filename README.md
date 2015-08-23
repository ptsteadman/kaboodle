# kaboodle
Put fake ads on your site to make it look legit.

### Installation
Insert the following script tag into the place where you want ads:

```html
<script src="https://s3-us-west-2.amazonaws.com/kaboodle/kaboodle.js" type="text/javascript"></script>
```

Ad creatives will be injected directly to your DOM, for free, without any pesky trackers!

### Options
Kaboodle will automatically adjust the number of creatives displayed based on the width
of the parent element.  By setting the `data-num-rows` attribute of the kaboodle script tag,
you can control the number of rows of creatives kaboodle will display.  By default, the number 
of rows is 2.

	<script data-num-rows="2" src="https://s3-us-west-2.amazonaws.com/kaboodle/kaboodle.js" type="text/javascript"></script>

More options soon.
