let pageWidth = window.innerWidth;
let pageHeight = window.innerHeight;
const $rotateMsg = document.getElementById('rotateMsg');
const $continue = document.getElementById('continue');

(pageHeight>pageWidth)?$rotateMsg.classList.remove('hidden'):$rotateMsg.classList.add('hidden');








$continue.addEventListener('click',()=>{
    $rotateMsg.classList.add('hidden');
    window.removeEventListener('resize',checkRotate)
})
const checkRotate = () =>{
    pageWidth = window.innerWidth;
    pageHeight = window.innerHeight;
    (pageHeight>pageWidth)?$rotateMsg.classList.remove('hidden'):$rotateMsg.classList.add('hidden');
}
window.addEventListener('resize',checkRotate)