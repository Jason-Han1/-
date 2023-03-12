var uploadedDataURL = "/asset/get/s/data-1639622508276-_Do_aGRfK.png";

var uploadedDataURL2 = "/asset/get/s/data-1639622500521-NTdXUYXMK.png";


var datas = {
        chartData:[180,120,100,60,57],
        chartName: ['行业1','行业2','行业3','行业4','行业5'],
        myColor : ['#25E8FF', '#5E7DB9', '#5E7DB9', '#5E7DB9', '#5E7DB9', '#5E7DB9']
    }
    const floor4Base64 = uploadedDataURL;
    var chartData = datas.chartData;
    var chartName =datas.chartName;
    var myColor = datas.myColor;
    option = {
        backgroundColor:"#000",
        grid: {
            x:100,
            y:100,
            x2:120,
            y2:100,
        },
        xAxis: [{
            show: false,
        },
            {
                show: false,
            }
        ],
        yAxis: {
            type: 'category',
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisPointer: {
                label: {
                    show: true,
                    margin: 30
                }
            },
            data: chartName,
            axisLabel: {
                margin: 50,
                fontSize: 14,
                align: 'left',
                color: '#333',
                rich: {
                    img:{
                        width: 16,
                        height:23,
                        backgroundColor:{ image:floor4Base64 },
                    },
                    img2:{
                        width: 16,
                        height:23,

                    },
                    nt: {
                        color: myColor[0],
                        align: 'left',
                        fontSize:22,
                        fontWeight:'bold',
                    }
                },
                formatter: function(value, index) {
                    index =index + 1

                    if(index <= 3){
                        return  '{img|}' +'   {nt|' + index + '}'
                    }else{
                        return  '{img2|}' +'   {nt|' + index + '}'
                    }

                }
            }
        },

        series: [

            //亮色条 百分比
            {
                show: true,
                type: 'bar',
                barGap: '-100%',
                barWidth: '10',
                z: 2,

                label: {
                    normal: {
                        rich: {
                            img:{
                                width: 18,
                                height:20,
                                backgroundColor:{ image:uploadedDataURL2 },
                            }
                        },
                        show: true,
                        textStyle: {
                            fontWeight: 'bold',
                            color:  myColor[0],
                            fontSize: 18,
                            offset: [10, 0]
                        },
                        position: 'right',
                        formatter: function(data) {
                            return '{img|}'+" " +(chartData[data.dataIndex]);
                        }
                    }
                },
                data: chartData,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            return myColor[params.dataIndex]
                        },
                    }
                },
            },
            //年份
            {

                show: true,
                type: 'bar',
                xAxisIndex: 1, //代表使用第二个X轴刻度
                barGap: '-100%',
                barWidth: '10',
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: [0, '-13'],
                        textStyle: {
                            fontSize:12,
                            color: '#B2C9F4',
                        },
                        formatter: function(data) {
                            return chartName[data.dataIndex];
                        }
                    }
                },
                data: chartData
            }
        ]
    };