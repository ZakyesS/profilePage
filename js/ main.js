// MAIN

$("tr td:nth-of-type(2) img").on({
  mouseenter: e => {
    if ($(e.relatedTarget).attr("class")) {
      //   console.log($(e.relatedTarget));
      $(e.relatedTarget).prepend(`<span>${$(e.target).attr("alt")}</span>`);
      // } else {
      //   console.log(e.relatedTarget);
      //   $(e.relatedTarget).prepend("hello");
    }

    //   $("span").toggleClass(descpImage);
  },
  mouseleave: e => {
    // console.log($(e.target));
    if (e) {
      //   console.log($(e.target).before());
      $("span").remove();
    }
  }
});
