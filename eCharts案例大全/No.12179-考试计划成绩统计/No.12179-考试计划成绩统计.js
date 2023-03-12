option = {
    title: {
        x: 'center',
        text: '考试计划成绩统计',
    },
    tooltip: {
        trigger: 'item',
        formatter: "{c}人"
    },
    toolbox: {
        show: true,
        feature: {
            //dataView: {show: true, readOnly: false},
            //restore: {show: true},
            saveAsImage: {
                show: true
            }
        }
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#28316d',
                width: '1'
            }
        },
        axisLabel: {
            interval: 0,
            rotate: 0,
            show: true,
            splitNumber: 15,
            textStyle: {
                fontSize: 10,
            }
        },
        data: ['90分以上', '80分-89分', '70分-79分', '60分-69分', '60分以下'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value',
        name: '',
        splitLine: {
            show: true,
            lineStyle: {
                color: '#DCDCDC'
            }
        },
        axisLabel: {
            interval: 0,
            rotate: 0,
            show: true,
            splitNumber: 30,
            textStyle: {
                fontSize: 12,
            }
        },

    }],
    series: [{
        name: '',
        type: 'bar',
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = ['#00ffff', '#00cfff', '#006ced', '#ffa800', '#ff5b00'];
                    return colorList[params.dataIndex]
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{b}\n{c}人'
                }
            }
        },
        data: [139, 239, 339, 439, 539]
    }]
};