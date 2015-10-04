# kaboodle
Put fake ads on your site to make it look legit.

__Before:__
![Before.](https://github.com/ptsteadman/kaboodle/blob/master/before.png?raw=true)

__After:__
![After.](https://github.com/ptsteadman/kaboodle/blob/master/after.png?raw=true)

### Installation
Insert the following script tag into the place where you want ads:

```html
<script src="https://s3-us-west-2.amazonaws.com/kaboodle/kaboodle.js" type="text/javascript"></script>
```

Ad creatives will be injected directly to your DOM, for free, without any pesky trackers!

### Join Kaboodle

If you have a weird or interesting website, create a pull request containing the
ad creative (approx. 210px x 176px), the clickthrough URL, and the caption.  As
long as it's weird enough and seems legit, it'll be added to the CDN.

### Options

Kaboodle will automatically adjust the number of creatives displayed based on
the width of the parent element.  By setting the `data-num-rows` attribute of
the kaboodle script tag, you can control the number of rows of creatives
kaboodle will display.  By default, the number of rows is 2.

```html 
<script data-num-rows="2"
src="https://s3-us-west-2.amazonaws.com/kaboodle/kaboodle.js"
type="text/javascript"></script> 
```

More options soon.

###Analytics

If you have Google Analytics, kaboodle will automatically send tracking events
when users click on kaboodle 'ads'.  These events can be viewed in the `Behavior > Events > Overview` section of GA.

### About/License
Created for [Best Stories Online](http://beststoriesonline.com).  MIT License.
