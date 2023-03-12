var uploadedDataURL = "/asset/get/s/data-1583323501168-AhiPDktm.xlsx";


window.dataList = [{
        name: "南海诸岛",
        value: 0
    },
    {
        name: '北京',
        value: 62
    },
    {
        name: '天津',
        value: 4
    },
    {
        name: '上海',
        value: 87
    },
    {
        name: '重庆',
        value: 1
    },
    {
        name: '河北',
        value: 2
    },
    {
        name: '河南',
        value: 2
    },
    {
        name: '云南',
        value: 0
    },
    {
        name: '辽宁',
        value: 1
    },
    {
        name: '黑龙江',
        value: 1
    },
    {
        name: '湖南',
        value: 1
    },
    {
        name: '安徽',
        value: 1
    },
    {
        name: '山东',
        value: 3
    },
    {
        name: '新疆',
        value: 0
    },
    {
        name: '江苏',
        value: 20
    },
    {
        name: '浙江',
        value: 12
    },
    {
        name: '江西',
        value: 0
    },
    {
        name: '湖北',
        value: 4
    },
    {
        name: '广西',
        value: 0
    },
    {
        name: '甘肃',
        value: 1
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
        value: 1
    },
    {
        name: '吉林',
        value: 1
    },
    {
        name: '福建',
        value: 4
    },
    {
        name: '贵州',
        value: 1
    },
    {
        name: '广东',
        value: 37
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
        value: 12
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
];
option = {
    tooltip: {
        triggerOn: "click",
        formatter: function(e, t, n) {
            return .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value
        }
    },
    visualMap: {
        min: 0,
        max: 1000,
        left: 26,
        bottom: 40,
        showLabel: !0,
        text: ["高", "低"],
        pieces: [{
            gt: 15,
            label: "> 15 人",
            color: "#7f1100"
        }, {
            gte: 5,
            lte: 15,
            label: "5 - 15 人",
            color: "#F20808"
        }, {
            gte: 2,
            lt: 5,
            label: "2 - 5 人",
            color: "#ff5428"
        }, {
            gte: 1,
            lt: 1,
            label: "1",
            color: "#ff8c71"
        }, {
            value: 0,
            color: "#ffffff"
        }],
        show: !0
    },
    geo: {
        map: "china",
        roam: !1,
        scaleLimit: {
            min: 1,
            max: 2
        },
        zoom: 1.23,
        top: 120,
        label: {
            normal: {
                show: !0,
                fontSize: "14",
                color: "rgba(0,0,0,0.7)"
            }
        },
        itemStyle: {
            normal: {
                //shadowBlur: 50,
                //shadowColor: 'rgba(0, 0, 0, 0.2)',
                borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
                areaColor: "#f2d5ad",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                borderWidth: 0
            }
        }
    },
    series: [{
        name: "合作客户区域分布",
        type: "map",
        geoIndex: 0,
        data: window.dataList
    }]
};