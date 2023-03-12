option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['总人数', '男', '女']
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
            data : ['若面前是绿灯，会选择闯另一半红灯','若另在一半是绿灯，会选择闯面前的红灯','看情况','无论如何只过绿灯']
        }
    ],
    series : [
        {
            name:'总人数',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[2, 10, 38, 41]
        },
        {
            name:'男',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data:[0, 3, 18, 13]
        },
        {
            name:'女',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left'
                }
            },
            data:[-2, -7, -20, -28]
        }
    ]
};
