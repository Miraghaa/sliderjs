let img = document.querySelector('.slider img')
let back = document.querySelector('.back1')
let next = document.querySelector('.next1')




let users = []
 function getusers() {
    fetch('https://randomuser.me/api/?results=100')
    .then(res=> res.json())
    .then(data=>{
        let x = ''
        for(let user of data.results){
            users.push(user)
            document.getElementById('count').innerHTML=users.length
          x+=`
          <div class="col-lg-2">
            <div class="kart">
              <img src="${user.picture.medium}" alt="">
              <div>
                  <h5>${user.name.first} ${user.name.last}</h5>
                  <p>Tel : ${user.phone}</p>
                  <p class="as">Email : ${user.email}</p>
              </div>
            </div>
           </div>
          `
        }
        document.querySelector('#list').innerHTML = x
    
    })
    .catch(err => console.log(Error))
}

function sliders() {
    fetch('https://randomuser.me/api/?results=1')
    .then(res=> res.json())
    .then(data=>{
        let z = ''
        for(let user of data.results){
          z+=`
          <img src="${user.picture.medium}" alt="">
          `
        }
        document.querySelector('.slider').innerHTML = z
    })
    .catch(err => console.log(Error))
    
    setInterval(() => {
        fetch('https://randomuser.me/api/?results=1')
    .then(res=> res.json())
    .then(data=>{
        let z = ''
        for(let user of data.results){
          z+=`
          <img src="${user.picture.medium}" alt="">
          
          `
        }
        document.querySelector('.slider').innerHTML = z
    
    })
    .catch(err => alert('internet getdi'))
    }, 2000);
   
}
sliders()
getusers()

let select = document.getElementById('slc')

select.onchange = function() {
    let x = ''
   let filter = users.filter(user=> user.gender === this.value)
    for (let user of filter){
        document.getElementById('count').innerHTML=filter.length
        x+= `
        <div class="col-lg-2">
        <div class="kart">
            <img src="${user.picture.medium}" alt="">
            <div>
                <h5>${user.name.first} ${user.name.last}</h5>
                <p>Tel : ${user.phone}</p>
                <p class="as">Email : ${user.email}</p>
            </div>
        </div>
    </div>
        `
    }
    document.querySelector('#list').innerHTML = x
}
