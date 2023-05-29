function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


//   let startNum = 0,
//   endNum = 7000000,
//   nSecond = 2,
//   resolutionMS = 33,
//   deltaNum = (endNum - startNum) / (1000 / resolutionMS) / nSecond;

// function countIni() {
//   var handle = setInterval(() => {

//     var x = startNum.toLocaleString(undefined, {
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 0
//     });
//     document.querySelector('#number').innerHTML = x.toString();
    
//     // if already updated the endNum, stop
//     if (startNum >= endNum) clearInterval(handle);
    
//     startNum += deltaNum;
//     startNum = Math.min(startNum, endNum);
//   }, resolutionMS);
// }

// countIni();