function switchPage() {
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');

    if (page1.style.display === 'none') {
      page1.style.display = 'block';
      page2.style.display = 'none';
    } else {
      page1.style.display = 'none';
      page2.style.display = 'block';
    }
  }