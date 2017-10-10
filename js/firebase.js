// Web page: https://ephelsa.github.io/PersonalAgenda/pages/login.html


// Initialize Firebase
var config = {
  apiKey: "AIzaSyAZ0Ht1BvA7pT8Ba1UC6ttYRbPHspXrs_Y",
  authDomain: "personalagenda-2e5b4.firebaseapp.com",
  databaseURL: "https://personalagenda-2e5b4.firebaseio.com",
  projectId: "personalagenda-2e5b4",
  storageBucket: "personalagenda-2e5b4.appspot.com",
  messagingSenderId: "552444840225"
};

firebase.initializeApp(config);

var USER;


console.log(window.location);

firebase.auth().onAuthStateChanged(firebaseUser => {
	const INDEX_PATH = "/home/ephelsa/Documentos/Estructura/PersonalAgenda/pages/login.html";
	const ONLINE_PATH = "/PersonalAgenda/pages/login.html";

  console.log(ONLINE_PATH + "    " + window.location.pathname);

  USER = firebaseUser;

	if(!firebaseUser && location.pathname != ONLINE_PATH) {
		location.href = "login.html";
	}
});

// Email Provider
const EMAIL_PROVIDER = "@udea.edu.co";
