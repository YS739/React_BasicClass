const keyinput = ["left", "right", "up", "up", "right", "right"];
const board = [1, 1];

function solution(keyinput, board) {
  let answer = [];
  let rCount = 0;
  let lCount = 0;
  let uCount = 0;
  let dCount = 0;

  for (i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === "right") {
      rCount++;
    } else if (keyinput[i] === "left") {
      lCount++;
    } else if (keyinput[i] === "up") {
      uCount++;
    } else if (keyinput[i] === "down") {
      dCount++;
    }
  }
  let b0 = rCount - lCount;
  let b1 = uCount - dCount;

  if ((board[0] = 1) || (board[1] = 1)) {
    if (b0 > board[0]) {
      b0 = 1;
    } else if (b0 < -board[0]) {
      b0 = -1;
    } else if (b1 > board[1]) {
      b1 = 1;
    } else if (b1 < -board[1]) {
      b1 = -1;
    }
  } else board[0] > 1 || board[1] > 1;
  if (b0 > (board[0] - 1) / 2) {
    b0 = (board[0] - 1) / 2;
  } else if (b0 < -(board[0] - 1) / 2) {
    b0 = -(board[0] - 1) / 2;
  } else if (b1 > (board[1] - 1) / 2) {
    b1 = (board[1] - 1) / 2;
  } else if (b1 < -(board[1] - 1) / 2) {
    b1 = -(board[1] - 1) / 2;
  }
  answer.push(b0, b1);
  console.log(answer);

  return answer;
}
