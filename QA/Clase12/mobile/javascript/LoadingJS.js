document.write("<style>"+
	"@keyframes loadingAnimate{from {-webkit-transform: rotateY(0deg) scale(0.8);-o-transform: rotateY(0deg) scale(0.8);-ms-transform: rotateY(0deg) scale(0.8);-moz-transform: rotateY(0deg) scale(0.8);transform: rotateY(0deg) scale(0.8);}to {-webkit-transform: rotateY(-180deg) scale(0.8);-o-transform: rotateY(-180deg) scale(0.8);-ms-transform: rotateY(-180deg) scale(0.8);-moz-transform: rotateY(-180deg) scale(0.8);transform: rotateY(-180deg) scale(0.8);}}"+
	"@-webkit-keyframes loadingAnimate{from {-webkit-transform: rotateY(0deg) scale(0.8);-o-transform: rotateY(0deg) scale(0.8);-ms-transform: rotateY(0deg) scale(0.8);-moz-transform: rotateY(0deg) scale(0.8);transform: rotateY(0deg) scale(0.8);}to {-webkit-transform: rotateY(-180deg) scale(0.8);-o-transform: rotateY(-180deg) scale(0.8);-ms-transform: rotateY(-180deg) scale(0.8);-moz-transform: rotateY(-180deg) scale(0.8);transform: rotateY(-180deg) scale(0.8);}}"+
	".loadingRun{-webkit-animation : loadingAnimate 1.2s infinite;animation : loadingAnimate 1.2s infinite;}</style>");

window.waitForLoading = true;
var LoadingJS = function(){
	this.initConfig();
	this.initHtml();
	this.initCss();
	this.startLoading();

	this.onResize();
	var self = this;
	window.onresize =function(){
		self.onResize();
	};

	window.setTimeout(function(){window.waitForLoading = false;},250);
}

