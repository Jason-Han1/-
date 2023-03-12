option = {
    title: {
        text: '折线图堆叠',
        show: false
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['岗位标杆','服务中心工作','公益服务','团结员工','其他'],
        textStyle: {
            fontSize: 26
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    //toolbox: {
    //    feature: {
    //        saveAsImage: {}
    //    }
    //},
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [ '7日', '8日', '9日', '10日', '11日', '12日', '13日'],
        axisLabel: {
            fontSize: 20
        }
    },
    yAxis: [{
        type: 'value'
    },{
        //type: 'value'
        data: [500,1000,1500,2000,2500,3000]
    }],
    series: [
        {
            name: '公益服务',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '服务中心工作',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '团结员工',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '岗位标杆',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '其他',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};