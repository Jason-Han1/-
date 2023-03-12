/**
 * 费用统计实例。需要展示出应收，欠收，已收三个统计数据
 */ 
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(obj) {
            // 自定义提示显示部分，特别时红色部分提示信息需要取反
            return '' + obj[0].name + '<br>' +
                '<span style="width: 10px;height: 10px;background-color:' + obj[0].color + ';display: inline-block;border-radius: 10px;"></span>' +
                ' 欠收：' + obj[0].value + '<br>' +
                '<span style="width: 10px;height: 10px;background-color:' + obj[1].color + ';display: inline-block;border-radius: 10px;"></span>' +
                ' 已收：' + obj[1].value + '<br>' +
                '<span style="width: 10px;height: 10px;background-color:' + obj[2].color + ';display: inline-block;border-radius: 10px;"></span>' +
                ' 应收：' + ((-1) * obj[2].value);
        }
    },
    color: ['#00CC99', '#0000ff', '#ff0000'],
    legend: {
        icon: 'rect',
        itemHeight: 7,
        itemWidth: 7,
        data: ['应收', '已收', '欠收'],
        y: 'bottom'
    },
    grid: {
        top: '0%',
        left: '3%',
        right: '4%',
        containLabel: true
    },
    xAxis: [{
        type: 'value'
    }],
    yAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        data: ['2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年']
    }],
    series: [{
            name: '欠收',
            type: 'bar',
            label: {
                normal: {
                    show: false,
                    position: 'inside'
                }
            },
            data: [200,700]
        },
        {
            name: '已收',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false
                }
            },
            data: [1212,2300]
        },
        {
            name: '应收',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'left'
                }
            },
            data: [-1212,-3000]
        }
    ]
};