option = {
    tooltip: {
        trigger: 'axis',
        formatter: (params) => {
            // console.log('params', params);
            let str = '',
                marker = '';
            params.forEach((item) => {
                marker = `<span style="display:inline-block;margin-right:5px;width:10px;height:10px;background-color:${item.color};"></span>`;
                str += `${marker}${item.seriesName}&nbsp;&nbsp;&nbsp;&nbsp;${item.value}</br>`;
            });
            return `${params[0].axisValue}分</br>` + str;
        },
    },
    color: ['#409EFF', '#FF7474'],
    legend: {
        data: ['原始值', '审核值'],
        bottom: 10,
    },
    grid: {
        top: '10%',
        left: '3%',
        right: '6%',
        bottom: '10%',
        containLabel: true,
    },
    xAxis: {
        name: 'min',
        type: 'category',
        axisTick: 'none',
        axisLine: {
            show: false,
        },
        splitLine: 'none',
        data: ['00', '01', '02', '03', '04', '05', '06'],
    },
    yAxis: [
        {
            type: 'value',
            name: '%',
            min: 0,
            max: 100,
            splitNumber: 10,
            // minInterval: 5,
            axisTick: 'none',
            axisLine: {
                show: false,
            },
            splitLine: 'none',
            splitArea: {
                show: true,
                width: 200,
                areaStyle: {
                    color: ['#F2F6FC', 'transparent'],
                },
            },
        },
    ],
    series: [
        {
            name: '原始值',
            type: 'line',
            symbolSize: 16, 
            symbol: (value, params) => { 
                if (value > 80) return 'circle';
                return 'emptyCircle'; 
            },
            // stack: '总量',
            data: [20, 32, 1, 34, 90, 30, 10],
        },
        {
            name: '审核值',
            type: 'line',
            // stack: '总量',
            symbolSize: 16, 
            data: [22, 82, 100, 34, 29, 30, 10],
        },
    ],
};
