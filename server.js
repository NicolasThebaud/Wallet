const express = require('express'),
	app = express(), port = 1024,
	morgan = require('morgan')

console.log('\033c')

app.use(morgan('dev'))
app.use('/css', express.static(__dirname + '/public/css'))
app.use('/scripts', express.static(__dirname + '/public/js'))
app.use('/node_modules', express.static(__dirname + '/node_modules'))


app.get('/', (req,res)=>{
	res.render('index.ejs')
})

app.listen(port)
console.log('[SERVER] Server started on port', port) 