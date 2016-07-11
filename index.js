/*
    * LOVELY THINGS
    */
      var list = document.getElementById('list').querySelectorAll('li');

       Array.prototype.slice.call(list).forEach(function(listItem){
          listItem.addEventListener('click', function(e){
          document.getElementById('overlays').style="display:block";  
          var y = this.id;
          var font = document.getElementById(y).querySelectorAll('font');
          var hdr = document.getElementsByClassName('name');
          var phn = document.getElementsByClassName('phne');
          var adr = document.getElementsByClassName('adres');
          var bdg = document.getElementsByClassName('budget');
          var crd = document.getElementsByClassName('credit');
          var atr = document.getElementsByClassName('host');
          console.log(y);
          /*document.getElementById("ovrhdr").innerHTML = hdr[y].innerHTML;  */
          document.getElementById("ovrhdr").innerHTML = (document.getElementById(y).querySelector(' .name').innerHTML);
          document.getElementById("ovrphn").innerHTML = (document.getElementById(y).querySelector(' .phne').innerHTML);
          document.getElementById("ovradr").innerHTML = (document.getElementById(y).querySelector(' .adres').innerHTML);
          document.getElementById("ovrbdg").innerHTML = (document.getElementById(y).querySelector(' .budget').innerHTML);
          document.getElementById("ovrcrd").innerHTML = (document.getElementById(y).querySelector(' .credit').innerHTML);
          document.getElementById("ovratr").innerHTML = (document.getElementById(y).querySelector(' .host').innerHTML);
          });
        });

              

var options = {
  valueNames: [ 'name', 'description', 'category', 'thumb' ]
};


var featureList = new List('externship-sites', options, values);

var values = [ {
  name: "Manchurian",
  phone: "0731 4282626",
  category: "Desi",
  description: "Riders Republic Cafe -&gt; ADDRESS : Vijay Nagar › 81&#44; Near RR Tyres&#44; Sayaji Club Road&#44; Bhamori&#44; Vijay Nagar&#44; Indore<br>700 for two people (approx.)<br> Credit Cards : accepted" ,
  thumb: 4.5
}];


featureList.add({
  name: "Manchurian00" ,
  phone: "0731 4282621" ,
  category: "breakfast" ,
  description: "Ciders Republic Cafe -&gt; ADDRESS : Vijay Nagar › 81&#44; Near RR Tyres&#44; Sayaji Club Road&#44; Bhamori&#44; Vijay Nagar&#44; Indore<br>700 for two people (approx.)<br> Credit Cards : accepted" ,
  thumb: 3.5
});


$('.search').on('keyup', function(event) { // Fired on 'keyup' event

  if($('.list').children().length === 0) { // Checking if list is empty
    console.log('yes');
    $('.not-found').css('display', 'block'); // Display the Not Found message

  } else {
    console.log('no');
    $('.not-found').css('display', 'none'); // Hide the Not Found message.blur()
    //var val = document.getElementById('search').value;
     document.getElementById('search').addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode == 13) {
          document.getElementById('search').blur();
          window.scrollBy(0, 190);
        }
    });
    /*if (val.length > 4) {
      document.getElementById('search').blur();
      window.scrollBy(0, 190);
    };*/
  }
});

$('#filter-breakfast').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "breakfast") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-lunch').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "lunch") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-dinner').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "dinner") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-Chinese').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "Chinese") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-Geek').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "Geek") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-Lebanese').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "Lebanese") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-Coffee').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "Coffee") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-Desi').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "Desi") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-Italian').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "Italian") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-Mexican').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "Mexican") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-Continental').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "Continental") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-none').click(function() {
  featureList.filter();
  return false;
});

