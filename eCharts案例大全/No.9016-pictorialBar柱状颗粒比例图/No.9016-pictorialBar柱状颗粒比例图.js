var uploadedDataURLm = "/asset/get/s/data-1577417356639-vTU6A83C.png";
var uploadedDataURLf = "/asset/get/s/data-1577417351926-_UCv3D1y.png";
const barData = [36.4]
const lineData = [100]
option = {
    grid: {
        top: '70%',
        left: '5%',
        right: '5%'
    },
    tooltip: {
        show: false
    },
    xAxis: {
        show: false
    },
    yAxis: {
        data: [],
        show: false
    },
    graphic: [{
            type: 'image',
            id: 'logo',
            right: '10%',
            top: '30%',
            z: 10,
            bounding: 'raw',
            style: {
                image: uploadedDataURLf,
                width: 200,
                height: 200,
                opacity: 1
            }
        },
        {
            type: 'image',
            id: 'logo1',
            left: '10%',
            top: '30%',
            z: 10,
            bounding: 'raw',

            style: {
                image: uploadedDataURLm,
                width: 200,
                height: 200,
                opacity: 1
            }
        },
        {
            type: 'text',
            id: 'text1',
            left: '16%',
            top: '60%',
            z: 10,
            bounding: 'raw',

            style: {
                text: '36.4%',
                color: '#1EBF8E',
                fontSize: 24
            }
        },
        {
            type: 'text',
            id: 'text2',
            right: '16%',
            top: '60%',
            z: 10,
            bounding: 'raw',
            style: {
                text: '63.6%',
                color: '#1B87ED',
                fontSize: 24
            }
        },
    ],
    series: [{ // 蓝柱下面方块
            name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            barWidth: 20,
            symbolOffset: [0, -12],
            itemStyle: {
                normal: {
                    color: '#1EBF8E'
                }
            },
            z: -11,
            symbolRepeat: true,
            symbolSize: 20,
            data: lineData,
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30
            }
        },
        { // 蓝柱
            name: '', // blue bar
            type: 'pictorialBar',
            symbol: 'rect',
            barWidth: '20',
            symbolOffset: [0, -12],
            symbolRepeat: true,
            symbolSize: 20,
            // symbolClip: true,
            data: barData,
            label: {
                normal: {
                    show: false
                }
            },
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30 * 1.1
            }
        },
        { // 蓝柱下面方块
            name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            barWidth: '20',
            symbolOffset: [0, -38],
            itemStyle: {
                normal: {
                    color: '#1EBF8E'
                }
            },
            z: -11,
            symbolRepeat: true,
            symbolSize: 20,
            data: lineData,
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30
            }
        },
        { // 蓝柱
            name: '', // blue bar
            type: 'pictorialBar',
            symbol: 'rect',
            barWidth: '20',
            symbolOffset: [0, -38],
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#1B87ED'
                }
            },
            symbolRepeat: true,
            symbolSize: 20,
            // symbolClip: true,
            data: barData,
            label: {
                normal: {
                    show: false
                }
            },
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30 * 1.1
            }
        },
        { // 蓝柱
            name: '', // blue bar
            type: 'pictorialBar',
            symbol: 'rect',
            barWidth: 20,
            symbolOffset: [0, -12],
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#1B87ED'
                }
            },
            symbolRepeat: true,
            symbolSize: 20,
            // symbolClip: true,
            data: barData,
            label: {
                normal: {
                    show: false
                }
            },
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30 * 1.1
            }
        },
        { // 蓝柱下面方块
            name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            barWidth: '20',
            symbolOffset: [0, -64],
            itemStyle: {
                normal: {
                    color: '#1EBF8E'
                }
            },
            z: -11,
            symbolRepeat: true,
            symbolSize: 20,
            data: lineData,
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30
            }
        },
        { // 蓝柱
            name: '', // blue bar
            type: 'pictorialBar',
            symbol: 'rect',
            barWidth: '20',
            symbolOffset: [0, -64],
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#1B87ED'
                }
            },
            symbolRepeat: true,
            symbolSize: 20,
            // symbolClip: true,
            data: barData,
            label: {
                show: false
            },
            symbolClip: true,
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30 * 1.1
            }
        }
    ]
};