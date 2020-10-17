import {people} from './data.js'

const slideEle = document.querySelector('.slide');
const prevBtn =document.querySelector('.prev-btn');
const nextBtn =document.querySelector('.next-btn');
const total = people.length;

//image element
let imgEle = slideEle.querySelector('img');
let nameEle = slideEle.querySelector('h4');
let titleEle = slideEle.querySelector('.title');
let textEle = slideEle.querySelector('.text');

prevBtn.addEventListener('click', function(e){
    let idx = people.findIndex(item=>item.name===nameEle.textContent)
    let prevIdx = (idx>0) ? idx-1 : total-1;
    showImage(prevIdx);
})

nextBtn.addEventListener('click', function(){
    let idx = people.findIndex(item=>item.name===nameEle.textContent)
    let nextIdx = (idx+1<total) ? idx+1 : 0;
    showImage(nextIdx);
})

function showImage(idx){
    //set next element
    imgEle.setAttribute('src', people[idx].img);
    nameEle.textContent = people[idx].name;
    titleEle.textContent= people[idx].job;
    textEle.textContent = people[idx].text;
}
