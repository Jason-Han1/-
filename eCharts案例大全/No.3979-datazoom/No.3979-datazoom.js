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
    backgroundColor: '#000',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(item) {
            return item[0].axisValueLabel + '<br />' + item[0].seriesName + ': ' + item[0].data
        }
    },
     dataZoom: [
        {
            show: true,
            realtime: true,
            start: 65,
            end: 85,
            height: 20,//这里可以设置dataZoom的尺寸
            backgroundColor: 'rgba(47,69,8,0)',
            borderColor: 'rgba(255,255,255,0.2)' ,
            fillerColor: 'rgba(255,255,255,0.2)',
            textStyle:{
              color:'rgba(213,241,255,0.6)'  
            },
            //抓手的自定义 
        }
    ],
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
                    data: ['2011年', '2012年','2013年','2014年','2015年','2016年','2017年','2018年','2019年','2020年']
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
        name: '已完成',
        stack: '总量',
        type: 'pictorialBar',
        symbol: 'roundRect',
        itemStyle: {
            color: 'rgba(255,255,0,1)'
        },
        barWidth: '40%',
        symbolRepeat: true,
        symbolSize: [30, 4],
        // symbolBoundingData: 100,
        symbolMargin: 1,
        symbolPosition: 'start',
        z: -20,
        data: [120, 120, 120, 80, 70, 110, 130, 130, 130, 130],
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
        name: '未完成',
        stack: '总量',
        type: 'pictorialBar',
        symbol: 'roundRect',
        itemStyle: {
            color: 'rgba(72,252,255,1)'
        },
        barWidth: '40%',
        symbolRepeat: true,
        symbolSize: [30, 4],
        // symbolBoundingData: 100,
        symbolMargin: 1,
        symbolPosition: 'start',
        z: -20,
        data: [20, 30, 50, 20, 70, 30, 50, 30, 20, 30],
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
    },{
        name: '',
        type: 'pictorialBar',
        symbol: 'roundRect',
         itemStyle: {
            color: 'rgba(27,183,255,0.14)'
        },
         barWidth: '40%',
        symbolRepeat: true,
        symbolSize: [30, 4],
        // symbolBoundingData: 100,
        symbolMargin: 1,
        symbolPosition: 'start',
      
        label: {
            show: false
        },
        z: -10,
        data: [200, 200, 200, 200, 200, 200, 200, 200, 200, 200]
    }]
};