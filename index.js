fetch(' https://finalpractice202103069.herokuapp.com/')
  .then(response => response.json())
  .then(json => {


    mainContainer = document.getElementById('mainContainer');
    console.log(json.services)
    
      
        
     var originalContent = ` 
                            
                           `;
 
 json.services.forEach(e => {
   var currentContent = originalContent;
   currentContent = currentContent.replace(`[TITLE]`,e["A"])
   currentContent = currentContent.replace(`[DESCRIPTION]`,e["B"])
   currentContent = currentContent.replace(`[ICON]`,e["C"])
 
   var div = document.createElement('div')
   div.className = "closed-item"
   div.innerHTML = currentContent;
   mainContainer.appendChild(div);
 });
 
 


  })


