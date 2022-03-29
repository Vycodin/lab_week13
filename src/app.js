let original_section = document.querySelector('section.originals > div')


function copy_function(target_div){
    console.log(target_div)
    const copied_area = document.querySelector('div.copy-container')
    copied_area.insertAdjacentHTML("afterbegin",target_div.outerHTML+'<br>')

}


original_section.addEventListener('click', function(event){
    let target = event.target;
    console.log(target.outerHTML.outerHTML)
    while(target.tagName != 'DIV'){
        target = target.parentNode;
    };

    copy_function(target);
});