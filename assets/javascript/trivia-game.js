var triviaQuestions = [{
        Question: "Which actor/actress has the most oscars in any category?",
        answer1: "Tom Hanks",
        answer2: "Katharine Hepburn",
        answer3: "Meryl Streep",
        answer4: "Beetlejuice",
        correctAnswer: "Katharine Hepburn"
    }, {
        Question: "Whos is the world's highest paid athlete?",
        answer1: "Aaron Rodgers",
        answer2: "Lionel Messi",
        answer3: "Roger Federer",
        answer4: "Lebron James",
        correctAnswer: "Lionel Messi"
    }, {
        Question: "Whos is the world's highest paid musician?",
        answer1: "Taylor Swift",
        answer2: "Jay-Z",
        answer3: "Bruno Mars",
        answer4: "U2",
        correctAnswer: "U2"
    }, {
        Question: "Who cofounded Google?",
        answer1: "Larry Page",
        answer2: "Steve Jobs",
        answer3: "Elon Musk",
        answer4: "Cap'n Crunch",
        correctAnswer: "Larry Page"
    }, {
        Question: "Which actor is the highest grossing of all time for their movies?",
        answer1: "John Travolta",
        answer2: "Tom Cruise",
        answer3: "Samuel L. Jackson",
        answer4: "Danny Devito",
        correctAnswer: "Samuel L. Jackson"
    }, {
        Question: "Who has the most number of olympic medals?",
        answer1: "Usain Bolt",
        answer2: "Katie Ledecky",
        answer3: "Michael Phelps",
        answer4: "Carl Lewis",
        correctAnswer: "Michael Phelps"
    }, {
        Question: "Which muscian has the most number of Grammys?",
        answer1: "Beyonce Knowles",
        answer2: "Quincy Jones",
        answer3: "Georg Solti",
        answer4: "Bubba Gump",
        correctAnswer: "Georg Solti"
    }, {
        Question: "Who is the richest business man in the world?",
        answer1: "Bill Gates",
        answer2: "Warren Buffet",
        answer3: "Jeff Bezos",
        answer4: "Super Man",
        correctAnswer: "Jeff Bezos"
    }, {
        Question: "Which actor has the highest net worth?",
        answer1: "Shah Rukh Khan",
        answer2: "George Clooney",
        answer3: "Mel Gibson",
        answer4: "Adam Sandler",
        correctAnswer: "Shah Rukh Khan"
    }, {
        Question: "Which athlete has the most number of instagram followers?",
        answer1: "Cristiano Ronaldo",
        answer2: "Lebron James",
        answer3: "Tiger Woods",
        answer4: "David Beckham",
        correctAnswer: "Cristiano Ronaldo"
    }, {
        Question: "Who is the richest musician in the world?",
        answer1: "Violin Man",
        answer2: "Jay-Z",
        answer3: "Paul McCartney",
        answer4: "Andrew Lloyd Webber",
        correctAnswer: "Andrew Lloyd Webber"
    }, {
        Question: "Which company makes Post-It notes?",
        answer1: "3M",
        answer2: "International Paper Company",
        answer3: "Michael's Arts and Crafts",
        answer4: "The Paper Store",
        correctAnswer: "3M"
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
            questionAmount = 200;
            timeKeeperFunction();
        }
    });

    $("#row2-q2").on("click", function (){
        if (!($("#row2-q2").text() == "Answered") && (timeRemaining === 0)){
            i = 5;
            timeRemaining = 10;
            questionSelection(i, "#row2-q2");
            questionAmount = 200;
            timeKeeperFunction();
        }
    });

    $("#row2-q3").on("click", function (){
        if (!($("#row2-q3").text() == "Answered") && (timeRemaining === 0)){
            i = 6;
            timeRemaining = 10;
            questionSelection(i, "#row2-q3");
            questionAmount = 200;
            timeKeeperFunction();
        }
    });

    $("#row2-q4").on("click", function (){
        if (!($("#row2-q4").text() == "Answered") && (timeRemaining === 0)){
            i = 7;
            timeRemaining = 10;
            questionSelection(i, "#row2-q4");
            questionAmount = 200;
            timeKeeperFunction();
        }
    });
    
    $("#row3-q1").on("click", function (){
        if (!($("#row3-q1").text() == "Answered") && (timeRemaining === 0)){
            i = 8;
            timeRemaining = 10;
            questionSelection(i, "#row3-q1");
            questionAmount = 300;
            timeKeeperFunction();
        }
    });

    $("#row3-q2").on("click", function (){
        if (!($("#row3-q2").text() == "Answered") && (timeRemaining === 0)){
            i = 9;
            timeRemaining = 10;
            questionSelection(i, "#row3-q2");
            questionAmount = 300;
            timeKeeperFunction();
        }
    });

    $("#row3-q3").on("click", function (){
        if (!($("#row3-q3").text() == "Answered") && (timeRemaining === 0)){
            i = 10;
            timeRemaining = 10;
            questionSelection(i, "#row3-q3");
            questionAmount = 300;
            timeKeeperFunction();
        }
    });

    $("#row3-q4").on("click", function (){
        if (!($("#row3-q4").text() == "Answered") && (timeRemaining === 0)){
            i = 11;
            timeRemaining = 10;
            questionSelection(i, "#row3-q4");
            questionAmount = 300;
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
            countAnswered ++;
            if (countAnswered === triviaQuestions.length){
                $("#timekeeper").html("<h1>Game complete!</h1>");
            }
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