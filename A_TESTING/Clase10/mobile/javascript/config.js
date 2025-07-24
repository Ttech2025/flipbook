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
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#323232";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#C6C6C6";bookConfig.toolbarAlwaysShow="No";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#27181A";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Hide";shareObj = [];bookConfig.isInsertFrameLinkEnable="Show";bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Hide";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Hide";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="1000";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Show";bookConfig.enableDownload="Yes";bookConfig.DownloadURL="files/downloads/Clase N° 10_ Manejo de Datos de Prueba.pdf";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.MagnifierButtonVisible="Hide";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="10";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="10";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="No";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Yes";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#740060";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=26;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2543;;bookConfig.securityType="1";bookConfig.CreatedTime ="250724171725";bookConfig.bookTitle="A_TESTING - Clase 10";bookConfig.bookmarkCR="1a78da186e9d14c212563ef996d47fb6049f95e7";bookConfig.productName="Flip PDF Corporate Edition";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [{ language : "English",btnFirstPage:"First",btnNextPage:"Next Page",btnLastPage:"Last",btnPrePage:"Previous Page",btnDownload:"Download",btnPrint:"Print",btnSearch:"Search",btnClearSearch:"Clear",frmSearchPrompt:"Clear",btnBookMark:"Table of contents",btnHelp:"Help",btnHome:"Home",btnFullScreen:"Enable FullScreen",btnDisableFullScreen:"Disable FullScreen",btnSoundOn:"Sound On",btnSoundOff:"Sound Off",btnShareEmail:"Share",btnSocialShare:"Social Share",btnZoomIn:"Zoom In",btnZoomOut:"Zoom Out",btnDragToMove:"Move by mouse drag",btnAutoFlip:"Auto Flip",btnStopAutoFlip:"Stop Auto Flip",btnGoToHome:"Return Home",frmHelpCaption:"Help",frmHelpTip1:"Double click to zoom in or out",frmHelpTip2:"Drag the page corner to view",frmPrintCaption:"Print",frmPrintBtnCaption:"Print",frmPrintPrintAll:"Print All Pages",frmPrintPrintCurrentPage:"Print Current Page",frmPrintPrintRange:"Print Range",frmPrintExampleCaption:"Example: 2,5,8-26",frmPrintPreparePage:"Preparing Page:",frmPrintPrintFailed:"Print Failed:",pnlSearchInputInvalid:"(Minimal request length is 3 symbols)",loginCaption:"Login",loginInvalidPassword:"Not a valid password!",loginPasswordLabel:"Password:",loginBtnLogin:"Login",loginBtnCancel:"Cancel",btnThumb:"Thumbnails",lblPages:"Pages:",lblPagesFound:"Pages:",lblPageIndex:"Page",btnAbout:"About",frnAboutCaption:"About & Contact",btnSinglePage:"Single Page",btnDoublePage:"Double Page",btnSwicthLanguage:"Switch Language",tipChangeLanguage:"Please select a language below...",btnMoreOptionsLeft:"More Options",btnMoreOptionsRight:"More Options",btnFit:"Fit Window",smallModeCaption:"Click to view in fullscreen",btnAddAnnotation:"Add Annotations",btnAnnotation:"Annotations",FlipPageEditor_SaveAndExit:"Save and Exit",FlipPageEditor_Exit:"Exit",DrawToolWindow_Redo:"Redo",DrawToolWindow_Undo:"Undo",DrawToolWindow_Clear:"Clear",DrawToolWindow_Brush:"Brush",DrawToolWindow_Width:"Width",DrawToolWindow_Alpha:"Alpha",DrawToolWindow_Color:"Color",DrawToolWindow_Eraser:"Eraser",DrawToolWindow_Rectangular:"Rectangular",DrawToolWindow_Ellipse:"Ellipse",TStuff_BorderWidth:"Border Width",TStuff_BorderAlph:"Border Alpha",TStuff_BorderColor:"Border Color",DrawToolWindow_TextNote:"Text Note",AnnotMark:"Bookmarks",lastpagebtnHelp:"Last page",firstpagebtnHelp:"First page",homebtnHelp:"Return to home page",aboubtnHelp:"About",screenbtnHelp:"Open this application in full-screen mode",helpbtnHelp:"Show help",searchbtnHelp:"Search from pages",pagesbtnHelp:"Take a look at the thumbnail of this brochure",bookmarkbtnHelp:"Open Bookmarks",AnnotmarkbtnHelp:"Open Table of contents",printbtnHelp:"Print the brochure",soundbtnHelp:"Turn on or off the sound",sharebtnHelp:"Send Email to",socialSharebtnHelp:"Social Share",zoominbtnHelp:"Zoom in",downloadbtnHelp:"Downdlaod this brochure",pagemodlebtnHelp:"Switch Single and double page mode",languagebtnHelp:"Switch Lauguage",annotationbtnHelp:"Add Annotation",addbookmarkbtnHelp:"Add Bookmark",removebookmarkbtnHelp:"Remove Bookmark",updatebookmarkbtnHelp:"Update Bookmark",btnShoppingCart:"Shopping Cart",Help_ShoppingCartbtn:"Shopping Cart",Help_btnNextPage:"Next page",Help_btnPrePage:"Previous page",Help_btnAutoFlip:"Auto filp",Help_StopAutoFlip:"Stop atuo filp",btnaddbookmark:"Add",btndeletebookmark:"Delete",btnupdatebookmark:"Update",frmyourbookmarks:"Your bookmarks",frmitems:"items",DownloadFullPublication:"Full Publication",DownloadCurrentPage:"Current Page",DownloadAttachedFiles:"Attached Files",lblLink:"Link",btnCopy:"Copy Button",infCopyToClipboard:"Your browser does not support clipboard.",restorePage:"Would you like to restore previous session",tmpl_Backgoundsoundon:"Background Sound On",tmpl_Backgoundsoundoff:"Background Sound Off",tmpl_Flipsoundon:"Flip Sound On",tmpl_Flipsoundoff:"Flip Sound Off",Help_PageIndex:"The current page number",tmpl_PrintPageRanges:"PAGE RANGES",tmpl_PrintPreview:"PREVIEW",btnSelection:"Select Text",loginNameLabel:"Name:",btnGotoPage:"	Go",btnSettings:"Setting",soundSettingTitle:"Sound Setting",closeFlipSound:"Close Flip Sound",closeBackgroundSound:"Close Backgorund Sound",frmShareCaption:"Share",frmShareLinkLabel:"Link:",frmShareBtnCopy:"Copy",frmShareItemsGroupCaption:"Social Share",frmPanelTitle:"Share it",frmShareQRcode:"QRCode",TAnnoActionPropertyStuff_GotoPage:"Go to page",btnPageBack:"Backward",btnPageForward:"Forward",SelectTextCopy:"Copy Selected Text",selectCopyButton:"Copy",TStuffCart_TypeCart:"Shopping Cart",TStuffCart_DetailedQuantity:"Quantity",TStuffCart_DetailedPrice:"Price",ShappingCart_Close:"Close",ShappingCart_CheckOut:"Checkout",ShappingCart_Item:"Item",ShappingCart_Total:"Total",ShappingCart_AddCart:"Add to cart",ShappingCart_InStock:"In Stock",TStuffCart_DetailedCost:"Shipping cost",TStuffCart_DetailedTime:"Delivery time",TStuffCart_DetailedDay:"day(s)",ShappingCart_NotStock:"Not enough in stock",btnCrop:"Crop",btnDragButton:"Drag",btnFlipBook:"Flip Book",btnSlideMode:"Slide Mode",btnSinglePageMode:"Single Page Mode",btnVertical:"Vertical Mode",btnHotizontal:"Horizontal Mode",btnClose:"Close",btnDoublePage:"Double Page",btnBookStatus:"Book View",checkBoxInsert:"Insert Current Page",lblLast:"This is the last page.",lblFirst:"This is the first page.",lblFullscreen:"Click to view in fullscreen",lblName:"Name",lblPassword:"Password",lblLogin:"Login",lblCancel:"Cancel",lblNoName:"User name can not be empty.",lblNoPassword:"Password can not be empty.",lblNoCorrectLogin:"Please enter the correct user name and password.",btnVideo:"Video Gallery",btnSlideShow:"Slide Show",pnlSearchInputInvalid:"(Minimal request length is 3 symbols)",btnDragToMove:"Move by mouse drag",btnPositionToMove:"Move by mouse position",lblHelp1:"Drag the page corner to view",lblHelp2:"Double click to zoom in, out",lblCopy:"Copy",lblAddToPage:"add to page",lblPage:"Page",lblTitle:"Title",lblEdit:"Edit",lblDelete:"Delete",lblRemoveAll:"Remove All",tltCursor:"cursor",tltAddHighlight:"add highlight",tltAddTexts:"add texts",tltAddShapes:"add shapes",tltAddNotes:"add notes",tltAddImageFile:"add image file",tltAddSignature:"add signature",tltAddLine:"add line",tltAddArrow:"add arrow",tltAddRect:"add rect",tltAddEllipse:"add ellipse",lblDoubleClickToZoomIn:"Double click to zoom in.",frmShareCaption:"Share",frmShareLabel:"Share",frmShareInfo:"You can easily share this publication to social networks.Just cilck the appropriate button below.",frminsertLabel:"Insert to Site",frminsertInfo:"Use the code below to embed this publication to your website.",btnQRCode:"Click to scan QR code",btnRotateLeft:"Rotate Left",btnRotateRight:"Rotate Right",lblSelectMode:"Select view mode please.",frmDownloadPreview:"Preview",frmHowToUse:"How To Use",lblHelpPage1:"Move your finger to flip the book page.",lblHelpPage2:"Zoom in by using gesture or double click on the page.",lblHelpPage3:"Click on the logo to reach the official website of the company.",lblHelpPage4:"Add bookmarks, use search function and auto flip the book.",lblHelpPage5:"Switch horizontal and vertical view on mobile devices.",TTActionQuiz_PlayAgain:"Do you wanna play it again",TTActionQuiz_Ration:"Your ratio is",frmTelephone:"Telephone list",btnDialing:"Dialing",lblSelectMessage:"Please copy the the text content in the text box",btnSelectText:"Select Text",btnNote:"Annotation",btnPhoneNumber:"Telephone",btnWeCharShare:"WeChat Share",btnMagnifierIn:"Magnifying Glass",btnMagnifierOut:"Magnifier Reduction",frmShareSmallProgram:"smallProgram",btnMagnifier:"Magnifier",frmPrintPrintLimitFailed:"Sorry, you can't print the pages.",infNotSupportHtml5:"HTML5 is not supported by your current web browser, please read the book with latest verson web browser. Here we recommend you to read it with Chrome.",btnReport:"Report",btnDoubleSinglePage:"Page switch",frmBookMark:"Bookmark",btnFullscreen:"Fullscreen",btnExitFullscreen:"Exit Fullscreen",btnMore:"More",frmPrintall:"Print All Pages",frmPrintcurrent:"Print Current Page",frmPrintRange:"Print Range",frmPrintexample:"Example: 2,3,5-10",frmPrintbtn:"Print",frmaboutcaption:"Contact",frmaboutcontactinformation:"Contact Information",frmaboutADDRESS:"Address",frmaboutEMAIL:"Email",frmaboutWEBSITE:"Website",frmaboutMOBILE:"Mobile",frmaboutAUTHOR:"Author",frmaboutDESCRIPTION:"Description",frmSearch:"Search",frmToc:"Table Of Contents",btnTableOfContent:"Table Of Contents",lblDescription:"Title",frmLinkLabel:"Link",frmQrcodeCaption:"Scan the bottom two-dimensional code to view with mobile phone."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.657927","y":"0.523539","width":"0.200419","height":"-0.014592"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:@pytest.mark.parametrize"}}],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.280316","y":"0.299265","width":"0.225245","height":"-0.014593"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:@pytest.mark.parametrize"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.544252","y":"0.645293","width":"0.067668","height":"0.015023"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://github.com/emilianospinoso/talento-lab-ejercicios/tree/main/Clase10/fromCsv"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.128044","y":"0.691783","width":"0.065149","height":"-0.013266"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://datos.py"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.459873","y":"0.429448","width":"0.078141","height":"-0.014592"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://login.csv"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.217967","y":"0.598951","width":"0.255997","height":"-0.012783"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.saucedemo.com/"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.330165","y":"0.441122","width":"0.117242","height":"-0.014592"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://login_page.py"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.449660","y":"0.313564","width":"0.092576","height":"-0.012783"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://login.csv"}}],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.522701","y":"0.682387","width":"0.125050","height":"0.015023"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://github.com/emilianospinoso/talento-lab-ejercicios/tree/main/Clase10/fromJson"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.271584","y":"0.749239","width":"0.175909","height":"-0.014593"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://test_carrito_json.py"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.540084","y":"0.533397","width":"0.151663","height":"-0.014129"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://productos.json"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.322560","y":"0.321386","width":"0.106068","height":"-0.017231"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://fake.name"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.333628","y":"0.287321","width":"0.117065","height":"-0.017232"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://fake.email"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.151007","y":"0.131244","width":"0.266058","height":"-0.017232"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:@pytest.mark.parametrize"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.389996","y":"0.851107","width":"0.066465","height":"-0.014593"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://fake.text"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.325372","y":"0.833831","width":"0.068139","height":"-0.014592"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://fake.time"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.491248","y":"0.816555","width":"0.080276","height":"-0.014593"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://fake.date"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.470163","y":"0.609246","width":"0.073248","height":"-0.014593"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://fake.city"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.415466","y":"0.522866","width":"0.078935","height":"-0.014593"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://fake.email"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.319806","y":"0.471039","width":"0.077097","height":"-0.014593"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://fake.name"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.120805","y":"0.503378","width":"0.120951","height":"0.015023"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://github.com/emilianospinoso/talento-lab-ejercicios/tree/main/Clase10/fromFaker"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.369361","y":"0.557825","width":"0.099609","height":"0.017230"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://github.com/emilianospinoso/talento-lab-ejercicios/blob/main/Clase10/talentoLab_ejercicio/datos/login.csv"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.413631","y":"0.577640","width":"0.110678","height":"0.017229"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://github.com/emilianospinoso/talento-lab-ejercicios/blob/main/Clase10/talentoLab_ejercicio/datos/productos.json"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.499597","y":"0.628166","width":"0.082346","height":"-0.014593"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://login.csv"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387991","y":"0.159488","width":"0.187911","height":"-0.014593"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://pytest.mark.parametrize"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.226104","y":"0.639332","width":"0.157135","height":"-0.014592"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://test_carrito_json.py"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.241638","y":"0.604781","width":"0.135969","height":"-0.014592"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://test_login_csv.py"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.129614","y":"0.400379","width":"0.173125","height":"-0.014593"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:@pytest.mark.smoke"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.129614","y":"0.296723","width":"0.241194","height":"-0.014592"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:@pytest.mark.parametrize"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.193562","y":"0.161207","width":"0.223820","height":"-0.017232"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://test_carrito_json.py"}}],[],[]]}; bookConfig.isFlipPdf=false; var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];	
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