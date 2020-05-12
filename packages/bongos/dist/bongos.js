let counter = 0;
export const Bongos = () => {
  document.body.appendChild(document.createElement('div').appendChild(document.createTextNode('Billy\'s Bongos')));
  document.querySelectorAll('img').forEach((el)=> {
    el.addEventListener('click', ()=> {
      alert('Clicked ' + (++counter) + ' times');
    })
  })
}