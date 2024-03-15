const typed  = new Typed(' .multiple-text',{
    strings: ['Diagnostic', 'Medical', 'Surgical'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
}); 
const typed1  = new Typed('.typed-2',{
    strings: ['Throat Services'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
}); 


//   $(document).ready(function(){
//   $('#navbarDropdownServices').hover(function(){
//     $(this).attr('aria-expanded', 'true');
//     $(this).parent('.nav-item.dropdown').addClass('show');
//     $(this).next('.dropdown-menu').addClass('show');

//     // Hide all dropdown items initially
//     $('.dropdown-item').hide();

//     // Show each dropdown item one by one
//     $('.dropdown-item').each(function(i){
//       $(this).delay(100 * i).fadeIn(500);
//     });

//   }, function(){
//     // This function is for mouse out
//   });

//   // Close the dropdown when mouse leaves the dropdown area
//   $('.nav-item.dropdown').mouseleave(function(){
//     $(this).removeClass('show');
//     $(this).find('.dropdown-menu').removeClass('show');
//     $(this).find('#navbarDropdownServices').attr('aria-expanded', 'false');
//     $('.dropdown-item').show(); // Reset to show all items for next hover
//   });
// });

