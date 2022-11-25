fetch(' https://finalpractice202103069.herokuapp.com/')
  .then(response => response.json())
  .then(json => {


    mainContainer = document.getElementById('editedContainer');
    console.log(json.services)
    
      
        
     var originalContent = ` 
                                  
                                  <div class="card">
                                    <img src="assets/img/featured-1.jpg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title"><a href="">Autem sunt earum</a></h5>
                                      <p class="card-text">Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore</p>
                                      <a href="#" class="btn">Explore more</a>
                                    </div>
                                  </div>
                                

                           `;
 
 json.services.forEach(e => {
   var currentContent = originalContent;
   currentContent = currentContent.replace(`[TITLE]`,e["A"])
   currentContent = currentContent.replace(`[DESCRIPTION]`,e["B"])
   currentContent = currentContent.replace(`[ICON]`,e["C"])
 
   var div = document.createElement('div')
   div.className = "col-lg-4 col-md-6 d-flex align-items-stretch mb-5 mb-lg-0"
   div.innerHTML = currentContent;
   mainContainer.appendChild(div);
 });
 
 


  })


