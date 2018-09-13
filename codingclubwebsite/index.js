

      function displaySection1(x) {
        document.getElementById(x).style.display = "block";
        document.getElementById('div2').style.display = "none";
        document.getElementById('div3').style.display = "none";
        document.getElementById('div4').style.display = "none";
      }
      function displaySection2(x) {
        document.getElementById(x).style.display = "block";
        document.getElementById('div1').style.display = "none";
        document.getElementById('div3').style.display = "none";
        document.getElementById('div4').style.display = "none";
      }
      function displaySection3(x) {
        document.getElementById(x).style.display = "block";
        document.getElementById('div1').style.display = "none";
        document.getElementById('div2').style.display = "none";
        document.getElementById('div4').style.display = "none";
      }
      function displaySection4(x) {
        document.getElementById(x).style.display = "block";
        document.getElementById('div1').style.display = "none";
        document.getElementById('div2').style.display = "none";
        document.getElementById('div3').style.display = "none";
      }

      function hideallSections() {
        document.getElementById('div1').style.display = "none";
        document.getElementById('div2').style.display = "none";
        document.getElementById('div3').style.display = "none";
        document.getElementById('div4').style.display = "none";
      }

    
