option = {
    xAxis: {
        type: 'category',
        data: ['第一年', '第二年', '第三年', '第四年', '第五年']
    },
    yAxis: {
        type: 'value'
    },
     legend: {
        data: ['SDM维保费用（万元）', '新系统开发+维保费用（万元）']
    },
    series: [
        {
            name:'SDM维保费用（万元）',
            data: [25, 50, 75, 100, 125],
            type: 'bar',
            label: {
                show: true,
                position: 'top'
            },
            backgroundStyle: {
                color: 'rgba(220, 220, 220, 0.8)'
                }
        },
        {
        name:'新系统开发+维保费用（万元）',    
        data: [85, 85, 85, 85, 85],
        type: 'bar',
        label: {
                show: true,
                position: 'top'
            },
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
            }
        },
        // {
        //     name:'SDM',
        //     data: [250000, 500000, 750000, 1000000, 1250000],
        //     type: 'line',
        //     // label: {
        //     //     show: true,
        //     //     position: 'inside'
        //     // },
        //     backgroundStyle: {
        //         color: 'rgba(220, 220, 220, 0.8)'
        //         }
        // },
        // {
        //     name:'IT智能客服系统',    
        //     data: [850000, 850000, 850000, 850000, 850000],
        //     type: 'line',
        //     // label: {
        //     //         show: true,
        //     //         position: 'inside'
        //     //     },
        //     backgroundStyle: {
        //         color: 'rgba(220, 220, 220, 0.8)'
        //         }
        // }
         
    ]
};
