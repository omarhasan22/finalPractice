fetch(' https://finalpractice202103069.herokuapp.com/')
  .then(response => response.json())
  .then(json => {


    mainContainer = document.getElementById('mainContainer');
    console.log(json.services)
    
      
        
     var originalContent = ` 
                                    <div class="closed-item">
                                    <div class="thumb">
                                    <img src="assets/images/closed-01.jpg" alt="">
                                    <span class="winner"><em>Winner:</em> [TITEL]</span>
                                    <span class="price"><em>Award :</em> [DESCRIPTION]</span>
                                    </div>
                                    <div class="down-content">
                                    <div class="row">
                                        <div class="col-7">
                                        <h4>88 Participants <br><span>Number Of Artists</span></h4>
                                        </div>
                                        <div class="col-5">
                                        <h4 class="pics">320 Pictures <br><span>Submited Pics</span></h4>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                           `;
 
 json.services.forEach(e => {
   var currentContent = originalContent;
   currentContent = currentContent.replace(`[TITLE]`,e["A"])
   currentContent = currentContent.replace(`[DESCRIPTION]`,e["B"])
   currentContent = currentContent.replace(`[ICON]`,e["C"])
 
   var div = document.createElement('div')
  // div.className = "col-lg-4 col-md-6 icon-box"
   div.innerHTML = currentContent;
   mainContainer.appendChild(div);
 });
 
 


  })


