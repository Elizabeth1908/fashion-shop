$('.dropdown > .drop-btn').click(function () {
$(this).parent().toggleClass('active');
});




// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.drop-btn')) {
    var dropdown = document.getElementsByClassName("dropdown");
    var i;
    for (i = 0; i < dropdown.length; i++) {
      var openDropdown = dropdown[i];
      if (openDropdown.classList.contains('active')) {
        openDropdown.classList.remove('active');
      }
    }
  }
}

