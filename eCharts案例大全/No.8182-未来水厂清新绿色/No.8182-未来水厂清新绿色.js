// Generate data
var category = ['2019-12-01','2019-12-02','2019-12-03','2019-12-04','2019-12-05','2019-12-06',
'2019-12-07'];
var dottedBase = [];
var lineData = [2869,2657,3288
                ,3698,3878,3554
                ,3605,
                ];
var barData = [460,550,750
                ,850,800,760
                ,650
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
        text: '未来水厂清新绿色',
        x: 'center',
        y: 20,
        textStyle:{
            color:'#333',
            fontSize:18,
            fontWeight:'normal',
        },
        
    },
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        backgroundColor:'#333',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#333'
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
                color: '#27C2BC'
            }
        },
        axisTick:{
            show:true,
        },
        axisLabel:{
            textStyle:{
                color:"#333",
                fontSize:16
            }
        }
    },
    yAxis: [{
        name:'单位：万m³',
        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#27C2BC',
            }
        },
        
        axisLabel:{
            formatter:'{value} ',
            textStyle:{
                 color:"#333",
                fontSize:16
            }
        }
    },
        {
        name:'同比',
        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#27C2BC',
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
                color:'#0BA6E3'},
        },
        data: rateData
    }, 
    
    {
        name: '实际用量',
        type: 'bar',
        barWidth: 16,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#0CDF8A'},
                        {offset: 1, color: '#3EACE5'}
                    ]
                )
            }
        },
        data: barData
    }
   ]
};