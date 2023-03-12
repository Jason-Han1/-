option = {
    title: {
        text: '业务可用率'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['数字电路出租','ATM电路','MPLS专线','互联网专线','DDN电路','MSTP','xDSL专线','FR电路']
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
        data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    },
    yAxis: {
        type: 'value',  
            axisLabel: {  
                  show: true,  
                  interval: 'auto',  
                  formatter: '{value} %'  
                }, 
    },
    series: [
        {
            name:'数字电路出租',
            type:'line',
            stack: '数字电路出租',
            data:[88, 88, 90, 82, 80, 81, 80, 80, 90, 80, 90, 60]
        },
        {
            name:'ATM电路',
            type:'line',
            stack: 'ATM电路',
            data:[83, 88, 80, 90, 80, 90, 60, 70, 84, 88, 80, 80]
        },
        {
            name:'MPLS专线',
            type:'line',
            stack: 'MPLS专线',
            data:[80, 88, 80, 70, 80, 80, 70, 84, 88, 80, 80]
        },
        {
            name:'互联网专线',
            type:'line',
            stack: '互联网专线可用率',
            data:[60, 60, 70, 84, 88, 80, 80, 89, 60, 88, 90, 92]
        },
        {
            name:'DDN电路',
            type:'line',
            stack: 'DDN电路可用率',
            data:[82, 85, 89, 60, 88, 90, 92, 70, 84, 88, 80, 80]
        }
    ]
};
