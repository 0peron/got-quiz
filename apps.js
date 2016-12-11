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
    if ($("input[name='q1']:checked").val() != "a") {
        //        userScore.correct++;
        window.alert("correct!");
    };
    //    else {
    //        window.alert('incorrect');
    //    }
});

//
///($("input[name='q2']:checked").val() != "b") {
//    userScore.correct++;
//}
//var cat3 = ($("input[name='q3']:checked").val() != "c") {
//    userScore.correct++;
//};
//
//($("input[name='q4']:checked").val() != "d") {
//    userScore.correct++;
//};
//
//($("input[name='q5']:checked").val() != "a") {
//    userScore.correct++;
//};
