var data1 = [1132, 3324, 1327, 352, 1365, 645, 256];
var data2 = [0.2, -0.6, 4.2, -7.7, -1.4, -10.5, 1.4];
//定义两个上下箭头的矢量路径
var up = 'path://M286.031,265l-16.025,3L300,223l29.994,45-16.041-3-13.961,69Z';
var down = 'path://M216.969,292l16.025-3L203,334l-29.994-45,16.041,3,13.961-69Z'
//遍历data2里面元素的正负定义一个矢量路径的数组
var path = [up, down, up, down, down, down, up]
var seriesData = []
console.log('max', Math.max(...data1))
for (var i = 0; i < data1.length; i++) {
    var itemStyle = {};
    if (Math.max(...data1) === data1[i]) {
        itemStyle = {
            normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [3, 3, 0, 0],
                borderColor: 'black',
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: "#ff8aa6" // 0% 处的颜色
                }, {
                    offset: 0.6,
                    color: "#fd7b9a" // 60% 处的颜色
                }, {
                    offset: 1,
                    color: "#f74f77" // 100% 处的颜色
                }], false),

            },
        };
    } else {
        itemStyle = {
            normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [3, 3, 0, 0],
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: "#8b7dfe" // 0% 处的颜色
                }, {
                    offset: 0.6,
                    color: "#7b6bf9" // 60% 处的颜色
                }, {
                    offset: 1,
                    color: "#7565f5" // 100% 处的颜色
                }], false)
            },
        };
    }

    seriesData.push({
        value: data1[i],
        itemStyle: itemStyle
    })
}
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
    xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
            "name": "",
            type: 'pictorialBar',
            symbol: function(data, params) {
                return path[params.dataIndex]
            },
            symbolSize: [20, 30],
            symbolOffset: [0, -40],
            color: 'orange',
            symbolPosition: 'end',
            label: {
                show: true,
                position: "top",
                formatter: function(params) {
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
            data: seriesData
        }
    ]
};