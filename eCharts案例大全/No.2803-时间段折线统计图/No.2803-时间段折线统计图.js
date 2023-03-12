var legendData=[];
var xAxisData = ['00:00', '01:00', '02:00', '03:00', '04:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00','17:00', '18:00', '19:00', '20:00', '21:00','22:00', '23:00', '24:00'];
var seriesName1 = "资金情况";
var seriesName2 = "项目完成情况";
var seriesName3 = "生态社会效益";
var seriesData1 = [80.77, 80.804, 80.72, 80.88, 80.63, 80.45, 80.79, 80.67, 80.93, 81.25, 80.43, 80.82, 80.61,80.77, 80.804, 80.72, 80.88, 80.63, 80.45, 80.79, 80.67, 80.93, 81.25, 80.43, 80.82, 80.61];
var seriesData2 = [82.35, 82.58, 80.23, 81.59, 82.81, 82.30, 82.08, 81.78, 80.990, 81.89, 81.48, 81.04, 80.34,82.35, 82.58, 80.23, 81.59, 82.81, 82.30, 82.08, 81.78, 80.990, 81.89, 81.48, 81.04, 80.34];
var seriesData3 = [81.96, 80.82, 82.56, 80.58, 81.21, 81.08, 82.10, 80.82, 80.54, 80.51, 80.95, 80.75, 80.88,81.96, 80.82, 82.56, 80.58, 81.21, 81.08, 82.10, 80.82, 80.54, 80.51, 80.95, 80.75, 80.88];


var option = {
     tooltip: { //提示框组件
          trigger: 'axis',
          formatter: '{a0}: {c0}<br/>{a1}: {c1}<br/>{a2}: {c2}',
          axisPointer: {
               type: 'shadow',
               label: {
                    backgroundColor: '#4c647c'
               }
          },
          textStyle: {
               color: '#fff',
               fontStyle: 'normal',
               fontFamily: '微软雅黑',
               fontSize: 14,
          }
     },
     grid: {
          left: '1%',
          right: '4%',
          bottom: '2%',
          top: '15%',
          padding:'0 0 0 0',
          containLabel: true,
     },
    legend: {
        right: '30%',
        top: 'right',
        textStyle: {
               color: '#4c647c',
               fontStyle: 'normal',
               fontFamily: '微软雅黑',
               fontSize: 14,            
        },
        data: name,
    },
     xAxis: [
          {
               type: 'category',
               boundaryGap: true,//坐标轴两边留白
               data: xAxisData,
               axisLabel: { //坐标轴刻度标签的相关设置。
                    interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                    rotate:40,
                    margin:15,
                    textStyle: {
                         color: '#4c647c',
                         fontStyle: 'normal',
                         fontFamily: '微软雅黑',
                         fontSize: 14,
                    }
               },
               axisTick:{//坐标轴刻度相关设置。
                    show: false,
               },
               axisLine:{//坐标轴轴线相关设置
                    lineStyle:{
                         color:'#4c647c',
                         opacity:0.2
                    }
               },
               splitLine: { //坐标轴在 grid 区域中的分隔线。
                    show: false,
               }
          }
     ],
     yAxis: [
          {
               type: 'value',
               splitNumber: 5,
               min: 80.24,
               max: 82.91,
               axisLabel: {
                    textStyle: {
                         color: '#4c647c',
                         fontStyle: 'normal',
                         fontFamily: '微软雅黑',
                         fontSize: 14,
                    }
               },
               axisLine:{
                    show: false
               },
               axisTick:{
                    show: false
               },
               splitLine: {
                    show: true,
                    lineStyle: {
                         color: ['#000'],
                         opacity:0.08,
                         type:'dotted'  //'dotted'虚线 'solid'实线
                    }
               }

          },
     ],
     series : [
        {
            name:seriesName1,
            type:'line',
            data:seriesData1,
            symbolSize: 8,
            barWidth: 10,
            barGap:0,//柱间距离
            itemStyle: {//图形样式
                normal: {
                    lineStyle: {
                            width: 2,
                            // type: 'dotted',
                        },
                         barBorderRadius: 10,
                         color: '#108DE9',
                },
            },
        },
        {
            name:seriesName2,
            type:'line',
            data:seriesData2,
            symbolSize: 8,
            barWidth: 10,
            barGap:1,//柱间距离
            itemStyle: {//图形样式
                normal: {
                    lineStyle: {
                            width: 2,
                            // type: 'dotted',
                        },
                    barBorderRadius: 10,
                         color: '#98D87D',
                },
            },
        },
        {
            name:seriesName3,
            type:'line',
            data:seriesData3,
            symbolSize: 8,
            barWidth: 10,
            barGap:1,//柱间距离
            itemStyle: {//图形样式
                normal: {
                    lineStyle: {
                            width: 2,
                            // type: 'dotted',
                        },
                    barBorderRadius: 10,
                         color: '#FFA304',
                },
            },
        },
        
    ]
};