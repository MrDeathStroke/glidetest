window.function = function(Email) 
{

  var matched = /^\d{12}$/;

 if (Email.value.match(matched))
  {
    return (true)
  }
    //alert("You have entered an invalid email address!")
    return (false)
}
