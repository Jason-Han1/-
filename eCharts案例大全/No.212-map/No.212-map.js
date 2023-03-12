var kqPointUrl = "/asset/get/s/data-1640076074687-LZ2HA-A8m.png";

var szPoinUrl = "/asset/get/s/data-1640076050092-2hEqYBdFx.png";

var uploadedDataURL = '/asset/get/s/data-1640073954549-DedI1YEHA.json';


let tempData1 = [
    {
        name: '水质-露营基地',
        value: [121.645189, 29.750277],
        ph: 7.7,
        rjy: 9.32,
        upDate: '11-09 11:45',
    },
];
let tempData2 = [
    {
        name: '动物园',
        value: [121.681409, 29.809711],
        pm: '优',
        fylz: '一级',
        upDate: '11-09 11:45',
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
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'image://'+szPoinUrl,
            legendHoverLink: true,
            symbolSize: [28, 33],
            // legendHoverLink: true,
            label: {
                show: true,
                offset: [90, 40], //偏移设置
                fontSize: 14,
                lineHeight: 23,
                borderWidth: 1,
                backgroundColor: '#061a4c',
                borderColor: '#2BD8FB',
                padding: 6,
                formatter(value) {
                    // return value.data.name + '：' + value.data.value[2] + '人'
                    return `{name|${value.data.name}}\nph值：{pt|${value.data.ph}}\n溶解氧：{pt|${value.data.rjy}}\n{date|更新时间：${value.data.upDate}}`;
                },
                rich: {
                    name: {
                        fontWeight: 'bold',
                        fontSize: 16,
                        color: '#fff',
                    },
                    pt: {
                        fontSize: 14,
                        color: '#2BD8FB',
                    },
                    date: {
                        color: 'rgb(255,255,255,0.8)',
                    },
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
            data: tempData1,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke',
            },
            hoverAnimation: true,
            zlevel: 1,
        },
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'image://'+kqPointUrl,
            legendHoverLink: true,
            symbolSize: [28, 33],
            // legendHoverLink: true,
            label: {
                show: true,
                offset: [90, 40], //偏移设置
                fontSize: 14,
                lineHeight: 23,
                borderWidth: 1,
                backgroundColor: '#061a4c',
                borderColor: '#2BD8FB',
                padding: 6,
                formatter(value) {
                    return `{name|${value.data.name}}\nph值：{pt|${value.data.pm}}\n溶解氧：{pt|${value.data.fylz}}\n{date|更新时间：${value.data.upDate}}`;
                },
                rich: {
                    name: {
                        fontWeight: 'bold',
                        fontSize: 16,
                        color: '#fff',
                    },
                    pt: {
                        fontSize: 14,
                        color: '#72FEA3',
                    },
                    date: {
                        color: 'rgb(255,255,255,0.8)',
                    },
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
            data: tempData2,
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
