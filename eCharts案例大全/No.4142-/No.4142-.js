 let iconRQ     = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAhCAYAAACxzQkrAAAEf0lEQVRYhbVXXWgcVRT+7vzsbnZ3NphNINmQJhohWBqatC61toUqiNU+FCGhfWugoEWtBTUlYEXECoGoL6VSiUIsPpjaB0Wlgqht0zRKbENRqEKjJma2tLsb3dn/3dkdOZOZMKaT/YHpB5d77p1zzv0459yfYZqmoV60o1SrRQDAJgCtAAoAogBuyOCV9QyEutnUhkcBDJRj8ccLM7Pe0uKSi7ldGtfWWnRt25ppbw5+D+CcDP7KWm9OR4gicrgwMzuUGjsZKkz/FEC5zP6nwXGaa8c2xT98JOLaHp4AcNoaMScJdUPTJpNvjbWlT30UQrlc2QnHwffCoYj0+vAtMLZfBj8Ph1M2mHjx2Ibs2c9baMC7PAh2h9EY6oFLCuoKhWQcicjviM/PolTIIX1yPFS+HRUbT40NAhiFgxE6nP5gYiR5/O1OGnib2tG5fQCCx29rr+ZSWJg5h8yyrI+lE68t+J4bGpXBn3aCkFdTkpejW3b3lhOK4A40o3v3EHjRXdFHqZjH/IUJ5JUYuMaA2nLtwi8sIO3k6mZzN57MfHK2icjoZPv2VCVDIJ32vqd0mWwzZyYpr3ucILQz/92lRhI8gRb4WjprNvS1bNBtCPkfpmiH7nCCUEdpccm9skBX3camjeGjwwlCwfLyPyIJgsdXt7Hg8eq99m+CfNznBKEkJ/n1Klfz6bqN1XxG75nfRz5SThD6g3+gK0dC+s5fdRunowt6z9/fST7+dILQtPuxXQkSckoU6dhi7WRifyOXuKPLho9pJwid9x48EGcBSaVBZO4b/YypBtKJzJ3XtZjkV8kH+XKCUIYFpHH/8BH92KUoLVyZrFhP9I10SJfgP/aSzALShzL4jJOX60ji+Vdfzn72hX6wCG6vfpcF2nvg9jfpCvnUMhR55S4zi7lhcF+08f133pPBO3qXER5EqfRp8o3RUHr8TFvV254x+J49eEt6cyQCnj8gg7/pNCECHf+HirPXhpIn3g0VfvzZ/j30yMOKdPyViBje8jEASlV8lec9esLuohdjcXbuifje/Q/BXIMxBL+evCGG+781XoxTaw2dKGo70EJHxXD/ZbGvN2l+F/t7k2K4f0oGf9SOzL0kZOLLhsF9q+loGNDlryoZ3GtCFz3P7E2A5zWqHV0GLlYyEBhjlb7bIqSptaoqXHPwqrixp1tTS4xrDl6nOXNNu/oVjCiZrDRLcwrXxa2bnzbkq9WUBYMMZ8i8pad5ZhAsGa1otJpDBOA3cfOmDAT9QflrLYTsQETofSIaOi7L2BVhAjMIqsYfac5odF+kQ5pasPi8KfRuzLIVQvO1EqpUSHbfyM5rJWmRxQgT6JjO6vec15tplRd5cFz5dkdXsbS05DHIr7sYZ0mVmS4zMqJNc8G+X9vIT0YvYq9XgSAsa4oSAxAz5tctamsEtDW9dW49UNpSRkRSRqPtnQhpqu2RHmHr/5+uTZldesy5ohFqIpA35GxIU7NVCNcFk5A1MmWjUGlRkokAkVm9vus4h+qGubXN7e3k+VMVd9UQgP8AIn7I0Tcc64cAAAAASUVORK5CYII="; 
 let curveness  = -0.4;//调整弧线弧度
 var geoCoordMap= {
 '黑龙江'          : [127.9688, 45.368, 48209.4, 22321.2, 19598.7, 30213.2, 2521.2, 1343.5, 6321.6, 1842.1, 832.9, 90129.3],
 '内蒙古'          : [110.3467, 41.4899, 59371.6, 23395.9, 18461.6, 29101.3, 510.5, 779.0, 688.4, 897.4, 202.6, 101229.1],
 "吉林"           : [125.8154, 44.2584, 459391.2, 24591.4, 16846.6, 28589.4, 2296.9, 228.8, 1580.4, 259.8, 661.8, 500829.2],
 '北京'           : [116.4551, 40.2539, 64368.7, 25737.1, 25712.1, 28573.9, 791.8, 817.1, 4888.7, 783.7, 60.2, 0],
 "辽宁"           : [123.1238, 42.1216, 48097.3, 19734.3, 16816.1, 28330.2, 1513.5, 278.1, 6055.0, 1414.1, 700.9, 84647.7],
 "河北"           : [114.4995, 38.1006, 40866.2, 17336.9, 16846.2, 28320.4, 840.3, 598.8, 1058.6, 330.5, 814.0, 75049.3],
 "天津"           : [117.4219, 39.4189, 30964.4, 14341.5, 13482.1, 28262.8, 1437.9, 721.5, 4372.5, 627.2, 767.2, 58788],
 "山西"           : [112.3352, 37.9413, 33211.8, 11435.8, 10818.7, 28256.7, 2109.7, 341.2, 5955.1, 1321.5, 402.3, 55466.3],
 "陕西"           : [109.1162, 34.2004, 35714.9, 10814.4, 10459.4, 28135.4, 1251.3, 1262.7, 2871.5, 1334.4, 442.1, 56988.7],
 "甘肃"           : [103.5901, 36.3043, 39459.1, 11358.6, 10410.8, 28123.4, 417.7, 1135.6, 172.1, 374.3, 415.8, 61228.5],
 "宁夏"           : [106.3586, 38.1775, 41869.0, 11961.8, 10586.4, 28068.3, 1120.6, 1267.5, 3768.9, 1750.2, 208.1, 76164.1],
 "青海"           : [101.4038, 36.8207, 48412.1, 14671.2, 13080.8, 28015.4, 2310.9, 982.4, 4577.3, 1709.5, 84.1, 76164.1],
 "新疆"           : [87.9236, 43.5883, 45938.4, 21869.1, 20580.3, 27942.3, 2105.6, 1217.5, 4485.3, 461.7, 115.6, 88387.8],
 "西藏"           : [91.11, 29.97, 43365.9, 23439.1, 22309.3, 27887.7, 2425.9, 905.6, 2855.7, 957.8, 410.0, 89114.3],
 "四川"           : [103.9526, 30.7617, 51939.6, 25734.6, 24733.1, 27864.5, 418.7, 775.7, 969.3, 1533.8, 285.6, 102407.3],
 "重庆"           : [108.3843, 30.4397, 48410.9, 24618.3, 22808.0, 27730.2, 82.3, 1117.8, 1573.9, 392.3, 122.6, 95837.2],
 "山东"           : [117.1582, 36.8701, 48096.1, 19309.1, 18306.3, 27592.8, 1044.9, 849.7, 2270.3, 918.8, 424.5, 85711.5],
 "河南"           : [113.4668, 34.6234, 45736.9, 19315.6, 17309.8, 27580.5, 1605.4, 136.6, 4704.7, 247.6, 142.2, 82362.3],
 "江苏"           : [118.8062, 31.9208, 53080.8, 22185.9, 21830.8, 27357.2, 628.1, 192.0, 5492.4, 1012.8, 728.3, 97097.5],
 "安徽"           : [117.29, 32.0581, 43080.6, 19308.0, 19081.0, 27230.3, 209.6, 968.5, 2151.5, 442.8, 60.1, 81469.6],
 "湖北"           : [114.3896, 30.6628, 48094.1, 21808.1, 20308.0, 26754.7, 355.6, 1318.8, 3087.1, 1167.9, 288.2, 90210.2],
 "浙江"           : [119.5313, 29.8773, 55821.3, 23698.1, 22337.0, 26471.4, 1955.7, 324.7, 2323.9, 592.2, 538.0, 2],
 "福建"           : [119.4543, 25.9222, 53644.6, 24933.1, 23093.6, 26322.2, 1302.6, 863.1, 2475.2, 1585.8, 472.9, 101671.3],
 "江西"           : [116.0046, 28.6633, 49616.3, 21843.9, 20803.4, 25755.4, 640.8, 1038.6, 4206.9, 227.6, 212.2, 92263.6],
 "湖南"           : [113.0823, 28.2568, 51893.9, 21415.9, 20280.9, 25617.6, 2336.6, 543.0, 2940.5, 1412.1, 233.5, 93590.7],
 "贵州"           : [106.6992, 26.7682, 45866.2, 23435.6, 22308.1, 25416.8, 1755.2, 1307.7, 1401.5, 31.2, 251.7, 91609.9],
 "云南"           : [102.9199, 25.4663, 48099.1, 18664.1, 16130.8, 25255.3, 1796.4, 694.9, 3368.8, 1199.3, 402.2, 82894],
 "广东"           : [113.1224, 23.0095, 62143.3, 25593.9, 24893.4, 25249.2, 1840.5, 347.1, 237.2, 1490.7, 530.4, 112630.6],
 "广西"           : [108.479, 23.1152, 44618.5, 18684.3, 17808.1, 24761.5, 808.0, 374.1, 2422.5, 165.5, 500.7, 81110.9],
 "海南"           : [110.3893, 19.8516, 55823.9, 25583.7, 24686.8, 24559.2, 1614.0, 1208.0, 784.1, 1337.4, 25.0, 95458.1],
 '上海'           : [121.4648, 31.2891, 64643.5, 28096.4, 2718.3, 24524.4, 720.9, 1236.0, 4808.8, 393.2, 143.8, 106094.4],
 '台湾'           : [121.5651, 25.0377, 24643.5, 147348.6, 13080.8, 24419.3, 667.2, 1100.0, 4976.4, 820.2, 210.2, 185072.9],
 '香港'           : [114.1466, 22.2701, 46147.4, 24614.3, 24590.5, 24395.4, 406.2, 171.1, 5021.7, 1793.3, 580.2, 95352.2],
 '澳门'           : [113.5495, 22.1918, 43464.3, 24935.8, 22812.1, 23987.3, 2519.4, 1110.3, 2692.8, 889.1, 704.1, 91212.2]
};
let data = [{
        name: "新疆",
        value: [12,23,12]
    },
    {
        name: "湖北",
        value: [12, 1,12]
    },
   
    {
        name: "重庆",
        value: [12, 1,12]
    },
    {
        name : "浙江",
        value: [12, 1,12]
    },
    {
        name : "台湾",
        value: [12, 1,12]
    },

];
data.push(
    {
        name: "北京",
        value: [0,0,0]
    }
)
let lineData = [];
data.forEach(e=>{
    let list = [],posistion = geoCoordMap[e.name];
    console.log(posistion.slice(0,2))  
    list = posistion.slice(0,2).concat(e.value);
    e.value = list; 
    lineData.push({
         fromName: "北京",
         toName: e.name,
         value:e.value,
        coords: [
             geoCoordMap["北京"],
             posistion.slice(0,2)
           

        ]
    })
}) 


 

