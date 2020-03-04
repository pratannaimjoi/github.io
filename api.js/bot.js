Call the liff.scanCode()

// scanCode call
document.getElementById('scanQrCodeButton').addEventListener('click', function() {
    if (!liff.isInClient()) {
        sendAlertIfNotInClient();
    } else {
    	if (liff.scanCode) {
	        liff.scanCode().then(result => {
	            // e.g. result = { value: "Hello LIFF app!" }
	            const stringifiedResult = JSON.stringify(result);
	            document.getElementById('scanQrField').textContent = stringifiedResult;
	            toggleQrCodeReader();
	        }).catch(err => {
	            document.getElementById('scanQrField').textContent = "scanCode failed!";
	        });
    	}
    }
});
