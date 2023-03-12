option = {
    title: {
        text: '温度'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['供温', '回温', '均温']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            // saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        data: ['2020-11-03', '2020-11-04', '2020-11-05', '2020-11-06', '2020-11-07', '2020-11-08', '2020-11-09']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '供温',
            type: 'line',
            step: 'start',
            data: [12, 13, 10, 13, 10, 23, 21]
        },
        {
            name: '回温',
            type: 'line',
            step: 'middle',
            data: [22, 28, 20, 23, 29, 43, 41]
        },
        {
            name: '均温',
            type: 'line',
            step: 'end',
            data: [45, 43, 40, 44, 59, 53, 51]
        }
    ]
};
    autoFn(option.xAxis.data.length)
    function autoFn(leng){
             var that = this
            //轮播效果
            var currentIndex = -1
           
            //  let myChart = echarts.getInstanceByDom(document.getElementById("chart-panel"))
            var dataLen =leng

            that.timer = setInterval(() => {
                //  计时器增加
                that.ai++

                if (that.ai == dataLen) {
                    that.ai = 1
                }
                 console.log(dataLen)
                // 取消之前高亮的图形
                myChart.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                    dataIndex: currentIndex,
                })
                currentIndex = (currentIndex + 1) % dataLen
                // 高亮当前图形
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: currentIndex,
                })
                // 显示 tooltip
              myChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 1,
                    dataIndex: currentIndex,
                })
            }, 3000)
    }
    