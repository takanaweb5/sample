//*****************************************************************************
//[概要] 選択した文字列をコピーし、DeepL翻訳サイトを開く
//*****************************************************************************
javascript: (function () {
    function copy(str) {
        const copyListener = event => {
            document.removeEventListener("copy", copyListener, true);
            event.preventDefault();
            const clipboardData = event.clipboardData;
            clipboardData.clearData();
            clipboardData.setData("text/plain", str);
        };
        document.addEventListener("copy", copyListener, true);
        document.execCommand("copy");
    }
        let str = window.getSelection().toString();
    if (str) {
		copy(str);
    	window.open('https://www.deepl.com/ja/translator', '_blank');
	}
})()

//*****************************************************************************
//[概要] 動画の速度変更
//*****************************************************************************
javascript: (function() {
    var b = document.querySelector("video");
    if (b != null) {
        var a = document.createElement("div"),
            f, d, e;
        a.style.cssText = "position:fixed;top:150px;left:0;width:100%;padding:10px;background:white;border:1px solid#aaa;z-index:19999;";
        a.onclick = function() {
            a.parentNode.removeChild(a);
        };
        d = document.createElement("text");
        d.style.cssText = "margin-right:12px;font-size:150%;";
        d.innerHTML = "速度:" + b.playbackRate.toFixed(1);
        a.appendChild(d);
        for (f = 1; f < 22; f++) {
            e = (f * 0.2 + 0.8).toFixed(1);
            d = document.createElement("button");
            d.type = "button";
            d.innerHTML = e;
            d.style.cssText = "margin:2px;";
            d.value = e;
            d.onclick = onclick;
            a.appendChild(d);
        }
        document.body.appendChild(a);

        function onclick(g) {
            g.stopPropagation();
            b.playbackRate = g.target.value;
            console.log(g.target.value);
            a.click();
        }
    }
})();

//*****************************************************************************
//[概要] 動画の再生位置変更
//[注意] エンコードするとき%に注意
//*****************************************************************************
javascript: (function() {
    function numToTime(num) {
        const hh = Math.floor(num % (24 * 60 * 60) / (60 * 60));
        const mm = Math.floor(num % (24 * 60 * 60) % (60 * 60) / 60);
        const ss = Math.floor(num % (24 * 60 * 60) % (60 * 60) % 60);
        return hh + ':' + mm + ':' + ss;
    }
    const videos = document.body.getElementsByTagName('video');
    if (videos.length > 0) {
        const inString = prompt('Jump:', numToTime(videos[0].currentTime));
        if (inString === null || inString === '') return;
        let m;
        if (m = inString.match(/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/)) {
            videos[0].currentTime = m[1] * 3600 + m[2] * 60 + m[3] * 1;
            return;
        };
        if (m = inString.match(/^[+-]?\d+$/)) {
            videos[0].currentTime += m[0] * 1;
            return;
        };
        if (m = inString.match(/^x([0-9](\.\d{1,2})?)$/)) {
            videos[0].playbackRate = m[1] * 1;
            return;
        };
    };
})()
