//图4 -1 
var data_val1 = [18.9,
19.1,
21.3,
18.5,
13.8,
10.6,
9.5,
9.8];
var data_val2 = [6.9,
5.98,
4.73,
6.12,
6.81,
7.89,
9.22,
12.62];

var data_val = data_val2

    xAxis_val = ['2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
    ];
var data_val1 = [0, 0, 0, 0, 0, 0, 0];
var option = {
    title:{
        
        text: "全国P2P综合收益率和借款期限变化",
        left: 'center',
        top: 20,
        textStyle: {
            color: '#fff',
            fontSize: '22'
        },
        subtextStyle: {
            color: '#90979c',
            fontSize: '16',

        },

       
    
    },
    backgroundColor: '#20242c',
    grid: {
        left: 70,
       // top: 100,
        top:320,
        height:200,
        //bottom: 50,
        right: 70,
        containLabel: true
    },
    tooltip: {
        show: true,
        backgroundColor: '#384157',
        borderColor: '#384157',
        borderWidth: 1,
        formatter: '{b}:{c}',
        extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 1)'
    },


    xAxis: {
        data: xAxis_val,
        boundaryGap: false,
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#bfbfbf'
            }
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        ayisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#bfbfbf'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(159,164,188,0.15)'
            }
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#384157'
            }
        }
    },

    series: [{
            type: 'bar',
            name: 'linedemo',


            tooltip: {
                show: false
            },
            animation: false,
            barWidth: 1.4,
            hoverAnimation: false,
            data: data_val,
            itemStyle: {
                normal: {
                    //color: '#f17a52',
                   // color:'rgba(13,177,205,0.6)',
                  color: 'rgba(180,236,81,0.8)',
                    opacity: 0.6,
                    label: {
                        show: false
                    }
                }
            }
        },
        {
            type: 'line',
            name: '距离',

            animation: false,
            symbol: 'circle',

            hoverAnimation: false,
            data: data_val1,
            itemStyle: {
                normal: {
                    color: '#ffffff',
                    opacity: 0,
                }
            },
            lineStyle: {
                normal: {
                    width: 1,
                    color: '#384157',
                    opacity: 1
                }
            }
        },
        {
            type: 'line',
            name: 'linedemo',
            smooth: true,
            symbolSize: 10,
            animation: false,
            lineWidth: 1.2,
            hoverAnimation: false,
            data: data_val,
            symbol: 'circle',
            label:{
                
                        show: true,
                        position: 'top',
                        //formatter:'{c}%',
                        formatter:'{c}月',
                        textStyle: {
                            //color: 'rgba(13,177,205,0.8)',
                            color: 'rgba(180,236,81,0.8)',
                        }
                    
            },
            itemStyle: {
                normal: {
                   // color: '#f17a52',
                 // color:'rgba(13,177,205,0.8)',  
                  color:new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 1,
                        color: '#B4EC51' // 0% 处的颜色
                    }, {
                        offset: 0,
                        color: '#429321' // 100% 处的颜色
                    }], false),
                    shadowBlur: 40,
                    
                }
            },
            areaStyle: {
                normal: {
                    //color: '#f17a52',
                    //color:'rgba(13,177,205,1)',
                    color: 'rgba(180,236,81,0.8)',
                    opacity: 0.08
                }
            }

        }
    ]
};
myChart.setOption(option); 