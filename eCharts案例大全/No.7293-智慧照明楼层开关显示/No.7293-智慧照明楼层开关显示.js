var build = ['C1','C2','C3A','C3B'];
var myColor = ['#21BF57','#999999','#F57474'];
var data = [
    [
        {name:'1F',all:307,on:255,off:45,error:7},
        {name:'2F',all:221,on:200,off:10,error:11},
        {name:'3F',all:352,on:344,off:1,error:7},
        {name:'4F',all:307,on:255,off:45,error:7},
        {name:'5F',all:307,on:255,off:45,error:7},
        {name:'6F',all:307,on:255,off:45,error:7}
    ],
    [
        {name:'1F',all:307,on:255,off:45,error:7},
        {name:'2F',all:307,on:255,off:45,error:7},
        {name:'3F',all:307,on:255,off:45,error:7},
        {name:'4F',all:307,on:255,off:45,error:7},
        {name:'5F',all:221,on:200,off:10,error:11},
        {name:'6F',all:352,on:344,off:1,error:7}

    ],
    [
        {name:'1F',all:307,on:255,off:45,error:7},
        {name:'2F',all:221,on:200,off:10,error:11},
        {name:'3F',all:307,on:255,off:45,error:7},
        {name:'4F',all:307,on:255,off:45,error:7},
        {name:'5F',all:352,on:344,off:1,error:7},
        {name:'6F',all:307,on:255,off:45,error:7}
        
        
    ],
    [
        {name:'1F',all:307,on:255,off:45,error:7},
        {name:'2F',all:352,on:344,off:1,error:7},
        {name:'3F',all:307,on:255,off:45,error:7},
        {name:'4F',all:221,on:200,off:10,error:11},
        {name:'5F',all:307,on:255,off:45,error:7},
        {name:'6F',all:307,on:255,off:45,error:7}
        
    ]
];



optionTime = {
    timeline: {
        data: build,
        axisType: 'category',
        autoPlay: true,
        playInterval: 3000,
        left: '10%',
        right: '10%',
        bottom: '3%',
        width: '80%',
        label: {
            normal: {
                textStyle: {
                    color: '#ddd'
                }
            },
            emphasis: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        symbolSize: 10,
        lineStyle: {
            color: '#555'
        },
        checkpointStyle: {
            borderColor: '#777',
            borderWidth: 2
        },
        controlStyle: {
            showNextBtn: true,
            showPrevBtn: true,
            normal: {
                color: '#666',
                borderColor: '#666'
            },
            emphasis: {
                color: '#aaa',
                borderColor: '#aaa'
            }
        },

    },
    baseOption: {
        animation: true,
        animationDuration: 1000,
        animationEasing: 'cubicInOut',
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'cubicInOut',
        grid: {
            right: '1%',
            top: '15%',
            bottom: '10%',
            width: '20%'
        },
        tooltip: {
            trigger: 'axis', // hover触发器
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                shadowStyle: {
                    color: 'rgba(150,150,150,0.1)' //hover颜色
                }
            },
            formatter:function(param){
                console.log(param);
                if(param instanceof Array){
                let text = [];
                text.push(param[0].name+"-"+param[0].axisValue);
                text.push(param[1].marker +'  '+param[1].seriesName+":"+data[param[0].data.order][param[0].dataIndex].on);
                text.push(param[2].marker +'  '+param[2].seriesName+":"+data[param[0].data.order][param[0].dataIndex].off);
                text.push(param[3].marker +'  '+param[3].seriesName+":"+data[param[0].data.order][param[0].dataIndex].error);
                return text.join('</br>');
                }else{
                    return param.name;
                }
            }
        }
    },
    options: []
};

for(let i=0;i<data.length;i++){
    optionTime.options.push( getOption(data[i],build[i],i) );
}

myChart.setOption(optionTime);



function getOption(data,build,num){
    
let total = [],on=[],off=[],error=[],name=[],onName=[],offName=[],errorName=[];
for(let i=0;i<data.length;i++){
    total.push({value:1,name:build,order:num});
    on.push( (data[i].on / data[i].all).toFixed(2));
    off.push( (data[i].off / data[i].all).toFixed(2));
    error.push( (data[i].error / data[i].all).toFixed(2));
    onName.push( data[i].on);
    offName.push( data[i].off );
    errorName.push( data[i].error );
    name.push(data[i].name);
}

var option = {
    backgroundColor: '#05274C',
    title: {
        top: '2%',
        left: 'center',
        text: '智慧照明楼层开关显示',
        textStyle: {
            align: 'center',
            color: '#4DCEF8',
            fontSize: 18
        }
    },
    grid: {
        left: '130',
        right: '100'
    },
    xAxis: {
        show: false,
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            margin:30,
            show: true,
            color: '#4DCEF8',
            fontSize: 14
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        data: name
    },
    series: [{
        type: 'bar',
        barGap: '-65%',
        label: {
            normal: {
                show: true,
                position: 'right',
                color: '#fff',
                fontSize: 14,
                formatter: function(param) {
                    var text=data[param.dataIndex].all;
                    return text;
                },
            }
        },
        barWidth: '30%',
        itemStyle: {
            normal: {
                borderColor: '#4DCEF8',
                borderWidth: 2,
                barBorderRadius: 15,
                color: 'rgba(102, 102, 102,0)'
            },
        },

        z: 1,
        data: total,
        // data: da
    }, {
        name:'开启',
        type: 'bar',
        barGap: '-85%',
        stack: 'one', 
        barWidth: '21%',
        itemStyle: {
             normal: {
                barBorderRadius: 16,
                color: myColor[0]
            }
        },
        max: 1,
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(param) {
                    var text=data[param.dataIndex].on;
                    if(param.data < Number(0.05))text='';
                    return text;
                },
            }
        },
        labelLine: {
            show: true,
        },
        z: 2,
        data: on
    }, 
    {
        name:'关闭',
        type: 'bar',
        barGap: '-85%',
        stack: 'one', 
        barWidth: '21%',
        itemStyle: {
             normal: {
                barBorderRadius: 16,
                color: myColor[1]
            }
        },
        max: 1,
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(param) {
                    var text=data[param.dataIndex].off;
                    if(param.data < Number(0.05))text='';
                    return text;
                },
            }
        },
        labelLine: {
            show: true,
        },
        z: 2,
        data: off
    }, 
    {
        name:'掉线',
        type: 'bar',
        barGap: '-85%',
        stack: 'one', 
        barWidth: '21%',
        itemStyle: {
             normal: {
                barBorderRadius: 16,
                color: myColor[2]
            }
        },
        max: 1,
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(param) {
                    var text=data[param.dataIndex].error;
                    if(param.data < Number(0.05))text='';
                    return text;
                },
            }
        },
        labelLine: {
            show: true,
        },
        
        z: 2,
        data: error
    }
    ]
}

return option;
}