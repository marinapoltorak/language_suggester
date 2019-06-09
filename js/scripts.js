$(document).ready(function () {
  $('#submit').click(function (event) {
    event.preventDefault();
    var nameInput = $('input#name').val();
    var emailInput = $('input#email').val();
    var why = $('#why').val();
    var idea = $('#idea').val();
    var platform = $('#platform').val();
    var drive = $('#drive').val();
    var big = $('#big').val();
    $('#initial').show();
    $('#response').hide();
    $('.jumbotron').hide();

    if ((why === 'Sounds super cool!')
    && (why != '$') && (why != 'For the next generation')
    && (idea === 'Nope!') || (idea === 'I live to design')
    && (platform === 'The Web') || (platform === 'Mobile')
    && (drive === 'Quickest')
    && (big === 'UI')) {
      $('#response').show();
      $('.Ruby').hide();
      $('.JavaScript').hide();
      $('.csharp').hide();
      $('.jumbotron').show();
    } else if ((why === '$')
    && (idea === 'Yes')
    && (drive === 'Deepest')
    && (big !== 'UI')) {
      $('#response').show();
      $('.Ruby').hide();
      $('.JavaScript').hide();
      $('.Python').hide();
      $('.jumbotron').show();
    } else if (idea === 'I live to design') {
      $('#response').show();
      $('.Ruby').hide();
      $('.Python').hide();
      $('.csharp').hide();
      $('.jumbotron').show();
    } else {
      $('#response').show();
      $('.Python').hide();
      $('.csharp').hide();
      $('.JavaScript').hide();
      $('.jumbotron').show();
    }

    $('.name').text(nameInput);
    $('.email').text(emailInput);
    $('#languages').fadeIn(duration = 1000);
    $('#initial').slideUp(duration = 1000);
    $('.topbox').slideUp(duration = 1000);

  });
});
