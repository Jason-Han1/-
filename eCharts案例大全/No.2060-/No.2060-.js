var longmen = "/asset/get/s/data-1630146812463-Oh9nrswOK.json";

var huiyang = "/asset/get/s/data-1630146806697-fO63BMm5S.json";

var huidong = "/asset/get/s/data-1630146798650-YVtKYNKew.json";

var huicheng = "/asset/get/s/data-1630146792059-s238pZcCz.json";

var boluo = "/asset/get/s/data-1630146772391-ioFws0E4U.json";

var huizhou = "/asset/get/s/data-1630146639808-ca5T0IDDM.json";



var street ,url=huizhou;

function init(){
$.getJSON(url, function (geoJson) {

let icon = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAC7klEQVRIS62VT2xUVRTGf997heKgCDYOjXEBtMSNCSSyUFcaXLg0JBRNSDQaSyy0HXTRjZEOie5U6LRNqBsSu2pN1IBp1KXGhakLE/+g0waiDYXWkoq20M7M/czMOMbSmWlFzvK+c373nPPdc56oatZAx6XtoTH/HIE2xB7MRssTSOcjRUPJX3dNto2qcGu4qvCUOXZhB3H0FtIBYANQ8hPYJlj+Drn9i6lvvxkdbVsBXQU80zN579KyT8o+AjRWr4AC6KtC0OFUX8sv//ZZBRx8NftoPviTiGibcbUKKvELtjrmtrYMp9MKlcNVAZnu7EuIPiBRI7u/j53D0dm5G/Op3qF9i7WBx7MdBN5GbFoDmAd9GC0vvXh08OE/awL7j088b7sfuLse0LAs874DR7syu5dqAgdSP+8N1hiwHZXVrWHXJV6e3TL8QTqdrt3DM+2XE7m7Fk5aFFWumqXxMtZ4ID6QOr3ral2Vi8qeSv3YHNPQJ6KnwFuAqBRkDNxA/CDxQnKq9cKtj7tqSSdOOGq6NtFEpGckdwLNxrGsmQAfKTDQuPT71SND+3LrmRR628cTycQ9zXmixwSvgPcYFFlfBzFYID8+P7/pSvrszpt1gcXMkrOXkoWNuadl3kBqAidADcWxC7ggtADMmqhnQ4O/vLK55beqD3vkoOOpByd3Nji8A3pCsPmf3q2WuajqHyZ8SiF6be6+1ssVaKmHttXf+dMOx/GwxCN1Zngl2twk8hi5cKyz/6FpUHlW301d3NpA7hTo2XXDKugiVHrPBb/eldl9XSMHR+LpB/YekhiKUKLY/Pojt/JreaV5IViHr21rPadidrFz5yQ9Xqdna9yhgu3P5wKHdLpr4skoCmOgWrtvfQmbRcfsV1939k2JHiBeX2RNrzy4V5lU9jPQfnB5vG7fAvbHRWAWaKn8N26fhw3fK9OdnUHc/z9ApdCS2jBdBIY19t5/uWumDLwTJhm8qExq4vyd4JlSXvN/AcZ/OIJZDHldAAAAAElFTkSuQmCC'
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
  geo: [
    // {
    // map: "huizhou",  // 映射
    // roam: false,   // 拖动
    // zoom: 1,     // 放大
    // scaleLimit: { min: 0, max: 3 }, // 缩放级别
    // layoutSize: '96%',
    // layoutCenter: ['50%', '50%'],
    // regions: [
    //       // 小海南岛 消失了
    //       // {
    //       //   name: "南海诸岛",
    //       //   value: 0,
    //       //   itemStyle: {
    //       //     normal: {
    //       //       opacity: 0,
    //       //       label: {
    //       //         show: false,
    //       //       },
    //       //     },
    //       //   },
    //       // },

    //       {
    //         name: '广东',
    //         itemStyle: {
    //           areaColor: 'red',
    //           color: 'red'
    //         }
    //       }

    //     ],

    //     // itemStyle: {
    //     //   areaColor: "#fff", //默认的地图板块颜色
    //     //   borderWidth: 2,     // 边线
    //     //   borderColor: "#009ce0", // 边颜色
    //     //   //选中效果
    //     //   emphasis: {
    //     //     shadowBlur: 10,
    //     //     shadowOffsetX: 0,
    //     //     shadowColor: "rgba(0, 0, 0, 0.5)",
    //     //   },
    //     // },

    //     itemStyle: {
    //       areaColor: 'transparent',
    //       borderColor: '#37C1FD',
    //       borderWidth: 2,
    //     },
    //     emphasis: {
    //       itemStyle: {
    //         areaColor: '#0160AD'
    //       },
    //       label: {
    //         show: 0,
    //         color: '#fff'
    //       }
    //     },
    //     silent: true, // 影响点击 触摸事件


    //     // layoutCenter: ['50%', '50%'],
    //     // itemStyle: {
    //     //   areaColor: 'rgba(9,49,95,1)',
    //     //   // areaColor: {
    //     //   //     type: 'radial',
    //     //   //     x: 0.7,
    //     //   //     y: 0.5,
    //     //   //     r: 0.4,
    //     //   //     colorStops: [
    //     //   //         {
    //     //   //             offset: 0,
    //     //   //             color: '#56CCFB', // 0% 处的颜色
    //     //   //         },
    //     //   //         {
    //     //   //             offset: 1,
    //     //   //             color: '#0160AD', // 100% 处的颜色
    //     //   //         },
    //     //   //     ],
    //     //   //     global: false, // 缺省为 false
    //     //   // },
    //     //   borderColor: '#37C1FD',
    //     //   borderWidth: 2,
    //     // }
    //   },
    {
      map: 'huizhou',
      aspectScale: 0.9,
      roam: false, //是否允许缩放
      //zoom: 1.1, //默认显示级别
      layoutSize: '95%',
      layoutCenter: ['50%', '52%'],
      itemStyle: {
        areaColor: '#005DDC',
        borderColor: '#329BF5',
        borderWidth: 1,
      },
      // zlevel: 1,
      silent: true,
    },
    {
      map: 'huizhou',
      aspectScale: 0.9,
      roam: false, //是否允许缩放
      //zoom: 1.1, //默认显示级别
      layoutSize: '95%',
      layoutCenter: ['50%', '50%'],
      itemStyle: {
        areaColor: {
          type: 'radial',
          x: 0.7,
          y: 0.5,
          r: 0.4,
          colorStops: [{
            offset: 0,
            color: '#56CCFB' // 0% 处的颜色
          }, {
            offset: 1,
            color: '#0160AD' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        },
        borderColor: '#37C1FD',
        borderWidth: 2,
          //选中效果
      emphasis: {
        areaColor: "#0160AD", // hover效果
      },
      },
      // zlevel: 2,
      silent: false,
      
  
    },],
  // title: {
  //   text: "资源池分步",
  //   x: "center",
  //   y: 20,
  // },
  tooltip: {
    trigger: "item",
  },
  legend: {
    show: false,
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
      color: "#fff",
      fontSize: ratio(10),
      fontWeight: 300,
      padding: [0, 0, 0, 0],
    },
    // 点的联动
    selectedMode: false,
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
          show: true,
        },
      },
      data: [
        { name: "惠城区", value: 0, },
        { name: "惠阳区", value: 0, },
        { name: "博罗县", value: 0, },
        { name: "惠东县", value: 0, },
        { name: "龙门县", value: 0, }
      ], //数据
      // markPoint: {
      //   // symbol: 'circle',
      //   symbol: `image://${icon}`,
      //   //设置符号大小
      //   // symbolSize: 10,
      //   symbolSize: [ratio(10), ratio(12)],
      //   label: {
      //     position: 'top',
      //     color: '#fff'
      //   },
      //   data: [
      //     // { name: '闽侯县', coord: [119.203478, 26.063571], value: '78' },
      //     // {
      //     //   coord: [114.298572, 30.584355],
      //     //   name: '武汉',
      //     //   value: '武汉'
      //     // }
      //     {
      //       name: '惠州', coord: [114.46517944335938, 23.078468383398807], value: '78'
      //     }

      //   ],
      //   zlevel: 3,
      //   silent: false,

      // },


    },

    {
      type: 'scatter',
      coordinateSystem: 'geo',
      name: '龙门县何花仙街道黄灿麻社',
      geoIndex: 0,
      label: {
        show: false,
        distance: 6,
        zlevel: 5,
        position: 'top',
        // padding: 100,
      },
      symbol: icon,
      symbolSize: [ratio(10), ratio(12)],
      silent: false,
      data: [{ name: '惠州', value: [114.46517944335938, 23.078468383398807], }],
      // tooltip: {
      //   trigger: "item",
      // }
      markPoint: {

        // symbol: 'circle',
        symbol:icon,
        //设置符号大小
        // symbolSize: 10,
        symbolSize: [ratio(10), ratio(12)],
        label: {
          position: 'top',
          color: '#fff',

        },
        data: [
          // { name: '闽侯县', coord: [119.203478, 26.063571], value: '78' },

          {
            name: '服务项目：健康、养老、安服务居民：2，265人', coord: [114.46517944335938, 23.078468383398807], value: '78'
          },
          {
            name: '服务项目：健康、养老、安服务居民：2，265人', coord: [114.62954, 22.927912], value: '78'
          }

        ],
        zlevel: 3,
        silent: false,

      },
    },

    // {

    //   name: '1001人以上',
    //   type: 'scatter',          // 气泡点
    //   coordinateSystem: 'geo',  //指明散点使用的坐标系统',
    //   data: [
    //     {
    //       value: [114.298572, 30.584355],
    //       name: '武汉'
    //     }
    //   ],
    //   // data: [
    //   //   { name: '海门', value: 9 },
    //   //   { name: '鄂尔多斯', value: 12 },
    //   //   { name: '招远', value: 12 }]

    //   // symbol: 'pin',
    //   // symbol: 'circle',        // 形状
    //   symbol: icon,
    //   symbolSize: [ratio(10), ratio(12)],
    //   // symbolSize: 10,          // 大小
    //   silent: true,
    //   // encode: {
    //   //   value: 2
    //   // },
    //   // label: {
    //   //   formatter: '{b}',
    //   //   position: 'top',
    //   //   show: true
    //   // },
    //   // itemStyle: {
    //   //   normal: {
    //   //     color: '#F62157', //标志颜色
    //   //   }
    //   // },

    //   // zlevel: 6,

    // },

    // {

    //   name: '1001人以上',
    //   type: 'scatter',          // 气泡点
    //   coordinateSystem: 'geo',  //指明散点使用的坐标系统',
    //   data: [

    //   ],
    // },
    // {

    //   name: '101~1000人',
    //   type: 'scatter',          // 气泡点
    //   coordinateSystem: 'geo',  //指明散点使用的坐标系统',
    //   data: [

    //   ],
    // }
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


            //地图组件
    echarts.registerMap("huizhou", geoJson);
    
    

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);


 myChart.on("click", echartsMapClick);
    
    
     // 深圳地图点击
 function echartsMapClick(params) {


    if (street !== params.name) {
      street = params.name;
      url= cwlType1(params.name)
      init()
      //地图组件
    //   echarts.registerMap("深圳", cwlType(street));

      // 使用刚指定的配置项和数据显示图表。
    //   myChart.setOption(option);
    }
  }
    
    
  function cwlType1(val) {
    
      switch (val) {
        case "龙门县":
          return longmen;
        case "博罗县":
          return boluo;
        case "惠城区":
          return huicheng;
        case "惠东县":
          return huidong;
        case "惠阳区":
          return huiyang;
        default:
          return huizhou;
      }
    };
    

    
    

        
        
    })
}

init()



