let data = [{
        name: "IE浏览器",
        value: 20,
        color: "#3475E6"
    },
    {
        name: "Safari浏览器",
        value: 20,
        color: "#409CDA"
    },
    {
        name: "谷歌浏览器",
        value: 20,
        color: "#E7C362"
    },
    {
        name: "火狐浏览器",
        value: 20,
        color: "#EC5349"
    },
    {
        name: "qq浏览器",
        value: 20,
        color: "#499BF3"
    },
    {
        name: "360浏览器",
        value: 20,
        color: "#56C932"
    }
];
option = {
    color: data.map(item => item.color),
    tooltip: {
        trigger: "item",
        formatter: "{b}: {d}%"
    },
    legend: {
        itemGap: 24,
        top: "10%",
        left: "center",
        textStyle: {
            color: "#EEEEEE",
            rich: {
                a: {
                    width: 80
                }
            }
        },
        formatter: function(name) {
            return `{a|${name}}`;
        },
        data: data.map(item => item.name)
    },
    series: [{
        name: "浏览器登录情况",
        type: "pie",
        center: ["50%", "60%"],
        radius: ["45%", "63%"],
        avoidLabelOverlap: false,
        label: {
            show: false,
            position: "center"
        },
        emphasis: {
            label: {
                show: false
            }
        },
        labelLine: {
            show: false
        },
        data: data.map(item => item)
    }]
};