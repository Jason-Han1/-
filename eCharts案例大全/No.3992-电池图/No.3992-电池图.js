var cw = document.body.clientHeight / 70;

        var textStyle = {
            fontSize : cw,
            color: "rgba(255,255,255,0.6)",
        }
        var  axisLabel = {
            show: true,
            textStyle: {
                fontSize:cw,
                color: "rgba(255,255,255,0.6)"
            }
        }
        var axisLine = {
            lineStyle: {
                color:"rgba(221,221,221,0.1)",
            }
        }

        var lineStyle = {
            color: "rgba(221,221,221,0.1)",
        }


option = {
    backgroundColor: '#070b34',
    tooltip: {
        trigger: 'axis',
         axisPointer : { // 坐标轴指示器，坐标轴触发有效 
            type : 'line', // 默认为直线，可选为：'line' | 'shadow'
             lineStyle: {
                color:'rgba(3,214,255,0.1)',
                width:80,
                // type:solid,
            },
        },
        backgroundColor:'rgba(26,34,126,.9)',
        padding:10,
        borderRadius: 4,
        textStyle:{
            fontSize:12,
        },
        extraCssText:'box-shadow:0 0 18px rgba(255,255,255,0.2)',
       
        formatter: function(item) {
            return item[0].axisValueLabel + '<br />' + item[0].seriesName + ': ' + item[0].data
        }
    },
    legend: {
        data: ['医生', '护士', '后勤保障人员'],
        inactiveColor :'rgba(92,200,255,0.35)',
        icon:'roundRect',
        top:0,
        right:0,
        itemWidth:20,
        itemHeight:7,
        textStyle: {
            color: '#FFF'
        },
        show:true
    },
    grid: {
        top: 40,
        right: 20,
        left: 50,
        bottom: 60
    },
   xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    axisLabel:axisLabel,
                    axisLine:axisLine,
                    axisTick:{
                        show:true,
                        inside:true
                    },
                    splitLine : {
                        show : false
                    },
                    data: ['医生', '护士','后勤保障人员']
                },
    yAxis: {
                    type: 'value',
                    axisLabel:axisLabel,
                    axisLine:axisLine,
                    axisTick:{ //y轴刻度线
                        show:false
                    },
                    splitLine:{
                        show: true,
                        lineStyle: lineStyle,
                    },
                },
    series: [{
        name: '医生',
        // stack: '总量',
        type: 'pictorialBar',
        symbol: 'roundRect',
        itemStyle: {
            color: 'rgba(3,214,255,1)'
        },
        barWidth: '40%',
        symbolRepeat: true,
        symbolSize: [36, 4],
        // symbolBoundingData: 100,
        symbolMargin: 1,
        symbolPosition: 'start',
        z: -20,
        data: [120],
        label: {
            normal: {
                show: false,
                position: 'top',
                verticalAlign: 'top'
                // formatter: function(value){
                //   return value && (value.data * 100).toFixed(1) + '%'
                // }
            }
        }
    }, {
        name: '护士',
        // stack: '总量',
        type: 'pictorialBar',
        symbol: 'roundRect',
        itemStyle: {
            color: 'rgba(255,174,0,1)'
        },
        barWidth: '40%',
        symbolRepeat: true,
        symbolSize: [36, 4],
        // symbolBoundingData: 100,
        symbolMargin: 1,
        symbolPosition: 'start',
        z: -20,
        data: [0,20],
        label: {
            normal: {
                show: false,
                position: 'top',
                verticalAlign: 'top'
                // formatter: function(value){
                //   return value && (value.data * 100).toFixed(1) + '%'
                // }
            }
        }
    }, {
        name: '后勤保障人员',
        // stack: '总量',
        type: 'pictorialBar',
        symbol: 'roundRect',
        itemStyle: {
            color: 'rgba(255,39,39,1)'
        },
        barWidth: '40%',
        symbolRepeat: true,
        symbolSize: [36, 4],
        // symbolBoundingData: 100,
        symbolMargin: 1,
        symbolPosition: 'start',
        z: -20,
        data: [0,0,40],
        label: {
            normal: {
                show: false,
                position: 'top',
                verticalAlign: 'top'
                // formatter: function(value){
                //   return value && (value.data * 100).toFixed(1) + '%'
                // }
            }
        }
    }
    ]
};