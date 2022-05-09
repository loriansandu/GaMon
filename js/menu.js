function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    var body = document.body;
    var googleMap = document.getElementById('googleMap');
    var pageSubtitle = document.getElementById('page-subtitle');
    if (googleMap.style.display !== 'none' &&  pageSubtitle.style.display !== 'none') {
      googleMap.style.display = 'none';
      pageSubtitle.style.display = 'none';
    }
    else {
      googleMap.style.display = 'flex';
      pageSubtitle.style.display = 'flex';
    }
    



  
  }