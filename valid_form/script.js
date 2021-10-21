"use strict";

var formDef1=
[
  {label:'Разработчики:',kind:'longtext',name:'developers'},  
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Дата запуска сайта:',kind:'date',name:'date'},
  {label: 'Посетителей в сутки:', kind: 'number', name: 'visitors' },
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {caption:'Опубликовать',kind:'submit'},
];

let form1 = document.forms.form1;



function createForm(formName, fields) {
    for (let i = 0; i < fields.length; i++) {
        let field = fields[i];
        let fieldDiv = document.createElement('div');
        fieldDiv.classList.add('wrap');
        // fieldDiv.setAttribute('style', 'width: 100%; display:flex; min-height: 30px');
        let formLabel = document.createElement('label');
        formLabel.textContent = field.label;
        formLabel.htmlFor = field.name;
        fieldDiv.appendChild(formLabel);
        
        let formField = createField(field);

        fieldDiv.appendChild(formField);
        formName.appendChild(fieldDiv);
        let fieldSpan = document.createElement('span');
        fieldSpan.classList.add('error');
        // fieldSpan.setAttribute('style', 'margin-left: 0px; color: red');
        fieldDiv.appendChild(fieldSpan);
        
        

        function createField(field) {
            let result;
            switch (field.kind) {
                case 'longtext':
                case 'shorttext':
                    result = document.createElement('input');
                    result.type = 'text';
                    result.name = field.name;
                    result.id = field.name;
                    break;
                
                case 'date':
                    result = document.createElement('input');
                    result.type = 'date';
                    result.name = field.name;
                    result.id = field.name;
                    break;
                
                case 'number':
                    result = document.createElement('input');
                    result.type = 'number';
                    result.name = field.name;
                    result.id = field.name;
                    break;
                
                case 'combo':
                    result = document.createElement('select');
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
                    result.classList.add('radio');
                    for (let i = 0; i < field.variants.length; i++) {
                        let item = field.variants[i];
                        let elem = document.createElement('label');
                        elem.classList.add('payment');
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
                    result.id = field.name;
                    break;
                
                case 'memo':
                    result = document.createElement('textarea');
                    result.name = field.name;
                    result.id = field.name;
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


