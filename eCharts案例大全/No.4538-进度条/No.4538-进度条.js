 option = {
     backgroundColor:"#000",
    //  tooltip: {
    //      trigger: 'axis',
    //      axisPointer: { // 坐标轴指示器，坐标轴触发有效
    //          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    //      },
    //      textStyle: {
    //          fontSize: 24
    //      },
    //      //  formatter: function(parms) { //给提示框的每一项内容添加单位
    //      //      // console.log(parms)
    //      //      var str = parms[0].seriesName + ":" + " " +
    //      //          parms[0].value + " 套 "
    //      //      var str1 = parms[1].seriesName + ":" + " " +
    //      //          parms[1].value + " 套 "
    //      //      var str2 = parms[2].seriesName + ":" + " " +
    //      //          parms[2].value + " 套 "
    //      //      return '<div>' + parms[0].name + '</div>' + str + "<br/>" + str1 + "<br/>" + str2;
    //      //  }
    //  },
     grid: {
         top: '18%',
         left: '0%',
         right: '5%',
         bottom: '10%',
     },
     xAxis: [{
         splitLine: {
             show: false
         },
         "axisTick": { //y轴刻度线
             "show": false
         },
         axisLine: {
             "show": false,
             lineStyle: {
                 color: '#ccc',
             }
         },
         axisLabel: {
             show: false,
             interval: 0,
             color: '#fff',
             fontSize: '16'
         }
     }],
     yAxis: {
         inverse: true,
         name: ' ',
         nameTextStyle: {
             color: '#fff',
             fontSize: 12,
             padding: [10, 0, 5, 0],
         },
         splitLine: {
             show: false
         },
         axisLabel: {
             //  interval: 0,
             show: false,
             color: '#fff',
             fontSize: '16'

         },
         "axisTick": { //y轴刻度线
             "show": false
         },
         axisLine: {
             "show": false,
             lineStyle: {
                 color: '#ccc',
             }
         },
         data: ['公租房'],
         //  data: [textData],
     },
     series: [{
             name: '规划',
             barGap: '-100%',
             stack: 'sum',
             type: 'bar',
             barWidth: 20,
             color: 'rgba(17, 49, 58,.5)',
             itemStyle: { //设置每个柱子的样式
                 borderColor: '#ffa800',
                 borderType: "dotted",
                 borderWidth: 2
             },
             label: {
                 normal: {
                     show: false,
                     position: 'insideRight'
                 }
             },
             data: [500]
             //  data: guihuaData
         },
         {
             name: '按规划实施',
             type: 'bar',
             barGap: '-100%',
             barWidth: 20,
             color: "#337AB7",
             label: {
                 normal: {
                     show: false,
                     position: 'insideRight',
                 }
             },
              itemStyle: {
              normal: {
                  barBorderRadius: [0, 10, 10, 0],
                  //0, 0, 1, 0 :设置颜色方向从左到右渐变
                  //0, 0, 0, 1:设置颜色方向从上到下渐变
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                          offset: 0,
                          color: '#2D8DED'
                      },
                      {
                          offset: 1,
                          color: "#5ED8FB"
                      }
                  ])
              }
          },
             data: [420]
             //  data: shisiData
         },
         {
             name: '超量',
             type: 'bar',
             barGap: '-100%',
             barWidth: 20,
             stack: 'sum',
             color: "#ffff00",
             label: {
                 normal: {
                     show: true,
                     position: 'top',
                     formatter: '',
                     position: 'right',
                     color: "#ffff00",
                 }
             },
             data: [0]
             //  data: chaoliang
         }
     ]
 };