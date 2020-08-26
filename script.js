'use strict'


const app_id = "52f5ab7b";
const app_key = "8b5bffc3a1fe815f4e114e1feaa433d3";
const url = "https://api.data.charitynavigator.org/v2/Organizations?"

//this function watches the seach button for searches
function waitForClick(){
    $('#searchButton').on('click', e =>{
            console.log(" waitForClick ran and Button was clicked");
            let search = $('#searchText').val();
            let state = $('#searchByState').val();
            let minRatingNum = $('#minRatingNum').val();
            let maxRatingNum = $('#maxRatingNum').val();
            let cityParam = $('#cityParam').val();
            let sortBy = $('#sortBy').val();
        //call the fetch function to get info based on the search value
        fetchData(search, state, minRatingNum, maxRatingNum, cityParam, sortBy);

    })
}

//this function fetches information for the random top rated charities on the home page
function fetchForTRC(){





 fetch(`https://api.data.charitynavigator.org/v2/Organizations?app_id=52f5ab7b&app_key=8b5bffc3a1fe815f4e114e1feaa433d3&minRating=4
`)
.then(response => response.json())
.then(data => updateTopRatedCharities(data))


}


//this function updates the top rated section of the DOM
function updateTopRatedCharities(data){

let num = Math.floor(Math.random() * 96);
let numTwo = num+1;
let numThree = num+2;
let numFour = num+3;
let numFive = num+4;



$('.topRatedList').append(`
<li>
<h4>${data[num].charityName} </h4> <br>
"${data[num].tagLine}" <br>
 Website: <a href= "${data[num].websiteURL}">${data[num].websiteURL}</a>
</li>
`)

$('#TRCOne').on("click", e =>{

$('.topRatedList').html('');

$('.topRatedList').append(`
<li>
<h4>${data[num].charityName} </h4> <br>
"${data[num].tagLine}" <br>
 Website: <a href= "${data[num].websiteURL}">${data[num].websiteURL}</a>
</li>
`)

});


$('#TRCTwo').on("click", e =>{

$('.topRatedList').html('');

    $('.topRatedList').append(`
    <li>
    <h4>${data[numTwo].charityName} </h4> <br>
    "${data[numTwo].tagLine}" <br>
    Website: <a href= "${data[numTwo].websiteURL}">${data[numTwo].websiteURL}</a>
    </li>
    `)

})

$('#TRCThree').on("click", e =>{

$('.topRatedList').html('');

    $('.topRatedList').append(`
    <li>
    <h4>${data[numThree].charityName} </h4> <br>
    "${data[numThree].tagLine}" <br>
    Website: <a href= "${data[numThree].websiteURL}">${data[numThree].websiteURL}</a>
    </li>
    `)

})



$('#TRCFour').on("click", e =>{

$('.topRatedList').html('');

$('.topRatedList').append(`
<li>
<h4>${data[numFour].charityName} </h4> <br>
"${data[numFour].tagLine}" <br>
 Website: <a href= "${data[numFour].websiteURL}">${data[numFour].websiteURL}</a>
</li>
`)

})



$('#TRCFive').on("click", e =>{

$('.topRatedList').html('');

$('.topRatedList').append(`
<li>
<h4>${data[numFive].charityName} </h4> <br>
"${data[numFive].tagLine}" <br>
 Website: <a href= "${data[numFive].websiteURL}">${data[numFive].websiteURL}</a>
</li>
`)

})



}





//this function uses the geolocator api to get the users ip address
function fetchIPAddress(){





fetch('https://freegeoip.app/json/')
.then(response => response.json())
.then(data => showIP(data))


 }


function showIP(data){
fetchForTRNY(data);
}




//this function fetches information for the random top rated charities on the home page
 function fetchForTRNY(data){




  fetch(`https://api.data.charitynavigator.org/v2/Organizations?app_id=52f5ab7b&app_key=8b5bffc3a1fe815f4e114e1feaa433d3&state=${data.region_code}&city=${data.city}&minRating=4`)
.then(response => response.json())
.then(data => updateTRNYdom(data))


}


