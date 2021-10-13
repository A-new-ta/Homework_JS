"use strict";

var formDef1=
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {caption:'Опубликовать',kind:'submit'},
];

var formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {caption:'Зарегистрироваться',kind:'submit'},
];

let form1 = document.forms.form1;
let form2 = document.forms.form2;


function createForm(formName, fields) {
    for (let i = 0; i < fields.length; i++) {
        let field = fields[i];
        let fieldDiv = document.createElement('div');
        fieldDiv.setAttribute('style', 'width: 100%; position: relative; min-height: 30px');
        let formLabel = document.createElement('label');
        formLabel.textContent = field.label;
        formLabel.htmlFor = field.name;
        fieldDiv.appendChild(formLabel);
        
        let formField = createField(field);

        fieldDiv.appendChild(formField);
        formName.appendChild(fieldDiv);

        function createField(field) {
            let result;
            switch (field.kind) {
                case 'longtext':
                case 'shorttext':
                    result = document.createElement('input');
                    result.type = 'text';
                    result.name = field.name;
                    result.id = field.name;
                    result.setAttribute('style', 'width: 50%; position: absolute; left: 200px');
                    break;
                
                case 'number':
                    result = document.createElement('input');
                    result.type = 'number';
                    result.name = field.name;
                    result.id = field.id;
                    result.setAttribute('style', 'width: 50%; position: absolute; left: 200px');
                    break;
                
                case 'combo':
                    result = document.createElement('select');
                    result.setAttribute('style', 'position: absolute; left: 200px; height: 26px');
                    result.id = field.name;
                    result.name = field.name;
                    for (let i = 0; i < field.variants.length; i++) {
                        let elem = document.createElement('option');
                        elem.value = field.variants[i].value;
                        elem.textContent = field.variants[i].text;
                        result.appendChild(elem);
                    };
                    break;
                
                case 'radio':
                    result = document.createElement('div');
                    result.setAttribute('style', 'width: 50%; position: absolute; left: 200px; top:0');
                    for (let i = 0; i < field.variants.length; i++) {
                        let item = field.variants[i];
                        let elem = document.createElement('label');
                        elem.textContent = field.variants[i].text;
                        elem.htmlFor = `${field.name}-${item.value}`;

                        let radioElem = document.createElement('input');
                        radioElem.type = 'radio';
                        radioElem.value = field.variants[i].value;
                        radioElem.name = field.name;
                        radioElem.id = `${field.name}-${item.value}`;
                        elem.appendChild(radioElem);
                        result.appendChild(elem);
                    };
                    break;
                
                case 'check':
                    result = document.createElement('input');
                    result.type = 'checkbox';
                    result.name = field.name;
                    result.id = field.id;
                    result.setAttribute('style', 'position: absolute; left: 200px');
                    break;
                
                case 'memo':
                    result = document.createElement('textarea');
                    result.name = field.name;
                    result.id = field.id;
                    result.setAttribute('style', 'width: 50%; position: absolute; left: 200px');
                    break;
                
                case 'submit':
                    result = document.createElement('button');
                    result.type = 'submit';
                    result.textContent = field.caption;
            }
            return result;
        }
    }
}

createForm(form1, formDef1);
createForm(form2, formDef2);





