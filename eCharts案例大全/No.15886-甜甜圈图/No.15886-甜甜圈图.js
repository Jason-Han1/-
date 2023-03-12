option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['占有率']
    },
    series : [
        {
            type: 'pie',
            radius : ['40%', '55%'],
            label: {
                normal: {
                    position: 'center'
                }  
            },
            data:[
                {
                    value:335, name:'占有率',
                    label: {
                        normal: {
                            formatter: '{d} %',
                            textStyle: {
                                fontSize: 30
                            }
                        }
                    }
                },
                {
                    value:310, name:'占位',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#999'
                        }
                    },
                    label: {
                        normal: {
                            formatter: '\n完成率'
                        }
                    }
                }
            ]
        }
    ]
};
