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
        data: ['不合格', '合格']
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
        data: ['区局', '南宁市行政审批局', '南宁市局', '柳州市局', '柳州市行政审批局', '桂林市局', '梧州市局', 
        '梧州市行政审批局', '北海市局', '北海市行政审批局', '防城港市局', '钦州市局','钦州市行政审批局'
        ,'贵港市局','玉林市局','百色市局','贺州市局','河池市局','来宾市局','崇左市局']
    }],
    xAxis: [{
        name: '抽检数',
        type: 'value'
    }],

    series: [
        {
            name: '合格',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside'
                    },
                    color: '#3CB371'
                }
            },
            data: [133, 333, 222, 874, 678,133, 333, 222,312,321,133, 333, 541, 874,133, 333, 222, 874, 678,133]
        },
        {
            name: '不合格',
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
            data: [120, 132, 101, 134, 90,120, 132, 101, 134, 90, 90,120, 132, 101, 134, 90,120, 132, 101, 134]
        }
        

    ]
}
];