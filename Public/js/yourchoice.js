var sem1_subject1;
var sem1_subject2;
var sem1_subject3;

function findgrad(val) {
    if ((val == "A") || (val == "a")) {
        return 4;
    } else if ((val == "B") || (val == "b")) {
        return 3;
    } else if ((val == "C") || (val == "c")) {
        return 2;

    } else if ((val == "F") || (val == "f")) {
        return 0;
    }
}
function calculate_gpa() {
    var z;
    var y;
    var x;
    var a;


    sem1_subject1 = document.getElementById("Subject_1").value;
    sem1_subject2 = document.getElementById("Subject_2").value;
    sem1_subject3 = document.getElementById("Subject_3").value;


    if (sem1_subject1 == "A" || sem1_subject1 == "a") {
        z = findgrad(sem1_subject1);

    } else if (sem1_subject1 == "B" || sem1_subject1 == "b") {
        z = findgrad(sem1_subject1);


    } else if (sem1_subject1 == "C" || sem1_subject1 == "c") {
        z = findgrad(sem1_subject1);


    } else if (sem1_subject1 == "F" || sem1_subject1 == "f") {
        z = findgrad(sem1_subject1);


    }
    if (sem1_subject2 == "A" || sem1_subject2 == "a") {
        y = findgrad(sem1_subject2);


    } else if (sem1_subject2 == "B" || sem1_subject2 == "b") {
        y = findgrad(sem1_subject2);

    } else if (sem1_subject2 == "C" || sem1_subject2 == "c") {
        y = findgrad(sem1_subject2);

    } else if (sem1_subject2 == "F" || sem1_subject1 == "f") {
        y = findgrad(sem1_subject2);


    }
    if (sem1_subject3 == "A" || sem1_subject3 == "a") {
        x = findgrad(sem1_subject3);

    } else if (sem1_subject3 == "B" || sem1_subject3 == "b") {
        x = findgrad(sem1_subject3);

    } else if (sem1_subject3 == "C" || sem1_subject3 == "c") {
        x = findgrad(sem1_subject3);

    } else if (sem1_subject3 == "F" || sem1_subject1 == "f") {
        x = findgrad(sem1_subject3);
    }

    if ((sem1_subject1 == "A" || sem1_subject1 == "a" || sem1_subject1 == "B" || sem1_subject1 == "b" || sem1_subject1 == "C" || sem1_subject1 == "c" || sem1_subject1 == "F" || sem1_subject1 == "f") &&
        (sem1_subject2 == "A" || sem1_subject2 == "a" || sem1_subject2 == "B" || sem1_subject2 == "b" || sem1_subject2 == "C" || sem1_subject2 == "c" || sem1_subject2 == "F" || sem1_subject2 == "f") &&
        (sem1_subject3 == "A" || sem1_subject3 == "a" || sem1_subject3 == "B" || sem1_subject3 == "b" || sem1_subject3 == "C" || sem1_subject3 == "c" || sem1_subject3 == "F" || sem1_subject3 == "f")) {

        a = sum(x, y, z);

        document.getElementById("dem").innerHTML = a;
    } else {
        alert(x = "Please Enter a grades " + "A" + " " + "B" + " " + "C" + " " + "F" + " to know your Semester 1 Gpa");
        document.getElementById('Subject_1').value = null;
        document.getElementById("Subject_2").value = null;
        document.getElementById("Subject_3").value = null;
    }


}
function sum(f, g, h) {
    return ((f + g + h) / 3).toFixed(2);
}
