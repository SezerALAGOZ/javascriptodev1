function getName () {
    var userName = document.querySelector('#userName');
    var userResponse = prompt('Lütfen isminizi giriniz!', 'İsim');
    userName.innerHTML = userResponse.toString();
}

function getLongDate () {
    var currentDate = new Date();
   
   var second = currentDate.getSeconds();
    var minute = currentDate.getMinutes();
    var hour = currentDate.getHours();
    var day = currentDate.getDay();
    var dayAsString;
    
    if (day == 1) {
        dayAsString = "Pazartesi"; 
    }
    else if (day == 2) {
        dayAsString = "Salı";
    }  
    else if (day == 3) {
        dayAsString = "Çarşamba";
    }  
    else if (day == 4) {
        dayAsString = "Perşembe";
    }  
    else if (day == 5) {
        dayAsString = "Cuma";
    }  
    else if (day == 6) {
        ddayAsString = "Cumartesi";
    }  
    else if (day == 7) {
        dayAsString = "Pazar";
    }  


    var tarih = `${hour}:${minute}:${second} ${dayAsString}`; 
    
    document.getElementById("time").innerHTML = tarih;
    
    setTimeout(getLongDate, 1000); // Saniye geçişini sağlar.
}

getName();
getLongDate();