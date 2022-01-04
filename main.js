let pageWidth = window.innerWidth;
let pageHeight = window.innerHeight;
const $rotateMsg = document.getElementById('rotateMsg');
const $continue = document.getElementById('continue');
const $mainScene = document.getElementById('mainScene');
const allMoons = Array.from($mainScene.children);
const MoonMovements = () =>{
    allMoons[0].animate([
        {transform:'rotate(-90deg)'},
        {transform:'rotate(100deg)'}
    ],{
        duration:2000
    });
    allMoons[1].animate([
        {transform:'rotate(-90deg)'},
        {transform:'rotate(100deg)'}
    ],{
        duration:16000,
        delay:2000
    });
    allMoons[2].animate([
        {transform:'rotate(-90deg)'},
        {transform:'rotate(100deg)'}
    ],{
        duration:3000,
        delay:18000
    });
    allMoons[3].animate([
        {transform:'rotate(-90deg)'},
        {transform:'rotate(100deg)'}
    ],{
        duration:13000,
        delay:21000
    });
}
if(pageHeight>pageWidth){
    $rotateMsg.classList.remove('hidden')
}
else{
    $rotateMsg.classList.add('hidden');
    MoonMovements()
}







$continue.addEventListener('click',()=>{
    $rotateMsg.classList.add('hidden');
    window.removeEventListener('resize',checkRotate)
})
const checkRotate = () =>{
    pageWidth = window.innerWidth;
    pageHeight = window.innerHeight;
    if(pageHeight>pageWidth){
        $rotateMsg.classList.remove('hidden')
    }
    else{
        $rotateMsg.classList.add('hidden');
        MoonMovements()
    }
}
window.addEventListener('resize',checkRotate)






setInterval(()=>{
    console.log('the animation has finished');
    MoonMovements();
},34000)