//调整双Y轴刻度对齐  （max，min，interval）
function _getMaxValue(arr) {
    const max = Math.max(...arr);
    // 这样处理是为了不让最大值刚好到坐标轴最顶部
    return Math.ceil(max / 9.5) * 10;
}

const data1 = [409, 887, 948, 611, 327, 355, 560, 498, 569];
const data2 = [8447.08, 7800.11, 2843.70, 6547.90, 5170, 6569, 506, 1873, 542];
const max1 = _getMaxValue(data1),
    max2 = _getMaxValue(data2);
option = {
    title: {
        text: '分工人员数量分布及平均工资',
        left: 38,
        top: 18,
        textStyle: {
            color: '#111',
            fontWeight: 'lighter',
            fontSize: 18
        }
    },
    legend: {
        data: ['分工人员数量', '平均工资'],
        type: 'scroll',
        top: '50',
        icon: "circle",
    },
    //提示框
    tooltip: {
        trigger: 'axis',
        showDelay: 0,
        extraCssText: 'padding:15px;font-size:10px',
        formatter: function(params) {
            return params[0].name + '总数' + ' : ' + params[0].value + ' 人' + '<br/>' + params[1].name + '平均工资' + ' : ' + '¥ ' + params[1].value
        },
        axisPointer: {
            show: true,
            type: 'shadow',
        }
    },
    // 直角坐标系内绘图网格
    grid: {
        left: '40',
        right: '40',
        top: '120',
        bottom: '20',
        containLabel: true
    },
    dataZoom: [ //给x轴设置滚动条  
        {
            start: 0, //默认为0  
            end: (8 / 9) * 100, //9代表x轴data.length,8代表可展示的最大数
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            handleSize: 0, //滑动条的 左右2个滑动条的大小  
            height: 12, //组件高度 
            bottom: 0, //右边的距离  
            handleColor: '#ddd', //h滑动图标的颜色  
            handleStyle: {
                borderColor: "#cacaca",
                borderWidth: "1",
                shadowBlur: 2,
                background: "#ddd",
                shadowColor: "#ddd",
            },
            fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                //给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变  
                //给第一个设置0，第四个设置1，就是垂直渐变  
                offset: 0,
                color: '#7d90a2'
            }, {
                offset: 1,
                color: '#4a5e70'
            }]),
            backgroundColor: '#efefef', //两边未选中的滑动条区域的颜色  
            showDataShadow: false, //是否显示数据阴影 默认auto  
            showDetail: false, //即拖拽时候是否显示详细数值信息 默认true  
            handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
            filterMode: 'filter'
        },
        //下面这个属性是里面拖到  
        {
            type: 'inside',
            show: true,
            xAxisIndex: [0],
            start: 0, //默认为1  
            end: 50
        },
    ],
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['工1', '工2', '工3', '工4', '工5', '工6', '工7', '工8', '工9'],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }],
    //工具盒：转换折线，柱状，还原，保存
    toolbox: {
        show: true,
        top: 10,
        right: 20,
        feature: {
            mark: {
                show: true
            },
            magicType: {
                show: true,
                type: ['line', 'bar'],
                smooth: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    yAxis: [{
        type: 'value',
        name: '人数（人）',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        min: 0,
        max: max1,
        splitNumber: 5,
        interval: max1 / 5,
    }, {
        type: 'value',
        name: '金额（元）',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        //默认以千分位显示，不想用的可以在这加一段
        axisLabel: { //调整左侧Y轴刻度， 直接按对应数据显示
            show: true,
            showMinLabel: true,
            showMaxLabel: true,
            formatter: function(value) {
                return value;
            }
        },
        splitNumber: 5,
        interval: max2 / 5,
        min: 0,
        max: max2
    }],
    series: [{
        name: '工种人员数量',
        type: 'bar',
        color: '#3e86ff',
        yAxisIndex: 0,
        barWidth: 20,
        itemStyle: {
            emphasis: {
                barBorderRadius: 4
            },
            normal: {
                barBorderRadius: 4,
            }
        },
        data: [409, 887, 948, 611, 327, 355, 560, 498, 569]
    }, {
        name: '工种平均工资',
        type: 'bar',
        color: '#47ace7',
        yAxisIndex: 1,
        barWidth: 20,
        itemStyle: {
            emphasis: {
                barBorderRadius: 4
            },
            normal: {
                barBorderRadius: 4,
            }
        },
        data: [8447.08, 7800.11, 2843.70, 6547.90, 5170, 6569, 506, 1873, 542],
    }]
}