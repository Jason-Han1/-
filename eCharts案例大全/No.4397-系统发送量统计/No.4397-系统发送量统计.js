var option=  
{ backgroundColor: '#fff',
    yAxis: {
        type: 'category',
        axisLine: {
            show: false //坐标线
        },
        axisTick: {
            show: false //小横线
        },
        axisLabel: {
            color: '#999' //坐标轴字颜色
        },
        data: ['中国社会组织政务管理平台', '综合办公系统', '运维管理能效监控平台', '认证后台', 
        '社会组织审计管理服务平台', '社会组织公众号注册', '消息平台']
        
    },

    xAxis: {
        show: false,
    },
    grid: {
        top: '40',
        right: '50',
        left: '180',
        bottom: '40' //图表尺寸大小
    },
    // animationDuration: function (idx) {
    //                 // 越往后的数据时长越大
    //                 return idx * 9000;
    //             },
    animationDuration: 9000,
    series: [{
        /* data: [120, 200, 150, 80, 70, 110, 130], */
        type: 'bar',
        barWidth: '10px',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.4)',
            barBorderRadius: [30, 30, 30, 30] //圆角大小
        },
        label: {
            show: true,
            position: 'right' //每一条的数据位置

        },
        itemStyle: {

            normal: {
                color: (params) => {
                    let colors = ['#4956ff', '#2d82ff', '#2dc6ff', '#2fca95', '#4956ff', '#2d82ff', '#2dc6ff', '#2fca95']
                    return colors[params.dataIndex]
                }, //每个数据的颜色
                barBorderRadius: [30, 30, 30, 30], //圆角大小
                shadowBlur: 10,
                shadowColor: 'rgba(0, 103, 255, 0.2)',
                shadowOffsetX: -5,
                shadowOffsetY: 5,

            },




        },
        data: [{
                value: 120
            },
            {
                value: 200
            },
            {
                value: 150
            },
            {
                value: 80
            },
            {
                value: 70
            },
            {
                value: 110
            },
            {
                value: 130
            },
        ]
    }]
};