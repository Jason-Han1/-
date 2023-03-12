option = {
    backgroundColor:'#333',
     textStyle: {
            color: '#fff',
            fontSize: '26'
        },
     color: ["#6E9D4E", "#EDDB4F","#F7923A", "#F14747" ],
    title: {
        text: '7月水果销量',
        x: '2%',
        y:'1%',
        textStyle: {
            color: '#fff',
            fontSize: '26'
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { 
            type: 'shadow' ,
            textStyle: {
            color: '#fff',
            fontSize: '26'
        },
        }
    },
    legend: {
        data: ['猕猴桃','香蕉', '橙子','草莓',  ],
        align: 'right',
        right:'1%',
        top:'3%',
        textStyle: {
            color: '#fff',
            fontSize: '16'
        },
    },
    grid: {
        left: '3%',
        right: '%',
        top :'15%',
      
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        data: ['第一周', '第二周', '第三周', '第四周'],
       
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
        name: '猕猴桃',
        type: 'bar',
        data: [60, 110, 180, 100]
    }, {
        name: '香蕉',
        type: 'bar',
        data: [90, 130, 170, 130]
    }, {
        name: '橙子',
        type: 'bar',
        data: [120, 160, 140, 160 ]
    }, {
        name: '草莓',
        type: 'bar',
        data: [110, 190, 90, 100]
    }]
};