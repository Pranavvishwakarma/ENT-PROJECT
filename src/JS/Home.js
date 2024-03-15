
  $(document).ready(function(){
  $('#navbarDropdownServices').hover(function(){
    $(this).attr('aria-expanded', 'true');
    $(this).parent('.nav-item.dropdown').addClass('show');
    $(this).next('.dropdown-menu').addClass('show');

    
    $('.dropdown-item').hide();

   
    $('.dropdown-item').each(function(i){
      $(this).delay(100 * i).fadeIn(500);
    });

  }, function(){
    // This function is for mouse out
  });

  // Close the dropdown when mouse leaves the dropdown area
  $('.nav-item.dropdown').mouseleave(function(){
    $(this).removeClass('show');
    $(this).find('.dropdown-menu').removeClass('show');
    $(this).find('#navbarDropdownServices').attr('aria-expanded', 'false');
    $('.dropdown-item').show(); // Reset to show all items for next hover
  });
});
