$(function(){
    const signUpForm = $(".signupForm");
    const signInButton = $("#signInButton");
    const close = $(".close");
    const body = $("body")
    signInButton.click(function (){
        signUpForm.fadeIn(1000)
    })
    close.click(function (){
        signUpForm.fadeOut(1000);
    })
    })
