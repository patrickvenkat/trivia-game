var triviaQuestions = [{
    Question: "Which company has the most recognized brand in the world?",
    answer1: "Google",
    answer2: "Amazon",
    answer3: "Apple",
    answer4: "Snapchat",
    correctAnswer: "Google"
    }, {
    Question: "Which company is the most valuable company in the world?",
    answer1: "Exxon Mobil",
    answer2: "Alibaba",
    answer3: "Apple",
    answer4: "Microsoft",
    correctAnswer: "Microsoft"
    }, {
    Question: "3rd question",
    answer1: "ans1",
    answer2: "ans2",
    answer3: "ans3",
    answer4: "ans4",
    correctAnswer: "ans2"
    }, {
    Question: "4th question",
    answer1: "ans14",
    answer2: "ans24",
    answer3: "ans34",
    answer4: "ans44",
    correctAnswer: "ans34"
    }]

    var dollarWins = 0;
    var questionAmount = 0;
    var i; //Question Index
    var timerID;
    var timeRemaining = 10;
    answersLocked = true;

    $("#row1-q1").on("click", function (){
        if (!($("#row1-q1").text() == "Answered")) {
            i = 0;
            timeRemaining = 10;
            questionSelection(i, "#row1-q1");
            questionAmount = 100;
            timeKeeperFunction();
        }
    });

    $("#row1-q2").on("click", function (){
        if (!($("#row1-q2").text() == "Answered")) {
            i = 1;
            timeRemaining = 10;
            questionSelection(i, "#row1-q2");
            questionAmount = 100;
            timeKeeperFunction();
        }
    });

    $("#row1-q3").on("click", function (){
        if (!($("#row1-q3").text() == "Answered")) {
            i = 2;
            timeRemaining = 10;
            questionSelection(i, "#row1-q3");
            questionAmount = 100;
            timeKeeperFunction();
        }
    });

    $("#row1-q4").on("click", function (){
        if (!($("#row1-q4").text() == "Answered")) {
            i = 3;
            timeRemaining = 10;
            questionSelection(i, "#row1-q4");
            questionAmount = 100;
            timeKeeperFunction();
        }
    });

    $("#answer-1").on("click", function (){
        if (!(answersLocked)){
            if (triviaQuestions[i].answer1 === triviaQuestions[i].correctAnswer){
                $(this).css("color", "green");
                $(this).css("font-size", "50px");
            }
            else {
                $(this).css("color", "red");
            }
            answerClickFunction(triviaQuestions[i].answer1, questionAmount);
        }
    });
    $("#answer-2").on("click", function (){
        if (!(answersLocked)){
            if (triviaQuestions[i].answer2 === triviaQuestions[i].correctAnswer){
                $(this).css("color", "green");
                $(this).css("font-size", "50px");
            }
            else {
                $(this).css("color", "red");
            }
            
            answerClickFunction(triviaQuestions[i].answer2, questionAmount);
        }
    });
    $("#answer-3").on("click", function (){
        if (!(answersLocked)){
            if (triviaQuestions[i].answer3 === triviaQuestions[i].correctAnswer){
                $(this).css("color", "green");
                $(this).css("font-size", "50px");
            }
            else {
                $(this).css("color", "red");
            }
            answerClickFunction(triviaQuestions[i].answer3, questionAmount);
        }
    });
    $("#answer-4").on("click", function (){
        if (!(answersLocked)){
            if (triviaQuestions[i].answer4 === triviaQuestions[i].correctAnswer){
                $(this).css("color", "green");
                $(this).css("font-size", "50px");
            }
            else {
                $(this).css("color", "red");
            }
            answerClickFunction(triviaQuestions[i].answer4, questionAmount);
        }
    });
   
    function questionSelection (i, rowq){
        answersLocked = false;
        displayQuestionSet(i);
        $(rowq).html("<h1>Answered</h1>");
        $(rowq).css("color", "black");
        $("#timekeeper").html("<h1>Time remaining = " + timeRemaining + "</h1>");
    }

    function answerClickFunction(answer, amount){

        answersLocked = true;
        if (answer === triviaQuestions[i].correctAnswer){
            dollarWins += amount;
            console.log(dollarWins);
            $("#score").html("<h1>winnings = $"  + dollarWins + "</h1>");
            clearTimerID();
            $("#timekeeper").html("<h1>Good Job! You got it right. Make another selection.</h1>");
        }
        else {
            clearTimerID();
            $("#timekeeper").html("<h1>Sorry. Incorrect!. Make another selection.</h1>");
        }
    }       
    
    function displayQuestionSet(i){
        $("#question").html(triviaQuestions[i].Question);
        $("#answer-1").html("a)" + triviaQuestions[i].answer1);
        $("#answer-1").css("color", "black");
        $("#answer-1").css("font-size", "25px");
        $("#answer-2").html("b)" + triviaQuestions[i].answer2);
        $("#answer-2").css("color", "black");
        $("#answer-2").css("font-size", "25px");
        $("#answer-3").html("c)" + triviaQuestions[i].answer3);
        $("#answer-3").css("color", "black");
        $("#answer-3").css("font-size", "25px");
        $("#answer-4").html("d)" + triviaQuestions[i].answer4);
        $("#answer-4").css("color", "black");
        $("#answer-4").css("font-size", "25px");
    }
    
    function timeKeeperFunction() {
        clearInterval(timerID);
        timerID = setInterval(countDown, 1000);
    }

    function countDown() {
        timeRemaining--;
        $("#timekeeper").html("<h1>Time remaining = " + timeRemaining + "</h1>");
        
        //  Once number hits zero...
        if (timeRemaining === 0) {
            $("#timekeeper").html("<h1>Sorry. You timed out. Please make another selection.</h1>");
            clearTimerID();
            lockTheAnswers ();
        }
    }

    function clearTimerID() {
      clearInterval(timerID);
    }

    function lockTheAnswers(){
        if (triviaQuestions[i].answer1 === triviaQuestions[i].correctAnswer){
            $("#answer-1").css("color", "green");
            $("#answer-1").css("font-size", "50px");
        }
        else {
            $("#answer-1").css("color", "red");
        }
        
        if (triviaQuestions[i].answer2 === triviaQuestions[i].correctAnswer){
            $("#answer-2").css("color", "green");
            $("#answer-2").css("font-size", "50px");
        }
        else {
            $("#answer-2").css("color", "red");
        }

        if (triviaQuestions[i].answer3 === triviaQuestions[i].correctAnswer){
            $("#answer-3").css("color", "green");
            $("#answer-3").css("font-size", "50px");
        }
        else {
            $("#answer-3").css("color", "red");
        }

        if (triviaQuestions[i].answer4 === triviaQuestions[i].correctAnswer){
            $("#answer-4").css("color", "green");
            $("#answer-4").css("font-size", "50px");
        }
        else {
            $("#answer-4").css("color", "red");
        }

        answersLocked = true;
    };