var getnhname = ['国有','非国有'];
var getnhvalue = [4,5];
var getflname = ['公务员', '私企', '外企', '非国有事业单位','国有企业','国有事业单位'];
var getflvalue = [103,2354,1064,341,1106,532];

// 圆环值
var data1 = [];
for(var i = 0;i<getflname.length;i++){
	data1.push({name:getflname[i],value:getflvalue[i]})
}

// 环内
var data2 = [];
for(var i = 0;i<getnhname.length;i++){
	data2.push({name:getnhname[i],value:getnhvalue[i]})
}

// 圆环颜色
var color = ['#EA6D6C','#499FF9','#25CF9A','#8F81FF','#849EF2','#FFCC85']
// 内环边框
var innerColor = ['#FF2395', '#00A8FF']
var dataConsump = [];
var dataType = []

for (var i = 0; i < data1.length; i++) {
    dataConsump.push({
        value: data1[i].value,
        name: data1[i].name, 
    });
}
for (let i = 0; i < data2.length; i++) {
    dataType.push({
        name: data2[i].name,
        value: data2[i].value,
        label:{
            color:innerColor[i]  
        },
        itemStyle: {
            shadowBlur: 7,
            borderWidth: 2,
            color: '#010818',
            borderColor: innerColor[i],
            shadowColor: innerColor[i]
        },
        // selected: i === 0
    })
}

var seriesOption = [
    
    {
        name: '',
        type: 'gauge',
        splitNumber: 30, //刻度数量
        min: 0,
        max: 100,
        radius: '76%', //图表尺寸 
        center:['50%','50%'],
        startAngle: 90,
        endAngle: -269.9999,
        axisLine: {
            show: false,
            lineStyle: {
                width: 0,
                shadowBlur: 0,
                color: [
                    [0, '#0dc2fe'],
                    [1, '#rgba(243, 243, 243,.5)']
                ]
            }
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#0dc2fe' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#051349' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                width: 2
            },
            length: 15,
            splitNumber: 5
        },
        splitLine: {
            show: true,
            length: 10,
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#0dc2fe' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#051349' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        axisLabel: {
            show: false
        },
        pointer: { //仪表盘指针
            show: 0,
        },
        detail: {
            show: false,
        },
    },
    {
        name: '分类',
        type: 'pie',
        radius: ['0%', '40%'],
        center: ['50%', '50%'],
        label: {
            position: 'inner',
            formatter: function(params) {
                return params.name;
            }

        },
        hoverOffset: 0,
        selectedMode: true,
        selectedOffset: 10,
        itemStyle: {
            borderColor: 'black',
            borderWidth: 2,
        },
        data: dataType
    },
    {
        name: '',
        type: 'pie',
        radius: ['50%', '65%'],
        center: ['50%', '50%'],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                borderWidth:2,
                borderColor:'#020d44',
                textAlign:'left',
                label: {
                    show: true,
                    position: 'outside',
                    color: '#66799D',
                    padding: [-2, -4, 0, -4],
                    fontSize: 13,
                    formatter: function(params) {
                        if (params.name !== '') {
                            return '{name|' + params.name + '}\n{color'+params.dataIndex+'|'+ params.value +'人  '+ params.percent + '%}';
                        } else {
                            return '';
                        }
                    },
                    rich: {
                        name: {
                            color: "#CAE7FF",
                            fontSize: 12,
                            padding: [6, 5, 6, 0],
                            align: 'left'
                        },
                        hr: {
                            borderColor: 'rgba(102, 121, 157, 1)',
                            width: '50%',
                            borderWidth: 0.5,
                            height: 0,
                        },
                        color0:{
                            color:'#EA6D6C',
                            fontSize: 14,
                            padding: [6, 5, 6, 0],
                            align: 'left'
                        },
                        color1:{
                            color:'#499ff9',
                            fontSize: 14,
                            padding: [6, 5, 6, 0],
                            align: 'left'
                        },
                        color2:{
                            color:'#25cf9a',
                            fontSize: 14,
                            padding: [6, 5, 6, 0],
                            align: 'left'
                        },
                        color3:{
                            color:'#8f81ff',
                            fontSize: 14,
                            padding: [6, 5, 6, 0],
                            align: 'left'
                        },
                        color4:{
                            color:'#849ef2',
                            fontSize: 14,
                            padding: [6, 5, 6, 0],
                            align: 'left'
                        },
                        color5:{
                            color:'#ffcc85',
                            fontSize: 14,
                            padding: [6, 5, 6, 0],
                            align: 'left'
                        }
                    }
                },
                labelLine: {
                    length: 40,
                    length2: 20,
                    show: true,
                    lineStyle: {
                        color: 'rgba(102, 121, 157, 1)'
                    }
                }
            }
        },
        data: dataConsump
    }
];

option = {
    backgroundColor: '#010818',
    color: color,
    tooltip: {
        show: false
    },
    legend: {
        show: false,
        icon: "circle",
        orient: 'horizontal',
        // x: 'left',
        data: ['其他', '用餐支出', '用水支出', '用电支出'],
        right: 340,
        bottom: 150,
        align: 'right',
        textStyle: {
            color: "#C1F6FF"
        },
        itemGap: 20
    },
    angleAxis: {
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        min: 0,
        max: 100,
        boundaryGap: ['0', '100'],
        startAngle: 90
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        data: ['a', 'b', 'c','d'],
        z: 10
    },
    polar: {
        radius: '70%'
    },
    toolbox: {
        show: false
    },
    series: [...seriesOption]
}