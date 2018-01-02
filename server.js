const express = require('express');
const app = express();

app.get('/api/customers',(req,res)=>{
	const customers = [
		{id:1, firstname: 'John', lastname: 'Reese'},
		{id:2, firstname: 'Dendrick', lastname: 'Mary'},
		{id:3, firstname: 'Hola', lastname: 'Elias'}
	];

	res.json(customers);
})

app.listen(6500, ()=> console.log('Server Started'))