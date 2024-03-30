function superbowlWin(superbowls) {
    const winningYearObj = superbowls.find(superbowl => superbowl.result === "W");
    return winningYearObj ? winningYearObj.year : undefined;
}
