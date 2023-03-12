var dataAll = {
    object: 90,
    process_name: ['投入站', '极耳尺寸检查', 'PCM信息绑定', '焊点检查', '成品尺寸测试', '成品功能测试', '成品外观', '打包扫描'],

    pass_count:[220, 182, 191, 234, 290, 330, 310, 310],
    input_count:[220, 182, 191, 234, 290, 330, 310, 310]
};
var markLineOpt = {
    data: [{
        name: '目标',
        yAxis: dataAll.object,
        label: {
            normal: {
                show: true,
                position: 'start',
                textStyle: {
                    fontSize: 14
                },
                formatter: '目标:{c}%'
            }
        },
        lineStyle: {
            color: '#60b044',
            width: 2,
            type: 'solid'
        }
    }]
};
option = {
    color: ['#6ca1ff', '#4db64d', '#ff7900'],
    legend: {
        bottom: 0
    },
    xAxis: {
        data: dataAll.process_name
    },
    yAxis: [{
        name:'良品率',
        axisLabel: {
            formatter: '{value} %'
        },
        splitLine: { show: false },
        max: function(value) {
            return Math.max(value.max + 1, dataAll.object + 1);
        }
    }, {
        show: false
    }],
    series: [{
        type: 'bar',
        name: '投入数',
        label: {
            position: 'top',
            show: true,
            color: '#333'
        },
        yAxisIndex: 1,
        data: dataAll.input_count
    }, {
        type: 'bar',
        name: '良品数',
        label: {
            position: 'top',
            show: true,
            color: '#333'
        },
        itemStyle:{
            color:function(item){
                console.log(item);
                if(item.dataIndex)
                return '#4db64d';
                
            }
        },
        yAxisIndex: 1,
        data: dataAll.pass_count
    }, {
        type: 'line',
        name: '良品率',
        label: {
            position: 'top',
            formatter: '{c} %',
            show: true,
            color: '#333'
        },
        markLine: markLineOpt,
        data: [90, 88, 99, 100, 80, 60, 70, 70]
    }]
};