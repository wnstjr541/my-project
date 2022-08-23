

const side = document.querySelectorAll('.side-menu>ul>li');
const content = document.querySelectorAll('.side-menu>ul>li>ul');


const targetLink=document.querySelectorAll('.tab-menu a');
const tabContent=document.querySelectorAll('#tab-content > div');


for(let i=0; i<side.length; i++){
   targetLink[i].addEventListener('click', function(e){
      const orgTarget=e.target.getAttribute('href');
      //console.log(orgTarget);
      const tabTarget=orgTarget.replace('#','');
      
      for(let k=0; k<tabContent.length; k++){
         tabContent[k].style.display='none'
      }
      document.getElementById(tabTarget).style.display='block';
      for(let j=0; j<targetLink.length; j++){
         targetLink[j].classList.remove('active');
         e.target.classList.add('active');
      }
   });
}