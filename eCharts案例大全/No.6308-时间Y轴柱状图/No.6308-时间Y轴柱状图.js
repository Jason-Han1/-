
var xData = ['ERP集中化项目','430项目','可视化大屏项目','大数据架构升级项目'];
var yData = ['2020-06-11','2020-07-11','2020-08-11','2020-09-11']
option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: xData
    },
    yAxis: {
      type: 'time',
      min: '2020-06-01'
    },
    series: [{
        type: 'bar',
        data:yData,
        itemStyle: {
            normal: {
                color: (params) => {
                    let colors = ['#4150d8', '#28bf7e', '#ed7c2f', '#f2a93b', '#f9cf36', '#4a5bdc', '#4cd698', '#f4914e', '#fcb75b', '#ffe180', '#b6c2ff', '#96edc1']
                    return colors[params.dataIndex]
                }
            }
        },
        barWidth: '30%'
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter : '{b}: <br />{c}'
    },
};