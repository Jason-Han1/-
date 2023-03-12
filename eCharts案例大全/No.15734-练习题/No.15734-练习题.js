var data = [0, 0, 0, 0, 0, 0, 0];
option = {
    backgroundColor: '#333',
    title: {
        text: 'Awesome Chart'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    visualMap: {
        show: false,
        min: 0,
        max: 330,
        calculable: true,
        color: ['#d94e5d', '#eac736', '#50a3ba'],
        y: 'center',
    },
    xAxis: {
        show: true,
        axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
                color: '#f2f2f2',
                fontSize: 18
            }
        },
        axisTick: {
            lineStyle: {
                color: '#f2f2f2'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#f2f2f2'
            }
        },
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
        show: false,
        max: 200
    },
    series: [{
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: function(obj) {
                    if (obj.value === 0) {
                        return '';
                    } else {
                        return obj.value+ '票' ;
                    }
                },
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontFamily: 'sans-serif',
                    fontSize: 34,
                }
            }
        },
        data: data
    }]
};

//setInterval
setInterval(function() {
    data = data.map(function(element) {
        return element += Math.ceil(Math.random() * 3);
        //return element +=1;
    });
    myChart.setOption({
        series: [{
            data: data
        }]
    });
}, 5000);