option = {
    backgroundColor: '#000f1e',
    tooltip: {
        // trigger: 'item'
        trigger: 'item',
        backgroundColor: 'rgba(166, 200, 76, 0.82)',
        borderColor: '#FFFFCC',
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: 'z-index:100',
        formatter: function(params, ticket, callback) {
            //根据业务自己拓展要显示的内容
             if (params.seriesType == "lines") {
                return "汽车：" + params.data.value[2]+'<br/>' +"火车: "+params.data.value[3]+'<br/>' +"飞机: "+params.data.value[4];
            }else{
                return ""
            }
            
        }
    },
    geo: {
        map: 'china',
        aspectScale: 0.85,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: '100%',
        itemStyle: {
            normal: {
                shadowColor: 'rgba(11,192,251,0.8)',
                shadowOffsetX: 0,
                shadowOffsetY: 15,
                opacity: 0.5,
            },
            emphasis: {
                areaColor: 'rgba(9,231,249,0.5)',

            }
        },
        regions: [{
            name: '南海诸岛',
            itemStyle: {
                areaColor: 'rgba(0, 10, 52, 1)',

                borderColor: 'rgba(0, 10, 52, 1)',
                normal: {
                    opacity: 0,
                    label: {
                        show: false,
                        color: "#009cc9",
                    }
                },


            },
            label: {
                show: false,
                color: '#FFFFFF',
                fontSize: 12,
            },


        }],

    },
    series: [
        // 常规地图
        {
            type: 'map',
            mapType: 'china',
            aspectScale: 0.85,
            layoutCenter: ["50%", "50%"], //地图位置
            layoutSize: '100%',
            zoom: 1, //当前视角的缩放比例
            // roam: true, //是否开启平游或缩放
            scaleLimit: { //滚轮缩放的极限控制
                min: 1,
                max: 2
            },
            itemStyle: {
                normal: {
                    areaColor: 'rgba(5,135,177,0.6)',
                    borderColor: '#1cccff', 
                    borderWidth: 1,//隐藏省界线
        			borderColor:"#3FBCCE",
        		    shadowColor: 'rgba(56,192,255,0.3)',
        			shadowBlur: 50

                },
                emphasis: {
                    areaColor: 'rgba(5,216,252,0.5)',
                    label: {
                        color: "#fff"
                    }

                }
            },


        },
        { //首都星图标
            name: '首都',
            type: 'scatter',
            
            coordinateSystem: 'geo',
            data: [{
                name: '首都',
                value: [116.24, 39.55],

            }, ],
            symbol: iconRQ, //气泡
            symbolSize:40,
            showAllSymbol: true,
            label: {
                normal: {
                    show: false,

                },
                emphasis: {
                    show: false
                }
            },

        },
        // 区域散点图
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            symbolSize: 2,
            rippleEffect: { //坐标点动画
                period: 0,
                scale: 0,
                brushType: 'fill'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                    color: '#b3e2f2', 
                    fontSize: 12
                }
            },

            data: data,
             

        },
        // 线 和 点
        {
            type: 'lines',
            zlevel: 1, //设置这个才会有轨迹线的小尾巴
             
            effect: {
                show: true,
                period: 3,
                trailLength: 0.1,
                color: '#fff', //流动点颜色
                symbol: 'arrow',
                symbolSize: 6
            },
            lineStyle: {
                type:"dotted",
                normal: {
                    color: '#fff', //线条颜色
                     width: 1, //线条宽度
                    opacity: 0.1, //尾迹线条透明度
                    curveness:curveness //尾迹线条曲直度
                }
            },
            data:  lineData

        },
     ]  
}

 