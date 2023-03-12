let xData = ['教师获得专业（著作权）数','教师主持科研项目数','教师出版专著数','教师主编教材数']
let yData = [2900,1200,1200,1000]

option = {
    xAxis: {
        data: xData,
        axisLine:{
            lineStyle:{
                color:'#0D8AFF'
            }
        },
        axisTick:{
            show:false
        },
        axisLabel:{
            color:'#CAEEFF',
            fontSize:12
        }
    },
    yAxis: {
        axisLine:{
            show:false
        },
        splitLine:{
            lineStyle:{
                color:'#31C2FF',
                opacity:0.2,
                type:'dashed'
            }
        },
        axisLabel:{
            color:'#CAEEFF',
            fontSize:12
        }
    },
    series: [{
        type: 'bar',
        data:yData,
        itemStyle:{
            color:{
                x:0,
                y:0,
                x2:0,
                y2:1,
                colorStops:[
                    {
                        offset:0,
                        color:'#7488FF'
                    },
                    {
                        offset:1,
                        color:'#7464F2'
                    }
                ]
            }
        }
    }]
};
