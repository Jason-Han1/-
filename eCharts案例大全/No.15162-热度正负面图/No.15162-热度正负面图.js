option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['热度', '正面', '负面']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['汽车之家','今日头条','百度贴吧','一点资讯','微信','微博','知乎']
        }
    ],
    series : [
        {
            name:'热度',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[300, 270, 340, 344, 300, 320, 310]
        },
        {
            name:'正面',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data:[120, 102, 141, 174, 190, 250, 220]
        },
        {
            name:'负面',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left'
                }
            },
            data:[-20, -32, -21, -34, -90, -130, -110]
        }
    ]
};
