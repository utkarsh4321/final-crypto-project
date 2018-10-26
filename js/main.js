const signin = document.querySelector(".signin"),
  signup = document.querySelector(".signup");

// EVENT FOR THE DOM CONTENT LOADED

document.addEventListener("DOMContentLoaded", e => {
  if (window.location.pathname === "/final-crypto-project/index.html") {
    let item = document.head.appendChild(document.createElement("style"));
    item.innerHTML = `.signin a::after {
      content: '';
      position: absolute;
      width: 15px;
      height: 15px;
      border: 3px solid #2c3e50;
     background: #fff;
      left: -9px;
      top: 12px;
      right:auto;
      border-radius: 50%;
    }
    .signin{
   background: rgba(255, 255, 255, 0.37);

   }

     .signup{
   background:transparent;

    }
    .signup a::after {
    content: '';
       position: absolute;
       width: 0px;
     height: 0px;

    }

     `;
  } else if (window.location.pathname === "/final-crypto-project/signup.html") {
    let item = document.head.appendChild(document.createElement("style"));
    item.innerHTML = `

     .signup a::after {
       content: '';
       position: absolute;
       width: 15px;
       height: 15px;
       border: 3px solid #4ca1af;
       background: #fff;
       left: auto;
       top: 12px;
      right:-7px;
       border-radius: 50%;
   }
    .signup{
     background: rgba(255, 255, 255, 0.37);

        }
         .signin{
      background:transparent;

        }
        .signin a::after {
          content: '';
          position: absolute;
          width: 0px;
         height: 0px;

        }

    `;
  }

  e.preventDefault();
});

// APPLY THE EVENTLISTENER
signin.addEventListener("click", e => {
  let item = document.head.appendChild(document.createElement("style"));
  item.innerHTML = `.signin a::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border: 3px solid #2c3e50;
    background: #fff;
    left: -9px;
    top: 12px;
    right:auto;
    border-radius: 50%;
  }
  .signin{
background: rgba(255, 255, 255, 0.37);

  }
  
  .signup{
background:transparent;


  }
  .signup a::after {
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
   
  }
  
  
  `;
  window.open("./index.html", "_self");
  e.preventDefault();
});
signup.addEventListener("click", e => {
  let item = document.head.appendChild(document.createElement("style"));
  item.innerHTML = `
  
  .signup a::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border: 3px solid #4ca1af;
    background: #fff;
    left: auto;
    top: 12px;
    right:-7px;
    border-radius: 50%;
  }
  .signup{
    background: rgba(255, 255, 255, 0.37);
    
      }
      .signin{
    background:transparent;
    
    
      }
      .signin a::after {
        content: '';
        position: absolute;
        width: 0px;
        height: 0px;
       
      }
  
  
  

  
  
  
  
  
  
  `;
  window.open("./signup.html", "_self");

  e.preventDefault();
});
// EVENT FOR THE VALIDATION

(function() {
  if (window.location.pathname === "/signup.html") {
    document.getElementById("user").addEventListener("keyup", checkUser);
    document.getElementById("user").addEventListener("blur", checkUser);
    document.getElementById("email").addEventListener("keyup", checkEmail);
    document.getElementById("email").addEventListener("blur", checkEmail);
    document.getElementById("phone").addEventListener("keyup", checkPhone);
    document.getElementById("phone").addEventListener("blur", checkPhone);
    document.getElementById("pass").addEventListener("keyup", checkPassword);
    document.getElementById("pass").addEventListener("blur", checkPassword);
  } else if (window.location.pathname === "/index.html") {
    document.getElementById("email").addEventListener("keyup", checkEmail);
    document.getElementById("email").addEventListener("blur", checkEmail);

    // document.getElementById('pass').addEventListener('keyup', checkPassword);
    // document.getElementById('pass').addEventListener('blur', checkPassword);
  }
})();

// ====== FUNCTION FOR THE USER VALIDATION =========

