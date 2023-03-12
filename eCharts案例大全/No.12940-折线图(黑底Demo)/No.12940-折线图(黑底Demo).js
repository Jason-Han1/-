option = {
    backgroundColor: 'black',
    tooltip: {
        trigger: 'axis'
    },
    color: ['#f69846', '#00ffb4', '#44aff0', '#f6d54a', '#45dbf7',
        '#ad46f3', '#f845f1', '#ff4343', '#ffa800', '#39E7FB', '#FAC901',
    ],
    legend: {
        icon: "circle", //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        textStyle: {
            color: 'white',
            fontSize: 18
        },
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: { //可视化工具箱
        x: 'center',
        y: '25',
        feature: {
             dataView: { //数据视图
                show: true
            },
            dataZoom: { //数据缩放视图
                show: true
            },
            magicType: { //动态类型切换
                type: ['bar', 'line']
            },
            restore: { //重置
                show: true
            },
            saveAsImage: { //保存图片
                show: true
            }
        },
        iconStyle: {
            normal: {
                color: 'white', //设置图标颜色
                textStyle: {
                    color: 'white',
                    fontSize: 1000
                },
            },
            emphasis: { //字体颜色及位置
                color: 'white',
                textPosition: 'bottom'
            }
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisTick: {
            show: false//删除超出正坐标线段
        },
        axisLine: {
            lineStyle: {
                color: 'white',
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: 'white',
                fontSize: 18
            }
        },
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false//删除超出正坐标线段
        },
        axisLine: {
            lineStyle: {
                color: 'white',
            }
        },
        axisLabel: {
            textStyle: {
                color: 'white',
                fontSize: 18
            }
        },
        splitLine: { //坐标轴以外的横线颜色
            lineStyle: {
                type:'dashed',//虚线
                color: 'white'
            }
        }
    },
    series: [{
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};