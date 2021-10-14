let $hamburgerClk = $(".hamburger");
let $smallMenuClk = $("#smallMenuItems");
let $stuarts = $("#stuarts")
let $modalClose = $("#modalClose");
let $modalContainer = $(".modalContainer");
let $modalCard = $(".modalCard");
let $contactBtn = $("button")
let smallMenuToggle = false;

$hamburgerClk.click(() => $smallMenuClk.toggleClass("hide"));
$smallMenuClk.click(() => $smallMenuClk.addClass("hide"));

$modalCard.on("click", (event) => {
    event.stopPropagation();
    console.log(event.target)
    if (event.target.id === $modalClose[0].id){$modalContainer.toggleClass("hide")};
})

$modalContainer.click((event) => $modalContainer.toggleClass("hide"));

$contactBtn.click((event) => {
  $(".modalForm")[0].reset();
  $modalContainer.toggleClass("hide")
});

$(".modalForm").submit((event) => $modalContainer.toggleClass("hide"));
