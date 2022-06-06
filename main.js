var url ="https://www.figma.com/file/xrYDNxcZYmxyez5QWBihmc/RocketCoffee-(Copy)?node-id=326%3A81";
var btn = document.getElementById("btn");

function openInNewTab(url) {
  var win = window.open(url,'_blank');
  win.focus()
}

btn.addEventListener('click', function() {

  openInNewTab(url);

});
