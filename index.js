const btnLike1 = document.getElementById("btnLike1")
const countLike1 = document.getElementById("countLike1")

function clickLike1(){
  let totalLikes = parseInt(countLike1.value) + 1
  countLike1.textContent = totalLikes.toString()
}  
btnLike1.addEventListener("click",clickLike1)

const btnLike2 = document.getElementById("btnLike2")
const countLike2 = document.getElementById("countLike2")

function clickLike2(){
  let totalLikes = parseInt(countLike2.value) + 1
  countLike2.textContent = totalLikes.toString()
}  
btnLike2.addEventListener("click",clickLike2)

const btnDisLike1 = document.getElementById("btnDisLike1")
const countDisLike1 = document.getElementById("countDisLike1")

function clickDisLike1(){
  let totalDisLikes = parseInt(countDisLike1.value) + 1
  countDisLike1.textContent = totalDisLikes.toString()
}  
btnDisLike1.addEventListener("click",clickDisLike1)

const btnDisLike2 = document.getElementById("btnDisLike2")
const countDisLike2 = document.getElementById("countDisLike2")

function clickDisLike2(){
  let totalDisLikes = parseInt(countDisLike2.value) + 1
  countDisLike2.textContent = totalDisLikes.toString()
}  
btnDisLike2.addEventListener("click",clickDisLike2)

const btnSmile1 = document.getElementById("btnSmile1")
const countSmile1 = document.getElementById("countSmile1")



const btnAngry2= document.getElementById("btnAngry2")
const countAngry2 = document.getElementById("countAngry2")


function clickSmile1(){
  let totalSmile1 = parseInt(countSmile1.value) + 1
  countSmile1.textContent = totalSmile1.toString()
}  
btnSmile1.addEventListener("click",Smile1)

const btnSmile2 = document.getElementById("btnSmile2")
const countSmile2 = document.getElementById("countSmile2")
function clickSmile2(){
  let totalSmile2 = parseInt(countSmile1.value) + 1
  countSmile2.textContent = totalSmile2.toString()
}  
btnSmile2.addEventListener("click",Smile2)

const btnLove1 = document.getElementById("btnLove1")
const countLove1= document.getElementById("countLove1")

function clickLove1(){
  let totalLove1 = parseInt(countlove1.value) + 1
  countLove1.textContent = totalLove1.toString()
}  
btnLove1.addEventListener("click",Love1)

const btnLove2 = document.getElementById("btnLove2")
const countLove2 = document.getElementById("countLove2")

function clickLove2(){
  let totalLove2 = parseInt(countlove2.value) + 1
  countLove2.textContent = totalLove2.toString()
}  
btnLove2.addEventListener("click",Love2)

const btnAngry1 = document.getElementById("btnAngry1")
const countAngry1 = document.getElementById("countAngry1")

function clickAngry1(){
  let totalAngry1 = parseInt(countAngry1.value) + 1
  countAngry1.textContent = totalAngry1.toString()
}  
btnAngry1.addEventListener("click",Angry1)

const btnAngry2= document.getElementById("btnAngry2")
const countAngry2 = document.getElementById("countAngry2")

function clickAngry2(){
  let totalAngry2 = parseInt(countAngry2.value) + 1
  countAngry2.textContent = totalAngry2.toString()
}  
btnAngry2.addEventListener("click",Angry2)


const submit = document.getElementById("submit")

const comment = document.getElementById("comment")

const commentbox = document.getElementById("commentbox")

function submitComment(){

commentbox.textContent += comment.value.toString() + "\n"
comment.value=""
}

submit.addEventListener("click", submitComment)
