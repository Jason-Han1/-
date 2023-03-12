option = {
    backgroundColor: '#000',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: function (item) {
            return item[0].axisValueLabel + '<br />' + item[0].seriesName + ': ' + item[0].data;
        },
    },
    legend: {
        top: '5%',
        textStyle: {
            color: '#fff',
        },
        data: ['2015', '2016'],
    },
    grid: {
        top: '20%',
        right: 20,
        left: 50,
        bottom: 30,
    },
    xAxis: [
        {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
                lineStyle: {
                    color: '#FFFFFF',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: '#FFFFFF',
                fontSize: 12,
                interval: 0,
            },
        },
        {
            type: 'category',
            show: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
                interval: 0,
                margin: 10,
                color: '#fff',
                fontSize: '10',
            },
            data: [120, 200, 150, 80, 70, 110, 130],
        },
    ],
    yAxis: [
        {
            //scale:true,
            // min: function(item){
            // 	return parseInt(item.min / 10) * 10
            // },
            max: 200,
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#FFFFFF',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#FFFFFF',
                },
                // formatter: function(value){
                //   return parseInt(value * 100) + '%'
                // },
            },
        },
    ],
    series: [
        {
            name: '2015',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                color: '#10bffc',
            },
            symbolRepeat: true,
            symbolSize: [14, 4],
            // symbolBoundingData: 100,
            symbolMargin: 2,
            symbolPosition: 'start',
            z: -20,
            barGap: '10%',
            data: [120, 200, 150, 80, 70, 110, 130],
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                },
            },
        },
        {
            name: '2016',
            type: 'pictorialBar',
            symbol: 'rect',
            barGap: '10%',
            itemStyle: {
                color: '#f30',
            },
            symbolRepeat: true,
            symbolSize: [14, 4],
            // symbolBoundingData: 100,
            symbolMargin: 2,
            symbolPosition: 'start',
            z: -20,
            data: [120, 200, 150, 120, 70, 110, 130],
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                },
            },
        },
    ],
};
