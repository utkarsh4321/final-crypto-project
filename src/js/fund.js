const depo = document.querySelectorAll("#deposite"),
  withd = document.querySelectorAll("#withdraw"),
  copy = document.querySelectorAll("#copied");

// ====== CLICK EVENT FOR THE DEPOSITE BUTTON =====

depo.forEach((element, index) => {
  element.addEventListener("click", depositeMe);
  element.addEventListener("mouseover", mouseov);
  element.addEventListener("mouseout", mouseou);
});

// CLICK EVENT FOR THE WITHDRAW SECTION
withd.forEach((element, index) => {
  element.addEventListener("click", withDrawMe);
  element.addEventListener("mouseover", mouseovw);
  element.addEventListener("mouseout", mouseouw);
});

// ==== FUNCTION FOR THE DEPOSITE CLICK EVENT ====

function depositeMe(e) {
  e.target.style.backgroundColor = "green";
  e.target.style.color = "#fff";
  e.target.nextElementSibling.style.backgroundColor = "transparent";
  e.target.nextElementSibling.style.color = "red";
  e.target.classList.add("maa");
  console.log(e.target);
  depo.forEach(element => {
    if (element !== e.target) {
      element.style.color = "green";
      element.style.backgroundColor = "transparent";
      element.classList.remove("maa");
    }
  });
  withd.forEach(element => {
    if (element !== e.target) {
      element.style.color = "red";
      element.style.backgroundColor = "transparent";
      element.classList.remove("padaka");
    }
  });

  console.log("ut is now");

  e.preventDefault();
}
// ==== FUNCTION FOR THE WITHDRAW SECTION ====
function withDrawMe(e) {
  e.target.style.backgroundColor = "red";
  e.target.style.color = "#fff";
  e.target.previousElementSibling.style.backgroundColor = "transparent";
  e.target.previousElementSibling.style.color = "green";
  e.target.classList.add("padaka");
  withd.forEach(element => {
    if (element !== e.target) {
      element.style.color = "red";
      element.style.backgroundColor = "transparent";
      element.classList.remove("padaka");
    }
  });
  depo.forEach(element => {
    if (element !== e.target) {
      element.style.color = "green";
      element.style.backgroundColor = "transparent";
      element.classList.remove("maa");
    }
  });
  console.log("please withd me");

  e.preventDefault();
}
// ===== FUNCTION FOR THE MOUSEOVER EVENT ====

function mouseov(e) {
  e.target.style.color = "white";
  e.target.style.backgroundColor = "green";
  if (e.target.classList.contains("maa")) {
    e.target.style.color = "white";
    e.target.style.backgroundColor = "green";
  }
  e.preventDefault();
}

function mouseou(e) {
  e.target.style.color = "green";
  e.target.style.backgroundColor = "transparent";
  if (e.target.classList.contains("maa")) {
    e.target.style.color = "white";
    e.target.style.backgroundColor = "green";
  }

  e.preventDefault();
}
function mouseovw(e) {
  e.target.style.color = "white";
  e.target.style.backgroundColor = "red";
  if (e.target.classList.contains("padaka")) {
    e.target.style.color = "white";
    e.target.style.backgroundColor = "red";
  }
  e.preventDefault();
}
function mouseouw(e) {
  e.target.style.color = "red";
  e.target.style.backgroundColor = "transparent";
  if (e.target.classList.contains("padaka")) {
    e.target.style.color = "white";
    e.target.style.backgroundColor = "red";
  }

  e.preventDefault();
}

// ===== FUNCTION FOR THE COPY THE TEXT ===

copy.forEach(element => {
  element.addEventListener("click", myFunction);
  element.addEventListener("mouseout", outFunc);
});
function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied";
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy";
}
// === JQUERY FOR THE TOGGLE EVENT ===
$(document).ready(function() {
  $("#deposite").click(function() {
    $("#gayab").fadeToggle("slow", () => {
      $("#mere").hide();
    });
    $("#mere").hide();
  });
});
$(document).ready(function() {
  $("#withdraw").click(function() {
    $("#mere").fadeToggle("slow", () => {
      $("#gayab").hide();
    });
    $("#gayab").hide();
  });
});
