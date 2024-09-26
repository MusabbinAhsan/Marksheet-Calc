// Modal control
var modal = document.getElementById("resultModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Marksheet calculation with grade-based remarks
function calculateMarks() {
    // Get student name
    let name = prompt("Enter Student's Name:", "Student");

    // Get marks from user
    let math = parseInt(prompt("Enter Math Marks:", 0));
    let english = parseInt(prompt("Enter English Marks:", 0));
    let science = parseInt(prompt("Enter Science Marks:", 0));

    // Validate inputs
    if (isNaN(math) || isNaN(english) || isNaN(science)) {
        alert("Please enter valid marks!");
        return;
    }

    // Calculate total and percentage
    let total = math + english + science;
    let percentage = (total / 300) * 100;

    // Determine grade and remarks based on percentage
    let grade, remarks;
    if (percentage >= 80) {
        grade = "A";
        remarks = "Excellent!";
    } else if (percentage >= 70) {
        grade = "B";
        remarks = "Very Good!";
    } else if (percentage >= 60) {
        grade = "C";
        remarks = "Good!";
    } else if (percentage >= 50) {
        grade = "D";
        remarks = "Satisfactory!";
    } else if (percentage >= 40) {
        grade = "E";
        remarks = "Needs Improvement!";
    } else {
        grade = "F";
        remarks = "Fail";
    }

    // Display the results in the modal
    document.getElementById("studentName").innerText = `Student: ${name}`;
    document.getElementById("mathResult").innerText = `Math: ${math}`;
    document.getElementById("englishResult").innerText = `English: ${english}`;
    document.getElementById("scienceResult").innerText = `Science: ${science}`;
    document.getElementById("totalResult").innerText = `Total: ${total}`;
    document.getElementById("percentageResult").innerText = `Percentage: ${percentage.toFixed(2)}%`;
    document.getElementById("remarksResult").innerText = `Grade: ${grade} (${remarks})`;

    // Show the modal
    modal.style.display = "block";
}

