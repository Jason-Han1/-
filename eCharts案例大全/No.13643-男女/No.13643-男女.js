app.title = '正负条形图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['差', '男生', '女生']
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
           
        }
    ],
    series : [
        {
            name:'差',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[2243]
        },
        {
            name:'女生',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data:[3324]
        },
        {
            name:'男生',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[-1081]
        }
    ]
};
