var CAINIAO_ICON = 'image://asset/get/s/data-1629685569572-YtBFDUfHU.PNG';

// ADD ICON ADDRESS
// var CAINIAO_ICON = 'image://asset/get/s/data-1629684051757-3Q23RASCh.jpg';
var MTYX_ICON = 'image://asset/get/s/data-1629684059923-ByF-BIHjt.jpg';
var DDMC_ICON = 'image://asset/get/s/data-1629684067163-l4_mRuguO.jpg';
var HEMA_ICON = 'image://asset/get/s/data-1629618244158-ID0IalaG6.jpg';

// ADD HEATMAP DATA
var seriesData = [
    {
        name: '芙蓉区',
        value: 1,
    },

    {
        name: '望城区',
        value: 1,
    },

    {
        name: '开福区',
        value: 1,
    },
    {
        name: '岳麓区',
        value: 1,
    },
    {
        name: '天心区',
        value: 1,
    },
    {
        name: '雨花区',
        value: 1,
    },
];

// ADD ICON LONGTITUDE,LAGTITUDE INFO
var CAINIAO_ARR = [{ name: '菜鸟长沙共享仓', value: [112.847458, 28.240797] }];
var HEMA_ARR = [{ name: '盒马集市', value: [113.029763, 28.14731] }];
var MTYX_ARR = [{ name: '美团优选', value: [112.92759, 28.333358] }];
var DDMC_ARR = [{ name: '多多买菜', value: [112.938814, 28.228209] }];

// ADD PATH INFO
var pathData = [
    {
        coords: [
            [112.847458, 28.240797], // 起点
            [113.029763, 28.14731], // 终点
        ],
    },
    {
        coords: [
            [112.847458, 28.240797],
            [112.92759, 28.333358],
        ],
    },
    {
        coords: [
            [112.847458, 28.240797],
            [112.938814, 28.228209],
        ],
    },
];

