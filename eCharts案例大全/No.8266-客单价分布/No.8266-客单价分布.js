option = {
    title: {
        text: '客单价分布'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: {
        type: 'value',
        name:"人数（人）"
    },
    yAxis: {
        type: 'category',
        data: ['0~10', '10~20', '20~30', '30~40', '40~50', '>50'],
        name:"客单价（元）"
    },
    series: [
        {
            type: 'bar',
            data: [50, 23, 60, 180, 30, 2],
            barWidth: '99%',
            color:"#1eb6cc",
            label:{
                show:true,
                position:'right',
                color:'#115963',
                fontSize: 18
            }
        }
    ]
};