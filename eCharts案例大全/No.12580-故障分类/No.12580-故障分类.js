option = {
    title : {
        text: '故障分类',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // legend: {
    //     orient: 'vertical',
    //     left: 'left',
    //     data: ['测站全部离线','平台离线','图像站没有数据','服务器硬件故障','平台无法登陆','部分测站离线','配置站点信息','许可过期','预案上传失败','测站时间不正确','地图图像站部分偏离','接收软件故障','没有离线地图','平台预案上传不了，','山洪平台站点数据异常','收不到8点半点报率的短信','数据不对','预警人员导入','重新安装山洪软件']
    // },
    series : [
        {
            name: '故障分类',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
{ name: '测站全部离线', value:175},
{ name: '平台离线', value:56},
{ name: '服务器硬件故障', value:10},
{ name: '接收软件故障', value:9},
{ name: '图像站没有数据', value:9},
{ name: '平台无法登陆', value:7},
{ name: '山洪平台站点数据异常', value:5},
{ name: '部分测站离线', value:4},
{ name: '配置站点信息', value:2},
{ name: '许可过期', value:2},
{ name: '预案上传失败', value:2},
{ name: '地图部分偏离', value:1},
{ name: '没有离线地图', value:1},
{ name: '平台预案上传不了，', value:1},
{ name: '山洪软件重装', value:1},
{ name: '预警人员导入', value:1}
            ],
            label: {
                show:true,
                formatter: '{b} {d}%'
            },
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
