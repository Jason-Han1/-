app.title = '世界人口总量 - 条形图';

option = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    color:["#888","#f9d"],
    legend: {
        data: ['2011年', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    xAxis: {
        type: 'category',
        data: ['巴西','印尼', ]
    },
    series: [
        {
            name: '2011年',
             itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B'];
                        return colorList[params.dataIndex]
                    }  
                }
            },
            type: 'bar',
            data: [18203,19325 ]
        },
        
         
    ]
};
