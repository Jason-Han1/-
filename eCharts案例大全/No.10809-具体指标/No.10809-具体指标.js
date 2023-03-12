option = {
    backgroundColor: "white",
    tooltip : {
        show: false,
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['正常', '轻度','中度','重度'],
        orient: 'vertical',
        left: '5%',
        top: '30%',
        x: "left",
        y: "center"
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '40%',
        containLabel: true
    },
    yAxis:  {
        type: 'value',
        show: false
    },
    xAxis: {
        type: 'category',
        data: ['人均预期寿命','婴儿死亡率','5岁以下儿童死亡率','孕产妇死亡率']
    },
    series: [
        {
            name: '正常',
            type: 'bar',
            barWidth : 20,
            stack: '总量',
            itemStyle: {
                color: 'lightseagreen'
            },
            markPoint:{
                symbol: 'arrow',
                symbolSize: [15, 25],
                symbolRotate:90,
                symbolOffset: ['20%', 0],
                silent: true,
                itemStyle: {
                    color: 'silver'
                },
                label:{
                    position:'right',
                    formatter: '正常'
                },
                data:[{
                    name:'5岁以下儿童死亡率',
                    coord: ['5岁以下儿童死亡率', 10]
                },
                {
                    name:'孕产妇死亡率',
                    coord: ['孕产妇死亡率', 8]
                },
                {
                    name:'人均预期寿命',
                    coord: ['人均预期寿命', 15]
                }
                    ]
            },
            data: [25, 25, 25, 25]
        },
        {
            name: '轻度',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                color: 'cornflowerblue'
            },
            markPoint:{
                symbol: 'arrow',
                symbolSize: [15, 25],
                symbolRotate:90,
                symbolOffset: ['20%', 0],
                silent: true,
                itemStyle: {
                    color: 'silver'
                },
                label:{
                    position:'right',
                    formatter: '轻度'
                },
                data:[{
                    name:'婴儿死亡率',
                    coord: ['婴儿死亡率', 30]
                }]
            },
            data: [25, 25, 25, 25]
        },
        {
            name: '中度',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                color: 'gold'
            },
            data: [25, 25, 25, 25]
        },
        {
            name: '重度',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                color: 'orangered'
            },
            label:{
                show:false,
                color:'silver',
                fontSize:16,
                fontWeight:'bold',
                position:'top',
                formatter: '正常'
            },
            data: [25, 25, 25, 25]
        }
    ]
};