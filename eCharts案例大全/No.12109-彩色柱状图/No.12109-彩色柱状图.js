var data = [20, 32, 11, 65, 25, 50, 21];
var xMax = 100;
var option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a}<br />{b}: {c}',
        "axisPointer": {
            "type": "none"
        },
    },
            grid: {
           top: '5%',
           left: '3%',
           right: '4%',
           bottom: '5%',
           containLabel: true
         },
    yAxis: [{
        type: 'category',
        show: true,
        data: [
            '一', '二', '三', '四', '五', '六', '七'
        ],
        axisLine: {
            show: false,
        },
        "axisTick": { //y轴刻度线
            "show": false
        },
        splitLine: {
            show: false
        },
    }],
    xAxis: [{
        type: 'value',
        //  position:'top',
        show: false,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            rotate: 0,
            textStyle: {
                color: '#737373'
            }
        }
    }],
    series: [{
        name: '星期',
        type: 'bar',
        stack: '',
        z: 1,
        barWidth: '16%',
        data: [20, 32, 11, 65, 25, 50, 21],
        itemStyle: {
            normal: {
                barBorderRadius: 20,
                color: function(params) {
                    // build a color map as your need.
                    var colorList = [
                        '#f44120', '#fd7b09', '#ffbf37', '#f2ff36', '#4fae36',
                        '#308cef', '#4c41cc'
                    ];
                    return colorList[params.dataIndex]
                },
                "label": {
                    "show": false,
                    "textStyle": {
                        "color": "rgba(0,0,0,1)"
                    },
                    position: 'right',
                    formatter: function(p) {
                        return p.value > 0 ? (p.value) : '';
                    }
                }
            }
        }
    }, {
        name: '占位',
        type: 'bar',
        barWidth: '25%',
        barGap: '-124%',
        silent: true,
        itemStyle: {
            normal: {
                borderWidth: 0.4,
                color: 'transparent',
                borderColor: '#49698f',
                barBorderRadius: 50,
                "label": {
                    "show": true,
                    "textStyle": {
                        "color": "rgba(0,0,0,1)"
                    },
                    "position": "right",
                    formatter: function(p) {
                        return data[p.dataIndex];
                    }
                }
            }
        },
        data: data.map(function(d) {
            return xMax
        }),
    }, ]
};