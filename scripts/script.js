$(document).ready(function() {
  // isotope
  let $grid = $(".project-pictures").isotope({});
  $(".project-menu").on("click", "button", function() {
    let filterValue = $(this).attr("data-filter");
    $grid.isotope({
      filter: filterValue
    });
  });

  // click class
  $(document).on("click", ".project-menu-btn", function() {
    $(".project-menu-btn").removeClass("project-menu-btn-active");
    $(this).addClass("project-menu-btn-active");
  });

  // read more button
  $(".read-more").on("click", function() {
    // if (
    //   !$(this)
    //     .parent(".post-contex")
    //     .children(".hide-post-text")
    //     .css("display", "none")
    // )
    //   $(this)
    //     .parent(".post-contex")
    //     .children(".hide-post-text")
    //     .hide();
    // else
    //   $(this)
    //     .parent(".post-contex")
    //     .children(".hide-post-text")
    //     .show();
    $(this)
      .parent(".post-contex")
      .children(".hide-post-text")
      .toggle("slide");
  });
});
