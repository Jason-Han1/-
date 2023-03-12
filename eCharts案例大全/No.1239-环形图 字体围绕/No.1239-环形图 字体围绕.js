
            var namedata1 = '2000-155500';
            var namedata2 = '2000-155500';
            var namedata3 = '2000-155500';
            var namedata4 = '2000-155500';
            var number1 = '80';
            var number2 ='80';
            var number3 = '80';
            var number4 = '80';
option = {
    backgroundColor:'#6c928c',
      animation: false,
                series: [
                    {
                        type: 'pie',
                        data: [
                            {
                                value: number1,
                                name: namedata1,
                                itemStyle: {
                                    color: '#FFD260',
                                },
                            },
                            {
                                value: number2,
                                name: namedata2,
                                itemStyle: {
                                    color: '#5AC2EF',
                                },
                            },
                            {
                                value: number3,
                                name: namedata3,
                                itemStyle: {
                                    color: 'red',
                                },
                            },

                            {
                                value: number4,
                                name: namedata4,
                                itemStyle: {
                                    color: 'blue',
                                },
                            },
                        ],
                        radius: ['45%', '89%'],
                        itemStyle: {
                            normal: {
                                color: 'transparent',
                                label: {
                                    show: true,
                                    position: 'inner',
                                    rotate: 'tangential',
                                    color: '#fff',
                                    fontSize: 24,
                                      
                  
                                      
                                },
                            },
                        },
                    },
                    {
                        type: 'pie',
                        center: ['50%', '50%'],
                        radius: ['60%', '58%'],

                        data: [
                            {
                                name: '',
                                value: 0,

                                labelLine: {
                                    show: false,
                                },
                                itemStyle: {
                                    color: '#333',
                                    opacity: 0.33,
                                },
                                emphasis: {
                                    labelLine: {
                                        show: false,
                                    },
                                    itemStyle: {
                                        color: '#CCAC5D',
                                    },
                                },
                            },
                        ],
                    },
                ],
};


