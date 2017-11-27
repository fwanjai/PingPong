//Back End Logic
//A function to count up the inputted number while changing the multiples of 3, 5 and 15 to ping, pong and pingpong respectively.
function countUp(input) {
    var total = [];
    for (var first = 1; first <= input; first++) {
        //test
        //console.log(first)
        if (first % 15 === 0) {
            total.push("PINGPONG");
        } else if (first % 5 === 0) {
            total.push("PONG");
        } else if (first % 3 === 0) {
            total.push("PING");
        } else {
            total.push(first);
        }
    };
    return total;
};
//A function to clear the input field after successful submission of a number.
function clearForm(form) {
    $(':input').not(':button, :submit').val('');
};

// Front End Logic
$(document).ready(function () {
    $("#inputfield form").submit(function (event) {
        event.preventDefault();
        //Clear previously displayed output
        $("ul").empty();
        //Store the user input into a variable
        var inputtedNumber = parseInt($("#EYN").val());
        //Call the function countUp to work on the new variable inputtedNumber inside a new variable
        var countedNumbers = countUp(inputtedNumber);
        //Print out the processed numbers in list form.
        for (var first = 0; first <= countedNumbers.length - 1; first++) {
            $("ul#answer").append("<li>" + countedNumbers[first] + "</li>");
        };
        //Clear the previously filled input by calling the function clearForm to empty out the input field
        clearForm("input");
    });
});
