$('#start').on('click', function () {
    window.location.href = 'question-one.html';
});
$('#one').on('click', function () {
    window.location.href = 'question-two.html';
});
$('#two').on('click', function () {
    window.location.href = 'question-three.html';
});
$('#three').on('click', function () {
    window.location.href = 'question-four.html';
});
$('#four').on('click', function () {
    window.location.href = 'question-five.html';
});
$('#five').on('click', function () {
    window.location.href = 'results.html';
});
$('#try').on('click', function () {
    window.location.href = 'index.html';
});

$('#checkOne').click(function question1() {
    if ($("input[name='q1']:checked").val() == "a") {
        //        userScore.correct++;
        window.alert("correct!");
    } else {
        window.alert('incorrect');
    };
});

$('#checkTwo').click(function question2() {
    if ($("input[name='q2']:checked").val() == "a") {
        //        userScore.correct++;
        window.alert("correct!");
    } else {
        window.alert('incorrect');
    };
});

$('#checkThree').click(function question3() {
    if ($("input[name='q3']:checked").val() == "a") {
        //        userScore.correct++;
        window.alert("correct!");
    } else {
        window.alert('incorrect');
    };
});

$('#checkFour').click(function question4() {
    if ($("input[name='q4']:checked").val() == "a") {
        //        userScore.correct++;
        window.alert("correct!");
    } else {
        window.alert('incorrect');
    };
});

$('#checkFive').click(function question5() {
    if ($("input[name='q5']:checked").val() == "a") {
        //        userScore.correct++;
        window.alert("correct!");
    } else {
        window.alert('incorrect');
    };
});
