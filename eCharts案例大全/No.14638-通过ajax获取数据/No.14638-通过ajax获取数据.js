var uploadedDataURL = "/asset/get/s/data-1510296043104-HyXlqaMJM.json";

option = {
    backgroundColor: '#0f375f',
    title: {
        text: '通过ajax获取数据',
        top: '5%',
        x: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    legend: {
        bottom: 20,
        textStyle: {
            color: '#fff'
        },
        data: ['数量']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff'
            }
        },
        splitLine: {
            show: false
        }
    },
    yAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff'
                }
            },
            data: []
        }

    ],
    series: [

        {
            name: '家数',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: '#5de3e1',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333'
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: []
                //data: [353, 39,230,12,42,1064]
        }

    ]
};
var sumYAxisData = new Array();
var sumSeriesData = new Array();
$.ajax({
    url: '/asset/get/s/data-1510296043104-HyXlqaMJM.json',
    type: 'GET', //GET
    async: true, //或false,是否异步
    success: function(data, textStatus, jqXHR) {
        var data = eval("(" + data + ")");
        //alert(data.length)
        for (var i = 0; i < data.length; i++) {
            sumSeriesData.push(data[i].num);
            sumYAxisData.push(data[i].qyType);
        }
        //alert(sumYAxisData);
        myChart.setOption({
					yAxis: {
						data: sumYAxisData
					},
					series: [{
						// 根据名字对应到相应的系列
						data: sumSeriesData
					}]
				});
    }
})