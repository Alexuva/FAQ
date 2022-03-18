let questions = document.querySelectorAll('.q');

questions.forEach(question => {
    question.addEventListener('click', function(){
        
        this.classList.toggle('.active');

        let answer = this.querySelector('.a');

        if(answer.style.display == 'none'){
            answer.style.display = 'block';
        }else{
            answer.style.display = 'none';
        }
            
    });
});