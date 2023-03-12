


option = {
    backgroundColor: '#010a0f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },

    grid: {
        left: '10px',
        right: '30px',
        bottom: '0%',
        top: '10px',
        containLabel: true //grid 区域是否包含坐标轴的刻度标签。
    },
    xAxis: {
        type: 'value',
        position:'top',
        axisLine: {
            
            lineStyle: {
                color: '#14568d',
                width: 1, //这里是为了突出显示加上的
            }
        },
        axisLabel: {

            show: true,
            textStyle: {
                color: '#cfe2f0' //字体颜色
            }
        },
        splitLine: { //保留网格线
            show: true,
            lineStyle: { //y轴网格线设置
                color: '#0a2b52',
                width: 1,
                type: 'solid'
            }

        },
    },
    yAxis: {
        type: 'category',
        axisLine: {
           
            lineStyle: {
                color: '#14568d',
                width: 1, //这里是为了突出显示加上的
            }
        },
        axisLabel: {

            show: true,
            textStyle: {
                color: '#cfe2f0' //字体颜色
            }
        },
        splitLine: { //保留网格线
            show: false,

        },
        data: ["企业","金融","政府","教育","制造"],

    },
    series: [
        
        {
            name: '用户统计历史数据',
            type: 'bar',
            barWidth: 12,

            z: 1,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{c}',
                    textStyle: {
                        color: '#969a9d' //color of value
                    }
                }
            },
            itemStyle: {
                normal: {

                    color: {
                        type: 'linear',
                        colorStops: [{
                                offset: 0,
                                color: 'transparent '
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(31,75,117,0.5)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(31,75,117,1)'
                            }
                        ]

                    }


                },

            },
            data: [340, 120,200,251,321]
        },
        
    ]
}