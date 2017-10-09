// Get elements
var txt_user = document.getElementById('txt-user');
var txt_pass = document.getElementById('txt-pass');
const btn_login = document.getElementById('btn-login');

txt_pass.addEventListener('keyup', e => {
	if(e.keyCode == 13) {
		login(e)
	}
});

// Login button
btn_login.addEventListener('click', e => { login(e) });


firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
  	console.log(firebaseUser);
  	location.href = "notes.html"
  }
});


function login(e) {
	const user = txt_user.value + EMAIL_PROVIDER;
	const pass = txt_pass.value;
	const auth = firebase.auth();

	const promise = auth.signInWithEmailAndPassword(user, pass);
	promise.catch(e => errorAlert(e.message));
}