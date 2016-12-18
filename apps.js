//sets the array for the questions and also starts question score and current question to 0 and the first question in the array
var questionArray = [
    {
        question: '1. Who wrote the series A Song of Ice and Fire?',
        choices: ['John Scalzi', 'George R. R. Martin', 'JK Rowling', 'J. R. R. Tolkein'],
        correctChoice: 1
        },
    {
        question: "2. What is John Snow's dire wolf named?",
        choices: ['Snow', 'Mist', 'Spirit', 'Ghost'],
        correctChoice: 3
        },
    {
        question: "3. What is the name of Arya's sword?",
        choices: ['Pin', 'Hound Slayer', 'Needle', 'Hector'],
        correctChoice: 2
        },
    {
        question: '4. Where is Daenerys from?',
        choices: ['Iron Islands', 'Tarth', 'Dorn', 'Kings Landing'],
        correctChoice: 3
        },
    {
        question: '5. What is the name of the black dragon?',
        choices: ['Drogon', 'Viserion', 'Rhaegal', 'Targaryen'],
        correctChoice: 0
        },
    ];

var currentQuestion = 0;
var totalQuestions = questionArray.length;
var numberOfCorrectAnswers = 0;

function qDisplay() {
    $('#question').text(questionArray[currentQuestion].question);
    $('#answers').empty();
    var totalChoices = questionArray[currentQuestion].choices.length;
    for (var i = 0; i < totalChoices; i++) {
        var answerHTML = '<input type="radio" class="select" name="select" value=' + i + '>' + questionArray[currentQuestion].choices[i] + '<br>'
        $('#answers').append(answerHTML);
    }
    $('#questionCounter').text('Question ' + (currentQuestion + 1) + ' of ' + totalQuestions);
}

$(document).ready(function () {
    $('.quiz').hide();
    $('.results').hide();
    $('#start').click(function () {
        qDisplay();
        $('.results').hide();
        $('.front').hide();
        $('.quiz').show();
    });
    $('.quiz').on('click', '.select', function () {
        var userAnswer = $("input[name='select']:checked").val();
        console.log(userAnswer);
        var correctAnswer = questionArray[currentQuestion].correctChoice;
        console.log(correctAnswer);
        if (userAnswer == correctAnswer) {
            numberOfCorrectAnswers++;
            console.log('here');
        }
        if ((currentQuestion + 1) === totalQuestions) {
            $('.results').show();
            $('.quiz').hide();
            $('.front').hide();
            $('#finalScore').text(numberOfCorrectAnswers + " of " + totalQuestions);
        } else {
            currentQuestion++;
            qDisplay();
        }
        console.log(numberOfCorrectAnswers);
    });
    $('.results').on('click', '#try-again', function () {
        $('.front').show();
        $('.quiz').hide();
        $('.results').hide();
        currentQuestion = 0;
        numberOfCorrectAnswers = 0;
    });
});
