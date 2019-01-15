/**
 * Append a new HTML row into the specific container with the user data
 * @function createProjectsUrls
 * @public
 * @param {object} img
 */
function createProjectsUrls(img) {
  $(img).before(
    `<div class="project-urls" style="display: grid; grid-gap: 10px; grid-template-columns: repeat(2, auto); padding: 0 0 3% 0;" project=${$(
      img
    ).attr("alt")}><a href="https://${$(img).attr(
      "data-project"
    )}" target="_blank rel="noopener noreferrer><i class="fas fa-project-diagram"></i> Page Url</a> <a href="https://github.com/${$(
      img
    ).attr(
      "data-github"
    )}" target="_blank rel="noopener noreferrer><i class="fab fa-github"></i> Github</a></div>`
  );
}

$("table.skills tr td img").on({
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
      `<span class="project-description project-description-display main-card">${$(
        e.target
      ).attr("data")}</span>`
    );
  },
  mouseleave: e => {
    $("span.project-description").remove();
  },
  click: e => {
    while ($("div.project-urls").length === 0) {
      createProjectsUrls(e.target);
    }
    if (
      $("div.project-urls").length !== 0 &&
      $("div.project-urls").attr("project") !== $(e.target).attr("alt")
    ) {
      // remove the previous div.project, the last you click before the actual click.
      let remove = $("div.project-urls").attr("project");
      $(`div.project-urls[project='${remove}']`).remove();
      // create the div.project of actual click.
      createProjectsUrls(e.target);
    }

    $("div.project-urls").on("click", () => {
      $("div.project-urls").remove();
    });
  }
});
