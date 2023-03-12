waterPlanData = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
    option = {
        title: {},
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
        legend: {
            // orient: 'vertical',
            // top: 'middle',
            top: 20,
            right: 'right'
            //                    data: (function () {
            //                        var years = [];
            //                        for (var i = 0; i < pieData.length; i++) {
            //                            years.push(pieData[i].name);
            //                        }
            //                        return years
            //                    })()
        },
        series: [{
            type: 'pie',
            radius: '65%',
            center: ['40%', '50%'],
            selectedMode: 'single',
            data: [20,12,4],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    }