export default html =>
	`
	    <!DOCTYPE html>
	    <html>
	        <head>
		        <meta name="viewport" content="width=device-width">
		        <meta property="og:title" content="Безнең тәҗрибә">
				<meta property="og:description" content="Коммерциясе булмаган чит телле видеоларны татарчага тәрҗемә итеп тавышлау (озвучка),
субтитрлар ясау проекты.">
				<meta property="og:image" content="http://bts.tatar/static/assets/bts.jpg">
				<meta property="og:url" content="http://bts.tatar/">
	            <title>Безнең тәҗрибә</title>
	            <base href="/" />
	            
	            <style>
	            	.rh5v-DefaultPlayer_component {
    position: relative;
    font-family: Helvetica;
    font-size: 11px;
    background-color: #000;
}

.rh5v-DefaultPlayer_video {
    width: 100%;
    height: 100%;
}

.rh5v-DefaultPlayer_controls {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 34px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background-color: rgba(0,0,0,0.7);
    opacity: 0;
    transition: opacity 0.2s;
}

.rh5v-DefaultPlayer_seek {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
}

.rh5v-DefaultPlayer_component:hover .rh5v-DefaultPlayer_controls {
    opacity: 1;
}
.rh5v-Time_component {
    padding: 0 10px 0 10px;
    line-height: 35px;
    color: #fff;
}

.rh5v-Time_current {
    margin-right: 5px;
}

.rh5v-Time_duration {
    margin-left: 5px;
    color: #919191;
}
.rh5v-Seek_component {
    position: relative;
}

.rh5v-Seek_track {
    position: absolute;
    top: 50%;
    left: 5px;
    right: 5px;
    height: 4px;
    -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
            transform: translateY(-50%);
    background-color: #3e3e3e;
}

.rh5v-Seek_buffer,
.rh5v-Seek_fill,
.rh5v-Seek_input {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
}

.rh5v-Seek_buffer {
    background-color: #5a5a5a;
}

.rh5v-Seek_fill {
    background: #fff;
}

.rh5v-Seek_input {
    width: 100%;
    opacity: 0;
    cursor: pointer;
}
.rh5v-Volume_component {
    position: relative;
}

.rh5v-Volume_component:hover {
    background-color: #000;
}

.rh5v-Volume_button {
    width: 34px;
    height: 34px;
    background: none;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    cursor: pointer;
}

.rh5v-Volume_button:focus {
    outline: 0;
}

.rh5v-Volume_slider {
    display: none;
    position: absolute;
    right: 5px;
    bottom: 100%;
    left: 5px;
    height: 56px;
    background-color: #000;
}

.rh5v-Volume_component:hover .rh5v-Volume_slider {
    display: block;
}

.rh5v-Volume_track {
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: 50%;
    width: 4px;
    -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
            transform: translateX(-50%);
    background-color: #3e3e3e;
}

.rh5v-Volume_fill,
.rh5v-Volume_input {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.rh5v-Volume_fill {
    background-color: #fff;
}

.rh5v-Volume_input {
    padding: 0;
    margin: 0;
    opacity: 0;
    -webkit-appearance: slider-vertical;
    cursor: pointer;
}.rh5v-Captions_component {
    position: relative;
}

.rh5v-Captions_component:hover {
    background-color: #000;
}

.rh5v-Captions_button {
    width: 34px;
    height: 34px;
    background: none;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    cursor: pointer;
}

.rh5v-Captions_button:focus {
    outline: 0;
}

.rh5v-Captions_icon {
    padding: 5px;
}

.rh5v-Captions_trackList {
    position: absolute;
    right: 0;
    bottom: 100%;
    display: none;
    background-color: rgba(0,0,0,0.7);
    list-style: none;
    padding: 0;
    margin: 0;
    color: #fff;
}

.rh5v-Captions_component:hover .rh5v-Captions_trackList {
    display: block;
}

.rh5v-Captions_trackItem {
    padding: 7px;
    cursor: pointer;
}

.rh5v-Captions_activeTrackItem,
.rh5v-Captions_trackItem:hover {
    background: #000;
}

.rh5v-Captions_activeTrackItem {
    text-decoration: underline;
}
.rh5v-PlayPause_component {}

.rh5v-PlayPause_component:hover {
    background-color: #000;
}

.rh5v-PlayPause_button {
    width: 34px;
    height: 34px;
    background: none;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    cursor: pointer;
}

.rh5v-PlayPause_button:focus {
    outline: 0;
}
.rh5v-Fullscreen_component {}

.rh5v-Fullscreen_component:hover {
    background-color: #000;
}

.rh5v-Fullscreen_button {
    width: 34px;
    height: 34px;
    background: none;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    cursor: pointer;
}

.rh5v-Fullscreen_button:focus {
    outline: 0;
}
.vk-wibgets{
	display: flex;
	align-items: center;
}

.vk-wibgets iframe {
	margin-left: 10px;
}
.save-vk{
	margin-right: 10px;
}
.rh5v-Overlay_component {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    color: #fff;
    text-align: center;
    cursor: pointer;
    background-color: rgba(0,0,0,0);
}

.rh5v-Overlay_inner {
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 0;
    left: 50%;
    width: 60px;
    height: 60px;
    -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
            transform: translateY(-50%);
    margin-left: -30px;
    background-color: rgba(0,0,0,0.7);
    border-radius: 10px;
}

.rh5v-Overlay_icon {
    position: absolute;
    top: 50%;
    right: 0;
    left: 50%;
    margin-left: -20px;
    -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
            transform: translateY(-50%);
}

	            </style>
	            
	            <link rel="apple-touch-icon" sizes="180x180" href="/static/assets/apple-touch-icon.png">
				<link rel="icon" type="image/png" sizes="32x32" href="/static/assets/favicon-32x32.png">
				<link rel="icon" type="image/png" sizes="16x16" href="/static/assets/favicon-16x16.png">
				<link rel="manifest" href="/static/assets/manifest.json">
				<link rel="mask-icon" href="/static/assets/safari-pinned-tab.svg" color="#5bbad5">
				<link rel="shortcut icon" href="/static/assets/favicon.ico">
				<meta name="msapplication-config" content="/static/assets/browserconfig.xml">
				<meta name="theme-color" content="#ffffff">
				
				<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
				<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"></link>
		        <link href="static/main.css" rel="stylesheet" type="text/css" charSet="UTF-8">
		        <script type="text/javascript" src="//vk.com/js/api/openapi.js?146"></script>
		        <script type="text/javascript" src="https://vk.com/js/api/share.js?95" charset="windows-1251"></script>
		        <script type="text/javascript">
			VK.init({apiId: 6107479, onlyWidgets: true});
	</script>

	        </head>
	        <body>
		        <div id="app">${html}</div>
		        <script src="static/client.js"></script>
	        </body>
	    </html>
    `
