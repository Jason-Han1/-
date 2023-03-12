var data1 = [110.17, 92.45, 85.14, 66.68, 65.57, 56.13, 52.93, 52.60, 45.23, 42.47]
var data2 = [49.78, 31.65, 20.27, 20.03, 18.72, 14.12, 13.11, 13.07, 9.97, 8.26]
//定义两个上下箭头的矢量路径
var up = 'path://M286.031,265l-16.025,3L300,223l29.994,45-16.041-3-13.961,69Z';
var down = 'path://M755.2 648.362667a42.666667 42.666667 0 0 1 0.554667 60.330666l-213.333334 217.173334a42.666667 42.666667 0 0 1-60.842666 0l-213.333334-217.173334a42.666667 42.666667 0 0 1 60.842667-59.818666L469.333333 791.68V128a42.666667 42.666667 0 1 1 85.333334 0v663.68l140.245333-142.805333a42.666667 42.666667 0 0 1 60.330667-0.512z'
//遍历data2里面元素的正负定义一个矢量路径的数组
var path = [up, down, up, down, down, down, up]
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
                if (data1[params.dataIndex] > 0) {
                    return down
                } else {
                    return up
                }

            },
            barGap: '-100%',
            symbolSize: [20, 50],
            symbolOffset: ['220%', 0],
            color: 'red',
            symbolPosition: 'end',
            label: {
                show: true,
                position: "insideTop",
                formatter: function(params) {
                    return data1[params.dataIndex]
                },
                color: '#fff'
            },
            data: data1
        },

        {
            name: '直接访问',
            type: 'bar',
            stack: 'a',
            barGap: '-100%',
            barWidth: '40%',
            data: data2,
            label: {
                show: true
            },
            itemStyle: {
                color: 'red'
            }
        },
        {
            name: '直接访问',
            stack: 'a',
            barGap: '-100%',
            type: 'bar',
            barWidth: '40%',
            data: data1
        },
    ]
};