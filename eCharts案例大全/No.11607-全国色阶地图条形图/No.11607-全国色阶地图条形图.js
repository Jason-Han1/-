//数据纯属虚构
var data = [{
        name: '广州',
        value: 5.3
    },
    {
        name: '深圳',
        value: 3.8
    },
    {
        name: '珠海',
        value: 4.6
    },
    {
        name: '汕头',
        value: 3.6
    },
    {
        name: '佛山',
        value: 3.4
    },
    {
        name: '韶关',
        value: 3.2
    },
    {
        name: '湛江',
        value: 1.6
    },
    {
        name: '肇庆',
        value: 4.3
    },
    {
        name: '江门',
        value: 4.1
    },
    {
        name: '茂名',
        value: 2.4
    },
    {
        name: '惠州',
        value: 3.3
    },
    {
        name: '梅州',
        value: 3.0
    },
    {
        name: '汕尾',
        value: 1
    },
    {
        name: '河源',
        value: 3.9
    },
    {
        name: '阳江',
        value: 3.5
    },
    {
        name: '清远',
        value: 2.0
    },
    {
        name: '东莞',
        value: 2.1
    },
    {
        name: '中山',
        value: 3.0
    },
    {
        name: '潮州',
        value: 1.2
    },
    {
        name: '揭阳',
        value: 3.2
    },
    {
        name: '云浮',
        value: 3.5
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
        text: '全国色阶地图条形图',
        textStyle: {
            fontSize: 30
        },
        x: 'center'
    },
    tooltip: {
        show: true,
        formatter: function(params) {
            return params.name + '：' + params.data['value'] + '%'
        },
    },
    visualMap: {
        type: 'continuous',
        text: ['', ''],
        showLabel: true,
        seriesIndex: [0],
        min: 0,
        max: 7,
        inRange: {
            color: ['#edfbfb', '#b7d6f3', '#40a9ed', '#3598c1', '#215096', ]
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
        right:'300',
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
                        show: false
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