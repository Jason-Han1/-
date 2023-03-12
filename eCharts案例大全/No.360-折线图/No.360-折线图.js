// Generate data
var category = ['2021/05','2021/06','2021/07','2021/08','2021/09','2021/10','2021/11'];
var dottedBase = [];
var lineData = [20,30,25
                ,28,30,45
                ,50];
var lineData2 = [30,10,15
                ,20,23,31
                ,35];                
var barData = [13,15,17
                ,12.8,13,21.2
                ,26.9];
var rateData = [];               
for (var i = 0; i < 7; i++) {
    // var date = i+2001;
    // category.push(date)
    // var rate=barData[i]/lineData[i]*100;
    var rate=lineData[i];
    rateData[i] = rate.toFixed(2);
}

var rateData2 = []; 
for (var i = 0; i < 7; i++) {
    // var date = i+2001;
    // category.push(date)
    // var rate=barData[i]/lineData2[i]*100;
    var rate=lineData2[i];
    rateData2[i] = rate.toFixed(2);
}


// option
option = {
    title: {
        text: '',
        x: 'center',
        y: 0,
        textStyle:{
            color:'#B4B4B4',
            fontSize:16,
            fontWeight:'normal',
        },
        
    },
    backgroundColor: '#09193A',
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
        data: ['损耗率', '环比增长率','同比增长率'],
        textStyle: {
            color: '#B4B4B4'
        },
        top:'7%',
    },
    grid:{
        // x:'12%',
        width:'85%',
        // y:'12%',
        left:"10%",
        // right:"30%",
        bottom:"60%"
        
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#B4B4B4'
            }
        },
        axisTick:{
            show:false,
        },
    },
    yAxis: [{

        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#B4B4B4',
            }
        },
        
        axisLabel:{
            formatter:'{value} '+'‰',
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
            formatter:'{value} '+'％',
        }
    }],
    
    series: [{
        name: '环比增长率',
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
        name: '同比增长率',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 8,
        yAxisIndex: 1,
        itemStyle: {
                normal: {
                color:'#8A64B8'},
        },
        data: rateData2
    }, 
    
    {
        name: '损耗率',
        type: 'bar',
        barWidth: 10,
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