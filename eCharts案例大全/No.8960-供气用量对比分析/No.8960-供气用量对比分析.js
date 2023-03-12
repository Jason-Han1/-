// Generate data
var category = ['2019-12-01','2019-12-02','2019-12-03','2019-12-04','2019-12-05','2019-12-06',
'2019-12-07','2019-12-08','2019-12-09','2019-12-10'];
var dottedBase = [];
var lineData = [2869,2657,3288
                ,3698,3878,3554
                ,3605,3978,3867,3453
                ];
var barData = [460,550,750
                ,850,800,760
                ,650,456,600,550
                ];
var rateData = [];               
32808
for (var i = 0; i < 33; i++) {
    // var date = i+2001;
    // category.push(date)
    var rate=barData[i]/lineData[i]*1000;
    rateData[i] = rate.toFixed(2);
}


// option
option = {
    title: {
        text: '供气用量对比分析',
        x: 'center',
        y: 20,
        textStyle:{
            color:'#fff',
            fontSize:18,
            fontWeight:'normal',
        },
        
    },
    backgroundColor: '#0d235e',
    tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(255,255,255,0.1)',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#7B7DDC'
            }
        }
    },
    legend: {
        data: ['实际用量', '计划量',],
        textStyle: {
            color: '#ccc'
        },
        top:'7%',
        right:'10%'
    },
    grid:{
        x:'12%',
        width:'82%',
        y:'12%',
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#B4B4B4'
            }
        },
        axisTick:{
            show:true,
        },
        axisLabel:{
            textStyle:{
                color:"#ccc",
                fontSize:16
            }
        }
    },
    yAxis: [{
        name:'单位：万m³',
        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#B4B4B4',
            }
        },
        
        axisLabel:{
            formatter:'{value} ',
            textStyle:{
                 color:"#ccc",
                fontSize:16
            }
        }
    },
        {

        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#B4B4B4',
            }
        },
        axisLabel:{
            formatter:'{value} ',
        }
    }],
    
    series: [{
        name: '计划量',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 8,
        yAxisIndex: 1,
        itemStyle: {
                normal: {
                color:'#F02FC2'},
        },
        data: rateData
    }, 
    
    {
        name: '实际用量',
        type: 'bar',
        barWidth: 15,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#956FD4'},
                        {offset: 1, color: '#3EACE5'}
                    ]
                )
            }
        },
        data: barData
    }
   ]
};