option = {
    title: {
        text: 'Awesome Chart'                                     //标题名字
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] //横坐标文字
    },
    yAxis: {},      //纵坐标，默认为数值
    series: [{      //一系列数据
        type: 'line',//折线图的意思
        data: [220, 182, 191, 234, 290, 330, 310]
    }]
};
