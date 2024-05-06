// Script para generar el code embed de youtube personalizado
// Generator and add iframe to page player after press button with muted and autoplay
document.getElementById("genetator").addEventListener("click", function () {
    let url = document.getElementById("url").value;
    let video_id = url.split("v=")[1];
    let ampersandPosition = video_id.indexOf("&");
    if (ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition);
    }
    let embed = document.getElementById("embed");
    embed.value = `<iframe
width="100%"
height="100%"
src="https://www.youtube.com/embed/${video_id}?autoplay=1&mute=1&cc_load_policy=0">
</iframe>`;
    let iframeplayer = document.getElementById("iframeplayer");
    iframeplayer.innerHTML = embed.value;
});

document.getElementById("copy").addEventListener("click", function () {
    let copyText = document.getElementById("embed");

    if (copyText.value == "") {
        let notification = document.getElementById("notification2");
        notification.classList.add("show");

        clearTimeout(notification.timeoutId);

        notification.timeoutId = setTimeout(() => {
            notification.classList.remove("show");
        }, 800);

        return
    }
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    let notification = document.getElementById("notification1");
    notification.classList.add("show");

    clearTimeout(notification.timeoutId);

    notification.timeoutId = setTimeout(() => {
        notification.classList.remove("show");
    }, 800);
});