option = {
        backgroundColor: '#F4F9FF',
        tooltip: {
            formatter: "{a} <br/>{b} : {c}"
        },
        legend: {
            top:'10px',
            data: ['2018级（当前）', '2017级', '2016级']
        },
        xAxis: [
            {
                splitLine:{
                    show:false
                },
                axisLabel:false,
                max:0.6,
                type: 'value',
                axisTick: {show: false},
                axisLine:{
                    symbol:['none','arrow'],
                    symbolSize:[10,10],
                    symbolOffset:[0, 25],
                    lineStyle:{
                        color:'#000000',
                        //利用阴影进行延长
                        shadowOffsetX:25,	//！！！！！！！！！
                        shadowColor:'#000000'
                    }
                },
            }
        ],
        yAxis: [
            {
                splitLine:{
                    show:true
                },
                axisTick: {show: false},
                type: 'category',
                data: ['课程1', '课程2', '课程3', '课程4', '课程5', '课程6','课程7','课程8'],
                    axisTick: {show: false},
                    axisLine:{
                        symbolSize:[10,10],
                        symbol:['none', 'arrow'],
                        symbolOffset:[0, 25],
                        lineStyle:{
                            width:2,
                            color:'#000000',
                            //利用阴影进行延长
                            shadowOffsetY:-23,	//！！！！！！！！！
                            shadowColor:'#000000'
                        }
                    },
            }
        ],
        series: [
            {
                name: '2018级（当前）',
                type: 'bar',
                barGap: 0,
                barWidth : 11,
                itemStyle:{color:'#B6A2DE'},
                data: [0.5,0.5, 0.5, 0.5, 0.5, 0.45, 0.5, 0.5],
            },
            {
                name: '2017级',
                type: 'bar',
                barWidth : 11,
                barGap: 0,
                itemStyle:{color:'#FFB880'},
                data: [0.5,0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
            },
            {
                name: '2016级',
                type: 'bar',
                barWidth : 11,
                barGap: 0,
                itemStyle:{color:'#2EC8CA'},
                data: [0.5,0.5, 0.48, 0.5, 0.5, 0.5, 0.5, 0.5],
            },
        ]
};