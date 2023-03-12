


 option = {
         backgroundColor: '#0c1e55',

    color: ['#57d5a1', '#2566ff', '#832aef'],
    //  title: {
    //      text: '总数',
    //      subtext: 7789,
    //      textStyle: {
    //          color: '#f2f2f2',
    //          fontSize: 40,
    //          // align: 'center'
    //      },
    //      subtextStyle: {
    //          fontSize: 30,
    //          color: ['#ff9d19']
    //      },
    //      x: 'center',
    //      y: 'center',
    //  },
    grid: {
      bottom: 150,
      left: 100,
      right: '10%'
    },
    legend: {
      orient: 'vertical',
      left: "5%",
      bottom: "7.5%",
      textStyle: {
        color: '#bde7ff',
        fontSize: 12,

      },
      formatter: '1000家',
      icon: 'circle',
      //  icon: 'roundRect',
      itemWidth: 10,
      itemHeight: 10,
      data: [{
        "name": "重点危险化学品",
        "value": 1500
      }, {
        "name": "重大危险源信息",
        "value": 1600
      }, {
        "name": "重点危险化工工艺",
        "value": 1000
      }],
    },
    series: [
      // 主要展示层的
      {
        radius: ['29%', '73.54%'],
        center: ['55%', '50%'],
        type: 'pie',
        label: {
          normal: {
            show: true,
            formatter: "{b}",
            textStyle: {
              fontSize: 14,

            },
            position: 'outside',
            aligh: 'left'
          },
          emphasis: {
            show: true
          }
        },
        labelLine: {
          normal: {
            show: true,
            length: 13,
            length2: 10
          },
          emphasis: {
            show: true
          }
        },
        //  name: "民警训练总量",
        data: [{
          "name": "重点危险化学品",
          "value": 1500
        }, {
          "name": "重大危险源信息",
          "value": 1600
        }, {
          "name": "重点危险化工工艺",
          "value": 1000
        }],

      },
      // 边框的设置
      {
        radius: ['29%', '35%'],
        center: ['55%', '50%'],
        type: 'pie',
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        animation: false,
        tooltip: {
          show: false
        },
        data: [{
          value: 1,
          itemStyle: {
            color: "rgba(12,28,83,0.3)",
          },
        }],
      }
    ]
 };