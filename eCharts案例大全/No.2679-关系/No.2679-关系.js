const legend1= "image:///asset/get/s/data-1616488906907-TTcSsT2dL.png";
const legend2= "image:///asset/get/s/data-1616488914803-Pen9H3XeG.png";
const legend3= "image:///asset/get/s/data-1616488899626-PSUAyWzyA.png";

const symbol1= "image:///asset/get/s/data-1616487032064-6FOUWYNk3.png";
const symbol2= "image:///asset/get/s/data-1616487535227-ELoLLlCbe.png";
const symbol3= "image:///asset/get/s/data-1616487247546-VOogMaQ_I.png";
const symbol4= "image:///asset/get/s/data-1616487251844-2-ThXQ4Rw.png";

 // tooltip
title:"1111"
const tooltip= {
trigger: 'item',
textStyle: { fontSize: '100%'},
// backgroundColor: 'none',
formatter: params => {
if(params.dataType=== "edge") {
            return `
                <div>接触： 2021-07-14</div>
            `
        }
        
        switch (params.value.type) {
case 0:
                return `
                    <div>
                        <div>检测阳性：2021-7-14</div>
                        <div>出院：</div>
                    </div>
                `
                break;
case 1:
                return `
                    <div>
                        <div>发病：2021-07-14</div>
                        <div>确诊：2021-07-14</div>
                        <div>出院：</div>
                    </div>
                `
                break;
default:
                break;
        }
    }
}

const legend= {
show: true,
bottom: '5%',
right: '2%',
textStyle: { color: '#fff' },
itemWidth: 20,
itemHeight: 20,
//orient: 'vertical',
data: [
{ name: '确诊病例', icon: legend3 },
// { name: '无症状感染', icon: legend2 },
{ name: '密接', icon: legend1 },
    ]
}

const series= {
type: 'graph',
layout: 'none', // 图的布局
symbol: symbol1, // 默认是「未感染」
symbolSize: 90,
categories: [ { name: "密接" }, { name: "无症状感染" }, { name: "确诊病例" }],
label: { 
show: false,
position: 'bottom',
textStyle: { fontSize: 14, color: '#FF8F59' }, 
       
       
    },
edgeSymbol: ['circle', 'circle'],
edgeSymbolSize: [4, 4],
edgeLabel: { show: true, textStyle: { fontSize: 10 }, formatter: "{c}" },
data: [
{ name: '咩盛', value: { num: 55, type: 0 }, draggable: true,  x: 40, y: 40, symbol: symbol2 }, //0
{ name: '雷勒', value: { num: 55, type: 1 }, category: 1, draggable: true, x: -20, y: 30, symbol: symbol2}, //1
{ name: '小闷', value: { num: 55, type: 2 }, category: 1, draggable: true, x: -10, y: 50, symbol: symbol3 }, //2
{ name: '排麻糯', value: { num: 55, type: 1 }, category: 1, draggable: true, x: 0, y: 30.4, symbol: symbol2}, //3
{ name: '雷雨杰', value: { num: 55, type: 3 }, category: 1, draggable: true,  x: 60, y:39.4 , symbol: symbol2}, //4
       
{ value: { num: 55, type: 3 }, category: 1, draggable: true,  x: -40, y:20 }, //5
{ value: { num: 55, type: 3 }, category: 1, draggable: true,  x: -10, y:70}, //6
{ value: { num: 55, type: 3 }, category: 1, draggable: true,  x: 15, y:20}, //7
{ value: { num: 55, type: 3 }, category: 1, draggable: true,  x: 30, y:60}, //8
{value: { num: 55, type: 3 }, category: 1, draggable: true,  x: 70, y:60}, //9
// { name: '熊大', value: { num: 55, type: 2 }, category: 1, draggable: true, x: 36, y: 39, symbol: symbol2 },

// { name: '张芳芳', value: { num: 55, type: 3 }, category: 1, draggable: true,  x: 10, y: 50 },
//{ name: '李四1', value: { num: 55, type: 3 }, category: 1, draggable: true,  x: 36, y: 25 }, 
// { name: '李四2', value: { num: 55, type: 3 }, category: 1, draggable: true,  x: 45, y: 48 }, 
// { name: '李四3', value: { num: 55, type: 3 }, category: 1, draggable: true,  x: 35, y: 52 }, 
// { name: '李四4', value: { num: 55, type: 3 }, category: 1, draghttps://www.makeapie.com/explore.htmlgable: true,  x: 34, y: 62 }, 
// { name: '李四5', value: { num: 55, type: 3 }, category: 1, draggable: true,  x: 18, y: 56 }, 
    ],
links: [
{ source: 1, target: 2, value: '同事', }, 
{ source: 2, target: 3, value: '同事', }, 
{ source: 1, target: 3, value: '同事', }, 
{ source: 0, target: 4, value: '邻居', }, 
{ source: 1, target: 5, value: '密接', }, 
{ source: 7, target: 3, value: '密接', }, 
{ source: 6, target: 2, value: '密接', }, 
{ source: 0, target: 8, value: '密接', }, 
{ source: 4, target: 9, value: '密接', }, 


    ],
lineStyle: {
opacity: 0.9,
width: 1,
curveness: 0,
color: '#FFFFFF',
cap:"round"
    }
}

option= { tooltip, series, legend,  backgroundColor: 'black' }
