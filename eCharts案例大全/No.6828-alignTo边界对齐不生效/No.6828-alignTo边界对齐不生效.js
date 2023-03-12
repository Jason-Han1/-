  var option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)',
                        textStyle:{
                            fontSize:22
                        },
                    },
                    

                    legend: {
                        // orient: 'vertical',
                        right: 2,
                        right: 'right',
                        type: 'scroll',
                        orient: 'vertical',
                        textStyle:{
                            color:'#ccc',
                            fontWeight: 'bold',
                            fontSize:20
                        },
                        data: ['电汇:63548.71万元', '银票:21372.59万元', '商票:7612.53万元', '供应链融资:4091.69万元']
                    },

                    series: [
                        {
                            name: '数据详情',
                            color:['#C1D456','#F6C143','#64AAC3','#5BB296'],
                            type: 'pie',
                            radius: ['45%', '30%'],
                            center: ['50%', '73%'],
                            avoidLabelOverlap: false,

                            data: [
                                {value: 63548.71, name: '电汇:63548.71万元'},
                                {value: 21372.59, name: '银票:21372.59万元'},
                                {value: 7612.53, name: '商票:7612.53万元'},
                                {value: 4091.69, name: '供应链融资:4091.69万元'}
                            ],

                            label: {
                                alignTo: 'edge',
                                textStyle : {
                                    align : 'center',
                                    baseline : 'middle',
                                    fontSize : 15,
                                    fontWeight : 'bolder'
                                },


                            },
                            labelLine: {
                                normal: {
                                    length: 39,
                                    length2: 20,

                                }

                            },
                        }
                    ]
                }