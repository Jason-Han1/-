option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '53%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        axisLabel:{
            formatter:'{value}(百万元)'
        },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    series: [{
            name: '直接访问',
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
            name: '邮件营销',
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
            name: '联盟广告',
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
            name: '视频广告',
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
            name: '搜索引擎',
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
        {
            name: '饼图',
            type: 'pie',
            center: ['25%', '75%'], //饼图中心点位置，百分比或者int值
            radius: [10, '15%'], //饼图大小，内半径和外半径，内半径不为0时，即饼环图
            data: [{ //饼图数据，name、value式
                name: '示意1',
                value: 1
            }, {
                name: '示意2',
                value: 2
            }]
        }
    ]
};

//示意明细数据
dataDetails = [
    ['类型', '星期', '明细'],
    ['直接访问', '周一', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['直接访问', '周二', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['直接访问', '周三', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['直接访问', '周四', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['直接访问', '周五', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['直接访问', '周六', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['直接访问', '周日', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['邮件营销', '周一', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['邮件营销', '周二', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['邮件营销', '周三', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['邮件营销', '周四', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['邮件营销', '周五', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['邮件营销', '周六', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['邮件营销', '周日', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['联盟广告', '周一', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['联盟广告', '周二', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['联盟广告', '周三', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['联盟广告', '周四', [{
        name: 'a',
        value: 1
    }, {
        name: 'b',
        value: 2
    }]],
    ['联盟广告', '周五', [{
        name: 'a',
        value: 2
    }, {
        name: 'b',
        value: 2
    }]],
    ['联盟广告', '周六', [{
        name: 'a',
        value: 2
    }, {
        name: 'b',
        value: 2
    }]],
    ['联盟广告', '周日', [{
        name: 'a',
        value: 2
    }, {
        name: 'b',
        value: 2
    }]],
    ['视频广告', '周一', [{
        name: 'a',
        value: 2
    }, {
        name: 'b',
        value: 2
    }]],
    ['视频广告', '周二', [{
        name: 'a',
        value: 2
    }, {
        name: 'b',
        value: 2
    }]],
    ['视频广告', '周三', [{
        name: 'a',
        value: 2
    }, {
        name: 'b',
        value: 2
    }]],
    ['视频广告', '周四', [{
        name: 'a',
        value: 2
    }, {
        name: 'b',
        value: 2
    }]],
    ['视频广告', '周五', [{
        name: 'a',
        value: 2
    }, {
        name: 'b',
        value: 2
    }]],
    ['视频广告', '周六', [{
        name: 'a',
        value: 2
    }, {
        name: 'b',
        value: 2
    }]],
    ['视频广告', '周日', [{
        name: 'a',
        value: 2
    }, {
        name: 'b',
        value: 2
    }]],
    ['搜索引擎', '周一', [{
        name: 'a',
        value: 3
    }, {
        name: 'b',
        value: 2
    }]],
    ['搜索引擎', '周二', [{
        name: 'a',
        value: 3
    }, {
        name: 'b',
        value: 2
    }]],
    ['搜索引擎', '周三', [{
        name: 'a',
        value: 3
    }, {
        name: 'b',
        value: 2
    }]],
    ['搜索引擎', '周四', [{
        name: 'a',
        value: 3
    }, {
        name: 'b',
        value: 2
    }]],
    ['搜索引擎', '周五', [{
        name: 'a',
        value: 3
    }, {
        name: 'b',
        value: 2
    }]],
    ['搜索引擎', '周六', [{
        name: 'a',
        value: 3
    }, {
        name: 'b',
        value: 2
    }]],
    ['搜索引擎', '周日', [{
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