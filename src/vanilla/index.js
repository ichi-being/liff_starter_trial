import './index.css';
import liff from '@line/liff'

document.addEventListener("DOMContentLoaded", function() {
  liff
    .init({ liffId: process.env.LIFF_ID })
    .then(() => {
        // LIFFアプリが起動された画面の情報を取得
        const context = liff.getContext();
        console.log(context);
        if (!liff.isLoggedIn()) {
            liff.login({ redirectUri: "https://liffdssample.netlify.app/" });
        }
        const idToken = liff.getIDToken();
        console.log(idToken); // print raw idToken object
    })
    .catch((error) => {
        console.log(error)
    })
});
