

option = {
    // tooltip : {
    //     trigger: 'axis',
    //     axisPointer : {            // 坐标轴指示器，坐标轴触发有效
    //         type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    //     }
    // },
    grid: {
        left: '10%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['成都', '成都', '成都', '成都', '成都', '成都', '成都'],
            axisTick: {
                alignWithLabel: true
            },
        }
    ],
    yAxis : [
        {
            max:100,
            min:0,
            type : 'value',
            
            "axisLabel": {
                "textStyle": {
                },
                "formatter": "{value}%"
            },
        },
        {
            type: 'value',
            gridIndex: 0,
            min: 0,
            max: 100,
            splitNumber: 12,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            }
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '45%',
            // max:100,
            // min:50,
            yAxisIndex: 0,
            label:{
                show:true,
            },
            data:[99, 88, 99, 85, 80, 90, 1],
            color:'#F9B54E',
            markLine:{
                symbol:'none',//去掉箭头
                data:[
                        {type:'average',name:'平均值'}
                    ],
                label:{
                    show:false,
                    position:'middle',
                    formatter:'省内城市人均GDP均值{c}%'
                },
                lineStyle:{
                    color:'#00A0E9',
                    type:'solid',
                    width:2
                },
                emphasis:{
                    label:{
                        show:true
                    }
                }
            },
            zlevel: 0
        }
    ]
};
