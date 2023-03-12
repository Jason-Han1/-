option={
    tooltip: {
        //trigger(触发类型)，可选'item','axis','none'
        trigger: 'axis',
        axisPointer: {
            //指示器类型,可选'line','shadow','cross'
            type: 'shadow'
            },

            formatter:'{a0}：{c0}项<br/>{a1}：{c1}次<br/>{a2}：{c2}项<br/>{a3}：{c3}',
        },
    legend:{
        name:['科研成果','师德考核与处分','奖励与荣誉','年度考核'],
        top:'4%',
        left:'center',
        icon: "circle",
        itemGap: 14,
        textStyle:{
            fontSize:12,
            color:'#fff',
        },
    },
    grid: {
	        left: '6%',
	        right: '2%',
	        top:'26%',
	        bottom: '4%',
	        containLabel: true
	    },
    color:['#22eb94','#ff6e92','#d8c76b','#ee9452'],
    backgroundColor:'#000',
    xAxis: {
        type: 'category',
        //axisTick 坐标轴刻度相关设置
        axisTick: {
            show: false
            },
        //axixLine 坐标轴轴线相关设置
        axisLine: {
            lineStyle: {
                color: '#FFFFFF',
                }
            },
        data: ['2012','2013','2014','2015','2016','2017','2018'],
        //axisLabel 坐标轴刻度标签的相关设置
        axisLabel: {
            // show: true,
            color: '#fff',
            fontSize: 12,
            }
        },
    yAxis: [{
            name:'数量',
            type: 'value',
            axisLabel: {
                show: true,
                color: '#fff',
                fontSize: 12,
                formatter:'{value}',
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#FFFFFF'
                    }
            },
            axisTick: {
                // show: false
            },
        },{
            name:'考核指标',
            type: 'category',
            position:'right',
            axisLabel: {
                show: true,
                color: '#fff',
                fontSize: 12,
            },
            data:['未参加考核','不确定考核等级','不合格','基本合格','合格','优秀'],
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#FFFFFF'
                    }
            },
            axisTick: {
                // show: false
            },
        }
        ],
    series: [{
            name: '科研成果',
            //type决定图表类型
            type: 'bar',
            data: [2, 1, 3, 3, 5, 1, 1],
            
        },{
            name: '师德考核与处分',
            //type决定图表类型
            type: 'bar',
            data: [0, 0, 0, 1, 2, 0, 1],
            
        },{
            name: '奖励与荣誉',
            //type决定图表类型
            type: 'bar',
            data: [2, 2, 1, 2, 0, 4, 1],

        },{
            name: '年度考核',
            //type决定图表类型
            type: 'line',
            yAxisIndex:1,
            data: ['优秀','优秀','合格','基本合格','优秀','合格','优秀'],
        }
        ]
    };