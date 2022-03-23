// import students from './modules/students';
import renderForm from "./modules/renderForm";
import searchCode from "./modules/searchCode";

const $1 = document.querySelectorAll.bind(document);


renderForm()
searchCode()
  //-----------------------------------------------

// let list = document.createElement('ul');
// document.body.appendChild(list);

// students.forEach(e => {
//     console.log(e.name);
//     let li = document.createElement('li');
//     li.innerHTML = e.name;
//     if (e != ''){
//       $1('ul')[1].appendChild(li);
//     }
//   })

  //-----------------------------------------------

//   const students= [
//     {
//         id:1,
//         firstName:'Jonas',
//         lname:'Jonaitis',
//         shool:'BIT',
//         subjects:{
//             js:10,
//             react:8,
//             vue:5
//         }
//     },
//     {
//         id:2,
//         firstName:'Petras',
//         lname:'Petraitis',
//         shool:'BIT',
//         subjects:{
//             js:6,
//             react:5,
//             vue:2
//         }
//     },
//     {
//         id:3,
//         firstName:'Vardenis',
//         lname:'Pavardenis',
//         shool:'BIT',
//         subjects:{
//             js:10,
//             react:10,
//             vue:7
//         }
//     }
// ]

  // for(let student of students){
  //   for(let studentData in student){
  //     for(let sub in student[studentData]){
  //       console.log(student[studentData]);
  //     }
  //   }
  // }

  //--------------------------------------------

//   const demo = () => {



//   const movies = () => {
//     let data  = fetch('http://www.omdbapi.com/?i=tt3896198&apikey=18c1a865&t=matrix')
//     .then(resolve => resolve.json())
//     return data;
//   }

//   const showData = async () => {
//     let data = await movies();
//     console.log(data);
//   }

//   showData()

// }

// demo()

// console.log(demo());