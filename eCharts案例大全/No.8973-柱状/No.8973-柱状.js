option = {
    backgroundColor: '#fff',
    grid: {
        x: '50',
        y: '20%'
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [{
        type: 'value',
        axisTick: {
            show: true
        },
        axisLabel: {
            textStyle: {
                color: '#5F6E76'
            }
        },
        //  改变x轴颜色
        axisLine: {
            lineStyle: {
                color: '#5F6E76'
                    //                            width:8,//这里是为了突出显示加上的，可以去掉
            }
        }
    }],
    yAxis: [{
        type: 'category',
        axisLabel: {
            textStyle: {
                color: '#5F6E76'
            }
        },
        axisTick: {
            show: true
        },
        //  改变x轴颜色
        axisLine: {
            lineStyle: {
                color: '#5F6E76'
                    //                            width:8,//这里是为了突出显示加上的，可以去掉
            }
        },
        data: ['被观看', '被下载']
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
                        color: 'rgba(204,48,40,1)'
                    }, {
                        offset: 0,
                        color: 'rgba(255,113,102,0.16)'
                    }]
                },
                barBorderRadius: 88,
                borderWidth: 0,
                borderColor: '#fff',
            }
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                textStyle: {
                    color: '#9E251F',
                    fontSize: '14px'
                }
            }
        },
        barGap: '100%',
        barCategoryGap: '2%',
        barMaxWidth:'40px',
        data: [8762, 4912]
    }]
};