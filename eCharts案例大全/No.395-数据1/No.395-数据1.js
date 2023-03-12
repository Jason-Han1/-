option = {
    backgroundColor: '#fff',
    title: {

    },
    color: ['#FF0000', '#0000C6', '#272727'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            },
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    grid: {
        left: '25',
        right: '25',
        bottom: '24',
        top: '75',
        containLabel: true
    },
    legend: {
        data: ['上海江苏', '上海浙江', '上海安徽'],
        orient: 'horizontal',
       // icon: "rect",
        show: true,
        left: 20,
        top: 25,
    },
    xAxis: {
        type: 'category',
        data: [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],
        splitLine: {
            show: false
        },
        axisTick: {
            show: true
        },
        axisLine: {
            show: true
        },
    },
    yAxis: {
        type: 'value',
        // max: max_value>=100? max_value + 100: max_value+10,
        // max: max_value > 100 ? max_value * 2 : max_value + 10,
        // interval: 10,
        // nameLocation: "center",
        axisLabel: {
            color: '#999',
            textStyle: {
                fontSize: 12
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#E0E0E0'
            }
        },
        axisTick: {
            show: true
        },
        axisLine: {
            show: true
        },
    },
    series: [{
            name: '上海江苏',
            type: 'line',
            smooth: true,
            data: [0.41242,0.39945,0.39314,0.36797,0.40464,0.39808,0.41782,0.45322,0.4363,0.40683,0.39281,0.40846,0.37606,0.41865,0.39796,0.44586,0.4361,0.442]
        },
        {
            name: '上海浙江',
            type: 'line',
            smooth: true,
            data: [0.4323,0.4074,0.43394,0.41505,0.46449,0.43661,0.45768,0.47091,0.50099,0.4601,0.44235,0.44871,0.42448,0.45807,0.43284,0.44394,0.42547,0.435]
        },
        {
            name: '上海安徽',
            type: 'line',
            smooth: true,
            data: [0.42517,0.40924,0.39506,0.38574,0.4234,0.40412,0.45312,0.47539,0.49524,0.50743,0.46125,0.4737,0.42723,0.42381,0.41923,0.47531,0.46764,0.471]
        }
    ]
};