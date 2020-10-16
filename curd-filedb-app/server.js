const express = require('express');
const app = express();

app.use(express.json());
app.use(require('./controller/file.route'));

app.listen(5000, (err)=>{
	if(err) console.log(err);
	console.log('Server running on port '+ 5000);
})