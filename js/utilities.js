// to get time string
function getTimeString(time){
    // get hour and rest seconds
    const hour = parseInt(time / 3600);
    let remainingSecond = parseInt((time % 3600));
    let remainingMinute = parseInt((remainingSecond / 60));
    remainingSecond = parseInt(remainingSecond % 60);
    return `${hour} hour ${remainingMinute} minutes ${remainingSecond} seconds ago`;
}

