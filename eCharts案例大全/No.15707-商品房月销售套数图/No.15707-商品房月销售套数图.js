app.title = '广昌县2016年商品房月销售套数图';

option = {
    color: ['#eb7d22', '#d73f45'],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['所有套数','住宅套数']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                formatter: '{value} 套'
            }
        }
    ],
    series: [
        {
            name:'所有套数',
            type:'bar',
            "barGap": "15%",
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#333",
                            "fontSize":12
                        },
                        "position": "insideTop",
                        formatter: function(p) {
                            return p.value;
                        }
                    }
                }
            },
            data:[50, 182, 174, 103, 93, 146, 174, 120, 102, 218, 135, 120]
        },
        {
            name:'住宅套数',
            type:'bar',
            "barGap": "15%",
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#333",
                            "fontSize":12
                        },
                        "position": "insideTop",
                        formatter: function(p) {
                            return p.value;
                        }
                    }
                }
            },
            data:[42, 173, 150, 82, 85, 139, 154, 102, 76, 204, 110, 100]
        }
    ]
};
