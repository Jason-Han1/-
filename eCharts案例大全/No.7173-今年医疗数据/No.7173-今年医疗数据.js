option = {
    grid: [
        {width: '48%', height: '48%', left: '1%', top: '1%', containLabel: true},
        {width: '48%', height: '48%', left: '51%', top: '1%', containLabel: true},
        {width: '48%', height: '48%', left: '1%', top: '51%', containLabel: true},
        {width: '48%', height: '48%', left: '51%', top: '51%', containLabel: true}
    ],
    xAxis: [{
        gridIndex: 0,
        data: ['溧水区人民医院', '溧水中医院', '溧水中山医院']
    }, {
        gridIndex: 1,
        data: ['内科', '外科', '儿科', '妇科', '眼科', '耳鼻喉科', '口腔科']
    }, {
        gridIndex: 2,
        data: ['2019-12', '2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06']
    }, {
        gridIndex: 3,
        data: ['布洛芬', '双氯芬酸', '萘普生', '阿托品', '间苯三酚', '匹维溴胺', '阿司匹林']
    }],
    yAxis: [{
        gridIndex: 0,
        splitLine: {show: false}
    }, {
        gridIndex: 1,
        splitLine: {show: false}
    }, {
        gridIndex: 2,
        splitLine: {show: false}
    }, {
        gridIndex: 3,
        splitLine: {show: false}
    }, {
        gridIndex: 0,
        splitLine: {show: false}
    }, {
        gridIndex: 1,
        splitLine: {show: false}
    }, {
        gridIndex: 2,
        splitLine: {show: false}
    }],
    series: [{
        name: '门诊数',
        type: 'bar',
        xAxisIndex: 0,
        yAxisIndex: 0,
        data:[220, 182, 191, 234, 290, 330, 310]
    }, {
        name: '住院数',
        type: 'bar',
        xAxisIndex: 0,
        yAxisIndex: 0,
        data:[220, 182, 191, 234, 290, 330, 310]
    }, {
        name: '总收入',
        type: 'bar',
        xAxisIndex: 0,
        yAxisIndex: 4,
        data:[220, 182, 191, 234, 290, 330, 310]
    }, {
        name: '门诊数',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data:[220, 182, 191, 234, 290, 330, 310]
    }, {
        name: '住院数',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data:[220, 182, 191, 234, 290, 330, 310]
    }, {
        name: '总收入',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 5,
        data:[220, 182, 191, 234, 290, 330, 310]
    }, {
        name: '门诊数',
        type: 'bar',
        xAxisIndex: 2,
        yAxisIndex: 2,
        data:[220, 182, 191, 234, 290, 330, 310]
    }, {
        name: '住院数',
        type: 'bar',
        xAxisIndex: 2,
        yAxisIndex: 2,
        data:[220, 182, 191, 234, 290, 330, 310]
    }, {
        name: '总收入',
        type: 'bar',
        xAxisIndex: 2,
        yAxisIndex: 6,
        data:[220, 182, 191, 234, 290, 330, 310]
    }, {
        name: '药品使用',
        type: 'bar',
        xAxisIndex: 3,
        yAxisIndex: 3,
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};