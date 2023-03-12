    // var myChart = echarts.init(document.getElementById('youzhilaoshi'));
    var colorList = {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#d45930' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#d5a343' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    }
    var option = {

        tooltip: {
            trigger: 'item',
            axisPointer: {
                type: 'shadow'
            },
            extraCssText:'width:auto;height:auto;'
        },

        grid: {
            x: 0,
            y:40,
            x2:30,
            y2: 0,
            containLabel: true
        },

        xAxis: {
            type: 'value',
            max:2000,
            interval:250,
            name: '人',
            nameLocation: 'end',
            nameTextStyle:{
                color: '#8597c1',
                fontStyle:9,
                padding:[0,0 ,-26 ,-8]
            },
            boundaryGap: [0, 0.01],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#8597c1'
                }
            },
            axisLabel: {
                show: true,
                interval: '0',
                textStyle: {
                    fontSize: 16,
                    color: '#8597c1'
                },
                rotate:40
            },
            axisTick:{
                show:false
            },
            splitLine:{
                show:false
            }

        },
        yAxis: {
            type: 'category',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#8597c1'
                },
                symbol: ['none', 'arrow'],
                symbolSize: [4, 4]

            },
            axisLabel: {
                show: true,
                textStyle: {
                    fontSize: 16,
                    color: '#8597c1'
                }
            },
            splitLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            data: ['化学', '物理', '外语', '数学', '语文']
        },
        series: [
            {
                type: 'bar',
                data: [121, 368, 700, 1200, 1490],
                itemStyle: {
                    color: function (params) {
                        return colorList;
                    }
                },
                barWidth: '40%'
            }

        ]
    };
    myChart.setOption(option);

