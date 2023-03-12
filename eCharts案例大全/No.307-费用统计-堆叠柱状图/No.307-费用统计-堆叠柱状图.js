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
const dataX = ['西安', '庆阳', '吴起', '定边', '靖边', '乌审旗']
option = {
    title: {
        text: '费用统计',
    },
     tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    xAxis: {
        data: dataX,
    },
    yAxis: {},
    series: [
        {
            name: '发单数',
            stack: '交通共享',
            type: 'bar',
            barWidth: 40,
            data: randNum(1000, 100000, 6, true),
        },

        {
            name: '抢单数',
            stack: '交通共享',
            type: 'bar',
            barWidth: 40,
            data: randNum(1000, 100000, 6, true),
        },

        {
            name: '补单数',
            stack: '交通共享',
            type: 'bar',
            barWidth: 40,
            data: randNum(1000, 100000, 6, true),
        },

        {
            name: '废单数',
            stack: '交通共享',
            type: 'bar',
            barWidth: 40,
            data: randNum(1000, 100000, 6, true),
        },
        {
            name: '空单数',
            stack: '交通共享',
            type: 'bar',
            barWidth: 40,
            data: randNum(1000, 100000, 6, true),
        },
        {
            name: '闭合数',
            stack: '交通共享',
            type: 'bar',
            barWidth: 40,
            data: randNum(1000, 100000, 6, true),
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
