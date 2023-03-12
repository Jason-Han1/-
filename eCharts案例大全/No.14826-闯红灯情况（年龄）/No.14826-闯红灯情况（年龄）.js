option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[300, 182, 191, 234, 290, 330, 310]
    }]
};app.title = '堆叠条形图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['18岁以下', '18-35岁','35-60岁','60岁以上']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['若面前是绿灯，会选择闯另一半红灯','若另在一半是绿灯，会选择闯面前的红灯','看情况','无论如何只过绿灯']
    },
    series: [
        {
            name: '18岁以下',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [0, 1, 2, 11]
        },
        {
            name: '18-35岁',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [1, 5, 13, 15]
        },
        {
            name: '35-60岁',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [1, 3, 12, 11]
        },
        {
            name: '60岁以上',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [0, 1, 11, 4]
        },
       
    ]
};