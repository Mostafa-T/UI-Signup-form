($(function () {

  //ripple effect btn
  // $('.confirm-btn').on('click', function (e) {
  //   // Prevent default button action
  //   e.preventDefault();

  //   // setup
  //   let x = e.clientX - $(this).offset().top;
  //   let y = e.clientY - $(this).offset().left;

  //   $(this).append('<span class="ripple"></span>');

  //   $('.ripple').css({
  //     "top": x + "px",
  //     "left": y + "px"
  //   });
  //   console.log(x, y);
  // });

  // Remove the palce holder on focus

  $('.form-input').on('focus', function () {

    $(this).attr('data-store', $(this).attr('placeholder'));
    $(this).attr('placeholder', '');

  });

  // restore the placeholder on blur
  $('.form-input').on('blur', function () {

    $(this).attr('placeholder', $(this).attr('data-store'));
    $(this).attr('data-store', '');

  });


  // Signup Form
  $('#signUp').on("submit", (event) => {

    //Prevent the form from submitting without data
    event.preventDefault();

    // Set up
    const firstName = $('#firstName');
    const lastName = $('#lastName');
    const userMail = $('#userMail');
    const Passowrd = $('#userPass');

    // Validation conditions

    if (firstName.val() == '') {

      $(firstName).addClass('not-valid');
      $(firstName).siblings().addClass('error-msg').text('first name cannot be empty');

    } if (lastName.val() == '') {

      $(lastName).addClass('not-valid');
      $(lastName).siblings().addClass('error-msg').text('last name cannot be empty');

    } if (userMail.val() == '') {

      $(userMail).addClass('not-valid');
      $(userMail).attr('placeholder', 'email@example/com').css('font-weight', "700");
      $(userMail).siblings().addClass('error-msg').text('looks like this is not E-mail');
    }
    if (Passowrd.val() == '') {

      $(Passowrd).addClass('not-valid');
      $(Passowrd).siblings().addClass('error-msg').text('password cannot be empty');

    }
  });


}));