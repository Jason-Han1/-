   option = {
                    tooltip: {
                        trigger: 'item',
                    },
                    legend: {
                        y: 'center',    //延Y轴居中
                        //x: 'right', //居右显示
                        left: '60%',
                        orient: 'vertical',  //垂直显示
                        align: 'left',
                        //图例每项之间的间隔
                        itemGap:30,
                        //selectedMode: false,
                        textStyle: {
                            //图例文字的样式
                            fontSize: 14,
                        },
                        formatter: function (name) {
                            
                            if (name == '计划项目') {
                                return name + ':' + 50;
                            } else if (name == '科技企业') {
                                return name + ':' + 2;
                            } else if (name == '创新载体') {
                                return name + ':' + 3;
                            } else if (name == '人才团队') {
                                return name + ':' + 4;
                            } else {
                                return name;
                            }
                        },
                    },
                    series: [
                        {
                            type: 'pie',
                            center: ['30%', '55%'],
                            radius: ['55%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                //扇形中心文字
                                show: true,
                                position: 'center',
                                formatter: '',
                                fontSize: 40,
                            },
                            labelLine: {
                                show: false,
                            },
                            data: [
                                { value: 1, name: '计划项目', itemStyle: { color: '#026ECB' } },
                                { value: 2, name: '科技企业', itemStyle: { color: '#67C23A' } },
                                { value: 3, name: '创新载体', itemStyle: { color: '#FAC858' } },
                                { value: 4, name: '人才团队', itemStyle: { color: '#F35656' } },
                                { value: 5, name: '科技成果', itemStyle: { color: '#2493B6' } },
                                { value: 6, name: '其他补助', itemStyle: { color: '#E4A517' } },
                            ],
                        },
                    ],
                };
