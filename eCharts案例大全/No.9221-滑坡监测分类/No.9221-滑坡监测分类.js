app.title = '环形图';

option = {
    backgroundColor: 'black',
    title: {
        text: '滑坡监测分类',
        x: 'left',
        textStyle: {
            fontSize: 12,
            color: '#ffffff'
        }
    },
    legend: {

        y: 'bottom',
        itemWidth: 14,
        textStyle: {
            color: '#ffffff'
        }

    },
    color: ['#DAB144', '#FF9F40', '#FF6383', '#C95FF2', '#7C6AF2', '#5C89FF'],
    series: [{
        name: '滑坡分类',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        roseType: 'radius',
        label: {
            normal: {
                show: false,
                position: 'center'
            }
        },
        emphasis: {
            label: {
                show: true,
                position: 'inside',
                formatter: (params) => {
                    console.log(JSON.stringify(params))
                    return '{top|' + params.data.value + '%}' + '\n' + '{bottom| ' + params.data.name + '}'

                },
                rich: {
                    top: {
                        fontSize: 18,
                        fontWeight: 400
                    },
                    bottom: {
                        fontSize: 18,
                        fontWeight: 400,
                        padding: [0, 0, 10, 0]
                    }
                }
            }
        },
        data: [{
                value: 335,
                name: '直接访问'
            },
            {
                value: 310,
                name: '邮件营销'
            },
            {
                value: 234,
                name: '联盟广告'
            },
            {
                value: 135,
                name: '视频广告'
            },
            {
                value: 548,
                name: '搜索引擎'
            }
        ]
    }]
};



var currentIndex = -1;
setInterval(function() {
    var dataLen = option.series[0].data.length;

    // 取消之前高亮的图形
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: currentIndex
    });
    currentIndex = (currentIndex + 1) % dataLen;
    // 高亮当前图形
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: currentIndex,
    });
    // 显示 tooltip
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: currentIndex
    });
}, 1000);