var uploadedDataURL2 = "/asset/get/s/data-1602571749507-Ot_4cDkXj.json";
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
var data = [
    {name: '南京市', value: (Math.random()*1000+1000).toFixed(0)},
    {name: '无锡市', value: (Math.random()*1000+1000).toFixed(0)},
    {name: '徐州市', value: (Math.random()*1000+1000).toFixed(0)},
    {name: '常州市', value: (Math.random()*1000+1000).toFixed(0)},
    {name: '苏州市', value: (Math.random()*1000+1000).toFixed(0)},
    {name: '南通市', value: (Math.random()*1000+1000).toFixed(0)},
    {name: '连云港市', value: (Math.random()*1000+1000).toFixed(0)},
    {name: '淮安市', value: (Math.random()*1000+1000).toFixed(0)},
    {name: '盐城市', value: (Math.random()*1000+1000).toFixed(0)},
    {name: '扬州市', value: (Math.random()*1000+1000).toFixed(0)},
    {name: '镇江市', value: (Math.random()*1000+1000).toFixed(0)},
    {name: '泰州市', value: (Math.random()*1000+1000).toFixed(0)},
    {name: '宿迁市', value: (Math.random()*1000+1000).toFixed(0)},
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
var scatterData2 = data.map(item => {
    return center[item.name]
})
var scatterData3 = data.map(item => {
    return center2[item.name].concat(item.name)
})
$.get(uploadedDataURL2, function(json) {
    echarts.registerMap('js2', json);
})
$.get(uploadedDataURL, function(json) {
    echarts.registerMap('js', json);
    option = {
        backgroundColor: '#333',
        geo: [{
            map: 'js',
            aspectScale: 0.9,
            roam: false, //是否允许缩放
            //zoom: 1.1, //默认显示级别
            layoutSize: '95%',
            layoutCenter: ['50%', '50%'],
            itemStyle: {
                areaColor: 'transparent',
                borderColor: '#37C1FD',
                borderWidth: 2,
            },
            emphasis: {
                itemStyle: {
                    areaColor: '#0160AD'
                },
                label: {
                    show: 0,
                    color: '#fff'
                }
            },
            zlevel: 3,
        }, {
            map: 'js2',
            aspectScale: 0.9,
            roam: false, //是否允许缩放
            //zoom: 1.1, //默认显示级别
            layoutSize: '95%',
            layoutCenter: ['50%', '50%'],
            itemStyle: {
                areaColor: {
                    type: 'radial',
                    x: 0.7,
                    y: 0.5,
                    r: 0.4,
                    colorStops: [{
                        offset: 0,
                        color: '#56CCFB' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#0160AD' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                borderColor: '#37C1FD',
                borderWidth: 2,
            },
            zlevel: 2,
            silent: true,
        }, {
            map: 'js2',
            aspectScale: 0.9,
            roam: false, //是否允许缩放
            //zoom: 1.1, //默认显示级别
            layoutSize: '95%',
            layoutCenter: ['50%', '52%'],
            itemStyle: {
                areaColor: '#005DDC',
                borderColor: '#329BF5',
                borderWidth: 1,
            },
            zlevel: 1,
            silent: true,
        }, ],
        series: [{
            type: 'lines',
            zlevel: 5,
            effect: {
                show: false,
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 5, //图标大小
            },
            lineStyle: {
                width: 15, //尾迹线条宽度
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#F09B0A' // 0% 处的颜色
                    }, {
                        offset: 0.2,
                        color: '#F09B0A' // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: '#FEF03B' // 0% 处的颜色
                    }, {
                        offset: 0.7,
                        color: '#FEF03B' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#F09B0A' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                opacity: 1, //尾迹线条透明度
                curveness: 0 //尾迹线条曲直度
            },
            label: {
                show: 0,
                position: 'end',
                formatter: '245'
            },
            silent: true,
            data: lineData
        }, {
            type: 'scatter',
            coordinateSystem: 'geo',
            geoIndex: 0,
            zlevel: 5,
            label: {
                show: !0,
                position: 'right',
                formatter: params => data[params.dataIndex].value,
                padding: [4, 8],
                backgroundColor: '#003F5E',
                borderRadius: 5,
                borderColor: '#67F0EF',
                borderWidth: 1,
                color: '#67F0EF'
            },
            symbol: 'circle',
            symbolSize: [15, 8],
            itemStyle: {
                color: '#FEF03B',
                opacity: 1
            },
            silent: true,
            data: scatterData
        }, {
            type: 'scatter',
            coordinateSystem: 'geo',
            geoIndex: 0,
            zlevel: 5,
            symbol: 'circle',
            symbolSize: [15, 8],
            itemStyle: {
                color: '#F09B0A',
                opacity: 1,
                shadowColor: '#000',
                shadowBlur: 5,
                shadowOffsetY: 2,
            },
            silent: true,
            data: scatterData2
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            geoIndex: 0,
            symbol: 'circle',
            symbolSize: 4,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'fill',
                scale: 10
            },
            hoverAnimation: true,
            label: {
                formatter: p => p.data[2],
                position: 'right',
                color: '#fff',
                fontSize: 14,
                distance: 10,
                show: !0,
            },
            itemStyle: {
                color: '#FEF134',
            },
            zlevel: 6,
            data: scatterData3
        }]
    };
    myChart.setOption(option);
});