var option = {
    backgroundColor: '#0B0720',
    title: [{
            text: "项目组规格、数量占比",
            x: "10%",
            top: 20,
            textStyle: {
                color: '#fff',
                fontSize: '36'
            },
            subtextStyle: {
                color: '#90979c',
                fontSize: '16',

            },
        },
        {
            text: "项目组规格、数量",
            x: "65%",
            top: 20,
            textStyle: {
                color: '#fff',
                fontSize: '36'
            },
            subtextStyle: {
                color: '#90979c',
                fontSize: '16',

            },
        }
    ],
    grid: [{
        x: '50%',
        y: '7%',
        width: '45%',
        height: '90%'
    }, ],
    legend: [{
            x: '2%',
            y: '10%',
            orient: 'vertical',
            align: 'left',
            textStyle: {
                color: '#fff'
            },
            data: ['客服电话', '奥迪官网', '媒体曝光', '质检总局', '其他']
        },
        {
            x: "right",
            orient: 'vertical',
            top: "10%",
            textStyle: {
                color: '#fff'
            },
            data: ['客服电话', '奥迪官网', '媒体曝光', '质检总局', '其他']
        }
    ],
    tooltip: {
        formatter: '{b} ({c})'
    },
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#fff'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "data": ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#fff'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "splitArea": {
            "show": false
        },

    }],
    series: [{
            name: '项目组规格、数量占比',
            type: 'pie',
            radius: '30%',
            center: ['22%', '55%'],
            color: [
                //Cyan
                '#61418C',
                '#434F96',
                '#E5AA25',
                '#2598BC',
                '#13c2c2'
            ],
            data: [{
                    value: 335,
                    name: '客服电话'
                },
                {
                    value: 310,
                    name: '奥迪官网'
                },
                {
                    value: 234,
                    name: '媒体曝光'
                },
                {
                    value: 135,
                    name: '质检总局'
                },
                {
                    value: 105,
                    name: '其他'
                },
            ],
            labelLine: {
                show: true
            },
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    borderColor: '#FFF',
                    label: {
                        show: true,
                        formatter: '{b} \n ({d}%)',
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
            },
        }, {
            "name": "客服电话",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "#61418C",
                    "label": {
                        "show": false,
                        "textStyle": {
                            "color": "#fff"
                        },
                        "position": "insideTop",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                709,
                1917,
                2455,
                2610,
                1719,
                1433,
                1544
            ],
        },

        {
            "name": "奥迪官网",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "#434F96",
                    "barBorderRadius": 0,
                    "label": {
                        "show": false,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                327,
                1776,
                507,
                1200,
                800,
                482,
                204
            ]
        },
        {
            "name": "媒体曝光",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "#E5AA25",
                    "barBorderRadius": 0,
                    "label": {
                        "show": false,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                327,
                1776,
                507,
                1200,
                800,
                482,
                204
            ]
        },
        {
            "name": "质检总局",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "#2598BC",
                    "barBorderRadius": 0,
                    "label": {
                        "show": false,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                327,
                1776,
                507,
                1200,
                800,
                482,
                204
            ]
        },
        {
            "name": "其他",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": "#13c2c2",
                    "barBorderRadius": 0,
                    "label": {
                        "show": false,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                327,
                1776,
                507,
                1200,
                800,
                482,
                204
            ]
        }

    ]
};