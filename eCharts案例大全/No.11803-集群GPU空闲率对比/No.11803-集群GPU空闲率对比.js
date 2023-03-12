option = {
    title: {
        text: '集群GPU空闲率对比'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['腾讯云','ucloud','北京机房']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五']
    },
    yAxis: {
        type: 'value',
        max:0.2
    },
    series: [
        {
            name:'腾讯云',
            type:'line',
            label:{
                normal:{
                    show:true
                }
            },
            data:[0.002314815,0.002237713,0.056213091,0.0675,0.085185185]
        },
        {
            name:'ucloud',
            type:'line',
            label:{
                normal:{
                    show:true
                }
            },
            data:[0.000422297,
0.152078641,
0.174455706,
0.0000898,
0]
        },
        {
            name:'北京机房',
            type:'line',
            label:{
                normal:{
                    show:true
                }
            },
            data:[0.000369727,
0.007941101,
0.007058578,
0.000344007,
0.012786137]
        }
    ]
};
