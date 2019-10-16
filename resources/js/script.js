$(document).ready(function() {
  $(".js--section-sights").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "100px"
    }
  );

  $(".js--scroll-to-pictures").click(function() {
    $("html, body").animate({ scrollTop: $(".js--section-pictures").offset().top }, 1000);
  });
  $(".js--scroll-to-form").click(function() {
    $("html, body").animate({ scrollTop: $(".js--section-form").offset().top }, 1000);
  });

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

    $(".js--wp-1").waypoint(
      function(direction) {
        $(".js--wp-1").addClass("animated fadeInDown");
      },
      {
        offset: "80%"
      }
    );
    
    
    $(".js--wp-2").waypoint(function(direction){
      var element =  document.querySelector('.js--wp-2');
      element.classList.add('animated', 'slideInRight');
      element.addEventListener('animationend', function(){
        var element =  document.querySelector('.js--wp-3');
        element.classList.add('animated', 'slideInRight');
        element.addEventListener('animationend', function(){
          var element =  document.querySelector('.js--wp-4');
          element.classList.add('animated', 'slideInRight');
          element.addEventListener('animationend', function(){
            var element =  document.querySelector('.js--wp-5');
            element.classList.add('animated', 'slideInRight');
          })
          })    
      })
      
    },{
      offset: "60%"
    });

  $(".js--wp-6").waypoint(
    function(direction) {
      $(".js--wp-6").addClass("animated fadeIn");
    },
    {
      offset: "80%"
    }
  );
  $(".js--wp-7").waypoint(
    function(direction) {
      $(".js--wp-7").addClass("animated fadeIn");
    },
    {
      offset: "80%"
    }
  );
  $(".js--wp-8").waypoint(
    function(direction) {
      $(".js--wp-8").addClass("animated fadeIn");
    },
    {
      offset: "80%"
    }
  );
  $(".js--wp-9").waypoint(
    function(direction) {
      $(".js--wp-9").addClass("animated fadeIn");
    },
    {
      offset: "80%"
    }
  );
  $(".js--wp-10").waypoint(
    function(direction) {
      $(".js--wp-10").addClass("animated fadeIn");
    },
    {
      offset: "80%"
    }
  );
  $(".js--wp-11").waypoint(
    function(direction) {
      $(".js--wp-11").addClass("animated fadeIn");
    },
    {
      offset: "80%"
    }
  );
});
