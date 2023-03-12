var builderJson = {
  "charts": {
    "积极情绪": 63.11,
    "消极情绪": 29.14,
    "中性情绪": 7.75
  },
  "components": {
    "积极情绪": 65.12,
    "消极情绪": 27.26,
    "中性情绪": 7.62
  },
};

var downloadJson = {
  "积极情绪": 63.11,
  "消极情绪": 29.14,
  "中性情绪": 7.75
}

var themeJson = {
  "积极情绪": 65.12,
  "消极情绪": 27.26,
  "中性情绪": 7.62
}

option = {
    tooltip: {
        
    },
    title: [{
        text: '上海踩踏事件网民情绪分布',
        x: '25%',
        textAlign: 'center'
    }, {
        text: '深圳滑坡事件网民情绪分布', 
        x: '25%',
        y: '50%',
        textAlign: 'center'
    },{
        text: '上海踩踏事件不同情绪分布图',
        x: '75%',
        textAlign: 'center'
    }, {
        text: '深圳滑坡事件不同情绪分布图',
        x: '75%',
        y: '50%',
        textAlign: 'center'
    }],
    grid: [{
        top: 50,
        width: '50%',
        bottom: '55%',
        left: 10,
        containLabel: true
    }, {
        top: '55%',
        width: '50%',
        bottom: '10%',
        left: 10,
        containLabel: true
    }],
    xAxis: [{
        type: 'value',
        max: 100,
        splitLine: {
            show: false
        }
    }, {
        type: 'value',
        max: 100,
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