var sys = {
    cpuNum: 2,
    cpuPercent: 35,
    memTotal: 3848,
    memUsed: 1688,
    memPercent: 44,
    dt: 40,
    du: 32,
    hdPercent: 80,
};

var data = [
    {
        name: 'CPU ' + sys['cpuNum'] + '核心',
        value: sys.cpuPercent, //cpuPercent
    },
    {
        name: '内存 \n ' + parseInt(sys.memUsed) + 'M / ' + parseInt(sys.memTotal) + 'M',
        value: sys.memPercent, //memRealPercent
    },
    {
        name: '硬盘 \n ' + parseInt(sys.du) + 'G / ' + parseInt(sys.dt) + 'G',
        value: sys.hdPercent, //hdPercent
    },
];

var titleArr = [],
    seriesArr = [],
    colors = [
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
                offset: 0,
                color: '#9FE6B8',
            },
            {
                offset: 1,
                color: '#32C5E9',
            },
        ]),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
                offset: 0,
                color: '#FDFF5C',
            },
            {
                offset: 1,
                color: '#FFDB5C',
            },
        ]),

        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
                offset: 0,
                color: '#00cefc',
            },
            {
                offset: 1,
                color: '#367bec',
            },
        ]),
    ];
data.forEach(function (item, index) {
    titleArr.push({
        text: item.name,
        left: index * 33 + 18 + '%',
        top: '60%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: colors[index],
            textAlign: 'center',
            lineHeight: 20,
        },
    });
    seriesArr.push({
        name: item.name,
        type: 'pie',
        clockWise: true,
        radius: [85, 100],
        animation: true,
        itemStyle: {
            normal: {
                color: colors[index],
                shadowColor: colors[index],
                shadowBlur: 0,
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
            },
        },
        hoverAnimation: false,
        center: [index * 33 + 18 + '%', '40%'],
        data: [
            {
                value: item.value,
                label: {
                    normal: {
                        formatter: function (params) {
                            return params.value + '%';
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '18',
                            fontWeight: 'bold',
                            color: colors[index],
                        },
                    },
                },
                itemStyle: {
                    borderRadius: 10,
                },
            },
            {
                value: 100 - item.value,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: '#f6f6f6',
                    },
                    emphasis: {
                        color: '#f5f5f5',
                    },
                },
            },
        ],
    });
});

option = {
    backgroundColor: '#fff',
    title: titleArr,
    series: seriesArr,
    animation: false,
};

function random() {
    return (Math.random() * 100).toFixed(2);
}

app.timeTicket = setInterval(function () {
    var value = parseInt(Math.random() * 100);
    setPercent(value);
}, 1000);

function setPercent(p) {
    option.title.text = p + '%';
    option.series[0].data[0].value = p;
    option.series[1].data[0].value = 100 - p;
    myChart.setOption(option, true);
}
