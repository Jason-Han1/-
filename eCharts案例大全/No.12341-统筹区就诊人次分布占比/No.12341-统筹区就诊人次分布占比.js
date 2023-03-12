var data = {
    'overallArea': ['长春', '吉林'],
    'hospital': [{
        'value': 12,
        'name': '长春',
			CODE:'2002'
    }, {
        'value': 32,
        'name': '吉林'
    }],
    'pharmacy': [{
        'value': 12,
        'name': '长春'
    }, {
        'value': 32,
        'name': '吉林'
    }]
};
option = {
    backgroundColor: 'rgba(5, 38, 75, 0.6)',
    color: ['#9DD060', '#3AB2AC', '#39CCA2', '#35C96E', '#48B188', '#64BCAE', '#68A7C8', '#5C89C3', '#7477C7', '#5957C2', '#7944CF', '#6F2288'],
    legend: {
        orient: 'vertical',
        x: 'left',
        left: '10',
        data: data.overallArea,
        top: '10%',
        textStyle: {
            color: '#4DCEF8'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            if (null !== params.value) {
                return params.seriesName + '<br/>' + params.name + ' : ' + params.value + ' (' + params.percent + '%)';
            } else {
                return null;
            }

        }
    },
    title: {
        top: '10%',
        left: 'center',
        text: '统筹区就诊人次分布占比',
        textStyle: {
            align: 'center',
            color: '#4DCEF8',
            fontSize: 18,

        }

    },
    series: [{
            name: '医院',
            type: 'pie',
            label: {
                normal: {
                    show: false,
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            radius: ['40%', '55%'],
            center: ['35%', '50%'],

            data: data.hospital,
        },
        {
            name: '医院',
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['40%', '55%'],
            center: ['35%', '50%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                label: {
                    normal: {
                        formatter: '医院',
                        textStyle: {
                            color: '#4DCEF8',
                            fontSize: 26
                        }
                    }
                }
            }]
        },
        {
            name: '药店',
            type: 'pie',
            label: {
                normal: {
                    show: false,
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            radius: ['40%', '55%'],
            center: ['75%', '50%'],
            data: data.pharmacy,
        },
        {
            name: '药店',
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['40%', '55%'],
            center: ['75%', '50%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                label: {
                    normal: {
                        formatter: '药店',
                        textStyle: {
                            color: '#4DCEF8',
                            fontSize: 26
                        }
                    }
                }
            }]
        },

    ]
};