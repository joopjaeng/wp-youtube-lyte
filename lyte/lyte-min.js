var doc=document;var cI='lytecss';if(!doc.getElementById(cI)){var lk=doc.createElement('link');lk.id=cI;lk.rel='stylesheet';lk.type='text/css';lk.href=bU+'lyte.css';doc.getElementsByTagName('head')[0].appendChild(lk);}function lyte(){lytes=getElementsByClassName("lyte","div");for(var i=0;i<lytes.length;i++){lyte_id=lytes[i].id;p=doc.getElementById(lyte_id);p.className="lyte lP";jsonUrl="http://gdata.youtube.com/feeds/api/videos/"+lyte_id+"?fields=id,title&alt=json-in-script&callback=parseMe";loadScript(jsonUrl);pl=doc.createElement('div');p.appendChild(pl);p.onclick=nolyte;setStyle(p,'width:'+pW+'px;height:'+pH+'px;');pl.id="lyte_"+lyte_id;pl.className="pL";setStyle(pl,'height:'+pH+'px;width:'+pW+'px;');pl.innerHTML="<img src=\""+bU+"play.png\" alt=\"Click to play this video\" style=\"margin-top:"+((pH/2)-30)+"px;opacity:0.8;\" onmouseover=\"this.style.opacity=1;\" onmouseout=\"this.style.opacity=0.8;\"/><img src=\""+bU+"controls-"+pW+".png\" width=\"100%\" alt=\"\" class=\"ctrl\" style=\"max-width:"+pW+"px;\"/>";if(pH>385){vA="center"}else{vA="top"};pl.style.background="#000 url(http://img.youtube.com/vi/"+lyte_id+"/0.jpg) no-repeat center "+vA}}function nolyte(){this.onclick="";this.innerHTML="<embed src=\"http://www.youtube-nocookie.com/v/"+this.id+"&autoplay=1&rel=0&egm=0&fs=1\" type=\"application/x-shockwave-flash\" allowfullscreen=\"true\" id=\"lyte_"+this.id+"\" wmode=\"transparent\" width=\""+pW+"\" height=\""+pH+"\" allowscriptaccess=\"always\"></embed>"}function parseMe(r){title=r.entry.title.$t;idu=r.entry.id.$t;p=doc.getElementById("lyte_"+idu.substring((idu.length-11)));c=doc.createElement('div');c.className="tC";p.appendChild(c);setStyle(c,"margin:-"+((pH/2)+15)+"px 5px;");t=doc.createElement('div');t.className="tT";c.appendChild(t);t.innerHTML=title;}function setStyle(e,s){if(typeof e.setAttribute==="function")e.setAttribute('style',s);else if(typeof e.style.setAttribute==="object")e.style.setAttribute('cssText',s)}function loadScript(url){scr=doc.createElement('script');scr.src=url;scr.type='text/javascript';doc.getElementsByTagName('head')[0].appendChild(scr)}var getElementsByClassName=function(className,tag,elm){if(doc.getElementsByClassName){getElementsByClassName=function(className,tag,elm){elm=elm||doc;var elements=elm.getElementsByClassName(className),nodeName=(tag)?new RegExp("\\b"+tag+"\\b","i"):null,returnElements=[],current;for(var i=0,il=elements.length;i<il;i+=1){current=elements[i];if(!nodeName||nodeName.test(current.nodeName)){returnElements.push(current)}}return returnElements}}else if(doc.evaluate){getElementsByClassName=function(className,tag,elm){tag=tag||"*";elm=elm||doc;var classes=className.split(" "),classesToCheck="",xhtmlNamespace="http://www.w3.org/1999/xhtml",namespaceResolver=(doc.documentElement.namespaceURI===xhtmlNamespace)?xhtmlNamespace:null,returnElements=[],elements,node;for(var j=0,jl=classes.length;j<jl;j+=1){classesToCheck+="[contains(concat(' ', @class, ' '), ' "+classes[j]+" ')]"}try{elements=doc.evaluate(".//"+tag+classesToCheck,elm,namespaceResolver,0,null)}catch(e){elements=doc.evaluate(".//"+tag+classesToCheck,elm,null,0,null)}while((node=elements.iterateNext())){returnElements.push(node)}return returnElements}}else{getElementsByClassName=function(className,tag,elm){tag=tag||"*";elm=elm||doc;var classes=className.split(" "),classesToCheck=[],elements=(tag==="*"&&elm.all)?elm.all:elm.getElementsByTagName(tag),current,returnElements=[],match;for(var k=0,kl=classes.length;k<kl;k+=1){classesToCheck.push(new RegExp("(^|\\s)"+classes[k]+"(\\s|$)"))}for(var l=0,ll=elements.length;l<ll;l+=1){current=elements[l];match=false;for(var m=0,ml=classesToCheck.length;m<ml;m+=1){match=classesToCheck[m].test(current.className);if(!match){break}}if(match){returnElements.push(current)}}return returnElements}}return getElementsByClassName(className,tag,elm)};lyte();
