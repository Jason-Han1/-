app.title = '腾讯云设备空闲率';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['空闲率']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    yAxis : [
        {
            type : 'value',
            min:0,
            max:0.1,
            interval:0.005
        }
    ],
    xAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['周一','周二','周三','周四','周五']
        }
    ],
    series : [
        
        {
            name:'空闲率',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position:'top'
                    
                }
            },
            data:[0.047588734, 0.004718137, 0.059022671, 0.000835503,0.000763888]
        },
        
    ]
};
