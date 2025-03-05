
// utils/calc.js
function calculateResult(answers) {
  let scores = { extroversion: 0, stability: 0, openness: 0 };
  answers.forEach(ans => {
    scores[ans.type] += ans.score;
  });
  return scores;
}
module.exports = { calculateResult };