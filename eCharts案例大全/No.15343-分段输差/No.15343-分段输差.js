var builderJson = {
  "all": 10887,
  "charts": {
    "第十一段": 3237,
    "第二段2分支": 2164,
    "第二段1分支": 7561,
    "第十段": 7778,
    "第九段": 7355,
    "第八段": 2405,
    "第七段": 1842,
    "第六段": 2090,
    "第五段": 1762,
    "第四段": 1593,
    "第三分支": 2060,
    "第二分支": 1537,
    "第一分支": 1908,
    "第三段": 2107,
    "第二段": 1692,
    "第一段": 1568
  },
  "components": {
    "12": 2788,
    "11": 9575,
    "10": 9400,
    "9": 9466,
    "8": 9266,
    "7": 3419,
    "6": 2984,
    "5": 2739,
    "4": 2744,
    "3": 2466,
    "2": 3034,
    "1": 1945
  },
  "ie": 9743
};

var downloadJson = {
  "高压": 17365,
  "中压": 4079,
  "中低压": 6929,
  "次高压": 14890
}

var themeJson = {
  "设备故障": 1594,
  "压力超低": 925,
  "瞬时超高": 1608,
  "泄漏报警": 721,
  "计量校表": 2179,
  "压力超高": 1982
}

option = {
    tooltip: {
        
    },
    title: [{
        text: '分段输差',
        subtext: '总计 ' + builderJson.all,
        x: '25%',
        textAlign: 'center'
    }, {
        text: '波动',
        subtext: '总计 ' + Object.keys(downloadJson).reduce(function (all, key) {
            return all + downloadJson[key];
        }, 0),
        x: '75%',
        textAlign: 'center'
    }, {
        text: '故障返回占比',
        subtext: '总计 ' + Object.keys(themeJson).reduce(function (all, key) {
            return all + themeJson[key];
        }, 0),
        x: '75%',
        y: '50%',
        textAlign: 'center'
    }],
    grid: [{
        top: 50,
        width: '50%',
        bottom: '45%',
        left: 10,
        containLabel: true
    }, {
        top: '55%',
        width: '50%',
        bottom: 0,
        left: 10,
        containLabel: true
    }],
    xAxis: [{
        type: 'value',
        max: builderJson.all,
        splitLine: {
            show: false
        }
    }, {
        type: 'value',
        max: builderJson.all,
        gridIndex: 1,
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        type: 'category',
        data: Object.keys(builderJson.charts),
        axisLabel: {
            interval: 0,
            rotate: 30
        },
        splitLine: {
            show: false
        }
    }, {
        gridIndex: 1,
        type: 'category',
        data: Object.keys(builderJson.components),
        axisLabel: {
            interval: 0,
            rotate: 30
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        type: 'bar',
        stack: 'chart',
        z: 3,
        label: {
            normal: {
                position: 'right',
                show: true
            }
        },
        data: Object.keys(builderJson.charts).map(function (key) {
            return builderJson.charts[key];
        })
    }, {
        type: 'bar',
        stack: 'chart',
        silent: true,
        itemStyle: {
            normal: {
                color: '#eee'
            }  
        },
        data: Object.keys(builderJson.charts).map(function (key) {
            return builderJson.all - builderJson.charts[key];
        })
    }, {
        type: 'bar',
        stack: 'component',
        xAxisIndex: 1,
        yAxisIndex: 1,
        z: 3,
        label: {
            normal: {
                position: 'right',
                show: true
            }
        },
        data: Object.keys(builderJson.components).map(function (key) {
            return builderJson.components[key];
        })
    }, {
        type: 'bar',
        stack: 'component',
        silent: true,
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                color: '#eee'
            }  
        },
        data: Object.keys(builderJson.components).map(function (key) {
            return builderJson.all - builderJson.components[key];
        })
    }, {
        type: 'pie',
        radius: [0, '30%'],
        center: ['75%', '25%'],
        data: Object.keys(downloadJson).map(function (key) {
            return {
                name: key.replace('.js', ''),
                value: downloadJson[key]
            }
        })
    }, {
        type: 'pie',
        radius: [0, '30%'],
        center: ['75%', '75%'],
        data: Object.keys(themeJson).map(function (key) {
            return {
                name: key.replace('.js', ''),
                value: themeJson[key]
            }
        })
    }]
}