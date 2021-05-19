
function superbowlWin(records) {
    const superbowlWon = records.find(record => record.result === "W")
    if (superbowlWon) {
        return superbowlWon.year;
    } else {
        return undefined;
    }
}


//receive one argument that is an array
//properties: year and result
//test each Object to see if the result is "W"
//if so return the year if won
//if no win return undefined