// var students = [];
// students [0] = "Abdul"
// students [1] = "Qadeer"
// students[2] = "solangi"

// alert(students)

// students.pop()

// students.push("engineer")
// console.log(students)

// shift method remove elements from start

// students.shift()
// console.log(students)



// add elements from starts


// students.unshift("Bilal","Zunaib")
// console.log(students)




// students.splice(0,2,"aq","qa")
// console.log(students)

// var num = prompt("Enter a  number")

// for ( i= 2; i<=num; i++){
//     if (num %2 === 0){
//         console.log(num, +"isa prime number ")
//     }else {
//         console.log("Not a prime no ")
//     }
// }




// var userInput = prompt("Enter a number")

// for (let i = 1; i<=10; i++){
//     console.log(userInput + "X" +i+" = " +(i*userInput))
// }









// for (let i = 1; i<=10; i++){
//     console.log(2 + "X" +i+" = " +(i*2))
// }



// for (var i = 0; i<3; i++){
//     for (var j = 0 ; j<5; j++){
//         console.log("AQ" + "<br>")
//     } 
// }







        // Right angle Triangle

        for (var i = 7; i >= 1; i--) {
            var str = "";
             for (var j = i; j <= 7; j++) {
                  str += "*"; } 
                  console.log(str); 
           }



        //    Reverse words

var number = prompt ("Enter a number")

for ( i = number.length-1 ; i >=0; i--){
    document.write(number[i])
}


// factorial 



//         function facto(){

let i, no, fact;
fact=1;
no=(document.getElementById("num").value);
document.getElementById("num").value = " ";
for(i=1; i<=no; i++)  
{
fact= fact*i;
}  
document.getElementById("answer").value= fact;
}



// Odd and Even numbers






        // let arr = [];
        // let even = [];
        // let odd = [];

        // function addRoll() {
        //     const num = document.getElementById("input").value;
        //     arr.push(num);

        //     document.getElementById("allNumbers").innerText = arr;
        //     document.getElementById("input").value = "";
        // }

        // function arrangeRoll() {
        //     for (i = 0; i < arr.length; i++) {
        //         if (arr[i] % 2 === 0) {
        //             even.push( arr[i]  );
        //         }else{
        //             odd.push( arr[i]  );
        //         }
        //     }
        //     document.getElementById("odd").innerHTML = odd;
        //     document.getElementById("even").innerText = even;
        // }


        
        //   Table Generator 

         function tableGenerator(){
        let Uinput=document.getElementById("number").value;
         for (let i = 1; i <= 10 ; i= i +1) {
             console.log( Uinput + " X "+ i +"  =" + (i * Uinput) );        

        }

        }



