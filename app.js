$(document).ready(function () {
  var resultlist = $("#results");
  resultlist.text("injected by jquerry");

  var toggleButton = $("#toggleButton");
  toggleButton.on("click", function () {
    console.log("button clicked");
    resultlist.toggle(500);

    if (toggleButton.text() === "Hide") {
      toggleButton.text("Show");
    } else {
      toggleButton.text("Hide");
    }
  });

  var results = [];

  function displayresult(results) {
    resultlist.empty();

    $.each(results, function (i, item) {
      var newresult = $(
        "<div class='result'>" +
          "<div class='title'>" +
          item.title +
          "</div> " +
          " <div>" +
          "Level 1:" +
          item.level +
          "</div> " +
          " <div>" +
          "Total videos:" +
          item.total_videos +
          "</div> " +
          " <div>" +
          "Instructor:" +
          item.instructor +
          "</div> " +
          "</div>"
      );

      resultlist.append(newresult);

      $(".result").hover(
        function () {
          // console.log("hover in");
          $(this).css("background-color", "lightgray");
          $(this).css("color", "darkblue");
          $(this).css("border-color", "blue");
        },
        function () {
          // console.log("hover out");
          $(this).css("background-color", "transparent");
          $(this).css("color", "black");
          $(this).css("border-color", "#999");
        }
      );
    });
  }

  $("#loginform").on("submit", function () {
    $.post("/api/login", {}, function (data) {
      console.log("success ::" + data);
      displayresult(data);
    })

      .fall(function (data) {
        console.log("something bad happened!");
      })
      .done(function () {});
  });
  return false;
});

/*  var msz = "hello";
console.log(msz);
var resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = " <p>message injected by js </p> ";

var results = "some imp objects";

function test() {
  var y = "hi";
  z = "where am i?";
  console.log("value of y:" + y);
}

test();
console.log(z);

//result = "another imp job";

console.log(results);

function showmessage(msz) {
  console.log(msz);
}

showmessage("hello word");

function showmessage(msz1, msz2) {
  console.log("Overloaded : " + msz1 + ", " + msz2);
}

showmessage("hi people", " i love u");

function printmessage(msz, showmessage) {
  console.log(msz);
  showmessage("viveklove");
}

printmessage("turulove", showmessage);

var showlove = "vivek loves u.";

function attraction() {
  console.log(showlove);

  var premdiwani = "premdiwana";
  printmessage("letslove", function () {
    console.log("letsmakelove");
  });
}
attraction();

var exam = Object.create({
  title: "javascipt",
  instructor: "vivekrajsharan",
  level: "beginer",
});

console.log(exam);

var result = {
  title: "javascipt",
  instructor: "vivekrajsharan",
  level: "beginer",
};
console.log(result);

result.premium = false;
result.showtotal = function (a, b) {
  return a + b;
};

console.log(result);

results = [
  {
    title: "javat",
    instructor: "vivekrajsharan",
    level: "beginer",
  },
  {
    title: "jc++",
    instructor: "vivekrajsharan",
    level: "beginer",
  },
];
results.push(result);
*/
