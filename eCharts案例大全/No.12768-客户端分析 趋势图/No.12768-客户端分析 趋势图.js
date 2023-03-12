option = {
    title: {
        text: '客户端分析 趋势图',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['活跃用户','新增用户']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {},
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['2018.12.01','2018.12.02','2018.12.03','2018.12.04','2018.12.05','2018.12.06','2018.12.07']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} '
        }
    },
    series: [
        {
            name:'活跃用户',
            type:'line',
            data:[11, 11, 15, 13, 12, 13, 10],
           
           
        },
        {
            name:'新增用户',
            type:'line',
            data:[1, 3, 2, 5, 3, 2, 0],
           
            
        }
    ]
};
