// highlight menu according to current page
(function(){
  var page = window.__PAGE__;
  var links = document.querySelectorAll('.nav a');
  for (var i = 0; i < links.length; i++){
    if (links[i].dataset.page === page){
      links[i].classList.add('active');
    }
  }
})();





