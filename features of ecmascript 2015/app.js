             //MODERN JAVASCRIPT
//(*1*) VAR vs CONST vs LET             

          //var

// var myName ="rasool";
// console.log(myName);

// (es ma aghr hum new value ko console karyanga to wo consol ho jyga purani wali console nhi ho ga)

// myName ="rasool bashir";
// console.log=(myName);


          //let

// let myName ="rasool";
// console.log(myName);


// (es ma aghr hum new value ko console karyanga to wo consol ho jyga purani wali console nhi ho ga)

// myName ="rasool bashir";
// console.log=(myName);


          //const

// const myName ="rasool";
// console.log(myName);


// (es ma aghr hum new value ko console karyanga to wo consol nhi ho ga error daga kun ya constant hota ha )

// myName ="rasool bashir";
// console.log=(myName);

     //second diference
// var is function scope
// const and let is block scope 

         //var
// function boidata(){
//     var myFirstName = "Rasool";
//     console.log(myFirstName);
//     if(true){
//         var myLastName ="Bashir";
//         console.log('inner ' + myLastName);
//         console.log('inner ' + myFirstName);
//     }
//     console.log('innerOuter ' + myLastName);
// }

// boidata();


                    //let

//aghr hum var wala kam yhan karya to ya error da  ga kun ka ya bolck scope ha.{ }es ka ander jo function declare karyanga wo bahir acces nhi kar saktya let ma

                    // function boidata(){
                    // let myFirstName = "Rasool";
                    //     console.log(myFirstName);
                    //     if(true){
                    //         let myLastName ="Bashir";
                    //         console.log('inner ' + myLastName);
                    //         console.log('inner ' + myFirstName);
                    //     }
                    //     console.log('innerOuter ' + myLastName);
                    // }
                    
                    // boidata();
                    


                                    //const
                                    
//aghr hum var wala kam yhan karya to ya error da  ga kun ka ya bolck scope ha.{ }es ka ander jo function declare karyanga wo bahir acces nhi kar saktya let ma


// function boidata(){
//                     const myFirstName = "Rasool";
//                         console.log(myFirstName);
//                         if(true){
//                             const myLastName ="Bashir";
//                             console.log('inner ' + myLastName);
//                             console.log('inner ' + myFirstName);
//                         }
//                         console.log('innerOuter ' + myLastName);
//                     }
                    
//                     boidata();
                    
   //(*2*) template literals (template strings)

//    for (let num = 1; num<= 10; num++){
//     let tableOf =3
//     // console.log(tableOf + " * " + num + " = " + tableOf * num ) is ko hum es tarikya sa be krr saktya ha
//     console.log(`${tableOf} * ${num} = ${tableOf * num}`);
//    }


                         //(*3*) Defult Parameters

// function multiply(a,b){
//     return a*b;
// }
// console.log(multiply(5,2));



              //(*3*)FAT  ARROW FUNCTION
//Normal way to writing function

// console.log(sum());
// function sum(){
//     let a=5; b=6;
//     let sum = a+b;
//     return `The sum of the two number is ${sum}`;
// }


// How to convert in into fat arrow function
  // we can convet it by donig 3 different step
         //(1)
// const sum =() =>{
//     let a=6; b=6;
//     let sum =a+b;
//     return `The sum of the two number is ${sum}`;
// }
// console.log(sum());



                    //   //(2)
                    //   const sum =() =>{
                    //     let a=8; b=8;
                    //     // let sum =a+b;
                    //     return `The sum of the two number is ${a+b}`;
                    // }
                    // console.log(sum());



                       //(3)
//aghr hum code ko ek line ma likhna chaya to main curly bases{ } or return hata dangya phr ya run ho ga      

                    //    const sum =() =>`The sum of the two number is ${(a=5)+(b=5)}`;
                    
                    // console.log(sum());
























                    







