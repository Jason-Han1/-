option = {
    backgroundColor: '#0c1e55',

color: ['#00a0fc', '#ffe400', '#ff9a09', '#ef1e5f','#23cbe5', '#ec561b', '#ffa500', '#dddf00', '#b23aee', '#50b332'],

    tooltip: {
        trigger: 'item',
        // formatter: "   {a} <br/>{b} : {c} ({d}%)"
        formatter: "   企业数：{c}"
    },
    legend: { // 图例-图上面的分类
        orient: 'vertical',
        right: 30,
        //   icon: 'rect',//长方形
        icon: 'circle',
        bottom: "20%",
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 13,
       data: ['16℃以下', '16-18℃', '18-20℃', '20-22℃','22-24℃','24-26℃','26℃以上' ],
        // right: '56%',
        textStyle: {
            fontSize: 14,
            color: '#a6cde8',
            lineHeight: 49
        },
        formatter: function(name) {
            return "" + name + ""
        },
        padding: [2, 2]
    },
    grid: {
        top: '20%',
        left: '53%',
        right: '10%',
        bottom: '6%',
        containLabel: true
    },

    series: [{
        label: {
            normal: {
                    formatter: '{b|{b}：} {c} \n  {per|{d}%} ',
                    rich: {
                    }
                },
            emphasis: {
                show: true,
            }
        },
        // labelLine: {
        //     normal: {
        //         show: false
        //     }
        // },
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data:[{
                value: 195,
                name: '16℃以下'
            },
            {
                value: 185,
                name: '16-18℃'
            },
            {
                value: 260,
                name: '18-20℃'
            },
            {
                value: 213,
                name: '20-22℃'
            },
            {
                value: 52,
                name: '22-24℃'
            },
            {
                value: 35,
                name: '24-26℃'
            },
            {
                value: 46,
                name: '26℃以上'
            },
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
          labelLine: {
            normal: {
                length: 5,
                length2: 1,
                smooth: true,
            }
        },
    }]
};

 autoFn(option.legend.data.length)
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
                    seriesIndex: 0,
                    dataIndex: currentIndex,
                })
            }, 3000)
    }
    