javascript:(function(){
	let menu = document.createElement("div")
	menu.style.cssText="
		position:fixed;
		top:150px;
		left:0;
		width:100%25;
		padding:10px;
		background:white;
		border:1px solid #aaa;
		text-align:center;
		z-index:19999;
	";

	let value, btn;
	for(f=4;f<16;f++){
		value = (f*0.2).toFixed(1);
		btn = document.createElement("button");
		btn.type = "button";
		btn.innerHTML = value;
		btn.style.cssText="margin:3px;";
		btn.value = value;
		btn.onclick = onClick;
		menu.appendChild(btn);
	}
	
	document.body.appendChild(menu);

	function onClick(b){
	vileo.stopPropagation();
	vileo.playbackRate = b.target.value;
	console.log(b.target.value);
	a.click();
}}})();

                      

