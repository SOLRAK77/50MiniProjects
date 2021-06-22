const lstP = document.querySelectorAll('.panel')

let panelold = 0;
let panelNew = 0;

lstP.forEach( (panel,index) => {
    panel.addEventListener('click',()=>{
        panelNew=index;
        changeClassPanel();
    })
});

function changeClassPanel(){
    lstP[panelNew].className = 'panel active';
    lstP[panelold].className = 'panel';
    panelold = panelNew;
}