var data = [87, 90, 60, 50, 20];
var target = 80;
for (var i = 0; i < data.length; i++) {
    data[i] = {
        value: data[i],
        itemStyle: {
            color: data[i] >= target ? '#c00' : '#00736E'
        }
    }
};
option = {
    backgroundColor: '#fff',
    title: {
        text: 'CPU TOP5',
        left: 'center',
        subtext: "2020-03-12 10:00",
        subtextStyle: { //副标题的属性
            color: '#666',
            // 同主标题
        }
    },
    tooltip: {
         trigger: 'axis',
         axisPointer: { // 坐标轴指示器，坐标轴触发有效
             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
         }
     },
    yAxis: {
        
        type: 'value',
        name: 'cpu占用率',
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: (param) => {
                return param + '%'
            }
        },
        splitLine: {
            show: false
        }
    },
    xAxis: {
        type: 'category',
        data: ['服务器一', '服务器二', '服务器三', '服务器四', '服务器五'],
        axisLine: {
            show: true,
        },
    },
    series: [{
        data: data,
        type: 'bar',
        barWidth: '30%',
        itemStyle: {
            barBorderRadius: 30,
        },
        label: {
            normal: {
                show: false,
                fontSize: 14,
                fontWeight: 'normal',
                color: '#333',
                position: 'top',
                formatter: (param) => {
                    return param.value + '%'
                }
            },
            emphasis: {
                show: true,
                fontSize: 14,
                fontWeight: 'normal',
                color: '#333',
                position: 'top',
                formatter: (param) => {
                    return param.value >= 87 ? param.value + '%' : ''
                }
            }
        },
        markLine: {
            itemStyle: {
                normal: {
                    lineStyle: {
                        type: 'dashed',
                        // 这儿设置的颜色是公共配置，如需单独配置，请在data里配置
                        color: '#00736E',
                    },
                    label: {
                        show: true,
                        position: 'insideEndTop',
                        formatter: '{b}%'
                    }
                },
            },
            symbol:'none',//去掉箭头
            data: [{
                type:'average',
                name: '80',
                xAxis: 80,
                // 单独配置每条线的样式
                lineStyle: {
                    color: '#00736E'
                },
                formatter: '{value}%'
            }]
        },
    }]
};