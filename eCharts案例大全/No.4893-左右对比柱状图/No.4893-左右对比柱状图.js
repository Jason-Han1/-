

option = {
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
    },
    legend: {
        left: 'center',
        top: '6%',
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 20,
        data: ['投资额（亿万）', '项目数（个）']
    },
    grid: [{
        top: '18%',
        bottom: '0',
        left: '12%',
        width: '28%',
        height: '70%',
        containLabel: true
    }, {
        top: '18%',
        bottom: '0',
        left: '53%',
        width: '0%',
        height: '68%',
    }, {
        top: '18%',
        bottom: '0',
        right: '12%',
        width: '28%',
        height: '70%',
        containLabel: true
    }],
    xAxis: [{
        type: 'value',
        inverse: true,
        show:false 
    }, 
    {
        gridIndex: 1,
        show: true
    }, 
    {
        gridIndex: 2,
        type: 'value',
        show:false 
    }],
    yAxis: [
        {
            position: 'right',
            axisLabel: {
                show: false
            },
            type: 'category',
            axisTick: {
                show: false
            },
            data: ['智慧水务','智慧酒店','智慧管网','智慧旅游','智慧城市']
        },
        {
            gridIndex: 1,
            position: 'center',
            axisLine: {
                show: false
            }, 
            type: 'category',
            inverse: false,
            axisTick: {
                show: false
            },
            data: ['智慧水务','智慧酒店','智慧管网','智慧旅游','智慧城市']
        },
        {
            gridIndex: 2,
            position: 'left',
            axisLabel: {
                show: false
            },
            type: 'category',
            inverse: false,
            axisTick: {
                show: false
            },
            data: ['智慧水务','智慧酒店','智慧管网','智慧旅游','智慧城市']
        }
    ],
    series: [
        {
            type: 'bar',
            barWidth: 11,
            name: '投资额（亿万）',
            itemStyle: {
                color: '#FE910A'
            },
            data: ['40','70','30','60','90']
        },
        {
            type: 'bar',
            barWidth: 11,
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: '项目数（个）',
            itemStyle: {
                color: '#1890FF'
            },
            data: ['6','10','7','4','8']
        }
    ]
};



