var mapYData = [];
var mapData = [{
        name: '北京',
        value: 53
    },
    {
        name: '天津',
        value: 38
    },
    {
        name: '上海',
        value: 46
    },
    {
        name: '重庆',
        value: 36
    },
    {
        name: '河北',
        value: 34
    },
    {
        name: '河南',
        value: 32
    },
    {
        name: '云南',
        value: 16
    },
    {
        name: '辽宁',
        value: 43
    },
    {
        name: '黑龙江',
        value: 41
    },
    {
        name: '湖南',
        value: 24
    },
    {
        name: '安徽',
        value: 33
    },
    {
        name: '山东',
        value: 30
    },
    {
        name: '新疆',
        value: 10
    },
    {
        name: '江苏',
        value: 39
    },
    {
        name: '浙江',
        value: 35
    },
    {
        name: '江西',
        value: 20
    },
    {
        name: '湖北',
        value: 21
    },
    {
        name: '广西',
        value: 30
    },
    {
        name: '甘肃',
        value: 12
    },
    {
        name: '山西',
        value: 32
    },
    {
        name: '内蒙古',
        value: 35
    },
    {
        name: '陕西',
        value: 25
    },
    {
        name: '吉林',
        value: 45
    },
    {
        name: '福建',
        value: 28
    },
    {
        name: '贵州',
        value: 18
    },
    {
        name: '广东',
        value: 37
    },
    {
        name: '青海',
        value: 6
    },
    {
        name: '西藏',
        value: 4
    },
    {
        name: '四川',
        value: 33
    },
    {
        name: '宁夏',
        value: 8
    },
    {
        name: '海南',
        value: 19
    }
];
var pieData = [];
for (var i = 0; i < mapData.length; i++) {
    mapYData.push(mapData[i].name);
    pieData.push({
        name: mapData[i].name,
        value: mapData[i].value
    })
}
console.log(pieData);
option = {
    grid: {
        show: false,
        top: '4%',
        left: '10%',
        right: '8%',
        bottom: 0,
    },
    xAxis: {
        type: 'value',
        position: 'top',
        name: '家',
        boundaryGap: [0, '20%'],
        nameTextStyle: {
            fontSize: 14,
            color: '#727272',
        },
        axisLabel: {
            fontSize: 14,
            color: '#727272',
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#333333',
                opacity: 0.35,
            }
        },
        axisTick: {
            inside: true,
            lineStyle: {
                color: '#333333',
                opacity: 0.35,
            }
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        interval: 0,
        inverse: true,
        data: mapYData,
        axisLabel: {
            fontSize: 14,
            color: '#727272',
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#333333',
                opacity: 0.35,
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [{
        name: 'bar',
        type: 'bar',
        data: mapData,
        barWidth: 20,
        barCategoryGap: 20,
        label: {
            show: true,
            position: 'right',
            offset: [18, 0],
            formatter: '{c}',
            fontSize: 14,
            color: '#4A4A4A',
        },
        itemStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x1: 0,
                y1: 1,
                colorStops: [{
                    offset: 0,
                    color: 'rgb(61 129 247 / 0.17)'
                }, {
                    offset: 1,
                    color: '#3D81F7'
                }],
                global: false
            }
        },
    }, {
        type: 'pictorialBar',
        data: pieData,
        itemStyle: {
            color: '#3D81F7',
        },
        emphasis: {
            itemStyle: {
                color: '#3D81F7',
            }
        },
        symbol: 'triangle',
        symbolSize: [20, 20],
        symbolPosition: 'end',
        symbolRotate: -90,
        symbolOffset: [19.5, 0],
        animation: true,
        animationEasing: 'linear',
        animationDelay: function(idx) {
            return idx * 30;
        }
    }]
};