//数据纯属虚构
var data = [{
        name: '北京',
        value: 5.3
    },
    {
        name: '天津',
        value: 3.8
    },
    {
        name: '上海',
        value: 4.6
    },
    {
        name: '重庆',
        value: 3.6
    },
    {
        name: '河北',
        value: 3.4
    },
    {
        name: '河南',
        value: 3.2
    },
    {
        name: '云南',
        value: 1.6
    },
    {
        name: '辽宁',
        value: 4.3
    },
    {
        name: '黑龙江',
        value: 4.1
    },
    {
        name: '湖南',
        value: 2.4
    },
    {
        name: '安徽',
        value: 3.3
    },
    {
        name: '山东',
        value: 3.0
    },
    {
        name: '新疆',
        value: 1
    },
    {
        name: '江苏',
        value: 3.9
    },
    {
        name: '浙江',
        value: 3.5
    },
    {
        name: '江西',
        value: 2.0
    },
    {
        name: '湖北',
        value: 2.1
    },
    {
        name: '广西',
        value: 3.0
    },
    {
        name: '甘肃',
        value: 1.2
    },
    {
        name: '山西',
        value: 3.2
    },
    {
        name: '内蒙古',
        value: 3.5
    },
    {
        name: '陕西',
        value: 2.5
    },
    {
        name: '吉林',
        value: 4.5
    },
    {
        name: '福建',
        value: 2.8
    },
    {
        name: '贵州',
        value: 1.8
    },
    {
        name: '广东',
        value: 3.7
    },
    {
        name: '青海',
        value: 0.6
    },
    {
        name: '西藏',
        value: 0.4
    },
    {
        name: '四川',
        value: 3.3
    },
    {
        name: '宁夏',
        value: 0.8
    },
    {
        name: '海南',
        value: 1.9
    },
    {
        name: '台湾',
        value: 0.1
    },
    {
        name: '香港',
        value: 0.1
    },
    {
        name: '澳门',
        value: 0.1
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