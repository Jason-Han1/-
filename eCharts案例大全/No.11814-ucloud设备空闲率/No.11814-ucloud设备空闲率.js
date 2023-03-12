app.title = 'ucloud设备空闲率';

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
            max:0.002,
            interval:0.0002
        }
    ],
    xAxis : [
        {
            type : 'category',
            axisTick : {show: true},
            data : ['周一','周二','周三','周四','周五']
        }
    ],
    series : [
        
        {
            name:'空闲率',
            type:'bar',
           
            label: {
                normal: {
                    show: true,
                    position:'top'
                }
            },
            data:[0.000192379, 0.000708521, 0.001252815, 0.001097972,0.001754879]
        },
        
    ]
};
