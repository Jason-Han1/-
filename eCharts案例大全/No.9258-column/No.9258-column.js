
var dimensions = [];
var dataval = [];
for (var i = 0; i < 100; i++) {
    dataval.push((Math.sin(i / 5) * (i / 5 + 0) + i - 30) / 5);
}

var option = {
    backgroundColor: '#070b1c',
    title: {
         text: '数据 ✌ 之美',
         textStyle: {
             align: 'center',
             color: '#bcfff7',
             fontSize: 16,
         },
         top: '17',
         left: 'center',
     },
    tooltip: {
        show: true,
        formatter: "{a}:{c}"
    },
    visualMap: {
        show: false,
        // min: 0,
        // max: 50,
        dimension: 0,
        inRange: {
            color: ['#00FCFF', '#6F57C9', '#a9e34b', '#5f3dc4', '#862e9c', '#38d9a9','#ffd43b', '#ffa94d', '#57e7ec', '#f5898b', '#ef5055',"#37b70c", "#fae521", "#f29c00", "#dd3f36", "#b3013f", "#a00398", '#E87C25', '#C6E579',]
        }
    },
    xAxis: {
        data: dimensions,
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#1d356f'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#bcfff7'
            },
        }
    },
    series: [{
        name: 'TIT',
        type: 'bar',
        itemStyle: {
            normal: {
                barBorderRadius: 5
            }
        },
        data: dataval
    }]
};