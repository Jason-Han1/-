option = {
            color: ['rgba(119,212,245,0.6)'],
            dataZoom: {
                type: 'slider',
                show: true,
                showDetail: false,
                height: 14,
                xAxisIndex: [0],
                start: 0,
                // end:dataZoomRange(dataX.length,3),
                borderColor: "transparent",
                fillerColor: 'rgba(119,212,245,0.4)',
                backgroundColor: 'rgba(119,212,245,0.10)',
                borderRadius: 5,
                showDataShadow: false,
                // handleIcon: '/dataZoomBlock.png',
                handleSize: 13.5
            },
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(200,231,242,0.9)',
                textStyle: {
                    color:'rgba(20,34,54,1)'
                },
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: "{b}<br/>数量：{c}"
            },
            grid: {
                left: '5%',
                right: '5%',
                bottom: '10%',
                top: '5%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['种类1','种类2','种类3'],
                axisTick: {
                    show: false
                },
                splitLine:{
                    show:false
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: 'rgba(200,231,242,0.6)'
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                name: '',
                minInterval: 1,
                axisTick: {
                    show: false
                },
                splitLine:{
                    show:false
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: 'rgba(200,231,242,0.6)',
                    }
                },
            }],
            series: [{
                name: '数量',
                type: 'bar',
                barMaxWidth: 64,
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        color: 'rgba(200,231,242,0.6)'
                    }
                },
                data: [3,4,5]
            }]
        };