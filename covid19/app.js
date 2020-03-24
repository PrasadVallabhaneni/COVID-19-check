document.getElementById("finalresult").onclick = function() {
  location.reload();
};
hideall();
hide("finalsubmit");
hide("container");
hide("finalresult");
var ip1, ip2, ip3, ip4, i, input, score, scorecard, sum;

document.getElementById("covid").onclick = function() {
  show("container");
  show("sym1");

  score = 0;
  // change();

  document.getElementById("que1").onchange = function() {
    show("sym2");
    hide("sym1");
    answer1();
  };
  document.getElementById("que2").onchange = function() {
    show("sym3");
    hide("sym2");
    answer2();
  };
  document.getElementById("que3").onchange = function() {
    show("sym4");
    hide("sym3");
    answer3();
  };
  document.getElementById("que4").onchange = function() {
    show("sym5");
    hide("sym4");
    answer4();
  };
  document.getElementById("que5").onchange = function() {
    show("sym6");
    hide("sym5");
    answer5();
  };
  document.getElementById("que6").onchange = function() {
    show("sym7");
    hide("sym6");
    answer6();
  };
  document.getElementById("que7").onchange = function() {
    show("sym8");
    hide("sym7");
    answer7();
  };
  document.getElementById("que8").onchange = function() {
    show("sym9");
    hide("sym8");
    answer8();
  };
  document.getElementById("que9").onchange = function() {
    show("sym10");
    hide("sym9");
    answer9();
  };
  document.getElementById("que10").onchange = function() {
    show("sym11");
    hide("sym10");
    answer10();
  };
  document.getElementById("que11").onchange = function() {
    show("sym12");
    hide("sym11");
    answer11();
  };
  document.getElementById("que12").onchange = function() {
    hide("que12");
    show("finalsubmit");
    answer12();
  };
  results();
};

function hide(Id) {
  document.getElementById(Id).style.display = "none";
}
function show(Id) {
  document.getElementById(Id).style.display = "block";
}
function hideall() {
  for (i = 1; i < 13; i++) {
    hide("sym" + i);
  }
}
// function change() {

//   for (i = 1; i < 12; i++) {
//     var c=i+1;

//     document.getElementById("que"+i).onchange = function() {

//       show("sym"+c);
//       hide("sym"+i);

//     }
//   }
// }

// function answers() {
//   for (i = 1; i < 3; i++) {
//     input = document.getElementById("que" + i).value;
//     if (input == "Yes") {
//       score++;
//     }
//   }
// }

function answer1() {
  ip1 = document.getElementById("que1").value;

  if (ip1 == "Yes") {
    score++;
  }
}
function answer2() {
  ip2 = document.getElementById("que2").value;
  if (ip2 == "Yes") {
    score++;
  }
}
function answer3() {
  ip3 = document.getElementById("que3").value;
  if (ip3 == "Yes") {
    score++;
  }
}
function answer4() {
  ip4 = document.getElementById("que4").value;
  if (ip4 == "Yes") {
    score++;
  }
}
function answer5() {
  ip5 = document.getElementById("que5").value;
  if (ip5 == "Yes") {
    score++;
  }
}
function answer6() {
  ip6 = document.getElementById("que6").value;
  if (ip6 == "Yes") {
    score++;
  }
}
function answer7() {
  ip7 = document.getElementById("que7").value;
  if (ip7 == "Yes") {
    score++;
  }
}
function answer8() {
  ip8 = document.getElementById("que8").value;
  if (ip8 == "Yes") {
    score += 2;
  }
}
function answer9() {
  ip9 = document.getElementById("que9").value;
  if (ip9 == "Yes") {
    score += 2;
  }
}
function answer10() {
  ip10 = document.getElementById("que10").value;
  if (ip10 == "Yes") {
    score += 3;
  }
}
function answer11() {
  ip11 = document.getElementById("que11").value;
  if (ip11 == "Yes") {
    score += 3;
  }
}
function answer12() {
  ip12 = document.getElementById("que12").value;
  if (ip12 == "Yes") {
    score += 3;
  }
}
// function call(){
// var p1 = document.getElementById("que" +i).value;

// if (p1 == "Yes") {
//   score++;
// }
// }
function results() {
  document.getElementById("finalsubmit").onclick = function() {
    show("finalresult");
    hide("que12");
    hide("finalsubmit");
    if (score < 3) {
      document.getElementById("result").innerHTML =
        "May be Stress related and observe for a while with good care and precautions";
      document.getElementById("finalresult").style.background = "lightyellow";
    } else if (score > 2 && score < 6) {
      document.getElementById("result").innerHTML =
        "Hydrate properly with care of personal hygiene. Observe and Re-evaluate after 2-days.";
      document.getElementById("finalresult").style.background = "lightgreen";
    } else if (score > 5 && score < 13) {
      document.getElementById("result").innerHTML =
        "Your condition is not well.Seek a consultation with Doctor.";
      document.getElementById("finalresult").style.background = "lightsalmon";
    } else {
      document.getElementById("result").innerHTML =
        "Its an emergency...Call the DOH Hotline 02-8-651-7800.";
      document.getElementById("finalresult").style.background = "red";
      document.getElementById("finalresult").style.color = "White";
    }
  };
}
