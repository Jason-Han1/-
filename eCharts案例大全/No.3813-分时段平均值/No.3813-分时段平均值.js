data = [{
        startTime: "2021-03-01",
        endTime: "2021-03-02",
        value: 100
    },
    {
        startTime: "2021-03-02",
        endTime: "2021-03-03",
        value: 120
    },
    {
        startTime: "2021-03-03",
        endTime: "2021-03-04",
        value: 150
    },
    {
        startTime: "2021-03-04",
        endTime: "2021-03-05",
        value: 160
    },
    {
        startTime: "2021-03-05",
        endTime: "2021-03-06",
        value: 140
    },
];
xAxisData1 = [];
xAxisData2 = [];
seriesData1 = [];
seriesData2 = [];

data.forEach((item, i) => {
    xAxisData1.push(item.startTime);
    xAxisData2.push(item.startTime);
    seriesData1.push(item.value);
    seriesData2.push(1);

    if (i === data.length - 1) {
        xAxisData2.push(item.endTime);
    }
});
option = {
    color: ['#ffae00'],
    title: {
        text: '分时段平均值',
        top: 20,
        left: 'center',
        textStyle: {
            // color:'#fff',
            fontSize: 20
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: function(params) {
            params.map(i => {});
            let str = '';
            // str = params[0].name + '<br />';
            // params.forEach(item => {
            str +=
                params[1].marker +
                params[1].seriesName +
                ':' +
                params[0].data;
            // });
            return str;
        }
    },
    grid: {
        top: '25%',
        bottom: '15%'
    },
    legend: {
        data: ['入库流量'],
        top: 50,
        textStyle: {
            // color: '#1FC3CE',
            fontSize: 14,
        },
    },
    xAxis: [{ //  双坐标轴 显示
        type: 'category',
        data: xAxisData1,
        show: false,
    }, {
        type: 'category',
        data: xAxisData2,
        boundaryGap: false,
        position: 'bottom',
        axisPointer: {
            type: 'none'
        },
    }],
    yAxis: {
        type: 'value',
        name: '流量(m³/s)',
    },
    series: [{
            name: '',
            type: 'bar',
            stack: 'A',
            xAxisIndex: 0,
            // barWidth: '100%',
            data: seriesData1,
            itemStyle: {
                barBorderColor: 'rgba(0, 0, 0, 0)',
                color: 'rgba(0, 0, 0, 0)'
            },
        },
        {
            name: '入库流量',
            type: 'bar',
            stack: 'A',
            // xAxisIndex: 0,
            // barWidth: '100%',
            data: seriesData2,
            itemStyle: {
                // barBorderColor: '#ffae00',
                // color: '#ffae00',
                barBorderRadius: 5
            },
        }
    ],
};