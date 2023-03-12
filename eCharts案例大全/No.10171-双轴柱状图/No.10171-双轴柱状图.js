// 指定图表的配置项和数据
var data1 = [20, 30, 20, 30, 20, 30, 200];
var data2 = [9, 30, 9, 60, 70, 200, 59];
var data3 = [20, 30, 20, 30, 20, 30, 20];
var rate = [70,95,97,98,99,100,95]
var datacity = ['6.12', '6.13', '6.14', '6.15', '6.16', '6.17', '6.18'];
var option = {
    backgroundColor:'#061644',
    color: ['#265CAE', '#5CBDEA', '#AE56B4'],
    tooltip: {
        trigger: 'axis',
    },
    legend: {

        top: '8%',
        data: ['下发总条数', '下发成功条数', '一分钟短信条数','时延达标率'],
        textStyle:{
            color:'#C8D6EE',
            fontSize:14
        }
    },
    grid: { //图表的位置
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    yAxis: [{
        type: 'value',
        name:'单位:万',
        nameTextStyle:{
                        color:'#C8D6EE',
                        fontSize:14,
                        lineHeight: 20,
                    },
         position:'right',
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value} ',
            color: '#C8D6EE',
            fontSize:14
        },
         axisLine: {
            lineStyle: {
                color: '#B4B4B4',
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                type: 'dashed'
            }
        },
        show: true
        

    },
    {
        type: 'value',
        position:'left',
        name:'单位:%',
        nameTextStyle:{
                        color:'#C8D6EE',
                        fontSize:14,
                        lineHeight: 20,
                    },
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value} ',
             color: '#C8D6EE',
              fontSize:14
        },
         axisLine: {
            lineStyle: {
                color: '#B4B4B4',
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                type: 'dashed'
            }
        },
        show: true

    }],
    xAxis: [{
        type: 'category',
        axisLabel: {
            interval: 0,
            show: true,
            splitNumber: 15,
            textStyle: {
                fontSize: 10,
                color: '#C8D6EE'
            },

        },
         axisLine: {
            lineStyle: {
                color: '#B4B4B4',
            }
        },
        data: datacity,
    }],
    series: [
        {
        name: '时延达标率',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 8,
        yAxisIndex: 1,
        itemStyle: {
                normal: {
                color:'#3376B5'},
        },
        data: rate
    }, {
            name: '下发总条数',
            type: 'bar',
            stack: 'sum',
            barWidth: '20px',
            data: data1

        },
        {
            name: '下发成功条数',
            type: 'bar',
            barWidth: '20px',
            stack: 'sum',
            data: data2,

        },
        {name: '一分钟短信条数',
            type: 'bar',
            barWidth: '20px',
            stack: 'sum',
            data: data3,

        },
    ]
};