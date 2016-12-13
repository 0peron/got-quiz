//sets the array for the questions and also starts question score and current question to 0 and the first question in the array
var questionArray = [
    {
        text: '1. What is the answer to this question?',
        choices: ['1', '2', '3', '4'],
        correctChoice: 0
        },
    {
        text: '2. What is the answer to this question?',
        choices: ['1', '2', '3', '4'],
        correctChoice: 1
        },
    {
        text: '3. What is the answer to this question?',
        choices: ['1', '2', '3', '4'],
        correctChoice: 2
        },
    {
        text: '4. What is the answer to this question?',
        choices: ['1', '2', '3', '4'],
        correctChoice: 3
        },
    {
        text: '5. What is the answer to this question?',
        choices: ['1', '2', '3', '4'],
        correctChoice: 4
        },
    ];

var currentQuestion = 0;
var totalQuestions = questionArray.length;
var correctAnswers = 0;

function qDisplay() {
    $('#question').text(questionArray[currentQuestion].questionText);
    $('#answers').empty();
    var totalChoices = questionArray[currentQuestion].choices.length;
    for (var i = 0; i < totalChoices; i++) {
        var answerHTML = '<input type="radio" class="select" value=' + i + '>' + questionArray[currentQuestion].choices[i] + '<br>'
        $('.select').append(answerHTML);
    }
    $('#questionCounter').text('Question' + (currentQuestion + 1) + 'of' + totalQuestions);
}

$(document).ready(function () {
    $('.quiz').hide();
    $('.results').hide();
    $('#start').click(function () {
        $('.results').hide();
        $('.front').hide();
        $('.quiz').show();
    });
    $('.quiz').on('click', '.select', function () {
        var userAnswer = $("input[class='select']:checked").val
        var correctAnswer = questionArray[currentQuestion].correctChoice;
        if (userAnswer === correctAnswer) {
            correctAnswers++;
        }
        if ((currentQuestion + 1) === totalQuestions) {
            $('.results').show();
            $('.quiz').hide();
            $('.front').hide();
            $('#finalScore').text(correctAnswers + "of" + totalQuestions);
        } else {
            currentQuestion++;
            qDisplay();
        }
    });
    $('.results').on('click', '#try-again', function () {
        $('.front').show();
        $('.quiz').hide();
        $('.results').hide();
        currentQuestion = 0;
        correctAnswers = 0;
    });
});
