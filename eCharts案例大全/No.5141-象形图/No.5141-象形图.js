var img = [{
    a: "/asset/get/s/data-1604987323042-1g4wjk6u-.png",
    b: "/asset/get/s/data-1604987325586-jJ23WO8FX.png",
}, {
    a: "/asset/get/s/data-1604987316870-dQMFPHJHI.png",
    b: "/asset/get/s/data-1604987320193-VsFHYYIsI.png",
}, {
    a: "/asset/get/s/data-1604987328201-4oDsuddIT.png",
    b: "/asset/get/s/data-1604987330682-jQfv4JvNX.png",
}, {
    a: "/asset/get/s/data-1604987332996-DylZZ_K5h.png",
    b: "/asset/get/s/data-1604987335353-ovjwmLd5k.png",
}];

var value = 1; // >0
var getname = ['毕业课题','其中在社会实践中完成数','指导教练数','每名教师平均指导毕业生数'] ;
var getvalue = [29,33,26,30];
var ydata1 = [];
var ydata2 = [];
for (var i = 0; i < getname.length; i++) {
    if (i <= 3) {
        ydata1.push({
            value: value,
            symbol: 'image://' + img[i].b
        });
        ydata2.push({
            value: getvalue[i],
            symbol: 'image://' + img[i].a
        });
    } else {
        ydata1.push({
            value: value,
            symbol: 'image://' + img[i % 4].b
        });
        ydata2.push({
            value: getvalue[i],
            symbol: 'image://' + img[i % 4].a
        });
    }
}

option = {
    backgroundColor: "transparent",
    grid: {
        left: "20",
        top: "20",
        bottom: "10",
        right: "20",
        containLabel: true
    },
    tooltip: {
        trigger: "item",
    },
    xAxis: {
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false,
            inside: false
        },
        data: getname
    }, {
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 15,
            textStyle: {
                color: "#888888",
                fontSize: 15,
            },
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: getvalue
    }],
    series: [{
            tooltip: {
                show: false
            },
            z: 4,
            type: "pictorialBar",
            symbolSize: ['20', '20'],
            barWidth: 20,
            symbolRepeat: "fixed",
            symbolMargin: 6,
             label: {
                normal: {
                    color: '#656565',
                    show: true,
                    position: [0, '-26px'],
                    textStyle: {
                        fontSize: 15
                    },
                    formatter: function(a, b) {
                        return a.name
                    }
                }
            },
            data: ydata1,
        },
        {
            z: 6,
            type: "pictorialBar",
            symbolSize: ['20', '20'],
            barWidth: 20,
            animation: true,
            symbolRepeat: "fixed",
            symbolMargin: 6,
            symbolClip: true,
            symbolPosition: "start",
            symbolOffset: [0, 0],
            data: ydata2,
        },
        {
            type: "bar"
        },

    ]
};