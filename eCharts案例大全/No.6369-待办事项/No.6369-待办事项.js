

option = {
    backgroundColor: '#2e354e',
        title: {
            text: '完成率',
            subtext: '40%',
            textStyle: {
                fontSize: 12,
                color: '#fff',
                lineHeight: 10
            },
            subtextStyle: {
                fontSize: 16,
                color: '#fff'
            },
            textAlign: 'center',
            left: '49.5%',
            top: '48%'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: '10%',
            bottom: '10%',
            top: '70%',
            itemGap: 10,
            selectedMode: false,
            icon: 'pin',
            data: ['已办事项', '待办事项'],
            textStyle: {
                color: '#77899c',
                rich: {
                    uname: {
                        width: 20
                    },
                    unum: {
                        color: '#4ed139',
                        width: 40,
                        align: 'right'
                    }
                }
            },
           
        },
        calculable: true,
        series: [
           
            {
                name: '首要污染物污染天数占比',
                type: 'pie',
                radius: [30,40],
               color: ['#122f9a','#4777f5'],
                center: ['50%', '50%'],
              
                label: {
                    normal: {
                        show: false
                    },
                },
                data: [
                    {
                value: 125,
                name: '警务指挥平台（110）',
                itemStyle: {
                        normal: {
                             color: {
                                colorStops: [{
                                    offset: 0,
                                    color: '#33c6ac' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#50fed9' // 100% 处的颜色
                                }]
                            },
                        }
                    }
            },
             {
                value: 115,
                name: '重点人员情报信息平台',
                itemStyle: {
                    normal: {
                        color: {
                            colorStops: [{
                                offset: 0,
                                color: '#41cbff' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#4777f5' // 100% 处的颜色
                            }]
                        },
                       
                       
                    }
                }
            },
            
                ]
            },
            
            
        ]
    };
