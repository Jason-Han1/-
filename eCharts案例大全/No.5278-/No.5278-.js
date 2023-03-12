var data = {

    area: ['喷淋头', '烟感', '消防栓', '灭火器', '指示牌', '应急照明灯'],
    legend: ['设备正常', '设备异常'],
    data: [
        [320, 302, 301, 334, 300, 300, ],
        [14, 50, 0, 45, 20, 40, ],
    ]


}
var colors = ['48,156,237', '213,50,80']
let seriesData = [];
let Max = 0,
    MaxData = [];

function jia(arr1, arr2) {
    let arr = []
    if (arr2.length == 0) {
        return arr1;
    } else {

        arr1.map(function(value, index) {
            arr[index] = arr2[index] + value;
        })
    }
    return arr;
}
Max = Math.ceil(Math.max(...jia(data.data[0], data.data[1])) / 100) * 100 + 100


for (var i = 0; i < data.area.length; i++) {
    MaxData.push(Max)
}
for (var i = 0; i < data.legend.length; i++) {
    seriesData.push({
        name: data.legend[i],
        type: 'bar',
        stack: '总量',
        barWidth: 10,
        label: {
            show: false,
            position: 'insideTop'
        },

        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(' + colors[i] + ',0.8)'
                },
                {
                    offset: 0.5,
                    color: 'rgba(' + colors[i] + ',0.5)'
                },
                {
                    offset: 0.8,
                    color: 'rgba(' + colors[i] + ',0.2)'
                },
                {
                    offset: 1,
                    color: 'transparent'
                }
            ], false),
        },
        data: data.data[i]
    })
}

seriesData.push({
    name: '总数',
    type: 'bar',
    barGap: '-100%',
    data: MaxData,
    barWidth: 10,
    label: {
            show: false,
            position:'top',
            textStyle: {
                color: '#74fafd',
                fontSize: 12,
                align:'center',
                rich: {
                 red: {
                     color: '#d53250',
                     textShadowColor:'#d53250',
                     textShadowBlur:5,
                     lineHeight:15
                 },
                },
               
            },
             padding:[8,4,4,4],
            borderRadius:5,
            backgroundColor:'#053853',
            formatter:function(param){
                console.log(param.dataIndex)
                
                if(data.data[1][param.dataIndex] == 0){
                    return '正常'
                }else{
                    return '异常: '+'{red|'+data.data[1][param.dataIndex]+'}'
                }
                
                
                
            }
    
    },
    tooltip: {


    },
    itemStyle: {
        normal: {
            color: '#053853',
            barBorderRadius: 2
        }
    },
    z: 1
})
var option = {
    backgroundColor: '#010e17',
    title: {
        text: '单位/个',
        textStyle: {
            color: '#d1d1d1',
            fontSize: 12
        },
        left: '0px',
        top: '0px',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(data) {


            return data[0].axisValue + '<br/>' + data[0].seriesName + ':' + data[0].data + '<br/>' + data[1].seriesName + ':' + data[1].data;
        },

    },
    legend: {
        z:1,
        top: 0,
        right: 0,
        itemWidth: 10,
        itemHeight: 10,
        // padding: [5, 10],
        textStyle: {
            fontSize: 12,
            color: '#d1d1d1',
            padding: [3, 0, 0, 0]
        },
        data: data.legend
    },
    grid: {
        top: '30px',
        left: '10px',
        right: '10px',
        bottom: '10px',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        inverse:false,
        axisLabel: {
            color: '#d1d1d1'
        },
        axisLine: {
            lineStyle: {
                color: '#11505a'
            },
            width: 5
        },
        axisTick: {
            show: false,
        },
        data: data.area
    },
    yAxis: {
        type: 'value',
        // minInterval:100,
        axisLabel: {
            color: '#d1d1d1'
        },
        axisLine: {
            lineStyle: {
                color: 'transparent'
            },
            width: 1
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                color: '#02272d'
            }
        },
    },
   animationEasing:'circularOut',
    series: seriesData
};

myChart.setOption(option);
/*label: {
                normal: {
                    show: true,//是否显示
                    position: 'top',//文字位置
                    formatter: '{a}{b}:{c}%（元）'//c后面加单位
                    
                }
            },*/

setTimeout(function() {
    let _op = myChart.getOption();console.log(_op)
    _op.series[2].label.show = true;
    myChart.setOption(_op);
    
    
   /* 
   _op.series[2].label.position = 'top';
   _op.series[2].label.position = 'top';*/
    
}, 2000);




