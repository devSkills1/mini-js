Page({
  data: {
    // 20道示例题目
    questions: [
      { question: "1. 你更喜欢独自工作还是团队合作？", options: ["独自工作", "团队合作"] },
      { question: "2. 你更倾向于计划性强还是即兴发挥？", options: ["计划性强", "即兴发挥"] },
      { question: "3. 你喜欢尝试新事物吗？", options: ["喜欢", "不喜欢"] },
      { question: "4. 你更关注细节还是整体？", options: ["细节", "整体"] },
      { question: "5. 你容易感到压力吗？", options: ["是", "否"] },
      { question: "6. 你喜欢与人交流吗？", options: ["喜欢", "不喜欢"] },
      { question: "7. 你更倾向于理性还是感性？", options: ["理性", "感性"] },
      { question: "8. 你喜欢冒险吗？", options: ["喜欢", "不喜欢"] },
      { question: "9. 你擅长时间管理吗？", options: ["擅长", "不擅长"] },
      { question: "10. 你更看重过程还是结果？", options: ["过程", "结果"] },
      { question: "11. 你喜欢制定目标吗？", options: ["喜欢", "不喜欢"] },
      { question: "12. 你容易被情绪影响吗？", options: ["是", "否"] },
      { question: "13. 你更喜欢安静还是热闹？", options: ["安静", "热闹"] },
      { question: "14. 你擅长解决问题吗？", options: ["擅长", "不擅长"] },
      { question: "15. 你喜欢创新吗？", options: ["喜欢", "不喜欢"] },
      { question: "16. 你更倾向于独立还是依赖他人？", options: ["独立", "依赖他人"] },
      { question: "17. 你喜欢挑战吗？", options: ["喜欢", "不喜欢"] },
      { question: "18. 你容易分心吗？", options: ["是", "否"] },
      { question: "19. 你更喜欢稳定还是变化？", options: ["稳定", "变化"] },
      { question: "20. 你擅长与人合作吗？", options: ["擅长", "不擅长"] }
    ],
    answers: Array(20).fill(null) // 存储用户答案，null表示未作答
  },

  // 处理单选变化
  onRadioChange(e) {
    const index = e.currentTarget.dataset.index; // 获取题目索引
    const value = e.detail.value; // 获取用户选择的值
    this.setData({
      [`answers[${index}]`]: value // 更新答案数组
    });
  },

  // 处理提交
  onSubmit() {
    const unanswered = this.data.answers
      .map((answer, index) => (answer === null ? index + 1 : null))
      .filter(item => item !== null); // 找出未作答的题目编号
    if (unanswered.length > 0) {
      wx.showModal({
        title: '提示',
        content: `请完成第 ${unanswered.join(', ')} 题`,
        showCancel: false
      });
    } else {
      this.calculateResult(); // 所有题目作答完毕，计算结果
    }
  },

  // 计算结果（示例逻辑）
  calculateResult() {
    const answers = this.data.answers;
    // 示例：统计每个选项的选择次数，假设有四个性格维度
    let score = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach((answer, index) => {
      if (index < 5) score.A += answer === this.data.questions[index].options[0] ? 1 : 0;
      else if (index < 10) score.B += answer === this.data.questions[index].options[0] ? 1 : 0;
      else if (index < 15) score.C += answer === this.data.questions[index].options[0] ? 1 : 0;
      else score.D += answer === this.data.questions[index].options[0] ? 1 : 0;
    });
    // 显示结果
    wx.showModal({
      title: '测试结果',
      content: `您的性格维度得分：A-${score.A}, B-${score.B}, C-${score.C}, D-${score.D}`,
      showCancel: false
    });
  }
});