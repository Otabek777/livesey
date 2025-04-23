$(".asked__block .btn").click(function(){
    $(this).toggleClass("active");
});
function copy() {
    let copyText = document.querySelector(".codecopy");
    copyText.select();
    document.execCommand("copy");
    $(".codecopybtn").addClass("done");
    setTimeout(function(){
        $(".codecopybtn").removeClass("done");
    }, 2000);
}
document.querySelector("#copy").addEventListener("click", copy);