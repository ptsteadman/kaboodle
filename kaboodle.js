var scripts = document.getElementsByTagName("script");
var index = scripts.length - 1;
var src = scripts[index].src;
var kaboodleRoot = src.substring(0, src.lastIndexOf("/"));

document.write("<link rel='stylesheet' href='" + kaboodleRoot + "/kaboodle.css'>");

window._kreatives = window._kreatives || [];
window._kreatives.push({"title": "Is Donald Trump The Best Candidate for 2016?  Vote Here.", "creative":  "/creatives/trump.jpg", "href": "http://newsmax.com"});
window._kreatives.push({"title": "These Photos From The Past Are Bitter Sweet", "creative":  "/creatives/rifle.jpg", "href": "http://buzzlamp.com"});
window._kreatives.push({"title": "Most Satisfied People Don't Wait For What They Want, They Go Get It", "creative":  "/creatives/satisfied.jpg", "href": "http://elitedaily.com/life/satisfied-people-dont-wait-want-go-get"});
window._kreatives.push({"title": "10 Tips To Learn Any Language From The Genius Who Speaks 9", "creative":  "/creatives/genius.jpg", "href": "http://elitedaily.com/life/satisfied-people-dont-wait-want-go-get"});
window._kreatives.push({"title": "A Lioness Captures A Baby Baboon And Does The LAST Thing You'd Expect", "creative":  "/creatives/lioness.jpg", "href": "http://www.littlebudha.com/baby-baboon-lion-mother"});
window._kreatives.push({"title": "Why 'Who Is This?' Is Literally The Most Insulting Test Ever (Video)", "creative":  "/creatives/whois.jpg", "href": "http://elitedaily.com/humor/who-is-this-text-most-insulting-text-video/"});
window._kreatives.push({"title": "The Six Worst Types of Coworkers: And How To Deal With Them", "creative":  "/creatives/coworker.jpg", "href": "http://elitedaily.com"});

document.write("<div class='kaboodle-module'>");
document.write("<a href='https://github.com/ptsteadman/kaboodle'>Sponsored Links From Kaboodle</a>");
for(var i = 0; i < 6; i++){
  var creative = window._kreatives[i];
  document.write("<div class='kaboodle-item'>");
  document.write("<img src='" + kaboodleRoot + creative["creative"] + "'/>");
  document.write("<p>" + creative["title"] + "</p>");
  document.write("</div>");
}

document.write("<br>");
document.write("</div>");
