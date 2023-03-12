
option = {
    color: ['#3398DB'],
    grid: {
        bottom: '8%',
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    title: {
        text: '9999'
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: false
        },
        "axisLabel": {
            "interval": 0,
            "rotate": -90,
            "show": true,
            "splitNumber": 15,
            "textStyle": {
                "fontFamily": "微软雅黑",
                "fontSize": 12
            }
        },
        data: ["四川省", "河南省", "湖北省", "山西省", "江西省", "河南省", "四川省", "江西省", "甘肃省", "四川省", "甘肃省", "云南省", "四川省", "甘肃省", "云南省", "四川省", "湖北省", "河南省", "甘肃省", "四川省", "云南省", "四川省", "甘肃省", "贵州省", "四川省", "云南省", "河南省", "四川省", "河南省", "江西省", "江西省", "四川省", "云南省", "甘肃省", "四川省", "湖北省"]
    }, {
        position: 'bottom',
        offset: 80,
        axisLine: {
            onZero: false,
            show: false
        },
        axisTick: {
            length: 80,
            inside: true,
            interval: 0,
            lineStyle: {
                color: '#f00',
                fontSize: '14px'
            }
        },
        axisLabel: {
            inside: true
        },
        data: ["三焦经", "大肠经", "小肠经", "心包经", "心经", "肝经", "肺经", "肾经", "胃经", "胆经", "脾经", "膀胱经"]
    }],
    yAxis: [{
        type: 'value',
        //title: '9999'
    }],
    series: [{
            type: 'bar',
            barWidth: '60%',
            data: [108, 107, 82, 18, 17, 13, 44, 20, 19, 20, 19, 15, 46, 28, 22, 85, 48, 42, 96, 71, 35, 12, 6, 3, 83, 69, 57, 46, 43, 35, 20, 8, 6, 107, 100, 66],

            
        },
        {
            type: 'line',
            barWidth: '60%',
            symbol: 'circle',

            itemStyle: {
                color: 'red'
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: "red",
                        fontSize: 15
                    }
                }
            },
            data: [108, 107, 82, 18, 17, 13, 44, 20, 19, 20, 19, 15, 46, 28, 22, 85, 48, 42, 96, 71, 35, 12, 6, 3, 83, 69, 57, 46, 43, 35, 20, 8, 6, 107, 100, 66],

        }
    ]
};