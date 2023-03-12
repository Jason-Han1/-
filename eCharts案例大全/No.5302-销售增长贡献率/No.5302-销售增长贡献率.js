option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
     "color": [
            "#516b91",
            "#59c4e6",
            "#edafda",
            "#93b7e3",
            "#a5e7f0",
            "#cbb0e3"
        ],
    legend: {
        data: ['门店', '外卖', '电商', '自营', '第三方'],
        left: 10
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['1月', '2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    }],
    yAxis: [  
        {  
            type: 'value',  
            axisLabel: {  
                  show: true,  
                  interval: 'auto',  
                  formatter: '{value} %'  
                },  
            show: true  
        }  
    ],
    series: [{
            name: '门店',
            type: 'bar',
            stack: '广告',
            // itemStyle: {  
            //     normal: {  
            //         label: {  
            //             show: true,  
            //             position: 'top',  
            //             formatter: '{b}\n{c}%' 
            //         }  
            //     }  
            // },  
            data: [12, 13,12, 13,12, 13, 13,12, 13, 13,12, 13]
        },
        {
            name: '外卖',
            type: 'bar',
            stack: '广告',
            // itemStyle: {  
            //     normal: {  
            //         label: {  
            //             show: true,  
            //             position: 'top',  
            //             formatter: '{b}\n{c}%'  ,
            //             color:'"#516b91"'
            //         }  
            //     }  
            // },  
            data: [18,22,18,22,22,18,20,20,18,22,20,18]
        },
        {
            name: '电商',
            type: 'bar',
            stack: '广告',
            // itemStyle: {  
            //     normal: {  
            //         label: {  
            //             show: true,  
            //             position: 'top',  
            //             formatter: '{b}\n{c}%' ,
            //             color:'"#516b91"' 
            //         }  
            //     }  
            // },  
            data: [18,22,18,22,22,18,20,20,18,22,20,18]
        },
        {
            name: '自营',
            type: 'bar',
            stack: '广告',
            // itemStyle: {  
            //     normal: {  
            //         label: {  
            //             show: true,  
            //             position: 'top',  
            //             formatter: '{b}\n{c}%' ,
            //             color:'"#516b91"' 
            //         }  
            //     }  
            // },  
            data: [18,22,18,22,22,18,20,20,18,22,20,18]
        },
        {
            name: '第三方',
            type: 'bar',
            stack: '广告',
            // itemStyle: {  
            //     normal: {  
            //         label: {  
            //             show: true,  
            //             position: 'top',  
            //             formatter: '{b}\n{c}%'  ,
            //             color:'"#516b91"'
            //         }  
            //     }  
            // },  
            data: [18,22,18,22,22,18,20,20,18,22,20,18]
        }
    ]
};