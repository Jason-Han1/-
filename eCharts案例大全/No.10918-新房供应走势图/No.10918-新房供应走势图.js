 var option = {

            color:[ '#db8258','#ba9d9b','#289dac','#287a25','#008fd6','#e7bb2f','#c93534'],
            title: {
                text: '新房供应走势图',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 20,
                    color: '#F1F1F3'
                },
                top: "0",
                x: 'center'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                orient:'horizontal',
                textStyle:{
                    color:'#fff'
                },
                top: '8%',
                data: ['惠城区', '仲恺区','惠阳区','大亚湾','博罗县','惠东县','龙门县']
            },
            grid: {
                top: '15%',
                left: '3%',
                right: '3%',
                bottom: '20%',
                containLabel: true
            },
            yAxis:  {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '14',
                    }
                },
            },
            xAxis: {
                type: 'category',
                data: ['2018-06','2018-07','2018-08','2018-09','2018-10','2018-11','2018-12','2019-01','2019-02','2019-03','2019-04','2019-05'],
                axisLabel: {
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '14',
                    }
                },
            },
            dataZoom: [{
                show: true,
                height:20,
                bottom:50,
                filterMode: 'empty',
                start: 20,
                end: 100,
                handleSize: '110%',
                handleStyle:{color:"#d3dee5",},
                textStyle:{color:"#fff"},
                borderColor:"#90979c",
            },
                { type: "inside"}
            ],
            series: [
                {
                    name: '惠城区',
                    type: 'bar',
                    barWidth: '50%',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data: [320, 302, 301, 334, 390, 330, 320,320, 302, 301, 334, 390,]
                },
                {
                    name: '仲恺区',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data: [120, 132, 101, 134, 90, 230, 210,101, 134, 90, 230, 210]
                },
                {
                    name: '惠阳区',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data: [220, 182, 191, 234, 290, 330, 310,182, 191, 234, 290, 330,]
                },
                {
                    name: '大亚湾',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data: [150, 212, 201, 154, 190, 330, 410, 212, 201, 154, 190, 330, ]
                },
                {
                    name: '博罗县',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data: [820, 832, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320]
                },
                {
                    name: '惠东县',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data: [820, 832, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320]
                },
                {
                    name: '龙门县',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    data: [ 901, 934, 1290, 1330, 1320,820, 832, 901, 934, 1290, 1330, 1320]
                },
            ]
        };