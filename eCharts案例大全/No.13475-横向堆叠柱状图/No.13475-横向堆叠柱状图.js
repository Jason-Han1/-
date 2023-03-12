app.title = '堆叠条形图';

const colors = ['rgba(18,255,254,0.4)', 'rgba(255,203,77,0.4)', 'rgba(245,143,35,0.4)', 'rgba(226,102,82,0.4)'];

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: ['#12fffe', '#ffcb4d', '#f58f23', '#e26652'],
    legend: {
        data: ['蓝','黄','橙','红'],
        bottom: '2%',
        right: '5%',
        icon: 'circle',
        itemWidth: 26,
        itemHeight: 26,
        textStyle: {
            color: '#c6e5ff',
            fontSize: 32
        }
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '5%',
        top: '5%',
        containLabel: true
    },
    xAxis:  [{
        type: 'value',
        show: false
    },{
        type: 'value',
        show: false
    }],
    yAxis: [{
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 36,
            fontWeight: 400,
            interval: 0
        },
        offset: 40,
        data: ['安监','卫计委','水利部','名航','海洋局'],
    },
    {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 36,
            fontWeight: 300,
            interval: 0
        },
        data: [123,'312','3123','3123','1231']
    }],
    series: [
        {
            name: '蓝',
            type: 'bar',
            barWidth: 25,
            stack: '总量',
            itemStyle: {
                normal: {
                    barBorderRadius: [30, 0, 0,30],
                    shadowColor: colors[0],
                    shadowBlur: 10,
                    shadowOffsetY: 20
                },
            },
            data: [320, 302, 301, 334, 390]
        },
        {
            name: '黄',
            type: 'bar',
            barWidth: 25,
            stack: '总量',
            itemStyle: {
                normal: {
                    shadowColor: colors[1],
                    shadowBlur: 10,
                    shadowOffsetY: 20
                },
            },
            data: [120, 132, 101, 134, 90]
        },
        {
            name: '橙',
            type: 'bar',
            stack: '总量',
            barWidth: 25,
            itemStyle: {
                normal: {
                    shadowColor: colors[2],
                    shadowBlur: 10,
                    shadowOffsetY: 20
                },
            },
            data: [220, 182, 191, 234, 290]
        },
        {
            name: '红',
            type: 'bar',
            barWidth: 25,
            stack: '总量',
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 15, 15,0],
                    shadowColor: colors[3],
                    shadowBlur: 10,
                    shadowOffsetY: 20
                },
            },
            data: [150, 212, 201, 154, 190]
        }
    ]
};

