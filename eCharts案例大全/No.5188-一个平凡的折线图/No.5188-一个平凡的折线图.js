var fontColor = "#000";
var nameColor = "#6f9ea8";
let noramlSize = 15;
let splitLineColor = "#ccc";
let axisLineColor = "#ccc";
let datas={
    legend:["A","B"],
    unit:"月"
}
let colors=[
    "rgba(255,79,79,","rgba(51,116,235,"
    ];
option = {
    tooltip: {
        trigger: 'axis',
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
    },
    legend: {
        icon: 'rect',
        orient: 'horizontal',
         align: 'right',
        top: '2%',
        right: 'center',
        itemWidth: 25,
        itemHeight: 2,
        itemGap: 100,
        textStyle:{
            fontSize:noramlSize
        },
        data:datas.legend
    },
    xAxis: [{
        name:datas.unit,
        nameTextStyle:{
          color:  fontColor,
          fontSize:noramlSize
        },
        type: 'category',
        data: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11', '2019-12', '2020-01', '2020-02', '2020-03', '2020-04'],
        axisLabel:{
          show:true,  
          fontSize:noramlSize
        },
        
        axisTick: {
            show: true, //不显示刻度
        },
        boundaryGap: false,
        splitLine: {
            show: false,
           
        },
      axisLine: {
            show: true,
        },
        
    }],
    yAxis: [{
        type: 'value',
        axisLabel:{
          show:true,  
          fontSize:noramlSize
        },

        splitLine: {
            show: false,

        },
        axisTick: {
            show: true, //不显示刻度
        },
        axisLine: {
            show: true,
        },
        nameTextStyle: {
            color: "#FFFFFF"
        },
        splitArea: {
            show: false
        }
    }],
    series: [{
            name: datas.legend[0],
            type: 'line',
            data: [10, 18, 5, 23, 14, 40, 58, 50, 45, 56, 53, 47, 45, 65, 55, 50],
            lineStyle: {
                normal: {
                    width: 3,
                    // color: '#FF4F4F',
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: colors[0]+' 1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color:colors[0]+' 0.5)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    shadowColor: 'rgba(255,79,79, 1)',
                    shadowBlur: 12,
                    shadowOffsetY: 6
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color:colors[0]+'0.2)'
                        },
                        {
                            offset: 1,
                            color: colors[0]+'0)'
                        }
                    ], false),
                    shadowColor: 'rgba(108,80,243, 0.9)',
                    shadowBlur: 20
                }
            },
            symbol: 'emptyCircle',
            showSymbol: false, //是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示。
            itemStyle: {
                normal: {
                    color: '#FF4F4F',
                    shadowColor: 'rgba(254, 93, 93, 1)',
                    shadowBlur:5,
                    borderWidth: 2,
                    borderColor: "#fff",
                }
            },
            smooth: true
        },
        {
            name: datas.legend[1],
            type: 'line',
            data: [23, 60, 20, 36, 23, 58, 81, 76, 68, 76, 73, 68, 65, 85, 75, 70],
            lineStyle: {
                normal: {
                    width: 3,
                    // color: '#3374EB',
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: colors[1]+'1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color:colors[1]+'0.5)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    shadowColor: 'rgba(51,116,235,1)',
                    shadowBlur: 12,
                    shadowOffsetY: 6
                }
            },
             areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color:colors[1]+'0.2)'
                        },
                        {
                            offset: 1,
                            color: colors[1]+'0)'
                        }
                    ], false),
                    shadowColor: 'rgba(108,80,243, 0.9)',
                    shadowBlur: 20
                }
            },
            symbol: 'emptyCircle',
            showSymbol: false,
            itemStyle: {
                normal: {
                    color: '#3374EB',
                    shadowColor: 'rgba(51,116,235, 1)',
                    shadowBlur: 2,
                    borderWidth: 2,
                    borderColor: "#F8F8FF"
                }
            },
            smooth: true
        }
    ]
};