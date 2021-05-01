javascript: {
    let copyListener = event => {
        document.removeEventListener("copy", copyListener, true);
        event.preventDefault();
        let clipboardData = event.clipboardData;
        clipboardData.clearData();
        clipboardData.setData("text/plain", "abc");
    };document.addEventListener("copy", copyListener, true);document.execCommand("copy");
}