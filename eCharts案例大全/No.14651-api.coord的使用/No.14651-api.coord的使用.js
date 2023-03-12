app.title = '环形图';

option = {
    polar:{},
    angleAxis: {
        show: true,
        max: 360,//定义极坐标最大角度为360，方便运算
    },
    radiusAxis: {
        max: 100,//定义极坐标最大半径100，方便计算
        show: true
    },
    //自定义绘制图形如果比较简单可以使用graphic，可实现series自定义图形相同的效果
    graphic: [{
        type: 'circle',
        shape: {
            cx: 200,
            cy: 100,
            r: 15,
        },
        style: {
            fill: 'yellow'
        }
    }],
    series: [{
        type: 'custom',
        coordinateSystem: 'polar',
        renderItem (params, api) {
            //api有一个coord方法，参数是一个数组[原始半径值,原始角度值]，将用户传入的数据值映射到坐标系上
            //输出四个参数polar: [x, y, radius, angle]
            //分别为：极坐标下x坐标值，极坐标下y坐标值，极坐标下半径值，极坐标下角度值
            const posCircle = api.coord([30, 120])
            //这样用户只要定义自己方便计算的角度和半径让api.coord方法计算对应极坐标下的值
            const posSectorStartAngle = api.coord([60,api.value(0)])//api.value(0)即data的第一个值，以此类推...
            const posSectorEndAngle = api.coord([60,api.value(1)])
            return {
                type: 'group',
                children: [
                    {
                        type: 'sector',
                          shape: {
                            cx: params.coordSys.cx,//中心x坐标
                            cy: params.coordSys.cy,//中心y坐标
                            r0: 60,//内半径
                            r: 90,//外半径
                            startAngle: posSectorStartAngle[3],//起始角度弧度值
                            endAngle: posSectorEndAngle[3]//终止角度弧度值
                          },
                          style: {
                            fill: 'blue'//填充色
                          }
                    },
                    {
                       type: 'circle',
                        shape: {
                            cx: posCircle[0],
                            cy: posCircle[1],
                            r: 20,
                        },
                        style: {
                            fill: 'red'
                        } 
                    }
                ]
            }
        },
        data: [
            [0,180]
        ]
    }]
};