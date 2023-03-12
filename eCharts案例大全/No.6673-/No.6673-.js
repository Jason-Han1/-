 // 用户统计-柱状图
    var option = {
        title:{
            //单位
            text:'单位:万',
            textStyle:{
                color:'#ffffff',
                fontSize: 12,
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        // 工具提示
        tooltip: {
            // 触发类型  经过轴触发axis  经过轴触发item
            trigger: 'axis',
            // 轴触发提示才有效
            axisPointer: {
              // 默认为直线，可选为：'line' 线效果 | 'shadow' 阴影效果
              type: 'shadow'
            }
        },
        // 图表边界控制
        grid: {
            show: true,
            borderColor: 'rgba(0, 240, 255, 0.3)',
            // 距离 上右下左 的距离
            top: '14%',
            right: '3%',
            bottom: '3%',
            left: '0%',
            // 是否包含文本
            containLabel: true
        },
        // 控制x轴
        xAxis: [{
            // 使用类目，必须有data属性
            type: 'category',
            // 使用 data 中的数据设为刻度文字
            data: ['审查逮捕', '立案监督', '侦查活动督查', '延长羁押期限', '不批捕复议', '不批捕复核', '单位犯罪', '一审公诉', '二审上诉', '二审抗诉', '审判监督程序抗诉'],
            // 刻度设置
            axisTick: {
                // true意思：图形在刻度中间
                // false意思：图形在刻度之间
                alignWithLabel: false,
                show: false
            },
            // 刻度文字
            axisLabel: {
                show:true,
                // fontsize:12,
                color: '#fff',
                interval: 0,
                formatter: function (params) {
                    var newParamsName = "";
                    var paramsNameNumber = params.length;
                    var provideNumber = 3; //一行显示几个字
                    var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                    if (paramsNameNumber > provideNumber) {
                        for (var p = 0; p < rowNumber; p++) {
                            var tempStr = "";
                            var start = p * provideNumber;
                            var end = start + provideNumber;
                            if (p == rowNumber - 1) {
                                tempStr = params.substring(start, paramsNameNumber);
                            } else {
                                tempStr = params.substring(start, end) + "\n";
                            }
                            newParamsName += tempStr;
                        }
                    } else {
                        newParamsName = params;
                    }
                    return newParamsName;
                }
            }
        }],
        // 控制y轴
        yAxis: [{
            // 使用数据的值设为刻度文字
            type: 'value',
            // 刻度设置
            axisTick: {
                show: false
            },
            // 刻度文字
            axisLabel: {
                color: '#fff'
            },
            // 分割线
            splitLine: {
                lineStyle: {
                    color: '#202b68'
                }
            }
        }],
        // 图形数据和描述
        series: [{
            // 图表数据名称
            name: '检察',
            // 图表类型
            type: 'bar',
            // 柱子宽度
            barWidth: '30%',
            // 数据 {value:2100}
            data: [2100, 1900, 1700, 1560, 1400, 900, 750, 600, 480, 240,100],
        }],
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0, 0, 0, 1, [
                { offset: 0, color: '#e8f917' }, // 0 起始颜色
                { offset: 1, color: '#ffa632' } // 1 结束颜色
            ]
        )
    };