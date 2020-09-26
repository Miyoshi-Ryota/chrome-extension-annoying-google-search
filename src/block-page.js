
function generateRandomString(length) {
    let string_pool = "abcdefghijklmnopqrstuvwxyz012345689";
    let result = "";
    for (let i = 0; i < length; i++){
        result += string_pool[Math.floor(Math.random() * string_pool.length)];
    }
    return result;
}

let randomString = generateRandomString(24);
let antiCopyingString = "";
for (let i = 0; i < randomString.length; i++) {
    antiCopyingString += randomString.substring(i, i+1) + " ";
}

document.getElementById("random-string").innerText = antiCopyingString;
document.getElementById("input-random-string").addEventListener(
    "input", function() {
        if (randomString
            === document.getElementById("input-random-string").value) {
            let googleSearchURL = window.location.search.substring(1);
            window.location.replace(googleSearchURL + "&block=no");
        }
    }
)
