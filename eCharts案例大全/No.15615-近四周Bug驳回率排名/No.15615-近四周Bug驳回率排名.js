var bugJson = {
    "cjl": {
        "XX某": 32,
        "XX某1": 21,
        "XX某2": 75,
        "XX某3": 77,
        "XX某4": 73,
        "XX某5": 24,
        "XX某6": 18,
        "XX某7": 17,
        "XX某8": 15,
        "XX某9": 20,

    },
    "bhl": {
        "XX某": 32,
        "XX某1": 21,
        "XX某2": 50,
        "XX某3": 68,
        "XX某4": 73,
        "XX某5": 24,
        "XX某6": 18,
        "XX某7": 17,
        "XX某8": 15,
        "XX某9": 21,

    }
};







option = {
    title: {
        text: '近四周Bug驳回率排名',
        // subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['创建率', '驳回率']
    },
    calculable: true,



    grid: [{
        x: '7%',
        y: '7%',
        width: '38%',
        height: '38%'
    }, {
        x2: '7%',
        y: '7%',
        width: '38%',
        height: '38%'
    }],

    xAxis: [{
        type: 'value',
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value}%',
        },
        gridIndex: 0,
        min: 0,
        max: 20
    }, {
        type: 'value',
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value}%',
        },
        gridIndex: 1,
        min: 0,
        max: 20
    }],
    yAxis: [{
        type: 'category',
        data: Object.keys(bugJson.cjl),
        splitLine: {
            show: false
        },
        gridIndex: 0,
        min: 0,
        max: 15
    }, {
        type: 'category',
        data: Object.keys(bugJson.cjl),
        splitLine: {
            show: false
        },
        gridIndex: 1,
        min: 0,
        max: 15
    }],

    series: [{
        name: '创建率',
        type: 'bar',
        xAxisIndex: 0,
        yAxisIndex: 0,
        // data: dataAll[0],
        // markLine: markLineOpt,
        itemStyle: {
            normal: {
                label: {
                    textStyle: {
                        // 用 itemStyle.normal.label.textStyle.fontSize 來更改餅圖上項目字體大小
                        fontSize: 3
                    },
                    show: true,
                    position: 'right',
                    formatter: '{c}%',


                }
            }
        },
        barGap: '25%',
        data: Object.keys(bugJson.cjl).map(function(key) {
            return bugJson.cjl[key];

        })
    }, {
        name: '驳回率',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        // data: dataAll[1],
        // markLine: markLineOpt,
        itemStyle: {
            normal: {
                label: {
                    textStyle: {
                        // 用 itemStyle.normal.label.textStyle.fontSize 來更改餅圖上項目字體大小
                        fontSize: 3
                    },
                    show: true,
                    position: 'right',
                    formatter: '{c}%',


                }
            }
        },
        barGap: '25%',
        data: Object.keys(bugJson.cjl).map(function(key) {
            return bugJson.cjl[key];

        })
    }]
};