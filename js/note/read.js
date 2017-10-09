const dbRef = firebase.database().ref();

var title, content, order;


dbRef.on('child_added', user => {

	if (user.key == USER.uid) {
		user.forEach(time => {
			time.forEach(snap => {
				if (snap.key == 'title') {
					title = snap.val();

				} else if (snap.key == 'content') {
					content = snap.val();

				} else if (snap.key == 'order') {
					order = snap.val();
				}

			});
			newNote(title, content);
		});
	}
});

