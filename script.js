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
    
    if (day == 1) {
        day = "Pazartesi"; 
    }
    else if (day == 2) {
        day = "Salı";
    }  
    else if (day == 3) {
        day = "Çarşamba";
    }  
    else if (day == 4) {
        day = "Perşembe";
    }  
    else if (day == 5) {
        day = "Cuma";
    }  
    else if (day == 6) {
        day = "Cumartesi";
    }  
    else if (day == 7) {
        day = "Pazar";
    }  


    var tarih = `${hour}:${minute}:${second} ${day}`; 
    
    document.getElementById("time").innerHTML = tarih;
    
    setTimeout(getLongDate, 1000); // Saniye geçişini sağlar.
}

getName();
getLongDate();