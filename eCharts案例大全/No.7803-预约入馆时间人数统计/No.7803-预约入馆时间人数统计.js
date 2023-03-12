var data = [];

for (var i = 0; i <= 100; i++) {
    if (i <= 20) {
        i = i + 2;
        data.push({
            value: [0, i + 2],
            name: '9：00-11：00'
        })
    } else if (i <= 60) {
        i = i + 2;
        data.push({
            value: [0, i],
            name: '12：00-14：00'
        })
    } else {
        i = i + 2;
        data.push({
            value: [0, i],
            name: '14：00-16：00'
        })
    }


}

option = {
    title: {
        text: `预约入馆时间人数统计`,
        textAlign: "left",
        textStyle: {
            color: "#fff",
            fontSize: 36,
            fontWeight: "bold",
            lineHieght: 36,
            textAlign: "center"
        },
        top: 10,
        left: 10
    },
    graphic: [{
        type: 'image',
        left: '29%',
        top: '35%',
        style: {
            // eslint-disable-next-line global-require
            //image: require('../imgs/women.png'),
            width: 14,
            height: 31,
        },
    }],
    legend: {
        //图例组件，颜色和名字
        left: "50%",
        top: "10",
        itemGap: 5,
        itemWidth: 24,
        itemHeight: 24,
        textStyle: {
            color: '#fff',
            fontSize: 24,
            padding: [5, 0]

        }
    },
    color: ['#CECFD2', '#3DCADF', '#E55749'],
    series: [{
            name:"",
            type: 'pie',
            radius: ['25%', '30%'],
            center: ['15%', '50%'],
            clockwise: true,
            data: data,

            hoverAnimation: false,
            legendHoverLink: false,
            label: {
                normal: {
                    show: true,
                    textStyle:{
                        fontSize:24,
                    },
                    formatter: function(params) {
                        // console.log(params)
                        if(params.dataIndex == 2){
                             return params.value[1] + '%'
                        }
                        if (params.dataIndex == 15) {
                            console.log(params.value)
                            return params.value[1] + '%'
                        } else if(params.dataIndex == 30){
                            return params.value[1] + '%'
                        }else{
                            return  ''
                        }
                    }
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                     borderWidth: 10,
                    borderColor: 'rgba(0,0,0,1)',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        {
            name: '',
            type: 'pie',
            radius: ['25%', '30%'],
            center: ['50%', '50%'],
            clockwise: true,
            data: data,

            hoverAnimation: false,
            legendHoverLink: false,
            label: {
               normal: {
                    show: true,
                    textStyle:{
                        fontSize:24,
                    },
                    formatter: function(params) {
                        // console.log(params)
                        if(params.dataIndex == 2){
                             return params.value[1] + '%'
                        }
                        if (params.dataIndex == 15) {
                            console.log(params.value)
                            return params.value[1] + '%'
                        } else if(params.dataIndex == 30){
                            return params.value[1] + '%'
                        }else{
                            return  ''
                        }
                    }
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                     borderWidth: 10,
                    borderColor: 'rgba(0,0,0,1)',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        {
            name: '',
            type: 'pie',
            radius: ['25%', '30%'],
            center: ['85%', '50%'],
            clockwise: true,
            data: data,
            hoverAnimation: false,
            legendHoverLink: false,
            label: {
               normal: {
                    show: true,
                    textStyle:{
                        fontSize:24,
                    },
                    formatter: function(params) {
                        // console.log(params)
                        if(params.dataIndex == 2){
                             return params.value[1] + '%'
                        }
                        if (params.dataIndex == 15) {
                            console.log(params.value)
                            return params.value[1] + '%'
                        } else if(params.dataIndex == 30){
                            return params.value[1] + '%'
                        }else{
                            return  ''
                        }
                    }
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 10,
                    borderColor: 'rgba(0,0,0,1)',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },

    ],

    backgroundColor: '#000'
};