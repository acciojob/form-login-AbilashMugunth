function getFormvalue() {
	let form = document.querySelector('#form1');
	let firstName = form["fname"].value;
	let lastName = form["lname"].value;
	// console.log(firstName,lastName);
	alert(`${firstName} ${lastName}`);
}
