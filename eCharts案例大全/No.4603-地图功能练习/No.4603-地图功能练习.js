var uploadedDataURL = '/asset/get/s/data-1608087672952-T5R7GEXzy.json';

myChart.showLoading();

// 散点图数据
data = [
    {
        name: '北京',
        value: [116.24, 39.55, 100],
    },
    {
        name: '深圳',
        value: [114.271522, 22.753644],
    },

    {
        name: '重庆',
        value: [106.54, 29.59],
    },
    {
        name: '浙江',
        value: [120.19, 30.26],
    },
];
// 小框数据
let LableData = [
    {
        name: '北京',
        coords: [
            [116.24, 39.55, 0],
            [118.24, 41.55, 50]
        ], // 线条位置[开始位置，结束位置]
        value: [10.21, 1.2],
    },
    {
        name: '深圳',
        coords: [
            [114.271522, 22.753644],
            [116, 18.55, 100],
        ], // 线条位置[开始位置，结束位置]
        value: [10.21, 1.2],
    },
    {
        name: '重庆',
        coords: [
            [106.54, 29.59],
            [97, 17],
        ], // 线条位置[开始位置，结束位置]
        value: [10.21, 1.2],
    },
    {
        name: '浙江',
        coords: [
            [120.19, 30.26],
            [128.24, 35.55, 100],
        ], // 线条位置[开始位置，结束位置]
        value: [10.21, 1.2],
    },
];
let flowLineColor = '#4699b1'; //流动线条颜色

let activeAreaName = '';
myChart.on('mouseover', ({ name }) => {
    if (activeAreaName !== name) {
        activeAreaName = name;
        handleChangeOption();
    }
});
myChart.on('globalout', () => {
    activeAreaName = '';
    handleChangeOption();
});

function handleChangeOption() {
    option = {
        backgroundColor: '#fff',
        geo: [
            {
                map: 'china',
                aspectScale: 0.85,
                roam: false,
                layoutCenter: ['50%', '50%'], //地图位置
                layoutSize: '100%',
                zlevel: 2,
                silent: true,
                itemStyle: {
                    areaColor: {
                        type: 'radial',
                        x: 650,
                        y: 520,
                        r: 300,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#eee', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#eee', // 100% 处的颜色
                            },
                        ],
                        global: true, // 缺省为 false
                    },
                    borderColor: '#d4d4d4',
                    borderWidth: 2,
                },
            }
        ],
        series: [
            // 散点 effectScatter
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                symbolSize: 10,
                rippleEffect: {
                    //坐标点动画
                    period: 0,
                    scale: 10,
                    brushType: 'fill',
                },
                label: {
                    show: false,
                },

                data: data,
                itemStyle: {
                    //坐标点颜色
                    normal: {
                        show: true,
                        color: flowLineColor,
                        shadowBlur: 1,
                        shadowColor: '#fff',
                    },
                    emphasis: {
                        areaColor: '#4699b1',
                    },
                },
            },
            {
                type: 'lines',
                zlevel: 3,
                symbol: 'circle',
                symbolSize: [5, 5],
                color: '#4699b1',
                opacity: 1,
                label: {
                    show: true,
                    padding: [0, 10],
                    color: '#000',
                    borderWidth: 2,
                    borderRadius: 6,
                    formatter(params) {
                        let arr = [params.name ];
                        return arr.join('\n');
                    },
                    textStyle: {
                        align: 'left',
                        lineHeight: 20,
                    },
                },
                lineStyle: {
                    type: 'solid',
                    color: '#4699b1',
                    width: 1,
                    opacity: 1,
                },
                data: LableData,
            },
        ],
    };
    myChart.setOption(option, true);
}
$.getJSON(uploadedDataURL, function (geoJson) {
    echarts.registerMap('china', geoJson);
    echarts.registerMap('china2', geoJson);
    handleChangeOption();
    myChart.hideLoading();
});