$.getJSON('/asset/get/s/data-1629445801190-KECOiZ63g.json', null, function (data) {
    echarts.registerMap('长沙市', data);

    option = {
        backgroundColor: '#0B1C51', //地图背景色深蓝
        tooltip: {
            trigger: 'item',
            // formatter: function (params) {
            //     if (typeof params.value[2] == 'undefined') {
            //         return params.name + ' : ' + params.value;
            //     } else {
            //         return params.name + ' : ' + params.value[2];
            //     }
            // },
            formatter: function (params) {
                return params.name;
            },
        },

        geo: {
            show: true,
            map: '长沙市',
            label: {
                normal: {
                    show: true, //是否显示城市名
                    // textStyle: {
                    color: '#0B1C51', //legend字体颜色  深蓝
                    //     fontSize: 8,
                    // },
                    // verticalAlign: 'middle',
                    // align: 'left',
                },
                emphasis: {
                    show: false,
                },
            },
            zoom: 1.2,
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#0B1C51',
                    borderColor: '#1F4E79', //地图边框颜色  蓝色
                    borderWidth: 2,
                    //     shadowColor: 'rgba(63, 218, 255, 0.5)',    //地图边框阴影颜色
                    //   shadowBlur: 30
                },
                emphasis: {
                    areaColor: '#52B3D6',
                },
            },
        },
        legend: {
            //各标记图例
            orient: 'horizontal',
            id: 1,
            y: 'top',
            x: 'left',
            itemWidth: 20,
            data: [
                {
                    name: 'CAINIAO',
                    icon: CAINIAO_ICON,
                },
                {
                    name: 'MTYX',
                    icon: MTYX_ICON,
                },
                {
                    name: 'DDMC',
                    icon: DDMC_ICON,
                },
                {
                    name: 'HEMA',
                    icon: HEMA_ICON,
                },
            ],
            textStyle: {
                color: '#FFFFFF', //legend图标颜色  深灰
                size: 20,
            },
        },
        visualMap: [
            {
                min: 0, //IF NO WAREHOUSES IN THIS CITY
                max: 1, //填写城市的最大值
                seriesIndex: 0,
                show: false,
                inRange: {
                    color: ['#ffffff', 'white'],
                },
                //       calculable: true,
                textStyle: {
                    color: '#F7F7F7', //legend图标颜色  深灰
                    size: 20,
                },
                formatter: function (value) {
                    return value.toFixed(1);
                    //       return "";    左下角图例滑过时显示空值
                },
            },
        ],
        series: [
            {
                type: 'map',
                // map: '长沙市',
                geoIndex: 0,
                // showLegendSymbol: true, // 存在legend时显示
                // label: {
                //     normal: {
                //         show: true,
                //     },
                // },
                data: seriesData,
                    },

   {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 20,
                rippleEffect: { //涟漪特效
                    period: 4, //动画时间，值越小速度越快
                    brushType: 'stroke', //波纹绘制方式 stroke, fill
                    scale: 10 //波纹圆环最大限制，值越大波纹越大
                },
                // label: {
                //     normal: {
                //         show: true,
                //         position: 'right', //显示位置
                //         offset: [5, 0], //偏移设置
                //         // formatter: function(params) { //圆环显示文字
                //         //     return params.data.name
                //         // ;
                //         // },
                //         fontSize: 13
                //     },
                //     emphasis: {
                //         show: true
                //     }
                // },
                symbol: 'circle',
                symbolSize: function(val) {
                    return 10; //圆环大小
                },
                itemStyle: {
                    normal: {
                        show: false,
                        color: 'red',
                        
                        
                    }
                },
                data: HEMA_ARR

                },
            
            
            // 图标的位置
            {
                name: 'HEMA',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: HEMA_ARR,
                symbol: HEMA_ICON,
                symbolSize: function (val) {
                    return 20;
                },
                label: {
                    normal: {
                        show: false,
                        formatter: function (params) {
                            // console.log(params);
                            return params.name;
                        },
                        position: 'right',
                        color: '#69A4D9',
                        fontSize: '8',
                    },
                    emphasis: {
                        show: false,
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#4bbbb2',
                        borderWidth: 2,
                        borderColor: '#b4dccd',
                    },
                },
            },

            {
                name: 'CAINIAO',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: CAINIAO_ARR,
                symbol: CAINIAO_ICON,
                symbolSize: function (val) {
                    return 20;
                },
                label: {
                    normal: {
                        show: false,
                        formatter: function (params) {
                            // console.log(params);
                            return params.name;
                        },
                        position: 'right',
                        color: '#69A4D9',
                        fontSize: '8',
                    },
                    emphasis: {
                        show: false,
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#4bbbb2',
                        borderWidth: 2,
                        borderColor: '#b4dccd',
                    },
                },
            },
            {
                name: 'MTYX',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: MTYX_ARR,
                symbol: MTYX_ICON,
                symbolSize: function (val) {
                    return 30;
                },
                label: {
                    normal: {
                        show: false,
                        formatter: function (params) {
                            // console.log(params);
                            return params.name;
                        },
                        position: 'right',
                        color: '#69A4D9',
                        fontSize: '8',
                    },
                    emphasis: {
                        show: false,
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#4bbbb2',
                        borderWidth: 2,
                        borderColor: '#b4dccd',
                    },
                },
            },
            {
                name: 'DDMC',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: DDMC_ARR,
                symbol: DDMC_ICON,
                symbolSize: function (val) {
                    return 25;
                },
                label: {
                    normal: {
                        show: false,
                        formatter: function (params) {
                            // console.log(params);
                            return params.name;
                        },
                        position: 'right',
                        color: '#69A4D9',
                        fontSize: '8',
                    },
                    emphasis: {
                        show: false,
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#4bbbb2',
                        borderWidth: 2,
                        borderColor: '#b4dccd',
                    },
                },
            },
        ],
    };
    myChart.setOption(option);
});
