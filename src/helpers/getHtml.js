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
	            
	            <link rel="apple-touch-icon" sizes="180x180" href="/static/assets/apple-touch-icon.png">
				<link rel="icon" type="image/png" sizes="32x32" href="/static/assets/favicon-32x32.png">
				<link rel="icon" type="image/png" sizes="16x16" href="/static/assets/favicon-16x16.png">
				<link rel="manifest" href="/static/assets/manifest.json">
				<link rel="mask-icon" href="/static/assets/safari-pinned-tab.svg" color="#5bbad5">
				<link rel="shortcut icon" href="/static/assets/favicon.ico">
				<meta name="msapplication-config" content="/static/assets/browserconfig.xml">
				<meta name="theme-color" content="#ffffff">
				
				<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
		        <link href="static/main.css" rel="stylesheet" type="text/css" charSet="UTF-8">
	        </head>
	        <body>
		        <div id="app">${html}</div>
		        <script src="static/client.js"></script>
	        </body>
	    </html>
    `
