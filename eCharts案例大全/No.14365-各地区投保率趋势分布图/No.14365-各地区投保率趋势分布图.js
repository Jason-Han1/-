//各地区投保率趋势分布图
option = {
     title: [{
        text: '各地区投保率趋势分布图',
        subtext: '内部数据',
        left: 'left',
        textStyle: {
            color: '#fff'
        },
    }],
    textStyle: {
        color: 'white'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },

    legend: {
        data: ['投保率', '幼儿园', '中小学', '中职院校', '高等院校'],
        textStyle: {
            color: 'white'
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: [{
        type: 'value',
        name: '人数',
        min: 0,
        position: 'left',
        axisLabel: {
            formatter: '{value} 人'
        }
    }, {
        type: 'value',
        name: '投保率',
        min: 0,
        position: 'right',
        axisLabel: {
            formatter: '{value} %'
        }
    }],
    xAxis: {
        type: 'category',
        data: ['南昌', '景德镇', '萍乡', '九江', '新余', '鹰潭', '赣州', '吉安', '宜春', '抚州', '上饶'],
    },
    series: [{
        name: '投保率',
        type: 'line',
        yAxisIndex: 1,
        data: [22.1, 19.6, 20.1, 17.1, 18.3, 17.7, 16.9, 17.5, 15.7, 15.4, 17.1]
    }, {
        name: '幼儿园',
        type: 'bar',
        stack: '人数',

        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: [13234, 11345, 13543, 10654, 10643, 11678, 10789, 10895, 9678, 9567, 10678]
    }, {
        name: '中小学',
        type: 'bar',
        stack: '人数',

        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: [23445, 21345, 16543, 17654, 19643, 15678, 16789, 17895, 15678, 14567, 15678]
    }, {
        name: '中职院校',
        type: 'bar',
        stack: '人数',

        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: [13234, 11345, 13543, 10654, 10643, 11678, 10789, 10895, 9678, 9567, 10678]
    }, {
        name: '高等院校',
        type: 'bar',
        stack: '人数',

        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: [13234, 11345, 13543, 10654, 10643, 11678, 10789, 10895, 9678, 9567, 10678]

    }]
};