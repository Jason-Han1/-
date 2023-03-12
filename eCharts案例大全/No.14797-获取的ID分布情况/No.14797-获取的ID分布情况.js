app.title = '获取的ID分布情况 - 条形图和饼图';

option = {
    title: {
        text: '获取的ID分布情况',
        subtext: '饼图：左：各层总ID数；右：各层净ID数'
        // 爬取简书26万+用户信息：数据可视化
        // https://zhuanlan.zhihu.com/p/29589608
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox: {
        show: true,
        feature: {
            //dataView: {show: true, readOnly: false},
            //restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: ['总ID数', '净ID数（累加）']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['第0层','第1层','第2层','第3层']
    },
    series: [
        {
            name: '总ID数',
            type: 'bar',
            data: [799,47601,1239366,391762]
        },
        {
            name: '净ID数（累加）',
            type: 'bar',
            data: [799,20325,210246,263923]
        },
        {
            name: '总ID',
            type: 'pie',
            radius : '20%',
            center: ['40%', '70%'],
            color:[//'#C1232B','#FCCE10','#60C0DD','#E87C25',
                '#27727B','#C1232B','#26C0C0','#60C0DD'],
            data:[
                {value: 799, name: '第0层：799'},
                {value: 4760, name: '第1层：4760'},
                {value: 1239366, name: '第2层：1239366'},
                {value: 391762, name: '第3层：391762'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        {
            name: '净ID',
            type: 'pie',
            radius : '20%',
            center: ['80%', '70%'],
            color:['#C1232B','#26C0C0','#60C0DD'],
            data:[
                {value: 799, name: '第0层：799'},
                {value: 19526, name: '第1层：19526'},
                {value: 189921, name: '第2层：189921'},
                {value: 53677, name: '第3层：53677'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
