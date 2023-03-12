
//获取X轴偏移量
var getOffsetW = function(y,bh,xv,minxv){
    var rev;
    if(rev == undefined&&y>=bh){rev = 0;}
    if(rev == undefined){
        rev=(xv-minxv)/2 - y/bh*(xv-minxv)/2;
    }
    return rev;
}

var option = {
    title: {
        text: '自定义渲染-容器分层展示'
    },
    tooltip: {},
    xAxis: {
        min:0,
        max:20,
        offset:20,
        axisLabel:{show:false},
        splitLine:{show:false},
        axisTick:{show:false,length:20},
        axisLine:{show:false}
    },
    yAxis: {
        min:0,
        max:10,
        offset:20,
        splitLine:{show:false},
        axisTick:{show:true,length:20},
        axisLine:{show:false}
    },
    series: [
        {
            z:1,
            type: 'custom',
            name:"容器",
            itemStyle:{color:"#eeeeee",opacity: 1,borderWidth:4,borderColor:"#cccccc"},
            emphasis:{itemStyle: {color:"#cccccc",opacity: 1,borderWidth:4,borderColor:"#000000"}},
            encode: {
                x:[0],
                y:[1],
                seriesName: [2]
            },
            data:[[20,10,"容器"]],
            renderItem: function(params, api){
                var xv = 20;
                var bh = 2;
                var minxv = 10;
                var offset = getOffsetW(0,bh,xv,minxv);
                var x1 =0,x2=xv,y1=0,y2=10;
                var ps = [
                    [x1+offset,0],[0,2],[0, y2],
                    [x2,y2],[x2,2],[x2-offset,y1]
                ].map(api.coord);
                //ps.forEach((item,i)=>item[0])
                var style = api.style()
                return {
                    type: 'polygon',
                    shape: {
                        points:ps
                    }
                    ,style:api.style()
                    ,styleEmphasis:api.styleEmphasis()
                }
            }
        },
        {
            z:2,
            type: 'custom',
            tooltip:{
                formatter:function(arg){
                    return `${arg.seriesName}-${arg.data.toString()}`
                }
            },
            name:"物资",
            itemStyle: {
                color:"#000000",
                opacity: 0.5
            },
            emphasis:{
                itemStyle: {
                    color:"#00ff00",
                    opacity: 0.3
                }
            },
            encode: {
                x:[0],
                y: [1, 2],
                seriesName: [3,4]
            },
            data: [
                [20,0,1.5,"分区1","#ff0000"],
                [20,1.5,4,"分区2","#00ff00"],
                [20,4,8,"分区3","#0000ff"],
                [20,8,9,"分区4","#ffff00"]
            ],
            renderItem: function(params, api){
                var xv = 20;
                var bh = 2;
                var minxv = 10;

                var y1 = api.value(1);
                var y2 = api.value(2);
                var x1 = 0;
                var x2 = xv;
                var offsetx1 = getOffsetW(y1,bh,xv,minxv);
                var offsetx2 = getOffsetW(y2,bh,xv,minxv);
                var text = api.value(3);
                var color = api.value(4);
                var p_txt = api.coord([xv, (y1+y2)/2]);
                p_txt[1]-=7;

                var ps;
                if(y1<2&&y2>2){
                    ps = [[x1+offsetx1, y1],[0,2],[x1+offsetx2, y2],[x2-offsetx2,y2],[x2,2],[x2-offsetx1,y1]].map(api.coord);
                }else{
                    ps = [[x1+offsetx1, y1],[x1+offsetx2, y2],[x2-offsetx2,y2],[x2-offsetx1,y1]].map(api.coord);
                }

                
                return {
                    type:"group",
                    children:[
                        {
                            type: 'text',
                            style:{
                                opacity:0.3,
                                text:text,
                                x:p_txt[0]+25,
                                y:p_txt[1],
                                textAlign:"center",
                                font:'12px "microsoft yahei", sans-serif'
                            }
                            ,styleEmphasis:{opacity:1}
                        },{
                            type: 'polygon',
                            shape: {
                                points:ps
                            }
                            ,style: Object.assign({},api.style(),{fill:color,opacity:0.3})
                            ,styleEmphasis: Object.assign({},api.styleEmphasis(),{fill:color,opacity:0.6})
                        }
                    ]
                }
            }
        }
    ]
}