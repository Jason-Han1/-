var chartName=['2016','2017','2018'];
var chartData=[100,300,200]
option = {
    // title: {
    //     text: 'Awesome Chart'
    // },
    xAxis: {
        data: chartName,
         axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: true
        }
    },
    series: [{
        type: 'line',
        label:{
                show:true,
                position:'top',
                offset: [0, -20],
                padding: [10,10,10,10],
                // borderRadius: 10,
                color: this.fontColor,
                fontSize: 16,
                backgroundColor: 'blue',
                formatter: (params) => {
                    return params.value;
                }
            },
        data: chartData
    }]
};