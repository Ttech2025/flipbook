	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#323232";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#C6C6C6";bookConfig.toolbarAlwaysShow="No";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#27181A";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Hide";shareObj = [];bookConfig.isInsertFrameLinkEnable="Show";bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Hide";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Hide";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="1000";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Show";bookConfig.enableDownload="Yes";bookConfig.DownloadURL="files/downloads/CLASE 9.pdf";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.MagnifierButtonVisible="Hide";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="10";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="10";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="No";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Yes";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#441342";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=16;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2543;;bookConfig.securityType="1";bookConfig.CreatedTime ="250807185918";bookConfig.bookTitle="UX - Clase 09";bookConfig.bookmarkCR="ea3fa1b484985be27f18ffb837dfd31d18f006a5";bookConfig.productName="Flip PDF Corporate Edition";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [{ language : "English",btnFirstPage:"First",btnNextPage:"Next Page",btnLastPage:"Last",btnPrePage:"Previous Page",btnDownload:"Download",btnPrint:"Print",btnSearch:"Search",btnClearSearch:"Clear",frmSearchPrompt:"Clear",btnBookMark:"Table of contents",btnHelp:"Help",btnHome:"Home",btnFullScreen:"Enable FullScreen",btnDisableFullScreen:"Disable FullScreen",btnSoundOn:"Sound On",btnSoundOff:"Sound Off",btnShareEmail:"Share",btnSocialShare:"Social Share",btnZoomIn:"Zoom In",btnZoomOut:"Zoom Out",btnDragToMove:"Move by mouse drag",btnAutoFlip:"Auto Flip",btnStopAutoFlip:"Stop Auto Flip",btnGoToHome:"Return Home",frmHelpCaption:"Help",frmHelpTip1:"Double click to zoom in or out",frmHelpTip2:"Drag the page corner to view",frmPrintCaption:"Print",frmPrintBtnCaption:"Print",frmPrintPrintAll:"Print All Pages",frmPrintPrintCurrentPage:"Print Current Page",frmPrintPrintRange:"Print Range",frmPrintExampleCaption:"Example: 2,5,8-26",frmPrintPreparePage:"Preparing Page:",frmPrintPrintFailed:"Print Failed:",pnlSearchInputInvalid:"(Minimal request length is 3 symbols)",loginCaption:"Login",loginInvalidPassword:"Not a valid password!",loginPasswordLabel:"Password:",loginBtnLogin:"Login",loginBtnCancel:"Cancel",btnThumb:"Thumbnails",lblPages:"Pages:",lblPagesFound:"Pages:",lblPageIndex:"Page",btnAbout:"About",frnAboutCaption:"About & Contact",btnSinglePage:"Single Page",btnDoublePage:"Double Page",btnSwicthLanguage:"Switch Language",tipChangeLanguage:"Please select a language below...",btnMoreOptionsLeft:"More Options",btnMoreOptionsRight:"More Options",btnFit:"Fit Window",smallModeCaption:"Click to view in fullscreen",btnAddAnnotation:"Add Annotations",btnAnnotation:"Annotations",FlipPageEditor_SaveAndExit:"Save and Exit",FlipPageEditor_Exit:"Exit",DrawToolWindow_Redo:"Redo",DrawToolWindow_Undo:"Undo",DrawToolWindow_Clear:"Clear",DrawToolWindow_Brush:"Brush",DrawToolWindow_Width:"Width",DrawToolWindow_Alpha:"Alpha",DrawToolWindow_Color:"Color",DrawToolWindow_Eraser:"Eraser",DrawToolWindow_Rectangular:"Rectangular",DrawToolWindow_Ellipse:"Ellipse",TStuff_BorderWidth:"Border Width",TStuff_BorderAlph:"Border Alpha",TStuff_BorderColor:"Border Color",DrawToolWindow_TextNote:"Text Note",AnnotMark:"Bookmarks",lastpagebtnHelp:"Last page",firstpagebtnHelp:"First page",homebtnHelp:"Return to home page",aboubtnHelp:"About",screenbtnHelp:"Open this application in full-screen mode",helpbtnHelp:"Show help",searchbtnHelp:"Search from pages",pagesbtnHelp:"Take a look at the thumbnail of this brochure",bookmarkbtnHelp:"Open Bookmarks",AnnotmarkbtnHelp:"Open Table of contents",printbtnHelp:"Print the brochure",soundbtnHelp:"Turn on or off the sound",sharebtnHelp:"Send Email to",socialSharebtnHelp:"Social Share",zoominbtnHelp:"Zoom in",downloadbtnHelp:"Downdlaod this brochure",pagemodlebtnHelp:"Switch Single and double page mode",languagebtnHelp:"Switch Lauguage",annotationbtnHelp:"Add Annotation",addbookmarkbtnHelp:"Add Bookmark",removebookmarkbtnHelp:"Remove Bookmark",updatebookmarkbtnHelp:"Update Bookmark",btnShoppingCart:"Shopping Cart",Help_ShoppingCartbtn:"Shopping Cart",Help_btnNextPage:"Next page",Help_btnPrePage:"Previous page",Help_btnAutoFlip:"Auto filp",Help_StopAutoFlip:"Stop atuo filp",btnaddbookmark:"Add",btndeletebookmark:"Delete",btnupdatebookmark:"Update",frmyourbookmarks:"Your bookmarks",frmitems:"items",DownloadFullPublication:"Full Publication",DownloadCurrentPage:"Current Page",DownloadAttachedFiles:"Attached Files",lblLink:"Link",btnCopy:"Copy Button",infCopyToClipboard:"Your browser does not support clipboard.",restorePage:"Would you like to restore previous session",tmpl_Backgoundsoundon:"Background Sound On",tmpl_Backgoundsoundoff:"Background Sound Off",tmpl_Flipsoundon:"Flip Sound On",tmpl_Flipsoundoff:"Flip Sound Off",Help_PageIndex:"The current page number",tmpl_PrintPageRanges:"PAGE RANGES",tmpl_PrintPreview:"PREVIEW",btnSelection:"Select Text",loginNameLabel:"Name:",btnGotoPage:"	Go",btnSettings:"Setting",soundSettingTitle:"Sound Setting",closeFlipSound:"Close Flip Sound",closeBackgroundSound:"Close Backgorund Sound",frmShareCaption:"Share",frmShareLinkLabel:"Link:",frmShareBtnCopy:"Copy",frmShareItemsGroupCaption:"Social Share",frmPanelTitle:"Share it",frmShareQRcode:"QRCode",TAnnoActionPropertyStuff_GotoPage:"Go to page",btnPageBack:"Backward",btnPageForward:"Forward",SelectTextCopy:"Copy Selected Text",selectCopyButton:"Copy",TStuffCart_TypeCart:"Shopping Cart",TStuffCart_DetailedQuantity:"Quantity",TStuffCart_DetailedPrice:"Price",ShappingCart_Close:"Close",ShappingCart_CheckOut:"Checkout",ShappingCart_Item:"Item",ShappingCart_Total:"Total",ShappingCart_AddCart:"Add to cart",ShappingCart_InStock:"In Stock",TStuffCart_DetailedCost:"Shipping cost",TStuffCart_DetailedTime:"Delivery time",TStuffCart_DetailedDay:"day(s)",ShappingCart_NotStock:"Not enough in stock",btnCrop:"Crop",btnDragButton:"Drag",btnFlipBook:"Flip Book",btnSlideMode:"Slide Mode",btnSinglePageMode:"Single Page Mode",btnVertical:"Vertical Mode",btnHotizontal:"Horizontal Mode",btnClose:"Close",btnDoublePage:"Double Page",btnBookStatus:"Book View",checkBoxInsert:"Insert Current Page",lblLast:"This is the last page.",lblFirst:"This is the first page.",lblFullscreen:"Click to view in fullscreen",lblName:"Name",lblPassword:"Password",lblLogin:"Login",lblCancel:"Cancel",lblNoName:"User name can not be empty.",lblNoPassword:"Password can not be empty.",lblNoCorrectLogin:"Please enter the correct user name and password.",btnVideo:"Video Gallery",btnSlideShow:"Slide Show",pnlSearchInputInvalid:"(Minimal request length is 3 symbols)",btnDragToMove:"Move by mouse drag",btnPositionToMove:"Move by mouse position",lblHelp1:"Drag the page corner to view",lblHelp2:"Double click to zoom in, out",lblCopy:"Copy",lblAddToPage:"add to page",lblPage:"Page",lblTitle:"Title",lblEdit:"Edit",lblDelete:"Delete",lblRemoveAll:"Remove All",tltCursor:"cursor",tltAddHighlight:"add highlight",tltAddTexts:"add texts",tltAddShapes:"add shapes",tltAddNotes:"add notes",tltAddImageFile:"add image file",tltAddSignature:"add signature",tltAddLine:"add line",tltAddArrow:"add arrow",tltAddRect:"add rect",tltAddEllipse:"add ellipse",lblDoubleClickToZoomIn:"Double click to zoom in.",frmShareCaption:"Share",frmShareLabel:"Share",frmShareInfo:"You can easily share this publication to social networks.Just cilck the appropriate button below.",frminsertLabel:"Insert to Site",frminsertInfo:"Use the code below to embed this publication to your website.",btnQRCode:"Click to scan QR code",btnRotateLeft:"Rotate Left",btnRotateRight:"Rotate Right",lblSelectMode:"Select view mode please.",frmDownloadPreview:"Preview",frmHowToUse:"How To Use",lblHelpPage1:"Move your finger to flip the book page.",lblHelpPage2:"Zoom in by using gesture or double click on the page.",lblHelpPage3:"Click on the logo to reach the official website of the company.",lblHelpPage4:"Add bookmarks, use search function and auto flip the book.",lblHelpPage5:"Switch horizontal and vertical view on mobile devices.",TTActionQuiz_PlayAgain:"Do you wanna play it again",TTActionQuiz_Ration:"Your ratio is",frmTelephone:"Telephone list",btnDialing:"Dialing",lblSelectMessage:"Please copy the the text content in the text box",btnSelectText:"Select Text",btnNote:"Annotation",btnPhoneNumber:"Telephone",btnWeCharShare:"WeChat Share",btnMagnifierIn:"Magnifying Glass",btnMagnifierOut:"Magnifier Reduction",frmShareSmallProgram:"smallProgram",btnMagnifier:"Magnifier",frmPrintPrintLimitFailed:"Sorry, you can't print the pages.",infNotSupportHtml5:"HTML5 is not supported by your current web browser, please read the book with latest verson web browser. Here we recommend you to read it with Chrome.",btnReport:"Report",btnDoubleSinglePage:"Page switch",frmBookMark:"Bookmark",btnFullscreen:"Fullscreen",btnExitFullscreen:"Exit Fullscreen",btnMore:"More",frmPrintall:"Print All Pages",frmPrintcurrent:"Print Current Page",frmPrintRange:"Print Range",frmPrintexample:"Example: 2,3,5-10",frmPrintbtn:"Print",frmaboutcaption:"Contact",frmaboutcontactinformation:"Contact Information",frmaboutADDRESS:"Address",frmaboutEMAIL:"Email",frmaboutWEBSITE:"Website",frmaboutMOBILE:"Mobile",frmaboutAUTHOR:"Author",frmaboutDESCRIPTION:"Description",frmSearch:"Search",frmToc:"Table Of Contents",btnTableOfContent:"Table Of Contents",lblDescription:"Title",frmLinkLabel:"Link",frmQrcodeCaption:"Scan the bottom two-dimensional code to view with mobile phone."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.420079","y":"0.413752","width":"0.448064","height":"0.021852"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.youtube.com/watch?v=7LKPVAIcDXY"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.630625","width":"0.038931","height":"0.015023"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://miro.com/es/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.665176","width":"0.115810","height":"0.015023"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://storyboarder.ai/?gad_source=1&gclid=Cj0KCQjw3vO3BhCqARIsAEWblcAmFt4CbvYP0zv12j92etpOLZEACp9ocm-u0oNuB4qr-hMIfCFxzd4aAmQzEALw_wcB"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.717005","width":"0.034834","height":"0.015023"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://theplot.io/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.751557","width":"0.115775","height":"0.015021"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.studiobinder.com/storyboard-creator/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.803384","width":"0.074800","height":"0.015023"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://milanote.com/product/storyboarding"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.447771","width":"0.170757","height":"0.016388"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://analytics.google.com/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.501169","width":"0.058171","height":"0.016388"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.hotjar.com/es/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.571843","width":"0.078326","height":"0.016388"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://dovetail.com/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.607966","width":"0.078305","height":"0.016388"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://qoqo.ai"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.754026","width":"0.078898","height":"0.015023"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://openai.com/chatgpt/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.788577","width":"0.140663","height":"0.015023"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.syntheticusers.com/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.823128","width":"0.071711","height":"0.015023"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.kraftful.com/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.217799","y":"0.605714","width":"0.058546","height":"-0.014593"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://QoQo.ai"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.129213","width":"0.069685","height":"0.015023"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.khroma.co/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.159258","width":"0.046126","height":"0.015023"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://pixai.art/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.204324","width":"0.066587","height":"0.015023"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://fontjoy.com/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.234371","width":"0.052268","height":"0.015023"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://openai.com/index/dall-e-3/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.264414","width":"0.055347","height":"0.015023"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.adobe.com/ar/products/firefly.html"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.294461","width":"0.104527","height":"0.015021"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://leonardo.ai"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.339527","width":"0.098394","height":"0.015023"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://designs.ai"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.421468","width":"0.092216","height":"0.015023"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.autodraw.com/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.466534","width":"0.133210","height":"0.015023"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://components.ai"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.496581","width":"0.056366","height":"0.015023"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://uizard.io/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.563499","width":"0.071386","height":"0.015023"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://copy.ai"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.181208","y":"0.593544","width":"0.100122","height":"0.015023"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.writecream.com/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.432461","y":"0.466536","width":"0.117251","height":"-0.014593"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://Components.ai"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.556466","y":"0.339528","width":"0.089736","height":"-0.014593"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://Designs.ai"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.451630","y":"0.294461","width":"0.090141","height":"-0.014593"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://Leonardo.ai"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.279690","y":"0.273559","width":"0.070738","height":"0.015023"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://docs.google.com/presentation/d/147dz6hwkx2XRtfTlNOS6ApbmE9y1TKsq/edit?usp=sharing&ouid=104717790900407353007&rtpof=true&sd=true"}}],[]]}; bookConfig.isFlipPdf=false; var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];	
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}