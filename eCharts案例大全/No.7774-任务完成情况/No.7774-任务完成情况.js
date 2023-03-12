var tot = 110;
option = {
    title: [{
        text: ['{a|共}', '{b|'+ tot + '}'].join('\t\t'),
        subtext: ['{a|剩余}', '{b|11%}'].join('\t\t'),
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontFamily: 'SourceHanSansCN-Regular',
                    fontWeight: '400',
                    color: "rgba(76, 177, 255, 1)",
                    fontSize: 24,
                    align: 'center',
                    textAlign: 'right'
                },
                b: {
                    fontFamily: 'SourceHanSansCN-Medium',
                    fontWeight: '500',
                    color: "rgba(197, 69, 130, 1)",
                    fontSize: 28,
                }
            }
        },
        subtextStyle: {
            rich: {
                a: {
                    fontFamily: 'SourceHanSansCN-Regular',
                    fontWeight: '400',
                    color: "rgba(76, 177, 255, 1)",
                    fontSize: 16,
                    textAlign: 'right'
                },
                b: {
                    fontFamily: 'SourceHanSansCN-Medium',
                    fontWeight: '500',
                    color: "rgba(197, 69, 130, 1)",
                    fontSize: 20,
                }
            }
        }
    }, {
        text: '任务完成情况',
        x: 'center'
    }],
    color: ['#ddd'], 
    legend: {
        show: true,
        itemWidth: 20,
        itemHeight: 4,
        padding: 2,
        orient: 'vertical',
        itemGap: 6,
        data: ['完成', '剩余'],
        y: 'top',
        left: '63%'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [{
        name: '任务完成情况',
        type: 'pie',
        clockWise: true,
        radius: ['50%', '60%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false, 
        data: [{
            value: 89,
            name: '完成',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#05b7ea' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#05b7ec' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                } 
            }
        }, {
            name: '剩余',
            value: 11
        }]
    }]
}