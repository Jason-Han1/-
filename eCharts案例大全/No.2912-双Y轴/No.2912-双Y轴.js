var colorList = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff'];
// var colorList = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff'];
var datas = [
  {
    value: 36,
    name: "系列一纵坐标文字加长显示占位符测试test测试test测试test",
  },
  {
    value: 54,
    name: "系列二纵坐标文字加长显示占位符测试test测试test测试test",
  },
  {
    value: 29,
    name: "系列三纵坐标文字加长显示占位符测试test测试test测试test",
  },
  {
    value: 25,
    name: "系列四纵坐标文字加长显示占位符测试test测试test测试test",
  },
  {
    value: 55,
    name: "系列五纵坐标文字加长显示占位符测试test测试test测试test",
  },
];

let maxArr = new Array(datas.length).fill(100);
var option = {
  backgroundColor: '#031038',
  title: {
    text: '场景调用Top5',
    top: '3%',
    left: '2%',
    textStyle: {
      color: '#ADB0BE',
      fontSize: 25,
      fontFamily: 'Adobe Heiti Std',
      fontWeight: 'bolder',
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {
    show: false,
  },
  grid: {
    // left: 0,
    // right:0,
    // containLabel:true
    left: '20%',
    top: '13%',
    bottom: '10%',
    right: '5%',
  },
  xAxis: {
    show: false,
    type: 'value',
  },
  yAxis: [
    {
      offset: 55,
      type: 'category',
      inverse: true,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisPointer: {
        label: {
          show: true,
          margin: 30,
        },
      },
      data: datas.map((item) => item.name),
      axisLabel: {
        margin: 100,
        fontSize: 20,
        align: 'left',
        color: '#fff',
        rich: {
          a1: {
            color: '#fff',
            backgroundColor: colorList[0],
            // backgroundImage: url("../../asset/image/bigscreen/top-1.png"),
            // backgroundColor: {
            //   image: require('../../asset/image/bigscreen/top-1.png'),
            // },
            width: 40,
            height: 40,
            align: 'center',
            borderRadius: 2,
            fontSize: 20,
          },
          a2: {
            color: '#fff',
            backgroundColor: colorList[1],
            // 纵坐标前面可以引入相关图片
            // backgroundColor: {
            //   image: require('../../asset/image/bigscreen/top-2.png'),
            // },
            width: 40,
            height: 40,
            align: 'center',
            borderRadius: 2,
            fontSize: 20,
          },
          a3: {
            color: '#fff',
            backgroundColor: colorList[2],
            // backgroundColor: {
            //   image: require('../../asset/image/bigscreen/top-3.png'),
            // },
            width: 40,
            height: 40,
            align: 'center',
            borderRadius: 2,
            fontSize: 20,
          },
          a4: {
            color: '#fff',
            backgroundColor: colorList[2],
            // backgroundColor: {
            //   image: require('../../asset/image/bigscreen/top-4.png'),
            // },
            width: 40,
            height: 40,
            align: 'center',
            borderRadius: 2,
            fontSize: 20,
          },
          b: {
            color: '#fff',
            backgroundColor: colorList[3],
            // backgroundColor: {
            //   image: require('../../asset/image/bigscreen/top-5.png'),
            // },
            width: 40,
            height: 40,
            align: 'center',
            borderRadius: 2,
            fontSize: 20,
          },
        },
        
        // 原先样式  排序序号显示并带有相关样式
        // formatter: function (params) {
        //   var index = datas.map((item) => item.name).indexOf(params);
        //   index = index + 1;
        //   if (index - 1 < 4) {
        //     return [
        //       '{a' + index + '|' + index + '}' + '  ' + params
        //       // '{a' + index + '|' + '}' + '  ' + params,
        //     ].join('\n');
        //   } else {
        //     return [
        //       '{b|' + index + '}' + '  ' + params
        //       // '{b|' + '}' + '  ' + params,
        //     ].join('\n');
        //   }
        // },
      
        // 纵坐标文字显示过长 超出5个子以省略号显示 
        formatter: function(value) { 
          if (value.length > 5) { 
            return value.substring(0, 5) + "..."; 
          } else { 
            return value; 
          } 
        } 
        
        
        
        
      },
    },
    {
      type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      show: true,
      data: datas.map((item) => item.value),
      axisLabel: {
        show: true,
        fontSize: 20,
        color: '#fff',
        formatter: '{value}',
      },
    },
  ],
  series: [
    {
      z: 2,
      name: 'value',
      type: 'bar',
      barWidth: 20,
      zlevel: 1,
      // data: datas.map((item, i) => {
      //   var itemStyle = {
      //     color: i > 3 ? colorList[3] : colorList[i]
      //   }
      //   return {
      //     value: item.value,
      //     itemStyle: itemStyle
      //   };
      // }),
      data: datas.map((item, i) => {
        // itemStyle = {
        //     color: i > 3 ? colorList[3] : colorList[i]
        // }
        return {
          value: item.value,
          // itemStyle: itemStyle
          itemStyle: {
            normal: {
              barBorderRadius: 30,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  // color: 'rgb(57,89,255,1)'
                  color: '#0099FF',
                },
                {
                  offset: 1,
                  // color: 'rgb(46,200,207,1)'
                  color: '#0033FF',
                },
              ]),
            },
          },
        };
      }),
      label: {
        show: false,
        position: 'right',
        color: '#333333',
        fontSize: 14,
        offset: [10, 0],
      },
    },
    // {
    //   name: '背景',
    //   type: 'bar',
    //   barWidth: 20,
    //   barGap: '-100%',
    //   itemStyle: {
    //     normal: {
    //       color: 'rgba(118, 111, 111, 0.55)'
    //     }
    //   },
    //   data: maxArr,
    // }
  ],
};
