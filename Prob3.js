//Put the start of your program in a main function.
// Create an attendance array.
// Ask the user if a teacher, student, or parent is checking in.
// Use a switch statement to add the teacher/student/parent to the attendance array,
// then log the option they chose.
// Repeat this five times.

function main() {
    attendance = [];
    while(attendance.length != 5) {

        var checkIn = prompt("Is a teacher, student, or parent checking in?")


        switch (checkIn) {
            case "teacher":
                attendance.push("teacher");
                break;
            case "student":
                attendance.push("student");
                break;
            case "parent":
                attendance.push("parent");
                break;
            default:
                attendance.push("absent");


        }
    }
}
main();
console.log(attendance);