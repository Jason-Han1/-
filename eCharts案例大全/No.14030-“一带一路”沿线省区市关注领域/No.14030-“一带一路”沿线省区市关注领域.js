var data =[{"value":23988,"name":"对外经贸合作"},{"value":23017,"name":"科技"},{"value":21013,"name":"文化体育"},{"value":18650,"name":"金融"},{"value":17820,"name":"教育"},{"value":17356,"name":"基础设施"},{"value":17355,"name":"物流"},{"value":17343,"name":"能源"},{"value":14928,"name":"铁路"},{"value":14752,"name":"国内贸易"},{"value":12484,"name":"旅游"},{"value":9184,"name":"农林牧渔"},{"value":8999,"name":"重大项目"},{"value":8108,"name":"环境保护"},{"value":7985,"name":"公路"},{"value":7720,"name":"电力"},{"value":7684,"name":"民航"},{"value":7487,"name":"医药卫生"},{"value":7318,"name":"信息产业"},{"value":7141,"name":"民族宗教"}];
var count_num = 0;
for (var m  in data){
    count_num = count_num +data[m]['value']
}
/*for (var n  in data){
    data[n]['name'] = data[n]['name'] + ' '+((data[n]['value']/count_num)*100).toFixed(1) +'%'
}*/

option = {
    backgroundColor: "#000",
    title : {
        text: '“一带一路”沿线省区市关注领域',
        subtext:'纯属虚构',
        x:'center',
        top:'30',
        textStyle: {
            color: "#fff",
        }
    },
    //显示series中信息，提示框组件
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    series : [
        {
            type: 'pie',    //图表类型，柱状图：bar
            //饼图：pie  (南丁格尔图在series中加上roseType:’angle’)移开后不显示原来信息
            radius : '55%',    //半径
            center: ['50%', '50%'],
            label:{formatter:"{b}+{d}%"},
            data:data,
            itemStyle: {  //itemStyle有正常显示：normal，有鼠标hover的高亮显示：emphasis
                emphasis: {  //normal显示阴影,与shadow有关的都是阴影的设置
                    shadowBlur: 10,  //阴影大小
                    shadowOffsetX: 0,  //阴影水平方向上的偏移
                    shadowColor: 'rgba(0, 0, 0, 0.5)'  //阴影颜色
                }
            }
        }
    ]
};