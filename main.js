// [1] Define an array in the JavaScript:
origArray = [2,3,4];


//[2] add an addEventListener for the DOMContentLoaded and in that, 
addEventListener('DOMContentLoaded', (event) => {
    // 	[a] write the values of the origArray into the 3 textboxes. 

    document.getElementById("text1").value = origArray[0];
    document.getElementById("text2").value = origArray[1];
    document.getElementById("text3").value = origArray[2];
    

    // 	[b] add 2 event listener sections for the 2nd and 3rd buttons.  
    // The 2nd one must do it using an anonymous function.  
    document.getElementById("cube").addEventListener("click", function(){
        let resultCube = origArray.map(x => x**3)
        document.getElementById("text1").value = resultCube[0];
        document.getElementById("text2").value = resultCube[1];
        document.getElementById("text3").value = resultCube[2];
    })
    // The 3rd one must call a function by name.
    document.getElementById("fourth").addEventListener("click", myToTheFourth);

});


// [3] Now write the code for the function called by the first button.  
// It must use the array.map capability to make a new array where the values of each element are the square of the values in the origArray. Then it should write out the 3 values in the new array into the HTML 3 textboxes.
function mySquare(){
    let resultSquare = origArray.map(x => x**2)
    document.getElementById("text1").value = resultSquare[0];
    document.getElementById("text2").value = resultSquare[1];
    document.getElementById("text3").value = resultSquare[2];
 }

//[5] Now write the code for the named function in the 3rd button’s click event handler. 
//It must use the array.map capability to make a new array where the values of each element are the 4th power of the values in the origArray. Then it should write out the 3 values in the new array into the HTML 3 textboxes.

 function myToTheFourth(){
    let resultFourth = origArray.map(x => x**4)
    document.getElementById("text1").value = resultFourth[0];
    document.getElementById("text2").value = resultFourth[1];
    document.getElementById("text3").value = resultFourth[2]; 
 }
