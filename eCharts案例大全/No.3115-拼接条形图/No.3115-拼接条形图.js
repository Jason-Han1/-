option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {        top:'5%',

        data: ['1', '2', '3', '4', '5']
    },
    grid: {
        left: '3%',
        right: '4%',
        top:'10%',
        bottom: '30%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        axisLabel:{
            formatter:'{value}'
        },
        data: ['第一轮', '第儿轮', '第三轮', '第四轮', '第五轮', '第六轮', '第七轮']
    },
    series: [{
            name: '1',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: '2',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '3',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '4',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
            name: '5',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',
                    offset:[35,0],
                    formatter:function(params){
                        return params.value + '     ' + params.dataIndex + '%';
                    }
                }
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
        },
    ]
};

//示意明细数据
dataDetails = [
    ['类型', '星期', '明细'],
    ['1', '周一', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['1', '周二', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['1', '周三', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['1', '周四', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['1', '周五', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['1', '周六', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['1', '周日', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['2', '周一', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['2', '周二', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['2', '周三', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['2', '周四', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['2', '周五', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['2', '周六', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['2', '周日', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['3', '周一', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['3', '周二', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['3', '周三', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['3', '周四', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['3', '周五', [{
        name: 'a',
        value: 2
    }, {
        name: 'b',
        value: 2
    }]],
    ['3', '周六', [{
        name: 'a',
        value: 2
    }, {
        name: 'b',
        value: 2
    }]],
    ['3', '周日', [{
        name: 'a',
        value: 2
    }, {
        name: 'b',
        value: 2
    }]],
    ['4', '周一', [{
        name: 'a',
        value: 2
    }, {
        name: 'b',
        value: 2
    }]],
    ['4', '周二', [{
        name: 'a',
        value: 2
    }, {
        name: 'b',
        value: 2
    }]],
    ['4', '周三', [{
        name: 'a',
        value: 2
    }, {
        name: 'b',
        value: 2
    }]],
    ['4', '周四', [{
        name: 'a',
        value: 2
    }, {
        name: 'b',
        value: 2
    }]],
    ['4', '周五', [{
        name: 'a',
        value: 2
    }, {
        name: 'b',
        value: 2
    }]],
    ['4', '周六', [{
        name: 'a',
        value: 2
    }, {
        name: 'b',
        value: 2
    }]],
    ['4', '周日', [{
        name: 'a',
        value: 2
    }, {
        name: 'b',
        value: 2
    }]],
    ['5', '周一', [{
        name: 'a',
        value: 3
    }, {
        name: 'b',
        value: 2
    }]],
    ['5', '周二', [{
        name: 'a',
        value: 3
    }, {
        name: 'b',
        value: 2
    }]],
    ['5', '周三', [{
        name: 'a',
        value: 3
    }, {
        name: 'b',
        value: 2
    }]],
    ['5', '周四', [{
        name: 'a',
        value: 3
    }, {
        name: 'b',
        value: 2
    }]],
    ['5', '周五', [{
        name: 'a',
        value: 3
    }, {
        name: 'b',
        value: 2
    }]],
    ['5', '周六', [{
        name: 'a',
        value: 3
    }, {
        name: 'b',
        value: 2
    }]],
    ['5', '周日', [{
        name: 'a',
        value: 3
    }, {
        name: 'b',
        value: 2
    }]]
];

//监听click事件，参照https://echarts.baidu.com/api.html#events
myChart.on('click', function(params) {
    //如果元素类型是series且series类型是bar则响应
    if (params.componentType === 'series' && params.seriesType === 'bar') {

        alert('params.seriesName：' + params.seriesName + '|params.name：' + params.name);

        //遍历明细数据
        for (var i = 1; i < dataDetails.length; i++) {

            //通过点击事件得到的params参数，去details中找到所需数据
            if (dataDetails[i][0] === params.seriesName && dataDetails[i][1] === params.name) {

                //使用setOption方法修改图形
                myChart.setOption({
                    series: [{
                        name: '饼图', //务必和要修改的series的name一致
                        data: dataDetails[i][2]
                    }]
                });
            }
        }
    }
});