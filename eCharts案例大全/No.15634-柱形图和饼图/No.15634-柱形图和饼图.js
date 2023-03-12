var builderJson = {
  "all": 32156,
  "charts": {
    "bar": 22612,
    "line": 23476,
    "pie": 21905,
    "lines": 5515,
    "scatter": 6058,
    "candlestick": 5144,
    "radar": 5659,
    "heatmap": 4451,
    "treemap": 4068,
    "map": 8774,
    "graph": 5246,
    "boxplot": 3881,
    "parallel": 4995,
    "gauge": 5352,
    "funnel": 4253,
    "sankey": 4077
  },
  "components": {
    "grid": 27495,
    "title": 27837,
    "legend": 27288,
    "tooltip": 27763,
    "polar": 4886,
    "geo": 7501,
    "singleAxis": 4648,
    "markPoint": 9280,
    "markLine": 8052,
    "markArea": 7026,
    "timeline": 6742,
    "dataZoom": 7145,
    "brush": 5443,
    "visualMap": 5986,
    "toolbox": 7593,
    "graphic": 704
  },
  "ie": 28022
};

var downloadJson = {
  "echarts.min.js": 41934,
  "echarts.simple.min.js": 11908,
  "echarts.common.min.js": 18612,
  "echarts.js": 53093
}

var themeJson = {
  "dark.js": 5328,
  "vintage.js": 4956,
  "macarons.js": 6792,
  "infographic.js": 2808,
  "shine.js": 5001,
  "roma.js": 2322
};

option = {
    tooltip: {
        
    },
    title: [{
        text: '在线构建',
        subtext: '总计 ' + builderJson.all,
        x: '25%',
        textAlign: 'center'
    }, {
        text: '各版本下载',
        subtext: '总计 ' + Object.keys(downloadJson).reduce(function (all, key) {
            return all + downloadJson[key];
        }, 0),
        x: '75%',
        textAlign: 'center'
    }, {
        text: '主题下载',
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