fetch(' https://finalpractice202103069.herokuapp.com/')
  .then(response => response.json())
  .then(json => console.log(json))