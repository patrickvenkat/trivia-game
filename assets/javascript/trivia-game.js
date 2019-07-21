var triviaQuestions = [{
    Question: "Which company has the most recognized brand in the world?",
    answer1: "Google",
    answer2: "Amazon",
    answer3: "Apple",
    answer4: "Snapchat",
    correctAnswer: "Apple"
    }, {
    Question: "Which company is the most valuable company in the world?",
    answer1: "Exxon Mobil",
    answer2: "Alibaba",
    answer3: "Apple",
    answer4: "Microsoft",
    correctAnswer: "Microsoft"
    }]

    var gameScore = 0;
    var i = 0; // Question Index

    // Display the first question set
        displayQuestionSet(i);

    console.log("before onclick");

    $("#answer-1").on("click", function (){
        answerClickFunction(triviaQuestions[i].answer1);
    });
    $("#answer-2").on("click", function (){
        answerClickFunction(triviaQuestions[i].answer2);
    });
    $("#answer-3").on("click", function (){
        answerClickFunction(triviaQuestions[i].answer3);
    });
    $("#answer-4").on("click", function (){
        answerClickFunction(triviaQuestions[i].answer4);
    });

    function answerClickFunction(answer){

        console.log("clicked answer");

        if (answer === triviaQuestions[i].correctAnswer){
            console.log("entered if");
            gameScore++;
            console.log(gameScore);
            $("#score").html("<h1>Total Score = "  + gameScore + "</h1>");
        }

        if (i < triviaQuestions.length){
            i++;
        }
        
        if (i === triviaQuestions.length){
            i=0;
        }

        displayQuestionSet(i);
    }       
    
    function displayQuestionSet(i){
        $("#question").html(triviaQuestions[i].Question);
        $("#answer-1").html("a)" + triviaQuestions[i].answer1);
        $("#answer-2").html("b)" + triviaQuestions[i].answer2);
        $("#answer-3").html("c)" + triviaQuestions[i].answer3);
        $("#answer-4").html("d)" + triviaQuestions[i].answer4);
    }
    
