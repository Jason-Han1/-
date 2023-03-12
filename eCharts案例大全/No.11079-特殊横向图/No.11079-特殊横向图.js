// 指定图表的配置项和数据
var data1 = [20, 30, 20];
var data2 = [9, 30, 9];
var data3 = [20, 30, 20,];
var data4 = [9, 30, 9];
var datacity = ['已完成投资(万元)', '项目建设资金(万元)', '项目资本金(万元)'];
var option = {
    backgroundColor: '#666',
    color: ['#388BFF', '#05C3FA', '#F6931C', '#FFD52E'],
    tooltip: {
        trigger: 'axis',
    },
    legend: {

        top: '8%',
        data: ['存量', '新增', '拆除', '整改'],
    },
    grid: { //图表的位置
        top: '20%',
        left: '3%',
        right: '10%',
        bottom: '5%',
        containLabel: true
    },
    yAxis: [{
        // type: 'value',
        // axisLabel: {
        //     show: true,
        //     interval: 'auto',
        //     formatter: '{value} '
        // },
        // splitLine: {
        //     show: true,
        //     lineStyle: {
        //         type: 'dashed'
        //     }
        // },
        // show: true
        type: 'category',
        axisLabel: {
            interval: 0,
            show: true,
            splitNumber: 15,
            textStyle: {
                fontSize: 10,
                color: '#000'
            },

        },
        data: datacity,

    }],
    xAxis: [{
        // type: 'category',
        // axisLabel: {
        //     interval: 0,
        //     show: true,
        //     splitNumber: 15,
        //     textStyle: {
        //         fontSize: 10,
        //         color: '#000'
        //     },

        // },
        // data: datacity,
          type: 'value',
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value} '
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed'
            }
        },
        show: true
    }],
    series: [
        {
            name: '存量',
            type: 'bar',
            stack: 'sum',
            barWidth: '20px',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: data1

        },
        {
            name: '新增',
            type: 'bar',
            barWidth: '20px',
            stack: 'sum',
            data: data2,
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },

        },
        {
            name: '',
            type: 'bar',
            barWidth: '20px',
            stack: 'sum',
            data: [0,0,0],
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '厂区建设',
                }
            },
            
        },
        {
            name: '拆除',
            type: 'bar',
            color: '#F6931C',
            stack: 'sum1',
            barWidth: '20px',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: data3

        },
        {
            name: '整改',
            type: 'bar',
            color: '#FFD52E',
            stack: 'sum1',
            barWidth: '20px',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: data3

        },
        {
            name: '',
            type: 'bar',
            barWidth: '20px',
            stack: 'sum1',
            data: [0,0,0],
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '管网建设',
                }
            },
            
        },
    ]
};