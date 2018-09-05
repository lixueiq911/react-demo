const express = require('express');
const userRouter = require('./user');
const app = express();

//使用中间件
app.use('/user',userRouter);

app.get('/',function(req,res){
	
	res.send('<h1>hello world666</h1>');
	
})


	

app.listen(9000,function(){
	
	console.log( 'Node app start listen 9000')
	
})
