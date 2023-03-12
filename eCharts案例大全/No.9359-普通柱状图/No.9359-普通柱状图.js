var data= ["关联API", "新增指数", "agent确认", "信息确认"]

option = {
    backgroundColor: '#fff',
    color: [new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
        offset: 0,
        color: "#13ace8"
    }, {
        offset: 1,
        color: "#0167e8"
    }], false)],
    grid: {
        left: '8%',
        right: '10%',
        top: '12%',
        bottom: '18%',
        containLabel: true
    },
    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    yAxis: {
         type: 'value',
       
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#ccc',
            }
        },
        axisLabel: {
            show: true,
            color: "#ccc",
            fontSize: 18
        },
          splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed'
            }
        },


    },
    xAxis: [{
        axisTick: {
            show: false
        },
       
        type: 'category',
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            color: '#ccc',
            interval: 0,  
                               formatter:function(value)  
                               {  
                                   return value.split("").join("\n");  
                               } 
        },
        

        splitLine: {
            show: false,
            lineStyle: {
                type: 'dashed'
            }
        },
        data: data,
    }],
    series: [{
        name: '违规',
        type: 'bar',
        barWidth: 15,
        label: {
            normal: {
                show: false,
                position: 'right',
                textStyle: {
                    color: "#ccc",
                    fontSize: 14
                }
            }
        },
        itemStyle: {
            normal: {
                // barBorderRadius: [0, 0, 5, 0],
            }
        },
        data: [50, 60, 70, 80]
    }]
};