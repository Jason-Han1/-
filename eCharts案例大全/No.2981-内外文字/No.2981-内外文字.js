    var list = [
        {value: 1048, name: '搜索引擎'},
        {value: 735, name: '直接访问'},
        {value: 580, name: '邮件营销'},
        {value: 484, name: '联盟广告'},
        {value: 300, name: '视频广告'}
    ]
option = {
        legend: {
            show: false,
            orient: 'vertical',
            top: '0',
            right: '0',
            textStyle: {
                color: '#666666',
                fontWeight: 'normal'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)'
        },
        series: [
            {
                type: 'pie',
                selectedMode: false,
                //radius: ['40%', '81%'],
                radius: '80%',
                // center: center,
                //roseType: 'radius',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        textStyle: {
                            fontSize: '14',
                            color: '#FFFFFF',
                        },
                        formatter: function(params) {
                            return params.value;
                        },
                        rich: {
                            fonts: {
                                color: '#FFFFFF',
                                fontSize: '12'
                            }
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false,
                        length: 5
                    }
                },
                data: list,//.sort(function (a, b) { return a.value - b.value; }),
                // color: ['#3000FF','#3AA8B0', '#2CC9A9', '#00C973', '#41ADE2', '#FACC3D', '#EF7D16', '#F14C34', '#904AAB'],
                // silent: true
            },
            {
                type: 'pie',
                radius: '80%',
                // radius: radiusa,
                // center: center,
                label: {
                    normal: {
                        position: 'outside',
                        formatter: function(params) {
                            return params.name;
                        },
                        textStyle: {
                            fontSize: '12'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 5
                    }
                },
                data: list,
                silent: true
            }
        ]
    };
