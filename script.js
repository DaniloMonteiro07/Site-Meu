function toggleDetails(element) {  
    const jobInfo = element.nextElementSibling; // Pega o próximo elemento que é o job-info  
    
    if (jobInfo.style.display === "none" || jobInfo.style.display === "") {  
        jobInfo.style.display = "block"; // Torna visível  
        setTimeout(() => {  
            jobInfo.classList.add('show'); // Adiciona a classe para a animação  
        }, 10); // Pequena pausa para mostrar a animação  
    } else {  
        jobInfo.classList.remove('show'); // Remove a classe para a animação de saída  
        setTimeout(() => {  
            jobInfo.style.display = "none"; // Esconde após animação completar  
        }, 500); // Tempo para coincidir com a duração da animação  
    }  
}  