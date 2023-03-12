option = {
    title: {
        text: '客服中心数据统计'
    },
    legend: {
        data: ['续费率', '利润', '新单完成率'],
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            animation: false,
            label: {
                backgroundColor: '#505765'
            }
        },
        formatter: (p, t, callback) => {
            console.log(p);
            const _p = p.map(item => `${item.marker} 
                ${[2,4].includes(item.componentIndex) ? item.seriesName + '目标' : item.seriesName}
                : ${item.componentIndex === 0 ? item.value+'元' :item.value+'%'}`);
            return _p.join('<br >');
        }
    },
    xAxis: {
        boundaryGap: true,
        data: ['201901', '201902', '201903', '201904', '201905', '201906', '201907']
    },
    yAxis: [{
            name: '金额(元)',
            type: 'value',
        },
        {
            name: '百分比(%)',
            max: 100,
            type: 'value',
        }
    ],
    color: ['#2f4554', '#c23531', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
    series: [{
            name: '利润',
            type: 'bar',
            barWidth: 60,
            data: ["6739328", "7770518", "6966416", "8046485", "7670112", "9142268", "9024566"],
            yAxisIndex: 0,
            label: {
                show: true,
                position: 'top'
            }
        }, {
            name: '续费率',
            type: 'line',
            data: ["55", "56", "46", "53", "51", "58", "36"],
            yAxisIndex: 1,
            smooth: true,
            smoothMonotone: 'x',
            symbol: 'circle',
            lineStyle: {
                // color: 'red'
            }
        },
        {
            name: '续费率',
            type: 'line',
            data: ["50", "50", "50", "55", "55", "55", "55"],
            yAxisIndex: 1,
            symbol: 'circle',
            lineStyle: {
                type: 'dashed',
                // color: 'red'
            },
        },
        {
            name: '新单完成率',
            type: 'line',
            data: ["40", "43", "40", "44", "56", "37", "60"],
            symbol: 'circle',
            yAxisIndex: 1,
            smooth: true,
            smoothMonotone: 'x',

            lineStyle: {
                // color: 'blue'
            }
        },
        {
            name: '新单完成率',
            type: 'line',
            data: ["30", "30", "30", "40", "40", "40", "40"],
            symbol: 'circle',
            yAxisIndex: 1,
            lineStyle: {
                type: 'dashed',
                // color: 'blue'
            },
        },
    ]
};