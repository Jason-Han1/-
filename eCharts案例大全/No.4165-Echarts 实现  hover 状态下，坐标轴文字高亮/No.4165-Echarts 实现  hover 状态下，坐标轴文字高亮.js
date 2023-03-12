// 注：为保证示例能在线运行，博文的 options --> option

const yAxisData = ['HUAWEI', 'Apple', 'OPPO', 'ViVo']

option = {
    tooltip: {},
    grid: {
        top: 20,
        bottom: 0,
    },
    xAxis: {
        show: false
    },
    yAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        triggerEvent: true,
        data: ['HUAWEI', 'Apple', 'OPPO', 'ViVo']
    },
    series: {
        type: 'bar',
        data: [56, 24, 17, 12]
    }
};

// 注册 mouseover 事件，类目轴名称切换为自定义颜色
myChart.on('mouseover', params => {
    if (params.componentType === 'yAxis') {
        const yAxisName = params.value
        const yAxisItem = {
            value: yAxisName,
            textStyle: {
                color: '#00ff7f'
            }
        }

        const index = yAxisData.findIndex(item => {
            return item === yAxisName || item.value === yAxisName
        })

        yAxisData.splice(index, 1, yAxisItem)
        option.yAxis.data = JSON.parse(JSON.stringify(yAxisData))
        myChart.setOption(option)
    }
})

// 注册 mouseout 事件，类目轴名称恢复默认颜色
myChart.on('mouseout', params => {
    if (params.componentType === 'yAxis') {
        const yAxisName = params.value
        const index = yAxisData.findIndex(item => {
            return item === yAxisName || item.value === yAxisName
        })

        yAxisData.splice(index, 1, yAxisName)
        option.yAxis.data = JSON.parse(JSON.stringify(yAxisData))
        myChart.setOption(option)
    }
})