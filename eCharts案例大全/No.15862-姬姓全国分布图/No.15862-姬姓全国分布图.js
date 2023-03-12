var uploadedDataURL = "/asset/get/s/data-1478586813530-HyIpblkZg.json";

myChart.showLoading();

$.getJSON(uploadedDataURL, function(weiboData) {
    myChart.hideLoading();

    myChart.setOption(option = {
        backgroundColor: '#404a59',
        title: {
            text: '姬姓全国分布图',
            left: 'center',
            top: 'top',
            textStyle: {
                color: '#fff'
            }
        },
        legend: {
            show: false,
            left: 'left',
            data: ['强', '中', '弱'],
            textStyle: {
                color: '#ccc'
            }
        },
        geo: {
            name: '中国',
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: [{
            name: '弱',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 3,
            large: true,
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(37,140,249,0.9)',
                    color: 'rgba(37,140,249,0.9)'
                }
            },
            data: weiboData[0]
        }, {
            name: '中',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 8,
            large: true,
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(37,140,249,0.9)',
                    color: 'rgba(37,140,249,0.9)'
                },
            },
            data: weiboData[1]
        }, {
            name: '强',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 13,
            large: true,
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(37,140,249,0.9)',
                    color: 'rgba(37,140,249,0.9)'
                }
            },
            data: weiboData[2]
        }]
    });
});