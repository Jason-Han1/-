app.title = 'Dgnet一周评价得分';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    toolbox: {
        feature: {
            saveAsImage:{}
        }
    },
    legend: {
        data:['使用须知', '数据集管理', '参数文件夹管理','训练与测评任务','交互式管理','PR曲线','Step_Loss_ACC','终端管理-新建','终端管理-镜像','终端管理-云盘','终端管理-nfs']
    },
    grid: {
      
        right: '4%',
        bottom: '3%'
       
    },
    yAxis : [
        {
            type : 'value'
        }
    ],
    xAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['zhengxinkang','zhentaotan','zhichengsun']
        }
    ],
    series : [
        {
            name:'使用须知',
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position:'top'
                }
            },
            data:[7,0,7]
        },
        {
            name:'数据集管理',
            type:'bar',
            
            label: {
                normal: {
                    show: true,
                    position:'top'
                }
            },
            data:[7,9,7]
        },
        {
            name:'参数文件夹管理',
            type:'bar',
            
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:[7,0,7]
        },
        {
            name:'训练与测评任务',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:[7,0,7]
        },
        {
            name:'交互式管理',
            type:'bar',
           
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:[7,0,7]
        },
        {
            name:'PR曲线',
            type:'bar',
          
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:[7,0,7]
        },
        {
            name:'Step_Loss_ACC',
            type:'bar',
            
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:[7,0,7]
        },
        {
            name:'终端管理-新建',
            type:'bar',
           
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:[7,9,7]
        },
        {
            name:'终端管理-镜像',
            type:'bar',
            
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:[7,9,7]
        },
        {
            name:'终端管理-云盘',
            type:'bar',
           
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:[7,0,8]
        },
        {
            name:'终端管理-nfs',
            type:'bar',
           
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:[7,0,7]
        }
    ]
};
