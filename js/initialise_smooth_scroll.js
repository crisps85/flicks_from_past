$(document).ready(function () {
  $("#logoParade").smoothDivScroll({
    autoScrollingMode: "always", 
    autoScrollingDirection: "endlessLoopLeft", 
    autoScrollingStep: 1, 
    autoScrollingInterval: 45, 
    getContentOnLoad: { 
      method: "getAjaxContent",
      content: "ajaxContent.html",
      manipulationMethod: "replace"
    }
  });
      
  $("#logoParadeTwo").smoothDivScroll({
    autoScrollingMode: "always", 
    autoScrollingDirection: "endlessLoopRight", 
    autoScrollingStep: 2, 
    autoScrollingInterval: 5, 
    getContentOnLoad: { 
      method: "getAjaxContent",
      content: "ajaxContent.html",
      manipulationMethod: "replace"
    }
  });
      
  $("#logoParadeThree").smoothDivScroll({
    autoScrollingMode: "always", 
    autoScrollingDirection: "endlessLoopLeft", 
    autoScrollingStep: 1, 
    autoScrollingInterval: 15, 
    getContentOnLoad: { 
      method: "getAjaxContent",
      content: "ajaxContent.html",
      manipulationMethod: "replace"
    }
  });
  $("#logoParade").bind("mouseover", function() {
  $(this).smoothDivScroll("stopAutoScrolling");
}).bind("mouseout", function() {
  $(this).smoothDivScroll("startAutoScrolling");
});
      
// Second logo parade
$("#logoParadeTwo").bind("mouseover", function() {
  $(this).smoothDivScroll("stopAutoScrolling");
}).bind("mouseout", function() {
  $(this).smoothDivScroll("startAutoScrolling");
});
      
// Thirs logo parade
$("#logoParadeThree").bind("mouseover", function() {
  $(this).smoothDivScroll("stopAutoScrolling");
}).bind("mouseout", function() {
  $(this).smoothDivScroll("startAutoScrolling");
});
});