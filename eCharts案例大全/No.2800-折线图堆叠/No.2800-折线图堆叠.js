var _legend = ['邮件营销', '联盟广告', '视频广告'];
var _series = [
    {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410],
    },
];

var option = {
    title: {
        text: '折线图堆叠',
    },
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: [_legend[0]],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    toolbox: {
        feature: {
            saveAsImage: {},
        },
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: {
        type: 'value',
    },
    series: [_series[0]],
};

var index = 0;
let datas = [];
function change() {
    if (++index == _legend.length) {
        index = 0;
        datas = [];
    }
    datas.push(_series[index]);
    myChart.setOption({
        series: datas,
    });
}
setInterval(change, 1000);
