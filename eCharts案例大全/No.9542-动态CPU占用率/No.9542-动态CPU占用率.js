var item = {
    name: "CPU  ",
    value: random(),
    unit: '%',
    max: 100
};
option = {
    title: {
        text: item.value + item.unit,
        x: '50%',
        y: '40%',
        textAlign: "center",
        textStyle: {
            fontSize: 60,
            color: '#01c8d7'
        },
        subtext: item.name,
        subtextStyle: {
            fontSize: 40,
            color: '#bac7e5',
            align: 'center'
        }
    },
    series: [{
        name: ' ',
        type: 'pie',
        radius: ['60%', '80%'],
        startAngle: 225,
        color: [{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0.4,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: "#00a2ff" // 0% 处的颜色
            }, {
                offset: 1,
                color: "#70ffac" // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        }, 'none'],
        hoverAnimation: false,
        legendHoverLink: false,
        z: 10,
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 75 * item.value / 100
        }, {
            value: item.max - (75 * item.value / 100)
        }]
    }, {
        name: '',
        type: 'pie',
        radius: ['60%', '80%'],
        startAngle: 225,
        color: ["#172228"],
        z: 9,
        hoverAnimation: false,
        legendHoverLink: false,
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 75,
            itemStyle: {
                normal: {
                    color: "#172228"
                }
            }
        }, {
            value: 25
        }]
    }],
    backgroundColor: "#233239"
};

function random() {
    return (Math.random() * 100).toFixed(2);
}

app.timeTicket = setInterval(function() {
    var value = parseInt(Math.random() * 100);
    setPercent(value);
}, 1000);

function setPercent(p) {
    var value = random(),
        value_ = 75 * value / 100;
    option.title.text = value + "%";
    option.series[0].data[0].value = value_;
    option.series[0].data[1].value = 100 - value_;
    myChart.setOption(option, true);
}