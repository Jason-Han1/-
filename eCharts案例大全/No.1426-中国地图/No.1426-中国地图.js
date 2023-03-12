$.get('https://gallerybox.makeapie.com/asset/get/s/data-1469178154210-H1GNZvkO.json', function (d) {
    echarts.registerMap('china', d);
    option = {
        tooltip: {
            trigger: 'item',
        },
        visualMap: {
            type: 'piecewise',
            left: 0,
            top: 0,
            text: ['单位（个）'],
            showLabel: true,
            calculable: true,
            realtime: false,
            pieces: [{ gt: 50 }, { gt: 30, lte: 50 }, { gt: 10, lte: 30 }, { gt: 0, lte: 10 }, { lte: 0 }],
            inRange: {
                color: ['#C4EAFF', '#7FC9FF', '#3AA0FF', '#2F88DF', '#2661A8'],
            },
        },
        series: [
            {
                name: '投资数量',
                type: 'map',
                map: 'china',
                roam: true,
                emphasis: {
                    label: {
                        show: true,
                    },
                },
                data: [
                    { name: '北京', value: 60 },
                    { name: '天津', value: 10 },
                    { name: '上海', value: 50 },
                    { name: '重庆', value: 9 },
                    { name: '河北', value: 25 },
                    { name: '河南', value: 18 },
                    { name: '云南', value: 0 },
                    { name: '辽宁', value: 11 },
                    { name: '黑龙江', value: 0 },
                    { name: '湖南', value: 39 },
                    { name: '安徽', value: 17 },
                    { name: '山东', value: 33 },
                    { name: '新疆', value: 0 },
                    { name: '江苏', value: 45 },
                    { name: '浙江', value: 58 },
                    { name: '江西', value: 28 },
                    { name: '湖北', value: 56 },
                    { name: '广西', value: 13 },
                    { name: '甘肃', value: 0 },
                    { name: '山西', value: 6 },
                    { name: '内蒙古', value: 0 },
                    { name: '陕西', value: 0 },
                    { name: '吉林', value: 2 },
                    { name: '福建', value: 35 },
                    { name: '贵州', value: 0 },
                    { name: '广东', value: 58 },
                    { name: '青海', value: 0 },
                    { name: '西藏', value: 1 },
                    { name: '四川', value: 9 },
                    { name: '宁夏', value: 0 },
                    { name: '海南', value: 0 },
                    { name: '台湾', value: 0 },
                    { name: '香港', value: 0 },
                    { name: '澳门', value: 0 },
                ],
            },
        ],
    };
    if (option && typeof option === 'object') {
        myChart.setOption(option, true);
    }
});
