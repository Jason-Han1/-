window.dataList = [{
    name: '安徽',value: 536.3969
}, {
    name: '澳门',value: 0
}, {
    name: '北京',value:77.84699
}, {
    name: '福建',value: 317.9556
}, {
    name: '甘肃',value: 59.54425
}, {
    name: '广东',value: 515.6907
}, {
    name: '广西',value: 95.82085
}, {
    name: '贵州',value: 78.41794
}, {
    name: '海南',value: 69.61957
}, {
    name: '河北',value: 344.0067
}, {
    name: '河南',value: 356.9241
}, {
    name: '黑龙江',value: 319.0389
}, {
    name: '湖北',value: 344.8947
}, {
    name: '湖南',value: 261.1903
}, {
    name: '吉林',value: 265.8246
}, {
    name: '江苏',value:600.7314
}, {
    name: '江西',value: 247.778
}, {
    name: '辽宁',value: 234.5218
}, {
    name: '内蒙古',value: 397.9658
}, {
    name: '宁夏',value: 62.60364
}, {
    name: '青海',value: 45.82657
}, {
    name: '山东',value: 817.2337
}, {
    name: '山西',value: 394.854
}, {
    name: '陕西',value: 152.3255
}, {
    name: '上海',value: 83.07353
}, {
    name: '四川',value: 234.4407
}, {
    name: '台湾',value: 0
}, {
    name: '天津',value: 83.75979
}, {
    name: '西藏',value: 0
}, {
    name: '香港',value: 0
}, {
    name: '新疆',value: 244.8631
}, {
    name: '云南',value:132.2205
}, {
    name: '浙江',value: 365.2507
}, {
    name: '重庆',value: 61.377
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
        max: 2000,
        left: 26,
        bottom: 50,
        showLabel: !0,
        text: ["高", "低"],
        pieces: [{
            gt: 600,
            label: "> 600Mt",
            color: "#000080"
        }, {
            gte: 400,
            lte: 600,
            label: "400-600 Mt",
            color: "#0000FF"
        }, {
            gte: 200,
            lte: 400,
            label: "200-400 Mt",
            color: "#4169E1"
        }, {
            gte: 45,
            lt: 200,
            label: "45-200Mt",
            color: "#6495ED"
        }, {
            gte: 1,
            lt: 0,
            label: "无数据",
            color:"#ffffff"
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
        top: 51,
        label: {
            normal: {
                show: !0,
                fontSize: "12",
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
        name: "确诊病例",
        type: "map",
        geoIndex: 0,
        data: window.dataList
    }]
};