var zhengzhou = '/asset/get/s/data-1620445221286-11-rx7NZ8.json';

//引入市区json文件

myChart.showLoading();
$.getJSON(zhengzhou, function (geoJson) {
    echarts.registerMap('china', geoJson);
    myChart.hideLoading();
    //地理位置信息
    var geoCoordMap = {
        中原区: [113.546928, 34.780838],
        二七区: [113.594642, 34.678253],
        管城区: [113.75524,34.696862],
        金水区: [113.743791, 34.810784],
        上街区: [113.284108, 34.788622],
        惠济区: [113.621348, 34.891176],
        中牟县: [114.004302, 34.713431],
        巩义市: [113.033328, 34.697267],
        荥阳市: [113.358941, 34.796495],
        新密市: [113.433255, 34.508082],
        新郑市: [113.729471, 34.453334],
        登封市: [113.035049, 34.412311],
    };
    //数据信息
    var data = [
        { name: '中原区', value: 2000 },
        { name: '二七区', value: 1000 },
        { name: '管城区', value: 1000},
        { name: '金水区', value: 1000 },
        { name: '上街区', value: 1000 },
        { name: '惠济区', value: 1000 },
        { name: '中牟县', value: 1000 },
        { name: '巩义市', value: 1000 },
        { name: '荥阳市', value: 1000 },
        { name: '新密市', value: 1000 },
        { name: '新郑市', value: 1000 },
        { name: '登封市', value: 1000 },
    ];
    var max = 480,
        min = 9; // todo
    var maxSize4Pin = 100,
        minSize4Pin = 20;

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                });
            }
        }
        return res;
    };

    option = {
        backgroundColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
                {
                    offset: 0,
                    color: '#0f378f', // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: '#00091a', // 100% 处的颜色
                },
            ],
            globalCoord: false,
        },
        title: {
            top: 20,
            text: '延时课堂区域分布 - 郑州市',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#fff',
            },
        },

        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                if (typeof params.value[2] == 'undefined') {
                    return params.name + ' : ' + params.value;
                } else {
                    return params.name + ' : ' + params.value[2];
                }
            },
        },
        /*   legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
             data:['pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },*/
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['pm2.5'],
            textStyle: {
                color: '#fff',
            },
        },
        visualMap: {
            show: false,
            min: 0,
            max: 500,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [1],
            inRange: {},
        },
        geo: {
            map: 'china',
            show: true,
            roam: true,
            center: [113.594642, 34.678253],
            zoom: 20, //当前视角缩放比例
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                },
            },
            itemStyle: {
                normal: {
                    areaColor: '#3a7fd5',
                    borderColor: '#0a53e9', //线
                    shadowColor: '#092f8f', //外发光
                    shadowBlur: 20,
                },
                emphasis: {
                    areaColor: '#0a2dae', //悬浮区背景
                },
            },
        },
        series: [
            {
                symbolSize: 5,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true,
                    },
                    emphasis: {
                        show: true,
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#fff',
                    },
                },
                name: 'light',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
            },
            {
                type: 'map',
                map: 'china',
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff',
                        },
                    },
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#FFFFFF',
                    },
                    emphasis: {
                        areaColor: '#2B91B7',
                    },
                },
                animation: false,
                data: data,
            },
            {
                name: 'Top 5',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin',
                symbolSize: [50, 50],
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: 'transparent',
                            fontSize: 9,
                        },
                        formatter(value) {
                            return value.data.value[2];
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: 'transparent', //标志颜色改为透明
                    },
                },
                data: convertData(data),
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke',
                },
                hoverAnimation: true,
                zlevel: 1,
            },
        ],
    };
    myChart.setOption(option);
});
