const elements = document.querySelectorAll(".Style-Paragraph, .Style-Paragraph2");

elements.forEach(element => {

    
    element.addEventListener("click", function() { 
        if (!element.dataset.clickState) //First Click
        {
            element.style.backgroundColor = "blue";
            element.style.color = "blue";
            element.dataset.clickState = "1";
        }
        else if (element.dataset.clickState === "1") //Second Click
        {
            element.style.backgroundColor = "green";
            element.style.color = "green";
            element.dataset.clickState = "2";
        }
        else //Back To Default
        {
            element.style.backgroundColor = "";
            element.style.color = "";
            delete element.dataset.clickState;
        }
        
    })


});