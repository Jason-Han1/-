option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['新建', '续建', '已开工', '未开工']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['市列重点项目清单', '市列重大项目清单', '市列前期项目清单', '十大生态产业项目清单']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '新建',
            type: 'bar',
            stack: '建设性质',
            data: [320, 332, 301, 334]
        },
        {
            name: '续建',
            type: 'bar',
            stack: '建设性质',
            data: [120, 132, 101, 134]
        },
        {
            name: '已开工',
            type: 'bar',
            stack: '是否开复工',
            data: [220, 182, 191, 234]
        },
        {
            name: '未开工',
            type: 'bar',
            stack: '是否开复工',
            data: [150, 232, 201, 154]
        }
    ]
};