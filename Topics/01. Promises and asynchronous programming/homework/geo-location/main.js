function getLocation() {
  return new Promise((success, error) => {
    navigator.geolocation.getCurrentPosition(success, error);
  });
}

function showPosition(position) {
  let coordinates = position.coords.latitude + "," + position.coords.longitude;
  let imgUrl = `https://maps.googleapis.com/maps/api/staticmap?center=" ${coordinates} "&zoom=14&size=400x400&sensor=true`;
  $("#container").html("<img src='" + imgUrl + "'>");
}

function showError(error) {
  const DEFAULT_ERROR = 'An unknown error occurred.';
  const ERROR_CATALOG = [
    'You denied to share location.',
    'Unavailable information about your location.',
    'You should respond the request for share your location.'
  ];
  let errorMessage = ERROR_CATALOG[error.code - 1] || DEFAULT_ERROR;
  $("#container").html(errorMessage);
}

$(window).load(function () {
  $("#allocate").on("click", () => {
    getLocation()
      .then(showPosition)
      .catch(showError);
  });
});