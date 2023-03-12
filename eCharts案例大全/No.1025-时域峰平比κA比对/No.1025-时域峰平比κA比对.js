var uploadedDataURL = "/asset/get/s/data-1602131239196-QaRpbS2JR.csv";

function getVirtulData() {
    var today = echarts.number.parseDate(new Date());
    var dayTime = 3600 * 24 * 1000;
    var thatday = today - dayTime * 6;

    var data = [];
    for (var time = thatday; time < today; time += dayTime) {
        data.push(
            echarts.format.formatTime('yyyy-MM-dd', time)
        );
    }
    return {
        data,
        today: echarts.format.formatTime('yyyy-MM-dd', today),
        thatday: echarts.format.formatTime('yyyy-MM-dd', thatday)
    };
}

var NO2_data = [3.8637,4.31930,1.4388 ]
var date_list = ['A时刻', 'B时刻', 'C时刻']


option = {
    backgroundColor:'#0f375f',
    title: {
        text: '时域峰平比κA比对',
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20,
        },
        top: '5%',
        left: 'center',
    },
    legend:{
        data:['NO2','O3'],
        textStyle:{
            color:'#fff',
            align: 'right',
        },
        x:'right'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
    },
    grid: {
        top: '15%',
        left: '15%',
        right: '15%',
        bottom: '15%',
        // containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: true
        },
        splitArea: {
            // show: true,
            color: '#f00',
            lineStyle: {
                color: '#f00'
            },
        },
        axisLabel: {
            color: '#fff',
            fontSize:16,
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        data: date_list,
        // date:getVirtulData()['data'],

    }],

    yAxis: [{
        type: 'value',
        min: 0,
        max:5,
        // max: 140,
        splitNumber: 4,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
            margin: 20,
            textStyle: {
                color: '#d1e6eb',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
            name: '',
            type: 'line',
            // smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    color: "#6c50f3",
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#fff',
                    fontSize:16,
                }
            },
            itemStyle: {
                color: "#6c50f3",
                borderColor: "#fff",
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            tooltip: {
                show: false
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(108,80,243,0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(108,80,243,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(108,80,243, 0.9)',
                    shadowBlur: 20
                }
            },
            data: NO2_data
        },
      
    ]
};