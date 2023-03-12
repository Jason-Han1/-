var data={usedNum:41,yunCardNum:50};



option = {
                color: ['#9A85F3', 'rgba(154,133,243,0.3)'],
                title: {
                    text: Math.floor((!(!data.usedNum ? 0 : data.usedNum) / (!data.yunCardNum ? 0 : data.yunCardNum) ? 0 : (!data.usedNum ? 0 : data.usedNum) / (!data.yunCardNum ? 0 : data.yunCardNum)) * 100) + '%',
                    subtext: '总数 ' + (!data.yunCardNum ? 0 : data.yunCardNum),
                    subtextStyle: {
                        color: '#9A85F3',
                        fontSize: 24
                    },
                    itemGap: 0,
                    x: 'center',
                    y: 'center',
                    textStyle: {
                        fontWeight: 'normal',
                        color: '#fff',
                        fontSize: '36'
                    }
                },
                tooltip: {
                    show: false
                },
                legend: {
                    show: false
                },
                series: [{
                    name: '班牌使用率',
                    type: 'pie',
                    clockWise: true,
                    radius: ['45%', '60%'],
                    label: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            }
                        }
                    },
                    hoverAnimation: false,
                    data: [
                        {value: !data.usedNum ? 0 : data.usedNum, name: '使用中'},
                        {
                            value: (!data.yunCardNum ? 0 : data.yunCardNum) - (!data.usedNum ? [] : data.usedNum),
                            name: '未使用'
                        }
                    ]
                }, {
                    name: '',
                    type: 'pie',
                    radius: ['45%'],
                    clockWise: true,
                    hoverAnimation: false,
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    data: [{
                        value: 100,
                        itemStyle: {
                            color: 'rgba(154,133,243,0.3)'
                        }
                    }]
                }]
            };