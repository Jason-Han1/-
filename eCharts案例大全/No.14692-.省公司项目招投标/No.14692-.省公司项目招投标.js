option = {
    backgroundColor: '#001C69',
    title: {
        show: true,
        text: '.省公司项目招投标',
        x: 'left',
        textStyle: {
            fontSize: '120%',
            color: '#ffffff'
        }
    },
    grid: {
        x: '20%',
        y: '15%'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(value) {
            return `${value[0].name}<br/>${value[0].data}`;
        },
    },
    xAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            rotate: 45, //倾斜度 -90 至 90 默认为0  
            margin: 10,
            // 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
            formatter: function(value, index) {
                // 格式化成月/日，只在第一个刻度显示年份
                if (value == 1) {
                    return '立项';
                } else if (value == 2) {
                    return '商务谈判';
                } else if (value == 3) {
                    return '签订合同';
                } else if (value == 4) {
                    return '项目实施';
                } else if (value == 5) {
                    return '项目验收';
                } else if (value == 6) {
                    return '付款进度';
                }
            },
            fontSize: '70%',
            textStyle: {
                color: '#ffffff'
            }
        },
        //  改变x轴颜色
        axisLine: {
            lineStyle: {
                color: '#ffffff'
                    //                            width:8,//这里是为了突出显示加上的，可以去掉
            }
        }
    }],
    yAxis: [{
        type: 'category',
        axisLabel: {
            textStyle: {
                color: '#ffffff'
            }
        },
        axisTick: {
            show: false
        },
        //  改变x轴颜色
        axisLine: {
            fontSize: '70%',
            lineStyle: {
                color: '#ffffff'
                    //                            width:8,//这里是为了突出显示加上的，可以去掉
            }
        },
        data: ['控燃油加油机', '油站网络设备', '系统辅助设备', '计算机等设备', '系统零售POS', '系统服务器']
    }],
    series: [{
        type: 'bar',
        itemStyle: {
            normal: {
                show: true,
                color: {
                    type: 'linear',
                    colorStops: [{
                        offset: 1,
                        color: 'rgba(255, 195, 0,1)'
                    }, {
                        offset: 0,
                        color: 'rgba(255, 195, 0,0.5)'
                    }]
                },
                barBorderRadius: 88,
                borderWidth: 2,
                borderColor: '#ffc300',
            }
        },
        // label: {
        //     normal: {
        //         show: true,
        //         position: 'right',
        //         textStyle: {
        //             color: '#f3ef91',
        //             fontSize: '120%'
        //         }
        //     }
        // },
        barGap: '0%',
        barCategoryGap: '20%',
        barMaxWidth: '20px',
        data: [1, 2, 3, 4, 5, 6]
    }]
};