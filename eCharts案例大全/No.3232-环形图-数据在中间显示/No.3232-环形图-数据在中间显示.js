option = {
    color: ['#70b603', '#e9eef4', 'pink'],
    title: {
      text: "环形图",
      left: "center",
      top:'5%',
      textStyle: {
        color: (function () {
          return "pink";
        })(),
        fontSize: 24
      }
    },
    series: [
      {
        name: "物料仓",
        type: "pie",
        stillShowZeroSum: true,
        // radius: "100%",
        radius: ['50%', '70%'],  //通过调整两个参数可以调整环形的大小
        center: ["50%", "50%"], // 默认全局居中

        data: [
          {
            name: "设备故障率",
            value: 75,
            label: {
              show: true, //单独显示该数据项
              formatter: "{d}%",
              textStyle: {
                fontWeight: 800,
                color: 'pink',
                fontSize: 48
              }
            }
          },

          {
            value: 25,
            label: {
              emphasis: {
                show: false
              }
            }
          }
        ],
        itemStyle: {
          normal: {}
        },

        label: {
          normal: {
            //默认不显示数据

            show: false,

            position: "center"
          },

        }
      }
    ]
};
