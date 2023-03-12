
let defaultData = [123, 233, 444, 111, 112, 444]
let defaultData1 = [123, 233, 444, 111, 112, 444]
let titlename = ['金控集团', '广电集团', '旅游集团', '交通集团', '农林集团', '水务集团'];

option ={
        grid: {
            // left: '50px',  // 如果离左边太远就用这个......
            // right: '70px',
            // bottom: '40px',
            // top: '90px',
            containLabel: true,
        },
          backgroundColor: '#0A2E5D',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        color: [
            '#FFAB0C',
            '#0CF4FF',
        ],
        legend: {
            // left: 100,
            // top: 40,

            textStyle: {
                color: '#CACACA',
                fontSize: 18,
            },
            icon: 'roundRect',
            data: ['办结数', '受理量']
        },

        xAxis: {
            axisLabel: {
                color: '#CACACA',
                fontSize: 20,
                interval: 0,
                rotate: 45
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: `#AAAAAA`
                }

            },
            type: 'category',
            data: titlename
        },
        yAxis: {
            axisLabel: {
                color: '#CACACA',
                fontSize: 20,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: `#AAAAAA`
                }

            },
            type: 'value',
        },
        series: [
            {
                name: '办结数',
                type: 'bar',
                barWidth: 18,

                itemStyle: {
                    normal: {
                        barBorderRadius: 100,
                        shadowColor: 'rgba(255, 255, 255, 1)',
                        shadowBlur: 3,
                        color: (params) => {
 
                            const color = {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 1, color: '#FFAB0C', // 0% 处的颜色
                                }, {
                                    offset: 0, color: '#FCFFBA', // 100% 处的颜色
                                }],
                                globalCoord: false, // 缺省为 false
                            }
                            return color
                        },


                    },
                },
                data: defaultData
            },
            {
                name: '受理量',
                type: 'bar',
                barWidth: 18,

                itemStyle: {
                    normal: {
                        barBorderRadius: 100,
                        shadowColor: 'rgba(255, 255, 255, 1)',
                        shadowBlur: 3,
                        color: (params) => {

                            const color = {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 1, color: '#0CF4FF', // 0% 处的颜色
                                }, {
                                    offset: 0, color: '#BAF7FF', // 100% 处的颜色
                                }],
                                globalCoord: false, // 缺省为 false
                            }
                            return color
                        },


                    },
                },
                data: defaultData1
            }
        ]
    };