const express = require('express');
const path = require('path')

let app = express();

app.get("/", (req, res) => { //请求处理  
    res.end("hello express");
})

app.use('/public', express.static(path.resolve(__dirname, './public/')));

app.listen(3000,() => {
	console.log('serve runing at port 3000')
});