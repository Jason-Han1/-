const optionData = {
    title: {
        text: 'Awesome Chart'
    },
    tooltip: {
      trigger: 'axis',  
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            smooth: true,
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            smooth: true,
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            smooth: true,
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            smooth: true,
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            smooth: true,
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ],
};
myChart.setOption(option = optionData);

myChart.on('legendselectchanged', function (params) {
    console.log(params);
    const selectedData = params.selected;
    const newSelectedData = {};
    Object.keys(selectedData).forEach((item) => {
        if (item === params.name) {
             newSelectedData[item] = true;
        } else {
            newSelectedData[item] = false;
        }
    });
    const newOptions = optionData;
    newOptions.legend.selected = newSelectedData;
    console.log(newOptions);
    myChart.setOption(option=newOptions);
});