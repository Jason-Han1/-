option = {
    backgroundColor:'#041422',
     tooltip: {
        // trigger: "axis",
        // axisPointer:{
        //     lineStyle:{
        //         type:'dashed',
        //         width:2,
        //         color:'#4B941A'
        //     },
        //     animation: true
        // }
    },
    legend: {
        show:false,
        left:'right',
    },
    grid:{
        show:false
    },
    yAxis: {
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(163, 163, 163, 0.5)',
                type: 'dashed'
            }
        },
        axisLabel: {
            color: '#A0A4AA'
        },
        axisLine: {
            show: true,
            lineStyle: {
            color: 'rgba(65, 97, 128, 0.5)',
            },
        },
    },
    xAxis: {
        data: ['一月', '二月', '三月', '四月', '五月', '六月'],
        axisLabel: {
            color: '#A0A4AA'
        },
        axisLine: {
            show: true,
            lineStyle: {
            color: 'rgba(65, 97, 128, 0.5)',
            },
        },
        axisTick: {
            alignWithLabel: true
        }
    },
    series:[
        {
            name:'a',
            type: 'scatter',
            symbol: 'circle',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function (data) {
                console.log('data',data)
                return Math.sqrt(data) * 3;
            },
            label: {
                // emphasis: {
                //     show: true,
                //     formatter: function (param) {
                //         return param.data[2];
                //     },
                //     position: 'top'
                // }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(0, 255, 254, 0.53)',
                    borderWidth: 1,
                    color: new echarts.graphic.RadialGradient(0.5, 0, 1, [{
                        offset: 0.03,
                        color: 'rgba(30, 136, 207, 0.23)'
                    }, {
                        offset: 0.96,
                        color: 'rgba(11, 243, 178, 0.29)'
                    }])
                }
            },
            data:[20,50,80,100,500,900]
        },
   ]
};