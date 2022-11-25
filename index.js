fetch(' https://finalpractice202103069.herokuapp.com/')
  .then(response => response.json())
  .then(json => {

    mainContainer = document.getElementById('mainContainer');
   console.log(json.services)
   
     
       
    var originalContent = ` 
                            <div class="item">
                            <div class="thumb">
                            <img src="assets/images/featured-01.jpg" alt="">
                            <div class="hover-effect">
                                <div class="content">
                                <h4>Walk In The Nature <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> <span>(4.5)</span></h4>
                                <ul>
                                    <li><span>Contest Winner:</span> [TITLE]</li>
                                    <li><span>Contest Author:</span> Anthony Soft</li>
                                    <li><span>Awards:</span> $1.000 + Camera Nikon</li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>`;

json.services.forEach(e => {
  var currentContent = originalContent;
  currentContent = currentContent.replace(`[TITLE]`,e["A"])
  currentContent = currentContent.replace(`[DESCRIPTION]`,e["B"])
  currentContent = currentContent.replace(`[ICON]`,e["C"])

  var div = document.createElement('div')
  //div.className = "col-lg-4 col-md-6 icon-box"
  div.innerHTML = currentContent;
  mainContainer.appendChild(div);
});





  })