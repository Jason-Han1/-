option = {
    backgroundColor: '#001C69',
    title: {
        show: true,
        text: '非油销售情况排名',
        x: 'center',
        textStyle: {
            fontSize: '180%',
            color: '#ffffff'
        }
    },
    grid: {
        x: '30%',
        y: '20%'
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#ffffff'
            }
        },
        //  改变x轴颜色
        axisLine: {
            lineStyle: {
                color: '#ffffff'
                    //                            width:8,//这里是为了突出显示加上的，可以去掉
            }
        }
    }],
    yAxis: [{
        type: 'category',
        axisLabel: {
            textStyle: {
                color: '#ffffff'
            }
        },
        axisTick: {
            show: false
        },
        //  改变x轴颜色
        axisLine: {
            lineStyle: {
                color: '#ffffff'
                    //                            width:8,//这里是为了突出显示加上的，可以去掉
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    series: [{
        type: 'bar',
        itemStyle: {
            normal: {
                show: true,
                color: {
                    type: 'linear',
                    colorStops: [{
                        offset: 1,
                        color: 'rgba(254, 82, 82,1)'
                    }, {
                        offset: 0,
                        color: 'rgba(254, 82, 82,0.5)'
                    }]
                },
                barBorderRadius: 88,
                borderWidth: 2,
                borderColor: '#333',
            }
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                textStyle: {
                    color: '#f3ef91',
                    fontSize: '120%'
                }
            }
        },
        barGap: '0%',
        barCategoryGap: '20%',
        barMaxWidth:'30px',
        data: [22, 23, 33, 34, 36, 38, 39, 41, 42, 43, 32, 44]
    }]
};