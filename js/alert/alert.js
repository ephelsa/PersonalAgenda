/*
	<div class="alert info">
		<span class="close-alert">&times;</span>
		<p><strong>Danger!</strong> Your note has been created!</p>
	</div>
*/

function createAlert(title, alert, type) {
	var div = document.createElement('DIV');
	var span = document.createElement('SPAN');
	var p = document.createElement('P');
	var strong = document.createElement('STRONG');

	div.classList.add('alert');
	div.classList.add(type);
	span.classList.add('close-alert');

	div.appendChild(strong);
	div.appendChild(span);
	div.appendChild(p);

	document.body.appendChild(div);

	span.innerHTML = "&times;";
	p.innerText = alert;
	strong.innerText = title;



	// Adding close events
	var close = document.getElementsByClassName("close-alert");

	for (var i = 0; i < close.length; i++) {
	    close[i].onclick = function(){
	        var div = this.parentElement;
	        div.style.opacity = "0";
	        setTimeout(function(){ div.style.display = "none"; }, 600);
	    }
	}
}

function successAlert(alert) {
	createAlert("Success! ", alert, "success");
}

function errorAlert(alert) {
	createAlert("Error! ", alert, "error");
}