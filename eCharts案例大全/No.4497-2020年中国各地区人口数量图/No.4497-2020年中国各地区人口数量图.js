var data = [{
        name: "北京",
        value: 2170.7,
    },
    {
        name: "天津",
        value: 1559.6,
    },
    {
        name: "上海",
        value: 2423.78,
    },
    {
        name: "重庆",
        value: 3048.43,
    },
    {
        name: "河北",
        value: 7556.30,
    },
    {
        name: "河南",
        value: 9605,
    },
    {
        name: "云南",
        value: 4800.5,
    },
    {
        name: "辽宁",
        value: 4359.3,
    },
    {
        name: "黑龙江",
        value: 3788.7,
    },
    {
        name: "湖南",
        value: 6860.2,
    },
    {
        name: "安徽",
        value: 6323.6,
    },
    {
        name: "山东",
        value: 10047.24,
    },
    {
        name: "新疆",
        value: 2444.67,
    },
    {
        name: "江苏",
        value: 8029.3,
    },
    {
        name: "浙江",
        value: 5737,
    },
    {
        name: "江西",
        value: 4622.1,
    },
    {
        name: "湖北",
        value: 5917,
    },
    {
        name: "广西",
        value: 4885,
    },
    {
        name: "甘肃",
        value: 2625.71,
    },
    {
        name: "山西",
        value: 3702.35,
    },
    {
        name: "内蒙古",
        value: 2534,
    },
    {
        name: "陕西",
        value: 3835.44,
    },
    {
        name: "吉林",
        value: 2625.71,
    },
    {
        name: "福建",
        value: 3941,
    },
    {
        name: "贵州",
        value: 3580,
    },
    {
        name: "广东",
        value: 11346,
    },
    {
        name: "青海",
        value: 598.38,
    },
    {
        name: "西藏",
        value: 337.15,
    },
    {
        name: "四川",
        value: 8341,
    },
    {
        name: "宁夏",
        value: 681.79,
    },
    {
        name: "海南",
        value: 925.76,
    },
    {
        name: "台湾",
        value: 2369,
    },
    {
        name: "香港",
        value: 748.25,
    },
    {
        name: "澳门",
        value: 63.2,
    },
];
// 指定图表的配置项和数据
var option = {
    title: {
        text: "2020年中国各地区人口数量图",
        left: "center",
    },
    tooltip: {
        trigger: "item",
    },
    legend: {
        orient: "vertical",
        left: "left",
        data: ["2020年中国各地区人口数量图数图"],
    },
    visualMap: {
        type: "piecewise",
        pieces: [{
                min: 9001,
                max: 12000,
                label: "人口大于等于9000万",
                color: "#6C3365",
            },
            {
                min: 5001,
                max: 9000,
                label: "人口5000万-9000万",
                color: "#9F4D95"
            },
            {
                min: 4000,
                max: 5000,
                label: "人口4000万-5000万",
                color: "#B766AD"
            },
            {
                min: 2001,
                max: 4000,
                label: "人口2000万-4000万",
                color: "#CA8EC2"
            },
            {
                min: 0,
                max: 2000,
                label: "人口2000万以下",
                color: "#D2A2CC"
            },
        ],
        color: ["#E0022B", "#E09107", "#A3E00B"],
    },
    toolbox: {
        show: true,
        orient: "vertical",
        left: "right",
        top: "center",
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            },
        },
    },
    roamController: {
        show: true,
        left: "right",

    },

    geo: {
        //地理坐标系组件用于地图的绘制
        map: "china",
        roam: false, //不开启缩放和平移
        label: {
            normal: {
                show: true,
                fontSize: "10",
                color: "rgba(0,0,0,0.7)",
            },
        },
        itemStyle: {
            normal: {
                borderColor: "rgba(0, 0, 0, 0.2)",
            },
            emphasis: {
                areaColor: "#1DE9B6", //鼠标选择区域颜色
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
            },
        },
    },
    series: [{
            name: "人口数",
            type: "map", //图表类型
            geoIndex: 0,
            data: data, //图表的数据
        },

    ],
};