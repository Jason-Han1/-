option = {
    title: {
        text: '折线图tooltip中在生图(折线图鼠标滑过展示饼图)'
    },
    tooltip: {
        padding: 3,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function(obj) {
            var value = obj.value;
            var yindex = obj.dataIndex;
            var xindex = obj.seriesIndex;
            setTimeout(function() {
                stockPieManagement("ebox");
                pieChartsFn(yindex, xindex);
            }, 100)
            return '<div style="width:200px;height:200px;" id="ebox" class="ebox"></div>'

        }
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },

    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['16/01', '16/02', '16/03', '16/04', '16/05', '16/06', '16/07', '16/08', '16/09', '16/10', '16/11', '16/12']
    },
    yAxis: {
        type: 'value'
    },
    series: [

        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            symbolSize: 10,
            data: [120, 132, 101, 134, 90, 230, 210, 150, 232, 201, 154, 190, 330]
        }, {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            symbolSize: 10,
            data: [220, 182, 191, 234, 290, 330, 310, 150, 232, 201, 154, 190, 330]
        }, {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            symbolSize: 10,
            data: [150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190, 330]
        }, {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            symbolSize: 10,
            data: [320, 332, 301, 334, 390, 330, 320, 150, 232, 201, 154, 190, 330]
        }, {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 590, 530, 520, 150, 232, 201, 154, 190, 330]
        }

    ]
};

function stockPieManagement(odiv) {
    myChartToolpie = echarts.init(document.getElementById(odiv));
    myChartTool = {
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data: [{
                value: 335,
                name: '直接访问'
            }, {
                value: 310,
                name: '邮件营销'
            }, {
                value: 234,
                name: '联盟广告'
            }, {
                value: 135,
                name: '视频广告'
            }, {
                value: 1548,
                name: '搜索引擎'
            }]
        }]
    };
    myChartToolpie.setOption(myChartTool);
}
//数据  测试数据 请在左正角六个点上测试数据  其它点没有数据
function pieChartsFn(yindex, xindex) {
    console.log(xindex, yindex);
    piedata = [
        [
            [{
                value: 100,
                name: '直接访问'
            }, {
                value: 100,
                name: '邮件营销'
            }, {
                value: 900,
                name: '联盟广告'
            }, ],
            [{
                value: 235,
                name: '直接访问'
            }, {
                value: 210,
                name: '邮件营销'
            }, {
                value: 234,
                name: '联盟广告'
            }, ],
        ]
    ];
    myChartToolpie.setOption({
        series: [{
            data: piedata[xindex][yindex]
        }]
    });
}