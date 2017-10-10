/*
	<div id="container-loader">
		<div id="loader-out">
			<div id="loader-in"></div>
		</div>
	</div>
*/
	
const container_loader = document.createElement("DIV");
const loader_out = document.createElement("DIV");
const loader_in = document.createElement("DIV");

container_loader.id = "container-loader";
loader_out.id = "loader-out";
loader_in.id = "loader-in";

loader_out.appendChild(loader_in);
container_loader.appendChild(loader_out);
document.body.appendChild(container_loader);

window.onload = function () {
	container_loader.style.visibility = 'hidden';
	container_loader.style.opacity = '0';
}
