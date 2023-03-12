option = {
    backgroundColor:'#fff',
    grid: {
        top: '15%',
        left: '10%',
        right: '5%',
        bottom: '15%',
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: false,
        },
        axisLabel: {
            color: '#646464',
        },
        splitLine: {
            show: false
        },
        axisTick:{
            show:false
        },
        boundaryGap: 1,
        data: ["2020-06-21","2020-06-22","2020-06-23","2020-06-24","2020-06-25","2020-06-26","2020-06-27"]//this.$moment(data.times).format("HH-mm") ,

    }],
    yAxis: [{
        type: 'value',
        min: 0,
        splitNumber: 4,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#EEEFEF',
                type:'dashed'
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            margin: 10,
            textStyle: {
                color: '#646464',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [
        {
            symbolSize: 0,
            type: 'line',
            showAllSymbol: false,
            lineStyle: {
                normal: {
                    color: "#7ED8F3",
                },
            },
            label: {
                show: false,
            },
            areaStyle: {
                normal: {
                    color:'#7ED8F3'
                }
            },
            data: [4,7,5,4,3,5,8]//data.values
        },
        {
            type: 'line',
            showAllSymbol: false,
            symbolSize: 0,
            lineStyle: {
                normal: {
                    color: "#2CABE3",
                },
            },
            label: {
                show: false,
            },
            data: [3,5,4,2,1,7,6]//data.values
        },
    ]
};