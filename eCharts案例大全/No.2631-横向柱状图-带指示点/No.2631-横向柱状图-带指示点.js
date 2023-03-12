const payload = {
    id: '',
    data: {
        title: ['生态指数'],
        unit: ['%'],
        x: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        data1: [20, 80, 100, 40, 34, 290, 60, 20, 80, 400, 40, 34],
    },
};

const unit = payload.data.unit || [];
const x = payload.data.x || [];
const data1 = payload.data.data1 || [];
const title = payload.data.title || [];
const max = Math.max(...data1)

const maxData = data1.map((item, index) => {
    return {
        value: [max, index],
        name: x[index],
    };
});

const barData = data1.map((item, index) => {
    return {
        value: [item, index],
        name: x[index],
    };
});

option = {
    grid: {
        top: 35,
        left: 15,
        right: 25,
        bottom: 10,
        // 是否包含文本
        containLabel: true,
    },
    legend: {
        show: false,
    },
    tooltip: {
        show: false,
    },
    xAxis: {
        show: false,
    },
    yAxis: [
        {
            name: '',
            type: 'category',
            inverse: true,
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: x,
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                color: '#333',
                fontSize: '12',
                margin: 32,
            },
            data: data1,
        },
    ],
    series: [
        {
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                barBorderRadius: 0,
                color: '#26a69a',
            },
            barWidth: 20,
            data: barData,
            label: {
                position: [0, -16],
                align: 'left',
                show: true,
                formatter: (params) => {
                    return params.name;
                },
            },
            barMaxWidth: 40,
            markLine: {
                label: {
                    color: '#26a69a',
                },
            },
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: maxData,
            itemStyle: {
                normal: {
                    color: 'rgba(105,131,242,.3)',
                    barBorderRadius: 30,
                },
                borderRadius: [5, 5, 0, 0],
            },
            label: {
                show: false,
            },
            barMaxWidth: 40,
            markLine: {
                label: {
                    color: '#26a69a',
                },
            },
        },
        {
            name: '内圆',
            type: 'scatter',
            hoverAnimation: false,
            data: barData,
            yAxisIndex: 0,
            symbolSize: 22,
            itemStyle: {
                normal: {
                    color: '#26a69a',
                    opacity: 1,
                },
            },
            zlevel: 2,
            label: {
                show: false,
            },
        },
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: barData,
            yAxisIndex: 0,
            symbolSize: 28,
            symbol:
                'path://M512 960C264.576 960 64 759.424 64 512S264.576 64 512 64s448 200.576 448 448-200.576 448-448 448z m0-268.8a179.2 179.2 0 1 0 0-358.4 179.2 179.2 0 0 0 0 358.4z',
            itemStyle: {
                color: 'rgb(255, 255, 255)',
                opacity: 1,
                borderColor: 'rgba(44, 111, 226, 0.2)',
                borderWidth: 2,
            },
            zlevel: 3,
            label: {
                show: false,
            },
        },
    ],
};
