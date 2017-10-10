// Get Elements
const note_title = document.getElementById('note-title');
const note_content = document.getElementById('note-content');
const btn_create = document.getElementById('btn-create');


btn_create.addEventListener('click', e => {
	const time = new Date().getTime();

	const dbRef = firebase.database().ref();

	if (note_title.value != "" || note_content.value != "") {
		dbRef.child(USER.uid).child(time).child('title').set(note_title.value);
		dbRef.child(USER.uid).child(time).child('content').set(note_content.value);
		dbRef.child(USER.uid).child(time).child('order').set(time);

		dbRef.on('child_added', snap => {
			note_title.value = "";
			note_content.value = "";
		});

		successAlert("Note added.")
	} else {
		infoAlert("Please, fill the fields before create.");
	}
});
