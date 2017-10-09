// Get Elements
const note_title = document.getElementById('note-title');
const note_content = document.getElementById('note-content');
const btn_create = document.getElementById('btn-create');


btn_create.addEventListener('click', e => {
	const time = new Date().getTime();

	const dbRef = firebase.database().ref();

	dbRef.child(USER.uid).child(time).child('title').set(note_title.value);
	dbRef.child(USER.uid).child(time).child('content').set(note_content.value);

	dbRef.on('child_added', snap => { alert("Note added"); })
});
