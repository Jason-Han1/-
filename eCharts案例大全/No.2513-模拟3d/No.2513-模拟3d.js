var uploadedDataURL = '/asset/get/s/data-1627450292707-M001yzrf4.geoJson';
$.getJSON(uploadedDataURL, function (geoJson) {
    console.log(geoJson)
    echarts.registerMap('guizhou', geoJson);
    window.dataList = [
        {
            name: '毕节市',
            value: 54,
        },
        {
            name: '安顺市',
            value: 54,
        },
    ];

    var series = [
        {
            type: 'map',
            map: 'guizhou',
            roam: false,
            label: {
                emphasis: {
                    show: false,
                },
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 0.5,
                    areaColor: {
                        x: 1000,
                        y: 1000,
                        x2: 1000,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#666', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#eee', // 50% 处的颜色
                            },
                        ],
                        global: true, // 缺省为 false
                    },
                    opacity: 1,
                },
                emphasis: {
                    show: false,
                    borderColor: '#fff',
                    borderWidth: 0.5,
                    areaColor: {
                        x: 1000,
                        y: 1000,
                        x2: 1000,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#666', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#eee', // 50% 处的颜色
                            },
                        ],
                        global: true, // 缺省为 false
                    },
                    opacity: 1,
                },
            },
            zlevel: 1,
        },
        {
            name: '漫出号码量',
            type: 'map',
            map: 'guizhou',
            roam: true,
            geoIndex: 0,
            top: '9.5%',
            left: '20%',
            data: window.dataList,
            zlevel: 5,
        },
    ];

    option = {
        backgroundColor: '#030f24',
        geo: {
            // 底层图
            map: 'guizhou',
            roam: false,
            tooltip: {
                show: false,
            },
            label: {
                normal: {
                    show: true,
                    color: '#fff',
                },
                emphasis: {
                    show: true,
                    color: '#fff',
                },
            },
            top: '9.5%',
            left: '20%',
            itemStyle: {
                normal: {
                    borderColor: '#0f5a70',
                    borderWidth: 0.8,
                    areaColor: {
                        type: 'linear-gradient',
                        x: 1000,
                        y: 600,
                        x2: 1000,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#274d68', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#09132c', // 50% 处的颜色
                            },
                        ],
                        global: true, // 缺省为 false
                    },
                },
                emphasis: {
                    borderColor: '#e6e6e6',
                    borderWidth: 0.8,
                    areaColor: {
                        type: 'linear-gradient',
                        x: 1000,
                        y: 600,
                        x2: 1000,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#b3b3b3', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#b3b3b3', // 50% 处的颜色
                            },
                        ],
                        global: true, // 缺省为 false
                    },
                },
            },
            zlevel: 2,
        },
        tooltip: {
            show: false,
            trigger: 'item',
            formatter: function (e, t, n) {
                console.log(e);
                return 0.5 == e.value ? e.name + '：有疑似病例' : e.seriesName + '<br />' + e.name + '：' + e.value;
            },
        },
        legend: {
            show: false,
        },
        visualMap: {
            min: 0,
            max: 1000,
            left: 26,
            bottom: 40,
            showLabel: !0,
            text: ['高', '低'],
            textStyle: {
                color: '#f2f2f2',
            },
            seriesIndex: 1,
            pieces: [
                {
                    gt: 100,
                    label: '> 100 人',
                    color: '#7f1100',
                },
                {
                    gte: 10,
                    lte: 100,
                    label: '10 - 100 人',
                    color: '#ff5428',
                },
                {
                    gte: 1,
                    lt: 10,
                    label: '1 - 9 人',
                    color: '#ff8c71',
                },
                {
                    gt: 0,
                    lt: 1,
                    label: '疑似',
                    color: '#ffd768',
                },
                {
                    value: 0,
                    color: '#ffffff',
                },
            ],
            show: !0,
        },
        series: series,
    };
    myChart.setOption(option);
});
