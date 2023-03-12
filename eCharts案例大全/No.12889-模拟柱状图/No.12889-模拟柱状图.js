let data = [
    [0, 50, 0],
    [0, 140, 0],
    [0, 100, 0],
    [0, 120, 0],
    [0, 140, 0],
    [0, 80, 0],
    [0, 230, 0],
    [0, 100, 0]
];


data.forEach((dataItem, index) => {
    let arr = new Array();
    for (let i = 0; i < index; i++) {
        arr.push('', '');
    }
    data[index] = arr.concat(dataItem);
});
let series = [];
for (let item of data) {
    series.push({
        type: 'line',
        // symbol: 'none',
        symbolSize: 0.1,
        smooth: true, //平滑
        areaStyle: {
            normal: {
                // color: 'red'
                opacity: 1
            }
        },
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    formatter: params => {
                        if (params.value === 0) {
                            return ''
                        } else {
                            return params.value
                        }
                    }
                }
            }
        },
        data: item,
        label: {
            show: true,
            formatter: params => {
                if (params.value === 0) {
                    return ''
                } else {
                    return params.value
                }
            }
        },
    });
}

option = {
    color: ['#01ffb3', '#367bf8', '#7847f6', '#f749c7', '#f2a705', '#faff72', '#b3ff71', '#ff6e00'],
    title: {
        // text: 'Awesome Chart'
    },
    grid: {
        x: 10,
        x2: 10,
        y: 0,
        y2: 100
    },
    tooltip: {},
    xAxis: { // show: false,
        boundaryGap: false,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            // show:false
            color: '#b8f6ff',
            interval: 0, // 强制显示所有标签
            formatter: function(params) {
                var newParamsName = "";
                var paramsNameNumber = params.length;
                var provideNumber = 4;
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                if (paramsNameNumber > provideNumber) {
                    for (var p = 0; p < rowNumber; p++) {
                        var tempStr = "";
                        var start = p * provideNumber;
                        var end = start + provideNumber;
                        if (p == rowNumber - 1) {
                            tempStr = params.substring(start, paramsNameNumber);
                        } else {
                            tempStr = params.substring(start, end) + "\n";
                        }
                        newParamsName += tempStr;
                    }
                } else {
                    newParamsName = params;
                }
                return newParamsName
            }
        },
        //
        data: [
            '',
            '湖南省委严肃处理下塞湖矮围问题责任人', '',
            '蓝天保卫战强化督查廉政纪律再提醒', '',
            '部分环境问题整改无实质性进展', '',
            '兰州五部门联合整治破坏环境资源违法犯罪活动', '',
            '贵州翁安江界河国家级风景名胜区内违法开采磷矿', '',
            '江苏海安市违规撤销沿海防护林', '',
            '河南环保局查封居民灶台假的', '',
            '天津生态城十周年一个典型的生态城市样本',
            '',
        ]
    },
    yAxis: [{
        show: false,
        splitLine: {
            show: false
        },
    }],
    series: series

};