const API_KEY = "saoBgvIpS1aw3D5xjQVoQKiBVLVxhOCZGzhYxFmN3Hxhsdp5XH"

let words = [
    "fish",
    "cat",
    "dinosaur",
    "boat",
    "ninja",
    "car",
    "duck"

]

let button_div = document.getElementById("jsButtons")
let gallery_div = document.getElementById("gallery")
let img = document.getElementById("images")
let score_div = document.getElementById("score")

let correct_answer = ""
//let score = 0


words.forEach(function(word) {
    let new_button = document.createElement("button")
    new_button.innerHTML = word
    new_button.classList.add("btn")
    new_button.classList.add("btn-dark")
    new_button.classList.add("margin")

    new_button.onclick = function(){
      if (word==correct_answer) {
        //score++
        score_div.innerHTML++
        generate()
      } else {
        alert("Wrong!")
      }
    }
    button_div.append(new_button)
})

function generate (){
  gallery_div.innerHTML = null
  let random_number = Math.floor((Math.random()*words.length))
  correct_answer = words[random_number]
  fetch(`https://api.tumblr.com/v2/tagged?api_key=${API_KEY}&tag=${correct_answer}&limit=50`)

  .then(function(response) {
    return response.json() // convert the raw response into a JSON
  })

  .then(function(result) {
      
      //gallery.innerHTML = result.meta.status
      //gallery.innerHTML = result.response[0].image_permalink

      //console.log(result)

      let posts = result.response

      posts.forEach(element => {
        if (element.type === "photo") {
          const pic = document.createElement("img")
          pic.src = element.photos[0].original_size.url
          pic.height = 200
          gallery_div.appendChild(pic)
        }
        
      });
  })
}
generate()
