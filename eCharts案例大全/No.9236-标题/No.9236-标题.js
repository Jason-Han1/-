var m2R2Data = [{
        value: 335,
        value1: 234,
        legendname: 'Ⅰ类',
        name: "Ⅰ类",
        itemStyle: {
            color: "#8d7fec"
        }
    },
    {
        value: 310,
        value1: 314,
        legendname: 'Ⅱ类',
        name: "Ⅱ类",
        itemStyle: {
            color: "#5085f2"
        }
    },
    {
        value: 234,
        value1: 235,
        legendname: 'Ⅲ类',
        name: "Ⅲ类",
        itemStyle: {
            color: "#e75fc3"
        }
    },
    {
        value: 154,
        value1: 213,
        legendname: 'Ⅳ类',
        name: "Ⅳ类",
        itemStyle: {
            color: "#f87be2"
        }
    },
    {
        value: 335,
        value1: 321,
        legendname: 'Ⅴ类',
        name: "Ⅴ类",
        itemStyle: {
            color: "#f2719a"
        }
    },

];

option = {
    title: [{
            text: '全网调控情况',
            textStyle: {
                fontSize: 16,
                color: "black"
            },
            left: "2%"
        },
        {
            text: '全网均温',
            subtext: 44.5 + '℃',
            textStyle: {
                fontSize: 15,
                color: "black"
            },
            subtextStyle: {
                fontSize: 20,
                color: 'black'
            },
            textAlign: "center",
            x: '34.5%',
            y: '44%',
        }
    ],
    tooltip: {
        trigger: 'item',
        formatter: function(parms) {
            var str = parms.seriesName + "</br>" +
                parms.marker + "" + parms.data.legendname + "</br>" +
                "当前温度：" + parms.data.value + "</br>" +
                "目标温度：" + parms.data.value1 + "</br>" +
                "占比：" + parms.percent + "%";
            return str;
        }
    },
    legend: {
        type: "scroll",
        orient: 'vertical',
        left: '65%',
        align: 'left',
        top: 'middle',
        textStyle: {
            color: '#8C8C8C'
        },

    },
    series: [{
        name: '全网调控情况',
        type: 'pie',
        center: ['35%', '50%'],
        radius: ['40%', '65%'],
        clockwise: false, //饼图的扇区是否是顺时针排布
        avoidLabelOverlap: false,
        itemStyle: { //图形样式
            normal: {
                borderColor: '#ffffff',
                borderWidth: 1,
            },
        },
        label: {
            normal: {
                show: true,
                position: 'outter',
                formatter: function(parms) {
                    return parms.data.legendname
                }
            }
        },
        labelLine: {
            normal: {
                length: 15,
                length2: 13,
                smooth: true,
            }
        },
        data: m2R2Data
    }]
};
    autoFn(m2R2Data.length)
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
    