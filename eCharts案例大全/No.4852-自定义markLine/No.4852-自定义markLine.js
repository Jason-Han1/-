option = {
    backgroundColor:"#00142f",
    grid: {
        left: '5%',
        right: '5%',
        top: '10%',
        bottom: '5%',
        containLabel: true
    },
    tooltip: {
        axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
                type: 'dashed',
                width: 1
            }
        }
        },
	legend: {
		show:false
	},
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            color: "#fff",
            fontSize:28
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#397cbc'
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#42b1e5'
            }
        },
        data: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100', '110', '120']
    }],
    yAxis: [{
            type: 'value',
            name: '单位:%',
            nameStyle:{
                color: '#5082b1',
                fontSize:28
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#5082b1',
                    fontSize:28
                }
            },
            axisLine: {
                show:false
            },
            axisTick: {
                show: false,
            },
            splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#387ca3',
                width: 2
            }
        },
            
        },

    ],
    series: [{
            name: '已采纳',
            type: 'line',
            stack: '总量',
            symbol: 'none',
            smooth:true,
            itemStyle: {
                normal: {
                    color: '#f6ff00',
                    lineStyle: {
                        color: "#f6ff00",
                        width: 2
                    },
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(246,255,0,0.4)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(246,255,0,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(246,255,0,0.9)',
                    shadowBlur: 20
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330],
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed',
                        color:"#660d1e",
                        width:3
                    }
                },
                data : [
                        [
                            {
                                name: '',
                                symbolSize:28,
                                symbol:"image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAADaklEQVRIiZ2WS2yMURTHf983Y1RHKcaz4tEQW++VKCuxkLASJKxYk1bs7YRgY6M7CYlEwkokFlTsPGNhQ+pZrxGm2hkto1fu+F85buaBm9zFfHPv+X3/c853zkkcLVcCrAU2AauBeUBel8rAO+A+cBO4i3NNTTYDpsAO4ADQAXwBKsAYUNWZLNAGtAPTgBHgLHAZ5yb+BbgQOC01H4CSAX6LgDkD7ATmSPVBnHv9N8D1wAnjro/AZ2BU6r4DP3Q2A0ySyqnADKBg3N6Lc3eaATcAp4AhbQ/8JFd5deNSF9yVSuVkqfSunylgl/YhnLtdD7gUuAC8B14Ab4AiMCx140ZduJYYlZOlcjowG1gALBZ8F849s0B/6aLcMAi8NOo87KuBTUTA1ECnCBpULgK6FZ6dOPcjq4vbdeCJQEXBhk3cQqLE2efMi0xE8Q0JtVwZfynVWx5QNlrQiGAhK10dGEZxVWfHdHdYtoqyvZ8kSTxwnYJd0h6pk5HWjRllYy5SGdR9191R2Sopyz1jnXdpj76xLzpUNglSNaB87duCbYqTV3MDOK4wYJSmslE2YG+/xwNXKeUrxoX2W3NKhnPACqPKK9yisrdbn5FTiILS4OJgf2Wq9LWgapQEfu2LYHbNAvqimAb3ViNwV6osqkYgZ1yJlDRbPXVi6gw82G9PWxgKq9Di/5xqacuVKrBZ7YyeJdphvWphaFSZGFZiikJq7Ff8j7cqvjlVCwsOHrjSAnjVJFlqqk9WNnNiDPk/HiiO7RE4Y972EnC9AewxcNKcxZS6nOmXfj/0wAH5v0PfV16FOKhNFPhe4CjwSO7zZfAMsFcuDcCsKeZ52ewQY8AXb3/ommL5FHhuCnc56hCNBoQk6hx5U8CXAMv0bGsqI/1qKQUd7NSbTYmU1svqNFIWOkanbBVku9+PHaFbXK71rF9vVIkqTaqPNtWzpEl7Cp1/liDztItiEIDe0GHgvLp0aEWhxZT/sgHnpczD5suWL/R7fC+0QNR4j2iewbiozYwY3xqMGLkmI0Yfzg3+DnadLNgIHFMmhiGqZDp/NWqy2ShuYYiaURPg3K0/sqtB2nVL6Wz5/3MdldRR5yHhzh/KWgGDu8Ig7N8+ABsNwh7ovfBfg3AMXgNs1qg/Nxr1/ZTnR33fjO81AtUW8BNiXEOqG/32NQAAAABJRU5ErkJggg==",
                                 yAxis: 160,
                                 xAxis: '40'
                            },
                            {
                                symbol: 'none',
                                x: '10%',
                                yAxis: 160
                            }
                        ],
                        [
                            {
                                name: '',
                                 yAxis: 160,
                                 symbol:"none",
                                 xAxis: '40'
                            },
                            {
                                symbol: 'none',
                                y: '93%',
                                xAxis: '40'
                            }
                        ],
                ]
            }
        },
    //     {
    //     type: 'scatter',
    //     data:[null,null,null,150],
    //     symbolSize:28,
    //     symbol:"image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAADaklEQVRIiZ2WS2yMURTHf983Y1RHKcaz4tEQW++VKCuxkLASJKxYk1bs7YRgY6M7CYlEwkokFlTsPGNhQ+pZrxGm2hkto1fu+F85buaBm9zFfHPv+X3/c853zkkcLVcCrAU2AauBeUBel8rAO+A+cBO4i3NNTTYDpsAO4ADQAXwBKsAYUNWZLNAGtAPTgBHgLHAZ5yb+BbgQOC01H4CSAX6LgDkD7ATmSPVBnHv9N8D1wAnjro/AZ2BU6r4DP3Q2A0ySyqnADKBg3N6Lc3eaATcAp4AhbQ/8JFd5deNSF9yVSuVkqfSunylgl/YhnLtdD7gUuAC8B14Ab4AiMCx140ZduJYYlZOlcjowG1gALBZ8F849s0B/6aLcMAi8NOo87KuBTUTA1ECnCBpULgK6FZ6dOPcjq4vbdeCJQEXBhk3cQqLE2efMi0xE8Q0JtVwZfynVWx5QNlrQiGAhK10dGEZxVWfHdHdYtoqyvZ8kSTxwnYJd0h6pk5HWjRllYy5SGdR9191R2Sopyz1jnXdpj76xLzpUNglSNaB87duCbYqTV3MDOK4wYJSmslE2YG+/xwNXKeUrxoX2W3NKhnPACqPKK9yisrdbn5FTiILS4OJgf2Wq9LWgapQEfu2LYHbNAvqimAb3ViNwV6osqkYgZ1yJlDRbPXVi6gw82G9PWxgKq9Di/5xqacuVKrBZ7YyeJdphvWphaFSZGFZiikJq7Ff8j7cqvjlVCwsOHrjSAnjVJFlqqk9WNnNiDPk/HiiO7RE4Y972EnC9AewxcNKcxZS6nOmXfj/0wAH5v0PfV16FOKhNFPhe4CjwSO7zZfAMsFcuDcCsKeZ52ewQY8AXb3/ommL5FHhuCnc56hCNBoQk6hx5U8CXAMv0bGsqI/1qKQUd7NSbTYmU1svqNFIWOkanbBVku9+PHaFbXK71rF9vVIkqTaqPNtWzpEl7Cp1/liDztItiEIDe0GHgvLp0aEWhxZT/sgHnpczD5suWL/R7fC+0QNR4j2iewbiozYwY3xqMGLkmI0Yfzg3+DnadLNgIHFMmhiGqZDp/NWqy2ShuYYiaURPg3K0/sqtB2nVL6Wz5/3MdldRR5yHhzh/KWgGDu8Ig7N8+ABsNwh7ovfBfg3AMXgNs1qg/Nxr1/ZTnR33fjO81AtUW8BNiXEOqG/32NQAAAABJRU5ErkJggg=="
    //    }
        
    ]
};