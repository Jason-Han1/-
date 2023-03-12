option = {
    title:{
        text:'重点场所情况',
        textStyle:{
            color:'#17e6ff',
            fontSize: '16px'
        },
    },
    backgroundColor: '#031845',
    grid: {
        left: '0%',
        right: '0%',
        top: '25%',
        bottom: '7%',
        containLabel: true
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        textStyle: {
            fontSize: '16px'
        }
    },
    legend: {
        show: false,
        x: 'center',
        y: '1%',
        itemWidth: 45,
        itemHeight: 18,
        textStyle: {
            color: '#fff',
            fontSize: '16px'
        },
        data:['可靠率','合格率']
    },
    xAxis: [{
        type: 'category',
        name: '',
        nameTextStyle: {
            fontSize: '16px',
            color: '#fff',
            lineHeight: 90,
        },
        axisLabel: {
            color: '#fff',
            fontSize: '16px',
            margin: 10,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#406A92',
                width: 3
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#197584'
            }
        },
        data: ['出租房','宗教场所','合用场所','企业','教堂','敬老院','民宿']
    }],
    yAxis: [{
        type: 'value',
        name: '',
        nameTextStyle: {
            fontSize: '16px',
            color: '#fff'
        },
        nameGap: 30,
        axisLabel: {
            show: false,
            formatter: '{value}',
            margin: 20,
            textStyle: {
                color: '#fff',
                fontSize: '16px',

            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color:'#406A92',
                width: 3
            }
        },
        splitArea: {
            show: false,
            areaStyle: {
                color: ["rgba(128,160,176,.1)", "rgba(250,250,250,0)"]
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#406A92'
            }
        }
    }],
    series: [{
            "name": "",
            type: 'pictorialBar',
            symbolSize: [25, 10],
            symbolOffset: [0, -5],
            symbolPosition: 'end',
            z: 5,
            tooltip: {
                show: false
            },
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    fontSize: '16px',
                    color: '#fff'
                }
            },
           
            color: "#27b6ff",
            data: [23,25,18,28,20,26,24]
        },
        {
            name: '',
            type: 'pictorialBar',
            tooltip: {
                show: false
            },
            symbolSize: [40, 20],
            symbolOffset: [0, 15],
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#006ac4',
                    borderType: 'solid',
                    borderWidth: 5
                }
            },
            color: "#006ac4",
           data: [23,25,18,28,20,26,24]
        },
       
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [25, 10],
            tooltip: {
                show: false
            },
            symbolOffset: [0, 5],
            z: 12,
            "color": "#006ac4",
           data: [23,25,18,28,20,26,24]
        },
        {
            type: 'bar',
            name:'合格率',
            "barWidth": "25",
            // barGap: '200%',
            // barCateGoryGap: '10%',
            "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    fontSize: '16px',
                    color: '#fff',
                    opacity: 1,
                    formatter: '{c}',
                    offset: [0, -10]
                }
            },
            itemStyle: {
                normal: {
                    color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: '#1492ff'
              },
              {
                offset: 1,
                color: 'rgba(39,182,255,0.2)'
              }
              ],
              globalCoord: false
            },
                },
            },
            data: [23,25,18,28,20,26,24]
        },
        
    ]
};