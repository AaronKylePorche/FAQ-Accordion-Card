window.onload = function() {
    const question = document.getElementsByClassName("question-container")



    for (let i = 0; i < question.length; i++) {
        
        question[i].addEventListener('click', function() {
            
            console.log('click');

                                
            let answer = this.children[1];
            
            answer.classList.toggle("answer__open")
            
            this.classList.toggle("question__active")
            
            
            
 

            

            
        })
    }

}






