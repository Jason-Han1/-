option = {
    title: {
        text: '磁盘使用情况',
        subtext: '测试数据'
    },
    grid: {
        y: 70,
        y2: 30,
        x2: 20
    },
    xAxis: [{ 
            //type : 'category', 
            inverse: true,
            axisLine: {show:false}, 
            axisTick: {show:false},
            splitArea: {show:false}, 
            splitLine: {show:false},
            axisLabel: { color:'#fff', 
            rich: {
                lg: {
                    backgroundColor: '#339911',
                    color: '#fff',
                    borderRadius: 15,
                    // padding: 5, 
                    align: 'center', 
                    width: 15, 
                    height: 15 },
                    } 
        
    }, 
    data : ['C:','D:','E:','F:'] 
    
}, 
{
    // type : 'category', 
    axisLine: {show:false}, 
    axisTick: {show:false},
    axisLabel:
                    {
                        show: false
                    },
                    splitArea: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    data: ['C:', 'D:', 'E:', 'F:']
                }],
            yAxis: {
                show: false
            },
            series: [{
                name: '条',
                type: 'bar',
                xAxisIndex: 0,
                barWidth: 30,
                itemStyle: {
                    normal: {
                        color: 'rgba(47,255,22,1)',
                        barBorderRadius: 30,
                        label: {
                            show: true,
                            position: 'inside',
                            formatter: '{c}%',
                            textStyle: {
                                color: '#E87C25'
                            }
                        }
                    }
                },
                data: [90, 70, 20, 10]
            }, {
                name: '框',
                type: 'bar',
                xAxisIndex: 1,
                barWidth: 40,
                barGap: '-100%',
                itemStyle: {
                    normal: {
                        color: 'rgba(36,91,8,0.5)', // color: 'none',
                        borderColor: '#00c1de',
                        borderWidth: 3,
                        barBorderRadius: 15,
                        label: {
                            show: true,
                            formatter: function(p) {
                                return p.value > 0 ? (p.value + '%') : '';
                            }
                        }
                    }
                },
                data: [100, 100, 100, 100],
            }]
        };