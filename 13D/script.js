const tagsEl = document.getElementById('tags')
const textArea = document.getElementById('txtarea')

textArea.focus()

textArea.addEventListener('keyup',(e)=>{
    createTags(e.target.value)

    if(e.code === 'Enter'){

        setTimeout(() =>{
            e.target.value = ''
        },10)
        
        ramdomSelect()
    }
})

function createTags(text){
    const tags = text.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    console.log(tags)
    tagsEl.innerHTML =''

    tags.forEach((tag) => {
        const elementSpan = document.createElement('span')
        elementSpan.classList.add('tag')
        elementSpan.innerHTML=tag
        tagsEl.appendChild(elementSpan)
    })

}

function ramdomSelect (){
    const times = 30

    const interval = setInterval(()=>{       
        const ramdomTag = pickRamdomtag()
        
        highLightTag(ramdomTag)
       
        setTimeout( ()=> {
            unhighLightTag(ramdomTag) 
        }
        ,100)
    },100) 

    setTimeout(()=>{
        clearInterval(interval)

        setTimeout(() => {
            const ramdomTag = pickRamdomtag()
            highLightTag(ramdomTag)
        }, 100);

    },100*times)
}

function pickRamdomtag(){
    const collectionTags = document.querySelectorAll('.tag')

    return collectionTags[Math.floor(Math.random() * collectionTags.length)]
}

function highLightTag(tag){
    tag.classList.add('highlight')
}

function unhighLightTag(tag){
    tag.classList.remove('highlight')
}