var dataSource = [
                {
                    time: '6月',
                    value: 14,
                    value1: 12,
                    value2: 12
                },
                {
                    time: '7月',
                    value: 10,
                    value1: 14,
                    value2: 14
                },
                {
                    time: '8月',
                    value: 14,
                    value1: 12,
                    value2: 12
                },
                {
                    time: '9月',
                    value: 10,
                    value1: 14,
                    value2: 14
                },
                {
                    time: '10月',
                    value: 16,
                    value1: 6,
                    value2: 6
                },
                {
                    time: '11月',
                    value: 7,
                    value1: 13,
                    value2: 13
                },
                {
                    time: '12月',
                    value: 15,
                    value1: 4,
                    value2: 4
                },
                {
                    time: '1月',
                    value: 9,
                    value1: 9,
                    value2: 9
                },
                {
                    time: '2月',
                    value: 18,
                    value1: 4,
                    value2: 6
                },
                {
                    time: '3月',
                    value: 13,
                    value1: 7,
                    value2: 9
                },{
                    time: '4月',
                    value: 18,
                    value1: 4,
                    value2: 6
                },
                {
                    time: '5月',
                    value: 13,
                    value1: 7,
                    value2: 9
                }
            ]
option = {
    backgroundColor: '#ccc',
    color: [new echarts.graphic.LinearGradient(
        0, 1, 0, 0,
        [
            {offset: 0, color: '#337bff'},
            {offset: 1, color: '#24bfff'}
        ]
    ), new echarts.graphic.LinearGradient(
        0, 1, 0, 0,
        [
            {offset: 0, color: '#ff664c'},
            {offset: 1, color: '#ff8f4c'}
        ]
    ),new echarts.graphic.LinearGradient(
        0, 1, 0, 0,
        [
            {offset: 0, color: '#15daf1'},
            {offset: 1, color: '#15f1e9'}
        ]
    )],
    legend: {
        right: '5%',
        top: '5%',
        shadowColor: '#ffffff',
        shadowOffsetY: 2,
        data: [{
            name:'编内',
            icon: 'circle',
            textStyle:{
                fontSize:16,
                color: '#ffffff'
            }
        }, {
            name:'编外',
            icon: 'circle',
            textStyle:{
                fontSize:16,
                color: '#ffffff'
            }
        }, {
            name:'外拓',
            icon: 'circle',
            textStyle:{
                fontSize:16,
                color: '#ffffff'
            }
        }]

    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                opacity: 0
            }
        }
    },
    grid: {
        top: '23%',
        left: '8%',
        right: '3%',
        bottom: '10%'
    },
    xAxis: [{
        type: 'category',
        data: dataSource.map((item) => (item.time)),
        axisTick: {
           show: false
        },
        axisLine:{
            show: true,
            lineStyle:{
                width: 2,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 1, 0,
                    [
                        {offset: 0, color: 'rgba(35, 128, 255, 0)'},
                        {offset: 0.5, color: 'rgba(103, 167, 255, 1)'},
                        {offset: 1, color: 'rgba(35, 128, 255, 0)'}
                    ]
                )
            }
        },
        axisLabel: {
            show: true,
            color: 'rgba(255,255,255,0.8)',
            fontSize: 16
        }
    }],
    yAxis: [{
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle:{
                color: new echarts.graphic.LinearGradient(
                    0, 0, 1, 0,
                    [
                        {offset: 0, color: 'rgba(255, 255, 255, 0)'},
                        {offset: 0.5, color: 'rgba(255, 255, 255, 0.4)'},
                        {offset: 1, color: 'rgba(255, 255, 255, 0)'}
                    ]
                )
            }
        },
        axisLabel: {
            show: true,
            color: 'rgba(255,255,255,0.8)',
            fontSize: 16,
            formatter: '{value}k'
        }
    }],
    series: [{
        name: '编内',
        type: 'bar',
        stack: '总量',
        barWidth: '40%',
        barMaxWidth: '40%',
        data: dataSource.map((item)=>{
            return {
                value: item.value,
                itemStyle:{
                    borderWidth: 1,
                    borderColor: new echarts.graphic.LinearGradient(
                                0, 1, 0, 0,
                                [
                                    {offset: 0, color: 'rgba(255, 255, 255, 0)'},
                                    {offset: 1, color: 'rgba(255, 255, 255, 0.8)'},
                                ]
                            )
                }
            }
        })
    }, {
        name: '编外',
        type: 'bar',
        stack: '总量',
        barWidth: '40%',
        barMaxWidth: '40%',
        data: dataSource.map((item)=>{
            return {
                value: item.value,
                itemStyle:{
                    borderWidth: 1,
                    borderColor: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: 'rgba(255, 255, 255, 0.8)'},
                                    {offset: 1, color: 'rgba(255, 255, 255, 0.8)'},
                                ]
                            )
                }
            }
        })
    },{
        name: '外拓',
        type: 'bar',
        stack: '总量',
        barWidth: '40%',
        barMaxWidth: '40%',
        itemStyle: {
            barBorderRadius: [5, 5, 0, 0] 
        },
        data: dataSource.map((item)=>{
            return {
                value: item.value,
                itemStyle:{
                    borderWidth: 1,
                    borderColor: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: 'rgba(255, 255, 255, 0)'},
                                    {offset: 1, color: 'rgba(255, 255, 255, 0.8)'},
                                ]
                            )
                }
            }
        })
    }]
};