function loadScores() {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
        scores = JSON.parse(scoresText);
    }
    const tableBodyElement = document.querySelector("#scores");

    if (scores.length) {
        for (const [i, score] of score.entries()) {
            const positionTdElement = document.createElement('td');
            const nameTdElement = document.createElement('td');
            const scoreTdElement = document.createElement('td');
            const dateTdElement = document.createElement('td');

            positionTdElement.textContent = i + 1;
            nameTdElement = score.name;
            scoreTdElement = score.score;
            dateTdElement = score.date;

            const rowElement = document.createElement("tr");
            rowElement.appendChild(positionTdElement);
            rowElement.appendChild(nameTdElement);
            rowElement.appendChild(scoreTdElement);
            rowElement.appendChild(dateTdElement);

            tableBodyElement.appendChild(rowElement);
        }
    } else {
        tableBodyElement.innerHTML = '<tr><td colSpan=4>No scores recorded.</td></tr>'
    }
}

loadScores();