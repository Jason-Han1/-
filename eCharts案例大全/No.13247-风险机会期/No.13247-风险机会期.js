option = {
    title: [{
            text: '',
            left: 'center'
        }
    ],
    //当trigger为’item’时只会显示该点的数据，
    //为’axis’时显示该列下所有坐标轴所对应的数据。
    //提示框组件
    tooltip: {
        //？触发类型
        trigger: 'axis',
    },
    legend: {
        left: 'left',
        data: ['投资', '储蓄',]
    },
    grid: {
        left: '3%',
        right: '4%',
        top: '20%',
        bottom: '3%',
        containLabel: true
    },
    //工具栏组件
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {} //是否保存图片  
        }
    },
    xAxis: {
        type: 'category', //X轴均为category，Y轴均为value   //设置为类目轴  
        // boundaryGap: false,  //数值轴两端的空白策略  //类目在分割线上  
        data: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
    },
    yAxis: {
        type: 'value',
        name: "",
        axisLabel: {
            formatter: '{value}'
        },
        axisPointer: {
            snap: true
        }
    },
    series: [{
            name: "投资",
            type: 'line',
            label: {
                normal: {
                    show: false,
                    position: 'top'
                }
            },
            lineStyle: {
               
            },
            data: [12.84, 12.38, 13.09, 13.99, 15.51, 16.25, 17.52, 19.25, 20.77, 22.53, 24.24, 23.42, 23.69, 24.93, 27.65, 30.41, 32.33, 32.36, 30.59, 25.25, 27.53, 28.78, 31.26, 32.99, 35.11, 37.02, 36.67],
            markArea: {
                data: [
                    [{
                        name: '风险期',
                        xAxis: '2006'
                    }, {
                        xAxis: '2009'
                    }]
                ],
                label: {
                    normal: {
                        show: true,
                        fontSize: 15,
                        color: '#2f4554'
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'green',
                        opacity: 0.3
                    }
                }
            }
        },
        {
            name: '储蓄',
            type: 'line',
            stack: '总量',
            smooth: true,
            label: {
                normal: {
                    show: false,
                    position: 'bottom'
                }
            },
            data: [12.06, 12.1, 12.74, 13.34, 14.58, 15.35, 16.56, 18.23, 19.14, 19.96, 20.48, 19.74, 19.42, 19.9, 21.46, 23.2, 24.62, 25.17, 23.36, 21.3, 22.4, 22.98, 25.6, 28.07, 30.36, 31.78, 31.46],
            markArea: {
                data: [
                     [{
                        name: '机会期',
                        xAxis: '1990'
                    }, {
                        xAxis: '1994'
                    }]
                ],
                label: {
                    normal: {
                        show: true,
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: '#2f4554'

                    }
                },
                itemStyle: {
                    normal: {
                        color: 'red',
                        opacity: 0.2
                    }
                }
            }
        }
    ]
};