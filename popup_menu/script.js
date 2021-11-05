"use strict";

var menu = [
    {name:'Пункт 1',submenu:
      [
        {name:'Пункт 1.1',submenu:
          [
            {name:'Пункт 1.1.1',url:'http://www.tut.by'},
            {name:'Пункт 1.1.2 длинный',url:'http://www.tut.by'}
          ]
        },
        {name:'Пункт 1.2',url:'http://www.tut.by'},
        {name:'Пункт 1.3 длинный',submenu:
          [
            {name:'Пункт 1.3.1',url:'http://www.tut.by'},
            {name:'Пункт 1.3.2',url:'http://www.tut.by'},
            {name:'Пункт 1.3.3',url:'http://www.tut.by'},
            {name:'Пункт 1.3.4 длинный',url:'http://www.tut.by'}
          ]
        }
      ]
    },
    {name:'Пункт 2 длинный',url:'http://www.tut.by'},
    {name:'Пункт 3',submenu:
      [
        {name:'Пункт 3.1 длинный',url:'http://www.tut.by'},
        {name:'Пункт 3.2',url:'http://www.tut.by'}
      ]
    }
];

  
let menu1 = document.querySelector('.menu');

function createMenu(div, menuArr) {
  let ul = document.createElement('ul');
  
  for (let {name, url, submenu} of menuArr) {
    
    let li = document.createElement('li');
    li.classList.add('menu-item');
    
    if (url) {
      let a = document.createElement('a');
      a.href = url;
      a.textContent = name;
      li.appendChild(a);
    } else {
      li.textContent = name;
    }
    
    if (submenu) {
      let ulSubmenu = createMenu(li, submenu);
      ulSubmenu.classList.add('submenu');
      
      li.addEventListener('mouseover', () => {
        ulSubmenu.style.display = 'block';
      });
      
      li.addEventListener('mouseleave', () => {
        ulSubmenu.style.display = 'none';
      });
      
    }
    ul.appendChild(li);
  }
  div.appendChild(ul);
  return ul;
}

createMenu(menu1, menu);


