var color = ['#00E400','#FFED4C','#FF7B1E','#DB0627','#881055','#7E0000'];
var scaleData = [{
        'name': '优',
        'value': 20,
        'selected':true
    },
    {
        'name': '良',
        'value': 20,
        'selected':false
    },
    {
        'name': '轻度',
        'value': 20,
        'selected':false
    },
    {
        'name': '中度',
        'value': 20,
        'selected':false
    },
    {
        'name': '重度',
        'value': 20,
        'selected':false
    },
    {
        'name': '严重',
        'value': 20,
        'selected':false
    }
];
var placeHolderStyle = {
    normal: {
        color: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
};
var data = [];
for (var i = 0; i < scaleData.length; i++) {
    if(i==0){
    data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        selected:scaleData[i].selected,
        itemStyle: {
            normal: {
                borderWidth: 4,
                shadowBlur: 0,
                borderColor: color[i],
                shadowColor: color[i],
                color: color[i]
            }
        },
        label: {
            show: true,
            position: 'outside',
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: 16,
                    fontWeight: 'bold'
                }
            },
            formatter:function(params){
                var name = params.name;
                value = params.value;
                return name + "("+value+"天)";
            }
        },
        labelLine:{//标签的视觉引导线样式;在label位置设置为'outside'的时候会显示视觉引导线。
            show:true,
            // length:10,
            // length2:10，
            smooth:false,//默认
            emphasis:{
                show:true,
                lineStyle:{
                    
                }
            }
        },
    }, {
        value: 2,
        itemStyle: placeHolderStyle
    });
    }else{
            data.push({
            value: scaleData[i].value,
            name: scaleData[i].name,
            selected:scaleData[i].selected,
            itemStyle: {
                normal: {
                    borderWidth: 4,
                    shadowBlur: 0,
                    borderColor: color[i],
                    shadowColor: color[i],
                    color: color[i]
                }
            }
        }, {
            value: 2,
            itemStyle: placeHolderStyle
        });
        
        
    }
}
var seriesObj = [{
        name: '',
        type: 'pie',
        clockWise: true,
        radius: ['60%', '63%'],
        center: ['40%', '50%'],
        hoverAnimation: true,
        selectedMode:'single',//默认
        label: {
            show: false,
            position: 'outside',
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: 16,
                    fontWeight: 'bold'
                }
            },
            formatter:function(params){
                var name = params.name;
                value = params.value;
                return name + "("+value+"天)";
            }
        },
        labelLine:{//标签的视觉引导线样式;在label位置设置为'outside'的时候会显示视觉引导线。
            show:false,
            // length:10,
            // length2:10，
            smooth:false,//默认
            emphasis:{
                show:true,
                lineStyle:{
                    
                }
            }
        },
        emphasis: {
            show: false,
            textStyle: {
                fontSize: 16,
                fontWeight: 'bold'
            },
        },
        data: data
    },
    {
        type: 'pie',
        data: [100],
        z: 3,
        radius: ['45%', '47%'],
        center: ['40%', '50%'],
        itemStyle: {
            normal: {
                color: 'rgba(110,208,254,1)'
            }
        },
        silent: true,
        labelLine: {
            normal: {
                show: false
            }
        },
        label: {
            normal: {
                show: true,
                position: 'center',
                formatter: function(argument) {
                    return 'AQI';
                },
                textStyle: {
                    fontSize: 14,
                    color: '#000'
                }
            }
        },

    }
];
var option = {
    legend: {
        orient:'vertical',//vertical,horizontal
        width:'auto',
        height:60,
        show: true,
        top: 'center',
        right:'4%',
        icon: 'roundRect',
        data:['优','良','轻度','中度','重度','严重'],
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 8,
        textStyle: {
            fontSize: 12, //字体大小
            //color: '#FFF' //字体颜色
        }

    },
    toolbox: {
        show: true
    },
    series: seriesObj,

}