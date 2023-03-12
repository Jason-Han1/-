app.title = '世界人口总量 - 条形图';

option = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['巴西','印尼']
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [{value: 18203, up: true}, {value: 23489, up:false}],
            label: {
                show: true,
                color: '#333',
                position: 'right',
                formatter: params => {
                    console.log(params)
                    return `${params.value} ${params.data.up ? '{up|▲}' : '{down|▼}'}`
                },
                rich: {
                    up: {
                        color: 'red'
                    },
                    down: {
                        color: 'green'
                    }
                }
            }
        }
    ]
};
