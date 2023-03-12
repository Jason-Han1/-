option = {
    backgroundColor:"#fff",
    dataset: {
        source: [
            ["value", "规划方案设计", "部品研究", "全套施工图外审", "目标成本确定", "总包单位确定", "示范工程验收", "首次开盘", "开工"],
            ["运营计划完成时间", 20180705,20180922,20181122,20190105,20190326,20190630,20200131,20210115],
            ["实际完成时间", 20180703, 20181012,20190215],
            // ["回款30%", 199605, 167205],
            // ["现金流回正", 201810, 201811]
        ]
    },
    series: {
        "type": "custom",
        "coordinateSystem": "none",
        "seriesLayoutBy": "row",
        "label": {
            "show":true,
            "formatter": function(arg) {
                return arg.value[0]
            }
        },
        "renderItem": function a(params, api) {
            var left = 100,right=20,bp=50;
            var style = api.style(),
                v1=api.value(1),
                v2=api.value(2),
                cw = api.getWidth(),
                ch = api.getHeight(),
                w = (cw-left-right)/12,
                text = style.text,
                index = params.dataIndex,
                date = new Date(),
                now = date.getFullYear()*100+date.getMonth()+1,
                before = now-api.value(3)>0;
                console.log(v1,v2)
            var result={
                type:'group',
                position:[left+w*index+w/4,ch*2/5],
                children:[
                    {
                        type:'text',
                        style:{
                            text:text,
                            fill:params.context.now==0?'#999':'#333',
                            textAlign:'center',
                            textVerticalAlign:'middle'
                        },
                        position:[0,-30]
                    },{
                        type:'text',
                        style:{
                            text:v2?(v2.toString().substring(0,4)+'-'+v2.toString().substring(4,6)+'-'+v2.toString().substring(6,8)):(v1.toString().substring(0,4)+'-'+v1.toString().substring(4,6)+'-'+v1.toString().substring(6,8)),
                            fill:params.context.now==0?'#999':'#999',
                            textAlign:'center',
                            textVerticalAlign:'middle'
                        },
                        position:[0,30]
                    },{
                        type:'line',
                        style:{
                            stroke:v2?'#38d372':'#e3eaf6',
                            lineWidth:2
                        },
                        shape:{
                            x1:-w/2,x2:w/2,y1:0,y2:0
                        }
                    },{
                        type:'ring',
                        style:{
                            fill:'#fff',
                        },
                        shape:{
                            r:8,r0:0
                        }
                    },{
                        type:'ring',
                        style:{
                            fill:v2?'#38d372':'#e3eaf6',
                        },
                        shape:{
                            r:8,r0:params.context.now==0?6:0
                        }
                    }]
            }
            return result;
        }
    }
};