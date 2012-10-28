// base64 encode ---------------------------------------------------------------
function encBase64(str) {
    b64_str = base64.encode(str, 1);
    return b64_str;
}

// base64 decode ----------------------------------------------------------------
function decBase64(b64_str) {
    str = base64.decode(b64_str, 1);
    return str;
}

// JSON encode ------------------------------------------------------------------
function encJson(obj) {
    json = JSON.stringify(obj);
    return json;
}

// JSON decode ------------------------------------------------------------------
function decJson(json) {
    obj = JSON.parse(json);
    return obj;
    // obj.params = value
}

// AES128 encode CBC ------------------------------------------------------------
function encAes(str) {
    var key = CryptoJS.enc.Hex.parse(randPass(32));
    var iv  = CryptoJS.enc.Hex.parse(randPass(32));
    var encrypted = CryptoJS.AES.encrypt(str, key, { iv: iv });
    var enc = {};
    enc['key'] = encrypted.key;
    enc['iv'] = encrypted.iv;
    enc['enc'] = encrypted;
    return enc;
}

// AES128 decode CBC -------------------------------------------------------------
function decAes(str, key, iv) {
    var decrypted = CryptoJS.AES.decrypt(str, key, { iv: iv });
    var plaintext = decrypted.toString(CryptoJS.enc.Utf8);
    return plaintext;
}

// ランダム文字列 -------------------------------------------------------------
function randPass(length) {
    length = length || '';
    // var rand = 'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + '0123456789';
    var rand = 'abcdef' + '0123456789';
    rand = rand.split('');
    var pass = '';
    for (var i = 0; i < length; i++) {
        pass += rand[Math.floor(Math.random() * rand.length)];
    }
    return pass;
}