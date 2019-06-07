$(document).ready(function () {
  $('#submit').click(function (event) {
    event.preventDefault();
    console.log('Click Event is working');
    var nameInput = $('input#name').val();
    var emailInput = $('input#email').val();
    var why = $('#why').val();
    var idea = $('#idea').val();
    var platform = $('#platform').val();
    var drive = $('#drive').val();
    var big = $('#big').val();
    $('#initial').show();
    $('#response').hide();
    $('story-box').show();

    if ((why === 'IDK. because?' || why === 'For the pure joy of it.' || why === 'Sounds super cool!' && why != 'live and learn! reach for the stars!' && why != 'For the next gen. I live to give.') && (idea === 'Nope!' || idea === 'To be honest, I live to design.') && (platform === 'The Web. What else is there?' || platform === 'Mobile!') && (drive === 'Lets make it quick, and I will pick up other skills when I need them.') && (big === 'I am all about that front-end interaction.')) {
      $('#response').show();
      $('.Ruby').hide();
      $('.JavaScript').hide();
      $('.csharp').hide();
      $('story-box').show();

    } else if ((why === 'Get a job!' || why === '$$$$$$$$') && (idea === 'Yes, indeed I do!') && (drive === 'The deepest. In order to bake an apple pie, one must first invent the universe.' || drive === 'Deep. Sort of really deep.') && (big !== 'I am all about that front end interaction')) {
      $('#response').show();
      $('.Ruby').hide();
      $('.JavaScript').hide();
      $('.Python').hide();
      $('.story-box').show();
    } else if (idea === 'To be honest, I live to design. Color, shape, presentation! Others can do the rest.') {
      $('#response').show();
      $('.Ruby').hide();
      $('.Python').hide();
      $('.csharp').hide();
      $('.story-box').show();
    } else {
      $('#response').show();
      $('.Python').hide();
      $('.csharp').hide();
      $('.JavaScript').hide();
      $('.story-box').show();
    }

    $('.name').text(nameInput);
    $('.email').text(emailInput);
    $('.why').text(why);
    $('.idea').text(idea);
    $('.platform').text(platform);
    $('.drive').text(drive);
    $('.big').text(big);

    $('#languages').fadeIn(duration = 1000);
    $('#initial').slideUp(duration = 1000);

  });
});
