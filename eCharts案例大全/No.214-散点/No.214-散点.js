var uploadedDataURL = "/asset/get/s/data-1640073954549-DedI1YEHA.json";


let tempData = [
    {
        name: '陶公岛',
        value: [121.648782, 29.781504, 729],
    },
    {
        name: '小普陀',
        value: [121.663443, 29.774607, 165],
    },
    {
        name: '动物园',
        value: [121.681409, 29.809711, 1203],
    },
    {
        name: '水上乐园',
        value: [121.645189, 29.750277, 500],
    },
];
 let option1 = {
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
        map: 'LKX',
        show: false,
        roam: false,
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
                areaColor: '#00091a',
                borderColor: '#00091a', //线
                shadowColor: '#00091a', //外发光
                shadowBlur: 20,
            },
            emphasis: {
                areaColor: '#3A63BC', //悬浮区背景
            },
        },
    },
    series: [
        {
            name: '东钱湖',
            type: 'map',
            mapType: 'LKX',
            label: {
                normal: {
                    textStyle: {
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: '#fff',
                    },
                },
            },
            aspectScale: 0.75,
            zoom: 1.2,
            itemStyle: {
                normal: {
                    label: { show: true },
                    color: '#F4F4F4',
                    borderWidth: 0.5, //区域边框宽度
                    borderColor: '#080E1F', //区域边框颜色
                    // areaColor: "#5389EB", //区域颜色
                    areaColor: '#3B64BA', //区域颜色
                },
                emphasis: {
                    label: { show: false },
                    borderWidth: 0.5,
                    borderColor: '#4b0082',
                    areaColor: '#3B64BA',
                },
            },
        },
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            // symbol: 'image://../image/mapPoint.png',
            legendHoverLink: true,
            symbolSize: function (val) {
                return Math.max(val[2] / 30, 8);
            },
            // legendHoverLink: true,
            label: {
                show: false,
                offset: [70, -10], //偏移设置
                fontSize: 14,
                lineHeight: 14,
                borderWidth: 1,
                backgroundColor: '#061a4c',
                borderColor: '#97b5f0',
                padding: 6,
                formatter(value) {
                    console.log(value);
                    return value.data.name + '：' + value.data.value[2] + '人';
                },
                color: '#fff',
            },
            itemStyle: {
                normal: {
                    color: '#D8BC37', //标志颜色
                    shadowBlur: 2,
                    shadowColor: 'D8BC37',
                },
            },
            data: tempData,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke',
            },
            hoverAnimation: true,
            zlevel: 1,
        },
    ],
};
$.get(uploadedDataURL, function (csJson) {
    echarts.registerMap('LKX', csJson);

    myChart.setOption(option1, true);
});
