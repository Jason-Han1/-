var colors = ['#5793f3', '#d14a61', '#675bba'];
var myColor = ['#00e9db', '#00c0e9','#00BFFF', '#87CEFA', '#6495ED', '#1E90FF','#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#DAA520', ,'#FF4500', '#eb3600', '#d0570e', '#d0a00e',];
var _zr = myChart.getZr();
 
_zr.add(new echarts.graphic.Text({
     style: {            
   x: _zr.getWidth() / 2+400,
   y: _zr.getHeight() / 2+110,
   textFill:'#000000',
   text: 'Figure B',
   textAlign: 'center', 
   textFont : ' 20px verdana'
   }}  
));
 
_zr.add(new echarts.graphic.Text({
 style: {            
  x: _zr.getWidth() / 4,
  y: _zr.getHeight() / 2.5+197,
  textFill:'#000000',
  text: 'Figure A',
  textAlign: 'center', 
  textFont : ' 20px verdana '
 }
}  
));
 
 _zr.add(new echarts.graphic.Text({
     style: {            
   x: _zr.getWidth() / 2+400,
   y: _zr.getHeight() / 2-415,
   textFill:'#000000',
   text: 'Scores Graded by US news',
   textAlign: 'center', 
   textFont : ' 20px verdana'
   }}  
));
 
option = {
    color: colors,
    backgroundColor:'#ffffff',
/*    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },*/
    tooltip: {
        formatter: 'Group {a}: ({c})'
    },
    
    grid: [
        {left: '7%', top: '7%', width: '38%', height: '50%'},
        {right: '5%', top: '7%', width: '38%', height: '50%'},
    ],
 
    legend: [
       /* {
        data: ['Admission', 'Graduation', 'employment'],
        bottom:250,
        gdIndex:1,
    }*/
    {
        data: ['Admission', 'Graduation', 'employment'],
        top:20,
        left:100,
        fontSize:12,
        gridIndex:0,
    },
    ],
    xAxis: [{
			type:'category',
			axisLabel:{
			     interval:0,//横轴信息全部显示
			     rotate:45,//-30度角倾斜显示
			},
			axisLine: {
                lineStyle: {
                    color: '#000000'
                }
            },
            data: ["US","China","UK","Australia","Canada","India","Russia","Germany","France","Nigeria","Cambodia","South Africa","Sudan","Mongolia"],
            gridIndex:0,
            },
        {
        name:"USnews Score",
        show: false,
        gridIndex:1,
        }
    ],
    yAxis: [
            // 栅格坐标0
        {
            type: 'value',
            name: '',
            min: 0,
            max: 100,
            position: 'right',
            gridIndex:0,
            axisLine: {
                lineStyle: {
                    color: '#000000'
                }
            },
            axisLabel: {
                formatter: '{value}%'
            }
            
        },
        
        {
            type: 'value',
            name: '',
            min: 0,
            max: 100,
            position: 'left',
            gridIndex:0,
            axisLine: {
                lineStyle: {
                    color: '#000000'
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
            
        },
        
        // 栅格坐标1
        {
        gridIndex:1,
        axisTick: 'none',
        axisLine: 'none',
        
        offset: '3',
        axisLabel: {
            textStyle: {
                color: 'black',
                fontSize: '12',
                
            },
            rotate:'0',
        },
data:['Mongolia', 'Sudan', 'South Africa', 'Cambodia', 'Nigeria', 'France', 'Germany', 'Russia', 'India', 'Canada', 'Australia', 'UK', 'China', 'US'],    }, {
        gridIndex:1,
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
            textStyle: {
                color: 'black',
                fontSize: '16',
            }
        },
        data:['14', '12', '13', '11', '10', '6', '4', '7', '9', '5', '3', '2', '8', '1']
    }, {
        gridIndex:1,

        nameGap: '50',
        nameTextStyle: {
            color: 'black',
            fontSize: '16',
        },
        axisLine: {
            gridIndex:1,
            lineStyle: {
                color: 'rgba(,255,255,255)'
            }
        },
        data: [],
    },
    {
        name: '分拨延误TOP 10',
        nameGap: '50',
        nameTextStyle: {
            color: '#ffffff',
            fontSize: '16',
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        },
        data: [],
    }
    
        
        
    ],
    // series
    series: [{
            name: 'Admission',
            type: 'bar',
            xAxisIndex:0,
            yAxisIndex: 0,
            data: [53.94,
                69.1,
                25.5,
                30.98,
                43.91,
                48.5,
                59.22,
                21.48,
                22.95,
                10.58,
                20.53,
                24.56,
                13.4,
                20.6
                ]
        },
        {
            name: 'Graduation',
            type: 'bar',
             xAxisIndex:0,
            yAxisIndex: 1,
            data: [32.76,
                60.29,
                15.31,
                18.52,
                22.67,
                43.85,
                24.74,
                13.14,
                10.6,
                8.33,
                18.55,
                10.32,
                8.87,
                18.06
                ]
        },
        {
            name: 'employment',
            type: 'line',
            xAxisIndex:0,
            yAxisIndex: 1,
            data: [60.7 ,
                87.3 ,
                60.0 ,
                59.8 ,
                51.6 ,
                57.1 ,
                73.8 ,
                61.2 ,
                46.2 ,
                78.7 ,
                90.4 ,
                42.0 ,
                66.2 ,
                87.7 
                
                ]
        },
        {
            name: '白框',
            type: 'bar',
            xAxisIndex:0,
            yAxisIndex: 1,
            barGap: '-100%',
            data: [99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
            barWidth: 16,
            itemStyle: {
                normal: {
                    color: '#DCDCDC',
                    barBorderRadius: 5,
                }
            },
            z: 1
        }, 
        //  next pic
        {
            name: '条',
            type: 'bar',
            xAxisIndex:1,
            yAxisIndex: 2,
            data:[17.25, 24.24, 28.42, 22.53, 35.24, 67.05, 68.62, 65.62, 45.87, 67.24, 73.36, 78.17, 65.59, 94],
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: 'black',
                        fontSize: '11',
                    }
                }
            },
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            z: 2
        },
        {
            name: '白框',
            type: 'bar',
            xAxisIndex:1,
            yAxisIndex: 3,
            barGap: '-100%',
            data: [120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120],
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: '#DCDCDC',
                    barBorderRadius: 5,
                }
            },
            z: 1
        }, 
        
        
        
        
        
    ]
};