


  $(window).scroll(function () {
    scroll = $(window).scrollTop();
    // console.log(scroll)
    if (scroll >= 2200) {
        $('.counter').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
          
            {
          
              duration: 2000,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
          
            });  
        
            
          
          });
    } 
});