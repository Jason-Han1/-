var depName =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S"];
var depData =[40,11,34,54,65,77,88,99,19,55,44,35,67,72,36,69,80,83,86];
var depBg =[];
var maxData = depData[0];
for (let i = 0; i < depData.length; i++) {
    if(maxData< depData[i]){
        maxData = depData[i]
    }
}
for (let i = 0; i < depData.length; i++) {
    depBg.push(maxData)
}
option = {
    backgroundColor:"#FBFBFD",
    grid: {
        left: '10%',
        right: '0',
        bottom: '0%',
        top: '4%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name  + ' : ' + params[0].value
        }
    },
    xAxis: {
        show: true,
        type: 'value',
        axisLabel: {
            show: true,
            textStyle: {
                color: '#001E50'
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#001E50'
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: depName
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '12'
            },
        },
        data:depName
    }],
    series: [{
            name: '',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: '#AED4F8',
                },
            },
            markLine: {
                symbol:'none',
                label:{
                    position:'start',
                    color:"rgba(1,30,80,0.50)",
                    formatter: function(params) {
						return '平均值：' + params.value;
					},
                },
                lineStyle: {
                    type: 'dashed',
                    color:'rgba(1,30,80,0.50)'
                },
                data: [
                    {type: 'average'}
                ]
            },
            barWidth: 20,
            data: depData
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: depBg,
            itemStyle: {
                normal: {
                    color: 'rgba(1,30,80,0.50)',
                    barBorderRadius: 30,
                }
            },
        },
    ]
};