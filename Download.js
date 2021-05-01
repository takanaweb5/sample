javascript: (function(d) {
	const title = ytInitialPlayerResponse.videoDetails.title;
	const fms = ytInitialPlayerResponse.streamingData.formats;
	let msg = `${title}\nDL対象をindexで指定してください\n`;
	  for (let i=0,len=fms.length; i<len; i++){
		msg += `${i}: ${fms[i].qualityLabel} (${fms[i].quality})\n`;
	  }
	  for (let i=0,len=fms.length; i<len; i++){
		  console.log(`${fms[i].url}\n\n`);
		}
		const targ = window.prompt(msg, 1);
	if (!targ){
	  return
	} else if (!targ.match(/^\d+$/) || targ >= fms.length){
	  alert(`無効な値です: "${targ}"`);
	  return
	}

	const copyListener = event => {
		document.removeEventListener("copy", copyListener, true);
		event.preventDefault();
		const clipboardData = event.clipboardData;
		clipboardData.clearData();
		const uldt = ytInitialPlayerResponse.microformat.playerMicroformatRenderer.uploadDate;
		const filename = `${title}(${uldt})`.replace(/[./\\:*?"<>|]/g,
			s=>{return String.fromCharCode(s.charCodeAt(0)+0xFEE0)});
		clipboardData.setData("text/plain", filename);
	};
	document.addEventListener("copy", copyListener, true);document.execCommand("copy");

	window.open(fms[targ].url);
})(document);
