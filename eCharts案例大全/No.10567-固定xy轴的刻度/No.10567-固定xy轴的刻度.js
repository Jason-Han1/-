var data=[
    {
        value: [
            dayjs().set('hour', '7').set('minute', '24').valueOf(),
            184
        ]
    },
    {
      
        value: [
            dayjs().set('hour', '11').set('minute', '13').valueOf(),
            200
        ]
    },
    {
      
        value: [
            dayjs().set('hour', '14').set('minute', '55').valueOf(),
            120
        ]
    },
    {
      
        value: [
            dayjs().set('hour', '21').set('minute', '13').valueOf(),
            250
        ]
    }
]

option = {
    tooltip: {
        trigger: 'axis',
            backgroundColor: 'rgba(0,0,0,.5)',
            borderColor: '#000',
        // 虚线
        axisPointer: {
            lineStyle: {
                color: '#E2E3E1',
            },
        },
        formatter: function(params) {
            console.log(params[0])
            return dayjs(params[0].value[0]).format('HH:mm');
        }
    },
    legend: {
        // 图标形状
        icon: 'circle',
        data: ['应到', '实到', '未到', '请假'],
        bottom: '2%',
        itemGap: 10,
    },
    xAxis: {
        type: 'time',
        boundaryGap: false,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            formatter: function(value, index) {
                return dayjs(value).format('HH:mm');
            },
        },
        splitLine: {
            show: false,
        },
        splitNumber: 12,
        min: dayjs().set('hour', '00').set('minute', '00').valueOf(),
        max: dayjs().set('hour', '24').set('minute', '00').valueOf(),
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#E2E3E1',
                type: 'dashed',
            },
        },
        max: 300,
        min: 0,
        minInterval: 100,
    },
    series: [{
        name: '应到',
        type: 'line',
        data: data,
    }]
};
