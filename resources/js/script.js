DOMStrings = {
  section_sights: ".js--section-sights",
  section_pictures: ".js--section-pictures",
  section_form: ".js--section-form",
  navigationIcon: ".js--nav-icon i",
  navigationBar: ".js--main-nav",
  scroll_pictures: ".js--scroll-to-pictures",
  scroll_form: ".js--scroll-to-form",

  title_wp: ".js--wp-1",
  sights_wp_1: ".js--wp-2",
  sights_wp_2: ".js--wp-3",
  sights_wp_3: ".js--wp-4",
  sights_wp_4: ".js--wp-5",
  pictures_wp_1: ".js--wp-6",
  pictures_wp_2: ".js--wp-7",
  pictures_wp_3: ".js--wp-8",
  pictures_wp_4: ".js--wp-9",
  pictures_wp_5: ".js--wp-10",
  pictures_wp_6: ".js--wp-11",
  

  navigation: "nav",
  sticky: "sticky",
  hamburger_icon: "ion-navicon-round",
  close_icon: "ion-close-round"
};

$(document).ready(function() {
  $(DOMStrings.section_sights).waypoint(
    function(direction) {
      if (direction == "down") {
        $(DOMStrings.navigation).addClass(DOMStrings.sticky);
      } else {
        $(DOMStrings.navigation).removeClass(DOMStrings.sticky);
      }
    },
    {
      offset: "100px"
    }
  );

  window.onresize = function() {
    let width = $(window).width() + 17;
    const navigationBar = $(DOMStrings.navigationBar);
    const navigationIcon = $(DOMStrings.navigationIcon);

    if (width > 480 || navigationIcon.hasClass(DOMStrings.close_icon)) {
      navigationBar.css("display", "block");
    } else {
      navigationBar.css("display", "none");
    }
  };

  $(DOMStrings.navigationIcon).click(function() {
    const navigationBar = $(DOMStrings.navigationBar);
    const navigationIcon = $(this);

    navigationBar.slideToggle(200);

    if (navigationIcon.hasClass(DOMStrings.hamburger_icon)) {
      navigationIcon.addClass(DOMStrings.close_icon);
      navigationIcon.removeClass(DOMStrings.hamburger_icon);
    } else {
      navigationIcon.addClass(DOMStrings.hamburger_icon);
      navigationIcon.removeClass(DOMStrings.close_icon);
    }
  });

  $(DOMStrings.scroll_pictures).click(function() {
    $("html, body").animate({ scrollTop: $(DOMStrings.section_pictures).offset().top }, 1000);
  });

  $(DOMStrings.scroll_form).click(function() {
    $("html, body").animate({ scrollTop: $(DOMStrings.section_form).offset().top }, 1000);
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
        let target = $(this.hash);
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
              let $target = $(target);
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

  $(DOMStrings.title_wp).waypoint(     
    function() {      
      $(DOMStrings.title_wp).addClass("animated fadeInDown");
    },
    {
      offset: "80%"
    }
  );

  $(DOMStrings.sights_wp_1).waypoint(
    function() {
      const element = document.querySelector(DOMStrings.sights_wp_1);
      element.classList.add("animated", "slideInRight");
      element.addEventListener("animationend", function() {
        const element = document.querySelector(DOMStrings.sights_wp_2);
        element.classList.add("animated", "slideInRight");
        element.addEventListener("animationend", function() {
          const element = document.querySelector(DOMStrings.sights_wp_3);
          element.classList.add("animated", "slideInRight");
          element.addEventListener("animationend", function() {
            const element = document.querySelector(DOMStrings.sights_wp_4);
            element.classList.add("animated", "slideInRight");
          });
        });
      });
    },
    {
      offset: "60%"
    }
  );

  $(DOMStrings.pictures_wp_1).waypoint(
    function() {
      $(DOMStrings.pictures_wp_1).addClass("animated fadeIn");
    },
    {
      offset: "80%"
    }
  );
  $(DOMStrings.pictures_wp_2).waypoint(
    function() {
      $(DOMStrings.pictures_wp_2).addClass("animated fadeIn");
    },
    {
      offset: "80%"
    }
  );
  $(DOMStrings.pictures_wp_3).waypoint(
    function() {
      $(DOMStrings.pictures_wp_3).addClass("animated fadeIn");
    },
    {
      offset: "80%"
    }
  );
  $(DOMStrings.pictures_wp_4).waypoint(
    function() {
      $(DOMStrings.pictures_wp_4).addClass("animated fadeIn");
    },
    {
      offset: "80%"
    }
  );
  $(DOMStrings.pictures_wp_5).waypoint(
    function() {
      $(DOMStrings.pictures_wp_5).addClass("animated fadeIn");
    },
    {
      offset: "80%"
    }
  );
  $(DOMStrings.pictures_wp_6).waypoint(
    function() {
      $(DOMStrings.pictures_wp_6).addClass("animated fadeIn");
    },
    {
      offset: "80%"
    }
  );
});
