var uploadedDataURL = "/asset/get/s/data-1630142788314-2R2vcmfKk.json";



myChart.showLoading();
   
     
$.getJSON(uploadedDataURL, function(geoJson) {
       echarts.registerMap('china', geoJson);
        myChart.hideLoading();
let icon = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAC7klEQVRIS62VT2xUVRTGf997heKgCDYOjXEBtMSNCSSyUFcaXLg0JBRNSDQaSyy0HXTRjZEOie5U6LRNqBsSu2pN1IBp1KXGhakLE/+g0waiDYXWkoq20M7M/czMOMbSmWlFzvK+c373nPPdc56oatZAx6XtoTH/HIE2xB7MRssTSOcjRUPJX3dNto2qcGu4qvCUOXZhB3H0FtIBYANQ8hPYJlj+Drn9i6lvvxkdbVsBXQU80zN579KyT8o+AjRWr4AC6KtC0OFUX8sv//ZZBRx8NftoPviTiGibcbUKKvELtjrmtrYMp9MKlcNVAZnu7EuIPiBRI7u/j53D0dm5G/Op3qF9i7WBx7MdBN5GbFoDmAd9GC0vvXh08OE/awL7j088b7sfuLse0LAs874DR7syu5dqAgdSP+8N1hiwHZXVrWHXJV6e3TL8QTqdrt3DM+2XE7m7Fk5aFFWumqXxMtZ4ID6QOr3ral2Vi8qeSv3YHNPQJ6KnwFuAqBRkDNxA/CDxQnKq9cKtj7tqSSdOOGq6NtFEpGckdwLNxrGsmQAfKTDQuPT71SND+3LrmRR628cTycQ9zXmixwSvgPcYFFlfBzFYID8+P7/pSvrszpt1gcXMkrOXkoWNuadl3kBqAidADcWxC7ggtADMmqhnQ4O/vLK55beqD3vkoOOpByd3Nji8A3pCsPmf3q2WuajqHyZ8SiF6be6+1ssVaKmHttXf+dMOx/GwxCN1Zngl2twk8hi5cKyz/6FpUHlW301d3NpA7hTo2XXDKugiVHrPBb/eldl9XSMHR+LpB/YekhiKUKLY/Pojt/JreaV5IViHr21rPadidrFz5yQ9Xqdna9yhgu3P5wKHdLpr4skoCmOgWrtvfQmbRcfsV1939k2JHiBeX2RNrzy4V5lU9jPQfnB5vG7fAvbHRWAWaKn8N26fhw3fK9OdnUHc/z9ApdCS2jBdBIY19t5/uWumDLwTJhm8qExq4vyd4JlSXvN/AcZ/OIJZDHldAAAAAElFTkSuQmCC'
// 分辨率
 const ratio = (val) => {
  return window.screen.width * val / 1980;

}
 const option = {
  // backgroundColor: "#fff", // 背景颜色
  color: ['#D4EDF2', '#00BDFE', '#FACA32'],
  grid: {
    top: "2%", // 等价于 y: '16%'
    left: "2%",
    right: "2%",
    bottom: "2%",

  },
  geo: {
    map: "china",  // 映射
    roam: false,   // 拖动
    zoom: 1,     // 放大
    scaleLimit: { min: 0, max: 3 }, // 缩放级别
    regions: [
      // 小海南岛 消失了
      // {
      //   name: "南海诸岛",
      //   value: 0,
      //   itemStyle: {
      //     normal: {
      //       opacity: 0,
      //       label: {
      //         show: false,
      //       },
      //     },
      //   },
      // },

      {
        name: '广东',
        itemStyle: {
          areaColor: 'red',
          color: 'red'
        }
      }

    ],

    itemStyle: {
      areaColor: "#fff", //默认的地图板块颜色
      borderWidth: 2,     // 边线
      borderColor: "#009ce0", // 边颜色
      //选中效果
      emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: "rgba(0, 0, 0, 0.5)",
      },
    },
    silent: true, // 影响点击 触摸事件


    // layoutCenter: ['50%', '50%'],
    // itemStyle: {
    //   areaColor: 'rgba(9,49,95,1)',
    //   // areaColor: {
    //   //     type: 'radial',
    //   //     x: 0.7,
    //   //     y: 0.5,
    //   //     r: 0.4,
    //   //     colorStops: [
    //   //         {
    //   //             offset: 0,
    //   //             color: '#56CCFB', // 0% 处的颜色
    //   //         },
    //   //         {
    //   //             offset: 1,
    //   //             color: '#0160AD', // 100% 处的颜色
    //   //         },
    //   //     ],
    //   //     global: false, // 缺省为 false
    //   // },
    //   borderColor: '#37C1FD',
    //   borderWidth: 2,
    // }
  },
  // title: {
  //   text: "资源池分步",
  //   x: "center",
  //   y: 20,
  // },
  tooltip: {
    trigger: "item",
  },
  legend: {
    itemWidth: ratio(10),
    itemHeight: ratio(10),
    icon: "circle",
    // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） | 'vertical'（垂直）
    orient: "vertical",
    // x 设置水平安放位置，默认全图居中，可选值：'center' | 'left' | 'right' | {number}（x坐标，单位px）
    x: "right",
    // y 设置垂直安放位置，默认全图顶端，可选值：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
    y: "50%",
    align: 'left',
    textStyle: {
      color: "#ff0",
      fontSize: ratio(10),
      fontWeight: 300,
      padding: [0, 0, 0, 0],
    },
    // 点的联动
    selectedMode: true,
  },

  //配置属性
  series: [
    {
      name: "0~100人",
      type: "map",
      mapType: "china",
      roam: false,
      geoIndex: 0,
      label: {
        normal: {
          show: false, //省份名称,
        },
        emphasis: {
          show: false,
        },
      },
      data: [
        { name: "北京", value: 0 },
        { name: "天津", value: 0 },
        { name: "上海", value: 0 },
        { name: "重庆", value: 0 },
        { name: "河北", value: 0 },
        { name: "河南", value: 0 },
        { name: "云南", value: 0 },
        { name: "辽宁", value: 0 },
        { name: "黑龙江", value: 0 },
        { name: "湖南", value: 0 },
        { name: "安徽", value: 0 },
        { name: "山东", value: 0 },
        { name: "新疆", value: 0 },
        { name: "江苏", value: 0 },
        { name: "浙江", value: 0 },
        { name: "江西", value: 0 },
        { name: "湖北", value: 0 },
        { name: "广西", value: 0 },
        { name: "甘肃", value: 0 },
        { name: "山西", value: 0 },
        { name: "内蒙古", value: 0 },
        { name: "陕西", value: 0 },
        { name: "吉林", value: 0 },
        { name: "福建", value: 101 },
        { name: "贵州", value: 0 },
        { name: "广东", value: 1001 },
        { name: "青海", value: 0 },
        { name: "西藏", value: 0 },
        { name: "四川", value: 260 },
        { name: "宁夏", value: 0 },
        { name: "海南", value: 0 },
        { name: "台湾", value: 0 },
        { name: "香港", value: 0 },
        { name: "澳门", value: 0 },
      ], //数据
      // markPoint: {
      //   // symbol: 'circle',
      //   symbol: icon,
      //   //设置符号大小
      //   // symbolSize: 10,
      //   label: {
      //     position: 'top',
      //     color: '#000'
      //   },
      //   data: [
      //     { name: '闽侯县', coord: [119.203478, 26.063571], value: '78' },

      //   ]

      // }

    },

    {
      type: 'scatter',
      coordinateSystem: 'geo',
      geoIndex: 0,
      zlevel: 5,
      label: {
        show: false,
      },
      symbol: icon,
      // symbolSize: [ratio(10), ratio(12)],
      silent: false,
      data: [[118.5, 33.2]],
      markPoint: {
        // symbol: 'circle',
        symbol: icon,
        //设置符号大小
        // symbolSize: 10,
        symbolSize: [ratio(10), ratio(12)],
        label: {
          position: 'top',
          color: '#f00'
        },
        data: [
          { name: '闽侯县', coord: [118.5, 33.2], value: '78' },

        ]

      }
    },

    {

      name: '1001人以上',
      type: 'scatter',          // 气泡点
      coordinateSystem: 'geo',  //指明散点使用的坐标系统',
      data: [
        {
          value: [114.298572, 30.584355],
          name: '武汉'
        }
      ],
      markPoint: {
        // symbol: 'circle',
        symbol: icon,
        //设置符号大小
        // symbolSize: 10,
        symbolSize: [ratio(10), ratio(12)],
        label: {
          position: 'top',
          color: '#0f0'
        },
        data: [
          { name: '闽侯县', coord: [114.298572, 30.584355], value: '78' },

        ]

      },
      // data: [
      //   { name: '海门', value: 9 },
      //   { name: '鄂尔多斯', value: 12 },
      //   { name: '招远', value: 12 }]

      // symbol: 'pin',
      // symbol: 'circle',        // 形状
      // symbol: icon,
      // symbolSize: [ratio(10), ratio(12)],
      // symbolSize: 10,          // 大小
      silent: true,
      // encode: {
      //   value: 2
      // },
      // label: {
      //   formatter: '{b}',
      //   position: 'top',
      //   show: true
      // },
      // itemStyle: {
      //   normal: {
      //     color: '#F62157', //标志颜色
      //   }
      // },

      // zlevel: 6,

    },

  ],
  visualMap: {
    show: false,
    min: 0,
    max: 1000,
    textStyle: {
      color: '#FFFFFF'
    },
    inRange: {
      color: ['#134B6D', '#D4EDF2', '#00BDFE', '#FACA32']
    },
    align: 'left',
    left: 'right',
    bottom: '40%',

    // pieces: [{
    //   // gt: 100,
    //   label: "0~100人",
    //   color: "#7f1100",
    //   symbol: 'circle'
    // }, {
    //   // gte: 1000,
    //   // lte: 100,
    //   label: "101~1000人",
    //   color: "#ff5428",
    //   symbol: 'circle'
    // }, {
    //   // gte: 10000,
    //   // lt: 1000,
    //   label: "1001人以上",
    //   color: "#ff8c71",
    //   symbol: 'circle'
    // }],
    // 点的联动
    // hoverLink: false,
    // selectedMode: 'multiple'
    // calculable: true
  },

  // visualMap: {
  //   min: 0,
  //   max: 1000,
  //   left: 26,
  //   bottom: 40,
  //   showLabel: !0,
  //   text: ["高", "低"],
  //   pieces: [{
  //     gt: 100,
  //     label: "> 100 人",
  //     color: "#7f1100"
  //   }, {
  //     gte: 10,
  //     lte: 100,
  //     label: "10 - 100 人",
  //     color: "#ff5428"
  //   }, {
  //     gte: 1,
  //     lt: 10,
  //     label: "1 - 9 人",
  //     color: "#ff8c71"
  //   }, {
  //     gt: 0,
  //     lt: 1,
  //     label: "疑似",
  //     color: "#ffd768"
  //   }, {
  //     value: 0,
  //     color: "#ffffff"
  //   }],
  //   show: !0
  // },


  //  visualMap: {
  //   left: 'right',
  //   min: 500000,
  //   max: 38000000,
  //   inRange: {
  //       color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
  //   },
  //   text: ['High', 'Low'],           // 文本，默认为数值文本
  //   calculable: true
  //  },
}
      myChart.setOption(option,true);
    
})