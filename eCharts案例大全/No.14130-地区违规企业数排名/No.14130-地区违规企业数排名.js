
option = {
    backgroundColor:'#ffffff',
    title: {
        text: '',
        subtext: '',
        left:'center'
    },
    tooltip: {
        trigger: 'axis'
    },
  
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            /*magicType: {
            show: true,
            type: ['line', 'bar']
            },*/
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    yAxis: [{
        type: 'category',
        data: ['崇左市','来宾市','河池市','贺州市','百色市','玉林市','贵港市','钦州市','防城港市',
        '北海市','梧州市','桂林市','柳州市','南宁市']
    }],
    xAxis: [{
        type: 'value',
        name:'',
        //position: 'top',
        max:1200
    }],
    series: [{
            name: '违规企业数',
            type: 'bar',
            itemStyle: {
                    normal: {
　　　　　　　　　　　　　　//好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                              '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                               '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                               '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                            ];
                            return colorList[params.dataIndex]
                        },
                    }
                },
                barWidth:30,
            data: [101,221, 280, 320, 400, 451, 552, 600, 670, 700, 800, 900, 1000,1200],
           
        }
    ]
};