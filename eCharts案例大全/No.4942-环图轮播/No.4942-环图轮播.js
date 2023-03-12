option = {
    title: {
        show: true,
        text: '环图',
        x: '45%',
        y: '45%',
        textStyle: {
            color: '#000',
            fontSize: 22,
        },
        subtext: '单位：起',
        subtextStyle: {
            color: '#19c5c9',
            fontSize: 18,
            align: 'center',
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
        orient: 'vertical',
        left: 10,
        selectedMode: false,
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center',
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold',
                },
            },
            labelLine: {
                show: false,
            },
            data: [
                {
                    value: 335,
                    name: '直接访问',
                },
                {
                    value: 310,
                    name: '邮件营销',
                },
                {
                    value: 234,
                    name: '联盟广告',
                },
                {
                    value: 135,
                    name: '视频广告',
                },
                {
                    value: 1548,
                    name: '搜索引擎',
                },
            ],
        },
    ],
};
var index = 0;
var timerId = '';
var len = option.series[0].data.length;

function dynamic() {
    timerId = setInterval(() => {
        if (index >= len) {
            index = 0;
        }
        if (index !== 0) {
            option.series[0].data[index - 1].selected = false;
        } else {
            option.series[0].data[len - 1].selected = false;
        }
        option.series[0].data[index].selected = true;
        option.title.text = option.series[0].data[index].name;
        option.title.subtext = `${option.series[0].data[index].value} 起`;
        index++;
        myChart.setOption(option);
    }, 1000);
}
dynamic();
