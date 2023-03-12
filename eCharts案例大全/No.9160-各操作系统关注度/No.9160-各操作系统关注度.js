option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['ColorOS','EMUI','鸿蒙','Flume'],
        left:8,
        top:8
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['社交媒体','自媒体','新闻媒体','问答','论坛','视频','法律投诉']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'ColorOS',
            type:'bar',
            // stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'EMUI',
            type:'bar',
            // stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'鸿蒙',
            type:'bar',
            // stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'Flume',
            type:'bar',
            // stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        }
    ]
};
