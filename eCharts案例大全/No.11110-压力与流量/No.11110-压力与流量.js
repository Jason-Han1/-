var xData = ['芝罘区','福山区','莱山区','牟平区','海阳市','莱阳市','蓬莱市','栖霞市','龙口市','长岛县','招远市','莱州市'];
var y1Data = [120,55,24,31,80,145,99,25,66,80,160,194];
var y2Data = [21,13,8,12,15,19,16,6,9,10,28,30];
option = {
     backgroundColor: '#05288C',
    title: {
        text:"压力与流量",
        left:"center",
        textStyle:{
            color:"#fff"
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['压力', '流量'],
          textStyle:{
				color:'#1bb4f6'
			},
        right: '10%',
    },
    toolbox: {
        show: false,
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            show: true,
            axisTick: {
                show: false
            },
            axisLabel: {
                fontSize: 15,
                color: '#d0d0d0',
                margin: 8,
                interval:0 ,  
                formatter:function(val){  
                   return val.split("").join("\n");  
                } 
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#4e608b',//左边线的颜色
                    width:'1'//坐标线的宽度
                }
            },
            data: xData
        }
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '',
            axisLine: {
                show: false
            },
            splitNumber : 4,
            axisTick: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    // 使用深浅的间隔色
                    color: '#4e608b'
                }
            },
            axisLabel: {
                fontSize: 13,
                color: '#d0d0d0',
                margin: 12,
            },
            max: 200,
            min: 0,
            boundaryGap: [0.2, 0.2]
        },
        {
            type: 'value',
            scale: true,
            axisLine: {
                show: false
            },
            splitNumber : 3,
            axisTick: {
                show: false
            },
            axisLabel: {
                fontSize: 13,
                color: '#d0d0d0',
                margin: 12,
            },
            splitLine: {
                lineStyle: {
                    // 使用深浅的间隔色
                    color: '#4e608b'
                }
            },
            name: '',
            max: 32,
            min: 0,
            boundaryGap: [0.2, 0.2]
        },
       
    ],
    series: [
        {
            name:'压力',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#1dacfe'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: "#4889fb" // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: "#15b3ff" // 100% 处的颜色
                    }], false)
                }
            },
            barWidth: '40%',
            yAxisIndex: 0,
            data: y1Data
        },
        {
            name:'流量',
            yAxisIndex: 1,
            color: '#ffd300',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#ffd300'
                    }
                }
            },
            lineStyle: {
                color: '#ffd300'
            },
            type:'line',
            data: y2Data
        }
    ]
};