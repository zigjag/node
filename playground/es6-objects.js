
const name = 'Joseph'
const userAge = 28
const user = {
	name,
	age: userAge,
	location: 'Memphis'
}

console.log(user)

const product = {
	label: 'Red Notebook',
	price: 3,
	stock: 201,
	salePrice: undefined
}

// //Object destructuring
// const {label: productLabel, stock, rating = 5} = product;
// console.log(productLabel, stock, rating);

function transaction(type, { label, stock }){
	console.log(type, label, stock);
}

transaction('order', product)
