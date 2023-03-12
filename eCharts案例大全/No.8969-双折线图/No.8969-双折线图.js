option = {
    title: {
        text: '隧道车速统计'
    },
    xAxis: {
        type:'category',//类目
        boundaryGap:true,//x坐标两边留白策略
        data: ['0:00', '3:00', '6:00', '9:00', '12:00', '15:00', '18:00','21:00','0:00'],
        axisTick:{//坐标刻度
            show:true,
            alignWithLabel:false,
        },
    },
    yAxis: {
        boundaryGap:false,
        axisLine:{
            show:true,
            lineStyle:{
                opacity:0,
            }
        },
        axisTick:{//坐标刻度
            show:false,
        },
        splitLine:{
            lineStyle:{
                type:'dashed',
            }
        },
        min:40,//起始值
        interval:20,//步长
        max:140,//结束
        name:'Km/h',
    },
    
    
    series: [{
        //下方折线
        type: 'line',
        data:[76, 80, 82, 88, 90, 98, 98,100,96],
        z:100,
        lineStyle:{
            color: '#ffc303',
        },
         markPoint: {
              symbol:'roundRect',//标注样式
              symbolKeepAspect:'true',//支持缩放
              symbolSize:[40,30],//标注大小
              symbolOffset:['0','-80%'],//标注偏移位置
              z:-100,
              data: [{
                  type: 'max',
                  name: '最大值'

              }]
          },
    },
    {//上方折线
        type: 'line',
        data:[88, 90, 98, 101, 110, 118, 120,116,112],
        z:100,//数值大的在上层
        lineStyle:{
            color:'#02bf8a',
        },
         markPoint: {
              symbol:'roundRect',//标注样式
              symbolKeepAspect:'true',//支持缩放
              symbolSize:[40,30],
              symbolOffset:['0','-80%'],//标注偏移位置
              z:-100,
              data: [{
                  type: 'max',
                  name: '最大值'

              }]
          },
    },
    {
        type:'bar',
        data:[140,140,140,140,140,140,140,140,140],
        itemStyle:{
            color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                            color: '#1d6574'
                    },
                    {
                        offset: 1,
                        color: '#fff'
                    }
                ], false),
            opacity:.2,
        }
    }]
};