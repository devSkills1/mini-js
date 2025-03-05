// utils/data.js
const questions = [
  { id: 1, text: "你喜欢参加社交聚会吗？", options: ["从不", "偶尔", "经常", "总是"], scores: [1, 2, 3, 4], type: "extroversion" },
  { id: 2, text: "遇到困难时，你更倾向于？", options: ["冷静分析", "情绪化反应"], scores: [4, 1], type: "stability" },
  { id: 3, text: "你喜欢尝试新事物吗？", options: ["很少", "偶尔", "经常", "总是"], scores: [1, 2, 3, 4], type: "openness" }
];
module.exports = { questions };