// 使用脚本https://www.makeapie.com/dep/echarts/map/js/china.js
option = {
    tooltip: {
        show: false,
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['站点数据'],
        show: false
    },
    visualMap: {

        pieces: [{
            gte: 1,
            label: "1 - 9 人",
            color: "#e13055"
        }, {
            value: 0,
            color: "#FFFFFF"
        }],
        show: false,

    },
    geo: {
        map: "china",
        zoom: 1,
        itemStyle: {
            normal: {
                shadowBlur: 4,
                shadowColor: 'rgba(225,48,85,0.5)',
                shadowOffsetX: -3,
                shadowOffsetY: -3,
                borderColor: "rgb(225,48,85)"
            },
            emphasis: {
                areaColor: "rgba(225,48,85,0.4)",
                shadowOffsetX: 0,
                shadowOffsetY: 0,

            }
        },
    },
    series: [{
        name: '站点数据',
        type: 'map',
        mapType: 'china',
        roam: false,
        label: {
            show: true,
            color: '#000000'
        },
        itemStyle: {
            normal: {
                borderWidth: 0.7,
                borderColor: "rgb(225,48,85)"
            },
            emphasis: {
                borderWidth: 0,
                areaColor: "rgba(225,48,85,0.4)",
            }
        },
        data: [{
                name: "南海诸岛",
                value: 0
            },
            {
                name: '北京',
                value: 11
            },
            {
                name: '天津',
                value: 13
            },
            {
                name: '上海',
                value: 0
            },
            {
                name: '重庆',
                value: 0
            },
            {
                name: '河北',
                value: 0
            },
            {
                name: '河南',
                value: 0
            },
            {
                name: '云南',
                value: 0
            },
            {
                name: '辽宁',
                value: 0
            },
            {
                name: '黑龙江',
                value: 0
            },
            {
                name: '湖南',
                value: 0
            },
            {
                name: '安徽',
                value: 0
            },
            {
                name: '山东',
                value: 0
            },
            {
                name: '新疆',
                value: 0
            },
            {
                name: '江苏',
                value: 0
            },
            {
                name: '浙江',
                value: 10
            },
            {
                name: '江西',
                value: 0
            },
            {
                name: '湖北',
                value: 0
            },
            {
                name: '广西',
                value: 0
            },
            {
                name: '甘肃',
                value: 0
            },
            {
                name: '山西',
                value: 0
            },
            {
                name: '内蒙古',
                value: 0
            },
            {
                name: '陕西',
                value: 0
            },
            {
                name: '吉林',
                value: 0
            },
            {
                name: '福建',
                value: 0
            },
            {
                name: '贵州',
                value: 0
            },
            {
                name: '广东',
                value: 0
            },
            {
                name: '青海',
                value: 0
            },
            {
                name: '西藏',
                value: 0
            },
            {
                name: '四川',
                value: 0
            },
            {
                name: '宁夏',
                value: 0
            },
            {
                name: '海南',
                value: 0
            },
            {
                name: '台湾',
                value: 0
            },
            {
                name: '香港',
                value: 0
            },
            {
                name: '澳门',
                value: 0
            }
        ]
    }]
};