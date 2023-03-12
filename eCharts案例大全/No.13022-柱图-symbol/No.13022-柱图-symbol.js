var myColor = ['#0078e5', '#3393e2', '#66aee9'];
        option = {
            title:{text:"供应商国网贡献"},
            grid: {
                left: '5%',
                top: '5%',
                right: '0%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                show: false,
            }],
            yAxis: [{
                axisTick: 'none',
                axisLine: 'none',
                axisLabel: {
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '16',
                    }
                },
                data: ['', '', '']
            }, {
                axisTick: 'none',
                axisLine: 'none',
                axisLabel: {
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '16',
                    }
                },
                data: ['3', '2', '1']
            }, {
                name: '分拨延误TOP 10',
                nameGap: '50',
                nameTextStyle: {
                    color: '#ffffff',
                    fontSize: '16',
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [],
            }],
            series: [{
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: [377, 345, 333],
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle: {
                            color: '#ffffff',
                            fontSize: '16',
                        }
                    }
                },
                barWidth: 12,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                    }
                },
                z: 2
            },
                {
                    name: '外圆',
                    type: 'scatter',
                    hoverAnimation: false,
                    data: [0, 0, 0],
                    yAxisIndex: 2,
                    symbolSize: 35,
                    symbol: 'image://data:image/svg+xml;base64,PHN2ZyBpZD0i57uEXzI5MDgiIGRhdGEtbmFtZT0i57uEIDI5MDgiIHhtbG5zPSJodHR' +
                        'wOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9' +
                        'IjAgMCAzNi45OTkgNzEuNDgiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IHVybCgjb' +
                        'GluZWFyLWdyYWRpZW50KTsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW' +
                        '50IiB4MT0iMC41IiB5MT0iLTAuMzU2IiB4Mj0iMC41IiB5Mj0iMSIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgo' +
                        'gICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMxYmM4ZmMiIHN0b3Atb3BhY2l0eT0iMC43OCIvPgogICAgICA8c3Rv' +
                        'cCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMTg0YjkiIHN0b3Atb3BhY2l0eT0iMC42OTQiLz4KICAgIDwvbGluZWFyR3JhZGllb' +
                        'nQ+CiAgPC9kZWZzPgogIDxwYXRoIGlkPSLot6/lvoRfMjM1IiBkYXRhLW5hbWU9Iui3r+W+hCAyMzUiIGNsYXNzPSJjbHMtMSIgZD' +
                        '0iTTEyLjg5MSwxNDguMzc5QTE4Ljg3NiwxOC44NzYsMCwwLDAsMCwxNjYuNDg2djEyLjkyMWExLjE2NywxLjE2NywwLDAsMCwxLjE' +
                        '1NiwxLjE1Nkg3LjM5NHYxNS42YS45NzQuOTc0LDAsMCwwLC45NzguOTYzSDI4LjYyN2EuOTc0Ljk3NCwwLDAsMCwuOTc4LS45NjN2' +
                        'LTE1LjZoNC44MTZBMi41OCwyLjU4LDAsMCwwLDM3LDE3Ny45ODRWMTY1LjMzYzAtMTEuNjQ3LTEyLjEyMS0yMC43NDUtMjQuMTA4L' +
                        'TE2Ljk1MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTEyNS42NDkpIi8+CiAgPHBhdGggaWQ9Iui3r+W+hF8yMzYiIGRhdGEtbm' +
                        'FtZT0i6Lev5b6EIDIzNiIgY2xhc3M9ImNscy0xIiBkPSJNNzMuOCwxMC43QTEwLjc1LDEwLjc1LDAsMSwwLDYzLjA1OCwyMS40LDE' +
                        'wLjc0NCwxMC43NDQsMCwwLDAsNzMuOCwxMC43Wm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NC41NSkiLz4KPC9zdmc+Cg==',
                    symbolOffset: [-48, 0],
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var num = myColor.length;
                                return myColor[params.dataIndex % num]
                            },
                            opacity: 1,
                        }
                    },
                    z: 2
                }
            ]
        };