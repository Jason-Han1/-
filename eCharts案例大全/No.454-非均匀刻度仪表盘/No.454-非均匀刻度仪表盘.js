/**
 * 渲染非均匀刻度仪表盘
 * @param chart 仪表盘对象
 * @param ruler 仪表盘刻度数组(包含起始值)
 * @param val 仪表盘当前显示值
 */
function setGaugeOption(chart, ruler, val) {
    console.log(val, 'val');
    ruler = ruler.sort((a, b) => a - b);
    let chartMaxVal = 100000; //仪表盘对应0--100的最大刻度，越大越精确
    let unitStep = chartMaxVal / (ruler.length - 1);

    //将仪表盘数据转换为实际数据  0--chartMaxVal 范围 到刻度范围的转换
    let valConvert = (value) => {
        for (let i = 0; i < ruler.length - 1; i++) {
            if (value <= (i + 1) * unitStep) {
                let lastRuler = ruler[i];
                let rulerSpan = ruler[i + 1] - ruler[i];
                let valSpan = value - i * unitStep;
                valSpan = (valSpan * rulerSpan) / unitStep;
                return Math.round(lastRuler + valSpan);
            }
        }
        return ruler[ruler.length - 1];
    };

    let valText = (value) => {
        return `${val}\n下载速度Mbps`;
    };

    //将实际数据转换为仪表盘数据 刻度范围到 0--chartMaxVal 范围的转换
    let getGaugeData = (value) => {
        if (value <= ruler[0]) return 0;
        for (let i = 1; i < ruler.length; i++) {
            if (value <= ruler[i]) {
                let startVal = unitStep * (i - 1);
                let rulerSpan = ruler[i] - ruler[i - 1];
                let lastRuler = ruler[i - 1];
                let ret = startVal + ((value - lastRuler) / rulerSpan) * unitStep;
                return Math.round(ret);
            }
        }
        return chartMaxVal;
    };

    let gaugeData = getGaugeData(val);

    let option = {
        series: [
            {
                name: 'test speed',
                type: 'gauge',
                radius: '95%',
                splitNumber: ruler.length - 1, //仪表盘平均分配分段刻度
                max: chartMaxVal,

                axisLine: {
                    lineStyle: {
                        width: 30,
                        color: [
                            [0.5, '#67e0e3'],
                            [0.875, '#37a2da'],
                            [1, '#fd666d'],
                        ],
                    },
                },
                pointer: {
                    itemStyle: {
                        color: 'auto',
                    },
                },
                splitLine: {
                    distance: -30,
                    length: 30,
                    lineStyle: {
                        color: '#fff',
                        width: 4,
                    },
                },
                axisTick: {
                    distance: -30,
                    length: 8,
                    lineStyle: {
                        color: '#fff',
                        width: 2,
                    },
                },
                axisLabel: {
                    color: 'auto',
                    distance: 40,
                    fontSize: 16,
                    //仪表盘刻度设置
                    formatter: valConvert,
                },
                detail: {
                    fontSize: 14,
                    formatter: valText,
                    offsetCenter: [0, '70%'],
                    valueAnimation: true,
                    color: 'auto',
                },
                data: [
                    {
                        value: gaugeData,
                    },
                ],
            },
        ],
    };

    chart.setOption(option);
}

function run() {
    let ruler = [0, 10, 50, 100, 500, 1000, 10000, 100000, 200000]; //仪表盘刻度

    setInterval(function () {
        let val = 1865.25;
        setGaugeOption(myChart, ruler, val);
    }, 1000);
}

run();
