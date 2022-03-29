let original_section = document.querySelectorAll('section.originals > div > div')


function copy_function(target_div){
    console.log(target_div)
    const copied_area = document.querySelector('div.copy-container')
    copied_area.insertAdjacentHTML("afterbegin",target_div.textContent+'<br>')

}

for (i = 0; i < original_section.length; i++){
original_section.addEventListener('click', function(event){
    let target = event.currentTarget;

    if (target.tagname != 'div') console.log('not valid');

    copy_function(target);
})}