const MENU = {Home: "Home",
					NoteMan: "Note Manager",
					Logout: "Logout"};

const header = document.createElement('HEADER');
const div = document.createElement('DIV');
const ul = document.createElement('UL');

document.body.appendChild(header);
div.appendChild(ul);
header.appendChild(div);

for(i in MENU) {
	const a = document.createElement('A');

	a.id = "btn" + i;

	a.innerText = MENU[i];

	ul.appendChild(a);
}


// Adding events
const btnHome = document.getElementById('btnHome');
const btnNoteMan = document.getElementById('btnNoteMan');
const btnLogout = document.getElementById('btnLogout');


// Home
btnHome.href = "notas.html";

// Note manager
btnNoteMan.href = "note_manager.html";

// Log out
btnLogout.addEventListener('click', e => {
	firebase.auth().signOut();
});