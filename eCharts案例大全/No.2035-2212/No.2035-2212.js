var data111 = [];
for (let i = 0; i < 12; i++) {
    let r = 30 * i;
    let x = 80;
    data111.push({
        //name:x,
        value: [x, r],
        symbolSize: [10, 20],
        symbol: 'rect',
        symbolRotate: -r,
        itemStyle: {
            normal: {
                color: '#5AD8FF',
            },
            emphasis: {
                shadowColor: '#5AD8FF',
                shadowBlur: 10,
                scale: false,
            },
        },
    });
}
option = {
    backgroundColor: '#02203d',
    tooltip: {
        trigger: 'axis',
        triggerOn: 'none',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'line', // 默认为直线，可选为：'line' | 'shadow'
            // axis:'auto',
            lineStyle: {
                color: 'rgba(0,0,0,0)',
            },
        },
    },
    polar: {},
    angleAxis: {
        splitLine: { show: true },
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        min: 0,
        max: 360,
    },
    radiusAxis: {
        splitLine: { show: true },
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        min: 0,
        max: 120,
        splitNumber: 5,
    },
    series: [
        {
            name: '',
            type: 'scatter',
            coordinateSystem: 'polar',
            data: data111,
        },
    ],
};

var faultByHourIndex = 0;
function doing() {
    let option = myChart.getOption();
    myChart.dispatchAction({
        type: 'showTip', // 根据 tooltip 的配置项显示提示框。
        seriesIndex: 0,
        dataIndex: faultByHourIndex,
    });
    faultByHourIndex++;
    if (faultByHourIndex >= data111.length) {
        faultByHourIndex = 0;
    }
}
setInterval(doing, 1000);
