var ports = [
	{name:"48263",value:1717}, 
	{name:"38262",value:1625},
	{name:"23388",value:955},
	{name:"15868",value:1011},
	{name:"45727",value:1010},
	{name:"23568",value:896},
	{name:"24589",value:1230},
	{name:"20586",value:1022},
	{name:"35800",value:588},
	{name:"25368",value:756},
	{name:"87521",value:577},
	{name:"12536",value:1245},
];
var links = [
	{source:"48263",target:"38262",value:20}, 
	{source:"38262",target:"23388",value:25},
	{source:"23388",target:"15868",value:10},
	{source:"15868",target:"45727",value:20},
	{source:"45727",target:"23568",value:30},
	{source:"23568",target:"24589",value:25},
	{source:"24589",target:"20586",value:36},
	{source:"20586",target:"35800",value:18},
	{source:"35800",target:"25368",value:22},
	{source:"25368",target:"87521",value:38},
	{source:"87521",target:"12536",value:25},
	{source:"12536",target:"48263",value:35},
]
ports.forEach(function (node) {
    node.symbolSize = node.value /30;
    node.label = {
         normal: {
              show: node.symbolSize > 2,
              fontSize :30*node.value/1630
         }
    };
});
function weight(link) {
    if(link.value=="undefined"){
        return 1;
    }else{
        return link.value/10
    }
}

links.forEach(function (link) {
    link.lineStyle={
        normal:{
            width:weight(link),
            opacity:0.5
        }
    };
});
option = {
    title: [{
        text: 'Design elements✍',
        x: '50%',
        y: 30,
        textAlign: 'center',
        textStyle: {
            align: 'center',
            color: '#707b90',
            fontSize: 30,
            fontWeight: '100',
        },
    }],
    backgroundColor: "#000",
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series : [
        {
            name: '',
            type: 'graph',
            layout: 'circular',
            width: '50%',
         height: '50%',
            circular: {
                rotateLabel: true
            },
            data: ports,
            links: links,
            roam: true,
            label: {
                normal: {
                    position: 'right',
                    formatter: '{b}',
                    color:'#e3e3e3',
                    fontWeight:100,
                }
            },
            itemStyle:{
                normal: {
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                     offset: 0,
                     color: '#fff'
                 }, {
                     offset: 0.3,
                     color: '#1ffdfd'
                 }, {
                     offset: 1,
                     color: '#096869'
                 }])
                }
            },
            lineStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#f00'
                        }, {
                            offset: 1, color: '#0f0'
                        }],
                        globalCoord: false
                    },
                    curveness: 0.3,
                    opacity:0.2
                }
            }
        }
    ]
};