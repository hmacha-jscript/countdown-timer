const btns = document.querySelectorAll('.tab-btn');
const aboutContent = document.querySelector('.about-content');
const contentDivs = document.querySelectorAll('.content');

btns.forEach(btn=>{
    btn.addEventListener('click',function(e){
        let id = e.target.dataset.id;
        btns.forEach(btn=>{
            if(btn.dataset.id===id){
                btn.classList.add('active')
                contentDivs.forEach(content=>{
                    if(content.id === id){
                        content.classList.add('active')
                    } else {
                        content.classList.remove('active')
                    }
                })
            } else{
                btn.classList.remove('active')
            }
        })
})
})