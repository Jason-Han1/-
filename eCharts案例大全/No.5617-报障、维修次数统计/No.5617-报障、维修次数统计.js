options = [{
    backgroundColor:'#FFFFFF',
    title: {
        text: '报障、维修次数统计'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            //magicType: {show: true, type: ['stack', 'tiled']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: ['报障次数', '维修次数']
    },
    
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
         data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    }],
    yAxis: [{
        type: 'value',
        //name: '投诉举报数',
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
        name: '报障次数',
        type: 'bar',
        itemStyle:{
            normal:{color:'#01949B'},
        },
        // markPoint : {
        //         data : [
        //             {type : 'max', name : '最大值'},
        //              {type : 'min', name : '最小值'}
        //         ]
        //     },
        //     markLine : {
        //         data : [
        //             {type : 'average', name : '平均值'}
        //         ]
        //     },
        data: [50, 60, 20, 18, 25,26, 28, 0, 5,32,33,40]
    }, {
        name: '维修次数',
        type: 'bar',
        itemStyle:{
            normal:{color:'#EBA954'},
        },
        // markPoint : {
        //         data : [
        //             {type : 'max', name : '最大值'},
        //              {type : 'min', name : '最小值'}
        //         ]
        //     },
        //     markLine : {
        //         data : [
        //             {type : 'average', name : '平均值'}
        //         ]
        //     },
        data: [50, 65, 22, 18, 30,26, 28, 3, 8,32,33,42]
    }]
}
];