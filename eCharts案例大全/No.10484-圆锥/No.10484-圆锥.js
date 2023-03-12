option = {
   grid: {
        left: '3%',
        right: '3%',
        bottom: '40%',
        top: '40%',
        containLabel: true
    },
    backgroundColor: '#040821',
    tooltip: {
        trigger: 'item',
    },
    xAxis: {
        data: ["美国·纽约", "日本·东京", "英国·伦敦", "泰国·曼谷", "韩国·首尔"],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#888',
                margin: 17,
                fontSize: 36

            },
            margin: 20, //刻度标签与轴线之间的距离。
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ["rgba(250,250,250,0.05)", "rgba(250,250,250,0.0)"],
                width: 100,
            }
        }

    },
    yAxis: {
        splitLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
       
    },
    series: [{
        name: '',
        type: 'pictorialBar',
        symbolSize: [100, 20],
        symbolOffset: [0, -10],
        z: 12,
        symbolPosition: 'end',

        itemStyle: {
            normal: {
                color: function(params) {

                    var colorList = [
                        '#60a39b', '#406ca7', '#60a39b', '#406ca7', '#60a39b',
                    ];

                    return colorList[params.dataIndex]

                },
            }
        },
        data: [31007, 23321, 11654, 9680, 8123]


    }, {
        name: '',
        type: 'pictorialBar',
        symbolSize: [100, 25],
        symbolOffset: [0, 10],
        z: 12,
        label: {
            show: true,
            position: 'top',
            color: '#fff',
            fontSize: 36,
            formatter:function(params) {
                return parseFloat(params.value).toLocaleString();
                console.log(params.value);
                
            }
        },
        itemStyle: {
            normal: {
                color: function(params) {

                    // build a color map as your need.

                    var colorList = [

                        '#198875', '#014ba6', '#198875', '#014ba6', '#198875',



                    ];

                    return colorList[params.dataIndex]

                },
            }
        },
        data: [31007, 23321, 11654, 9680, 8123]
    }, {
        type: 'bar',
        itemStyle: {
            normal: {
                color: function(params) {

                    // build a color map as your need.

                    var colorList = [

                        '#198875', '#014ba6', '#198875', '#014ba6', '#198875',

                    ];

                    return colorList[params.dataIndex]

                },
            }
        },
        barWidth: 100,
        data: [31007, 23321, 11654, 9680, 8123]
    }]
};