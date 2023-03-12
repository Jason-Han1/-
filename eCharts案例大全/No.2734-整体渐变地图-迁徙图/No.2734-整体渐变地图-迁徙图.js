var datasJSON = "/asset/get/s/data-1626235059731-_1Z3kz9Wj.json";

var mapJSON = '/asset/get/s/data-1626233214001-gxlJKZykZ.json';

var mapOuterJSON = '/asset/get/s/data-1626233206360-0r-gjDCUj.json';
var centerImgBG = '',
    centerImgIcon = '',
    centerDatas;
$.get(datasJSON, function (res) {
    centerImgBG = res.centerImgBG;
    centerImgIcon = res.centerImgIcon;
    centerDatas = res.mapData;
});
var geoCoordMap = {};
var mapDatas = [];
var fromData = {
    center: [118.1064, 29.0004],
    name: '市外',
};
var fromImgBg = centerImgBG;
var fromImgIcon = centerImgIcon;
var series = [
    {
        type: 'scatter',
        coordinateSystem: 'geo',
        zlevel: 3,
        label: {
            show: false,
        },
        symbol: 'image://' + fromImgBg,
        symbolSize: [196, 196],
        itemStyle: {
            normal: {
                show: false,
                color: '#34c6bb',
            },
        },
        data: [{ name: fromData.name, value: fromData.center }],
    },
    {
        type: 'scatter',
        coordinateSystem: 'geo',
        zlevel: 3,
        label: {
            show: true,
            position: 'inside',
            color: '#fff',
            fontSize: 36,
            fontWeight: 'bold',
            formatter: function (params) {
                return fromData.name;
            },
        },
        symbol: 'image://' + fromImgIcon,
        symbolSize: [118, 86],
        itemStyle: {
            normal: {
                show: false,
                color: '#34c6bb',
            },
        },
        data: [{ name: fromData.name, value: fromData.center }],
    },
];
$.each(centerDatas, function (i, item) {
    geoCoordMap[item.name] = item.center;
    mapDatas.push([item]);
});

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = fromData.center;
        if (fromCoord && toCoord) {
            res.push([
                {
                    coord: toCoord,
                },
                {
                    coord: fromCoord,
                    value: dataItem[0].value,
                },
            ]);
        }
    }
    return res;
};
[[fromData.name, mapDatas]].forEach(function (item, i) {
    series.push(
        {
            type: 'lines',
            zlevel: 3,
            effect: {
                show: true,
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.1, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 5, //图标大小
                // color:'#fff'
            },
            lineStyle: {
                normal: {
                    color: '#00FFF6',
                    width: 1, //尾迹线条宽度
                    opacity: 1, //尾迹线条透明度
                    curveness: 0.3, //尾迹线条曲直度
                },
            },
            data: convertData(item[1]),
        },
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 4,
            rippleEffect: {
                period: 4, //动画时间，值越小速度越快
                brushType: 'stroke', //波纹绘制方式 stroke, fill
                scale: 4, //波纹圆环最大限制，值越大波纹越大
            },
            label: {
                normal: {
                    show: true,
                    position: 'bottom', //显示位置
                    color: '#fff',
                    fontSize: 16,
                    offset: [0, 0], //偏移设置
                    formatter: function (params) {
                        //圆环显示文字
                        console.log(params);
                        return [params.data.name, params.data.value[2] + '/' + (params.data.value[3].total || 0)].join(
                            '\n'
                        );
                    },
                    fontSize: 13,
                },
                emphasis: {
                    show: true,
                },
            },
            symbol: 'circle',
            symbolSize: function (val) {
                return 5 + val[2] * 5; //圆环大小
            },
            itemStyle: {
                normal: {
                    color: '#00FFF6',
                },
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[0].name,
                    value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value, dataItem[0]]),
                };
            }),
        }
    );
});
$.get(mapOuterJSON, function (json) {
    echarts.registerMap('lsMap2', json);
});
$.get(mapJSON, function (json) {
    echarts.registerMap('lsMap', json);
    option = {
        backgroundColor: 'transparent',
        geo: [
            {
                boundingCoords: [
                    // 定位左上角经纬度
                    [118.1964, 29.3104],
                    // 定位右下角经纬度
                    [120.4706, 27.3864],
                ],
                map: 'lsMap',
                aspectScale: 0.9,
                roam: false, //是否允许缩放
                //zoom: 1.1, //默认显示级别
                layoutSize: '100%',
                layoutCenter: ['55%', '50%'],
                itemStyle: {
                    areaColor: 'transparent',
                    borderColor: 'rgba(68,157,255,1)',
                    borderWidth: 2,
                },
                emphasis: {
                    itemStyle: {
                        areaColor: '#3c98ff',
                    },
                    label: {
                        show: false,
                    },
                },
                zlevel: 2,
            },
            {
                boundingCoords: [
                    // 定位左上角经纬度
                    [118.1964, 29.3104],
                    // 定位右下角经纬度
                    [120.4706, 27.3864],
                ],
                map: 'lsMap2',
                aspectScale: 0.9,
                roam: false, //是否允许缩放
                //zoom: 1.1, //默认显示级别
                layoutSize: '100%',
                layoutCenter: ['55%', '50%'],
                // itemStyle: {
                //     areaColor: 'rgba(22,56,196,1)',
                //     // borderColor: '#37C1FD',
                //     // borderWidth: 2,
                // },
                itemStyle: {
                    areaColor: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#008AFF', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#1638C4', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                    borderColor: '#1493FF',
                    borderWidth: 2,
                },
                zlevel: 1,
                silent: true,
            },
        ],
        series: series,
    };
    myChart.setOption(option);
});
