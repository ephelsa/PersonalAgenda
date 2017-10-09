// Get elements
var txt_user = document.getElementById('txt-user');
var txt_pass = document.getElementById('txt-pass');
const btn_login = document.getElementById('btn-login');

// Login button
btn_login.addEventListener('click', e => {
	const user = txt_user.value + EMAIL_PROVIDER;
	const pass = txt_pass.value;
	const auth = firebase.auth();

	const promise = auth.signInWithEmailAndPassword(user, pass);
	promise.catch(e => alert(e.message));
});

firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
  	console.log(firebaseUser);
  	location.href = "notas.html"
  }
});
