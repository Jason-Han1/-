var bgColor = '#fff';
var fontColor = "#333"
var scale = 1;
var title = '总数';
var chartData = [{
        name: "A类",
        value: "272",
        unit: "元"
    },
    {
        name: "B类",
        value: "292",
        unit: "元"
    },
    {
        name: "C类",
        value: "120",
        unit: "元"
    },
    {
        name: "D类",
        value: "42",
        unit: "元"
    }
]
var legendName = chartData.map(v => v.name);
option = {
    backgroundColor: bgColor,
    color: ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'],
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        icon: 'rect',
        x: '80%',
        y: 'center',
        itemWidth: 12,
        itemHeight: 12,
        align: 'left',
        textStyle: {
            fontSize: 14,
            color: '#000'
        },
        // data: legendName
    },
    series: [{
        type: 'pie',
        radius: ['20%', '60%'],
        center: ['50%', '50%'],
        data: chartData,
        itemStyle: {
            normal: {
                // borderColor: bgColor,
                // borderWidth: 1
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 20
            }
        },
        label: {
            normal: {
                formatter: params => {
                    console.log(params)
                    return (
                        "{name| " +
                        params.name +
                        "}\n" +
                        "{value|" +
                        params.percent.toFixed(2) +
                        "}" +
                        "{unit|%}"
                    );
                },
                rich: {
                    name: {
                        fontSize: 12 * scale,
                        lineHeight: 12 * scale,
                        color: fontColor
                    },
                    value: {
                        fontSize: 16 * scale,
                        lineHeight: 16 * scale,
                        color: fontColor
                    },
                    unit: {
                        fontSize: 12 * scale,
                        lineHeight: 12* scale,
                        color: fontColor,
                        padding: [0, 0, 5 * scale, 0]
                    }
                }
            }
        },
    }]
};