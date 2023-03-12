option = {
    backgroundColor: '#ffffff',
    title:{
        text:'地区办理事项排名',
        left:'left',
        textStyle:{fontSize:'18'}
    },
    
    grid: {
        top:40,
        left: '3%',
        right: '60%',
        bottom: '40%',
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#000',
            }
        },
        splitLine: {
            show: true
        },
    },
    yAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#000000',
                }
            },
            data: ['崇左市','来宾市','河池市','贺州市','百色市','玉林市','贵港市','钦州市','防城港市','北海市','梧州市','桂林市','柳州市','南宁市']
        },
        {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data:['崇左市','来宾市','河池市','贺州市','百色市','玉林市','贵港市','钦州市','防城港市','北海市','梧州市','桂林市','柳州市','南宁市']
        }

    ],
    series: [{
            name: '事项申请数',
            type: 'bar',

            itemStyle: {
                normal: {
                    show: true,
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: [106,109,109,110,119,166,171,171,178,178,179,185,195,197]
        }]
};