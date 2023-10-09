    //CONTROL STATEMENT AND LOOP OPERATOR
    //(1) IF...ELSE STATEMENT
    // (2) SWITCH STATEMENT
    // (3) WHILE LOOP 
    // (4) DO-WHILE LOOP
    // (5) FOR LOOP 
    // (6) CONDITIONAL (TERNARY) OPERATOR


                             // (*1*) IF...ELSE STATEMENT

// the if statement executed a statement if a specified condition is truthy
// if the condition is falsy, another statement can be executed.

// Example:-
// var tomr = "rain";
// if(tomr == "rain"){
//     console.log("take a raincoat");

// }else{
//     console.log("No need to take a raincoat")
// }
 

       // CHALLENGE
//what is truthy and falsy values in js?
//we ha total 5 falsy values in js 
// 0, " ",undefine,null,false**is false anyway
// Example:-1  hum 0 ki jygha undefine ,null or dusra falsy operator use krr saktya ha
// if (score=0){
//     console.log("omg, we loss the match");

// }else{
//     console.log("yah, we won the match");
// }       


                             //(*2*)CONDITIONAL(ternarty)OPERATOR
//THE CONDITIONAL OPERATOR IS ONLY JS OPERATOR
//THAT TAKE THREE OPERANDS

// it is not ternarty operator it is a simple methode

// var age =17;
// if(age>=18){
//     console.log("you are eligibal to vote");
// }else{
//     console.log("you are not eligibal to vote");
// }

// // it is ternarty operator method

//  var age =18;
//  console.log((age>=18)? "you can vote" : "you can't vote");

               //(*3*)SWITCH STATEMENT
 
               
// evluates an expression, matching the expression's value to a
// case cluse, and executes staments associated with that case.

//1st without break statement
//find the area of circle, triangle and rectangle?
   
// var area = "circle";
// var PI = 3.142, l= 5, b=4, r=3;
// // yhan necha aghr triangle ka area maloom karna ha to circle ki jygha triangle ayga ya simple method ha switch method nhi ha
// if(area=="circle"){
//     console.log("the area of cricle is : " + PI*r**2);
// }else if(area=="triangle"){
//     console.log("the area of triangle is : " + (l*b)/2);
// }else if(area=="rectangle"){
//     console.log("the area of rectangle is : " + (l*b));
// }else{
//     console.log("please enter a valid data")
// }

// ya methd switch method ha
// yhan necha aghr triangle ka area maloom karna ha to circle ki jygha triangle ayga ya jis ka malom karna ha wo ayga 
// ya switch method ha

// var area = "circle";
// var PI = 3.142, l= 5, b=4, r=3;
// switch(area){
//     case 'circle':
//         console.log("the area of cricle is : " + PI*r**2);
//         break;
//         case 'triangle' :
//             console.log("the area of triangle is : " + (l*b)/2);
//             break;
//             case 'rectangle' :
//                 console.log("the area of rectangle is : " + (l*b));
//                 break;
//                 default:
//                     console.log("please enter a valid data")
// }


                        //(*4*)WHILE LOOP STATEMENT
// the while loop statement create a loop that executes a specified statement
// as long as the test cobdition evaluates to true
    
//   var num=0;
    //   //block scope
    //   while(num <= 10){
    //     console.log(num); //infinate loop
    //     num++;
    //   }                        

                        //(*5*)DO-WHILE LOOP STATEMENT

// it direct give au output first and the read condition 

//   var num=0;
//       do{
//           console.log(num); 
//           num++;
//       }while(num <= 10);



                  //(*6*)FOR LOOP
// for(var num = 0; num <= 10; num++){
//     console.log(num);
// }                  

             //CHALLENGE
// print table for given number (8) in js?
                
// for(var num = 1; num <= 10; num++){
//     var tableOf = 8;
//     console.log(tableOf + "*" + num + "=" + tableOf * num)
// }

             //CHALLENGE
// print table for given number (9) in js?
          
// for(var num = 1; num <= 10; num++){
//     var tableOf = 9;
//     console.log(tableOf + "*" + num + "=" + tableOf * num)
// }


