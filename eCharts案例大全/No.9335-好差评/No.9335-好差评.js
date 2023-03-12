let data = [{
    "name": "非常满意",
    "value": 230
}, {
    "name": "满意",
    "value": 9
}, {
    "name": "基本满意",
    "value": 15
}, {
    "name": "不满意",
    "value": 2
}];
let color = ["#407fff", "#f29961", "#00cccd ", "#e36973"]
option = {
    backgroundColor: 'transparent',
    animation: true,

    series: [{
        type: "pie",
        center: ["50%", "50%"],
        radius: ["18%", "50%"],
        color: color,
        startAngle: 150,
        labelLine: {
            normal: {
                length: 55,
                length2: 90,
            }
        },
        label: {
            normal: {
                formatter: "{b|{b}}\n ({per|{d}%}) ",
                padding: [0, -70, 40, -70],
                rich: {
                    b: {
                        fontSize: 16,
                    },
                    per: {
                        fontSize: 16,
                    }
                },
            }
        },
        data: data
    }]
}