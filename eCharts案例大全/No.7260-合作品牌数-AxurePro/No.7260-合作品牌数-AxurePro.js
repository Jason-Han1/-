var lineX = [ "总合作品牌数", "新增合作品牌数",];
	var names = ['2018-09','2018-10','2018-11','2018-12','2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12','2020-01','2020-02','2020-03'];
	var value = [
    				['10','15','20','25','35','47','61','71','71','71','71','71','81','97','122','132','137','138','141'],
  					['0','5','5','10','12','14','10','-1','-2','-6','-250','10','16','25','10','5','1','3','18']
];

	var charts = {
   	 names: lineX,
   	 lineX: names,
   	 value: value

	}
console.log(charts);
var color = ['rgba(43, 103, 202', 'rgba(45,210,235', 'rgba(11,191,91', 'rgba(254,207,51']
var lineY = []

for (var i = 0; i < charts.names.length; i++) {
    var x = i
    if (x > color.length - 1) {
        x = color.length - 1
    }
    var data = {
        name: charts.names[i],
        type: 'line',
        color: color[x] + ')',
        smooth: true,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: color[x] + ', 0.3)'
                }, {
                    offset: 0.8,
                    color: color[x] + ', 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        symbol: 'circle',
        symbolSize: 5,
        data: charts.value[i]
    }
    lineY.push(data)
}

	var option = {

    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: charts.names,
        textStyle: {
            fontSize: 12,
            color: '#151619'
        },
        right: '4%'
    },
    grid: {
        top: '10%',
        left: '4%',
        right: '4%',
        bottom: '4%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: charts.lineX,
        axisLabel: {
            textStyle: {
                color: '#151619'
            },
        }
    },
    yAxis: {
        name: charts.unit,
        type: 'value',
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: '#151619'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#151619'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#151619'
            }
        }
    },
    	series: lineY
	}