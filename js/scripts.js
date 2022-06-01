$(document).ready(function () {
  $('#vs').animate(
    {
      top: '+=200px',
    },
    'fast'
  );
  $('#cat-txt').animate(
    {
      left: '+=1000px',
    },
    'fast'
  );
  $('#dog-txt').animate(
    {
      right: '+=1000px',
    },
    'fast'
  );
  $('.dog-closed').animate(
    {
      left: '+=800px',
    },
    'slow'
  );
  $('.cat-closed').animate(
    {
      left: '-=800px',
    },
    'slow'
  );
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
    $('#dog-ul li').first().animate(
      {
        left: '+=200px',
      },
      'slow'
    );
    $('ul#cat-ul')
      .children('li')
      .first()
      .click(function () {
        $(this).remove();
      });
    $('#cat-ul li').animate(
      {
        right: '+=200px',
      },
      'slow'
    );
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
    $('#dog-ul li').animate(
      {
        left: '+=200px',
      },
      'slow'
    );
    $('ul#cat-ul')
      .children('li')
      .first()
      .click(function () {
        $(this).remove();
      });
    $('#cat-ul li').first().animate(
      {
        right: '+=200px',
      },
      'slow'
    );
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
