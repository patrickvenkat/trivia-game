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
    Question: "1st row 3rd question",
    answer1: "ans131",
    answer2: "ans132",
    answer3: "ans132",
    answer4: "ans134",
    correctAnswer: "ans132"
    }, {
    Question: "1st row 4th question",
    answer1: "ans141",
    answer2: "ans142",
    answer3: "ans143",
    answer4: "ans144",
    correctAnswer: "ans141"
    }, {
    Question: "2nd row 1st question",
    answer1: "ans211",
    answer2: "ans212",
    answer3: "ans213",
    answer4: "ans214",
    correctAnswer: "ans214"
    }, {
    Question: "2nd row 2nd question",
    answer1: "ans221",
    answer2: "ans222",
    answer3: "ans223",
    answer4: "ans224",
    correctAnswer: "ans222"
    }, {
    Question: "2nd row 3rd question",
    answer1: "ans231",
    answer2: "ans232",
    answer3: "ans233",
    answer4: "ans234",
    correctAnswer: "ans232"
    }, {
    Question: "2nd row 4th question",
    answer1: "ans241",
    answer2: "ans242",
    answer3: "ans243",
    answer4: "ans244",
    correctAnswer: "ans243"
    }, {
    Question: "3rd row 1st question",
    answer1: "ans311",
    answer2: "ans312",
    answer3: "ans313",
    answer4: "ans314",
    correctAnswer: "ans314"
    }, {
    Question: "3rd row 2nd question",
    answer1: "ans321",
    answer2: "ans322",
    answer3: "ans323",
    answer4: "ans324",
    correctAnswer: "ans222"
    }, {
    Question: "3rd row 3rd question",
    answer1: "ans331",
    answer2: "ans332",
    answer3: "ans333",
    answer4: "ans334",
    correctAnswer: "ans332"
    }, {
    Question: "3rd row 4th question",
    answer1: "ans341",
    answer2: "ans342",
    answer3: "ans343",
    answer4: "ans344",
    correctAnswer: "ans343"
    }]

    var dollarWins = 0;
    var questionAmount = 0;
    var i; //Question Index
    var timerID;
    var timeRemaining = 0;
    var countAnswered = 0;
    answersLocked = true;

    // Show the rows hidden by Bootstrap
    showRows();

    $("#row1-q1").on("click", function (){
        if (!($("#row1-q1").text() == "Answered") && (timeRemaining === 0)){
            i = 0;
            timeRemaining = 10;
            questionSelection(i, "#row1-q1");
            questionAmount = 100;
            timeKeeperFunction();
        }
    });

    $("#row1-q2").on("click", function (){
        if (!($("#row1-q2").text() == "Answered") && (timeRemaining === 0)){
            i = 1;
            timeRemaining = 10;
            questionSelection(i, "#row1-q2");
            questionAmount = 100;
            timeKeeperFunction();
        }
    });

    $("#row1-q3").on("click", function (){
        if (!($("#row1-q3").text() == "Answered") && (timeRemaining === 0)){
            i = 2;
            timeRemaining = 10;
            questionSelection(i, "#row1-q3");
            questionAmount = 100;
            timeKeeperFunction();
        }
    });

    $("#row1-q4").on("click", function (){
        if (!($("#row1-q4").text() == "Answered") && (timeRemaining === 0)){
            i = 3;
            timeRemaining = 10;
            questionSelection(i, "#row1-q4");
            questionAmount = 100;
            timeKeeperFunction();
        }
    });

    $("#row2-q1").on("click", function (){
        if (!($("#row2-q1").text() == "Answered") && (timeRemaining === 0)){
            i = 4;
            timeRemaining = 10;
            questionSelection(i, "#row2-q1");
            questionAmount = 100;
            timeKeeperFunction();
        }
    });

    $("#row2-q2").on("click", function (){
        if (!($("#row2-q2").text() == "Answered") && (timeRemaining === 0)){
            i = 5;
            timeRemaining = 10;
            questionSelection(i, "#row2-q2");
            questionAmount = 100;
            timeKeeperFunction();
        }
    });

    $("#row2-q3").on("click", function (){
        if (!($("#row2-q3").text() == "Answered") && (timeRemaining === 0)){
            i = 6;
            timeRemaining = 10;
            questionSelection(i, "#row2-q3");
            questionAmount = 100;
            timeKeeperFunction();
        }
    });

    $("#row2-q4").on("click", function (){
        if (!($("#row2-q4").text() == "Answered") && (timeRemaining === 0)){
            i = 7;
            timeRemaining = 10;
            questionSelection(i, "#row2-q4");
            questionAmount = 100;
            timeKeeperFunction();
        }
    });
    
    $("#row3-q1").on("click", function (){
        if (!($("#row3-q1").text() == "Answered") && (timeRemaining === 0)){
            i = 8;
            timeRemaining = 10;
            questionSelection(i, "#row3-q1");
            questionAmount = 100;
            timeKeeperFunction();
        }
    });

    $("#row3-q2").on("click", function (){
        if (!($("#row3-q2").text() == "Answered") && (timeRemaining === 0)){
            i = 9;
            timeRemaining = 10;
            questionSelection(i, "#row3-q2");
            questionAmount = 100;
            timeKeeperFunction();
        }
    });

    $("#row3-q3").on("click", function (){
        if (!($("#row3-q3").text() == "Answered") && (timeRemaining === 0)){
            i = 10;
            timeRemaining = 10;
            questionSelection(i, "#row3-q3");
            questionAmount = 100;
            timeKeeperFunction();
        }
    });

    $("#row3-q4").on("click", function (){
        if (!($("#row3-q4").text() == "Answered") && (timeRemaining === 0)){
            i = 11;
            timeRemaining = 10;
            questionSelection(i, "#row3-q4");
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

    // Code below executes whenever an answer is chosen
    function answerClickFunction(answer, amount){
        answersLocked = true;
        if (answer === triviaQuestions[i].correctAnswer){
            dollarWins += amount;
            console.log(dollarWins);
            $("#score").html("<h1>Winnings = $"  + dollarWins + "</h1>");
            clearTimerID();
            $("#timekeeper").html("<h1>Good Job!. Make another selection from the board.</h1>");
            timeRemaining = 0;
            showRows();
        }
        else {
            clearTimerID();
            $("#timekeeper").html("<h1>Incorrect!. Make another selection from the board.</h1>");
            timeRemaining = 0;
            showRows();
        }
        
        countAnswered ++;
        if (countAnswered === triviaQuestions.length){
            $("#timekeeper").html("<h1>Game complete!</h1>");
        }

    }       
    
    // Code below displays a new question and answer set
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
        collapseRows();
    }
    
    // Code below counts down time for each question
    function timeKeeperFunction() {
        clearInterval(timerID);
        timerID = setInterval(countDown, 1000);
    }

    function countDown() {
        timeRemaining--;
        $("#timekeeper").html("<h1>Time remaining = " + timeRemaining + "</h1>");
        
        //  Once number hits zero...
        if (timeRemaining === 0) {
            $("#timekeeper").html("<h1>You timed out. Please make another selection from the board.</h1>");
            clearTimerID();
            lockTheAnswers ();
            showRows();
        }
    }

    function clearTimerID() {
      clearInterval(timerID);
    }

    // Code below locks the answer once it is chosen
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

    // Code below shows rows hidden
    function showRows(){
        $("#row0").removeClass('d-none');
        $("#row1").removeClass('d-none');
        $("#row2").removeClass('d-none');
        $("#row3").removeClass('d-none');
    };

    // Code below hides rows to slide up the question and answer set
    function collapseRows(){
        $("#row0").addClass('d-none');
        $("#row1").addClass('d-none');
        $("#row2").addClass('d-none');
        $("#row3").addClass('d-none');
    };