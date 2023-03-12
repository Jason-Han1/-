    option = {
            //  backgroundColor:'#FFFFFF',
             title: {
                 text: '接待游客情况',
                 subtext: '历年接待发展趋势',
                 textStyle:{
                     color:'#e9ebee'

                 },
             },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },

            grid: {
                top: '10%',
                left: '15%',
                right: '5%',
                bottom: '2%',
                containLabel: true,
            },
            xAxis: {
                "axisLine": {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                type: 'value',
                position:'top',
                splitLine: {show: false},
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                "axisLine": {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                type: 'category',
                data: ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018',]
            },
            dataZoom: [{
                width:15,
                left:50,
                type: 'slider',
                yAxisIndex: 0,
                filterMode: 'empty',
                start: 20,
                handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                handleSize: '110%',//灰色条的比例
                end: 100,
                handleStyle:{
                    color:"#fff"

                },
                textStyle:{
                    color:"#fff"},
                borderColor:"#fff"
            }, {
                type: 'inside',
                yAxisIndex: 0,
                filterMode: 'empty',
                start: 0,
                end: 100,

            }],
            series: [
                {
                    name: '办理事项数',
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                // build a color map as your need.
                                var colorList = [
                                    '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                                    '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                                    '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                                ];
                                return colorList[params.dataIndex]
                            },
                            shadowBlur: 20,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    type: 'bar',
                    data: [9263,13203,14203,18103,21203,28903,38203,41603,48203, 53489, 59034, 64970, 71744, 80230]
                }
            ]
        };