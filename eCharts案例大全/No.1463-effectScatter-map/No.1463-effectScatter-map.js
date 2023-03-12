var mapJSON = '/asset/get/s/data-1626233214001-gxlJKZykZ.json';

var mapOuterJSON = '/asset/get/s/data-1626233206360-0r-gjDCUj.json';
var pointDatas = [
    {
        adcode: 331102,
        name: '市本级',
        center: [119.776188, 28.574422],
        value: 2.4,
        total: 19.5,
    },
    {
        adcode: 331102,
        name: '莲都区',
        center: [119.922293, 28.451103],
        value: 2.4,
        total: 19.5,
    },
    {
        adcode: 331121,
        name: '青田县',
        center: [120.291939, 28.135247],
        value: 2.2,
        total: 16.5,
    },
    {
        adcode: 331122,
        name: '缙云县',
        center: [120.078965, 28.654208],
        value: 1.8,
        total: 18.5,
    },
    {
        adcode: 331123,
        name: '遂昌县',
        center: [119.27589, 28.5924],
        value: 0.6,
        total: 17.5,
    },
    {
        adcode: 331124,
        name: '松阳县',
        center: [119.485292, 28.449937],
        value: 1.8,
        total: 17.5,
    },
    {
        adcode: 331125,
        name: '云和县',
        center: [119.569458, 28.111077],
        value: 1.8,
        total: 18.5,
    },
    {
        adcode: 331126,
        name: '庆元县',
        center: [119.067233, 27.618231],
        value: 1.6,
        total: 15.5,
    },
    {
        adcode: 331127,
        name: '景宁畲族自治县',
        center: [119.634669, 27.977247],
        value: 1.6,
        total: 16.5,
    },
    {
        adcode: 331181,
        name: '龙泉市',
        center: [119.132319, 28.069177],
        value: 1.8,
        total: 18.5,
    },
].map((item) => {
    item.value = item.center.concat([item.value]);//value除了这三项，不要加其他东西
    return item;
});

var geoCoordMap = {};
var mapDatas = [];

$.get(mapOuterJSON, function (json) {
    echarts.registerMap('lsMap2', json);
});
$.get(mapJSON, function (json) {
    echarts.registerMap('lsMap', json);
    option = {
        backgroundColor: 'transparent',
        visualMap: {
            show: true,
            type: 'piecewise',
            pieces: [{ min: 2 }, { min: 1, max: 2 }, { max: 1 }],
            inRange: {
                color: ['rgba(255,75,75,1)', 'rgba(231,233,61,1)', 'rgba(37,194,51,1)'],
            },
            outOfRange: {
                color: 'rgba(37,194,51,1)',
            },
            padding: 10,
            backgroundColor: 'rgba(26,71,203,.3)',
            borderColor: 'rgba(73,106,184,.3)',
            borderWidth: 1,
            seriesIndex: 0,
            showLabel: true,
            textStyle: {
                color: '#fff',
                fontSize: 18,
            },
        },
        geo: [
            {
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
        series: [
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                rippleEffect: {
                    period: 4, //动画时间，值越小速度越快
                    brushType: 'stroke', //波纹绘制方式 stroke, fill
                    scale: 4, //波纹圆环最大限制，值越大波纹越大
                },
                zlevel: 3,
                symbol: 'circle',
                symbolSize: 5,
                itemStyle: {
                    color: '#34c6bb',
                },
                label: {
                    show: true,
                    position: 'bottom',
                    distance: 0,
                    formatter: function (params) {
                        return [params.name, params.data.value[2]].join('\n');
                    },
                    textStyle: {
                        color: '#fff',
                        fontSize: 18,
                        lineHeight: 30,
                    },
                },
                data: JSON.parse(JSON.stringify(pointDatas)),
            },
        ],
    };
    myChart.setOption(option);
});
