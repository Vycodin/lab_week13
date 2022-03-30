///part 1
let original_section = document.querySelectorAll('section.originals  div.original-container div')


function copy_function(target_div){
    console.log(target_div)
    const copied_area = document.querySelector('div.copy-container')
    copied_area.insertAdjacentHTML("afterbegin",target_div.outerHTML)

}
original_section.forEach(ev => ev.addEventListener('click', function(){copy_function(ev)}))

///part 2: delete

let delete_button = document.querySelector('button')

function delete_copy(){
const copied_area = document.querySelector('div.copy-container')
copied_area.innerHTML = ''
}

delete_button.addEventListener('click', function(){delete_copy()})