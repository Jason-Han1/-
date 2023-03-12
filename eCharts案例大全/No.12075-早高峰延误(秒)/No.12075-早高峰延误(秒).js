  var option = {
        backgroundColor: '#1C2129', //画布背景
        title: {
            text: '早高峰延误(秒)',
            x: "20",
            y: "10",
            textStyle: {
                fontSize: 14,
                color: '#fff'
            }
        },
        legend: {
            top: 20,
            textStyle: {
            color: "#fff",
        },
        // itemWidth: 20,  // 设置宽度
        // itemHeight: 15, // 设置高度
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: ["10-17/10-10","10-18/10-11","10-19/10-12","10-20/10-13","10-21/10-14","10-22/10-15","10-22/10-15",],
            axisTick: { //---坐标轴 刻度
                show: true, //---是否显示
            },
            axisLine: { //---坐标轴 轴线
                show: true, //---是否显示
                lineStyle: {
                    color: '#fff',
                    width: 1,
                    type: 'solid',
                },
            },
            axisLabel: {//X轴文字
                interval: 0,
                textStyle: {
                    fontSize: 12,
                    color: '#fff'
                },
            },
        },
        yAxis: {
            type: 'value',
            splitLine: {//分割线
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisLabel: {//Y轴刻度值
                formatter: '{value}',
                textStyle: {
                    fontSize: 12,
                    color: '#fff'
                },
            },
            axisLine: { //---坐标轴 轴线
                show: false, //---是否显示
            },
        },
        series: [{
            name: '早高峰(07:00-09:00)',
            type: 'bar',
            data: [14.28,10.55,0.61,7.23,10.15,2.12,14.36],
            // barWidth: 2 0,
            // barGap: 1, //柱子之间间距 //柱图宽度      两种情况都要设置，设置series 中对应数据柱形的itemStyle属性下的emphasis和normal的barBorderRadius属性初始化时候圆角  鼠标移上去圆角
            itemStyle: {
                normal: {
                    color: "#446ACF",
                }
            },
        }, {
            name: '对比早高峰(07:00-09:00)',
            type: 'bar',
            data: [16.22,16.58,14.39,11.12,7.33,17.66,14.58],
            // barWidth: 20, //柱图宽度
            itemStyle: {
                normal: { //设置颜色的渐变
                    color: "#3DB34D",
                }
            },
        }]
    };