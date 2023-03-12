option  = {
  title: {
    text: `比例图`, //主标题
    subtext: "", //副标题
    x: "left", //x轴方向对齐方式
    // link: "/#/",
    target: "self",
    padding: [20, 0, 0, 70],
    textStyle: {
      color: "#fff",
    },
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {d}% ({c}人)",
  },
  // legend: {
  //   orient: "vertical",
  //   bottom: "bottom",
  //   // data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
  //   data: []
  // },
  series: [
    {
      name: `xx数据`,
      type: "pie",
      radius: "65%",
      center: ["50%", "60%"],
      //数据展示
      data: [
        { value: 335, name: "直接访问" },
        { value: 310, name: "邮件营销" },
        { value: 234, name: "联盟广告" },
        { value: 135, name: "视频广告" },
        { value: 1548, name: "搜索引擎" }
      ],
      roseType: "radius",
      label: {
        fontSize: 14,
        color: "rgba(255, 255, 255, 0.9)",
        formatter: "{b} \n{d}% ({c}人)",
      },
      labelLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.3)",
        },
        smooth: 0.1,
        length: 10,
        length2: 20,
      },
      itemStyle: {
        //选中效果
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
  color: ["#6b89ff", "#34abff", "#ff9745", "#dd5e5e", "#c10000"],
};
