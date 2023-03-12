var scale = 1;
var echartData = [{
        name: "水",
        value: 11,
    },
    {
        name: "氮气",
        value: 18,
    },
    {
        name: "电",
        value: 15,
    },
    {
        name: "自耗气",
        value: 10,
    },
];
var total_datas = 0;
for (var i = 0; i < echartData.length; i++) {
    total_datas += echartData[i].value;
}
option = {
    tooltip: {
        show: true,
        trigger: "item",
    },
    title: {
        text: total_datas,
        textStyle: {
            color: "#333",
            fontWeight: "normal",
            fontSize: 18,
            align: "center",
            padding: 20,
        },
        subtext: "万吨",
        textAlign: "center",
        subtextStyle: {
            fontSize: 16,
            color: "#333",
            align: "center",
            fontWeight: "normal",
        },
        textAlign: "center",
        left: "39%",
        y: "45%",
    },
    graphic: {
        type: "text",
        left: "38%",
        top: "53%",
        style: {
            text: "标煤",
            align: "center",
            fill: "#333",
            fontSize: 16,
            fontWeight: "normal",
        },
        textAlign: "center",
    },
    legend: {
        type: "scroll",
        orient: "vertical",
        right: "10%",
        top: "center",
        itemWidth: 20,
        itemHeight: 12,
        itemGap: 30,
        selectedMode: false,
        icon: "bar",
        data: ["水", "氮气", "电", "自耗气"],
        textStyle: {
            color: "#333",
            fontSize: 16,
        },
    },
    series: [{
        name: "",
        type: "pie",
        radius: ["45%", "55%"],
        center: ["40%", "50%"],
        color: ["#6FB8DA", "#63CEFF", "#2053A9", "#18749B"],
        label: {
            normal: {
                show: true,
                formatter: function(params, ticket, callback) {
                    var total = 0;
                    var percent = 0;
                    echartData.forEach(function(value, index, array) {
                        total += value.value;
                    });
                    percent = ((params.value / total) * 100).toFixed();
                    //  return '{blue|' + percent + '%}\n{hr|}\n{white|' + params.name + '}';
                    return (
                        "{white|" +
                        params.name +
                        ":" +
                        "}" +
                        "{blue|" +
                        percent +
                        "%}" +
                        "\n" +
                        "{yt|" +
                        params.data.value +
                        "}"
                    );
                },
                rich: {
                    yellow: {
                        //每个区域面积数560
                        color: "#333",
                        fontSize: 16 * scale,
                        align: "center",
                        padding: [3, 20],
                    },
                    total: {
                        color: "#333",
                        fontSize: 14 * scale,
                        align: "center",
                        padding: [3, 0],
                    },
                    blue: {
                        color: "#333",
                        fontSize: 16 * scale,
                        align: "center",
                    },
                    white: {
                        //百分数样式
                        color: "#333",
                        fontSize: 16,
                        align: "center",
                        padding: [10, 0],
                    },
                    yt: {
                        color: "#333",
                        fontSize: 16,
                        padding: [0, 20],
                    },
                },
            },
        },
        labelLine: {
            normal: {
                length: 20 * scale,
                length2: 30,
            },
        },
        data: echartData,
    }, ],
}