var $grains = $('grains');
var $ul = $('ul');

grains.forEach(function (grain) {
  var $li = $('<li>');
  var $figure = $('<figure>');
  var $img = $('<img>');
  var $caption = $('<figcaption>');

  $caption.html(dino.name);
  $img.attr('src', 'images/' + dino.img);

  $figure.append($img, $caption);
  $li.append($figure);
  $ul.append($li);

});
