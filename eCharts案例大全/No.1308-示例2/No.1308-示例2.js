option = {
    title: {
        text: '三城一区人口密度对比图',
        top: '10%',
        left: '35%',
        textStyle: {fontSize: 22}
    },
    singleAxis: {
        type: 'category',
        bottom: '50%',
        top: '50%',
        right: '10%',
        data: ['中关村科学城'],
        axisLabel: {fontSize: 16, fontWeight: 'bold'},
        axisLine: {show: false},
        axisTick: {show: false}
    },
    legend: {
        show: true,
        left: '35%',
        top: '15%',
        textStyle: {fontSize: 14},
        itemWidth: 20,
        itemHeight: 20
    },
    series: [{
        type: 'scatter',
        name: '人口密度1',
        coordinateSystem: 'singleAxis',
        data: [43460],
        symbolSize: function(value) {
            return Math.sqrt(value)*1.2
        },
        symbolOffset: [0, '-50%'],
        itemStyle: {opacity: 0.7, color: '#35a488'},
        label: {
            show: true,
            position: 'top',
            formatter: '{c}人/平方公里'
        }
    },{
        type: 'scatter',
        name: '人口密度2',
        coordinateSystem: 'singleAxis',
        data: [18471],
        symbolSize: function(value) {
            return Math.sqrt(value)*1.3
        },
        symbolOffset: [0, '-50%'],
        itemStyle: {opacity: 0.8, color: '#e5db58'},
        label: {
            show: true,
            position: 'inside',
            formatter: '{c}人/平方公里'
        }
    },{
        type: 'scatter',
        name: '人口密度3',
        coordinateSystem: 'singleAxis',
        data: [12471],
        symbolSize: function(value) {
            return Math.sqrt(value)*1.3
        },
        symbolOffset: [0, '-50%'],
        itemStyle: {opacity: 0.8, color: '#02a3fc'},
        label: {
            show: true,
            position: 'inside',
            formatter: '{c}人/平方公里'
        }
    },{
        type: 'scatter',
        name: '人口密度4',
        coordinateSystem: 'singleAxis',
        data: [9471],
        symbolSize: function(value) {
            return Math.sqrt(value)*1.3
        },
        symbolOffset: [0, '-50%'],
        itemStyle: {opacity: 0.8, color: '#ea922c'},
        label: {
            show: true,
            position: 'inside',
            formatter: '{c}人/平方公里'
        }
    },{
        type: 'scatter',
        name: '人口密度5',
        coordinateSystem: 'singleAxis',
        data: [4471],
        symbolSize: function(value) {
            return Math.sqrt(value)*1.3
        },
        symbolOffset: [0, '-50%'],
        itemStyle: {opacity: 0.8, color: '#40e4f7'},
        label: {
            show: true,
            position: 'inside',
            formatter: '{c}人/平方公里'
        }
    }]
};