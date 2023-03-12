option = {
    xAxis: {
        scale: true,
        splitLine : {
                show:false,
        }
    },
    yAxis: {
        scale: true,
        splitLine : {
                show:false,
        },
        axisLabel: {
            formatter: '{value} 元'
        },
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
            var value = obj.value;
            console.log(value);
            return "年份:" + value[0] + ",数值" + value[1];
        }
    },
    series: [{
        type: 'scatter',
        symbolSize: 10,
        data: [[1960, 200000],[1961, 200000],[1962, 200000],[1963, 200000],[1964, 200000],[1965, 200000],[1966, 200000],[1967, 200000],[1968, 200000],[1969, 200000]
        ,[1970, 200000],[1971, 200000],[1973, 200000],[1974, 200000],[2001, 200000],[2002, 200000]],
    }]
};
