app.title = 'Top 10';

option = {
    color: ['#3398DB'],
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
        type: 'value',
      	splitNumber:3
    }],
    backgroundColor: '#ffffff',
    series: [{
        name: '',
        type: 'bar',
        barWidth: '40%',
        data: [7700, 8800, 9900, 11100, 14200, 16000, 18400, 20500, 22600, 24700],
        label: {
            normal: {
                show: true,
                position: 'right',
                textStyle: {
                    color: '#3398DB',
                  	fontSize: 12
                }
            }
        }
    }]
};