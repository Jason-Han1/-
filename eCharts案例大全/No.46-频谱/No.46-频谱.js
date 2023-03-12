let datas = [];
let now = new Date();
let oneDay = 1000;
for (var i = 0; i < 1000; i++) {
    datas.push(randomData());
}
let dataZoom = [
    {
        show: true,
        type: 'slider',
        filterMode: 'none',
        xAxisIndex: [0],
        start: 80,
        end: 100,
    },
];
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            animation: false,
        },
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false,
        },
        // splitNumber: 8,
        axisLine: {
            onZero: false,
        },
        axisLabel: {
            showMaxLabel: true, //强制显示最后一个数据的刻度
            formatter: function (params) {
                let date = new Date(params);
                let hour = date.getHours();
                let miu = date.getMinutes();
                let sec = date.getSeconds();
                return (
                    (hour < 10 ? '0' + hour : hour) +
                    ':' +
                    (miu < 10 ? '0' + miu : miu) +
                    ':' +
                    (sec < 10 ? '0' + sec : sec)
                );
            },
        },
    },
    yAxis: {
        type: 'value',
        data: [-2, -1, 0, 1, 2],
        splitLine: false,
    },
    dataZoom,
    series: [
        {
            name: 'Spectrum',
            type: 'line',
            showSymbol: false,
            data: datas,
            lineStyle: {
                //设置线条默认样式
                normal: {
                    width: 1,
                },
                //设置线条hover样式
                emphasis: { width: 1 },
            },
            // smooth: true
        },
    ],
};
function randomData() {
    now = new Date(+now + oneDay);
    return {
        name: now.toString(),
        value: [now, Math.random() * 4 - 2],
    };
}

setInterval(function () {
    for (let i = 0; i < 1; i++) {
        datas.shift();
        datas.push(randomData());
    }
    myChart.setOption({
        series: [
            {
                data: datas,
            },
        ],
        // dataZoom,
    });
}, 1000);
