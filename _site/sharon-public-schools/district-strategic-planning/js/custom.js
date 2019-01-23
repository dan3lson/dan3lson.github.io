$( document ).ready(function() {
  $(".link-to-page").click(function() {
    objectiveDiv = $(this);
    html_page = objectiveDiv.data("html") + ".html";
    location.href = html_page;
  });
});
