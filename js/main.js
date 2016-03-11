var $grains = $('grains');
var $ul = $('ul');
var $name = $('name');
var $p = $('p');

grains.forEach(function (grain) {
  var $img = $('<figure>');
  var $h2 = $('<h2>');
  var $p = $('<p>');

  $img.attr('src', 'images/' + grain.img);
  $name.html(grain.name);

  $img.append($img);
  $h2.append($ul);
  $ul.append($li);
  $p.append($ul);

});
