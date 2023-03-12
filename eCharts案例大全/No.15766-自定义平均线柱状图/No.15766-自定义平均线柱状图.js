var name = ['6933万公顷', '24.83亿立方米', '52.76立方米'];
data=[30,20,10];
var xMax = 100;
option = {
    tooltip: {
        show: true,
        formatter: "{b} :{c}%"
    },
    grid: {
        left: '15%',
        top: '5%',
        bottom: '0',
        right: '10%'
    },
    xAxis: [{
        max: xMax,
        type: 'value',
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        type: 'category',
        data: [ '每公顷蓄积量52.76立方米', '总蓄积量24.83亿立方米', '人工林面积6933 万公顷'],
        
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        }
    }],
    series: [{
        name: ' ',
        type: 'bar',
        barWidth: 16,
        label:{
            normal:{
                show:true,
                position:'right',
                color:'#3B3F46'
            }
        },
        silent: true,
        itemStyle: {
            normal: {
                color: '#000'
            }
        },
        barGap: '-100%',
        barCategoryGap: '50%',
        data: name.map(function(d) {
            return xMax
        }),
    }, {
        name: ' ',
        type: 'bar',
        barWidth: 16,
        label: {
            normal: {
                show: false
                // position:'right'
            }
        },
        data:data,
      
    }]
};