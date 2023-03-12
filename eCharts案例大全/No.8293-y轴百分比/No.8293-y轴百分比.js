let date = '2020-03-025'
option = {
            tooltip: {
                trigger: 'axis',
                formatter(params){
                    return `<div>${date} ${params[0].axisValue}<br/>${params[0].seriesName}：${params[0].value}<br/>${params[1].seriesName}：${params[1].value}%</div>`
                }
            },
            legend: {
                color: ["#13C7F2", "#F9CE81"],
                data: ['人工坐席首解率', '客户满意度'],
                icon: 'rect',
                itemWidth: 18,
                itemHeight: 2,
                itemGap: 13,
                right: '4%',
                textStyle: {
                    fontSize: 12,
                    color: '#000'
                }
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
                data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
                axisLine: {
                    lineStyle: {
                        color: "#f2f2f2",
                    }
                },
                axisLabel:{
                    color:'#999',
                    fontWeight:'bold'
                },
                axisTick:{
                    show:false,
                },
                axisPointer:{
                    lineStyle:{
                        color:'#D11F1F'
                    }
                },
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#f2f2f2',
                        width:2
                    }
                },
                axisTick:{
                    show:false,
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#999",
                    },
                },
                axisLabel:{
                    formatter: '{value}%',
                    fontWeight:'bold'
                },
                splitArea: {
                    show: false
                },
            },
            series: [{
                name: '人工坐席首解率',
                type: 'line',
                symbol:'none',
                data: [{value:10,
                    symbolSize:10,
                    symbol:'emptyCircle'},20,45,15,{value:90,
                    symbolSize:10,
                    symbol:'emptyCircle'},20,10,80,50,{value:100,
                    symbolSize:10,
                    symbol:'emptyCircle'},10,60,40,10,{value:40,
                    symbolSize:10,
                    symbol:'emptyCircle'}],
                color: "#13C7F2",
                lineStyle: {
                    normal: {
                        width: 2.5,
                        color: '#13C7F2',
                    }
                },
                hoverAnimation:false,
                smooth:true,
            },{
                name: '客户满意度',
                type: 'line',
                symbol:'none',
                data:  [{value:20,
                    symbolSize:10,
                    symbol:'emptyCircle'},30,70,10,{value:50,
                    symbolSize:10,
                    symbol:'emptyCircle'},100,50,20,90,{value:30,
                    symbolSize:10,
                    symbol:'emptyCircle'},50,40,40,60,{value:90,
                    symbolSize:10,
                    symbol:'emptyCircle'}],
                color: "#F9CE81",
                lineStyle: {
                    normal: {
                        width: 2.5,
                        color: '#F9CE81',
                    }
                },
                hoverAnimation:false,
                smooth:true,
            }
            ]
        };