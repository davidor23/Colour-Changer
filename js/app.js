const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow','red','blue','green', '#F08080','#FFDEAD', '#6B8E23', '#d1e231','#32127a','#979aaa'];

colorBtn.addEventListener('click', changeColor);

function changeColor() {

    let random = Math.floor(Math.random() * colors.length);


    bodyBcg.style.backgroundColor = colors [random];

}