LoadingJS.prototype = {

	initHtml : function(){
		this.stop = false;

		this.instance = document.createElement("div");
		this.image = document.createElement("img");
		this.image.src = this.loadingPicture;
		this.title = document.createElement("p");

		this.bg = document.createElement("div");
		this.bg.setAttribute("style", "transform:scale(1);");

		if(this.loadingPicture) this.instance.appendChild(this.image);

		this.initAnimationHtml();

		this.instance.appendChild(this.title);
		this.bg.appendChild(this.instance);
		document.body.appendChild(this.bg);
	},

	loadingSvg: function(){
		// this.loadImageUrl = "<svg t=\"1525916222299\" class=\"icon\" style=\"\" viewBox=\"130 0 800 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2478\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"49\" height=\"56\"><defs><style type=\"text/css\"></style></defs><path d=\"M835.55027 48.761905C876.805122 48.761905 910.222223 81.441158 910.222223 121.753604L910.222223 902.095C910.222223 902.095 910.222223 942.409011 876.805 975.238095L113.777778 975.238095 113.777778 24.380952 88.888889 48.761905 835.55027 48.761905ZM64 0 64 24.380952 64 1024L960 1024C835.55027 1024 904.277615 1024 960 969.325498L960 54.49204C960 54.49204 904.277615 0 835.55027 0L88.888889 0 64 0Z\" p-id=\"2479\"></path><path d=\"M775.164361 219.428572C788.910114 219.428572 800.05325 208.512847 800.05325 195.047619 800.05325 181.582391 788.910114 170.666667 775.164361 170.666667L263.111111 170.666667C249.365357 170.666667 238.222222 181.582391 238.222222 195.047619 238.222222 208.512847 249.365357 219.428572 263.111111 219.428572L775.164361 219.428572Z\" p-id=\"2481\"></path><path d=\"M775.164361 365.714285C788.910114 365.714285 800.05325 354.798562 800.05325 341.333333 800.05325 327.868105 788.910114 316.952382 775.164361 316.952382L263.111111 316.952382C249.365357 316.952382 238.222222 327.868105 238.222222 341.333333 238.222222 354.798562 249.365357 365.714285 263.111111 365.714285L775.164361 365.714285Z\" p-id=\"2482\"></path><path d=\"M775.164361 536.380951C788.910114 536.380951 800.05325 525.465229 800.05325 512 800.05325 498.534771 788.910114 487.619049 775.164361 487.619049L263.111111 487.619049C249.365357 487.619049 238.222222 498.534771 238.222222 512 238.222222 525.465229 249.365357 536.380951 263.111111 536.380951L775.164361 536.380951Z\" p-id=\"2483\"></path></svg>";

		var loadImageUrl = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
		loadImageUrl.setAttribute("t", "1525916222299");
		loadImageUrl.setAttribute("class", "icon");
		loadImageUrl.setAttribute("style", "");
		loadImageUrl.setAttribute("viewBox", "130 0 800 1024");
		loadImageUrl.setAttribute("version", "1.1");
		loadImageUrl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
		loadImageUrl.setAttribute("p-id", "2478");
		loadImageUrl.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
		loadImageUrl.setAttribute("width", "49");
		loadImageUrl.setAttribute("height", "56");

		var defs = document.createElementNS("http://www.w3.org/2000/svg", 'defs');
		var style = document.createElementNS("http://www.w3.org/2000/svg", 'style');
		style.setAttribute("type", "text/css");
		var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		path1.setAttribute("d", "M835.55027 48.761905C876.805122 48.761905 910.222223 81.441158 910.222223 121.753604L910.222223 902.095C910.222223 902.095 910.222223 942.409011 876.805 975.238095L113.777778 975.238095 113.777778 24.380952 88.888889 48.761905 835.55027 48.761905ZM64 0 64 24.380952 64 1024L960 1024C835.55027 1024 904.277615 1024 960 969.325498L960 54.49204C960 54.49204 904.277615 0 835.55027 0L88.888889 0 64 0Z");
		path1.setAttribute("p-id", "2479");

		var path2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		path2.setAttribute("d", "M775.164361 219.428572C788.910114 219.428572 800.05325 208.512847 800.05325 195.047619 800.05325 181.582391 788.910114 170.666667 775.164361 170.666667L263.111111 170.666667C249.365357 170.666667 238.222222 181.582391 238.222222 195.047619 238.222222 208.512847 249.365357 219.428572 263.111111 219.428572L775.164361 219.428572Z");
		path2.setAttribute("p-id", "2481");

		var path3 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		path3.setAttribute("d", "M775.164361 365.714285C788.910114 365.714285 800.05325 354.798562 800.05325 341.333333 800.05325 327.868105 788.910114 316.952382 775.164361 316.952382L263.111111 316.952382C249.365357 316.952382 238.222222 327.868105 238.222222 341.333333 238.222222 354.798562 249.365357 365.714285 263.111111 365.714285L775.164361 365.714285Z");
		path3.setAttribute("p-id", "2482");

		var path4 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
		path4.setAttribute("d", "M775.164361 536.380951C788.910114 536.380951 800.05325 525.465229 800.05325 512 800.05325 498.534771 788.910114 487.619049 775.164361 487.619049L263.111111 487.619049C249.365357 487.619049 238.222222 498.534771 238.222222 512 238.222222 525.465229 249.365357 536.380951 263.111111 536.380951L775.164361 536.380951Z");
		path4.setAttribute("p-id", "2483");

		defs.appendChild(style);
		loadImageUrl.appendChild(defs);
		loadImageUrl.appendChild(path1);
		loadImageUrl.appendChild(path2);
		loadImageUrl.appendChild(path3);
		loadImageUrl.appendChild(path4);

		return loadImageUrl;
	},

	initAnimationHtml : function(){
		if(!document.createElementNS) return;

		this.loadBox = document.createElement("div");
		var img1 = this.loadingSvg();
		var img2 = this.loadingSvg();
		this.img3 = this.loadingSvg();
		this.img3.setAttribute("class", "loadingRun");

		this.img3.setAttribute("style", (
			"position : absolute;" +
			"left : 20px;" +
			"top : 0;" +
			"z-index : -1;" +
			"-webkit-transform-origin : 0 0;" +
			"-o-transform-origin : 0 0;" +
			"-ms-transform-origin : 0 0;" +
			"-moz-transform-origin : 0 0;" +
			"transform-origin : 0 0;" +
			"fill :"  + this.loadingCaptionColor + ";"
		));

		img2.setAttribute("style", (
			"position : absolute;" +
			"left : 20px;" +
			"top : 0;" +
			"-webkit-transform:rotateY(180deg) scale(0.8);" +
			"-o-transform:rotateY(180deg) scale(0.8);" +
			"-ms-transform:rotateY(180deg) scale(0.8);" +
			"-moz-transform:rotateY(180deg) scale(0.8);" +
			"transform:rotateY(180deg) scale(0.8);" +
			"-webkit-transform-origin : 0 0;" +
			"-o-transform-origin : 0 0;" +
			"-ms-transform-origin : 0 0;" +
			"-moz-transform-origin : 0 0;" +
			"transform-origin : 0 0;" +
			"fill : " + this.loadingCaptionColor + ";"
		));

		img1.setAttribute("style", (
			"position : absolute;" +
			"left : 20px;" +
			"top : 0;" +
			"-webkit-transform:rotateY(0) scale(0.8);" +
			"-o-transform:rotateY(0) scale(0.8);" +
			"-ms-transform:rotateY(0) scale(0.8);" +
			"-moz-transform:rotateY(0) scale(0.8);" +
			"transform:rotateY(0) scale(0.8);" +
			"-webkit-transform-origin : 0 0;" +
			"-o-transform-origin : 0 0;" +
			"-ms-transform-origin : 0 0;" +
			"-moz-transform-origin : 0 0;" +
			"transform-origin : 0 0;" +
			"fill : " + this.loadingCaptionColor + ";"
		));

		this.loadBox.appendChild(img1);
		this.loadBox.appendChild(img2);
		this.loadBox.appendChild(this.img3);
		this.instance.appendChild(this.loadBox);
	},

	initConfig : function(){
		  this.loadingCaption, this.loadingCaptionColor, this.loadingPicture;
		  try{
		  	this.loadingCaption = bookConfig.loadingCaption ? bookConfig.loadingCaption : "Loading";
		  	this.loadingCaptionColor = bookConfig.loadingCaptionColor ? bookConfig.loadingCaptionColor : "#DDDDDD";
		  	this.loadingBackground = bookConfig.loadingBackground ? bookConfig.loadingBackground : "#1F2232";
		  	this.loadingPicture = bookConfig.loadingPicture ? bookConfig.loadingPicture : "";
		  }catch(err){
		  	this.loadingCaption = "Loading";
		  	this.loadingCaptionColor = "#BDBDBD";
		  	this.loadingBackground = "#1F2233";
		  	this.loadingPicture = "";
		  }
	},

	startLoading : function(){
		this.title.innerHTML = document.title;
	},

	destroy : function(){
		if(global.isIE8()||global.isIE9()){
			$(this.bg).animate({"opacity":"0"},0.6,function(){
				$("body>style").html("");
				$(this.bg).remove();
				$("body").css({"background-color" : ""});
			}.bind(this));
		}else{
			animateOnce($(this.bg) , {"opacity":"0"} , 0.6 ,function(){
				$(this.img3).attr("class", "");
				$("body>style").html("");
				$(this.bg).remove();
				$(this.image).attr("src", "");
				$("body").css({"background-color" : ""});
			}.bind(this));
		}

	},

	initCss : function(){
		document.getElementsByTagName("html")[0].setAttribute("style",(
			"margin : 0;" +
			"padding : 0;" +
			"width : 100%;" +
			"height : 100%;"
		));

		document.body.setAttribute("style", (
			"margin : 0;" +
			"padding : 0;" +
			"width : 100%;" +
			"height : 100%;" +
			"position : fixed;" +
			"background-color :" + this.loadingBackground + ";"
		));

		this.bg.setAttribute("style", (
			"margin : 0;" +
			"padding : 0;" +
			"width : 100%;" +
			"height : 100%;" +
			"position : fixed;" +
			"background-color:"  + this.loadingBackground + ";"
		));

		this.instance.setAttribute("style", (
			"width : 100%;" +
			"height : 100%;" +
			"color :" +  this.loadingCaptionColor + ";" +
			"text-align : center;" +
			"vertical-align : middle;" +
			"font-family : Tahoma;" +
		  "position : relative;"

		));

		this.image.setAttribute("style", (
			"position : absolute;" +
			"bottom : 75%;" +
			"left : 50%;" +
			"-webkit-transform : translate(-50% , 50%);" +
		  "-moz-transform : translate(-50% , 50%);" +
		  "-ms-transform : translate(-50% , 50%);" +
		  "-o-transform : translate(-50% , 50%);" +
			"transform : translate(-50% , 50%);" +
			"margin-bottom : 28px;" +
			"max-width : 40%;" +
			"max-height : 30%;"
		));

		if(window.innerHeight <= 300) this.image.style.display = "none";

		var titleTran = "translate(-50%, 20px)";
		var loadingBoxTran = "translate(-50% , -48.8px)";

		// if(this.loadingPicture) {
			// var titleTran = "translate(-50%, 40px)";
			// var loadingBoxTran = "translate(-50% , -50%)";
		// }

		this.title.setAttribute("style", (
			"font-family:Helvetica,Arial,sans serif;" +
		  "font-size : 28px;" +
		  "position : absolute;" +
		  "top : 50%;" +
		  "left : 50%;" +
		  "-webkit-transform :"  + titleTran + ";" +
		  "-moz-transform :"  + titleTran + ";" +
		  "-ms-transform :" + titleTran + ";" +
		  "-o-transform :" + titleTran + ";" +
			"transform :"  +titleTran + ";" +
		  "margin : 0;" +
		  "padding : 0;"
		));

		if(this.loadBox) this.loadBox.setAttribute("style", (
			"position:relative;" +
			"perspective:200px;" +
			"-webkit-transform-style:preserve-3d;" +
			"-o-transform-style:preserve-3d;" +
			"-ms-transform-style:preserve-3d;" +
			"-moz-transform-style:preserve-3d;" +
			"transform-style:preserve-3d;" +
			"position : absolute;" +
			"width : 39.2px;" +
			"height : 44.8px;" +
			"left : 50%;" +
			"top : 50%;" +
			"-webkit-transform : " +loadingBoxTran + ";" +
		  "-moz-transform : " +loadingBoxTran + ";" +
		  "-ms-transform : " +loadingBoxTran + ";" +
		  "-o-transform : " +loadingBoxTran + ";" +
			"transform : " + loadingBoxTran + ";" +
		  "padding : 0;"
		));
	},

	onResize : function(){}

}

var jsLoadingBar = new LoadingJS();
