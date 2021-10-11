$hamburgerClk = $(".hamburger");
$smallMenuClk = $("#smallMenuItems");
smallMenuToggle = false;

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
