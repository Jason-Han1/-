 
var getname =[2,3,5];
var getvalue =[2,3,5];

var maxnum=Math.max.apply(null,getvalue);
var maxlen=Math.pow(10,String(Math.ceil(maxnum)).length-2);
console.log(maxlen);
if(maxnum>=5){
    var max = Math.ceil(maxnum / (9.5*maxlen))*maxlen*10;
}else{
    var max = 5;
}

option = {
    grid: {
       // containLabel: true,
        left: 60,
        top: 10,
        right: 10,
        bottom: 35
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            lineStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0,0,0,0)' // 0% 处的颜色
                    }, {
                        offset: 0.3,
                        color: 'rgba(0,225,231,0.59)' // 100% 处的颜色
                    }, {
                        offset: 0.7,
                        color: 'rgba(0,225,231,0.59)' // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0,0,0,0)' // 100% 处的颜色
                    }],

                }
            }
        },
        confine: true,
        formatter: '{b}月消费金额: {c}万元',
    },
    xAxis: {
        type: 'category',
        data: getname,
        axisLabel: {
            //interval: 0,
            margin: 20,
            color: '#A9C1E5',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: max, // 计算最大值
        interval: max / 5, //  平均分为5份
        splitNumber: 5,
        axisLabel: {
            color: '#A9C1E5',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [{
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 2,
        data: getvalue,
        lineStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0,0,0,0)' // 0% 处的颜色
                    }, {
                        offset: 0.2,
                        color: '#00E4FF' // 100% 处的颜色
                    }, {
                        offset: 0.8,
                        color: '#00E4FF' // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0,0,0,0)' // 100% 处的颜色
                    }],

                },
                width: 2,
                shadowColor: 'rgba(0,132,255,0.14)',
                shadowBlur: 8,

            },
        },
        itemStyle: {
            normal: {
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0,
                        color: '#fff'
                    }, {
                        offset: 0.8,
                        color: '#00E4FF'
                    }, {
                        offset: 1,
                        color: '#00E4FF'
                    }],
                    global: false // 缺省为 false
                },
                borderColor: 'rgba(0, 236, 242, 0.35)',
                borderWidth: 10,
                opacity: 0,
            }
        },
        emphasis: {
            itemStyle: {
                opacity: 1
            }
        }
    }]
};


let i = 0
setInterval(function(){
    i = i === getname.length ? 0 : i+1
	myChart.dispatchAction({
        type: 'showTip',
        seriesIndex:0,  // 显示第几个series
        dataIndex: i // 显示第几个数据
    });
}, 2000)
myChart.setOption(option);
window.addEventListener("resize",function(){   
	setTimeout(function(){
		myChart.resize();
	},2000);
});
