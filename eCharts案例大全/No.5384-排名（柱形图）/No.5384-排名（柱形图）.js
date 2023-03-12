var colorlists = ['#6a5acd', '#13B5B1', '#50F873',
    '#FAD717', '#FF6B00', '#da70d6', '#afeeee',
    '#98db98', '#ffc0cb', '#0AB2AE', '#00ff7f',
    '#708090', '#ff4500', '#808000', '#000080',
    '#20b2aa', '#87cefa', '#ffa07a', '#4b0082',
    '#ffd700'
];
var testdata = [{
        value: 9,
        name: '北京电影学院'
    },
    {
        value: 11,
        name: '中国传媒大学'
    },
    {
        value: 19,
        name: '北京大学'
    },
    {
        value: 26,
        name: '清华大学'
    },
    {
        value: 47,
        name: '浙江大学'
    },
    {
        value: 55,
        name: '我去大学'
    },
    {
        value: 66,
        name: '家里蹲学院'
    },
    {
        value: 77,
        name: '嗯哼大学'
    },
    {
        value: 88,
        name: '啊哈大学'
    },
    {
        value: 99,
        name: '是大学'
    }
];
option = {
    title: {
        textStyle: {
            color: '#1e90ff'
        },
        text: '高校XTOP10',
        left: 'center'
    },
    tooltip: {
        show: "true",
        trigger: 'item',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: '50px',
        bottom: '1px',
        left: '5px',
    },
    xAxis: {
        type: 'value',
        show: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: [{
        type: 'category',
        axisLabel: {
            show: true, //让Y轴数据不显示
            color: '#00C5CD',
            formatter: function(value) {
                //富文本固定格式{colorName|这里填你想要写的内容}
                //return value <= 3 ? '{start2|' + value + '}' : '{start1|' + value + '}';
                // return value;
            },
            fontSize: 1,
            // padding: [5, 5, 5, 5]
        },
        itemStyle: {

        },
        axisTick: {
            show: false, //隐藏Y轴刻度
        },
        axisLine: {
            show: false, //隐藏Y轴线段
        },

        data: [],
    }],
    series: [{
            color: colorlists,
            type: 'scatter',
            symbolSize: 30,
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    borderColor: '#FFF',
                    color: function(params) {
                        // var colorList = ['#FF6B00','#E3B6EF','#50F873','#13B5B1','#0AB2AE'];
                        var colorList = colorlists;
                        return colorList[params.dataIndex];
                    },
                    formatter: function(params) {
                        if (params.value > 0) {
                            return params.value;
                        } else {
                            return '';
                        }
                    },
                    opacity: 1,
                }
            }
        },
        {
            name: '高校XTOP10',
            type: 'bar',
            barWidth: 10,
            silent: false,
            itemStyle: {
                normal: {
                    barBorderRadius: testdata.length,
                    color: function(params) {
                        var colorList = colorlists;
                        return colorList[params.dataIndex];
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    position: [0, '-200%'],
                    textStyle: {
                        color: '#000',
                    },
                    formatter: function(params) {
                        //富文本固定格式{colorName|这里填你想要写的内容}
                        var index = params.dataIndex;
                        return 'NO.' +
                            (testdata.length - index) +
                            ' ' +
                            testdata[index].name;
                    }
                }
            },
            data: testdata
        }
    ]
}