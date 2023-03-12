var westLakeJson = '/asset/get/s/data-1629870668058-sUScloabor.json';
setTimeout(function () {
    mapInit();
}, 1000);
let LableData = [
    {
        name: '北山街道',
        coords: [
            [120.141592, 30.266991],
            [120.161592, 30.266991],
        ],
    },
    {
        name: '西溪街道',
        coords: [
            [120.138631, 30.283470],
            [120.158631, 30.283470],
        ],
    },
    {
        name: '',
        coords: [
            [120.123053, 30.285058],
            [120.123053, 30.305058],
        ],
    },
    {
        name: '翠苑街道',
        coords: [
            [120.123053, 30.305058],
            [120.134053, 30.305058],
        ],
    },
    {
        name: '',
        coords: [
            [120.107471, 30.282745],
            [120.107471, 30.312745],
        ],
    },
    {
        name: '文新街道',
        coords: [
            [120.107471, 30.312745],
            [120.114471, 30.312745],
        ],
    },
    {
        name: '西湖街道',
        coords: [
            [120.106272, 30.227680],
            [120.106272, 30.227680],
        ],
    },
    {
        name: '留下街道',
        coords: [
            [120.038079, 30.233002],
            [120.038079, 30.233002],
        ],
    },
    {
        name: '转塘街道',
        coords: [
            [120.063915, 30.166397],
            [120.063915, 30.166397],
        ],
    },
    {
        name: '双浦镇',
        coords: [
            [120.063915, 30.116397],
            [120.063915, 30.116397],
        ],
    },
    {
        name: '蒋村街道',
        coords: [
            [120.048893, 30.280981],
            [120.048893, 30.280981],
        ],
    },
    {
        name: '',
        coords: [
            [120.120306, 30.263343],
            [120.122606, 30.243343],
        ],
    },
    {
        name: '灵隐街道',
        coords: [
            [120.122606, 30.243343],
            [120.155306, 30.243343],
        ],
    },
    {
        name: '',
        coords: [
            [120.094471, 30.285745],
            [120.094471, 30.325745],
        ],
    },
    {
        name: '古荡街道',
        coords: [
            [120.094471, 30.325745],
            [120.114471, 30.325745],
        ],
    },
    {
        name: '三墩镇',
        coords: [
            [120.039023, 30.326986],
            [120.039023, 30.326986],
        ],
    },
];
var mapInit = () => {
    // 这里需要这样使用地图JSON，实际开发中直接使用即可echarts.registerMap("XH", westLakeJson);
    $.getJSON(westLakeJson, function (geoJson) {
        echarts.registerMap('XH', geoJson);
        myChart.hideLoading();
        option = {
            tooltip: {
                trigger: 'item',
                formatter(value) {
                    return value.name;
                },
                show: false,
            },
            geo: {
                map: 'XH',
                geoIndex: -1,
                zoom: 1.285,
                selectedMode: false,
                aspectScale: 0.9,
                hoverAnimation: false,
                // position: [500, 500],
                left: 50,
                itemStyle: {
                    normal: {
                        label: { show: false },
                        borderWidth: 0,
                        borderColor: '#00a4e7',
                        areaColor: '#00a4e7',
                    },
                    emphasis: {
                        label: { show: false },
                        borderWidth: 0,
                        borderColor: '#00a4e7',
                        areaColor: '#00a4e7',
                    },
                },
            },
            series: [
                {
                    type: 'map',
                    mapType: 'XH',
                    animation: false,
                    hoverAnimation: true,
                    zoom: 1.25,
                    aspectScale: 0.9,
                    left: 50,
                    selectedMode: false,
                    itemStyle: {
                        normal: {
                            label: { show: false },
                            padding: [10, 20],
                            borderWidth: 0.5, //区域边框宽度
                            borderColor: '#00c3f1', //区域边框颜色
                            areaColor: '#1FA6ED', //区域颜色
                        },
                        emphasis: {
                            label: { show: false },
                            padding: [50, 50],
                            borderWidth: 0.5,
                            borderColor: '#00c3f1',
                            areaColor: '#1FA6ED',
                            borderWidth: 1,
                            shadowColor: '#00c3f1',
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowOffsetY: 1,
                        },
                    },
                },
                {
                    type: 'lines',
                    zlevel: 3,
                    symbol: 'none',
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
                            let arr = [params.name];
                            return arr.join('\n');
                        },
                        textStyle: {
                            align: 'left',
                            lineHeight: 20,
                            color: '#000', fontSize: '18px'
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
        myChart.setOption(option);
    });
};
