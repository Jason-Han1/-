var areaStyle = {
    silent: false,
    itemStyle: {
        normal: {
            color: 'rgba(241, 28, 93, 0.05)'
        }
    },
    data: [
        [{
            name: '预警区域',
            xAxis: '产品4',
            label: {
                normal: {
                    offset: [500, 500],
                   
                    fontSize: 14
                }
            }
        }, {
            xAxis: '产品9'
        }]
    ]
}
var option = {
    title: {
        text: '项目需要的堆叠图',
        subtext: 'gogoogogogo',
        x: 'center',
        align: 'right'
    },

    backgroundColor: '#fff',
    color: ['#16c2af', '#ffc751', '#4162ff', '#ff6e72', '#9692ff'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        x: 'center',
        top: '8%',
        data: ['20', '50', '80', '100', '150']
    },
    grid: { //图表的位置
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    yAxis: [{
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#f2f2f2']
            }
        },
    }],
    xAxis: [{
        type: 'category',
        data: ['产品1', '产品2', '产品3', '产品4', '产品5', '产品6', '产品8', '产品9']
    }],
    series: [{
            name: '20',
            type: 'bar',
            stack: '总量',
            barWidth: '30px',
            data: [0, 212, 101, 0, 0, 0, 120, 0],
            markArea: areaStyle
        },
        {
            name: '50',
            type: 'bar',
            stack: '总量',
            data: [0, 232, 251, 0, 0, 0, 10, 0],
            markArea: areaStyle
        },
        {
            name: '80',
            type: 'bar',
            stack: '总量',
            data: [0, 232, 231, 134, 190, 0, 110, 0],
            markArea: areaStyle
        },
        {
            name: '100',
            type: 'bar',
            stack: '总量',
            data: [0, 132, 101, 0, 0, 150, 210, 0],
            markArea: areaStyle
        },
        {
            name: '150',
            type: 'bar',
            stack: '总量',
            data: [120, 252, 201, 134, 60, 0, 150, 0],
            markArea: areaStyle
        },
        {
            name: '300',
            type: 'bar',
            stack: '总量',
            data: [120, 0, 0, 184, 70, 0, 0, 90],
            markArea: areaStyle
        },
        {
            name: '500',
            type: 'bar',
            stack: '总量',
            data: [120, 0, 0, 174, 10, 230, 0, 0],
            markArea: areaStyle
        },
        {
            name: '800',
            type: 'bar',
            stack: '总量',
            data: [220, 0, 0, 134, 70, 0, 0, 0],
            markArea: areaStyle
        },
        {
            name: '1000',
            type: 'bar',
            stack: '总量',
            data: [0, 0, 0, 0, 0, 0, 0, 90],
            markArea: areaStyle
        }
    ]
};