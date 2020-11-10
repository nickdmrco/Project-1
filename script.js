
    document.getElementById('submit').addEventListener('click', event => {
    event.preventDefault()
    let map;
    let search = document.getElementById('search').value

      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=AIzaSyDGyDl0iOTK6HsWG19I7XkNjwsJlrIsEII`)
      .then(res => {
        console.log(res)



        // function initMap() {
        //   map = new google.maps.Map(document.getElementById("map"), {
        //     center: 'search',
        //     zoom: 8,
        //   });
        // }

      })
  })    
