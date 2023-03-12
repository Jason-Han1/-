var xdata = ['', '36.5', '38.5', '40.5', '42.5', '44.5', '46.5', '48.5', '50.5', '52.5', '54.5', '56.5']
var xdata2 = ['', '36.5', '38.5', '40.5', '42.5', '44.5', '46.5', '48.5', '50.5', '52.5', '54.5', '56.5']
var xdata3 = ['', '36.5', '38.5', '40.5', '42.5', '44.5', '46.5', '48.5', '50.5', '52.5', '54.5', '56.5']
var xdata4 = ['', '36.5', '38.5', '40.5', '42.5', '44.5', '46.5', '48.5', '50.5', '52.5', '54.5', '56.5']
var ydata = [];
option = {
    title: {
        text: 'demo'
    },
    grid:{
        width:600,
        left:'20%'
    },
    legend: {
        data: ['所有数据', '方法组', '仪器组', '对等组', '本室月均值']
    },
    xAxis: [{
        type:'category',
        data: xdata,
        axisTick:{
            length:0
        },
        axisLabel:{
          textStyle:{
                align:'right',
          }
        }
    }, {
        show:false,
        data: xdata2
    }, {
        show:false,
        data: xdata3
    }, {
        show:false,
        data: xdata3
    }],
    yAxis: {
        min: 0,
        max: 400
    },
    series: [{
        type: 'bar',
        name: '所有数据',
        xAxisIndex: 0,
        yAxisIndex: 0,
        barWidth: '99%',
        barGap: '-100%',
        barCategoryGap: 0,
        silent:true,
        itemStyle: {
            normal: {
                borderWidth: 1,
                // borderColor: '#000',
                color: 'rgb(179,209,233)',
                // opacity: 0.4
            }
        },
        data: [null, 19, 60, 170, 190, 290, 190, 150, 100, 90, 19, null],
    }, {
        type: 'bar',
        name: '方法组',
        xAxisIndex: 1,
        yAxisIndex: 0,
        barWidth: '54%',
        silent:true,
        itemStyle: {
            normal: {
                color: 'rgb(103,202,216)',
                // opacity: 0.7
            }
        },
        data: [null, 17, 53, 140, 180, 280, 170, 60, 80, 60, 18, null],
    }, {
        type: 'bar',
        name: '仪器组',
        xAxisIndex: 2,
        yAxisIndex: 0,
        barWidth: '34%',
        silent:true,
        itemStyle: {
            normal: {
                color: 'rgb(243,153,21)',
            }
        },
        data: [null, 14, 39, 40, 150, 240, 140, 90, 40, 50.36, 14, null],
    }, {
        type: 'bar',
        name: '对等组',
        xAxisIndex: 3,
        yAxisIndex: 0,
        barWidth: '14%',
        silent:true,
        itemStyle: {
            normal: {
                color: 'rgb(27,149,242)',
                // opacity: 0.4
            }
        },
        data: [null, 14, 15, 40, 100, 150, 140, 10, 40, 6, 15, null],
    }, {
        type: 'scatter',
        name: '本室月均值',
        xAxisIndex: 3,
        yAxisIndex: 0,
        barWidth: '4',
        silent:true,
        itemStyle: {
            normal: {
                color: 'rgb(250,0,0)',
                // opacity: 0.4
            }
        },
        data: [null, null, null, null, 104, null, null, null, null, null, null, null],
    }]
};