var chartData1=[500, 831, 731]
var chartDara2=[250,50,51]
var chartData3=[250,221,230]
var chartY=['2015年','2016年','2017年']
var chartX=['总资产','流动资产','非流动资产']
var chartColor=['#333399','#6699ff','#993333'];
option = {

    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        // formatter:function(value){
        //     return value[0].data+'个'
        // }
    },
    legend: {
        bottom:'5%',
        data: ['总资产','流动资产', '非流动资产']
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '10%',
        top:'10%',
        containLabel: true
    },
    xAxis:  {
        type: 'value',
        axisLine:{
            show:false
        },
        axisTick:{
            show:false
        },
        axisLabel:{
            show:false
        },
        splitLine:{
            show:false
        },
    },
    yAxis: {
        type: 'category',
        inverse: true,
        axisLine:{
            show:false
        },
        axisTick:{
            show:false
        },
        axisLabel:{
            show:true
        },
        splitLine:{
            show:false
        },
        data: chartY
    },
    series: [
        {
            name: chartX[0],
            barWidth: '20%',
            type: 'bar',
            stack: '总资产',
            itemStyle:{
                normal:{
                    color:chartColor[0]
                    
                },
            },
            
            data: chartData1
        },
        {
            name: chartX[1],
            barWidth: '20%',
            type: 'bar',
            stack: '资产明细',
            itemStyle:{normal:{color:chartColor[1]}},
            data: chartDara2
        },
        {
            name: chartX[2],
            barWidth: '20%',
            type: 'bar',
            stack: '资产明细',
            itemStyle:{normal:{color:chartColor[2]}},
            data: chartData3
        }
        
    ]
};