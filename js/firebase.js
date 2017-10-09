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

firebase.auth().onAuthStateChanged(firebaseUser => {
	const INDEX_HREF = "file:///home/ephelsa/Documentos/Estructura/PersonalAgenda/pages/index.html";
	const ONLINE_HREF = "https://ephelsa.github.io/PersonalAgenda/pages/index.html";

  USER = firebaseUser;

	if(!firebaseUser && (location.href != INDEX_HREF || location.href != ONLINE_HREF)) {
		location.href = "index.html";
	}
});

// Email Provider
const EMAIL_PROVIDER = "@udea.edu.co";
