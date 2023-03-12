
// 运动心率
const colorList = ["#2DD64F", "#ADFF2F", "#0783FF"];
 option = {
  title: {
    text: '机构类型占比',
    // subtext: '纯属虚构',
    left: 'center',
    textStyle: {
      color: '#fff',
      fontSize: 24,
      // lineHeight: 56,
    },
    padding: [26, 0],
  },

  tooltip: {
    show: false,
    trigger: "item",
  },
  series: [
    {
      type: "pie",
      // center:["50%","36%"],
      radius: ["30%", "40%"],
      clockwise: true,
      avoidLabelOverlap: false,
      // hoverOffset: 0,
      itemStyle: {
        normal: {
          color: function (params) {
            return colorList[params.dataIndex];
          },

        },
      },
      // label: {
      //   show: true,
      //   fontSize: 10,
      //   color: '#fff',
      //   // formatter: "{d}%(46分)\n 心率",
      //   formatter: function (params: any) {
      //     // console.log(params, "===========params");
      //     return params.name + ' ' + params.percent + '%';
      //   },
      //   padding: [-100, 0, 100, 0],

      // },
      // labelLine: {
      //   showAbove: true,
      //   normal: {
      //     length: 10,
      //     length2: 20,
      //     lineStyle: {
      //       width: 1,
      //     },
      //   },
      // },

      label: {
        show: true,
        position: 'outside',
        formatter: (params) => {
          return '{txt|' + params.name + ' ' + ((params.value * 100) / 100).toFixed(0) + '%}';
        },
        align: 'left',
        padding: [0, -50, 10, -70],
        // fontSize: 36,
        rich: {
          txt: {
            color: '#f0f',
            width: 10,
            height: 10,
            padding: [10, 20, 20, 24],
            fontSize: 12,
          },

        },
      },
      labelLine: {
        show: true,
        length: 20,
        length2: 30,
        lineStyle: {
          color: '#72B1DA',
          width: 1,
        },
      },

      data: [
        {
          name: "健康",
          value: 40,
        },
        {
          name: "安全",
          value: 29,
        },
        {
          name: "养老",
          value: 31,
        },
      ],
    },
  ],
};
