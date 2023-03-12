option = {
    backgroundColor:'#1b1e2f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
    },
    
    legend: {
        bottom: '5%',
        textStyle: {
            color: '#63656d'
        },
        itemGap:30,
        data: ['教师', '学生']
    },
    grid: {
        top: '15%',
        left: '10%',
        right: '5%',
        bottom: '15%',
    },
    xAxis: [
        {
        type: 'category',
        axisLine: {
            show: false,
        },
        axisLabel: {
            show:false,
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        data: ["2020-06-21","2020-06-22","2020-06-23","2020-06-24","2020-06-25","2020-06-26","2020-06-27"]//this.$moment(data.times).format("HH-mm") ,

    }],

    yAxis: [{
        type: 'value',
        min: 0,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#1d283d', //x轴颜色
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#1d283d', //x轴颜色
            }
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    }],
    series: [
        {
            name:'教师',
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
                color: "#00d5f6",
            },
            data: [4,7,5,4,3,5,8]//data.values
        },
        {
            name:'学生',
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
                color: "#fea12a",
            },
            data: [3,5,4,2,1,7,6]//data.values
        },
    ]
};