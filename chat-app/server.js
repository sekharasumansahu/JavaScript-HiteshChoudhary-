const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res)=>{
	res.sendFile('/home/wavelabs/Desktop/sekharwork/JavaScript-HiteshChoudhary-/chat-app/index.html');
})

let client = 0;
io.on('connection', (socket)=>{
	console.log('User Connected..');

	client++;
	//io.sockets.emit('broadcast', { description: `${client} connected now !!!` });

	socket.emit('newClient', { description: `Welcome...` });
	socket.broadcast.emit('newClient', { description: `${client} connected now...` })


	//setTimeout(() => {
	//	//socket.send('Message send after 2 sec..');
	//	socket.emit('testEvent', { description: 'An custom event named testEvent got fired ' });
	//}, 2000);

	//socket.on('clinetEvent', (data)=>{
	//	console.log(data);
	//})

	socket.on('disconnect', () => {
		client--;
		//io.sockets.emit('broadcast', { description: `${client} connected now !!!` });
		socket.broadcast.emit('newClient', { description: `${client} connected now...` })
		console.log('User disconnected..');
	})
})

http.listen(3000, (err)=>{
	if(err) console.log(err);
	console.log('Server running....');
})