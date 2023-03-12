option = {
    title: {
        text: '内存占用率',
        x: '50%',
        y: '45%',
        textAlign: "center",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24
        },
        subtextStyle: {
            fontWeight: 'bold',
            fontSize: 32,
            color: '#3ea1ff'
        }
    },
    series: [{
            name: ' ',
            type: 'pie',
            radius: ['50%', '70%'],
            startAngle: 225,
            color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#00a2ff'
            }, {
                offset: 1,
                color: '#70ffac'
            }]), "transparent"],
            hoverAnimation: false,
            legendHoverLink: false,
            itemStyle: {
                normal: {
                    borderColor: "transparent",
                    borderWidth: "20"
                },
                emphasis: {
                    borderColor: "transparent",
                    borderWidth: "20"
                }
            },
            z: 10,
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 75
            }, {
                value: 25
            }]
        }, {
            name: '',
            type: 'pie',
            radius: ['50%', '70%'],
            startAngle: 225,
            color: ["#c2f5e1", "transparent"],
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 75
            }, {
                value: 25
            }]
        }

    ]
};


app.timeTicket = setInterval(function() {
    var value = parseInt(Math.random() * 100);
    setPercent(value);
}, 1000);

function setPercent(p) {
    var value = parseInt(Math.random() * 100) + 1,
        value_ = 75 * value / 100;
    option.title.subtext = value + "%";
    option.series[0].data[0].value = value_;
    option.series[0].data[1].value = 100 - value_;
    myChart.setOption(option, true);
}