function newNote(title, content, time) {
	// Create the elements
	const note_container = document.createElement('DIV')
	
	const note_menu = document.createElement('DIV');
	const menu_close = document.createElement('SPAN');
	const badge_add = document.createElement('SPAN');
	
	const badge_container = document.createElement('DIV');

	const note_title = document.createElement('LABEL');
	const note_content = document.createElement('P');

	// Id's
	note_container.id = "note-container-" + time;
	note_menu.id = "note-menu-" + time;
	menu_close.id = "menu-close-" + time;
	badge_add.id = "badge-add-" + time;

	badge_container.id = "badge-container-" + time;
	
	note_title.id = "note-title-" + time;
	note_content.id = "note-content-" + time;

	// Class
	note_container.setAttribute('class', 'note-container');
	
	note_menu.setAttribute('class', 'note-menu');
	
	badge_container.setAttribute('class', 'badge-container');

	note_title.setAttribute('class', 'note-title');
	note_content.setAttribute('class', 'note-content');


	// Appends
	note_container.appendChild(note_menu);
	note_menu.appendChild(menu_close);
	note_menu.appendChild(badge_add);

	note_container.appendChild(badge_container);
	note_container.appendChild(note_title);
	note_container.appendChild(note_content);

	document.body.appendChild(note_container);

	menu_close.innerHTML = "&times;";
	badge_add.innerHTML = "+";

	note_title.innerText = title;
	note_content.innerHTML = content;


	// Adding Remove and close 
	var close = document.getElementById("menu-close-" + time);
	var add = document.getElementById("badge-add-" + time);

    close.onclick = function() {
        var div = this.parentElement.parentElement;
        div.style.opacity = "0";
        setTimeout(function(){ div.style.display = "none"; }, 600);


        dbRef.child(USER.uid).child(time).on('child_added', snap => {
        	dbRef.child(USER.uid).child(time).child(snap.key).set(null);
        });
	}


	add.onclick = function() {
		const options = ["new", "urgent", "done", "reminder", "tag", 
						"priority", "emergency", "doing"];


		const div = document.getElementById("container-select");
		const select = document.getElementById("badge-select");

		const badge_input = document.getElementById("input-modal");
		const create_btn = document.getElementById("create-btn-modal");
		const cancel_btn = document.getElementById("cancel-btn-modal")

		div.style.visibility = "visible";
		div.style.opacity = "1";

		for (i in options) {
			const option = document.createElement('OPTION');

			option.text = options[i];

			select.add(option);
		}

		create_btn.onclick = function() {
			const selected = select.selectedIndex;

			const description = badge_input.value;

			if (description != "") {
				addBadge(options[selected], description, time);
			} else {
				infoAlert("Fill the description");
			}
		
			badge_input.value = "";
		};

		cancel_btn.onclick = function () {
			badge_input.value = "";
			div.style.opacity = "0";
			div.style.visibility = "hidden";

			window.location.reload();
		};
	}
}

function addBadge(type, text, time) {
	const badge_container = document.getElementById('badge-container-' + time);

	// Create elements
	const badge = document.createElement('SPAN');

	//ID's
	badge.id = "badge-" + type + "-" + time;

	// Class
	badge.classList.add('badge');
	badge.classList.add('badge-' + type);

	badge.innerText = text;

	badge_container.appendChild(badge);

	dbRef.child(USER.uid).child(time).child(type).set(text);	
}