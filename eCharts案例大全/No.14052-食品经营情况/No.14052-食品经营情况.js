var colors = ['#447da9','#9dbcd3','#a53f6f','#53875a'];
var data1=[502,378,279,386];
var data2=[225,178,255,269];
var data3=[5,3,4,7];
var data4=[10,13,8,11];
option = {
    title:{
        text:'季度事项趋势分析',
        textStyle:{
             fontSize: '18'
        }
    },
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },
    grid: {
        right: '20%',
        top:80
    },
    
    legend: {
        data:['受理事项数','不予受理事项数','同比','环比'],
        align: 'left',
        left: 10,
        top:30
    },
    xAxis: [
        {
            type: 'category',
            
            axisTick: {
                alignWithLabel: true
            },
            data: ['第一季度','第二季度','第三季度','第四季度']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1000,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'受理事项数',
            stack: '总量',
            type:'bar',
            barWidth : 30,
            data:data1
        },
        {
            name:'不予受理事项数',
            stack: '总量',
            type:'bar',
            data:data2
        },
        {
            name:'同比',
            type:'line',
            yAxisIndex: 1,
            data:data4
        },
        
        {
            name:'环比',
            type:'line',
            yAxisIndex: 1,
            data:data3
        }
    ]
};
