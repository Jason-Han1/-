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
        data: ['中关村科学城','亦庄经开区','未来科技城','怀柔科学城'],
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
        name: '常住人口密度',
        coordinateSystem: 'singleAxis',
        data: [43460, 12089, 6336, 1884],
        symbolSize: function(value) {
            return Math.sqrt(value)*1.2
        },
        symbolOffset: [0, '-50%'],
        itemStyle: {opacity: 0.7, color: '#61a0a8'},
        label: {
            show: true,
            position: 'top',
            formatter: '{c}人/平方公里'
        }
    },{
        type: 'scatter',
        name: '工作人口密度',
        coordinateSystem: 'singleAxis',
        data: [18471, 6638, 1610, 512],
        symbolSize: function(value) {
            return Math.sqrt(value)*1.3
        },
        symbolOffset: [0, '-50%'],
        itemStyle: {opacity: 0.8, color: '#d48265'},
        label: {
            show: true,
            position: 'inside',
            formatter: '{c}人/平方公里'
        }
    }]
};
