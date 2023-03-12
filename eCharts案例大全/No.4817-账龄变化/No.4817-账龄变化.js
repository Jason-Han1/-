option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    
        
    },
    legend: {
        data: ['30天以内', '31-60天', '61-90天', '90天以上','销售量']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
         type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
       type: 'value'
    },
    series: [
        {
            name: '30天以内',
            type: 'bar',
            stack: '总量',
            label: {
                show: false,
                position: 'insideRight'
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: '31-60天',
            type: 'bar',
            stack: '总量',
            label: {
                show:  false,
                position: 'insideRight'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '61-90天',
            type: 'bar',
            stack: '总量',
            label: {
                show:  false,
                position: 'insideRight'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '90天以上',
            type: 'bar',
            stack: '总量',
            label: {
                show:  false,
                position: 'insideRight'
            },
            data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
            name: '销售量',
            type: 'line',
            stack: '销售量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
    ]
};