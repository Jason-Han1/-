dataMap = {};
function dataFormatter(obj) {
    var pList = ['单词', '词组', '语法', '专有名词'];
    var temp;
    for (var month = 1; month <= 3; month++) {

        temp = obj[month.toString()];
        obj[month + 'sum'] = temp[0];
        for (var i = 1, len = temp.length; i < len; i++) {
            obj[month.toString()][i] = {
                name: pList[i],
                value: temp[i]
            }
        }
        obj[month.toString()].shift()
    }
    return obj;
}
dataMap.dataMonth = dataFormatter({
    //max : 60000,
    '1': [1020, 45, 45, 34, 44],
    '2': [928, 39, 42, 27, 28],
    '3': [1024, 29, 26, 37, 52]
});
option = {
    baseOption: {
        backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
            offset: 0,
            color: '#fff'
        }, {
            offset: 1,
            color: '#fff'
        }]),
        timeline: {
            // y: 0,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 2500,
            // controlStyle: {
            //     position: 'left'
            // },
            data: ['不常考知识点', '常考知识点', '一般知识点'],
        },
        title: {
            text: ''
        },
        tooltip: {
            formatter:'{b}：{c}'
        },
        calculable: true,
        grid: {
            top: 80,
            bottom: 100
        },
        xAxis: [{
            name: "",
            'type': 'category',
            'axisLabel': {
                'interval': 0
            },
            'data': ['单词', '词组', '语法', '专有名词'],
            splitLine: {
                show: false,
            }
        }],
        yAxis: [{
            type: 'value',
            name: '知识点数',
            // max: 53500
            max: 100
        }],
        series: [{
                name: '知识点类型',
                type: 'bar'
            },
            {
                name: '知识点占比图',
                type: 'pie',
                color: ['#FB9966', '#F596AA', '#58B2DC'],
                center: ['70%', '15%'],
                label:{
                  normal:{
                      formatter:'{b}:{d}%'
                  }  
                },
                radius: [0, '25%'],
                data: [{
                        name: "不常考知识点",
                        value: dataMap.dataMonth["1sum"]
                    },
                    {
                        name: "常考知识点",
                        value: dataMap.dataMonth["2sum"]
                    },
                    {
                        name: "一般知识点",
                        value: dataMap.dataMonth["3sum"]
                    }
                ]
            }
        ]
    },
    options: [{
            title: {
                subtext: '不常考知识点'
            },
            series: [{
                data: dataMap.dataMonth['1'],
                barWidth: '40%',
                color: '#FB9966',
            }]
        },
        {
            title: {
                subtext: '常考知识点'
            },
            series: [{
                data: dataMap.dataMonth['2'],
                color: '#F596AA',

            }, ]
        },
        {
            title: {
                subtext: '一般知识点'
            },
            series: [{
                data: dataMap.dataMonth['3'],
                color: '#58B2DC',
            }, ]
        }
    ]
};