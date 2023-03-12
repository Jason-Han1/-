var scale = 1;
var echartData = [{
    value: 90,
    name: '已完成'
}, {
    value: 10,
    name: '未完成'
}]

option = {
    backgroundColor: '#031f2d',
    title: {
        text: '完成率',
        left: 'center',
        top: '55%',
        padding: [10, 0],
        textStyle: {
            color: '#6B9DD7',
            fontSize: 18 * scale,
            fontWeight: 'normal',
            align: 'center'
        }
    },
    legend: {
        selectedMode: false,
        formatter: function(name) {
            var total = 0; //各科正确率总和
            var averagePercent; //综合正确率
            echartData.forEach(function(value, index, array) {
                total += value.value;
            });
            return '95%';
        },
        data: [echartData[0].name],
        // data: ['高等教育学'],
        // itemGap: 50,
        left: 'center',
        top: 'center',
        icon: 'none',
        align: 'center',
        textStyle: {
            color: "#6B9DD7",
            fontSize: 50,
            // rich: rich
        },
    },
    series: [{
        name: '总考生数量',
        type: 'pie',
        radius: ['42%', '50%'],
        hoverAnimation: false,
        color: ['#fc962c', '#d83472', '#0F9AF8', '#2B63D5', '#2039C3', '#2ECACE', '#6F81DA'],
        label: {
            normal: {
                position: 'inner',
                show: false
            }
        },
        data: echartData
    }]
};