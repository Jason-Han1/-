var colorList=['#42679e', '#74994a', '#64aeaf', '#c79339'],
        option = {
            title: {
                show:false,
                text: '',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontSize:30,
                    fontWeight:'normal',
                    color: ['#333']
                },
                subtextStyle: {
                    color: '#666',
                    fontSize: 16
                },
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c}",
                confine: true,
            },
            grid: {
                top:0,
                bottom: 150,
                left: 0,
                right: '10%'
            },
            legend: {
                show:true,
                left: 'center',
                bottom: '6%',
                itemGap: 6, //图例每项之间的间隔
                itemWidth: 9,
                itemHeight: 9,
                icon: 'circle',
                textStyle: {
                    color: '#000',
                    fontSize: 12,

                }
            },
            series: [
                // 主要展示层的
                {
                    name: '未达基准值指标数',
                    radius: ['35%', '70%'],
                    center: ['50%', '45%'],
                    type: 'pie',
                    minAngle:[10],
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                return colorList[params.dataIndex]
                            }
                        }
                    },
                    label: { //标签的位置
                        normal: {
                            show: true,
                            position: 'inside', //标签的位置
                            formatter: "{d}%",
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontWeight: 'bold'
                            }
                        }
                    },
                    data: [
                        {value:33, name:'移动业务'},
                        {value:23, name:'家庭业务'},
                        {value:27, name:'政企业务'},
                        {value:33, name:'新业务'}],
                },
                // 边框的设置
                {
                    radius: ['65%', '70%'],
                    center: ['50%', '45%'],
                    type: 'pie',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    animation: false,
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color:'rgba(250,250,250,0.5)'
                        }
                    },
                    data: [{
                        value: 1,
                    }],
                }
            ]
        };