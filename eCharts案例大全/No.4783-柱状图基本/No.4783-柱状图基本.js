
var data1 = [3, 2, 1, 11, 3, 8, 22];
option = {
    color: ['#3398DB'],
    backgroundColor:'#fff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['项目副总工', '项目书记', '门卫', '木工（装饰）', '泥瓦工','模板工', '其他工种'],
            axisTick: {
                alignWithLabel: false
            },
            axisLabel:{
                textStyle:{
                    fontSize:30,
                    color:'#666'
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: {
                alignWithLabel: false
            },
            axisLabel:{
                textStyle:{
                    fontSize:30,
                    color:'#666'
                }
            }
        }
    ],
    series: [
        {
            "name": "",
            type: 'bar',
            symbolSize: [20, 30],
            symbolOffset: [0, -40],
            color:'#83bff6',
            label: {
                show: true,
                position: "top",
                fontSize: 30,
                color: '#666'
            },
            data: data1
        }
    ]
};