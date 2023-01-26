
var icon=document.querySelector(".icon")

var show = document.querySelector("input");
var input1 = document.querySelector(".value1");
var input2 = document.querySelector(".value2");
var input3 = document.querySelector(".value3");
var input4 = document.querySelector(".value4");
var input5 = document.querySelector(".value5");
var input6 = document.querySelector(".value6");
var input7 = document.querySelector(".value7");
var input8 = document.querySelector(".value8");
var input9 = document.querySelector(".value9");

var icon1 =document.querySelector(".icon1")
var icon2 =document.querySelector(".icon2")
var icon3 =document.querySelector(".icon3")


async function getData() {
  
  try {
    var show = document.querySelector("input").value;
    var data = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q='+show+'&appid=276b65c58c6702d4da22a77937639dd5#units=metric'
      );

   
      
    //marhale badi pars kardan ke etelat mofide parse shode bede

    var result = await data.json(); //vaghti minivisim await sabr mikone "data.json()" anjam beshe
   
   
    // var data2= await fetch(
    //   "http://api.openweathermap.org/data/2.5/weather?q="+show
    // );
    // var iconResult=await data2.json();
    function mytime(x) {
      
      
      var dateFormat = new Date(x*1000);
      
      var date = dateFormat.getDate();
      
      var m = dateFormat.getMonth() + 1;
      
      var d = dateFormat.getFullYear();
      
      var h = dateFormat.getHours();
      
      var m = dateFormat.getMinutes();
      
      var s = dateFormat.getSeconds();
      return(`${h}:${m}:${s}`);
    }
     
    input1.textContent = result.name ;
    input2.textContent = mytime(result.sys.sunrise)+" AM";
    input3.textContent = mytime(result.sys.sunset)+" PM";
    input4.textContent = Math.floor(result.main.temp-272.15)+" 'C";
    input5.textContent = Math.floor(result.main.feels_like-272.15)+" 'C";
    input6.textContent = result.main.pressure+" PASCAL";
    input7.textContent = result.main.humidity+"%";
    input8.textContent = result.weather[0].description;
    input9.textContent = result.wind.speed;
     
    // var iconId=iconResult.daily.weather.id
    // icon1.textContent=iconResult.daily.weather.main;
    // icon2.textContent=iconResult.daily.weather.description;
    // icon2.textContent=iconResult.daily.weather.icon;

    // console.log(result);
  } catch (error) {
    console.log(error.message);
    alert("Wrong city name")
    input2.textContent="";
    input3.textContent="";
    input4.textContent="";
    input5.textContent="";
    input6.textContent="";
    input7.textContent="";
    input8.textContent="";
    input9.textContent="";

    }
  }
  // async  function wheather(){
  //   try {
  //     var show = document.querySelector("input").value;
  //     var status= await fetch("http://api.openweathermap.org/data/2.5/weather?q="+show)
  //     var iconResult = await status.json();
  //     icon1.textContent=iconResult.main;
  //     icon2.textContent=iconResult.description;
  //     // icon3.textContent=iconResult.icon;
    
  //   } catch (error) {
      
  //   }
    
  //      }
