(function(window, undefined){
/* Options */


  /* most recently parsed script */
  var scripts = document.getElementsByTagName("script");
  var index = scripts.length - 1;
  var kaboodleTag = scripts[index];
  var src = kaboodleTag.src;
  var kaboodleRoot = src.substring(0, src.lastIndexOf("/"));
  var kaboodleStyle = document.createElement("link") 
  kaboodleStyle.href = kaboodleRoot + "/kaboodle.css"; 
  kaboodleStyle.rel = "stylesheet"; 
  kaboodleStyle.type = "text/css"; 
  document.head.appendChild(kaboodleStyle);

  var numRows = kaboodleTag.dataset.numRows || 2;
  var creatives = [];
  creatives.push({"title": "Is Donald Trump The Best Candidate for 2016?  Vote Here.", "creative":  "/creatives/trump.jpg", "href": "http://newsmax.com"});
  creatives.push({"title": "These Photos From The Past Are Bitter Sweet", "creative":  "/creatives/rifle.jpg", "href": "http://buzzlamp.com"});
  creatives.push({"title": "Most Satisfied People Don't Wait For What They Want, They Go Get It", "creative":  "/creatives/satisfied.jpg", "href": "http://elitedaily.com/life/satisfied-people-dont-wait-want-go-get"});
  creatives.push({"title": "10 Tips To Learn Any Language From The Genius Who Speaks 9", "creative":  "/creatives/genius.jpg", "href": "http://elitedaily.com/life/satisfied-people-dont-wait-want-go-get"});
  creatives.push({"title": "A Lioness Captures A Baby Baboon And Does The LAST Thing You'd Expect", "creative":  "/creatives/lioness.jpg", "href": "http://www.littlebudha.com/baby-baboon-lion-mother"});
  creatives.push({"title": "Why 'Who Is This?' Is Literally The Most Insulting Test Ever (Video)", "creative":  "/creatives/whois.jpg", "href": "http://elitedaily.com/humor/who-is-this-text-most-insulting-text-video/"});
  creatives.push({"title": "The Six Worst Types of Coworkers: And How To Deal With Them", "creative":  "/creatives/coworker.jpg", "href": "http://elitedaily.com"});

  var kaboodleModule = document.createElement("div");
  kaboodleModule.className = "kaboodle-module";
  kaboodleTag.parentNode.insertBefore(kaboodleModule, kaboodleTag.nextSibling);
  /* most recently added kaboodle tag, i.e. this one */
  var kaboodles = document.getElementsByClassName("kaboodle-module");
  var index = kaboodles.length - 1;
  var kaboodleModuleNode = kaboodles[index];

  var kaboodleHeader = document.createElement("a");
  kaboodleHeader.className = "kaboodle-header";
  kaboodleHeader.href = 'https://github.com/ptsteadman/kaboodle';
  kaboodleHeader.innerHTML = "Sponsored Links By Kaboodle";
  kaboodleModuleNode.appendChild(kaboodleHeader);
  var kaboodleItems = document.createElement("div");
  kaboodleItems.className = "kaboodle-items";
  kaboodleModuleNode.appendChild(kaboodleItems);
  randomize(creatives);

  window.addEventListener("resize", loadItems, false);

  function loadItems (){
    while (kaboodleItems.firstChild) {
          kaboodleItems.removeChild(kaboodleItems.firstChild);
    }

    var numItems;
    var width = kaboodleModuleNode.offsetWidth;
    var numCols = Math.floor(width / 240.0);
    for(var i = 0; i < numCols * numRows; i++){
      var creative = creatives[i % creatives.length];
      var kaboodleItemLink = document.createElement("a");
      kaboodleItemLink.href = creative["href"]; 
      kaboodleItems.appendChild(kaboodleItemLink);
      var kaboodleItemWrapper = document.createElement("div");
      kaboodleItemWrapper.className = "kaboodle-item"; 
      kaboodleItemLink.appendChild(kaboodleItemWrapper);
      var kaboodleItemImg = document.createElement("img");
      kaboodleItemImg.src = kaboodleRoot + creative["creative"];
      kaboodleItemWrapper.appendChild(kaboodleItemImg);
      var kaboodleItemCaption = document.createElement("p");
      kaboodleItemCaption.innerHTML = creative["title"];
      kaboodleItemWrapper.appendChild(kaboodleItemCaption);
    }

  }


  loadItems();

  function randomize(creatives){
    for(var i = 0; i < creatives.length; i++){
      var swapIndex = getRandomInt(0, creatives.length);
      var tmp = creatives[swapIndex];
      creatives[swapIndex] = creatives[i];
      creatives[i] = tmp;
    }
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

})(window);
