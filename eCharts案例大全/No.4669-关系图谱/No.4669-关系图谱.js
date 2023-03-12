var current = ['张子山'];

var getname = ['张大海','李梅'];

var getrelation = ['父亲','母亲'];

var getname2 = ['张三','李四','王五'];

var getrelation2 = ['舍友','舍友','舍友'];

var getmajor2 = ['19级化学类','19级化学类','19级化学类'];

var getname3 = ['李慧珍','王沥川','李晨曦','赵雪琴','张铭轩'];

var getmajor3 = ['授课教师','授课教师','授课教师','授课教师','授课教师'];

var getlesson3 = ['工业生产应用有机化学','工业生产应用有机化学','工业生产应用有机化学','工业生产应用有机化学','工业生产应用有机化学'];

var getpost3 = ['研究员','研究员','研究员','研究员','研究员'];



current=current[0]
var family = getname.map((item,index)=>{
    return{
        name:getname[index],
        relation:getrelation[index]
    }
})
var roommate = getname2.map((item,index)=>{
    return {
        name:getname2[index],
        relation:getrelation2[index],
        major:getmajor2[index]
    }
})
var teacher = getname3.map((item,index)=>{
    return {
        name:getname3[index],
        relation:getmajor3[index],
        lesson:getlesson3[index],
        post:getpost3[index]
    }
})
var data = [{
    type:'家庭关系',
    value:family
},{
    type:'舍友关系',
    value:roommate
},{
    type:'师生关系',
    value:teacher
}]




// 请勿随意修改
// var current = '张子山'
// var data = [{
//     type:'家庭关系',
//     value:[{
//         name:'李梅',
//         relation:'姐'
//     },{
//         name:'张大海',
//         relation:'父亲'
//     }]
// },{
//     type:'舍友关系',
//     value:[{
//         name:'张三',
//         relation:'舍友',
//         major:'19级化学类'
//     },{
//         name:'李四',
//         relation:'舍友',
//         major:'19级化学类'
//     },{
//         name:'王五',
//         relation:'舍友',
//         major:'19级化学类'
//     }]
// },{
//     type:'师生关系',
//     value:[{
//         name:'李慧珍',
//         relation:'授课教师',
//         lesson:'工业生产应用有机化学',
//         post:'研究员'
//     },{
//         name:'王沥川',
//         relation:'授课教师',
//         lesson:'工业生产应用有机化学',
//         post:'研究员'
//     },{
//         name:'李晨曦',
//         relation:'授课教师',
//         lesson:'工业生产应用有机化学',
//         post:'研究员'
//     },{
//         name:'赵雪琴',
//         relation:'授课教师',
//         lesson:'工业生产应用有机化学',
//         post:'研究员'
//     },{
//         name:'张铭轩',
//         relation:'授课教师',
//         lesson:'工业生产应用有机化学',
//         post:'研究员'
//     }]
// }]

// console.log(data)

// 圆形颜色
var colorList = {
    '家庭关系':new echarts.graphic.LinearGradient(0,0,0,1,[{
        offset:0,
        color:'#5998FF'
    },{
        offset:1,
        color:'#5CC0FF'
    }]),
    '舍友关系':new echarts.graphic.LinearGradient(0,0,0,1,[{
        offset:0,
        color:'#0FB27C'
    },{
        offset:1,
        color:'#4BCDA1'
    }]),
    '师生关系':new echarts.graphic.LinearGradient(0,0,0,1,[{
        offset:0,
        color:'#7A7AE9'
    },{
        offset:1,
        color:'#899BF9'
    }]),
    '中心':new echarts.graphic.LinearGradient(0,0,0,1,[{
        offset:0,
        color:'#FF6061'
    },{
        offset:1,
        color:'#FF7E7C'
    }])
}
// 背景颜色
var shadowList = {
    '家庭关系':'rgba(42, 154, 241, 0.5)',
    '舍友关系':'rgba(33, 186, 135, 0.5)',
    '师生关系':'rgba(129, 138, 241, 0.5)'
}
// 线条颜色
var lineList = {
    '家庭关系':'#DCEAF2',
    '舍友关系':'#DCF2ED',
    '师生关系':'#F1ECF4'
}
var links = []
var linkNum = 1;
var seriesData = data.map((item,index)=>{
    return item.value.map((it,id)=>{
        links.push({
            source:0,
            target:linkNum++,
            lineStyle:{
                color:lineList[item.type]
            }
        })
        return {
            ...it,
            itemStyle:{
                normal:{
                    color:colorList[item.type],
                    shadowColor:shadowList[item.type],
                    shadowBlur:10
                }
            },
            category:item.type
        }
    })
})

option = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'item',
            align: 'left',
            backgroundColor:'#fff',
            formatter: function (params) {
                let html = ''
                if(params.data.category === '家庭关系'){
                    html = `<span style="font-size:16px;line-height:32px;color:#4e4e4e;font-weight:bold">${params.data.name}</span>
                            <br/>
                            <span style="font-size:14px;line-height:32px;color:#4e4e4e">关系：${params.data.relation}</span>
                    `
                }else if(params.data.category === '舍友关系'){
                    html = `<span style="font-size:16px;line-height:32px;color:#4e4e4e;font-weight:bold">${params.data.name}</span>
                            <br/>
                            <span style="font-size:14px;line-height:32px;color:#4e4e4e">关系：${params.data.relation}</span>
                            <br/>
                            <span style="font-size:14px;line-height:32px;color:#4e4e4e">年级专业：${params.data.major}</span>
                    `
                }else if(params.data.category === '师生关系'){
                    html = `
                            <span style="font-size:16px;line-height:32px;color:#4e4e4e;font-weight:bold">${params.data.name}</span>
                            <br/>
                            <span style="font-size:14px;line-height:32px;color:#4e4e4e">关系：${params.data.relation}</span>
                            <br/>
                            <span style="font-size:14px;line-height:32px;color:#4e4e4e">专业技术职务：${params.data.post}</span>
                            <br/>
                            <span style="font-size:14px;line-height:20px;color:#4e4e4e;">授课课程：${params.data.lesson}</span>
                    `
                }
                return html
            },
            extraCssText:'white-space:normal;padding:5px 15px;width:200px;word-break:break-all;box-shadow: 1px 6px 15px 0px rgba(0, 0, 0, 0.13)'
        },

        label: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 12
                }
            }
        },
        legend: {
            x: 'center',
            show: true,
            data: ['家庭关系', '舍友关系','师生关系']
        },
        series: [
            {
                type: 'graph',
                layout: 'force',
                symbolSize: 80,
                center: ['50%', '50%'],
                draggable:true,
                focusNodeAdjacency: true,
                roam: false,
                itemStyle: {
                    normal: {
                        color: colorList['中心'],
                        shadowColor:'rgba(255, 100, 100, 0.5)',
                        shadowBlur:10
                    },
                    emphasis: {
                        // 高亮状态
                    }
                },
                categories: [
                    {
                        name: '家庭关系',
                        itemStyle: {
                            normal: {
                                color: colorList['家庭关系']
                            }
                        }
                    },
                    {
                        name: '舍友关系',
                        itemStyle: {
                            normal: {
                                color: colorList['舍友关系']
                            }
                        }
                    },
                    {
                        name:'师生关系',
                        itemStyle:{
                            
                            normal:{
                                color:colorList['师生关系']
                            }
                        }
                    }
                ],
                label: {
                    normal: {
                        color:'#ffffff',
                        show: true,
                        textStyle: {
                            fontSize: 12
                        }
                    }
                },
                force: {
                    repulsion: 1000,
                    gravity: 0.1,
                    edgeLength: [100, 200]
                },
                edgeSymbolSize: [4, 50],

                lineStyle: {
                    normal: {
                        width: 5,
                        curveness: 0.1, // 线的弯曲度 0-1之间 越大则歪曲度更大
                        color: '#B5D7C9'
                    }
                },
                data:[{name:current},...seriesData.flat(2)],
                links:links
            }
        ]
    };