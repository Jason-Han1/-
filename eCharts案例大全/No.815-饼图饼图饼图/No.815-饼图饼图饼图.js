option = {
    backgroundColor: '#0f375f',

   legend: {
                orient: 'vertical',
                top: 'center',
                right: '5%',
                itemGap: 50,
                itemWidth: 16,
                itemHeight: 16,
                textStyle: {
                    color: '#fff',
                    fontSize: 16,
                },
                data: ['稳定', '基本稳定', '不稳定'],
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)',
            },
            series: [
                {
                    color: ['#3682e1', '#35d789', '#f94a5c'],
                    name: '人员类型',
                    type: 'pie',
                    radius: ['55%', '80%'],
                    center: ['30%', '50%'],
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },

                    data: [
                        {
                            name: '稳定',
                            value: 10,
                        },
                        {
                            name: '基本稳定',
                            value: 50,
                        },
                        {
                            name: '不稳定',
                            value: 40,
                        },
                    ],
                   
                },
                {
                    name: '',
                    type: 'pie',
                    radius: ['48%', '50%'],
                    center: ['30%', '50%'],
                    color: '#295da6',
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    data: [1],
                    silent: true,
                },
                {
                    name: '',
                    type: 'pie',
                    radius: ['83%', '85%'],
                    center: ['30%', '50%'],
                    color: '#4072db',
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    data: [1],
                    silent: true,
                     itemStyle: {
                        shadowColor: 'rgba(255,255,255,0.7)',
                        shadowBlur: 10,
                    },
                },
                {
                    name: '',
                    type: 'pie',
                    radius: ['89%', '90%'],
                    center: ['30%', '50%'],
                    color: '#142e59',
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    data: [1],
                    silent: true,
                },
            ]
};
