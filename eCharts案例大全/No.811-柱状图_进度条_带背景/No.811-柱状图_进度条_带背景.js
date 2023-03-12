option = {
    grid: {
        show:'true',
        borderWidth:'0',
        height:"80%",
        width:"80%",
        x:"12%",
        // y:"20%",
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: "{b0}: {c0}"
        /*formatter: function(params) {
            var result = '';
            params.forEach(function (item) {
                result += item.marker + " " + item.seriesName + " : " + item.value +"</br>";
            });
            return result;
        }*/
    },
    backgroundColor: '#121B2C',        //背景色
    xAxis: {
        show: false,                //是否显示x轴
        type: 'value'
    },
    yAxis: {
        type: 'category',
        inverse:true,               //让y轴数据逆向
        axisLabel: {
            show: true,
            textStyle: {
                color: '#666'       //y轴字体颜色
            },
            formatter: function(value, index) {
                return [
                    '{lg|' + (index + 1) + '}' + '{title|' + value + '} '
                ].join('\n');
            },
            //定义富文本标签
            rich: {
                lg: {
                    fontWeight: 'bold',
                    fontSize: 12,       //字体默认12
                    color: '#08C',
                    padding: [0, 5, 0, 0]
                },
                title: {
                    color: '#fff',
                    fontWeight: 'lighter',
                    // borderWidth: 1,
                    // borderColor: '#08c'
                    // textareaBorderColor: '#08c',
                }
            }
        },
        splitLine: {show: false},   //横向的线
        axisTick: {show: false},    //y轴的端点
        axisLine: {show: false},    //y轴的线
        data: ['闽DZ0175','闽DZ6027','闽D83876','闽DZ1377','闽DZ8825']
    },
    series: [
        {
            name: '数据内框',
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: '#00b5eb',
                }
            },
            /*label: {
                normal: {
                    show: true,
                    position: 'right',
                    color: 'red',
                    fontSize: 14,
                    formatter: 
                    function(param) {
                        // return 'xx';
                    },
                }
            },*/
            barWidth: 30,
            data: [11, 33, 77, 39, 55]
        },
        {
            name: '外框',
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: 'rgba(255, 255, 255, 0.14)' //rgba设置透明度0.14
                }
            },
            barGap: '-100%',
            z: 0,
            barWidth: 30,
            data: [100, 100, 100, 100, 100]
        }
    ]
};
