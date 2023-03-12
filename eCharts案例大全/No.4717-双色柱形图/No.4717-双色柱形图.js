var option = {
    color: ['#79ffeb','#ff8920'],
    legend: {
        top: '8%',
        right: '5%',
        data: [{
           name: '处置中',
           num:100
        },{
           name:  '已处置',
           num:100
        }],
        textStyle: {
            color: '#659ab2',
            fontSize: 20
        },
        // formatter: function(params) {
        //   return params.name
        // },
    },
    grid: { //图表的位置
        show: 'true',
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true,
        borderWidth: '2',
		borderColor: '#06c9c4',
    },
    yAxis: [{
        type: 'value',
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value} ',
            textStyle: {
                color: '#06c9c4',
                fontSize: 20
            },
        },
        axisLine: {
            lineStyle: {
                color: "#06c9c4",
                width: 2
            }
        },

        splitLine: {
            show: false,
        },
        show: true,
        axisTick: {
            show: false
        },

    } ],
    xAxis: [{
        axisTick: {
            show: false
        },
        type: 'category',
        axisLine: {
            lineStyle: {
                color: "#06c9c4",
                width: 2
            }
        },
        axisLabel: {
            interval: 0,
            show: true,
            splitNumber: 15,
            textStyle: {
                color: '#06c9c4',
                fontSize: 20
            },

        },
        data: ['浦东', '黄埔', '静安', '徐汇', '长宁', '普陀', '虹口', '杨浦', '宝山', '闵行', '嘉定', '金山', '松江', '青浦', '奉贤', '崇明'],
    }],
    series: [
        {
            name: '处置中',
            type: 'bar',
            color: '#FFD52E',
            stack: 'sum1',
            barWidth: '20px',
            data: [9, 30, 9, 60, 70, 20, 59, 20, 49, 20, 60, 70, 20, 59, 20, 49, 20]

        },
        {
            name: '已处置',
            type: 'bar',
            barWidth: '20px',
            stack: 'sum',
            data: [9, 30, 9, 60, 70, 20, 59, 20, 49, 20.9, 30, 9, 60, 70, 20, 20],

        }
    ]
};