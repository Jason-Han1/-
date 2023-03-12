
            var data1 = [
                { name: '北京', value: [225236,2,22342] },
            ];
           
            var geoCoordMap = {
                '北京': [116.39, 39.93],
            };

            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };

            var pointSize = 10;//圆点大小

            var option = {
        backgroundColor: '#030511',       
        tooltip: {
            trigger: 'item',
            show: true,  
            borderWidth: 2, 
            borderColor: '#19A3C6',
            textStyle:{  
                fontSize: 18,  //提示框文字大小
            },
            formatter: function (params) {
                var res='<p>北京楼金融街楼宇</p>';
                res+='<div>'+'楼宇总面积：'+params.value[2]+' ㎡'+'</div>';
                res+='<div>'+'楼宇数量：'+params.value[3]+' 栋'+'</div>';
                res+='<div>'+'总能耗：'+params.value[4]+' 元'+'</div>'
                return res;
            }
        },
        
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
           // roam: true,
            zoom:1.2,//放大地图
        	//layoutSize : '250%',
            itemStyle: {
                normal: {
                    areaColor: '#030511',//区域颜色
                    borderWidth: 1, //地图边框宽度
                    borderColor: '#40959C'//区域划分边框颜色
                },
                emphasis: {
                    
                    areaColor: '#2C8087'//鼠标Havor颜色
                }
            }
        },
        series: [
            {
                name: '北京楼金融街楼宇',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data1),
                symbolSize: pointSize,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,                
                label: {
                    normal: {                        
                        formatter: '{b}',
                        position: 'top',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {                        
                        color: '#19A3C6',//地图圆点的样式
                        shadowBlur: 10,
                        shadowColor: 'black'
                    }
                },
                zlevel: 1
            }
        ]
    };
