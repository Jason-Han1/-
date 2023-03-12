option = {
            grid: {
                left: '13%',
                right: '14%',
                top:'3%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                  axisTick: {
                    show: false
                },
                 axisLine: {
                    show: false,
                   
                },
                 axisLabel: {
                     show: false,
                      
                },
                 splitLine: {
                    show: false
                },
            },
            yAxis: [{
                type: 'category',
                data: ['学校', '三级甲等医院', '五星级酒店', '公园', '运动场馆', '博物馆','展览馆','宗教性建筑'],
                 axisTick: {
                    show: false
                },
                
                 axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#D1D1D1',
                        width: 1 //这里是为了突出显示加上的
                    }
                },
                axisLabel:{
                    color:'#2C3F58',
                    // fontSize:12
                },
            },{
                type: 'category',
                data: [120, 200, 150, 80, 70, 110, 130,63],
                 axisTick: {
                    show: false
                },
                
                 axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#2C3F58',
                        width: 0 //这里是为了突出显示加上的
                    }
                },
                
                axisLabel: {
                  show: true,
                  inside: false,
                  textStyle: {
                    color:'#2C3F58',
                    // fontSize: '12',
                    fontFamily: 'PingFangSC-Regular'
                  },
                  formatter: function (val) {
                    return `${val}个`
                  }
                } 
            }],
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130,63],
                type: 'bar',
                barMaxWidth:11,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(243,246,253,0.9)',
                    barBorderRadius:[0,6,6,0]
                },
                 itemStyle: {
                     barBorderRadius:[0,6,6,0],
                     color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#F76B1C'
                    }, {
                        offset: 1,
                        color: '#FAD961'
                    }])
                },
               
            }]
        }