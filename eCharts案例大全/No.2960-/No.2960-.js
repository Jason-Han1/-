let aa = '';
    let scale = 1;
    var data = [{
            value: 13,
            name: 'I类'
        },
        {
            value: 12,
            name: 'II类'
        },
        {
            value: 12,
            name: 'III类'
        },
        {
            value: 5,
            name: 'IV类'
        },
        {
            value: 13,
            name: 'V类'
        }
    ];

    function getRich() {
        let result = {}
        colorArr.forEach((v, i) => {
            result[`normal${i}`] = {
                    fontSize: 16,
                    align: 'left',
                    padding: [2, 3],
                    color: '#00C0FF',
                },
                result[`value${i}`] = {
                    color: '#00C0FF',
                    align: 'left',
                    fontSize: 16,
                    padding: [2, 2],
                }
        })
        return result
    }
    var colorArr = ['#B6EC80', '#00C0FF', '#1EE494', '#5676FF', '#FFA86A']
    option = {
        tooltip: {
            trigger: 'item',
            borderColor: 'rgba(255,255,255,.3)',
            backgroundColor: 'rgba(13,5,30,.6)',
            borderWidth: 1,
            formatter: function(parms) {
                var str = parms.marker + "" + parms.data.name + "</br>" +
                    "占比：" + Math.round(parms.percent) + "%";
                return str;
            }
        },
        color: colorArr,
        legend: {
            icon: "circle",
            orient: 'vertical',
            right: "5%",
            top: '5%',
            itemGap: 15,
            textStyle: {
                color: '#fff',
                fontSize: 12,
            },
            data: ['I类', 'II类', 'III类', 'IV类', 'V类']
        },
        series: [{
            type: 'pie',
            radius: ['44%', '77%'],
            center: ["40%", "50%"],
            selectedMode: 'single',
            selectedOffset: 10,
            clockwise: true,
            label: {
                normal: {
                    formatter: function(params, ticket, callback) {
                        aa = params.dataIndex
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < data.length; i++) {
                            total += data[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0) + '%';
                        const index = params.dataIndex
                        return [`{normal${index}|${params.value}个}{normal${index}|${percent}}\n{value${index}|${params.name}}`].join('\n');
                    },
                    padding: [0, -55],
                    rich: getRich()
                }

            },
            labelLine: {
                length: 10,
                length2: 55,
                lineStyle: {
                    color: '#00C0FF',
                }
            },
            itemStyle: {
                normal: {
                    shadowColor: "rgba(0,0,0,0.4)",
                    shadowBlur: 15
                }
            },
            data: data
        }]
    };