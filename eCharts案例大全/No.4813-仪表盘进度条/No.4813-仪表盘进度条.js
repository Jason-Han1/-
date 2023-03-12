var dataArr = 80;
    if (data == undefined) {
        dataArr = 0;
    }
    var colorSet = {
        color: '#FE5452'
    };
    var text;
   
    var option = {
        backgroundColor: "#fff",
        title: {
            show: true,
            text: '综合评分',
            x: '49%',
            y: '55%',
            z: 8,
            textAlign: 'center',
            textStyle: {
                color: '#fff ',
                fontSize: 26,
            },

        },
        series: [
            {
                name: "内部进度条",
                type: "gauge",
                // center: ['20%', '50%'],
                radius: '70%',
                splitNumber: 10,
            
                axisLine: {
                    lineStyle: {
                        color: [
                            [dataArr / 100, colorSet.color],
                            [1, "#FDDBDA"]//底层环形颜色
                        ],
                        width: 16//环宽度
                    }
                },
                axisLabel: {
                    show: false,
                },
                axisTick: {
                    show: false,

                },
                splitLine: {
                    show: false,
                },


                pointer: {
                    show: false,
                },
            },{ /*内部*/
                type: 'pie',
                radius: ['0', '55%'],
                center: ['50%', '50%'],
                z: 8,
                hoverAnimation: false,
                data: [{
                    name: '',
                    value: '80',
                     itemStyle: {
                        normal: {
                            color: '#FF8178'//内环颜色
                        }
                    },
                
                    label: {
                        normal: {
                            rich: {
                                a: {
                                    color: '#fff',
                                    align: 'center',
                                    fontSize: 50,
                                    // fontWeight: "bold"
                                },
                            },
                            formatter: function (params) {
                                return "{a|" + params.value + "}";
                            },
                            position: 'center',
                            show: true
                        }
                    },
                    labelLine: {
                        show: false
                    }
                }],
            },
          
         
        ]
    };
