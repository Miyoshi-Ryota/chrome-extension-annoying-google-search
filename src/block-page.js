
function randomString(length) {
    let string_pool = "abcdefghijklmnopqrstuvwxyz012345689";
    let result = "";
    for (let i = 0; i < length; i++){
        result += string_pool[Math.floor(Math.random() * string_pool.length)];
    }
    return result;
}

document.getElementById("random-string").innerText = randomString(16);
document.getElementById("input-random-string").addEventListener(
    "input", function() {
        if (document.getElementById("random-string").innerText
            === document.getElementById("input-random-string").value) {
            let googleSearchURL = window.location.search.substring(1);
            window.location.replace(googleSearchURL + "&block=no");
        }
    }
)
