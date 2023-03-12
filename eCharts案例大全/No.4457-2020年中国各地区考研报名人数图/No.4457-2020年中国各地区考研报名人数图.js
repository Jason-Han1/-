var data = [{
        name: "北京",
        value: 42.5,
    },
    {
        name: "天津",
        value: 6.8,
    },
    {
        name: "上海",
        value: 7.1,
    },
    {
        name: "重庆",
        value: 7.9,
    },
    {
        name: "河北",
        value: 15.7,
    },
    {
        name: "河南",
        value: 25.3,
    },
    {
        name: "云南",
        value: 5.6,
    },
    {
        name: "辽宁",
        value: 11.9,
    },
    {
        name: "黑龙江",
        value: 9.94,
    },
    {
        name: "湖南",
        value: 12.2,
    },
    {
        name: "安徽",
        value: 16.5,
    },
    {
        name: "山东",
        value: 31.3,
    },
    {
        name: "新疆",
        value: 4.2,
    },
    {
        name: "江苏",
        value: 24.1,
    },
    {
        name: "浙江",
        value: 11,
    },
    {
        name: "江西",
        value: 9.6,
    },
    {
        name: "湖北",
        value: 16.28,
    },
    {
        name: "广西",
        value: 5.3,
    },
    {
        name: "甘肃",
        value: 6.3,
    },
    {
        name: "山西",
        value: 14.8,
    },
    {
        name: "内蒙古",
        value: 7.5,
    },
    {
        name: "陕西",
        value: 12.2,
    },
    {
        name: "吉林",
        value: 8.1,
    },
    {
        name: "福建",
        value: 6.6,
    },
    {
        name: "贵州",
        value: 5.8,
    },
    {
        name: "广东",
        value: 17.4,
    },
    {
        name: "青海",
        value: 1.4,
    },
    {
        name: "西藏",
        value: 0.8,
    },
    {
        name: "四川",
        value: 17.4,
    },
    {
        name: "宁夏",
        value: 13.3,
    },
    {
        name: "海南",
        value: 3.3,
    },
    {
        name: "台湾",
        value: 0,
    },
    {
        name: "香港",
        value: 0,
    },
    {
        name: "澳门",
        value: 0,
    },
];
// 指定图表的配置项和数据
var option = {
    title: {
        text: "2020年中国各地区考研报名人数图",
        left: "center",
    },
    tooltip: {
        trigger: "item",
    },
    legend: {
        orient: "vertical",
        left: "left",
        data: ["2020年中国各地区考研报名人数图"],
    },
    visualMap: {
        type: "piecewise",
        pieces: [{
                min: 25.1,
                max: 45,
                label: "人数30万及以上",
                color: "#FF0000",
            },
            {
                min: 20.1,
                max: 25,
                label: "人数20万-25万",
                color: "#EEDD78",
            },
            {
                min: 15.1,
                max: 20,
                label: "人数15万-20万",
                color: "#32C5E9"
            },
            {
                min: 10.1,
                max: 15,
                label: "人数10万-15万",
                color: "#FFDB5C"
            },
            {
                min: 5.1,
                max: 10,
                label: "人数5万-10万",
                color: "#37A2DA"
            },
            {
                min: 0,
                max: 5,
                label: "人数5万以下",
                color: "#04B9FF"
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
            name: "报名人数",
            type: "map", //图表类型
            geoIndex: 0,
            data: data, //图表的数据
        },

    ],
};