function contains(arr, dst) {
    var i = arr.length;
    while (i -= 1) {
        if (arr[i] == dst) {
            return i;
        }
    }
    return false;
}
//基本属性-民族分布取数
//var myChart1 = echarts2.init(document.getElementById("HHH258"));
var  getname=['环境艺术设计','工程造价','汽车电子技术','工程监理','机械制造','计算机应用技术','数控技术','计算机网络技术','软件技术','电子信息工程'];//数据点名称
var  getvalue=[220, 182, 191, 234, 290, 330, 310,234,123,135];//数据点值域

//基本属性-民族分布图表
option = {
    grid: {
        top: '5%',//上边距
        right: '5%',//右边距
        left: '15%',//左边距
        bottom: '5%'//下边距
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            return    '<span style="color: #fff;">' +params[0].name+'人数：'+ params[0].value + '人</span>';
        },
        axisPointer: {
            type:'none'
        }
    },
    xAxis: [{
        show:false,
    }],
    yAxis: [{
        inverse: true, //让y轴标签正过来
        data: getname,
        axisLabel: {
            margin: 10,
            color: '#666666',
            textStyle: {
            
                fontSize: 12
            },
            rich: {
                
            },
            formatter: function(value, index) {
                index = contains(getname, value) + 1
                if (index - 1 < 3) {
                    return [
                        '{nt' + index + '|' + index + '}' + '  {title' + index + '|' + value + '}'
                    ].join('\n')
                } else {
                    return [
                        '{nt|' + index + '}' + '  {title|' + value + '}'
                    ].join('\n')
                }
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }],
    animation: false,
    series: [{
        type: 'bar',
        data: getvalue,
        barWidth: '10px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#4EA4F3' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#0A79DF' // 100% 处的颜色
                }], false),
                barBorderRadius: [30, 30, 30, 30],
            }
        },
        label: {
                show: true,
                position: 'right',
                color: '#2C8FE9',
                fontSize: 14,
                offset: [10, 0]
            }
    }]
};