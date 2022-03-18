import students from './modules/students';

const $1 = document.querySelectorAll.bind(document);

let list = document.createElement('ul');
document.body.appendChild(list);

students.forEach(e => {
    console.log(e.name);
    let li = document.createElement('li');
    li.innerHTML = e.name;
    if (e != ''){
      $1('ul')[0].appendChild(li);
    }
  })
