//数据纯属虚构
var data = [{
        'name': '北京',
        'value': 30319.98
    },
    {
        'name': '天津',
        'value': 18809.64
    },
    {
        'name': '河北',
        'value': 36010.27
    },
    {
        'name': '山西',
        'value': 16818.11
    },
    {
        'name': '内蒙古',
        'value': 17289.22
    },
    {
        'name': '辽宁',
        'value': 25315.35
    },
    {
        'name': '吉林',
        'value': 15074.62
    },
    {
        'name': '黑龙江',
        'value': 16361.62
    },
    {
        'name': '上海',
        'value': 32679.87
    },
    {
        'name': '江苏',
        'value': 92595.4
    },
    {
        'name': '浙江',
        'value': 56197.15
    },
    {
        'name': '安徽',
        'value': 30006.82
    },
    {
        'name': '福建',
        'value': 35804.04
    },
    {
        'name': '江西',
        'value': 21984.78
    },
    {
        'name': '山东',
        'value': 76469.67
    },
    {
        'name': '河南',
        'value': 48055.86
    },
    {
        'name': '湖北',
        'value': 39366.55
    },
    {
        'name': '湖南',
        'value': 36425.78
    },
    {
        'name': '广东',
        'value': 97277.77
    },
    {
        'name': '广西',
        'value': 20352.51
    },
    {
        'name': '海南',
        'value': 4832.05
    },
    {
        'name': '重庆',
        'value': 20363.19
    },
    {
        'name': '四川',
        'value': 40678.13
    },
    {
        'name': '贵州',
        'value': 14806.45
    },
    {
        'name': '云南',
        'value': 17881.12
    },
    {
        'name': '西藏',
        'value': 1477.63
    },
    {
        'name': '陕西',
        'value': 24438.32
    },
    {
        'name': '甘肃',
        'value': 8246.07
    },
    {
        'name': '青海',
        'value': 2865.23
    },
    {
        'name': '宁夏',
        'value': 3705.18
    },
    {
        'name': '新疆',
        'value': 12199.08
    }
];

var yData = [];

data.sort(function(o1, o2) {
    if (isNaN(o1.value) || o1.value == null) return -1;
    if (isNaN(o2.value) || o2.value == null) return 1;
    return o1.value - o2.value;
});

for (var i = 0; i < data.length; i++) {
    yData.push(data[i].name);
}

var option = {
    title: {
        text: '中国生产总值色阶图',
        textStyle: {
            fontSize: 30
        },
        x: 'center'
    },
    tooltip: {
        show: true,
        formatter: function(params) {
            return params.name + '：' + params.data['value']
        },
    },
    visualMap: {
        type: 'continuous',
        text: ['', ''],
        showLabel: true,
        seriesIndex: [0],
        min: 1000,
        max: 100000,
        inRange: {
            color: ['#F4ECF7','#4A235A']
        },
        textStyle: {
            color: '#000'
        },
        bottom: 30,
        left: 'left',
    },
    grid: {
        right: 10,
        top: 80,
        bottom: 30,
        width: '20%'
    },
    xAxis: {
        type: 'value',
        scale: true,
        position: 'top',
        splitNumber: 1,
        boundaryGap: false,
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
            margin: 2,
            textStyle: {
                color: '#aaa'
            }
        }
    },
    yAxis: {
        type: 'category',
        nameGap: 16,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#999'
            }
        },
        data: yData
    },
    geo: {
        roam: true,
        map: 'china',
        left: 'left',
        right: '300',
        layoutSize: '80%',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                areaColor: '#fff464'
            }
        },
        regions: [{
            name: '南海诸岛',
            value: 0,
            itemStyle: {
                normal: {
                    opacity: 0,
                    label: {
                        show: true
                    }
                }
            }
        }],
    },
    series: [{
        name: 'mapSer',
        type: 'map',
        roam: false,
        geoIndex: 0,
        label: {
            show: false,
        },
        data: data
    }, {
        name: 'barSer',
        type: 'bar',
        roam: false,
        visualMap: false,
        zlevel: 2,
        barMaxWidth: 20,
        itemStyle: {
            normal: {
                color: '#40a9ed'
            },
            emphasis: {
                color: "#3596c0"
            }
        },
        label: {
            normal: {
                show: false,
                position: 'right',
                offset: [0, 10]
            },
            emphasis: {
                show: true,
                position: 'right',
                offset: [10, 0]
            }
        },
        data: data
    }]
};