option = {
    title: {
        text: '百度知道回答，echarts 如何在多列柱状图上方显示各列合计值'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'bar',
        data: [220, 182, 191, 234, 290, 330, 310]
    }, {
        type: 'bar',
        data: [230, 152, 121, 214, 220, 320, 330]
    }]
};

// 用于隐藏 itemStyle 的配置项
var hidddenStyle = {
    normal: {
        color: 'rgba(0,0,0,0)',
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};

// 需要添加的、透明的辅助 series，用线图是避免柱图占横轴的空间
seriesAdd = {
    type: 'line',
    itemStyle: hidddenStyle,
    symbol:'circle',  // 将线图数据点设置为实心圆，因为空心会留下白点……
    silent: true, // 使线图不触发鼠标事件
    label: {
        show: true,
        color: '#000',
        position: 'top',
        formatter: (params) => params.name + '合计\n' + params.data.sum
    },
    data: []
};

// 遍历现有的 series
sumSeries = option.series.map(item => {
    
    // 嵌套遍历 series.data，value 存最大值， sum 存合计值
    for (var i in item.data) {
        seriesAdd.data[i] === undefined ? seriesAdd.data[i] = {} : null;
        seriesAdd.data[i].value === undefined || seriesAdd.data[i].value < item.data[i] ?
            seriesAdd.data[i].value = item.data[i] : null;
        seriesAdd.data[i].sum === undefined ?
            seriesAdd.data[i].sum = item.data[i] :
            seriesAdd.data[i].sum += item.data[i];
    }
});

// 配置项中插入辅助 series，重新渲染图表
option.series.push(seriesAdd);
myChart.setOption(option);