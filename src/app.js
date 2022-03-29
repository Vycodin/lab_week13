let original_div = document.querySelector('section.originals > div')
function copy_function(){
    console.log('hello')
    const copied_area = document.querySelector('div.copy-container')
    copied_area.insertAdjacentHTML("afterbegin",'bruh<br>')

}
original_div.addEventListener('click',copy_function);