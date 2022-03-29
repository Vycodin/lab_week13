let original_div = document.querySelector('section.originals > div > div')
function copy_function(){
    console.log(original_div)
    const copied_area = document.querySelector('div.copy-container')
    copied_area.insertAdjacentHTML("afterbegin",'bruh<br>')

}
original_div.addEventListener('click',copy_function);