function autofocus(){
	document.getElementById("searchBar").focus();
}

function setBackground(){
	var bg = bgPath + bgList[Math.floor(Math.random() * bgList.length)];
	document.getElementById("background1").style.backgroundImage = "url(" + bg + ")";
	document.getElementById("background2").style.backgroundImage = "url(" + bg + ")";
}

function setForeground(){
	var fg = fgPath + fgList[Math.floor(Math.random() * fgList.length)];
	document.getElementById("photo").style.backgroundImage = "url(" + fg + ")";
}

function search(query)
{
	switch(query.substr(0,query.indexOf(' ')))
	{
		case "-a":
		query = query.substr(query.indexOf(' ')+1);
		window.location = "https://www.amazon.com/s?url=search-alias%3Daps&field-keywords=" + query;
		break;

		case "-A":
		query = query.substr(query.indexOf(' ')+1);
		window.location = "https://www.aliexpress.com/wholesale?catId=0&initiative_id=&SearchText=" + query;
		break;

		case "-e":
		query = query.substr(query.indexOf(' ')+1);
		window.location = "https://www.ebay.com/sch/i.html?_from=R40&_trksid=m570.l1313&_nkw=" + query;
		break;

		case "-y":
		query = query.substr(query.indexOf(' ')+1);
		window.location = "https://invidious.fdn.fr/search?q=" + query;
		break;

		case "-Y":
		query = query.substr(query.indexOf(' ')+1);
		window.location = "https://www.youtube.com/results?search_query=" + query;
		break;

		case "-i":
		query = query.substr(query.indexOf(' ')+1);
		window.location = "https://duckduckgo.com/?q=" + query + "&t=ffab&ia=images&iax=images";
		break;

		case "-q":
		query = query.substr(query.indexOf(' ')+1);
		window.location = "https://www.qwant.com/?q=" + query;
		break;

		case "-s":
		query = query.substr(query.indexOf(' ')+1);
		window.location = "https://www.startpage.com/do/dsearch?query=" + query;
		break;

		case "-x":
		query = query.substr(query.indexOf(' ')+1);
		window.location = "https://searx.info/?q=" + query + "&categories=general&language=en-US";
		break;

		default:
		window.location="https://duckduckgo.com/html?q=" + query;
	}
}

window.onload=function () {
	autofocus();
	setBackground();
	setForeground();
	
	searchinput = document.getElementById("searchBar");
	if(!!searchinput){
		searchinput.addEventListener("keypress", function(a){
			var key = a.keyCode;
			if(key == 13){
				var query = this.value;
				search(query);
			}
		});
	}
}