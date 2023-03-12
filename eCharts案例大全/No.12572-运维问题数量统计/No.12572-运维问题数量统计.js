option = {
    title: {
        text: '运维问题数量统计'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['故障次数','涉及县数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'故障次数',
            type:'line',
            data:[26 ,9 ,3 ,26 ,29 ,40 ,31 ,48 ,51 ,45 ,51 ,35],
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            }
        },
        {
            name:'涉及县数',
            type:'line',
            data:[21 ,8 ,3 ,21 ,21 ,31 ,27 ,30 ,36 ,31 ,34 ,28],
            label: {
                normal: {
                    show: true,
                    position: 'bottom'
                }
            }
        }
    ]
};
