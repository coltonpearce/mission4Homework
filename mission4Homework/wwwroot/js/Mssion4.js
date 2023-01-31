$("#calculateGrade").click(function () {
    //This will be where I gather all the values and store them as variables
    assignment = $('#forAssignments').val();
    project = $('#forProject').val();
    quizzes = $('#forQuizzes').val();
    midterm = $('#forMidterm').val();
    final = $('#forFinal').val();
    intex = $('#forINTEX').val();

    //this is where I will calculate the weighted scores
    AssignmentScore = (assignment * .5);
    ProjectScore = (project * .1);
    QuizScore = (quizzes * .1);
    MidtermScore = (midterm * .1);
    FinalScore = (final * .1);
    IntexScore = (intex * .1);

    //this will hold the final grade
    OverallGrade = AssignmentScore + ProjectScore + QuizScore + MidtermScore + FinalScore + IntexScore

    //below all of this is where the code will go through and determine which letter grade must be printed
    if (OverallGrade >= 94) {
        $("#LetterGrade").html("A or %" + OverallGrade);
    }

    else if (OverallGrade >= 90 && OverallGrade < 94)
    {
        $("#LetterGrade").html("A- or %" + OverallGrade);
    }

    else if (OverallGrade >= 87 && OverallGrade < 90)
    {
        $("#LetterGrade").html("B+ or %" + Math.round(OverallGrade));
    }

    else if (OverallGrade >= 84 && OverallGrade < 87)
    {
        $("#LetterGrade").html("B or %" + Math.round(OverallGrade));
    }

    else if (OverallGrade >= 80 && OverallGrade < 84)
    {
        $("#LetterGrade").html("B- or %" + Math.round(OverallGrade));
    }

    else if (OverallGrade >= 77 && OverallGrade < 80)
    {
        $("#LetterGrade").html("C+ or %" + Math.round(OverallGrade));
    }

    else if (OverallGrade >= 74 && OverallGrade < 77)
    {
        $("#LetterGrade").html("C or %" + Math.round(OverallGrade));
    }

    else if (OverallGrade >= 70 && OverallGrade < 74)
    {
        $("#LetterGrade").html("C- or %" + Math.round(OverallGrade));
    }

    else if (OverallGrade >= 67 && OverallGrade < 70)
    {
        $("#LetterGrade").html("D+ or %" + Math.round(OverallGrade));
    }

    else if (OverallGrade >= 64 && OverallGrade < 67)
    {
        $("#LetterGrade").html("D or %" + Math.round(OverallGrade));
    }

    else if (OverallGrade >= 60 && OverallGrade < 64)
    {
        $("#LetterGrade").html("D- or %" + Math.round(OverallGrade));
    }

    else
    {
        $("#LetterGrade").html("E or %" + Math.round(OverallGrade));
    }
})