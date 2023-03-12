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
        data: ["项目资本金(万元)","项目建设资金(万元)","已完成投资(万元)"],
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
                            return "合同约定数"
                        }
                        if(params.dataIndex === 1){
                            return "合同约定数"
                        }
                        if(params.dataIndex === 0){
                            return ""
                        }
                    }
                }
            },
            data: [1,2,3]
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
                            return "实际到位数"
                        }
                        if(params.dataIndex === 1){
                            return "实际到位数"
                        }
                        if(params.dataIndex === 0){
                            return ""
                        }
                    }
                }
            },
            data: [[,0],[3,1],[1,2]]

        },{
            name: '',
            type: 'bar',
            stack: 'bottom',
            barWidth: '20px',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function (params) {
                        if(params.dataIndex === 2){
                            return "合同约定数"
                        }
                        if(params.dataIndex === 1){
                            return "政府债券"
                        }
                        if(params.dataIndex === 0){
                            return "主支管网"
                        }
                    }
                }
            },
            data: [1,2,3]
        },
        {
            name: '',
            type: 'bar',
            stack: 'bottom',
            barWidth: '20px',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function (params) {
                        if(params.dataIndex === 2){
                            return "实际到位数"
                        }
                        if(params.dataIndex === 1){
                            return "银行贷款"
                        }
                        if(params.dataIndex === 0){
                            return "接户管网"
                        }
                    }
                }
            },
            data: [1,1,3]

        },
        {
            name: '',
            type: 'bar',
            stack: 'bottom',
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
                            return "其他"
                        }
                        if(params.dataIndex === 0){
                            return ""
                        }
                    }
                }
            },
            data: [[,0],[1,1],[,2]]

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
                            return "社会资本方"
                        }
                        if(params.dataIndex === 1){
                            return "社会资本方"
                        }
                        if(params.dataIndex === 0){
                            return "厂区建设"
                        }
                    }
                }
            },
            data: [[0,0],[0,1],[0,2]]

        },
        {
            name: '',
            type: 'bar',
            stack: 'bottom',
            barWidth: '20px',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: function (params) {
                        if(params.dataIndex === 2){
                            return "政府方"
                        }
                        if(params.dataIndex === 1){
                            return "政府方"
                        }
                        if(params.dataIndex === 0){
                            return "管网建设"
                        }
                    }
                }
            },
            data: [[0,0],[0,1],[0,2]]

        }]
};