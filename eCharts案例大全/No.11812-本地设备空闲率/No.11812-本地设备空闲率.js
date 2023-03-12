app.title = '本地设备空闲率';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['北京dgnet设备空闲率']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis : [
        {
            type : 'value',
            min:0,
            max:0.2,
            interval:0.05
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
            name:'北京dgnet设备空闲率空闲率',
            type:'bar',
            
            label: {
                normal: {
                    show: true,
                    position:'top'
                }
            },
            data:[0.042265747, 0.000053615, 0.11846974, 0.114327185,0.000626929]
        },
        
    ]
};
