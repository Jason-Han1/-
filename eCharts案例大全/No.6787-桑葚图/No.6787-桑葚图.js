// var fadianliang=[
//                 {"TIME":"","NAME":"华能云南分公司","VAL":"2.0253","PID":""},
//                 {"TIME":"","NAME":"小湾水电站","VAL":"0.2140","PID":"华能云南分公司"},
//                 {"TIME":"","NAME":"漫湾水电站","VAL":"0.1101","PID":"华能云南分公司"},
//                 {"TIME":"","NAME":"景洪水电站","VAL":"0.2909","PID":"华能云南分公司"},
//                 {"TIME":"","NAME":"龙开口水电站","VAL":"0.2696","PID":"华能云南分公司"},
//                 {"TIME":"","NAME":"濡扎渡水电站","VAL":"0.4654","PID":"华能云南分公司"},
//                 {"TIME":"","NAME":"功果桥水电站","VAL":"0.2005","PID":"华能云南分公司"}
//                 ];
// var node=[];
// var links=[];
// var color=["#F89A56" , "#30C25B", "#66B4FF" , "#FF4464" , "#9AE65B"];
// var d=fadianliang[0].TIME;
// for(var i=0 ; i<fadianliang.length; i++)
// {
//     //model.nodes的值
//     var nodes={};
//     nodes["name"]=fadianliang[i].NAME;
//     nodes["value"]=fadianliang[i].VAL;
//     nodes["itemStyle"]={"normal":{"color":color[i%5]}};
//     node[i]=nodes;
//     //model.links的值
//     if (i>0){
//         var links2={};
//         links2["source"]=fadianliang[i].PID;
//         links2["target"]=fadianliang[i].NAME;
//         links2["value"]=fadianliang[i].VAL;
//         links2["lineStyle"]={"normal":{"color":color[i%5],"opacity":0.3}};
//         links[i-1]=links2;
//     }
    
// }

var node=[
        {name:"华能云南分公司",itemStyle:{color: "#F89A56"}},
        {name:"小湾水电站",itemStyle:{color: "#30C25B"}},
        {name:"漫湾水电站",itemStyle:{color: "#66B4FF"}},
        {name:"景洪水电站",itemStyle:{color: "#FF4464"}},
        {name:"龙开口水电站",itemStyle:{color: "#9AE65B"}},
        {name:"濡扎渡水电站",itemStyle:{color: "#F89A56"}},
        {name:"功果桥水电站",itemStyle:{color: "#30C25B"}},
    ];
var links=[
        {source:"华能云南分公司",target:"小湾水电站",value:"0.2140",lineStyle:{color: "#30C25B", opacity: 0.3}},
        {source:"华能云南分公司",target:"漫湾水电站",value:"0.1101",lineStyle:{color: "#66B4FF", opacity: 0.3}},
        {source:"华能云南分公司",target:"景洪水电站",value:"0.2909",lineStyle:{color: "#FF4464", opacity: 0.3}},
        {source:"华能云南分公司",target:"龙开口水电站",value:"0.2696",lineStyle:{color: "#9AE65B", opacity: 0.3}},
        {source:"华能云南分公司",target:"濡扎渡水电站",value:"0.4654",lineStyle:{color: "#F89A56", opacity: 0.3}},
        {source:"华能云南分公司",target:"功果桥水电站",value:"0.2005",lineStyle:{color: "#30C25B", opacity: 0.3}},
    ];
var model={"nodes":node,"links":links};
myChart.showLoading();
//$.getJSON(uploadedDataURL, function (data) {
myChart.hideLoading();

myChart.setOption(option = {
	backgroundColor:"#071A38",
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    grid:{
        right: 60,
    },
    formatter:function(params){
        return params.name + '：' + params.value + '万kW.h';
    },
    series: [{
        type: 'sankey',
        layout:'none',
        data: model.nodes,
        links: model.links,
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor: '#aaa'
            }
        },
        lineStyle: {
            normal: {
                curveness: 0.5,
                color: 'source',
            }
        },
        label: {
            normal: {
                fontSize:12,
                color:'#D4E8FF',
                formatter: function(params) {
                    if(params.name=='华能云南水电有限公司'){
                        return  d + '日发电量：' + params.value + '亿kW.h';
                    }else{
                        return params.name + '\n' + params.value + '亿kW.h';
                    }
                }
            }
        }
    }]
});
