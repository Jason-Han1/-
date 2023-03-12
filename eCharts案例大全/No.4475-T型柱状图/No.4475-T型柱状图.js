
yList = [32, 58, 64, 64];
xList = [10, 55, 44, 55];
color = ['#0055e4', '#00f2da','#0055e4', '#00f2da'];
var colorArray = [
    {
        top: 'rgba(0,85,228,.7)', 
        bottom: 'rgba(0,85,228,.1)'
    }, {
        top: 'rgba(0,247,223, 0.7)', //绿
        bottom: 'rgba(0,247,223, 0.1)'
    },
    {
        top: 'rgba(0,85,228,.7)', 
        bottom: 'rgba(0,85,228,.1)'
    },{
        top: 'rgba(0,247,223, 0.7)', //绿
        bottom: 'rgba(0,247,223, 0.1)'
    },
];


xData = xList.map((item, index) => {
    return {
        value: item,
        textStyle: {
            color: color[index]
        }
    };
});
dom = 800;
barWidth = dom / 20;

option = {
      backgroundColor: "#010d3a",
    //标题
    title: {
        text: '志愿项目服务时长变化趋势',
        textStyle: {
            color: '#00FFFF',
            fontWeight: '800',
            fontSize: `20`,
        },
        left: 'center',
        top: '5%'
    },

    //X轴
    xAxis: {
        name:'X',
         nameTextStyle: {
            color: '#FFFFFF',
            padding: [0, 0, 0, 20]

          },
        data: xData,
        show: true,
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,1)',
                 shadowColor:'rgba(255,255,255,1)',
                shadowOffsetX: '20',
            },
            symbol: ['none', 'arrow'],
            symbolOffset: [0, 25]
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)'
            },
        },
        axisLabel: {
            rotate: -30,
            fontSize: 12,
        },
    },
    yAxis: {
        show: true,
        splitNumber: 4,
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)'
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)'

            },
        },
        axisLabel: {
            color: '#FFFFFF',
        }
    },
    series: [
       {
            type: 'bar',
             z: 3,
            barWidth: barWidth,
            // barGap: '-135%',
            itemStyle: {
                normal: {
                    color: function(params) {
                         let num = colorArray.length;
                        return {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }],
                            //globalCoord: false
                        }
                        
                    }
                }
            },
            label: {
                show: true,
                position: [barWidth / 2, -(barWidth)],
                color: '#ffffff',
                fontSize: 12,
                fontStyle: 'bold',
                align: 'center',
            },
            data: yList
        },
     
        {
            z: 3,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: yList,
            symbol: 'rect',
            symbolOffset: ['-12%', '-100%'],
            symbolSize: [barWidth * 2, barWidth * 0.08],
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    color: function(params) {
                        var colorList = color
                        return colorList[params.dataIndex];
                    },

                }
            },
        },
          {
            type: 'bar',
            z: 1,
            barWidth: barWidth*2,
            barGap: '-150%',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0.2)'
                }
            },

            data: [80,80,80,80,80]
        },
    ],
};