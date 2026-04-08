const header ='<p>Mi primera pagina</p>';
const nav = '<a>producto</a>' ;
const footer = '<p>Ivan Caballero</p>';

 document.querySelector('header').innerHTML = header;
 document.querySelector('#menu').innerHTML = nav;
 document.querySelector('.pie').innerHTML = footer;

  document.querySelector('#menu').style.background = 'lime';