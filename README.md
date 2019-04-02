# slog-engine

### This is a HTML Templet named "slog-engine" from ArthurSlog

* Create a file named "example"
> mkdir example && cd example

* Create enter point file named "main.js"
> vi main.js
``` js
var express = require('express');
var app = express();

// import render engine "slog"
var slog = require('slog-engine');
app.engine('slog', slog()); // define the template engine
app.set('views', './views'); // specify the views directory
app.set('view engine', 'slog'); // register the template engine

app.get('/', function (req, res) {
    res.render('index', { title: 'slog-engine', message: 'Hello ~ This is slog-engine from ArthurSlog(www.arthurslog.com)!' })
});

app.listen(3000);
```

* Init
> npm init -y

* Install middleware "express" and "slog-engine"
> npm i express slog-engine 

* Create a file named "views"
> mkdir views && cd views

* Create a file named "index.slog"
> vi index.slog
```
#title#
#message#
```

* Return file's root path
> cd ..

* Start server
> node ./main.js

* Open the chrome and go to localhost:3000

---

## Update record

### 2019-04-02
* Publish the first version