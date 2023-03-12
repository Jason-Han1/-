var totalData=[
    {
         'name': '大型特大型餐饮',
        'value': 117,
        'percent':20.93
    },
    {
        'name': '学校食堂',
        'value': 235,
        'percent':42.04
    },
     {
        'name': '机关食堂',
        'value': 125,
        'percent':22.36
    },
    {
        'name': '工地食堂',
        'value': 44,
        'percent':7.87
    },
    {
        'name': '中央厨房',
        'value': 19,
        'percent':3.4
    },
        {
        'name': '养老院',
        'value': 19,
        'percent':3.4
    }
    ];
var scaleData = [{
        'name': '大型特大型餐饮',
        'value': 117
    },
    {
        'name': '学校食堂',
        'value': 235
    },
    {
        'name': '机关食堂',
        'value': 125
    },
    {
        'name': '工地食堂',
        'value': 44
    },
    {
        'name': '中央厨房',
        'value': 19
    },
    {
        'name': '养老院',
        'value': 19
    }
];
var color = ["#ED4648", "#693CFD", "#31A0F6", "#31D3A7", "#FAC828", "#E68406"]
var rich = {
    white: {
        color: 'transport',
        align: 'center',
        padding: [5, 0]
    }
};
var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
};
var data = [];
for (var i = 0; i < scaleData.length; i++) {
    if(i == 1){
            data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                borderWidth: 10,
                borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                    color: color[i]
                }, 
                {
                    offset:0.7,
                    color:'#0F1F2D'
                },
                {
                    offset: 1,
                    color: '#0F1F2D'
                }]),
            }
        }
    }, {
        value: 22,
        name: '',
        itemStyle: placeHolderStyle
    });
    }else{
            data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                borderWidth: 10,
                borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                    color: '#0F1F2D',
              
                }, 
                {
                    offset:0.3,
                    color:'#0F1F2D',
                
                },
                {
                    offset: 1,
                    color: color[i]
                }]),
            }
        }
    }, {
        value: 22,
        name: '',
        itemStyle: placeHolderStyle
    });
    }
}
var seriesObj = [{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [195, 200],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        }
    },
    data: data
}];
option = {
    backgroundColor: '#0F1F2D',
    title: {
        text: 559,
        subtext: '高风险主体',
        textStyle: {
            color: '#5EC8FF',
            fontSize: 36,
            align: 'center'
        },
        subtextStyle: {
            fontSize: 16,
            color: ['#DDDDDD']
        },
        x: 'center',
        y: 'center',
    },
    legend: {
            orient: 'horizontal',
            x: 'center',
            bottom:30,
            icon:'circle',
            itemWidth: 10,  
            itemHeight: 10, 
            textStyle: {
              color: '#EEEEEE'
            },
            itemGap: 60,
            formatter: function(name) {
                let num
                 for(let i = 0; i < scaleData.length; i++){
                     if (scaleData[i].name === name) {
                        num = name + ':'+ scaleData[i].value  + '(' + totalData[i].percent + '%' + ')'
                     }
                 }
                 return num
             },
             data: ['大型特大型餐饮','学校食堂','机关食堂','工地食堂','中央厨房','养老院'],
          },
    tooltip: {
        show: false
    },
    toolbox: {
        show: false
    },
    color:color,
    series: seriesObj
}