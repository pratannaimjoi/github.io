The liff.getAccessToken() method gets the current user's access token. You need this access token to call the Social API from any server.

// get access token
document.getElementById('getAccessToken').addEventListener('click', function() {
    if (!liff.isLoggedIn() && !liff.isInClient()) {
        alert('To get an access token, you need to be logged in. Please tap the "login" button below and try again.');
    } else {
        const accessToken = liff.getAccessToken();
        document.getElementById('accessTokenField').textContent = accessToken;
        toggleAccessToken();
    }
});
