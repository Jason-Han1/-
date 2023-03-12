let dataPie = [
    {
        value: 257,
        name: '摄像头',
        color:"#1682de",
        color2:"#0d2b46"
    },
    {
        value: 82,
        name: '照明',
         color:"#2aa6d5",
        color2:"#123241"
    },
    {
        value: 35,
        name: '消防',
         color:"#4259e2",
        color2:"#192148"
    },
     {
        value: 168,
        name: '门禁',
         color:"#adb6c7",
        color2:"#34383f"
    },
     {
        value: 82,
        name: '空调',
        color:"#e7102a",
        color2:"#461421"
    },
];
/*FacilityList:any = [
        {name:"摄像头",pct:"41%",num:257,img:"/img/blue.png",color:"#1e98ff"},
        {name:"照明",pct:"41%",num:82,img:"/img/green.png",color:"#1aa5d8"},
        {name:"消防",pct:"41%",num:35,img:"/img/purpue.png",color:"#4661ff"},
        {name:"门禁",pct:"32%",num:168,img:"/img/grey.png",color:"#adb6c7"},
        {name:"空调",pct:"8%",num:82,img:"/img/red.png",color:"#f9102b"},
      ];*/
let baseDataPie = [],
    baseDataPie2 = [],
    total = 0;
for (var i = 0; i < dataPie.length; i++) {
    total +=dataPie[i].value
}
for (var i = 0; i < dataPie.length; i++) {
    baseDataPie.push(
        {
            value: dataPie[i].value,
            name: dataPie[i].name,
            itemStyle: {
                normal: {
                    color: dataPie[i].color,
                    borderWidth: 10,
                    borderColor: dataPie[i].color,
                },
            },
            labelLine: {
                show: false,
                length: 50,
            },
            label: {
                show: false,
                
            },
        },
        {
            value:total*0.05,
            name: '留白',
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderWidth: 10,
                    borderColor: 'transparent',
                },
            },
            label: {
                show: false,
            },
        }
    );
    baseDataPie2.push(
        {
            value: dataPie[i].value,
            name: dataPie[i].name + '内框',
            itemStyle: {
                normal: {
                    color: dataPie[i].color2,
                    borderWidth: 10,
                    borderColor: dataPie[i].color2,
                },
            },
        },
        {
            value: total*0.05,
            name: '留白',
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderWidth: 10,
                    borderColor: 'transparent',
                },
            },
        }
    );
}

option = {
    backgroundColor: '#021228',
    title: {
         text: '552',
         subtext: '设备总数',
         textStyle: {
             color: '#cfdfee',
             fontSize: 18,
             fontWeight: 800,
             fontFamily:"",
             textShadowColor:"#154d73",
             textShadowBlur:50

         },
         subtextStyle: {
             align: 'center',
             fontSize: 12,
             color: ['#85c7e3'],
             
         },
         x: 'center',
         y: 'center',
     },
    
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: '{a}：{b} <br/>占比：{d}%',
    },

    grid: {
        left: '1%', // 与容器左侧的距离
        right: '1%', // 与容器右侧的距离
        top: '1%', // 与容器顶部的距离
        bottom: '1%', // 与容器底部的距离
    },
    series: [
        {
            name: '告警',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '50%'],
            radius: ['46%', '49%'],
            tooltip: {
                show: false,
            },

            data: baseDataPie,
        },
        {
            name: '',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '50%'],
            radius: ['43%', '46%'],
            tooltip: {
                show: false,
            },
            label: {
                show: false,
            },
            data: baseDataPie2,
        },
    ],
};
