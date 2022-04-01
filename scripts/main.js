let questions = document.querySelectorAll('.q');
let qId = '';

function close(){
    questions.forEach( question => {
        let answer = question.querySelector('.a');
        let ask =  question.querySelector('.ask');
        if(question.id != qId && answer.classList.contains('active')){
            answer.classList.remove('active');
            ask.classList.remove('bold');
        }
    })
}

questions.forEach(question => {
    
    question.addEventListener('click', (e) => {

        e.preventDefault();
        
        let answer = question.querySelector('.a');
        let ask =  question.querySelector('.ask');
        
        if(answer.classList.contains('active')){
            answer.classList.remove('active');
            ask.classList.remove('bold');
        }else{
            ask.classList.add('bold');
            answer.classList.add('active');
            qId = question.id;
            close();
            console.log(qId);
        }
    })
})

    //Comprobar si hay alguna respuesta abierta
    //Cerrar la respuesta abierta
    //Comprobar que respuesta se ha clickeado
    //Abrir respuesta clickeada
