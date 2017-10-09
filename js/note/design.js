function newNote(title, content) {
	const time = new Date().getTime();

	console.log(title + " " + content);
	// Create the elements
	const note_container = document.createElement('DIV');
	const badge_container = document.createElement('DIV');

	const note_title = document.createElement('LABEL');
	const note_content = document.createElement('P');

	// Id's
	note_container.id = "note-container-" + time;
	badge_container.id = "badge-container-" + time;
	note_title.id = "note-title-" + time;
	note_content.id = "note-content-" + time;

	// Class
	note_container.setAttribute('class', 'note-container');
	badge_container.setAttribute('class', 'badge-container');

	note_title.setAttribute('class', 'note-title');

	note_container.appendChild(badge_container);
	note_container.appendChild(note_title);
	note_container.appendChild(note_content);

	document.body.appendChild(note_container);

	note_title.innerText = title;
	note_content.innerText = content;
}

function addBadge(type) {
	//const time = new Date().getTime();
	const asd = document.getElementById('badge-container-' + time);
	// Create elements
	const badge = document.createElement('SPAN');

	//ID's
	badge.id = "badge-" + type + "-" + time;

	// Class
	badge.classList.add('badge');
	badge.classList.add('badge-' + type);

	badge.innerText = "Urgente";

	asd.appendChild(badge);
}