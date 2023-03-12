const randNum = (min, max, len, isRound) => {
    var arr = [];
    for (let i = 0; i < len; i++) {
        var num;
        num = Math.random() * (max - min) + min;
        if (isRound) {
            num = Math.round(num);
            arr.push(num);
        } else {
            arr.push(num.toFixed(2));
        }
    }
    return arr;
};
const dataX = ['庆阳', '西安', '南京', '长沙', '上海', '深圳'];
const dataY = randNum(1000, 100000, 6, true);
const dataY2 = randNum(1000, 100000, 6, true);
const dataY3 = dataY.map((item, index) => {
    return item + dataY2[index];
});
const themeColor = '#040624';
option = {
    grid: {
        top: 55,
        left: '15%',
        right: 60,
        bottom: '5%',
    },
    legend: {
        top: '5%',
        right: '5%',
        textStyle: {
            color: themeColor,
        },
        data: ['已结算', '未结算'],
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: themeColor,
                opacity: 0.1,
            },
        },
        formatter(e) {
            let result = e.filter((item) => item.seriesName !== '总计');
            return result.map((item) => `${item.marker} ${item.seriesName} ${item.value}<br/>`).join('');
        },
    },

    xAxis: {
        type: 'value',
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    yAxis: {
        type: 'category',
        realtimeSort: true, // 设置true,开启Y轴的动态排序效果
        data: dataX,
        axisLine: {
            lineStyle: {
                color: themeColor,
            },
        },
        axisLabel: {
            color: themeColor,
        },
        axisTick: {
            show: false,
        },
    },
    series: [
        {
            type: 'bar',
            name: '已结算',
            stack: '总计',
            zlevel: 1,
            barMaxWidth: 30,
            itemStyle: {
                color: '#ff9e34',
            },
            label: {
                show: true,
                position: 'inside',
                color: themeColor,
                formatter(e) {
                    return e.value > 0 ? `${(e.value / 10000).toFixed(2)}万` : '';
                },
            },
            data: dataY,
        },
        {
            type: 'bar',
            name: '未结算',
            stack: '总计',
            zlevel: 1,
            barMaxWidth: 30,
            itemStyle: {
                color: '#39fdc0',
            },
            label: {
                show: true,
                position: 'inside',
                color: themeColor,
                formatter(e) {
                    return e.value > 0 ? `${(e.value / 10000).toFixed(2)}万` : '';
                },
            },
            data: dataY2,
        },
        {
            type: 'bar',
            name: '总计',
            barGap: '-100%',
            barMaxWidth: 30,
            itemStyle: {
                color: '#00ffff',
            },
            label: {
                show: true,
                position: 'right',
                color: themeColor,
                formatter(e) {
                    return e.value > 0 ? `${(e.value / 10000).toFixed(2)}万` : '';
                },
            },
            data: dataY3,
        },
    ],
};
let indexSort = 0;
setInterval(() => {
    indexSort = indexSort === dataX.length ? 0 : indexSort + 1;
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0, // 显示第几个series
        dataIndex: indexSort, // 显示第几个数据
    });
}, 1000);
