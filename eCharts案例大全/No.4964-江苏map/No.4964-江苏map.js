// var uploadedDataURL2 = "/asset/get/s/data-1602571749507-Ot_4cDkXj.json";
var uploadedDataURL = "/asset/get/s/data-1592366734603-Z-iQwIHJk.json";
var center = {
    "南京市": [118.767413, 32.041544],
    "无锡市": [120.301663, 31.574729],
    "徐州市": [117.184811, 34.261792],
    "常州市": [119.946973, 31.772752],
    "苏州市": [120.619585, 31.299379],
    "南通市": [120.864608, 32.216212],
    "连云港市": [119.178821, 34.600018],
    "淮安市": [119.021265, 33.597506],
    "盐城市": [120.139998, 33.377631],
    "扬州市": [119.421003, 32.393159],
    "镇江市": [119.352753, 32.004402],
    "泰州市": [120.015176, 32.484882],
    "宿迁市": [118.275162, 33.963008]
}
var center2 = {
    "南京市": [118.667413, 31.841544],
    "无锡市": [120.201663, 31.474729],
    "徐州市": [117.584811, 34.261792],
    "常州市": [119.646973, 31.672752],
    "苏州市": [120.419585, 31.099379],
    "南通市": [120.964608, 32.116212],
    "连云港市": [118.978821, 34.500018],
    "淮安市": [119.121265, 33.497506],
    "盐城市": [120.239998, 33.277631],
    "扬州市": [119.321003, 32.693159],
    "镇江市": [119.452753, 31.954402],
    "泰州市": [120.015176, 32.384882],
    "宿迁市": [118.375162, 33.863008]
}
var data = [{
        name: '南京市',
        value: 1111
    },
    {
        name: '无锡市',
        value: (Math.random() * 1000 + 1000).toFixed(0)
    },
    {
        name: '徐州市',
        value: (Math.random() * 1000 + 1000).toFixed(0)
    },
    {
        name: '常州市',
        value: (Math.random() * 1000 + 1000).toFixed(0)
    },
    {
        name: '苏州市',
        value: (Math.random() * 1000 + 1000).toFixed(0)
    },
    {
        name: '南通市',
        value: (Math.random() * 1000 + 1000).toFixed(0)
    },
    {
        name: '连云港市',
        value: (Math.random() * 1000 + 1000).toFixed(0)
    },
    {
        name: '淮安市',
        value: (Math.random() * 1000 + 1000).toFixed(0)
    },
    {
        name: '盐城市',
        value: (Math.random() * 1000 + 1000).toFixed(0)
    },
    {
        name: '扬州市',
        value: (Math.random() * 1000 + 1000).toFixed(0)
    },
    {
        name: '镇江市',
        value: (Math.random() * 1000 + 1000).toFixed(0)
    },
    {
        name: '泰州市',
        value: (Math.random() * 1000 + 1000).toFixed(0)
    },
    {
        name: '宿迁市',
        value: (Math.random() * 1000 + 1000).toFixed(0)
    },
]
var lineData = data.map(item => {
    return {
        coords: [
            center[item.name],
            [center[item.name][0], center[item.name][1] + item.value * 0.0001]
        ]
    }
})
var scatterData = data.map(item => {
    return [center[item.name][0], center[item.name][1] + item.value * 0.0001]
})
// var scatterData2 = data.map(item => {
//     return center[item.name]
// })
var scatterData3 = data.map(item => {
    return center2[item.name].concat(item.name)
})
// $.get(uploadedDataURL2, function(json) {
//     echarts.registerMap('js2', json);
// })
$.get(uploadedDataURL, function(json) {
    echarts.registerMap('js', json);
    option = {
        // backgroundColor: '#333',
        geo: [{
            map: 'js',
            aspectScale: 0.9,
            roam: false, //是否允许缩放
            //zoom: 1.1, //默认显示级别
            layoutSize: '95%',
            layoutCenter: ['50%', '50%'],
            itemStyle: {
                areaColor: 'transparent',
                borderColor: '#fff',
                areaColor: '#30B07E',// 区域颜色
                borderWidth: 0.1,
            },
            emphasis: { // 高亮时
                itemStyle: {
                    areaColor: '#69EDB7'
                },
                label: {
                    show: 0,
                    color: '#4cd964'
                }
            },
            zlevel: 3,
        }],
        series: [{
            type: 'scatter',
            coordinateSystem: 'geo',
            geoIndex: 0,
            zlevel: 5,
            label: {
                show: !0,
                position: 'top',
                formatter: params => data[params.dataIndex].value,
                padding: [4, 10],
                offset: [0, -4],
                backgroundColor: '#fff',
                borderRadius: 5,
                borderColor: '#999',
                borderWidth: 1,
                color: '#000'
            },
            symbol: 'circle',
            symbolSize: [1, 1],
            itemStyle: {
                color: '#FEF03B',
                opacity: 1
            },
            silent: true,
            data: scatterData3
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            geoIndex: 0,
            symbol: 'circle',
            symbolSize: 2,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'fill',
                scale: 10
            },
            hoverAnimation: true,
            label: {
                formatter: p => p.data[2],
                position: 'bottom',
                color: '#fff',
                fontSize: 14,
                distance: 10,
                show: !0,
            },
            itemStyle: {
                color: '#fff',
            },
            zlevel: 6,
            data: scatterData3
        }]
    };
    myChart.setOption(option);
});