option = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            label: {
                show: true,
                formatter: function (params) {
                    debugger
                }
            }
        }
    },
    xAxis: {
        type: 'value',
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value} '
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed'
            }
        },
        show: true
    },
    yAxis: {
        data: ["铁道工程系","管理工程系","电气与信息工程系","道路工程系","轨道工程系","建筑工程系","机电工程系","?业工程系"],
        },
    series: [{
            name: '',
            type: 'bar',
            stack: 'top',
            barWidth: '20px',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function (params) {
                        if(params.dataIndex === 2){
                            return ""
                        }
                        if(params.dataIndex === 1){
                            return ""
                        }
                        if(params.dataIndex === 0){
                            return ""
                        }
                    }
                }
            },
            data: [[1500,0],[1000,1],[500,2],[1500,3],[300,4],[1100,5],[1300,6],[800,7]]
        },
        {
            name: '',
            type: 'bar',
            stack: 'top',
            barWidth: '20px',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function (params) {
                        if(params.dataIndex === 2){
                            return ""
                        }
                        if(params.dataIndex === 1){
                            return ""
                        }
                        if(params.dataIndex === 0){
                            return ""
                        }
                    }
                }
            },
            data: [[1500,0],[1000,1],[500,2],[1500,3],[300,4],[1100,5],[1300,6],[800,7]]

        },{
            name: '',
            type: 'bar',
            stack: 'top',
            barWidth: '20px',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function (params) {
                        if(params.dataIndex === 2){
                            return ""
                        }
                        if(params.dataIndex === 1){
                            return ""
                        }
                        if(params.dataIndex === 0){
                            return ""
                        }
                    }
                }
            },
            data: [[1500,0],[1000,1],[500,2],[1500,3],[300,4],[1100,5],[1300,6],[800,7]]
        },
        {
            name: '',
            type: 'bar',
            stack: 'top',
            barWidth: '20px',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function (params) {
                        if(params.dataIndex === 2){
                            return ""
                        }
                        if(params.dataIndex === 1){
                            return ""
                        }
                        if(params.dataIndex === 0){
                            return ""
                        }
                    }
                }
            },
            data: [[1500,0],[1000,1],[500,2],[1500,3],[300,4],[1100,5],[1300,6],[800,7]]

        },
        {
            name: '',
            type: 'bar',
            stack: 'top',
            barWidth: '20px',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function (params) {
                        if(params.dataIndex === 2){
                            return ""
                        }
                        if(params.dataIndex === 1){
                            return ""
                        }
                        if(params.dataIndex === 0){
                            return ""
                        }
                    }
                }
            },
            data: [[1500,0],[1000,1],[500,2],[1500,3],[300,4],[1100,5],[1300,6],[800,7]]

        },
        {
            name: '',
            type: 'bar',
            stack: 'top',
            barWidth: '20px',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: function (params) {
                        if(params.dataIndex === 2){
                            return ""
                        }
                        if(params.dataIndex === 1){
                            return ""
                        }
                        if(params.dataIndex === 0){
                            return ""
                        }
                    }
                }
            },
            data: [[1500,0],[1000,1],[500,2],[1500,3],[300,4],[1100,5],[1300,6],[800,7]]

        },
        {
            name: '',
            type: 'bar',
            stack: 'top',
            barWidth: '20px',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: function (params) {
                        if(params.dataIndex === 2){
                            return ""
                        }
                        if(params.dataIndex === 1){
                            return ""
                        }
                        if(params.dataIndex === 0){
                            return ""
                        }
                    }
                }
            },
            data: [[1500,0],[1000,1],[500,2],[1500,3],[300,4],[1100,5],[1300,6],[800,7]]

        }]
};