app.title = '堆叠条形图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['女','男',]
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
        data: ['传媒学院','体育学院','信息技术学院','化学学院','历史文化学院','外国语学院','政法学院','教育科学学院','数学学院','文学院','旅游与地理科学学院','物理学院','环境科学与工程学院','生命科学学院','管理学院','经济学院','美术学院','计算机学院','音乐学院']
    },
    series: [
       
        {
            name: '女',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
           data: [394,33,95,128, 96,298,145,346,151,176,172,108,114,127,257,183,258,153,90]
        },
        {
            name: '男',
            type: 'bar',
             stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [122, 171, 80, 28, 18, 37,31,35,29,24,38,48,49,18,52,51,117,103,30]
        },
    ]
};