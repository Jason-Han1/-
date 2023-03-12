app.title = 'Top 10';

option = {
    //color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: [{
        type: 'category',
        data: ['四川', '福健', '湖北', '河南', '浙江', '江苏', '山东', '上海', '广东', '北京'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    xAxis: [{
        type: 'value'
    }],
    backgroundColor: '#ffffff',
    series: [{
        name: 'Top 10',
        type: 'bar',
        data: [7700, 8800, 9900, 11100, 14200, 16000, 18400, 20500, 22600, 24700],
        label: {
            normal: {
                show: true,
                position: 'insideRight',
                textStyle: {
                    color: 'white' //color of value
                }
            }
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: 'lightBlue' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#3398DB' // 100% 处的颜色
                }], false)
            }
        }
    }]
};