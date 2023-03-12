option = {
    color: ['#00C9F9', '#1D57E1', '#507E8E'],
    legend: {
        top: '8%',
        right: '5%',
        data:[ '隐患总数','整改中','已整改',],
        // data: [{
        //   name: '隐患总数',
        //   num:100
        // },{
        //   name:  '整改中',
        //   num:100
        // },{
        //   name:  '已整改',
        //   num:100
        // }],
        textStyle: {
            color: '#659ab2',
            fontSize: 20
        },
        itemGap:40
        // formatter: function(params) {
        //   return params.name
        // },
    },
     grid: { //图表的位置
        show: 'true',
        top: '15%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true,
        borderWidth: '2',
		borderColor: '#06c9c4',
    },
    xAxis: {
        type: 'category',
        data: ['物业小区', '修缮工地', '拆房工地', '房建工地', '燃气', '地下空间', '玻璃幕墙'],
        axisTick: {
            show: false
        },
        type: 'category',
        axisLine: {
            lineStyle: {
                color: "#06c9c4",
                width: 2
            }
        },
        axisLabel: {
            interval: 0,
            show: true,
            splitNumber: 15,
            textStyle: {
                color: '#06c9c4',
                fontSize: 20
            },

        },
        
    },
    yAxis: [{
        type: 'value',
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "#06c9c4",
                width: 2
            }
        },
        axisLabel: {
            interval: 0,
            show: true,
            splitNumber: 15,
            textStyle: {
                color: '#06c9c4',
                fontSize: 20
            },

        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#06c9c4',
                type: 'dashed'
                
            },
        },

    }],
    // dataZoom: {
    //     xAxisIndex: [0, 1]
    // },
    series: [{
            type: 'bar',
            name:'隐患总数',
            stack: 'A',
            barWidth: 30,
            xAxisIndex: 0,
            yAxisIndex: 0,
            silent: true,
            data: [5, 20, 18, 4, 6, 23, 40]
        },
        {
            type: 'bar',
            name:'整改中',
            stack: 'A',
            barWidth: 40,
            xAxisIndex: 0,
            yAxisIndex: 0,
            silent: true,
            data: [35, 5, 32, 15, 6, 52, 22]
        },
        {
            type: 'bar',
            name:'已整改',
            stack: 'A',
            barWidth: 40,
            xAxisIndex: 0,
            yAxisIndex: 0,
            silent: true,
            data: [30, 35, 0, 43, 12, 25, 8]
        },

    ]
};