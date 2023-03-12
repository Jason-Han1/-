option = {
    tooltip : {
        formatter: "{a} <br/>{c} {b}"
    },
            title: {
        text: '人均收支'
    },
    backgroundColor: 'rgba(255,255,255,0)',
    toolbox: {
        show: true,
        feature: {
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    series : [
        {
            name: '投资总额',
            type: 'gauge',
            radius: '45%',
            min: 0,
            max: 2,
            startAngle: 155,
            endAngle: 25,
            splitNumber: 5,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 8
                }
            },
            axisTick: {            // 坐标轴小标记
                splitNumber: 5,
                length: 10,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            axisLabel: {
                formatter:function(v){
                    switch (v + '') {
                        case '0' : return '0';
                        case '1' : return '投资总额（亿元）';
                        case '2' : return '12000';
                    }
                }
            },
            splitLine: {           // 分隔线
                length: 15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width:2
            },
            title : {
                show: true
            },
            detail : {
                show: false
            },
            data:[{value: 1.65, name: '元'}]
        },
        {
            name: '消费支出',
            type: 'gauge',
            radius : '45%',
            min: 0,
            max: 2,
            startAngle: 335,
            endAngle: 215,
            splitNumber: 5,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 8
                }
            },
            axisTick: {            // 坐标轴小标记
                show: false
            },
            axisLabel: {
                formatter:function(v){
                    switch (v + '') {
                        case '0' : return '0';
                        case '1' : return '消费支出';
                        case '2' : return '12000';
                    }
                }
            },
            splitLine: {           // 分隔线
                length: 15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width:2
            },
            title: {
                show: true
            },
            detail: {
                show: false
            },
            data:[{value: 1.3, name: ''}]
        }
    ]
};

setInterval(function (){
    option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
    option.series[1].data[0].value = (Math.random()*7).toFixed(2) - 0;
    option.series[2].data[0].value = (Math.random()*2).toFixed(2) - 0;
    option.series[3].data[0].value = (Math.random()*2).toFixed(2) - 0;
   
},2000);