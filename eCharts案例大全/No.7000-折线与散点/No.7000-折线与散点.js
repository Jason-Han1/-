option = {
    backgroundColor: '#fff',
    grid: {
        top: '5%',
        left: '5%',
        //right: '10%',
        //right: '1%',
        right: '6%',
        bottom: '15%',
        // containLabel: true
    },
    tooltip: {
        trigger: "xAxis", //若需要使用默认的『显示』『隐藏』触发规则，则可以去掉trigger的配置
        axisPointer: {
            type: "cross",
            show: true
        },
        formatter: '{a}{b}{c}' //默认触发规则中散点展示的内容，{a}标题;{b}X坐标;{c}Y坐标
    },
    /*toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'scatter']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },*/
    dataZoom: [{
        type: 'slider', //显示拖拽功能,X轴下的时间长度数据
    }, ],
    legend: {
        data: ['随机点1', '积灰预测', '喘振', '防喘振'],
        left: 'right',
    },
    xAxis: [{
        type: 'category',
        name: '喉部差压',
        data: ['110', '220', '300', '400', '500', '6500', '777', '888', '889', '910', '920', '999'],
        axisPointer: {
            type: 'shadow',
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#005F97'
            },
        },
        /*axisLine:{
            symbol:['none', 'path://M5,20 L5,5 L8,8 L5,2 L2,8 L5,5 L5.3,6 L5.320'],
            symbolOffset:10,
            symbolSize:[35, 38],
        },*/
    }, ],
    yAxis: [{
            type: 'value',
            name: '排气压力',
            min: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#005F97'
                },
            },
            splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(0,0,0,0.1)'
                }
            },
            axisTick: {
                show: false,
            },
        },

    ],
    series: [
        /*{
                    name: '随机点1',
                    type: 'scatter',
                    data: [2.0, 56.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3, 5.8, 99]
                },*/

        {
            name: '喘振',
            type: 'line',
            smooth: true,
            data: [10, 20, 39, 40, 45, 50, 45, 60, 52, 66, 65, 60],
        },
        {
            name: '防喘振',
            type: 'line',
            smooth: true,
            data: [11, 25, 48, 50, 55, 60, 62, 60, 62, 66, 78, 70],
        },
        {
            name: '积灰预测',
            type: 'scatter',
            data: [
                ['910', 28],
                ['920', 44],
                ['999', 6.6],
                ['889', 2.5],
                ['910', 8],
                ['910', 38],
                ['920', 4.4],
                ['999', 66],
                ['889', 25],
                ['910', 18]
            ] //区别于第一种方法，[x,y] 分别对应x和y轴上的坐标，可以自定义位置。而第一种只能按照已有的x坐标顺序排序
        },
    ]
};