$(document).ready(function() {
	$('.burger-icon').click(function(){
        $('.burger-icon').toggleClass('open-menu');
        $('.nawigation').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});



function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
           change.target.classList.add('element-show');
          }
        });
      }
      
      let options = {
        threshold: [0.1] };
      let observer = new IntersectionObserver(onEntry, options);
      let elements = document.querySelectorAll('.portfolio');
      let elementsss = document.querySelectorAll('.portfolio__work');
      let elementss = document.querySelectorAll('.text_item');

      for (let elm of elements) {
        observer.observe(elm);
      }

      for (let ellm of elementss) {
        observer.observe(ellm);
      }
      for (let elllm of elementsss) {
        observer.observe(elllm);
      }
