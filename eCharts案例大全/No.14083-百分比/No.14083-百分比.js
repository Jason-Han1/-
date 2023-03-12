option = {
    title: {
        text: '百分比'
    },
       legend: {
        data:['人工', '自动']
    },
    yAxis: {
        data: [],
        type:'value',
        show:false,
         axisTick: {
                show: false
            }
    },
    xAxis: {
        type: 'category',
        show:false,
         axisTick: {
                show: false
            }
    },
    series: [{
        type: 'bar',
        name:'人工',
        data:[20],
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
        data:[80],
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
    },
    {
        type:'bar',
         name:'未分配',
        data:[-10],
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