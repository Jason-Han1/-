var data1 = {
    "pkjtrjsr": [{
            "name": "一等库",
            "value": 21
        },
        {
            "name": "二等库",
            "value": 37
        },
        {
            "name": "三等库",
            "value": 21
        },
        {
            "name": "四等库",
            "value": 22
        },
        {
            "name": "五等库",
            "value": 22
        }
    ],
    "echartsdata": [{
            "value": 20
        },
        {
            "value": 25
        },
        {
            "value": 15
        },
        {
            "value": 20
        },
        {
            "value": 10
        }
    ]
};
var center = ['50%', '50%'];
//外圈环状图
var scaledata = data1.pkjtrjsr;
var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'transparent',
        borderColor: 'transparent',
        borderWidth: 0
    }
};
var v = 1;
var colors = ['#22ff5b', '#00d6fe', '#fff45c', '#fc8a4b', '#ff5469'];
var data = [];

$.each(scaledata, function(index, item) {
    data.push({
        value: item.value,
        name: item.name,
        label: {
            normal: {
                formatter: '{b}{c}',
                color: '#c4feff',
                fontSize: 18
            }
        },
        itemStyle: {
            normal: {
                color: colors[index]
            }
        }
    }, {
        value: v,
        name: '',
        itemStyle: placeHolderStyle
    });
});
//里面南丁格尔图
var dataArray = [];
var colorArray = [{
        color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                offset: 0,
                color: '#ff5469'
            },
            {

                offset: 1,
                color: '#ff8582'
            }
        ])
    },
    {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                offset: 0,
                color: '#fc8a4b'
            },
            {

                offset: 1,
                color: '#fc8a4b'
            }
        ])
    },
    {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                offset: 0,
                color: '#fff45c'
            },
            {

                offset: 1,
                color: '#fff45c'
            }
        ])
    },
    {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                offset: 0,
                color: '#00d6fe'
            },
            {

                offset: 1,
                color: '#00f0fe'
            }
        ])
    },
    {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                offset: 0,
                color: '#22ff5b'
            },
            {

                offset: 1,
                color: '#60ffb5'
            }
        ])
    },
];
$.each(data1.echartsdata, function(index, item) {
    dataArray.push({
        value: item.value,
        itemStyle: {
            normal: {
                color: colorArray[index]['color']
            }
        }
    })
});
var option = {
    grid: {
        // top:50,
    },
    tooltip: {
        show: true
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    angleAxis: {
        interval: 1,
        type: 'category',
        data: [],
        z: 10,
        axisLine: {
            show: true,
            lineStyle: {
                color: "#595e71",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            show: false
        },
    },
    radiusAxis: {
        min: 0,
        max: 100,
        interval: 20,
        axisLine: {
            show: true,
            lineStyle: {
                color: "#595e71",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: "#595e71",
                width: 1,
                type: "solid"
            }
        }
    },
    polar: {
        center: center,
        radius: '40%'
    },
    series: [
        //环图
        {
            type: 'pie',
            clockWise: true,
            center: center,
            radius: ['68%', '70%'],
            hoverAnimation: false,
            startAngle: 162,
            itemStyle: {
                shadowBlur: 12,
                shadowColor: 'rgba(224,255,163,0.4)'
            },
            labelLine: {
                show: false,
                length: 3,
                length2: 3
            },
            data: data
        },
        //南丁格尔图
        {
            type: 'pie',
            radius: ['9%', '35%'],
            center: center,
            roseType: 'area',
            clockwise: false,
            selectedMode: 'single',
            label: {
                normal: {
                    formatter: '{d}%',
                    color: '#c4feff',
                    fontSize: 16
                }
            },
            labelLine: {
                show: false,
                length: 3,
                length2: 3
            },
            emphasis: {
                itemStyle: {
                    shadowColor: '#65d6fb',
                    shadowBlur: 50
                }
            },
            data: dataArray
        }
    ]
};