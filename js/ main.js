// MAIN

$("table.skills tr td:nth-of-type(2) img").on({
  mouseenter: e => {
    if ($(e.relatedTarget).attr("class")) {
      $(e.relatedTarget).prepend(`<span>${$(e.target).attr("alt")}</span>`);
    }
  },
  mouseleave: e => {
    if (e) {
      $("span").remove();
    }
  }
});

$("table.projects tr td img").on({
  mouseenter: e => {
    // $("a.project-urls").remove();

    $(e.target).after(
      `<span class="project-description project-description-display">${$(
        e.target
      ).attr("data")}</span>`
    );
  },
  mouseleave: e => {
    $("span.project-description").remove();
  },
  click: e => {
    if ($("div.project-urls").length === 0) {
      $(e.target).before(
        `<div class="project-urls" style="display: grid; grid-gap: 10px; grid-template-columns: repeat(2, auto); padding: 0 0 3% 0;"><a href="https://${$(
          e.target
        ).attr(
          "data-project"
        )}" target="_blank rel="noopener noreferrer><i class="fas fa-project-diagram"></i> Page Url</a> <a href="https://github.com/${$(
          e.target
        ).attr(
          "data-github"
        )}" target="_blank rel="noopener noreferrer><i class="fab fa-github"></i> Github</a></div>`
      );
      $("div.project-urls").on("click", () => {
        $("div.project-urls").remove();
      });
    }
  }
});
