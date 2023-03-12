const chartData = [
    { name: '其他', nd: 17, nm: 50, wm: 54 },
    { name: '铁矿', nd: 17, nm: 60, wm: 10 },
    { name: '煤炭', nd: 17, nm: 40, wm: 20 },
    { name: '有色矿', nd: 17, nm: 46, wm: 54 },
    { name: '汽车', nd: 17, nm: 46, wm: 54 },
    { name: '散杂货', nd: 17, nm: 20, wm: 54 },
];
let color = ['#4DB5F7', '#F5F500', '#01ECA4', '#EC0202'];
let sum = [],
    pieSeries = [];
// 数据处理
chartData.forEach((v, i) => {
    sum.push(v.nm + v.wm);
});
const maxNum = Math.max(...sum) + Math.min(...sum);

const index = chartData.length;
// 图表option整理
chartData.forEach((v, i) => {
    pieSeries.push({
        name: '学历',
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: [70 - i * 10 + '%', 75 - i * 10 + '%'],
        center: ['40%', '50%'],
        label: {
            show: false,
        },
        
        itemStyle: {
            normal: {
                borderWidth: 0,
            },

            emphasis: {
                borderWidth: 2,
                shadowBlur: 8,
                borderColor: '#00ffff',
                shadowColor: '#00ffff',
            },
        },
        data: [
            {
                ...v,
                value: v.nm+v.wm,
                value1:v.wm,
                name: '内贸',
                 itemStyle: {
                    color: {
    type: 'linear',
    x:0,
    y: v.wm/(v.nm+v.wm),
    x2: 0,
    y2: 0,
    colorStops: [{
        offset: 0, color: '#4DB5F7' // 0% 处的颜色
    }, {
        offset: v.wm/(v.nm+v.wm), color: '#F5F500' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}
                },
            },
            // {
            //     ...v,
            //     value: v.wm,
            //     name: '外贸',
            // },
            {
                value: maxNum - v.nm - v.wm,
                name: '',
                itemStyle: {
                    color: 'red',
                },
            },
        ],
        markLine: {
            data: [
                [
                    {
                        name: `${v.name} \xa0\xa0 年度${v.nd}%`,
                        x: 20 + index * 0 + '%',
                        y: '15%',
                    },
                    {
                        x: 40 + index * 0 + '%',
                        y: 5 * (i + 3) + '%',
                    },
                ],
            ],
            label: {
                color: '#FFF',
                fontSize: 10,
                lineHeight: 10,
                align: 'right',
                padding: [-10, 16, 0, 0],
            },
            lineStyle: {
                opacity: 0,
            },
        },
        label: {
            show: true,
            position: 'outside',
            formatter: function (data) {
                console.log('data', data);
                let labelHtml = '';
                labelHtml = labelHtml + '{title|类型\xa0\xa0内贸\xa0\xa0外贸}';
                return labelHtml;
            },
            rich: {
                title: {
                    fontSize: 12,
                    color: '#FFFFFF',
                    padding: [-30, -40, 0, -65],
                },
            },
        },
        labelLine: {
            normal: {
                show: true,
                length: 28,
                length2: 64,
                align: 'right',
                showAbove: false,
            },
        },
    });
});

option = {
    color: color,
    grid: {
        top: '12%',
        bottom: '54%',
        left: '30%',
        containLabel: false,
    },
    tooltip: {
        trigger: 'item',
        textStyle: {
            fontSize: 10,
        },
    },
    legend: {
        show: true,
        right: '0',
        top: 7,
        itemWidth: 15,
        itemHeight: 5,
        textStyle: {
            color: '#fff',
            fontFamily: 'PingFang SC',
            fontWeight: 400,
            fontSize: 12,
        },
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            // data: lineYAxis,
        },
    ],
    xAxis: [
        {
            show: false,
        },
    ],
    series: pieSeries,
};
