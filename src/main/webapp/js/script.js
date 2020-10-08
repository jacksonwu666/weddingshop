const form = document.getElementById('form');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const phoneValue = phone.value.trim();
	const addressValue = address.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, '用户名不能为空');
	} else {
		setSuccessFor(username);
	}

	if(usernameValue === '') {
		setErrorFor(address, '地址不能为空');
	} else {
		setSuccessFor(address);
	}

	if(phoneValue === '') {
		setErrorFor(phone, '号码不能为空');
	} else {
		setSuccessFor(phone);
	}
	
	if(emailValue === '') {
		setErrorFor(email, '邮箱不能为空');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, '邮箱格式不正常');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, '密码不能为空');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, '密码不能为空');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, '两次密码不正确');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}