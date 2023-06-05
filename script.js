const sketch=document.querySelector('.sketch');
const sizeip=document.querySelector('.gridsize');
const txtsize=document.querySelector('.txtsize');
const color=document.querySelector('.color');
const clear=document.querySelector('.clear');
const erase=document.querySelector('.eraser');
const colormode=document.querySelector('.colormode');
const pixel=document.createElement('div');
let col='#000000';
let last='#000000';
pixel.className='pixel';
function fill(units){
    last=units;
    txtsize.textContent=`${units}x${units}`;
    while(sketch.firstChild)sketch.removeChild(sketch.lastChild);
    let size=500/units;
    pixel.style.width=`${size}px`;
    pixel.style.height=`${size}px`;
    for(let i=0;i<units*units;i++){
        const p=pixel.cloneNode();
        sketch.appendChild(p);
    }
}
fill(16);
function get(e){
    let val=e.target.value;
    fill(val);
}
function changecolor(e){
    col=`${e.target.value}`;
    last=col;
}
function dowork(e){
    e.target.style.backgroundColor=col;
    console.log(e.target.style.backgroundColor);
}
sizeip.addEventListener('input',get);
color.addEventListener('input',changecolor);
sketch.addEventListener('mouseover',dowork);
clear.addEventListener('click',()=>{
    for(const child of sketch.children)child.style.backgroundColor='white';
});
erase.addEventListener('click',()=>{
    last=col;
    col='white';
});
colormode.addEventListener('click',()=>{
    col=last;
})


