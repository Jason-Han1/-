var dataList = [{
        name: "南海诸岛",
        value: 0
    },
    {
        name: '北京',
        value: 54
    },
    {
        name: '天津',
        value: 13
    },
    {
        name: '上海',
        value: 40
    },
    {
        name: '重庆',
        value: 75
    },
    {
        name: '河北',
        value: 13
    },
    {
        name: '河南',
        value: 83
    },
    {
        name: '云南',
        value: 11
    },
    {
        name: '辽宁',
        value: 19
    },
    {
        name: '黑龙江',
        value: 15
    },
    {
        name: '湖南',
        value: 69
    },
    {
        name: '安徽',
        value: 60
    },
    {
        name: '山东',
        value: 39
    },
    {
        name: '新疆',
        value: 4
    },
    {
        name: '江苏',
        value: 31
    },
    {
        name: '浙江',
        value: 104
    },
    {
        name: '江西',
        value: 36
    },
    {
        name: '湖北',
        value: 1052
    },
    {
        name: '广西',
        value: 33
    },
    {
        name: '甘肃',
        value: 7
    },
    {
        name: '山西',
        value: 9
    },
    {
        name: '内蒙古',
        value: 7
    },
    {
        name: '陕西',
        value: 22
    },
    {
        name: '吉林',
        value: 4
    },
    {
        name: '福建',
        value: 18
    },
    {
        name: '贵州',
        value: 5
    },
    {
        name: '广东',
        value: 98
    },
    {
        name: '青海',
        value: 1
    },
    {
        name: '西藏',
        value: 0
    },
    {
        name: '四川',
        value: 44
    },
    {
        name: '宁夏',
        value: 4
    },
    {
        name: '海南',
        value: 22
    },
    {
        name: '台湾',
        value: 3
    },
    {
        name: '香港',
        value: 5
    },
    {
        name: '澳门',
        value: 5
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
        // text: ["高", "低"],
        pieces: [{
                    value: 1,
                    label: '东北大区',
                    color: 'rgba(231,210,99,1)'
                },
                {
                    value: 2,
                    label: '华北大区',
                    color: 'rgba(50,100,236,1)'
                },
                {
                    value: 3,
                    label: '中原大区',
                    color: 'rgba(2,201,251,1)'
                },
                {
                    value: 4,
                    label: '西北大区',
                    color: 'rgba(159,202,70,1)'
                },
                {
                    value: 5,
                    label: '西南大区',
                    color: 'rgba(225,131,46,1)'
                },
                {
                    value: 6,
                    label: '华南大区',
                    color: 'rgba(225,131,46,1)'
                },
                {
                    value: 7,
                    label: '中南大区',
                    color: 'rgba(225,131,46,1)'
                }
                ],
        show: true
    },
    geo: {
        map: "china",
        tooltip: {
            show: false
        },
        roam: true,
        // scaleLimit: {
        //     min: 1,
        //     max: 3
        // },
        zoom: 1.23,
        top: 120,
        label: {
            normal: {
                show: false,
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
        },
        emphasis: {
            label: {
                show: false
            }
        }
    },
    series: [{
        name: "确诊病例",
        type: "map",
        geoIndex: 0,
        data: dataList,
        tooltip: {
            show: false
        },
        label: {
            normal: {
                show: false
            }
        },
        emphasis: {
            label: {
                show: false
            }
        }
    }]
};

// 实例
var chart = echarts.init(document.getElementById('chart-panel'));
chart.setOption(option, true);
chart.on("mouseover", function(params) {
    var city = params.name;
    if (city == "新疆" ||
        //city == "重庆" ||
        city == "陕西" ||
        city == "甘肃" ||
        city == "宁夏" ||
        city == "青海" ||
        city == "内蒙古" ||
        city == "黑龙江" ||
        city == "吉林" ||
        city == "辽宁" ||
        city == "江门" ||
        city == "云南" ||
        city == "西藏" ||
        city == "上海" ||
        city == "福建" ||
        //city == "广东" ||
        city == "浙江" ||
        city == "海南") {
        chart.dispatchAction({
            type: "highlight",
            name: "新疆"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "浙江"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "重庆"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "陕西"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "甘肃"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "宁夏"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "青海"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "内蒙古"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "黑龙江"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "吉林"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "辽宁"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "江门"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "云南"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "西藏"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "上海"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "福建"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "广东"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "海南"
        });
    }
    if (city == "上海" || city == "江苏" || city == "浙江" || city == "安徽") {
        chart.dispatchAction({
            type: "highlight",
            name: "上海"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "江苏"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "浙江"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "安徽"
        });
    }
    if (city == "北京" || city == "河北" || city == "天津") {
        chart.dispatchAction({
            type: "highlight",
            name: "北京"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "河北"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "天津"
        });
    }
    if (city == "重庆" || city == "四川") {
        chart.dispatchAction({
            type: "highlight",
            name: "重庆"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "四川"
        });
    }
    if (city == "广东" || city == "深圳") {
        chart.dispatchAction({
            type: "highlight",
            name: "广东"
        });
        chart.dispatchAction({
            type: "highlight",
            name: "深圳"
        });
    }
});
chart.on("mouseout", function(params) {
    var city = params.name;
    if (city == "新疆" ||
        city == "重庆" ||
        city == "陕西" ||
        city == "甘肃" ||
        city == "宁夏" ||
        city == "青海" ||
        city == "内蒙古" ||
        city == "黑龙江" ||
        city == "吉林" ||
        city == "辽宁" ||
        city == "江门" ||
        city == "云南" ||
        city == "西藏" ||
        city == "上海" ||
        city == "福建" ||
        //city == "广东" ||
        city == "浙江" ||
        city == "海南") {
        chart.dispatchAction({
            type: "downplay",
            name: "新疆"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "浙江"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "重庆"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "陕西"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "甘肃"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "宁夏"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "青海"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "内蒙古"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "黑龙江"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "吉林"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "辽宁"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "江门"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "云南"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "西藏"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "上海"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "福建"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "广东"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "海南"
        });
    }
    if (city == "上海" || city == "江苏" || city == "浙江" || city == "安徽") {
        chart.dispatchAction({
            type: "downplay",
            name: "上海"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "江苏"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "浙江"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "安徽"
        });
    }
    if (city == "北京" || city == "河北" || city == "天津") {
        chart.dispatchAction({
            type: "downplay",
            name: "北京"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "河北"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "天津"
        });
    }
    if (city == "重庆" || city == "四川") {
        chart.dispatchAction({
            type: "downplay",
            name: "重庆"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "四川"
        });
    }
    if (city == "广东" || city == "深圳") {
        chart.dispatchAction({
            type: "downplay",
            name: "广东"
        });
        chart.dispatchAction({
            type: "downplay",
            name: "深圳"
        });

    }
});