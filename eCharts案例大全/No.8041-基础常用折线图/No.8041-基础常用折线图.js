let date = '2020-03-25'
option = {
            tooltip: {
                trigger: 'axis',
                formatter(params){
                    return `<div>${date} ${params[0].axisValue}<br/>${params[0].marker}${params[0].seriesName}：${params[0].value}<br/>${params[1].marker}${params[1].seriesName}：${params[1].value}</div>`
                }
            },
            legend: {
              show: true,
              left: '5%'
            },
            grid: {
                top: 'middle',
                left: '3%',
                right: '4%',
                bottom: '3%',
                height: '80%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: [1,2,3,4,5,6,7],
                axisLine: {
                    lineStyle: {
                        color: "#D9D9D9",
                    }
                },
                axisLabel:{
                    color:'#5F5F5F',
                    fontSize: 14,
                },
                axisTick:{
                    show:true,
                },
                boundaryGap:false,
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: '#E9E9E9',
                        width:2
                    }
                },
                axisTick:{
                    show:false,
                },
                axisLine: {
                    show: false,
                },
                axisLabel:{
                    color:'#5F5F5F',
                    fontSize: 14,
                },
                splitArea: {
                    show: false
                },
            },
            series: [{
                name: '人工坐席首解率',
                type: 'line',
                symbol:'circle',
                data: [20,30,80,10,90,50,80],
                color: "#13C7F2",
                lineStyle: {
                    normal: {
                        width: 2.5,
                        color: '#13C7F2',
                    }
                },
                smooth:false,
            },{
                name: '客户满意度',
                type: 'line',
                symbol:'circle',
                data: [100,20,30,80,90,40,10],
                color: "#F9CE81",
                lineStyle: {
                    normal: {
                        width: 2.5,
                        color: '#F9CE81',
                    }
                },
                smooth:false,
            }
            ]
        };