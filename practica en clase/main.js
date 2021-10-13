$("body").append(
  '<div id="container" style="height:500px; background-color:yellow"</div>'
);
$("body").append('<button id="boton1">Slide Up</button>');
$("body").append('<button id="boton2">Slide Down</button>');
$("body").append('<button id="boton3">Toggle</button>');
$(`#boton1`).click(() => {
  $(`#container`).slideUp("fast");
});
$(`#boton2`).click(() => {
  $(`#container`).slideDown("fast");
});
$(`#boton3`).click(() => {
  $(`#container`).toggle("fast");
});
