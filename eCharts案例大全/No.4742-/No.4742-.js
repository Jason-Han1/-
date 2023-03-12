var scale = 1;
var echartData = [{
        name: "主动发现",
        value: 11,
    },
    {
        name: "市民反馈",
        value: 18,
    },
    {
        name: "智能发现",
        value: 15,
    }
];
var total_datas = 0;
for (var i = 0; i < echartData.length; i++) {
    total_datas += echartData[i].value;
}
option = {
    backgroundColor: "#000",
    tooltip: {
        show: true,
        trigger: "item",
    },
    legend: {
        type: "scroll",
        x: "center",
        top: "90%",
        itemWidth: 20,
        itemHeight: 12,
        itemGap: 30,
        selectedMode: false,
        icon: "bar",
        data: ["主动发现", "市民反馈", "智能发现"],
        textStyle: {
            color: "#fff",
            fontSize: 16,
        },
    },
    series: [{
        name: "",
        type: "pie",
        radius: ["35%", "45%"],
        center: ["50%", "50%"],
        color: ["#358FDC", "#9275FF", "#FFE075"],
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
                    return ("{white|" + params.name + "\n" + "}" + "{yt|" + params.data.value + "}" + "{wj|万件}" + "{blue|" + percent + "}" + "{bfb|%}");
                },
                rich: {
                    blue: {
                        color: "#ffa800",
                        fontSize: 16 * scale,
                        align: "center",
                    },
                    white: {
                        //百分数样式
                        color: "#fff",
                        fontSize: 18,
                        align: "center",
                        padding: [10, 0],
                    },
                    yt: {
                        color: "#ffa800",
                        fontSize: 16,
                    },
                    wj: {
                        color: "#fff",
                        fontSize: 16,
                        padding: [10, 10],
                    },
                    bfb: {
                        color: "#fff",
                        fontSize: 16,
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