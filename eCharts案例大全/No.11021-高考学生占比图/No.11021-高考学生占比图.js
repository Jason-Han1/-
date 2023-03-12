var symbols = [
'path://M1174.63988 1024l535.631054-804.028808 535.61257 804.028808z M3418.23144 0.517536l2.273461 18.354037L2.254977 439.387881l-2.254977-18.335553z',
  ];




var option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    title: [{
        left: '69.5%',
        top: '43%',
        textAlign: 'center',
        text: '文科',
        textStyle: {
            fontSize: 14,
        },
        subtext: '68.97%',
        subtextStyle: {
            fontSize: 15,
            color: ['#ff9d19']
        },
    }, {
        left: '29.4%',
        top: '50%',
        textAlign: 'center',
        text: '理科',
        textStyle: {
            fontSize: 14,
        },
        subtext: '31.03%',
        subtextStyle: {
            fontSize: 15,
            color: ['#ff9d19']
        },
    }],
    xAxis: {
        data: ['男'],
        show: false,
    },
    yAxis: {
        show: false,
        position: 'left',

    },
    series: [{
            type: 'pictorialBar',
            name: '',
            symbolSize: ['100%', '30%'],
            symbolPosition: 'center',
            symbolOffset: [0, '60%'],
            z: 10,
            data: [{
                value: 60.35,
                symbol: symbols[0],

                itemStyle: {
                    normal: {
                        color: "#eee"
                    }
                },
            }],
        },





        {
            name: '文科',
            label: {
                "normal": {
                    show: true,
                    textStyle: {
                        color: '#666',
                        fontSize: 12
                    },
                    position: 'outside'

                },
            },
            labelLine: {
                normal: {
                    length: 15, // 鏀瑰彉鏍囩ず绾跨殑闀垮害
                    lineStyle: {
                        color: "#999" // 鏀瑰彉鏍囩ず绾跨殑棰滆壊
                    }
                },
            },
            type: 'pie',
            radius: ['20%', '25%'],
            center: ['70%', '45%'],
            clockWise: false,
            hoverAnimation: false,
            data: [{
                    value: 50,
                    name: '政治'
                },
                {
                    value: 30,
                    name: '历史'
                },
                {
                    value: 10,
                    name: '地理'
                },
                {
                    value: 20,
                    name: '其他',
                    itemStyle: {
                        normal: {
                            color: '#eee'
                        }
                    }
                }
            ],
        }, {
            name: '理科',
            label: {
                show: true,
                textStyle: {
                    color: '#666',
                    fontSize: 12
                },
                position: 'outside'
            },
            labelLine: {
                normal: {
                    length: 15, // 鏀瑰彉鏍囩ず绾跨殑闀垮害
                    lineStyle: {
                        color: "#999" // 鏀瑰彉鏍囩ず绾跨殑棰滆壊
                    }
                },
            },

            type: 'pie',
            radius: ['20%', '25%'],
            center: ['30%', '51%'],
            hoverAnimation: false,
            data: [{
                    value: 10,
                    name: '化学'
                },
                {
                    value: 10,
                    name: '物理'
                },
                {
                    value: 80,
                    name: '其他',
                    itemStyle: {
                        normal: {
                            color: '#eee'
                        }
                    }

                }
            ],
        },


    ],
    color: ['#1cd389', '#668eff', '#ffc751']
};