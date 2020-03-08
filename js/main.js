let button = document.getElementById('button')

button.addEventListener("click", ()=>{
  let search = document.getElementById("search").value
  console.log(search)
fetch(`https://api.unsplash.com/search/photos/?query=${search}&client_id=MQw8nyQzJVCvWXax7lNCFVIHVTuKsXb5zk4O2rYR7Zg`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
console.log(response);
document.getElementById('img1').src= response.results[0].urls.regular
document.getElementById('img2').src= response.results[1].urls.regular
document.getElementById('img3').src= response.results[2].urls.regular
document.getElementById('img4').src= response.results[3].urls.regular
document.getElementById('img5').src= response.results[4].urls.regular
document.getElementById('img6').src= response.results[5].urls.regular
document.getElementById('img7').src= response.results[6].urls.regular
document.getElementById('img8').src= response.results[7].urls.regular
document.getElementById('img9').src= response.results[8].urls.regular
document.getElementById('img10').src= response.results[9].urls.regular
document.getElementById('img11').src= response.results[10].urls.regular
document.getElementById('img12').src= response.results[11].urls.regular
document.getElementById('img13').src= response.results[12].urls.regular
document.getElementById('img14').src= response.results[13].urls.regular
// document.getElementById('alt_description').textContent = response[0].alt_description
// document.getElementById('bio').textContent = response[0].user.bio
// document.getElementById('search').src= response[0].query
// document.getElementById('button').src= response[0].query


    })
    .catch(err => {
      console.log(`error ${err}`)
      console.log("sorry, there are no results for your search")
    });
    })
