const express	= require('express');

const app			= express();

app.use('/post' , require('./route/post'));

app.listen(8000, (err, data) => {
	// console.log({err, data});
});