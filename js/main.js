var $grains = $('grains');
var $ul = $('ul');
var $h2 = $('h2');
var $p = $('p');
var $li = $('li');

grains.forEach(function (grain) {
  var $h2 = $('<h2>');
  var $img = $('<img>');
  var $p = $('<p>');
  var $li = $('<li>');

  $img.attr('src', 'images/' + grain.img);
  $name.html(grain.name);
  $desc.html(grain.desc);

  $li.append($img);
  $li.append($name);
  $li.append($desc);
  $ul.append($li);

});
