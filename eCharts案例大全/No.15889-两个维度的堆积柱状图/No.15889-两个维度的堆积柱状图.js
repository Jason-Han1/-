
var bcBySeriesIndex = ['B', 'B', 'B', 'B', 'C', 'C', 'C', 'C'];

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var html = [];
            
            var category = {};
            echarts.util.each(params, function (param) {
                var catName = param.seriesName;
                var bc = bcBySeriesIndex[param.seriesIndex];
                if (!category[catName]) {
                    category[catName] = {};
                }
                category[catName][bc] = param.value;
            });
            console.log(category);
            echarts.util.each(category, function (cate, key) {
                html.push(
                    '<tr>',
                    '<td>', key, '</td>',
                    '<td>', cate.B, '</td>',
                    '<td>', cate.C, '</td>',
                    '</tr>'
                );
            })
            
            return '<table border=1><tbody>'
                + '<tr><td></td><td>B</td><td>C</td></tr>' 
                + html.join('') 
                + '</tbody></table>';
        }
    },
    legend: {
        data: [
            '品类1', '品类2', '品类3', '品类4'
        ]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'品类1',
            type:'bar',
            barWidth : 20,
            stack: 'B',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'品类2',
            type:'bar',
            stack: 'B',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'品类3',
            type:'bar',
            stack: 'B',
            data:[50, 70, 31, 124, 90, 30, 10]
        },
        {
            name:'品类4',
            type:'bar',
            stack: 'B',
            data:[92, 32, 41, 114, 10, 10, 20],
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: 'B',
                    textStyle: {color: '#333'}
                }
            }
        },
        {
            name:'品类1',
            type:'bar',
            barWidth : 20,
            stack: 'C',
            data:[620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
            name:'品类2',
            type:'bar',
            stack: 'C',
            data:[120, 132, 101, 134, 290, 230, 220]
        },
        {
            name:'品类3',
            type:'bar',
            stack: 'C',
            data:[60, 72, 71, 74, 190, 130, 110]
        },
        {
            name:'品类4',
            type:'bar',
            stack: 'C',
            data:[62, 82, 91, 84, 109, 110, 120],
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: 'C',
                    textStyle: {color: '#333'}
                }
            }
        }
    ]
};
