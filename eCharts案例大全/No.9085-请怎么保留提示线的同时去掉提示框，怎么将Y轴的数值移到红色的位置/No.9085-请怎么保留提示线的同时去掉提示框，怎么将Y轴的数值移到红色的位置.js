option = {
    backgroundColor: '#fff', //背景色
    tooltip: {
        trigger: 'axis',
        formatter: '{b} {c}', //提示框
        backgroundColor: 'rgba(50,50,50,.9)',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line', // 默认为直线，可选为：'line' | 'shadow'
            lineStyle: {
                color: '#999999',
            },
            axisStyle: {
                color: '#999999',
            },
        },
        enterable: true
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '0',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        //axisTick: false,//掉去刻度线上的刻度
        axisTick: {
            show: false,
            length: 5
        },
        //boundaryGap: false,  //两端空白
        data: ['2019-12-12', '2019-12-13', '2019-12-14', '2019-12-15', '2019-12-16', '2019-12-17', '2019-12-18'],
        axisLabel: {
            show: false //X轴刻度文字隐藏
        },

        //设置轴线的属性
        axisLine: {
            lineStyle: {
                color: '#cac9c7',
                width: 1
            }
        }
    },
    yAxis: {
        type: 'value',
        min: 300, //设置Y轴最小值
        max: 380, //设置Y轴最大值
        axisTick: {
            show: false, //掉去刻度线上的刻度
            inside: true
        },
        nameLocation: 'end',
        //设置坐标轴字体颜色
        axisLabel: {
            show: true,
            textStyle: {
                color: '#c3dbff',
                fontFamily: 'Microsoft YaHei',
                fontSize: 14
            }
        },
        splitLine: { //分隔线
            lineStyle: {
                color: ['#e6e6e6'], // 改变分隔线的颜色 
                default: ['solid'], // 改变分隔线的样式 
            }
        },
        //隐藏轴线
        axisLine: {
            "show": false
        },
        nameTextStyle: {
            Color: '#000000'
        },
    },
    series: [{
        data: [300, 320, 340, 360, 380],
        symbol: 'none', //去掉折线上的圆点
        type: 'line',
        smooth: true,
        /*itemStyle: {
            //曲线样式
            normal: {
                lineStyle: {
                    color: '#ff9000',
                    width: "1",
                }
            }

        },*/
    }]
};