//this function updates the top rated section of the DOM
function updateTRNYdom(data){



  

$('.topRatedInAreaList').append(`
<li>
<h4>${data[0].charityName} </h4> <br>
"${data[0].tagLine}" <br>
 Website: <a href= "${data[0].websiteURL}">${data[0].websiteURL}</a>
</li>
`)


$('#TRNYOne').on("click", e =>{

$('.topRatedInAreaList').html('');

$('.topRatedInAreaList').append(`
<li>
<h4>${data[0].charityName} </h4> <br>
"${data[0].tagLine}" <br>
 Website: <a href= "${data[0].websiteURL}">${data[0].websiteURL}</a>
</li>
`)

});


$('#TRNYTwo').on("click", e =>{

$('.topRatedInAreaList').html('');

    $('.topRatedInAreaList').append(`
    <li>
    <h4>${data[1].charityName} </h4> <br>
    "${data[1].tagLine}" <br>
    Website: <a href= "${data[1].websiteURL}">${data[1].websiteURL}</a>
    </li>
    `)

})

$('#TRNYThree').on("click", e =>{

$('.topRatedInAreaList').html('');

    $('.topRatedInAreaList').append(`
    <li>
    <h4>${data[2].charityName} </h4> <br>
    "${data[2].tagLine}" <br>
    Website: <a href= "${data[2].websiteURL}">${data[2].websiteURL}</a>
    </li>
    `)

})



$('#TRNYFour').on("click", e =>{

$('.topRatedInAreaList').html('');

$('.topRatedInAreaList').append(`
<li>
<h4>${data[3].charityName} </h4> <br>
"${data[3].tagLine}" <br>
 Website: <a href= "${data[3].websiteURL}">${data[3].websiteURL}</a>
</li>
`)

})



$('#TRNYFive').on("click", e =>{

$('.topRatedInAreaList').html('');

$('.topRatedInAreaList').append(`
<li>
<h4>${data[4].charityName} </h4> <br>
"${data[4].tagLine}" <br>
 Website: <a href= "${data[4].websiteURL}">${data[4].websiteURL}</a>
</li>
`)

})




}


//this function is used to format the search query
function formatQueryParams(params){

    const queryItems = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      return queryItems.join('&');
    
    }


//this function uses fetch to generate information based on the search value
function fetchData(search, state, minRatingNum, maxRatingNum, cityParam, sortBy){
    console.log("fetchData Ran");

     let params = {
        app_id: app_id,
        app_key: app_key,
        search: search,
    }

    if(state != "none") params.state = state;
    if(minRatingNum != "none") params.minRating = minRatingNum;
   if(maxRatingNum != "none") params.maxRating = maxRatingNum;
    if(cityParam != "None") params.city = cityParam;
    if(sortBy != "none") params.sort = sortBy;


    //this program formats the query paramaters
    let searchQuery = formatQueryParams(params)

   
    let searchURL = url + searchQuery;
    


     fetch(searchURL)
    .then(response =>response.json() )
    .then(data => updateDOM(data))
    .catch(err => {
      $('.charityItem').html(`${err.message}`)
    })
    

}



//this fucntion updates the DOM
function updateDOM(data){
    console.log('updateDOM ran')
  
  

  

    if(data.errorMessage){
      console.log('error message occured')
      $('.charityItem').html('Sorry but there are no charities that match your keyword in this database! Try changing the state or using a different keyword.');
    }


    else{

      //updates dom with searched charities 
    // $('.charityItem').html('');

for(let i=0; i<data.length;i++){

if(data[i].websiteURL === null) {
data[i].websiteURL = "There is no registered webiste in the database. Try searching the charity name on google."
}
if(data[i].tagLine === null){
  data[i].tagLine = "This charity has no registered slogan!"
}

if(data[i].mission === null){
  data[i].mission = "This charity has no registered mission!"
}

}

console.log(data[0])


let itemsPerPage = $('#pageSize').val();



$(function() {


  (function(name) {
    var container = $('#pagination-' + name);
    container.pagination({
      dataSource: data,
      locator: 'items',
      totalNumber: 5,
      pageSize: itemsPerPage,
			showPageNumbers: true,
			showPrevious: true,
			showNext: true,
			showNavigator: true,
			showFirstOnEllipsisShow: true,
			showLastOnEllipsisShow: true,
   
      callback: (response, pagination) => {
        //window.console && console.log(22, response, pagination);
        var dataHtml = '<ul>';

        $.each(response,  (index, item) => {
          dataHtml += '<li class="searchResult">' + '<b>' + item.charityName + '</b>' + '<br> <b>Slogan: </b>' + item.tagLine + '<br> <b> Website: </b>' + item.websiteURL + '</li>';
        });

        dataHtml += '</ul>';

        container.prev().html(dataHtml);
      }
    })
  })('demo2');
})










    }
    

}







 $('.searchButton').on('click', e => {
   $('.additionalSearch').slideToggle(200)
    })





$('.menuIcon').on('click', e =>{

$('navItems').toggleClass("hideThis");

});




$(waitForClick)
$(fetchForTRC)
$(fetchForTRNY)
$(fetchIPAddress)
