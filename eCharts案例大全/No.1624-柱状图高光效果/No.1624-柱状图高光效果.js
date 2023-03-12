option = {
    title: {
        text: '柱状图高光效果'
    },
    backgroundColor: 'black',
    grid: {
        right: 20,
        top: 40,
        bottom: 20,
        left: 20,
        containLabel: true
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#4E4E5A'],
                width: 1,
                type: 'solid'
            }
        }

    },
    yAxis: {
        type: 'category',
        data: ["硬漂浮物", "轻飘浮物", "堆放隐患"],
        axisTick: {
            show: false
        }

    },
    series: [
        {
            name: '硬漂浮物',
            type: 'bar',
            stack: 'all',
            data: [2, 3, 6],
            barWidth: 30,
        },
        {
            name: '轻漂浮物',
            type: 'bar',
            stack: 'all',
            data: [3, 2, 1],
            barWidth: 30,
        },
    ]
};

var count = 0;
setInterval(function(){
    if(count%2 == 0){
        option.series = option.series.slice(0, 2)
        myChart.setOption(option,true);      //交替setOption
    }else{
        option.series.push(
            {
                type: 'bar',
                data: [5, 5, 7],
                barWidth: 30,
                barGap: '-100%',
                zlevel: 2,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: 'rgba(255, 255, 255, 0.3)'
                        }, {offset: 1, color: 'rgba(255, 255, 255, 0)'}])
                    }
                }
            }
        )
        myChart.setOption(option,true);
    }
    count+=1;
},1000);
