var scaleData = [{
        'name': '红灯 14',
        'value': 14,
        'radius1':[99,101],
        'radius2':'25%',
    },{
        'name': '黄灯 32',
        'value': 32,
        'radius1':[118,120],
        'radius2':'30%',
    },{
        'name': '绿灯 288',
        'value': 288,
        'radius1':[140,142],
        'radius2':'35%',
    },{
        'name': '挂起 463',
        'value': 463,
        'radius1':[160,162],
        'radius2':'40%'
    }
];
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
var seriesObj = [];
var color=['#FF647C','#FFBE75','#3EE2A5','#6C77FD']
for (var i = 0; i < scaleData.length; i++) {
    console.log(scaleData[i].name)
    seriesObj.push({
    name: '',
    type: 'pie',
    radius: scaleData[i].radius1,
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: false,
                color: '#ddd',
            },
        }
    },
    data: [{
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                borderWidth: 5,
                borderColor:color[i]
            }
        }
    }, {
        value: 200,
        name: '',
        itemStyle: placeHolderStyle
    }]
},{
     name: '',
     type: 'gauge',
     detail:false,
     splitNumber: 10, //刻度数量
     radius: scaleData[i].radius2, //图表尺寸
     center: ['50%', '50%'],
     startAngle: 0, //开始刻度的角度
     endAngle: -356, //结束刻度的角度
     axisLine: {
         show: false,
         lineStyle: {
             width: 0,
             shadowBlur: 0,
         }
     },
     axisTick: {
         show: true,
         lineStyle: {
             color: 'rgba(220,220,220,0.5)',
             width: 5
         },
         length: 5,
         splitNumber: 5
     },
     splitLine: {
         show: false,
         length: 5,
         lineStyle: {
             color: 'rgba(220,220,220,0.1)',
         }
     },
     axisLabel: {
         show: false
     },
 });
}
option = {
    backgroundColor: '#04243E',
    color:color,
    tooltip: {
        show: false
    },
    legend: {
        orient: 'vertical',
        x: '200',
        y: 'center',
        itemGap:35,
        data:['挂起 463','红灯 14','黄灯 32','绿灯 288'],
        show: true,
        textStyle:{
            color:'#fff'
        },
    },
    toolbox: {
        show: false
    },
    series: seriesObj
}