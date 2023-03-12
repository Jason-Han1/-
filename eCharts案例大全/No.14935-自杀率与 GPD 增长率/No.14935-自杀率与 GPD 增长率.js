var gdp = "/asset/get/s/data-1504149403899-B1VjkbrYb.json";
var suicide = "/asset/get/s/data-1504148156995-HJB69eHtZ.json";

var series = [];
for (var i = 0; i < 4; ++i) {
    series.push({
        name: 2000 + i * 5 + '',
        type: 'scatter',
        data: [],
        label: {
            normal: {
                show: true,
                formatter: '{b}',
                position: 'right'
            }
        }
    })
}

option = {
    xAxis: {
        name: 'GDP 增长率',
        max: 30,
        min: -30
    },
    yAxis: {
        name: '自杀人数（每万人）',
        max: 50,
        min: 0
    },
    series: series,
    legend: {
        data: ['2000', '2005', '2010', '2015'],
        selectedMode: 'single'
    },
    dataZoom: [{
        type: 'slider',
        startValue: -2,
        endValue: 12
    }, {
        type: 'slider',
        startValue: 0,
        endValue: 20,
        yAxisIndex: 0
    }, {
        type: 'inside'
    }, {
        type: 'inside',
        yAxisIndex: 0
    }]
};

$.getJSON(gdp, function (res) {
    getSuicide(res);
});

function getSuicide(gdpData) {
    $.getJSON(suicide, function (res) {
        // data for 2000, 2005, 2010, 2015
        var suiData = [[], [], [], []];
        for (var i = 0; i < res.fact.length; ++i) {
            var year = res.fact[i].dims.YEAR;
            var sid = (parseInt(year, 10) - 2000) / 5;
            
            if (sid >= 0 && sid < res.fact.length 
                && res.fact[i].dims.SEX === 'Both sexes'
            ) {
                var country = res.fact[i].dims.COUNTRY;
                var gdp = getGdp(gdpData, country, sid);
                if (gdp && gdp !== '-') {
                    var itemStyle = {};
                    if (country === 'China') {
                        itemStyle = {
                            normal: {
                                borderColor: 'yellow',
                                borderWidth: 3
                            }
                        }
                    }
                    suiData[sid].push({
                        name: country,
                        value: [gdp, parseFloat(res.fact[i].Value)],
                        itemStyle: itemStyle
                    });
                }
            }
        }
        
        var series = [];
        for (var i = 0; i < suiData.length; ++i) {
            series.push({
                type: 'scatter',
                data: suiData[i]
            });
        }
        
        myChart.setOption({
            series: series
        });
    });
}

function getGdp(data, country, sid) {
    for (var i = 0; i < data.length; ++i) {
        if (country.indexOf(data[i][0]) > -1) {
            return data[i][sid + 1];
        }
    }
    return '-';
}
