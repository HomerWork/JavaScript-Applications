const popup = function () {
  const $msg = $('<div>');
  $msg.html('Redirecting after several seconds.');
  $msg.insertBefore($("#redirect"));

  const REDIRECT_PROMISE = new Promise((success) => {
    setTimeout(function () {
      success("https://pastebin.com/7Eqm57mR");
    }, 2000);
  });

  return REDIRECT_PROMISE;
}

function load(url) {
  window.location = url;
}

$(window).load(function () {
  $("#redirect").on("click", () => {
    popup().then(load);
  });
});