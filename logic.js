
let credits = [];
let grades = [];
let totalCredits = 0;
let cgpa = 0;
let sum=0;

const gradeMap = {
    "O": 10,
    "A+": 9,
    "A": 8,
    "B+": 7,
    "B": 6,
    "C": 5,
    "F": 0
}

window.onload = function() {
    reset();  
    alert("Welcome! Please enter the credits and grade points of your subjects one by one and click 'Add +'. Once you have added for all subjects, click 'Calculate' to see your CGPA.");
};


function add(){
    let inp1 = document.getElementById("inp1").value;
    inp1 = parseInt(inp1);
    console.log("Entered Credit: " + inp1);
    let inp2 = document.getElementById("inp2").value.toUpperCase();
    console.log("Entered Grade: " + inp2);

    if (inp1<0 || !(inp2 in gradeMap)){
        if (inp1<0 && !(inp2 in gradeMap)){
            alert("Credits must be a non-negative integer and please enter a valid grade point (O, A+, A, B+, B, C, F).");
        }
        else if (inp1<0){
            alert("Credits must be a non-negative integer.");
        }
        else if (!(inp2 in gradeMap)){
            alert("Please enter a valid grade point (O, A+, A, B+, B, C, F).");
        }
        console.log("Credits Array: "+ credits);
        console.log("Grades Array: " + grades);
        // console.log("Summation: " + sum);
    }
    
    else if (inp2 in gradeMap && inp1>=0){
        credits.push(inp1);
        console.log("Credits Array: "+ credits);
        totalCredits+=inp1;
        grades.push(inp2);
        alert("Succesfully added!")
        console.log("Grades Array: " + grades);
        sum += inp1*gradeMap[inp2];
        // console.log("Summation: " + sum);
    }
    
    document.getElementById("inp1").value = "";
    document.getElementById("inp2").value = "";
}



function calculate(){
    console.log("Computing...")
    console.log("Summation: " + sum);
    console.log("Total Credits: " + totalCredits);
    cgpa = (totalCredits == 0) ? 0 : (sum / totalCredits).toFixed(2);
    let final_value = document.getElementById("cgpa");
    console.log("Cgpa: " + cgpa);
    final_value.textContent = "loading...";

    if (window.matchMedia("(max-width: 600px)").matches) {
        
        if (final_value.textContent === "loading..."){
            final_value.style.fontSize = "20px";
        }
    }
    
    //After 1.5 seconds, show final CGPA
    setTimeout(() => {
        final_value.textContent = cgpa;
        if (window.matchMedia("(max-width: 600px)").matches) {
            final_value.style.fontSize = "23px";
        }
    }, 1500);
    
}


function reset(){
    cgpa = 0;
    credits = [];
    grades = [];
    totalCredits = 0;
    console.log("All values reset.");
}


