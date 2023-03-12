option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        data:['蒸发量','降水量','平均温度']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月', '3月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量',
            // max(value) {
            //     // console.log(Math.ceil(value.max + (value.max * 0.2)));
            //     return Math.ceil(value.max + (value.max * 0.2));
            // },
            // minInterval: 1,
            min: 0,
            max: 3,
            interval: 0.6,
            // splitLine: {
            //     show: false,
            // },
            // splitArea: {
            //   show: true,  
            // },
        },
        {
            type: 'value',
            name: '温度',
            //  splitLine: {
            //     show: false,
            // },
            // splitArea: {
            //   show: true,  
            //   interval: 0,
            // },
            min: 0,
            max: 40,
            interval: 8,
            // minInterval: 1,
            // splitNumber: 3,
            // max(value) {
            //     // console.log(Math.ceil(value.max + (value.max * 0.2)));
            //     return Math.ceil(value.max + (value.max * 0.2));
            // },
        }
    ],
    series: [
        {
            name:'蒸发量',
            type:'bar',
            data:[0, 1.4, 2.4]
        },
        {
            name:'平均温度',
            type:'line',
            yAxisIndex: 1,
            data:[1, 10, 40]
        }
    ]
};