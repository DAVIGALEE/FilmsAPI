let req  = "https://imdb8.p.rapidapi.com/auto-complete?q="
let images = 'https://imdb8.p.rapidapi.com/title/get-images?tconst=tt2861424&limit=25'
let btn = document.querySelector('#btn')
let input = document.querySelector('#inp')
let parent = document.querySelector('.parent')
let clicked = false
async function dataGetter(){

 
  let ids = []
await fetch(req + input.value, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "24a15b552dmsh38e97a22f707ab5p102eb9jsn1e85c9d6873b"
	}
})
.then(response => response.json())
.then(data => {
  console.log(data) 
return data
})
.then(toId => {
  

  return toId.d
})
.then(details => {
  console.log(details)
  details.forEach(data => {
    const p = document.createElement('p')
    const img = document.createElement('img')
let sourceAtr = document.createAttribute('src')
sourceAtr.value = data.i.imageUrl
    img.setAttributeNode(sourceAtr)
      p.innerText = data.l
    parent.append(p)
    parent.append(img)

console.log(data.l)


  })
})
.catch(err => {
	console.error(err);
});
console.log(ids)

}
btn.addEventListener('click',(e) => {
  e.preventDefault()
  parent.innerHTML  = ' '
  dataGetter()
})

let switcher = document.getElementById("btnn")
switcher.addEventListener("click",()=> {
  let element = document.body;
  element.classList.toggle("dark-mode");
})
