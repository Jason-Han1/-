var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
option = {
    grid: {
        left: '10%',
        right: '22%',
        bottom: '10%',
    },
    xAxis: {
        show: false
    },
    yAxis: [
        {
        type: 'category',
        inverse: true,
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { color: '#000' },
    },
    {
        type: 'category',
        inverse: true,
        data: [702, 350, 610, 793, 664],
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { 
            color: '#000',
            fontSize: 12,
        },
    },
        ],
    series: [
        {
            name: '条',
            type: 'bar',
            data: [70, 34, 60, 78, 69],
            yAxisIndex: 0,
            itemStyle: { 
                barBorderRadius: 20,
                color: function (params) {
                    return myColor[params.dataIndex]
                }
            },
            barCategoryGap: 50,
            barWidth: 10,
            label: {
                show: true,
                position: 'inside',
                formatter: '{c}%'
            },
        },
        {
            name: '框',
            type: 'bar',
            data: [100, 100, 100, 100, 100],
            yAxisIndex: 1,
            barCategoryGap: 50,
            barWidth: 15,
            itemStyle: {
                color: 'none',
                borderColor: '#00c1de',
                barBorderRadius: 15,
            }
        }
    ],
    
};