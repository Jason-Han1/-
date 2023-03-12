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
    grid: {
        top: 100,
        right: 20,
        left: 50,
        bottom: 100,
    },
    xAxis: [
        {
            data: ['超市便利店', '植物花卉', '特色产品', '古玩字画'],
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                color: '#FFFFFF',
                fontSize: 20,
                interval: 0,
                margin:20
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
                interval: 0,
                margin: 10,
                color: 'rgb(0,206,205)',
                fontSize: '20',
            },
            data: [120, 50, 150, 80],
        },
    ],
    yAxis: [
        {
            //scale:true,
            // min: function(item){
            // 	return parseInt(item.min / 10) * 10
            // },
            show: false,
            max: 200,
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#FFFFFF',
                },
            },
            axisLabel: {
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
            name: '数量',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                color: 'rgba(0,129,255,1)',
            },
            symbolRepeat: true,
            symbolSize: [50, 4],
            // symbolBoundingData: 100,
            symbolMargin: 3,
            symbolPosition: 'start',
            z: -20,
            data: [120, 50, 150, 80],
            label: {
                normal: {
                    show: false,
                    position: 'top',
                    verticalAlign: 'top',
                    // formatter: function(value){
                    //   return value && (value.data * 100).toFixed(1) + '%'
                    // }
                },
            },
        },
        {
            name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                color: 'red',
            },
            symbolOffset: [0, -12],
            symbolPosition: 'end',
            symbolSize: [50, 4],
            data: [120, 50, 150, 80],
        },
        {
            name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                color: 'rgba(0,129,255,.5)',
            },
            symbolRepeat: true,
            symbolSize: [50, 4],
            // symbolBoundingData: 100,
            symbolMargin: 3,
            symbolPosition: 'start',
            z: -20,
            data: [200, 200, 200, 200],
            label: {
                normal: {
                    show: false,
                    position: 'top',
                    verticalAlign: 'top',
                    // formatter: function(value){
                    //   return value && (value.data * 100).toFixed(1) + '%'
                    // }
                },
            },
        },
    ],
};
