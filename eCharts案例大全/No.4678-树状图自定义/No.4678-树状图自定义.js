myChart.showLoading();
const ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/incubator-echarts-website@asf-site/examples'
$.get(ROOT_PATH + '/data/asset/data/flare.json', function(data) {
    myChart.hideLoading();

    // 一级
    data.symbol = "none"

    echarts.util.each(data.children, function(datum, index) {
        // 二级
        datum.symbol = "circle"
        datum.symbolSize = 5
        index % 2 === 0 && (datum.collapsed = true);
        if (index % 2 === 0) {
            datum.lineStyle = {
                color: "rgba(221, 24, 24, 1)"
            }
            datum.label = {
                color: "rgba(221, 24, 24, 1)",
                formatter: [
                    '{img|}',
                    '{value|{b}}'
                ].join('\n'),
                rich: {
                    value: {
                        color: '#00f',
                        align: 'left'
                    },
                    img: {
                        height: 20,
                        align: 'center',
                        backgroundColor: {
                            width: 10,
                            height: 10,
                            image: "https://d1icd6shlvmxi6.cloudfront.net/gsc/7M4LPX/a9/72/f9/a972f9c0851044b6a217f40afa6f3622/plugins/sitemap/styles/images/share.png?token=fd704be27028da5207db0637f6bf5dac688a650e16cae1a435f74414566d1f03"
                        }
                    }
                }
            }
        } else {
            datum.lineStyle = {
                color: "rgba(112, 210, 14, 1)"
            }
        }
    });
    // console.log(data)

    myChart.setOption(option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [{
            type: 'tree',

            data: [data],

            top: '1%',
            left: '7%',
            bottom: '1%',
            right: '20%',

            // 三级
            symbol: "https://d1icd6shlvmxi6.cloudfront.net/gsc/7M4LPX/a9/72/f9/a972f9c0851044b6a217f40afa6f3622/plugins/sitemap/styles/images/share.png?token=fd704be27028da5207db0637f6bf5dac688a650e16cae1a435f74414566d1f03",
            symbolSize: 10,

            label: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'right',
                fontSize: 9
            },

            leaves: {
                label: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left'
                }
            },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
        }]
    });
});