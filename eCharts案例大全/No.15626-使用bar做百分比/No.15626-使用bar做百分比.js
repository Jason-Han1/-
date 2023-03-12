option = {
    title: {
        text: '百分比'
    },
       legend: {
        data:['人工', '自动']
    },
    xAxis: {
        data: [],
        type:'value',
        show:false,
         axisTick: {
                show: false
            }
    },
    yAxis: {
        type: 'category',
        show:false,
         axisTick: {
                show: false
            }
    },
    series: [{
        type: 'bar',
        name:'人工',
        data:[10],
        stack: 'income',
            barWidth: 30,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function(obj) {
                        return obj.value + '%';
                    }
                }
            }
    },{
        type:'bar',
         name:'自动',
        data:[90],
        stack: 'income',
            barWidth: 30,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function(obj) {
                        return obj.value + '%';
                    }
                }
            }
    }]
};