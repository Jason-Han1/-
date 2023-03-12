option = {
    color: ['#22DCB8', '#F47100'],
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
    // grid: {
    //     left: '25',
    //     right: '25',
    //     bottom: '24',
    //     top: '75',
    //     containLabel: true
    // },
    legend: {
        // orient: 'horizontal',
        icon: "rect",
        show: true,
        right: 0,
        top: 25,
    },
    xAxis: {
        type: 'category',
        data: ['0711', '0712', '0713', '0714', '0715', '0716', '0718','0719','0720','0721','0722','0723','0724','0725','0726','0727','0728','0729','0730','0801','0802','0803'],
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#999',
            textStyle: {
                fontSize: 12
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#F3F4F4',
                type: 'dashed' // y轴分割线类型
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
    },
     dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 60
    },
    {
      start: 0,
      end: 60
    }
  ],
    series: [{
            name: '新增数量',
            type: 'line',
            smooth: true,
            symbol:'none',
            data: [13,4,44,45,122,76,13,4,44,45,122,76]
        },
        {
            name: '删除数量',
            type: 'line',
            smooth: true,
            symbol:'none',
            data: [13,54,34,144,35,53,13,54,34,144,35,53]
        }
    ]
};