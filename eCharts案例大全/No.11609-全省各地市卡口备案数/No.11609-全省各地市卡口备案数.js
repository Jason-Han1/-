option = {
    backgroundColor:'#FFFFFF',
    title: {
        text: '全省各地市卡口备案数',
        subtext: '地市卡口排名'
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
       // data: ['广州市','深圳市','珠海市','汕头市','佛山市','韶关市','湛江市','肇庆市','江门市','茂名市','惠州市','梅州市','汕尾市','河源市' ,'阳江','清远','东莞','中山','潮州','揭阳','云浮']
    data: [ '云浮市','揭阳市','潮州市' ,'中山市','东莞市','清远市','阳江市','河源市','汕尾市','梅州市','惠州市','茂名市','江门市','肇庆市','湛江市','韶关市','佛山市','汕头市','珠海市','深圳市','广州市']
    },
    series: [
        {
            name: '全省各地市卡口备案数',
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        // var colorList = [
                        //   '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                        //   '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                        //   '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0','#32CD32','#FFC125','#FF00FF','#EEEE00','#EE82EE','#CDCD00'
                        // ];
                          var colorList = ['#87CEFF'];
                        return colorList[params.dataIndex]
                    },
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            type: 'bar',
           // data: [2670,2500,1980,1955,1800,1500,1430,1250,1200,980,900,870,830,706,679,647,611,558,450,442,300]
        data: [300,442,450,558,611,647,679,706,830,870,900,980,1200,1250,1430,1500,1800,1955,1980,2500,2670]
            
        }
    ]
};
