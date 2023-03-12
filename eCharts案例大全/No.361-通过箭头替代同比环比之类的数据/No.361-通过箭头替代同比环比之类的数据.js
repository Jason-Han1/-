
var data1 = [132, 324, 327, 452, 365, 145, 326];
var data2 = [7.2, -2.6, 4.7, -3.7, -5.4, -0.5, 3.4];
//定义两个上下箭头的矢量路径
var up = 'path://M286.031,265l-16.025,3L300,223l29.994,45-16.041-3-13.961,69Z';
var down = 'path://M216.969,292l16.025-3L203,334l-29.994-45,16.041,3,13.961-69Z'
//遍历data2里面元素的正负定义一个矢量路径的数组
var path = [up,down,up,down,down,down,up]
option = {
    color: ['#3398DB'],
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
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            "name": "",
            type: 'pictorialBar',
            symbol: function(data,params){
                return path[params.dataIndex]
            },
            symbolSize: [20, 30],
            symbolOffset: [0, -40],
            color:'orange',
            symbolPosition: 'end',
            label: {
                show: true,
                position: "top",
                formatter:  function(params){
                    return data2[params.dataIndex]
                },
                fontSize: 30,
                fontWeight: 'bold',
                color: '#34DCFF'
            },
            data: data1
        },
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '40%',
            data: data1
        }
    ]
};