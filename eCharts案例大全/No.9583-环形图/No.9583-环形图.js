var option = {
    title: {
        text: "项目总数",
        left: "center",
        top: "51%",
        padding: [15, 0],
        textStyle: {
            fontSize: 18,
            align: "center"
        }
    },
    legend: {
        selectedMode: false,
        left: "center",
        top: "center",
        icon: "none",
        align: "center",
        textStyle: {
            fontSize: 25,
            fontWeight: "bold",
            rich: {
                value: {
                    fontSize: 20,
                    align: "left"
                },
                percent: {
                    fontSize: 10,
                    align: "right"
                },
                name: {
                    align: "left",
                    fontSize: 12
                },
                hr: {
                    borderColor: "#0b5263",
                    width: "100%",
                    borderWidth: 1,
                    height: 0
                }
            }
        },
        data: ["交接中"],
        formatter: function() {
            return '{total|100}';
        }
    },
    series: [{
        name: "项目总数",
        type: "pie",
        radius: ["40%", "60%"],
        hoverAnimation: false,
        color: ["#9ECC66", "#a788fc", "#ffc257", "#ff8d38", "#369af4", "#ea5e6f"],
        label: {
            normal: {
                formatter: function(params, ticket, callback) {
                    return '{value|' + params.value + '}' +
                        '  {percent|' + params.percent + '%}' +
                        '\n{name|' + params.name + '}\n{hr|}';
                },
                rich: {
                    value: {
                        fontSize: 20,
                        align: "left"
                    },
                    percent: {
                        fontSize: 10,
                        align: "right"
                    },
                    name: {
                        align: "left",
                        fontSize: 12
                    },
                    hr: {
                        borderColor: "#0b5263",
                        width: "100%",
                        borderWidth: 1,
                        height: 0
                    }
                }
            }
        },
        labelLine: {
            normal: {
                length: 15,
                length2: 10,
                lineStyle: {
                    color: "#0b5263"
                }
            }
        },
        data: [{
            name: "交接中",
            value: 2
        }, {
            name: "项目在施",
            value: 50
        }, {
            name: "待交接",
            value: 68
        }, {
            name: "项目完工",
            value: 32
        }, {
            name: "项目准备",
            value: 3
        }, {
            name: "质保维护",
            value: 4
        }]
    }]
}