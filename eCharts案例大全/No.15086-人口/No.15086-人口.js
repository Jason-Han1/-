option = {
    tooltip : {
        formatter: "{a} <br/>{c} {b}"
    },
            title: {
        text: '居民消费价格指数'
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
            name: '居民消费价格指数',
            type: 'gauge',
            radius: '45%',
            min: 0,
            max: 2,
            startAngle: 220,
            endAngle: -40,
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
                        case '0' : return '70';
                        case '1' : return '';
                        case '2' : return '130';
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
            data:[{value: 1.35, name: '101'}]
        }
    ]
};

setInterval(function (){
    option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
    option.series[1].data[0].value = (Math.random()*7).toFixed(2) - 0;
    option.series[2].data[0].value = (Math.random()*2).toFixed(2) - 0;
    option.series[3].data[0].value = (Math.random()*2).toFixed(2) - 0;
   
},2000);