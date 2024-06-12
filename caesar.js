function encrypt() {
    const writtenText = document.getElementById("input-text").value;
const key = parseInt(document.getElementById("key").value);

let encryptedText = "";
for(let i = 0; i < writtenText.length; i++){
    const charCode = writtenText.charCodeAt(i)
    if (charCode >= 65 && charCode <= 90) {
        encryptedText += String.fromCharCode(((charCode - 65 + key) % 26) + 65);
    }

    else if(charCode >= 97 && charCode <= 122) {
        encryptedText += String.fromCharCode(((charCode - 97 + key) % 26) + 97);
    }

    else {
        encryptedText += writtenText[i];
    }
    document.getElementById("output-text").value = encryptedText;
};
}

// decrypted

function decrypt() {
    const writtenText = document.getElementById("input-text").value;
const key = parseInt(document.getElementById("key").value);

let decryptedText = "";
for(let i = 0; i < writtenText.length; i++){
    const charCode = writtenText.charCodeAt(i)
    if (charCode >= 65 && charCode <= 90) {
        decryptedText += String.fromCharCode(((charCode - 65 - key + 26) % 26) + 65);
    }

    else if(charCode >= 97 && charCode <= 122) {
        decryptedText += String.fromCharCode(((charCode - 97 - key + 26) % 26) + 97);
    }

    else {
        decryptedText += writtenText[i];
    }
    document.getElementById("output-text").value = decryptedText;
}
}