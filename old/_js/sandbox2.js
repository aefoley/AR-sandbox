
       
    var dDay = new Date();
    var cDay = dDay.getDay();
    var dayOweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var hDay = dDay.getHours();

   

    var tDay = "<br> Current Time is: " + dDay.getHours() + ":" + dDay.getMinutes() + "PM " + dDay.getSeconds();
 
    function formatHours(hDay) {
      var theHours = 0;
      if(hDay > 12) {
        theHours = hDay - 12;
      } else {
        theHours = hDay;
      }
      return theHours;
    }

    foo = formatHours(hDay);

    document.getElementById("alpha").innerHTML ="Today is: " + dayOweek[cDay] + " " + tDay + " "  + foo;

  
    //foo = dayOweek.toString();

    document.write("Today is: " + dayOweek[cDay]);
