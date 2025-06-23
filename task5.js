
// http://api.weatherapi.com/v1/current.json?key=442e0de2a2474504b62140226251406&q=chennai&aqi=no

const fetchDetail = async()=>{
    const target=document.getElementById("location").value;
    const url=`http://api.weatherapi.com/v1/current.json?key=442e0de2a2474504b62140226251406&q=${target}}&aqi=no`;
    const res= await fetch(url);
    const data= await res.json();
    let place=data.location.name;
    let temp=data.current.temp_c;
    let condition=data.current.condition.text;
    displayDetail(place,temp,condition);

}
function displayDetail(location,celcius,status){
    document.getElementById("display").innerHTML=location+"<br><span style='font-size:20px';>"+celcius+"&deg;C</span>";
    let icon="";
    if (status.includes("cloudy")|| status.includes("Cloudy")) {
        icon = "☁️";
    }
    else if(status.includes("thunder")){
        icon="⛈️"
    }
    else if (status.includes("rainy")|| status.includes("Rainy")) {
        icon = "🌧️";
    }
    else if(status.includes("Clear")){
        icon="🌤️";
    }
    document.getElementById("condition").innerHTML=`${icon}`+status+"!";
}
