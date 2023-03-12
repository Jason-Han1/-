app.title = '坐标轴刻度与标签对齐';
var date = new Date();
var year = date.getFullYear();
option = {
    title: {
        text: year + '年出勤统计表'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['上班时长', '加班时长']
    },
    xAxis: [{
        type: 'category',
        name: '月',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        //data:monthNoArray,
        axisPointer: {
            type: 'shadow'
        },
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value',
        name: '小时',
        interval: 10,
        axisLabel: {
            formatter: '{value}',
            fontSize: 9
        }
    }],
    series: [{
            name: '上班时长',
            type: 'bar',
            data: [10, 12, 9, 10, 11, 12, 10, 9, 9, 12, 13, 13]
            //data:workTimeSumArray
        },
        {
            name: '加班时长',
            type: 'bar',
            data: [2, 3, 1, 1, 1.8, 7.5, 3, 2, 3, 1, 3, 4]
            //data:overWorkSumArray
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
    // 使用刚指定的配置项和数据显示图表。
    // 处理点击事件并且跳转到相应的百度搜索页面
    myChart.on('click', function(params) {
        //window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
        getWorkTimeAtMonth(year + "-" + encodeURIComponent(params.name), encodeURIComponent(params.name));
        console.log("单击了" + params.name + "柱状图");
    });
}

// 生成12月份的概要统计数据表格柱状图
function getWorkTimeAtMonth(monthParam, monthNo){
    optionMonthArray(monthNo);
}

function optionMonthArray(monthNo){
    option = {
            title: {
                text: monthNo + '月份出勤统计表'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            toolbox: {
                feature: {
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            legend: {
                data:['上班时长','加班时长']
            },
            xAxis: [
                {
                    type: 'category',
                    name: '日',
                    data: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
                    //data:monthDateArray,
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '小时',
                    interval: 1,
                    axisLabel: {
                        formatter: '{value}',
                        fontSize:9
                    }
                }
            ],
            series: [
                {
                    name:'上班时长',
                    type:'bar',
                    data:[10,12,9,10,11,12,10,9,9,12,13,13,10,12,12,13,9,8,9,10,11,11,12,12,12,13,12,11,10,9]
                    //data:workHourArray
                },
                {
                    name:'加班时长',
                    type:'bar',
                    data:[2,3,1,1,1.80,7.5,3,2,3,1,3,4,1,1,2,2,3,1,2,3,1,3,2,2,3,3,3,1,1,1]
                    //data:overWorkArray
                }
            ]
        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
}