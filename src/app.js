let original_section = document.querySelector('section.originals div')
function copy_function(target_div){
    console.log(target_div)
    const copied_area = document.querySelector('div.copy-container')
    copied_area.insertAdjacentHTML("afterbegin",target_div.textContent+'<br>')

}


original_section.onclick = function(event){
    let target = event.target;

    if (target.tagname != 'div') console.log('not valid');

    copy_function(target);
}