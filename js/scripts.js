$(document).ready(function () {
  $('.dog-closed').click(function () {
    $(this).toggle();
    $('.dog-open').toggle();
    $('#dog-ul').prepend('<li>Bark</li>');
    $('.cat-closed').toggle();
    $('.cat-open').toggle();
    $('#cat-ul').prepend('<li>Meow!!!!</li>');
    $('ul#dog-ul')
      .children('li')
      .first()
      .click(function () {
        $(this).remove();
      });
    $('ul#cat-ul')
      .children('li')
      .first()
      .click(function () {
        $(this).remove();
      });
  });

  $('.cat-closed').click(function () {
    $(this).toggle();
    $('.dog-open').toggle();
    $('#dog-ul').prepend('<li>Bark!!!!</li>');
    $('.dog-closed').toggle();
    $('.cat-open').toggle();
    $('#cat-ul').prepend('<li>Meow</li>');
    $('ul#dog-ul')
      .children('li')
      .first()
      .click(function () {
        $(this).remove();
      });
    $('ul#cat-ul')
      .children('li')
      .first()
      .click(function () {
        $(this).remove();
      });
  });

  $('.dog-open').click(function () {
    $(this).toggle();
    $('.dog-closed').toggle();
    $('.cat-open').toggle();
    $('.cat-closed').toggle();
  });

  $('.cat-open').click(function () {
    $(this).toggle();
    $('.dog-closed').toggle();
    $('.dog-open').toggle();
    $('.cat-closed').toggle();
  });
});
