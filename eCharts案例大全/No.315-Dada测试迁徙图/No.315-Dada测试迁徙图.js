var allData = {
    citys: [
        {
            name: '广州',
            value: [113.264224, 23.158135],
            symbolSize: 5,
            itemStyle: { normal: { color: '#F58158' } },
        },
        {
            name: '河北',
            value: [114.475704, 38.584854, -19],
            symbolSize: 5,
            itemStyle: { normal: { color: '#58B3CC' } },
        },
        {
            name: '深圳',
            value: [114.057868, 22.543099, 1444],
            symbolSize: 5,
            itemStyle: { normal: { color: '#F58158' } },
        },
        {
            name: '海淀',
            value: [116.298056, 39.959912, 32],
            symbolSize: 5,
            itemStyle: { normal: { color: '#F58158' } },
        },
    ],
    moveLines: [
        {
            fromName: '河北',
            toName: '深圳',
            coords: [
                [114.475704, 38.584854],
                [114.057868, 22.543099],
            ],
            num: 123,
        },
        {
            fromName: '深圳',
            toName: '海淀',
            coords: [
                [114.057868, 22.543099],
                [116.298056, 39.959912],
            ],
            num: 456,
        },
        {
            fromName: '海淀',
            toName: '河北',
            coords: [
                [116.298056, 39.959912],
                [114.475704, 38.584854],
            ],
            num: 789,
        },
    ],
};

option = {
    // backgroundColor: '#021d43',
    tooltip: {
        trigger: 'item',
    },
    legend: {
        show: false,
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['地点', '线路'],
        textStyle: {
            color: '#fff',
        },
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false,
            },
        },
        roam: false, //是否允许缩放
        zoom: 1.2,
        aspectScale: 1,
        itemStyle: {
            borderWidth: 1,
            borderColor: 'rgba(3, 110, 241,0.1)',
            areaColor: 'rgb(3 110 241)',
            shadowColor: 'rgb(3 110 241)',
            shadowOffsetX: 0,
            shadowOffsetY: 15,
            opacity: 0.75,
        },
        tooltip: {
            formatter: function (params) {
                if (params.seriesType == 'lines') {
                    return params.data.fromName + ' ---> ' + params.data.toName + '<br />数量：' + params.data.num;
                }
            },
        },
        regions: [
            {
                name: '南海诸岛',
                value: 0,
                itemStyle: {
                    normal: {
                        opacity: 0,
                        label: {
                            show: false,
                        },
                    },
                },
            },
        ],
    },
    series: [
        {
            type: 'map',
            mapType: 'china',
            label: {
                emphasis: {
                    show: false,
                },
            },
            roam: false, //是否允许缩放
            zoom: 1.2,
            aspectScale: 1,
            itemStyle: {
                borderWidth: 2,
                borderColor: 'rgba(3,233,249,0.75)',
                areaColor: 'rgba(1,96,200,0.75)',
            },
            tooltip: {
                show: false,
            },
        },
        {
            name: '地点',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                //涟漪特效
                brushType: 'stroke', //波纹绘制方式 stroke，fill
                period: 4, //动画时间，值越小速度越快
                scale: 4, //波纹圆环最大显示，值越大波纹越大
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                    color: 'white',
                },
            },
            symbolSize: 5,
            showEffectOn: 'render',
            itemStyle: {
                normal: {
                    color: '#46bee9',
                },
            },
            data: allData.citys,
        },
        {
            name: '线路',
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 2,
            large: true,
            effect: {
                show: true,
                period: 6,
                symbol:
                    'path://M922.6 698.6v-74.7l-335.9-224V138.6S586.7 64 512 64s-74.7 74.6-74.7 74.6v261.3L101.4 624v74.7l335.9-112v209.1l-112 89.6V960L512 885.3l186.6 74.6v-74.6l-112-89.6V586.6l336 112z',
                color: '#fff',
                symbolSize: 15, //图标大小
                trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
            },
            lineStyle: {
                normal: {
                    color: '#ffa022',
                    width: 1.5, //尾迹线条宽度
                    opacity: 0.4, //尾迹线条透明度
                    curveness: 0.2, //尾迹线条曲直度
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                },
            },
            data: allData.moveLines,
        },
    ],
};
