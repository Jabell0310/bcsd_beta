let btn = document.getElementById('btn')
let h_btn = document.querySelectorAll('.remove-add')
console.log(h_btn);

var checker=true;
btn.addEventListener('click', function(event) {
  if(checker==true)
  {
    btn.innerText = "정보 드러내기";
  
    h_btn[0].style.display = "none";
    h_btn[1].style.display = "none";
    checker=false;
  }else{
    btn.innerText = "정보 숨기기";
  
    h_btn[0].style.display = "block";
    h_btn[1].style.display = "block";
    checker=true;

  }
  

});
