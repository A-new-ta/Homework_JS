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
  
class Menu {
    constructor(element, data, isFirstLayer) {
        this.element = element;
        this.data = data;
        this.isFirstLayer = isFirstLayer;
    };

    getMenu() {
        function build(element, data, firstLayer = true) {
            let ul = document.createElement('ul');

            for (let {name, url, submenu} of data) {
                let li = document.createElement('li');
                li.classList.add('menu-item');

                if (url) {
                    let a = document.createElement('a');
                    a.href = url;
                    a.textContent = name;
                    li.append(a);
                } else {
                    li.textContent = name;
                }

                if (!firstLayer) {
                    ul.classList.add('submenu');
                }

                if (submenu) {
                    let ulSub = build(li, submenu, false);

                    li.addEventListener('mouseover', () => {
                        ulSub.style.display = 'inherit';
                    });

                    li.addEventListener('mouseleave', () => {
                        ulSub.style.display = 'none';
                    });
                }
                ul.append(li);
            }
            element.append(ul);
            return ul;
        }
        build(this.element, this.data, this.isFirstLayer);
    }
}

new Menu(document.querySelector('.menu'), menu).getMenu();