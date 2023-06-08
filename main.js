const workitems=document.querySelectorAll('.work .item');
const workitemscount=document.querySelector('.work .item');
let currentindex=0;
const Closebutton=document.querySelector('#close-button');
const prevbutton=document.querySelector('#prev-button');
const nextbutton=document.querySelector('#next-button');
const openclosebutton=document.querySelector('#buttonOpenCloseMenu');
const menumobileitems=document.querySelector('#menu-mobile-items');

openclosebutton.addEventListener('click',e=>{
menumobileitems.classList.toggle('menu-mobile-closed')
});

workitems.forEach(item=>{
item.addEventListener('click',e=>{
    e.preventDefault();
    currentindex=parseInt(item.getAttribute('data-id'));
    const contentarray=document.querySelectorAll('#deatils-container .item');
    document.querySelectorAll('#details-container .item').forEach(item=>{item.classList.add('item-hide');});
    document.querySelectorAll('#details-container .item')[currentindex].classList.toggle('item-hide');
    document.querySelector('#screen').style['animation-name']='fade-in';
    document.querySelector('body').style['overflow']='hidden';
    setTimeout(()=>{
        document.querySelector('#details-container').style.display='block';
    },1000);
    setTimeout(()=>{
        document.querySelector('#screen').style='';
    },2000);
})
});
Closebutton.addEventListener('click',e=>{
e.preventDefault();
document.querySelector('#screen').style['animation-name']='fade-in';
    document.querySelector('body').style['overflow']='auto';
    setTimeout(()=>{
        document.querySelector('#details-container').style.display='none';
    },1000);
    setTimeout(()=>{
        document.querySelector('#screen').style='';
    },2000);
});
prevbutton.addEventListener('click', e =>{
    if(currentindex - 1 < 0){
        return;
    }     
    currentindex--;
    loadGalleryItem(currentindex);
});
nextbutton.addEventListener('click', e =>{
    if(currentindex + 1 == 9){
        return ;
    }     
    currentindex++;
    loadGalleryItem(currentindex);
});

function loadGalleryItem(index){
    document.querySelectorAll('#details-container .item').forEach(item => { item.classList.add('item-hide');})
    document.querySelectorAll('#details-container .item')[index].classList.toggle('item-hide');     
}