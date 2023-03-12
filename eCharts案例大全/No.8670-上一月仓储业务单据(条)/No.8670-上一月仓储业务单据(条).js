var getData = [{"date": "2020-01-18", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-01-19", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-01-20", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-01-21", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-01-22", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-01-23", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-01-24", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-01-25", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-01-26", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-01-27", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-01-28", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-01-29", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-01-30", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-01-31", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-02-01", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-02-02", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-02-03", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-02-04", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-02-05", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-02-06", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-02-07", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-02-08", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-02-09", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-02-10", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-02-11", "stock_in_count": 2, "stock_out_count": 0}, {"date": "2020-02-12", "stock_in_count": 3, "stock_out_count": 3}, {"date": "2020-02-13", "stock_in_count": 5, "stock_out_count": 0}, {"date": "2020-02-14", "stock_in_count": 5, "stock_out_count": 6}, {"date": "2020-02-15", "stock_in_count": 0, "stock_out_count": 0}, {"date": "2020-02-16", "stock_in_count": 0, "stock_out_count": 0}];
var data1 = [];
var data2 = [];
var data3 = [];
for (var i = 0; i < getData.length; i++) {
    data1.push(getData[i].date);
    data2.push(getData[i].stock_out_count);
    data3.push(getData[i].stock_in_count);
}
option = {
    title: {
        text: '上一月仓储业务单据(条)',
        left: '50%',
        textAlign: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#ddd'
            }
        },
        backgroundColor: 'rgba(255,255,255,1)',
        padding: [5, 10],
        textStyle: {
            color: '#7588E4',
        },
        
    },
    legend: {
        right: 20,
        orient: 'vertical',
        data: ['出库单据','入库单据']
    },
    xAxis: {
        type: 'category',
        data: data1
    },
    yAxis: {
        type: 'value',
    },
    series: [{
        name: '出库单据',
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 6,
        data: data2,
    }, {
        name: '入库单据',
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 6,
        data: data3
    }]
};