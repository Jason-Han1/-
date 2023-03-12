/*
    @songcxa
    @2017/9/8
    @方便使用，暂存
    @多彩柱形图
    @qq546803970
*/

var data = [20, 32, 11, 65, 25, 50, 21];
var xMax = 100;
var option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a}<br />{b}: {c}%',
        "axisPointer": {
            "type": "none"
        },
    },
    yAxis: [{
        type: 'value',
        show: false
    }],
    xAxis: [{
        type: 'category',
        data: [
            '自驾车', '公交','出租车', '快车&专车', '步行', '自行车&电动车', '摩托车'
        ],
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
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
        name: '出行方式',
        type: 'bar',
        stack: '总量',
        z: 3,
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
                    position: 'top',
                    formatter: function(p) {
                        return p.value > 0 ? (p.value + '%') : '';
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
                borderWidth: 0.3,
                color: 'transparent',
                borderColor: '#49698f',
                barBorderRadius: 50,
                "label": {
                    "show": true,
                    "textStyle": {
                        "color": "rgba(0,0,0,1)"
                    },
                    "position": "top",
                    formatter: function(p) {
                        return data[p.dataIndex] + "%";
                    }
                }
            }
        },
        data: data.map(function(d) {
            return xMax
        }),
    }, ]
};