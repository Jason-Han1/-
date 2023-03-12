option = {
    title: {
        top: 2,
        left: 'center',
        textStyle: {
            color: '#000',
            fontSize: 14
        }
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(param) {
            var html = param[0].axisValue + '<br/>';
            for (var index in param) {
                var seriesName = param[index].seriesName;
                var value = param[index].value;
                var marker = param[index].marker;
                html += marker +
                    seriesName +
                    ' : ' +
                    value;
                if ("-" === value) {
                    html += "<br/>";
                } else {
                    html += "%<br/>";
                }
            }
            return html;
        },
        backgroundColor: '#F7F9FB',
        borderColor: '#92DAFF',
        borderWidth: '1px',
        textStyle: {
            color: 'black'
        }
    },
    grid: {
        containLabel: true,
        top: '15%',
        left: '5%',
        right: '15%',
        bottom: '8%'
    },
    color: ["#309DF0", "#3FDE5D", "#f0c000", "#FFA616", "#FA5A4C"],
    legend: {
        top: '5%',
        itemWidth: 15,
        itemHeight: 15,
        data: ["优先保护类","安全利用类","严格管控类"]
    },
    "xAxis": [{
        name: '月份',
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        data: ["镉","汞","砷"]
    }],
    yAxis: [{
        type: 'value',
        name: '百分比',
        nameGap: 8,
        max: '100',
        min: 0,
        /*  max:30,*/
        position: 'left',
        axisLabel: {
            formatter: '{value}% '
        }
    }],
    series: [{
            "name": "优先保护类",
            "type": "bar",
            "stack": "总量",
            "data": ["88.5", "81.5", "74.1"]
        },
        {
            "name": "安全利用类",
            "type": "bar",
            "stack": "总量",
            "data": ["3.8", "3.7", "14.8"]
        },
        {
            "name": "严格管控类",
            "type": "bar",
            "stack": "总量",
            "data": ["7.7", "7.4", "3.7"]
        }]
};