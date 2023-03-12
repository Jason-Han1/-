options = [
{
    backgroundColor:'#ffffff',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            color: '#fafafa'
        }

    },
    title: {
        text: '',
        subtext: ''
    },
    legend: {
        data: ['食品生产企业', '食品添加剂生产企业']
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
            magicType: {
                show: true,
                type: ['stack', 'tiled']
            },
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
        data: ['区局',  '南宁市局', '柳州市局', '桂林市局', '梧州市局', 
         '北海市局', '防城港市局', '钦州市局'
        ,'贵港市局','玉林市局','百色市局','贺州市局','河池市局','来宾市局','崇左市局']
    }],
    xAxis: [{
        name: '检查企业数',
        type: 'value'
    }],

    series: [
        {
            name: '食品生产企业',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside'
                    },
                    color: '#05BFF1'
                }
            },
            data: [133, 333, 222, 874, 678,133, 333, 222,312,321,133, 333, 541, 874,13]
        },
        {
            name: '食品添加剂生产企业',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside'
                    },
                  color: '#FF6347'
                }
            },
            data: [120, 132, 101, 134, 90,120, 132, 101, 134, 90, 90,120, 132, 101, 134]
        }
        

    ]
}
];