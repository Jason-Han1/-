option = {
    title : {
        text: '2018 农场DCC 软件提交占比',
        subtext: '数据来源于 Deadline',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        left: 'center',
        top: 60,
        data: ['MayaBatch','Nuke','Houdini', 'MayaCMD']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : ['40%', '70%'],
            center: ['50%', '55%'],
            data:[
                {value:12059.02, name:'MayaBatch'},
                {value:10735.45, name:'Nuke'},
                {value: 52821.32, name:'Houdini'},
                {value:6087.68, name:'MayaCMD'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
