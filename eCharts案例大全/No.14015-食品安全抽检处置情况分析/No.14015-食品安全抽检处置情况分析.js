option = {
    backgroundColor:'#FFFFFF',
    title: {
        text: '食品安全抽检处置情况分析',
        subtext: '地区处置企业次数排名'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['处置企业次数'],
        left:'27%',
        top:'4.7%'
    },
    grid: {
        left: '1%',
        right: '60%',
        bottom: '40%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        position:'top',
        splitLine: {show: false},
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['崇左市','来宾市','河池市','贺州市','百色市','玉林市','贵港市','钦州市','防城港市','北海市','梧州市','桂林市','柳州市','南宁市']
    },
    series: [
        {
            name: '处置企业次数',
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            type: 'bar',
            data: [9263,13203,14203,18103,21203,28903,38203,41603,48203, 53489, 59034, 64970, 71744, 80230]
        }
    ]
};
