//创建放三级菜单的dom
var thirdBox= document.createElement('div');
thirdBox.id= 'thirdBox';
var body = document.querySelector('body');
body.appendChild(thirdBox);

//thirdBox的css
var boxStyle = document.createElement("style"); 
var str=`
    #thirdBox{
        background:linear-gradient(0deg,rgba(30,39,87,1) 0%,rgba(0,76,172,1) 100%);
        box-shadow:1px 2px 5px 0px rgba(6, 1, 0, 0.35);
        border-radius:2px;
        position: relative;
        padding: 15px 0;
        width: 300px;
        top: -200px;
        left: -200px;
    }
    #thirdBox ul{
        color: #fff;
        font-size:16px;
        font-family:SourceHanSansSC-Light;
        font-weight:300;
    }
    #thirdBox ul span{
        display: inline-block;
        padding: 0 6px;
    }
`
if(boxStyle.styleSheet){         //ie下  
    boxStyle.styleSheet.cssText = str;  
} else {  
    boxStyle.innerHTML = str;
};
document.getElementsByTagName("head")[0].appendChild(boxStyle);

option = {
    backgroundColor:'#1b326a',
        color: ['#916324', '#7B470F'],
        xAxis: {
            show: false,
            type: 'value',
            max: 10,
            min: -10,
        },
        yAxis: {
            show: false,
            type: 'value',
            max: 10,
            min: -10,
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '30%',
                center: ['50%', '50%'],
                data: [
                    {value: 250, name: '增值电信业务', selected: true},
                    {value: 320, name: '基础电信业务'},
                ],
                roseType: 'angle',
                label: {
                    normal: {
                        position: 'inner',
                        formatter: '{d}%\n{b}',

                        textStyle: {
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: 14
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
            }, {
                type: 'graph',
                layout: 'force',
                symbolSize: '140',
                focusNodeAdjacency: false,
                coordinateSystem: 'cartesian2d',
                //roam: true,
                draggable: false,
                categories: [{
                    itemStyle: {
                        normal: {
                            color: "#B08B44",
                        }
                    }
                }],
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 12
                        },
                    }
                },
                force: {
                    repulsion: 1000
                },
                edgeSymbolSize: [4, 50],
                data: [{
                    name: '第一类基础电信业务',
                    value: [-4, 5],
                    category: 0
                }, {
                    name: '第二类基础电信业务',
                    value: [-4, -5],
                    category: 0
                }, {
                    name: '第一类增值电信业务',
                    value: [4, 6],
                    category: 0
                }, {
                    name: '第二类增值电信业务',
                    value: [4, -5],
                    category: 0
                }],
                lineStyle: {
                    normal: {
                        opacity: 0.9,
                        width: 1,
                        curveness: 0
                    }
                }
            }
        ]
    };
    
    myChart.on('click', function (params) {
        var position= [
            {
                x: '50px',
                y: '50px'
            },{
                x: '50px',
                y: '350px'
            },{
                x: '850px',
                y: '50px'
            },{
                x: '850px',
                y: '350px'
            }     
        ]
        //判断点击的是二级的圆圈
        if(params.seriesIndex === 1){
            var html= '<ul>'+
                '<li>通信业务<span>1</span>(家)</li>'+
                '<li>通信业务<span>2</span>(家)</li>'+
                '<li>通信业务<span>3</span>(家)</li>'+
            '</ul>';
            console.log(params)
            var i= params.dataIndex;
            $('#thirdBox').html(html).css('top',position[i].y);
            $('#thirdBox').html(html).css('left',position[i].x)
        }
            
           
    })