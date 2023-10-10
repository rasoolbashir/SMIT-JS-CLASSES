   // EXPRESSIONS AND OPERATORS
   // 1 = assignment operators
   // 2 = arithmetic operators
   // 3 = comparsion operators
   // 4 = logical operators
   // 5 = string operators
   // 6 = conditional(ternary) operators


         // (*1*)ASSIGNMENT OPERATOR
 //an assignment operator assigns a value to its left operand
 //based on the value of its right operand
 //The simple asignment operator is equal (=)
//Example:-
// var x = 5;
// var y = 6;


//  var x = 6;
//  var y = 6;
// //  console.log("is both x and y are equal or not" + x==y); this method give false value because here we use + operator (+ operator is use to concunation)
// console.log (`Is both the x and y are equal : ${x ==y}`); it is ecmascript method it will give you true answer
                       // (*2*) ARITHIMETIC OPERATOR
// an arithimetic operator takes numerical values
//(either literals or variables)as their operandsand
//returns a single numerical vALUES.
    //    console.log(3+3);
    //    console.log(10-5);
    //    console.log(20/5);
    //    console.log(5*6);
    //    console.log("reminder operator " + 81%7);
       // incerment and decrement operator
// operator : x++ or ++x
// if used postfix ,with operator after operand (for example:, x++),
// the incriment operator increments and returns the value before incrementing
    // (1)
// var num = 15;
// var newNum = num++ + 5;
// console.log(num);
// console.log(newNum);
       // (2)
// var num = 15;
// var newNum = num-- + 5;
// console.log(num);
// console.log(newNum);

// if used prefix ,with operator after operand (for example:, ++x),
// the incriment operator increments and returns the value after incrementing
       // (1)
// var num = 15;
// var newNum = ++num + 5;
// console.log(num);
// console.log(newNum);

         // (2)
// var num = 15;
// var newNum = --num + 5;
// console.log(num);
// console.log(newNum);



                                    // (*3*) COMPARSION OPERATORS
// A comparison operator compares its operands and return a logical value based on wheather the copmarsion is true

// var a = 30;
// var b = 10;
//   // Equal operator (==)
//   console.log (a==b);
   // not equal (!=)

   // var a = 30;
   // var b = 10;
   // console.log (a!=b)


    // greater than (>)
   //  var a = 30;
   //  var b = 10;
   //  console.log (a>b)
      // less than (<)
      // var a = 30;
      // var b = 10;
      // console.log (a<b)
      // greater than or equal to(>=)
   // var a = 30;
   // var b = 10;
   // console.log (a>=b)

      // less than or equal to(<=)
   // var a = 30;
   // var b = 10;
   // console.log (a<=b)   


                         // (*4*) LOGICAL OPERATOR
// logical operator are typically used with when they are, they return a boolean value
                     //AND (&&) OPERATOR
// var a = 30;
// var b = -20;
// console.log(a>b && b>0);
// console.log(a<b && b<0);

//Logical AND(&&)     (Asan alfaz ma AND operator ma aghr sarya expression ture hotya ha to answer true he daga Example:- aghr < ho ya > ya = ho aghr a=b,or b=c ya sub jawab shi nhi hoga to && operator answer false daga  )
//The logical AND (&&) operator (logical conjunction)for a set of 
// operands is true if and only if all of its operands are true

                    // OR (||) OPERATOR
// var a = 30;
// var b = -20;
// console.log(a<b || b<0 || a>b || b>0);

//Logical OR(||) (asan alfaz ma es ma aghr tama valuse jo hum na assign kia ha auna ma sa koi ek be shi ho ga to wo ture answer da ga)
//The logical OR (||) operator (logical disjunction)for a set of 
// operands is true if and only if one or more of its operands is true

                       //NOT (!) OPERATOR
                         //(1)
//                       var a = 30;
//                       var b = -20;
// console.log(!((a>0) || (b<0)));

     // (2)
//  console.log(!false);
// console.log(false);
          //(3)
         //  console.log(!true);

//Logical NOT(!)
//The logical NOT (!) operator (logical COMPLEMENT, NEGATION)for a set of 
// takes truth to falsity and vice versa.




              //(*5*) STRING CONCATENATION (OPERATOR)
// console.log("hello" + "world")
// console.log("hello " + "world")
// var myName = "Rasool"
// console.log(myName + " Bashir")

      // CHALANGE 
// QUESTION NO 1:WHAT WILL BE THE OUTPUT OF 3*3 AND 3**5?    (1)====> 3X3    (2)====>3X3X3X3X3
// console.log(3*3)
// console.log(3**3)
//R.W:-
//  console.log(10 ** -1);    ====> 1/10

// QUESTION NO 2: WHAT HAPPEN WHEN WE ADD NUM AND String?
// console.log(3+"3");

// QUESTION NO 3:WRITE A PROGRAM TO SWAP TWO NUMBER?
// var a =5;
// var b =10;

//  output b=5; a=10;

// var a =5;
// var b =10;
// var c =b; //c = 10; 
// b = a; //b = 5 ;
// a = c;
// console.log("The value of a is " + a);
// console.log("The value of b is " + b);

// QUESTION NO :WRITE A PROGRAM TO SWAP TWO NUMBER withOUT USING THIRD VARIABLE?

// var a =5;
// var b =10;

//  output b=5; a=10;

// a = a + b;   //a = 15
// b = a - b;   //15-10= 5
// a = a - b;    //15-5 = 10
// console.log("The value of a is " + a + " without using third variable");
// console.log("The value of b is " + b + " without using third variable");



















