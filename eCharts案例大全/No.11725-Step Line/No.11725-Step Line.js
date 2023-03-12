option = {
    title: {
        text: 'Step Line'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['Step Start', 'Step Middle', 'Step End']
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
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
     visualMap: {
        show: false,
        type: 'continuous',
        min: 0,
        max: 600,
        realtime: false,
        calculable : true,
        color: ['red','blue'],
        z: -1,
        dimension: 1
     },
    series: [
        {
            name:'Step Start',
            type:'line',
            step: 'start',
            color: '#000',
            data:[{
                value:120,
                visualMap: false
            }, 132, 101, 134, 90, 230, 210],
            
            symbol: 'circle', //path://M10 28,A20 20,0 1 1 10 29z
            symbolSize: 8,  //8
         itemStyle: {
              normal:{
                  borderColor: 'red',
              },
         }
        },
        {
            name:'Step Middle',
            type:'line',
            step: 'middle',
            data:[220, 282, 201, 234, 290, 430, 410],
            
        },
        {
            name:'Step End',
            type:'line',
            step: 'end',
            data:[450, 432, 401, 454, 590, 530, 510]
        }
    ]
};
