/*
- bring in tooggle buttons
- loop through nodelist (foraech)
- add event listener ('click')
- toggle the active class on the parent node
  (parentNode & classlist.toggle())
 */

const buttonsToggle = document.querySelectorAll('.faq-toggle')

buttonsToggle.forEach((btn)=>{        
    btn.addEventListener('click',() => {
        buttonsToggle.forEach((clearBtn)=>{
            clearBtn.parentNode.classList.remove('active')
        })
        btn.parentNode.classList.toggle('active')        
    })
  }
)