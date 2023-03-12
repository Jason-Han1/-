// Generate data
var category = [];
var dottedBase = [];
var lineData = [2550,1700,1650,1650,1200,1200,610];
var barData = [1220,850,850,1000,750,850,260];
var rateData = [];               

for (var i = 0; i < 7; i++) {
    var date = i+20011;
    category.push(date);
    var rate=lineData[i]/barData[i];
    rateData[i] = rate.toFixed(2);
}


// option
option = {
    backgroundColor: '#191E40',
    tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(255,255,255,0.2)',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#3259B8'
            }
        }
    },
    legend: {
        data: ['New residental land', 'New commercial residental land',],
        textStyle: {
            color: '#ccc'
        }
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    yAxis: [{
        name:'Area',
        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#ccc',
            }
        },
        axisLabel:{
            formatter:'{value} Ha',
        }
    },
        ],
    
    series: [
    
    {
        name: 'New residental land',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 10,
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
    }, 
    
    {
        name: 'New commercial residental land',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 10,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(156,107,211,0.5)'},
                        {offset: 0.2, color: 'rgba(156,107,211,0.3)'},
                        {offset: 1, color: 'rgba(156,107,211,0)'}
                    ]
                )
            }
        },
        z: -12,
        
        data: lineData
    }, 
   ]
};