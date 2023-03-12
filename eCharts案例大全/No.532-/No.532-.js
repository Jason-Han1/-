option = {
    backgroundColor: 'blurScope',
    color: ['#02C622', '#7C5BF6', '#F9FF57', '#FF893B', '#8DFD15', '#00FFFF'],
    legend: {
        width: '65%',
        left: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 16,
        },
        // icon: "circle",
        itemWidth: 24,
        itemHeight: 19,
        right: '0',
        bottom: '0',
        padding: [30, 60],
        itemGap: 20,
        data: ['港口经营', '综合运输', '交通建设', '物贸供应链', '港产城开发', '其他'],
    },
    toolbox: {
        show: false,
    },
    series: [
        {
            type: 'pie',
            clockWise: false,
            radius: ['35%', '50%'],
            center: ['50%', '40%'],
            hoverAnimation: false,
            zlevel: 2,
            label: {
                show: false,
            },
            labelLine: {
                //引导线设置
                show: false, //引导线显示
            },
            data: [
                { name: '港口经营', value: 4 },
                { name: '综合运输', value: 28 },
                { name: '交通建设', value: 12 },
                { name: '物贸供应链', value: 51 },
                { name: '港产城开发', value: 2 },
                { name: '其他', value: 3 },
            ],
        },
        {
            type: 'pie',
            clockWise: false,
            radius: ['40%', '54%'],
            center: ['50%', '40%'],
            hoverAnimation: false,
            zlevel: 0,
            label: {
                show: true,
                position: 'outside',
                color: '#fff',
                formatter: function (params) {
                    if (params.name !== '') {
                        return params.name + ' ' + params.value + '%';
                    } else {
                        return '';
                    }
                },
            },
            labelLine: {
                //引导线设置
                length: 20,
                show: true, //引导线显示
            },
            data: [
                { name: '港口经营', value: 4 },
                { name: '综合运输', value: 28 },
                { name: '交通建设', value: 12 },
                { name: '物贸供应链', value: 51 },
                { name: '港产城开发', value: 2 },
                { name: '其他', value: 3 },
            ],
        },
        {
            type: 'pie',
            radius: ['40%', '55%'],
            center: ['50%', '40%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            data: [100],
            itemStyle: {
                color: '#032A7F',
            },
            labelLine: {
                //引导线设置
                show: false, //引导线显示
            },
            zlevel: 1,
        },
    ],
};
