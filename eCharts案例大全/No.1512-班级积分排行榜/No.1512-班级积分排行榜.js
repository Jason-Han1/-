//觉得好可以点个赞哦！
let dataSource = [122, 233, 440, 267, 109];
option = {
    title: {
        text: '班级榜',
    },
    xAxis: {
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    grid: {
        left: 170,
    },
    yAxis: {
        splitLine: {
            show: true,
            lineStyle: {
                color:'#28B0E8',
                type: [10, 10],
                dashOffset: 10,
            },
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                fontSize: 18,
                fontWeight: 700,
            },
            formatter: function (v, i) {
                return `{a|${i + 1}}{b|${v}}`;
            },
            rich: {
                a: {
                    width: 50,
                    height: 50,
                    align: 'center',
                    fontSize: 24,
                    lineHeight: 50,
                    fontWeight: 700,
                    color: '#fff',
                    borderRadius: 25,
                    backgroundColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.2,
                        r: 0.5,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#C4F7FE', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#17B1FA', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
                b: {
                    fontWeight: 700,
                    fontSize: 18,
                    height: 40,
                    padding: 10,
                },
            },
        },
        data: ['六（1）', '六（2）', '六（3）', '六（4）', '六（5）'],
        type: 'category',
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 3,
    },
    series: [
        {
            type: 'bar',
            data: dataSource,
            realtimeSort: true,
            barWidth: 40,
            itemStyle: {
                borderRadius: 50,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        { offset: 0, color: '#1BA3F0' },
                        { offset: 1, color: '#3EE1D8' },
                    ],
                },
            },
            label: {
                show: true,
                position: 'right',
                valueAnimation: true,
                textStyle: {
                    fontSize: 18,
                    fontWeight: 700,
                },
            },
        },
    ],
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear',
};
function run() {
    dataSource = dataSource.map((m) => {
        m = Math.floor(Math.random() * 200);
        return m;
    });
    myChart.setOption({
        series: [
            {
                type: 'bar',
                data: dataSource,
            },
        ],
    });
}
setTimeout(function () {
    run();
}, 10);
setInterval(() => {
    run();
}, 5000);
