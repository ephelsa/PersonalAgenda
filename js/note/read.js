const dbRef = firebase.database().ref();

var title, content, order;


dbRef.on('child_added', user => {
	if (user.key == USER.uid) {
		user.forEach(time => {
			data = {};

			time.forEach(snap => {
				if (snap.key == 'title') {
					title = snap.val();

				} else if (snap.key == 'content') {
					content = snap.val();

				} else if (snap.key == 'order') {
					order = snap.val();
				
				} else {
					data[snap.key] = snap.val();
				}

			});

			newNote(title, content, time.key);

			for(i in data) {
				addBadge(i, data[i], time.key);
			}
		});
	}
});