function checkUser(e) {
  const name = document.getElementById("user");
  const re = /^(?![\s.]+$)[a-zA-Z\s.]*$/;
  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
    name.classList.remove("is-valid");
  } else {
    name.classList.add("is-valid");
    name.classList.remove("is-invalid");

    document.getElementById("user").addEventListener("blur", e => {
      setTimeout(function() {
        name.classList.remove("is-valid");
      }, 1000);
      e.preventDefault();
    });
  }

  e.preventDefault();
}
// ====== FUNCTION FOR THE EMAIL VALIDATION =========

function checkEmail(e) {
  const name = document.getElementById("email");
  const re = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}/;
  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
    name.classList.remove("is-valid");
  } else {
    name.classList.add("is-valid");
    name.classList.remove("is-invalid");

    document.getElementById("email").addEventListener("blur", e => {
      setTimeout(function() {
        name.classList.remove("is-valid");
      }, 1000);
      e.preventDefault();
    });
  }
  e.preventDefault();
}
// ====== FUNCTION FOR THE PHONE VALIDATION =========

function checkPhone(e) {
  const name = document.getElementById("phone");
  const re = /^[\+]{0,1}(\d{10,13}|[\(][\+]{0,1}\d{2,}[\13)]*\d{5,13}|\d{2,6}[\-]{1}\d{2,13}[\-]*\d{3,13}$)/;

  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
    name.classList.remove("is-valid");
  } else {
    name.classList.add("is-valid");
    name.classList.remove("is-invalid");

    document.getElementById("phone").addEventListener("blur", e => {
      setTimeout(function() {
        name.classList.remove("is-valid");
      }, 1000);
      e.preventDefault();
    });
  }
  e.preventDefault();
}
// ====== FUNCTION FOR THE PASSWORD VALIDATION =========

function checkPassword(e) {
  const name = document.getElementById("pass");

  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
    name.classList.remove("is-valid");
  } else {
    name.classList.add("is-valid");
    name.classList.remove("is-invalid");

    document.getElementById("pass").addEventListener("blur", e => {
      setTimeout(function() {
        name.classList.remove("is-valid");
      }, 1000);
      e.preventDefault();
    });
  }
  e.preventDefault();
}

// ======= FUNCTION FOR THE BUY ORDER TABLE =====
if (
  window.location.pathname !== "/final-crypto-project/signup.html" &&
  window.location.pathname !== "/final-crypto-project/index.html"
) {
  (function() {
    document.getElementById("nav-nanga-tab").addEventListener("click", e => {
      e.target.classList.add("dada");
      document.getElementById("nav-my-tab").classList.remove("titu");
    });
    document.getElementById("nav-my-tab").addEventListener("click", e => {
      document.getElementById("nav-nanga-tab").classList.remove("dada");
      e.target.classList.add("titu");
    });
  })();
}

// ==== AREA FOR THE APEX CHART ====
// CHART OPTION
const options = {
  chart: {
    height: 250,
    type: "line"
  },
  series: [
    {
      name: "Website Blog",
      type: "column",
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    },
    {
      name: "Social Media",
      type: "line",
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }
  ],
  stroke: {
    width: [0, 4]
  },
  title: {
    text: "Traffic Sources"
  },
  // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  labels: [
    "01 Jan 2001",
    "02 Jan 2001",
    "03 Jan 2001",
    "04 Jan 2001",
    "05 Jan 2001",
    "06 Jan 2001",
    "07 Jan 2001",
    "08 Jan 2001",
    "09 Jan 2001",
    "10 Jan 2001",
    "11 Jan 2001",
    "12 Jan 2001"
  ],
  xaxis: {
    type: "datetime"
  },
  yaxis: [
    {
      title: {
        text: "Website Blog"
      }
    },
    {
      opposite: true,
      title: {
        text: "Social Media"
      }
    }
  ]
};
// INIT CHART
const charts = new ApexCharts(document.getElementById("charts"), options);
// RENDER CHART
charts.render();

// ===== FUNCTION FOR THE TOOLTIPS =======

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});
