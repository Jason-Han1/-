var uploadedDataURL = '/asset/get/s/data-1622438559658-P5tWRY42J.json';
$.get(uploadedDataURL, function (json) {
    echarts.registerMap('yunnan', json);

    option = {
        visualMap: {
            show: false,
            seriesIndex: [0],
            min: 0,
            max: 500,
            inRange: {
                color: ['#D4EEFF', '#99D3FF', '#61B3FF', '#218BFF', '#006CFF', '#0055D7', '#0039A4', '#001C6A'],
            },
        },
        geo: [
            {
                map: 'yunnan',
                roam: false, //是否允许缩放
                zoom: 1.1, //默认显示级别
                aspectScale: 1,
                scaleLimit: {
                    min: 0,
                    max: 3,
                }, //缩放级别
                nameMap: {
                    迪庆藏族自治州: '迪庆',
                    大理白族自治州: '大理',
                    怒江傈僳族自治州: '怒江',
                    保山市: '保山',
                    丽江市: '丽江',
                    德宏傣族景颇族自治州: '德宏',
                    临沧市: '临沧',
                    普洱市: '普洱',
                    西双版纳傣族自治州: '版纳',
                    玉溪市: '玉溪',
                    楚雄彝族自治州: '楚雄',
                    红河哈尼族彝族自治州: '红河',
                    文山壮族苗族自治州: '文山',
                    昆明市: '昆明',
                    曲靖市: '曲靖',
                    昭通市: '昭通',
                },
            },
        ],
        series: [
            //地图
            {
                type: 'map',
                mapType: 'yunnan',
                geoIndex: -1,
                aspectScale: 1,
                zoom: 1.1, //默认显示级别
                label: {
                    show: true,
                    color: '#ffffff',
                    emphasis: {
                        color: 'white',
                        show: true,
                    },
                },
                nameMap: {
                    迪庆藏族自治州: '迪庆',
                    大理白族自治州: '大理',
                    怒江傈僳族自治州: '怒江',
                    保山市: '保山',
                    丽江市: '丽江',
                    德宏傣族景颇族自治州: '德宏',
                    临沧市: '临沧',
                    普洱市: '普洱',
                    西双版纳傣族自治州: '版纳',
                    玉溪市: '玉溪',
                    楚雄彝族自治州: '楚雄',
                    红河哈尼族彝族自治州: '红河',
                    文山壮族苗族自治州: '文山',
                    昆明市: '昆明',
                    曲靖市: '曲靖',
                    昭通市: '昭通',
                },
                data: [
                    {
                        name: '迪庆',
                        value: 400,
                    },
                    {
                        name: '丽江',
                        value: 400,
                    },
                    {
                        name: '昆明',
                        value: 400,
                    },
                    {
                        name: '昭通',
                        value: 400,
                    },
                    {
                        name: '版纳',
                        value: 400,
                    },
                    {
                        name: '保山',
                        value: 250,
                    },
                    {
                        name: '临沧',
                        value: 250,
                    },
                    {
                        name: '普洱',
                        value: 250,
                    },
                    {
                        name: '红河',
                        value: 250,
                    },
                ],
                itemStyle: {
                    emphasis: {
                        borderColor: '#FFF',
                        borderWidth: 4,
                        areaColor: 'transparent',
                    },
                },
            },
            {
                name: 'scatter',
                type: 'effectScatter',
                zlevel: 1,
                hoverAnimation: true,
                coordinateSystem: 'geo',
                symbol: 'circle',
                symbolSize: 10,
                rippleEffect: {
                    brushType: 'stroke',
                    scale: 2.5,
                    period: 4,
                },
                encode: {
                    value: 2,
                },
                data: [
                    {
                        name: '昆明',
                        value: [102.912251, 26.650609, 97.66],
                    },
                ],
                label: {
                    position: 'bottom',
                    show: true,
                    color: '#000',
                    fontFamily: '微软雅黑',
                    fontSize: 14,
                    backgroundColor: '#f7fcff',
                    borderColor: '#f7fcff',
                    borderWidth: 1,
                    borderRadius: 4,
                    padding: [15,10,10, 10],
                    align: 'center',
                    width: 128,
                    formatter: function (params) {
                        return [`{a|}` + `{b|${params.name}}`, `{c|}` + `{d|${params.value[2]} 亿元}`].join('\n');
                    },
                    rich: {
                        a: {
                            align: 'left',
                            backgroundColor: '#00D2C8',
                            width: 56,
                            height: 12,
                        },
                        b: {
                            align: 'right',
                            lineHeight: 17,
                            fontSize: 12,
                            color: '#000',
                            fontWeight: 'bold',
                            width: 'auto',
                            height: 30,
                        },
                        c: {
                            align: 'left',
                            height: 12,
                            width: 25,
                            backgroundColor: '#ff7077',
                        },
                        d: {
                            align: 'right',
                            color: '#000',
                            width: 'auto',
                            fontWeight: 'bold',
                            height: 30,
                        },
                    },
                },
                itemStyle: {
                    color: 'transparent',
                },
            },
        ],
    };
    myChart.setOption(option);
});
