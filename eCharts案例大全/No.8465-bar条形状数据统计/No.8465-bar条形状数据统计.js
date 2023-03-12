option = {
    grid: [{
        // x: '150',
        y: 'center',
        // width: '100%',
        height: '100%'
    }],
    backgroundColor: "#fff",
    xAxis: [{
        show: false,
    }],
    yAxis: [{
        axisTick: 'none',
        axisLine: 'none',
        // offset:'20',
        axisLabel: {
            textStyle: {
                color: '#666',
                fontSize: '12',
            }
        },
        data: function() {
            var arrs = [];
            for (var i = 0; i < 15; i++) {
                arrs.push('条形统计'+i)
            }
            return arrs;
        }(),
        // [
        //     '广东省',
        //     '广西省',
        //     '湖南省',
        //     '湖北省',
        //     '江西省',
        //     '福建省',
        //     '河南省',
        // ]
    }],
    series: [{
        // name: '条',
        type: 'bar',
        progressiveChunkMode: 'sequential',
        // yAxisIndex: 0,
        // data: ['9.6', '0.5', '62.3', '0.1903'],
        data:function(){
            var arrs = [];
            for (var i = 0; i < 15; i++) {
                arrs.push(10*i);
            }
            return arrs;
        }(),
        label: {
            normal: {
                show: true,
                position: 'right',
                distance: 20,
                formatter: function(param, value) {
                    return param.value;
                },
                textStyle: {
                    //   color: '#f00',
                    fontSize: '14',
                }
            }
        },
        barWidth: 16,
        itemStyle: {
            normal: {
                color: '#5B8FF9'
            }
        },
        z: 2
    }]
};