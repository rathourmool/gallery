var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var fullImage = function (value, object) {
  console.log("Object", value);
  modal.style.display = "block";
  modalImg.src = value;
};

var span = document.getElementsByClassName("close")[0];


span.onclick = function () {
  modal.style.display = "none";
};

var wedd = document.querySelectorAll(".man");


var inputSrch = document.querySelector("#search");
inputSrch.addEventListener("keyup", (e) => {
  console.log("Search =>", e.target.value);
  if ("man" == e.target.value) {
    for (var i = 0; i < rock.length; i++) {
      rock[i].style.display = "none";
    }
    for (var i = 0; i < underwat.length; i++) {
      underwat[i].style.display = "none";
    }
    for (var i = 0; i < mountainsk.length; i++) {
      mountainsk[i].style.display = "none";
    }
    for (var i = 0; i < pari.length; i++) {
      pari[i].style.display = "none";
    }
    for (var i = 0; i < ocea.length; i++) {
      ocea[i].style.display = "none";
    }
  }
  
});