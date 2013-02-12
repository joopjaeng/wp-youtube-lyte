(function( ly ) {
d = document;

var sch="http";
if (bU.indexOf('https')!=-1) {sch+="s"}

ly.te = function() {
    if (!rn) {
	var rn=1;
	var iOs=navigator.userAgent.match(/(iphone|ipad|ipod)/i);
	lts = getElementsByClassName("lyMe", "div");
	for (var i = 0, lln = lts.length; i < lln; i += 1) {
	    p = lts[i];
	    vid = p.id.substring(4);
	    cN = p.className.replace(/lyMe/, "lyte")+ " lP";
	    p.className = cN;
	    sprite=(bU+"lytesprite.png");
	    addCss(".lyte .ctrl, .lyte .Rctrl, .lyte .Lctrl, .lyte .play { background-image: url("+sprite+"); }");

	    if (cN.indexOf('audio') === -1) {
		bgId="lyte_"+vid;
		thumb=document.getElementById(bgId).getAttribute("data-src");
		bgCss="#"+bgId+" { background-image: url("+thumb+"); }";
		addCss(bgCss);
	    }

            if (iOs === null) {
                p.onclick = ly.play;
	    } else {
	    	ly.play(p.id);
	    }
        }
    }
    var rn="";
}

function getQ(nD) {
	qsa="";
	if (rqs=nD.className.match(/qsa_(.*)\s/,"$1")) qsa=rqs[1].replace(/\\([\&\=\?])/g, "$1");
	return qsa;
}

ly.play = function(id) {
    if (typeof id === 'string') {
    	tH=d.getElementById(id);
		aP=0;
    } else {
    	tH=this;
		tH.onclick="";
		aP=1;
    }
    vid=tH.id.substring(4);

    hidef=0;
    if (tH.className.indexOf("hidef") !== -1) { hidef=1; }

    if (tH.className.indexOf("playlist") === -1) {
    	eU=sch+"://www.youtube.com/embed/" + vid + "?"
    } else {
    	eU=sch+"://www.youtube.com/embed/videoseries?list=" + vid + "&"
    }

    qsa=getQ(tH);

    if (tH.className.indexOf("audio") !== -1) { qsa+="&amp;autohide=0";aHgh="438";aSt="position:relative;top:-400px;" } else { aHgh=tH.clientHeight;aSt=""; }
    
	tH.innerHTML="<iframe id=\"iF_" + vid + "\" width=\"" + tH.clientWidth + "px\" height=\"" + aHgh + "px\" src=\""+eU+"autoplay="+aP+"&amp;wmode=opaque&amp;rel=0&amp;egm=0&amp;iv_load_policy=3&amp;hd="+hidef+qsa+"\" frameborder=\"0\" style=\"" + aSt + "\" allowfullscreen></iframe>"

    if(typeof tH.firstChild.getAttribute('kabl')=="string") tH.innerHTML="Please check Karma Blocker's config.";
}

function getElementsByClassName (className, tag, elm) {
    if (d.getElementsByClassName) {
        getElementsByClassName = function (className, tag, elm) {
            elm = elm || d;
            var elements = elm.getElementsByClassName(className),
                nodeName = (tag) ? new RegExp("\\b" + tag + "\\b", "i") : null,
                returnElements = [],
                current;
            for (var i = 0, il = elements.length; i < il; i += 1) {
                current = elements[i];
                if (!nodeName || nodeName.test(current.nodeName)) {
                    returnElements.push(current)
                }
            }
            return returnElements
        }
    } else if (d.evaluate) {
        getElementsByClassName = function (className, tag, elm) {
            tag = tag || "*";
            elm = elm || d;
            var classes = className.split(" "),
                classesToCheck = "",
                xhtmlNamespace = "http://www.w3.org/1999/xhtml",
                namespaceResolver = (d.documentElement.namespaceURI === xhtmlNamespace) ? xhtmlNamespace : null,
                returnElements = [],
                elements, node;
            for (var j = 0, jl = classes.length; j < jl; j += 1) {
                classesToCheck += "[contains(concat(' ', @class, ' '), ' " + classes[j] + " ')]"
            }
            try {
                elements = d.evaluate(".//" + tag + classesToCheck, elm, namespaceResolver, 0, null)
            } catch (e) {
                elements = d.evaluate(".//" + tag + classesToCheck, elm, null, 0, null)
            }
            while ((node = elements.iterateNext())) {
                returnElements.push(node)
            }
            return returnElements
        }
    } else {
        getElementsByClassName = function (className, tag, elm) {
            tag = tag || "*";
            elm = elm || d;
            var classes = className.split(" "),
                classesToCheck = [],
                elements = (tag === "*" && elm.all) ? elm.all : elm.getElementsByTagName(tag),
                current, returnElements = [],
                match;
            for (var k = 0, kl = classes.length; k < kl; k += 1) {
                classesToCheck.push(new RegExp("(^|\\s)" + classes[k] + "(\\s|$)"))
            }
            for (var l = 0, ll = elements.length; l < ll; l += 1) {
                current = elements[l];
                match = false;
                for (var m = 0, ml = classesToCheck.length; m < ml; m += 1) {
                    match = classesToCheck[m].test(current.className);
                    if (!match) {
                        break
                    }
                }
                if (match) {
                    returnElements.push(current)
                }
            }
            return returnElements
        }
    }
    return getElementsByClassName(className, tag, elm)
};
function addCss(cssCode) {
	var stEl = document.createElement("style");
	  stEl.type = "text/css";
	  if (stEl.styleSheet) {
		stEl.styleSheet.cssText = cssCode;
	  } else {
		stEl.appendChild(document.createTextNode(cssCode));
	  }
	  document.getElementsByTagName("head")[0].appendChild(stEl);
	}
}
( window.ly = window.ly || {} ));

(function(){
var w = window;
var d = document;

if(w.addEventListener) {
	w.addEventListener('load', ly.te, false);
	d.addEventListener('DomContentLoaded', function(){setTimeout("ly.te()",750)}, false);
} else {
	w.onload=ly.te;
	setTimeout("ly.te()",1000);
}}())
