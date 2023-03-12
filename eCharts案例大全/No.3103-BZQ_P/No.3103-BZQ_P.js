window.dataList = [
    {
        name: '南海诸岛',
        value: 0,
    },
    {
        name: '北京',
        value: 15,
    },
    {
        name: '天津',
        value: 1,
    },
    {
        name: '上海',
        value: 5,
    },
    {
        name: '重庆',
        value: 1,
    },
    {
        name: '河北',
        value: 2,
    },
    {
        name: '河南',
        value: 0,
    },
    {
        name: '云南',
        value: 2,
    },
    {
        name: '辽宁',
        value: 1,
    },
    {
        name: '黑龙江',
        value: 1,
    },
    {
        name: '湖南',
        value: 0,
    },
    {
        name: '安徽',
        value: 4,
    },
    {
        name: '山东',
        value: 4,
    },
    {
        name: '新疆',
        value: 0,
    },
    {
        name: '江苏',
        value:7,
    },
    {
        name: '浙江',
        value: 11,
    },
    {
        name: '江西',
        value: 1,
    },
    {
        name: '湖北',
        value: 0,
    },
    {
        name: '广西',
        value: 0,
    },
    {
        name: '甘肃',
        value: 0,
    },
    {
        name: '山西',
        value: 0.34,
    },
    {
        name: '内蒙古',
        value: 0.26,
    },
    {
        name: '陕西',
        value: 1,
    },
    {
        name: '吉林',
        value: 0,
    },
    {
        name: '福建',
        value: 3,
    },
    {
        name: '贵州',
        value: 0,
    },
    {
        name: '广东',
        value: 37,
    },
    {
        name: '青海',
        value: 0,
    },
    {
        name: '西藏',
        value: 0.34,
    },
    {
        name: '四川',
        value:1,
    },
    {
        name: '宁夏',
        value: 0,
    },
    {
        name: '海南',
        value: 2,
    },
    {
        name: '台湾',
        value: 0,
    },
    {
        name: '香港',
        value: 0,
    },
    {
        name: '澳门',
        value: 0,
    },
];
option = {
    tooltip: {},
    visualMap: {
        min: 0,
        max: 1000,
        left: 26,
        bottom: 40,
        showLabel: !0,
        text: ['数量'],
        precision: 1,
        pieces: [
            {
                gte: 20,
                color: '#ff5428',
            },

            {
                gte:10,
                lt: 20,
                color: '#ff8c71',
            },
            {
                gte:4,
                lt: 10,
                color: '#ffd768',
            },
            {
                gt: 0.5,
                lt: 4,
                color: '#cde1ff',
            },
        ],
    },
    geo: {
        map: 'china',
        roam: !1,
        scaleLimit: {
            min: 1,
            max: 50,
        },
        // zoom: 1.23,
        label: {
            normal: {
                show: !0,
                fontSize: '14',
                color: 'rgba(0,0,0,0.7)',
            },
        },
        itemStyle: {
            normal: {
                //shadowBlur: 50,
                //shadowColor: 'rgba(0, 0, 0, 0.2)',
                borderColor: 'rgba(0, 0, 0, 0.2)',
            },
            emphasis: {
                areaColor: '#f2d5ad',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                borderWidth: 0,
            },
        },
        tooltip: {
            show: true,
            trigger: 'item',
            formatter: (params) => {
                console.log('formater', params);
                return 'test';
            },
        },
    },
    series: [
        {
            name: '万投比',
            type: 'map',
            geoIndex: 0,
            data: window.dataList,
        },
    ],
};
