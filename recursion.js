

// function fibonacci(n){
//     //find where you want it to stop
//     if (n <= 2){
//         return 1;
//     }
//     if (n>2){
//         //recreate the formulaby calling the function recursively
//         //f of n = (f of n-1) + (f of n-2)

//         console.log("N is currently " + n)
//         return fibonacci(n - 1) + fibonacci(n-2)
        
//     }
// }

// console.log(fibonacci(5))







// function sum(n)
// {
//     if(n <= 1)
//     {
//         return 1;
//     }

//     return n + sum(n-1)
//      
//     You can shorten the above with
//     return (n <= 1) ? 1: n + sum(n-1)
// }

// console.log(sum(4))





// function multipleOf3(n){
//     if(n <= 0){
//         return 0
//     }

//     if(n % 3 !== 0)
//     {
//         return (n = n - (n % 3))
//     }
        
// }

// console.log(multipleOf3(10))
//first 1 is location and second means remove, if I had a 0 i would not remove that item, then add may in that location
//months.splice(1,1 "may")

// function consonants(str)
// {
//     var vowels = ['a', 'e', 'i', 'o', 'u']

//     // if (str.length === 0)
//     // console.log(str.length)
//     for (i = str.length; i > 0; i--){
//         if(str[i] = vowels)
//         {
//             str[i].pop()
//             console.log("we have " + str)
//         }
//     }

// }

// consonants("hello")


// First of all, name your variables what they are. The name array you're using, is misleading if you use it to create a object.

// var myObject = {};

// myObject[an_object]      = "xyz";
// myObject[another_object] = "abc";
// Now, you can delete the entry in the object with the delete statement:

// delete myObject[an_object]; // Returns true / false if the deletion is a success / failure
// console.log(myObject[an_object]) // Returns undefined

function removeVowel(str)
{
    if(str.length === 0){return ""}
    return('aeiouAEIOU'.indexOf(str[0]) > -1) ? "" + removeVowel(str.slice(1)) : str[0]+removeVowel(str.slice(1))
}

console.log(removeVowel('china'))//'hll