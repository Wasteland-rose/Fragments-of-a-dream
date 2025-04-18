
/*-------------------------*/
document.addEventListener("DOMContentLoaded", () => {
	const btn = document.getElementById("menubar");
	const panel = document.getElementById("menu_content");

 btn.addEventListener("click", () => {
	console.log("Button clicked");
	btn.classList.toggle("active");
	panel.classList.toggle("open");
  });
});
		/*-------------------------*/