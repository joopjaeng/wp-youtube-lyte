if (typeof bU!=="string") var bU="http://futtta.be/lyte/";function lyte(){lytes=getElementsByClassName("lyte");for(var i=0;i<lytes.length;i++){lyte_id=lytes[i].id;p=document.getElementById(lyte_id);jsonUrl="http://gdata.youtube.com/feeds/api/videos/"+lyte_id+"?fields=id,title&alt=json-in-script&callback=parseMe";loadScript(jsonUrl);pl=document.createElement('div');p.appendChild(pl);p.onclick=nolyte;setStyle(p,'margin:5px 0px;width:480px;height:385px;background-color:#000;');pl.id="lyte_"+lyte_id;setStyle(pl,"cursor:pointer;text-align:center;overflow:hidden;height:385px;width:480px;position:relative;margin:0px;");pl.innerHTML="<img src=\""+bU+"play.png\" alt=\"Click to play this video\" style=\"margin-top: 165px;opacity:0.8;\" onmouseover=\"this.style.opacity=1;\" onmouseout=\"this.style.opacity=0.8;\"/><img src=\""+bU+"controls.png\" width=\"100%\" alt=\"\" style=\"position:absolute; left:0px; bottom:0px; max-width:480px; padding:0px; spacing:0px;\"/>";pl.style.background="#000 url(http://img.youtube.com/vi/"+lyte_id+"/0.jpg) no-repeat top center"}}function nolyte(){this.onclick="";this.innerHTML="<embed src=\"http://www.youtube.com/v/"+this.id+"&autoplay=1&rel=0&egm=0\" type=\"application/x-shockwave-flash\" id=\"lyte_"+this.id+"\" wmode=\"transparent\" width=\"480\" height=\"385\" allowscriptaccess=\"always\"></embed>"}function parseMe(r){title=r.entry.title.$t;idu=r.entry.id.$t;p=document.getElementById("lyte_"+idu.substring((idu.length-11)));c=document.createElement('div');p.appendChild(c);setStyle(c,"position:relative;margin:-210px 5px;padding:5px;background-color:rgba(0,0,0,0.3);-moz-border-radius:7px;-webkit-border-radius:7px;border-radius:7px");t=document.createElement('div');c.appendChild(t);s="font-weight:bold;font-size:16px;color:#ffffff;font-family:sans-serif;text-align:left;";setStyle(t,s);t.innerHTML=title;}function setStyle(e,s){if(typeof e.setAttribute==="function")e.setAttribute('style',s);else if(typeof e.style.setAttribute==="object")e.style.setAttribute('cssText',s)}function loadScript(url){scr=document.createElement('script');scr.src=url;scr.type='text/javascript';document.getElementsByTagName('head')[0].appendChild(scr)}var getElementsByClassName=function(className,tag,elm){if(document.getElementsByClassName){getElementsByClassName=function(className,tag,elm){elm=elm||document;var elements=elm.getElementsByClassName(className),nodeName=(tag)?new RegExp("\\b"+tag+"\\b","i"):null,returnElements=[],current;for(var i=0,il=elements.length;i<il;i+=1){current=elements[i];if(!nodeName||nodeName.test(current.nodeName)){returnElements.push(current)}}return returnElements}}else if(document.evaluate){getElementsByClassName=function(className,tag,elm){tag=tag||"*";elm=elm||document;var classes=className.split(" "),classesToCheck="",xhtmlNamespace="http://www.w3.org/1999/xhtml",namespaceResolver=(document.documentElement.namespaceURI===xhtmlNamespace)?xhtmlNamespace:null,returnElements=[],elements,node;for(var j=0,jl=classes.length;j<jl;j+=1){classesToCheck+="[contains(concat(' ', @class, ' '), ' "+classes[j]+" ')]"}try{elements=document.evaluate(".//"+tag+classesToCheck,elm,namespaceResolver,0,null)}catch(e){elements=document.evaluate(".//"+tag+classesToCheck,elm,null,0,null)}while((node=elements.iterateNext())){returnElements.push(node)}return returnElements}}else{getElementsByClassName=function(className,tag,elm){tag=tag||"*";elm=elm||document;var classes=className.split(" "),classesToCheck=[],elements=(tag==="*"&&elm.all)?elm.all:elm.getElementsByTagName(tag),current,returnElements=[],match;for(var k=0,kl=classes.length;k<kl;k+=1){classesToCheck.push(new RegExp("(^|\\s)"+classes[k]+"(\\s|$)"))}for(var l=0,ll=elements.length;l<ll;l+=1){current=elements[l];match=false;for(var m=0,ml=classesToCheck.length;m<ml;m+=1){match=classesToCheck[m].test(current.className);if(!match){break}}if(match){returnElements.push(current)}}return returnElements}}return getElementsByClassName(className,tag,elm)};lyte();
