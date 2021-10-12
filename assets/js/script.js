$hamburgerClk = $(".hamburger");
$smallMenuClk = $("#smallMenuItems");
let smallMenuToggle = false;

$hamburgerClk.click(() => {
  if ($smallMenuClk.hasClass("hide")) {
    $smallMenuClk.removeClass("hide");
  } else {
    $smallMenuClk.addClass("hide");
  }
});

$smallMenuClk.click(() => {
  $smallMenuClk.addClass("hide");
});
