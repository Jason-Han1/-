var fontSize = (val) => {
    return val
}
let data = [{
    name: "a",
    value: 40
}, {
    name: "b",
    value: 30
}, {
    name: "c",
    value: 20
}, {
    name: "d",
    value: 10
}, {
    name: "e",
    value: 5
}]
option = {
    backgroundColor: '#012248',
    color: [
        "#f08080",
        "#ebcc7b",
        "#69d4b5",
        "#00b7ee",
        "#81afe7",
        "#cfd4d8",
        "#d2d17c",
        "#5085f2",
        "#8d7fec",
        "#e75fc3"
    ],
    tooltip: {
        trigger: 'item',
        formatter: '{a}<br/>{b}：{d}%'
    },
    legend: {
        orient: 'vertical',
        top: 'center',
        left: '65%',
        itemWidth: fontSize(28),
        itemHeight: fontSize(14),
        itemGap: fontSize(14),
        textStyle: {
            color: "#ffffff",
            fontSize: fontSize(14),
        },
    },
    calculable: true,
    series: [{
        name: '分布',
        type: 'pie',
        radius: ["20%", "30%"],
        center: ['40%', '50%'],
        // roseType: 'area',
        label: {
            normal: {
                show: true,
                formatter: "{b}：{c}人",
                fontSize: fontSize(14),
                color: '#ffffff'
            },
        },
        data: data
    }, ]
}