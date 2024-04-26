var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };


window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("name").focus();
};

function addScore() {
    var name = $("name").value;
    var score = parseInt($("score").value);
    if (name == "" || isNaN(score) || score < 0 || score > 100) {
        alert("You must enter a name and a valid score");
    } else {
        names.push(name);
        scores.push(score);
        $("name").value = "";
        $("score").value = "";
    }
    $("name").focus();
}

function displayResults() {
    var total = 0;
    var maxScore = 0;
    var highScoreIndex = 0;

    for (var i = 0; i < scores.length; i++) {
        total += scores[i];
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            highScoreIndex = i;
        }
    }
    
    var average = total / scores.length;
    var highScorer = names[highScoreIndex];

    document.getElementById("results").innerHTML = "<h2>Results</h2>" +
                                                   "<p>Average score = " + average + "</p>" +
                                                   "<p>High score = " + highScorer + " with a score of " + maxScore + "</p>";
}

function displayScores() {
	var headerRow = "<tr><th>Name</th><th>Score</th></tr>";
	var scoreRows = "";

	for (var i = 0; i < names.length; i++) {
		scoreRows += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
	}

	document.getElementById("scores_table").innerHTML = "<h2>Scores</h2><br/>" + headerRow + scoreRows;

}
