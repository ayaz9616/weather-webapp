

const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=4634d43866379b48f4d8f231db69c7fe&q=";

async function changeWeather(citySearch) {

    
    const response = await fetch(url+citySearch);
    const data = await response.json();

    let city = document.querySelector(".city");
    let temp = document.querySelector("#temp");
    let humidity = document.querySelector(".humidityVal");
    let wind = document.querySelector(".windVal");

    city.innerHTML=data.name+" , "+data.sys.country;
    temp.innerText=Math.round(data.main.temp)+"°C";
    humidity.innerText=data.main.humidity+"%";
    wind.innerText=data.wind.speed+" km/h";



    let weatherIcon=document.querySelector(".weatherImg")
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="clouds.png";
    }
    if(data.weather[0].main=="Clear"){
        weatherIcon.src="clear.png";
    }
    if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="drizzle.png";
    }
    if(data.weather[0].main=="Mist"){
        weatherIcon.src="mist.png";
    }
    if(data.weather[0].main=="Snow"){
        weatherIcon.src="snow.png";
    }
}


    let searchButton=document.querySelector(".searchCircle");
    let searchBox=document.querySelector(".searchBox")
    searchButton.addEventListener("click",()=>{
        
        changeWeather(searchBox.value);
        
    });


    const indianCities = [
        "mumbai", "delhi", "bangalore", "hyderabad", "ahmedabad", "chennai", "kolkata", 
        "surat", "pune", "jaipur", "lucknow", "kanpur", "nagpur", "indore", "thane", 
        "bhopal", "visakhapatnam", "pimpri-chinchwad", "patna", "vadodara", "ghaziabad", 
        "ludhiana", "agra", "nashik", "faridabad", "meerut", "rajkot", "kalyan-dombivli", 
        "vasai-virar", "varanasi", "srinagar", "aurangabad", "dhanbad", "amritsar", 
        "navi mumbai", "allahabad", "ranchi", "howrah", "coimbatore", "jabalpur", 
        "gwalior", "vijayawada", "jodhpur", "madurai", "raipur", "kota", "guwahati", 
        "chandigarh", "solapur", "hubballi-dharwad", "bareilly", "moradabad", "mysore", 
        "tiruchirappalli", "tiruppur", "guntur", "bhubaneswar", "salem", "warangal", 
        "mira-bhayandar", "thiruvananthapuram", "bhiwandi", "saharanpur", "gorakhpur", 
        "bikaner", "amravati", "noida", "jamshedpur", "bhilai", "cuttack", "firozabad", 
        "kochi", "nellore", "bhavnagar", "dehradun", "durgapur", "asansol", "rourkela", 
        "nanded", "kolhapur", "ajmer", "gulbarga", "jamnagar", "ujjain", "loni", 
        "siliguri", "jhansi", "ulhasnagar", "jammu", "sangli-miraj-kupwad", "mangalore", 
        "belgaum", "ambattur", "tirunelveli", "malegaon", "gaya", "jalandhar", 
        "udaipur", "maheshtala", "davanagere", "kozhikode", "kurnool", "rajpur sonarpur", 
        "rajahmundry", "bokaro", "south dumdum", "bellary", "patiala", "gopalpur", 
        "agartala", "bhagalpur", "muzaffarpur", "bhatpara", "panihati", "latur", 
        "dhule", "rohtak", "korba", "bhilwara", "berhampur", "muzaffarnagar", 
        "allahabad", "mangalore", "tirupati", "shimoga", "tirupur", "puducherry", 
        "kakinada", "kavali", "tiruchengode", "tiruppur", "vellore", "eluru", 
        "anantapur", "kollam", "kanchipuram", "dindigul", "erode", "hosur", 
        "karur", "nagercoil", "thoothukudi", "pollachi", "kalaburagi", "davangere"
    ];    
const cityList=document.querySelector("#cityList");

// // indianCities.forEach(city=>{
// //     const listItem=document.createElement("li");
    
// //     let flag=true;
// //     for (i = 0; i < searchBOX.innerText.length; i++) {
// //         if(searchBOX.innerText[i]!=city[i]){
// //             flag=false;
// //         }
// //     }
// //     if(flag==true){
// //         listItem.textContent=city;
// //     }
// //     cityList.appendChild(listItem);
// // });


// searchBox.addEventListener('keyup', filterFunction);
// const dropdown = document.getElementById('dropdown');

// // Filter function for the search bar
// function filterFunction() {
//     const filter = searchBox.value.toLowerCase();
//     // dropdown.innerHTML = ''; 

    
//     indianCities.forEach(city => {
//         if (city.toLowerCase().startsWith(filter)) {
//             const listItem = document.createElement('li');
//             listItem.textContent = city;
//             console.log(listItem.textContent);
            
//             dropdown.appendChild(listItem);
//         }
//     });

//     // if (dropdown.childElementCount > 0) {
//     //     dropdown.classList.add('show');
//     // } else {
//     //     dropdown.classList.remove('show');
//     // }
// }

// // listItem.onclick = () => {
// //     searchBox.value = city;
// //     dropdown.classList.remove('show');
// // };





//     // const searchBox = document.querySelector(".searchBox");
//     const dropdown = document.getElementById('dropdown');

//     searchBox.addEventListener('keyup', filterFunction);

//     function filterFunction() {
//         const filter = searchBox.value.toLowerCase();
//         dropdown.innerHTML = ''; // Clear existing content

//         indianCities.forEach(city => {
//             if (city.startsWith(filter)) {
//                 const listItem = document.createElement('li');
//                 listItem.textContent = city;
//                 listItem.onclick = () => {
//                     searchBox.value = city;
//                     dropdown.classList.remove('show');
//                 };
//                 dropdown.appendChild(listItem);
//             }
//         });

//         if (dropdown.childElementCount > 0) {
//             dropdown.classList.add('show');
//         } else {
//             dropdown.classList.remove('show');
//         }
//     }
// });


  
  function filterFunction() {
    let input = document.querySelector(".searchBox");
    // console.log(input.value);
    let filter = input.value.toUpperCase();
    // console.log(filter);
    const ul = document.getElementById("cityList");
    if(filter==""){
      ul.innerHTML='';
      return;
    }
    ul.innerHTML='';
    indianCities.forEach(city => {
      const a = document.createElement("li");
      a.textContent=city.toUpperCase();
      if(a.textContent.startsWith(filter)){
        ul.appendChild(a);
        a.addEventListener("click",()=>{
          searchBox.value=a.innerText;
          ul.innerHTML='';
          changeWeather(a.innerText);
          
        });
      }
      
    });
    


  }
