let name = '单位：万';
let dataArr = [
    {
        name: '流入',
        list: [
            {
                name: '3月',
                value: 40,
            },
            {
                name: '4月',
                value: 60,
            },
            {
                name: '5月',
                value: 20,
            },
            {
                name: '6月',
                value: 85,
            },
            {
                name: '7月',
                value: 50,
            },
            {
                name: '8月',
                value: 30,
            },
        ],
    },
    {
        name: '流出',
        list: [
            {
                name: '3月',
                value: 50,
            },
            {
                name: '4月',
                value: 40,
            },
            {
                name: '5月',
                value: 15,
            },
            {
                name: '6月',
                value: 50,
            },
            {
                name: '7月',
                value: 40,
            },
            {
                name: '8月',
                value: 30,
            },
        ],
    },
];
// x轴
let nameArr = dataArr[0].list.map((it) => it.name);
// 颜色
let colors = ['rgba(0, 237, 253, 1)', 'rgba(1, 102, 235, 1)'];
option = {
    backgroundColor: '#0e1c47',
    color: colors,
    tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(1, 13, 19, 0.5)',
        // axisPointer: {
        //     // 坐标轴指示器，坐标轴触发有效
        //     type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        // },
        borderWidth: 0,
        axisPointer: {
            lineStyle: {
                color: 'rgba(11, 208, 241, 1)',
                type: 'slider',
            },
        },
        textStyle: {
            color: 'rgba(212, 232, 254, 1)',
            fontSize: 12,
        },
    },
    legend: {
        align: 'left',
        right: '10%',
        top: '2%',
        type: 'plain',
        textStyle: {
            color: 'rgba(212, 232, 254, 1)',
            fontSize: 14,
        },
        icon: 'rect',
        itemGap: 15,
        itemWidth: 5,
        itemHeight: 5,
        itemStyle: {
            borderWidth: 0,
        },
        // icon:'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',
        data: dataArr.map((it) => it.name),
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            data: nameArr,
            axisLabel: {
                textStyle: {
                    fontSize: '12',
                    color: '#fff',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: 'rgba(108, 166, 219, 0.5)',
                },
            },
        },
    ],
    yAxis: [
        {
            name: name,
            nameTextStyle: {
                color: 'rgba(212, 232, 254, 1)',
                fontSize: 12,
            },
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: 'rgba(108, 166, 219, 0.5)',
                    type: 'dashed',
                },
            }, //设置横线样式
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#233653',
                },
            },
            axisLabel: {
                textStyle: {
                    fontSize: '12',
                    color: '#fff',
                },
            },
        },
    ],
    series: [
        {
            name: dataArr[0].name,
            type: 'bar',
            stack: '排名',
            data: dataArr[0].list.map((it) => it.value),
            barWidth: 16,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(1, 94, 234, 1)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(0, 192, 250, 1)',
                    },
                ]),
            },
        },
        {
            name: dataArr[1].name,
            type: 'bar',
            stack: '排名',
            data: dataArr[1].list.map((it) => it.value),
            barWidth: 16,
        },
    ],
};
let len = 0;
setInterval(() => {
    if (len === nameArr.length) {
        len = 0;
    }
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: len,
    });
    len++;
}, 2000);
