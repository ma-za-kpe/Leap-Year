
//BUISNESS LOGIC

var leapYear = function (year) {
  if (year%4 === 0) {
    return true;
  } else {
    return false;
  }
  return false;
}







//UI logi

  $(document).ready(function () {

    $("form#leap-year").submit(function (event) {
      event.preventDefault();
      var year = parseInt($("input#year").val());
      var result = leapYear(year);
      $("#result").text(result);
    });

  });
