var uploadedDataURL = "/asset/get/s/data-1614828284945-i_KeAfQtX.png";

var fullImage = new Image();
let waterLevel = 68; //水位
let sensorX = 491; //传感器在原图中的横向位置

const calcMargin = (height, width, margin = 0) => { //边留空白计算，margin要与grid设置一致
    let mHeight = height * margin,
        mWidth = width * margin,
        outerWidth = width * window.devicePixelRatio,
        outerHeight = height * window.devicePixelRatio,
        innerWidth = (width - 2 * mWidth) * window.devicePixelRatio,
        innerHeight = (height - 2 * mHeight) * window.devicePixelRatio;
    return {
        outerWidth,
        outerHeight,
        innerHeight,
        innerWidth,
        marginHeight: mHeight * window.devicePixelRatio,
        marginWidth: mWidth * window.devicePixelRatio
    };
};
const marginObj = calcMargin(myChart.getHeight(), myChart.getWidth(), 0.1);

console.log(marginObj);

const getImage = (url, {
    outerWidth,
    outerHeight,
    innerHeight,
    innerWidth,
    marginHeight,
    marginWidth
}) => { //绘制背景图片
    let img = new Image();
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = outerWidth;
    canvas.height = outerHeight;

    return new Promise((resolve, reject) => {
        img.onload = function() {
            ctx.drawImage(img, 0, 0, img.width, img.height,
                marginWidth, marginHeight, innerWidth, innerHeight
            );
            resolve({
                src: canvas.toDataURL(),
                width: img.width,
                height: img.height
            });
        };
        img.src = url;
    });
};

const setData = (xs, ys, xScale, yScale) => {
    let nXs = xs.map(x => Math.round(xScale * x));
    let nYs = ys.map(y => Math.round(yScale * y))
    let res = nXs.map((x, i) => {
        xValue = x;
        yValue = ys[i] || null;
        return {
            value: [xValue, yValue],
        };
    });
    return res;
};

const getIntersectPoint = (xScale, yScale, yScaleWater) => {
    let ctx = myChart._dom.querySelector('canvas[data-zr-dom-id="zr_1"]').getContext('2d');
    const {
        outerWidth,
        outerHeight,
        innerHeight,
        innerWidth,
        marginHeight,
        marginWidth
    } = marginObj;

    let x = xScale * sensorX + marginWidth,
        y = marginHeight +  yScaleWater,
        width = innerWidth - xScale * sensorX;
    let {
        data: arrs
    } = ctx.getImageData(x, y, width, 1);
    // debugger
    let colors = [];
    arrs = arrs.reverse();
    for (let i = 0; i < arrs.length; i) {
        let temp = arrs.slice(i, i += 4);
        let prev = i > 0 ? colors[colors.length - 1] : null;
        if (prev && (prev.join('') !== temp.join(''))) {
            break;
        }
        colors.push(temp);
    }
    console.log(arrs);
    console.log(colors);
    return colors.length;
}

option = {
    title: {
        text: 'Awesome Chart'
    },
    grid: [{
        show: true,
        left: '10%',
        bottom: '10%',
        top: '10%',
        zlevel: 1,
        borderWidth: 0,
        backgroundColor: {
            image: fullImage, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
            repeat: 'no-repeat' // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
        },
    }],
    xAxis: {
        show: false,
        type: "value",
        //开启x轴坐标
        min: 0,
        max: 1200,
        axisPointer: {
            show: false
        },
        zlevel: 1,
    },
    yAxis: {
        show: true,
        type: "value",
        min: 0,
        max: 1200,
        //开启y轴坐标
        axisPointer: {
            show: false
        },
        zlevel: 1,
    },
    series: [{
        zlevel: 1,
        type: 'line',
        smooth: true,
        symbolSize: 15,
        data: [],
        symbol: 'circle',
        itemStyle: {
            color: 'red'
        },
        label: {
            show: true,
            position: 'top'
        },
    }, {
        zlevel: 0,
        type: 'line',
        symbolSize: 0,
        "color": "#2dc3b5",
        "areaStyle": {
            "color": "#2dc3b5",
            // "opacity":1
        },
    }]
};

getImage(uploadedDataURL, marginObj)
    .then(({
        src,
        width,
        height
    }) => {
        const {
            outerWidth,
            outerHeight,
            innerHeight,
            innerWidth,
            marginHeight,
            marginWidth
        } = marginObj;
        let yMax = 84,
            yMin = 45.56,
            xScale = innerWidth / width,
            yScale = innerHeight / height,
            yScaleWater = innerHeight * (yMax - waterLevel) / (yMax - yMin);
        fullImage.src = src;
        option.xAxis.max = innerWidth;
        option.yAxis.max = yMax;
        option.yAxis.min = yMin;
        let waterY = waterLevel;
        option.series[1]['data'] = [
            [0, waterY],
            [innerWidth, waterY]
        ];

        myChart.setOption(option);
        myChart.resize();
        setTimeout(() => {
            let x = getIntersectPoint(xScale, yScale, yScaleWater);
            let data = setData([sensorX, (innerWidth - x - 5) / xScale], [64, waterLevel],
                xScale, yScale);
            option.series[0]['data'] = data;
            myChart.setOption(option);
            console.log(data);
            // console.log(myChart._dom.querySelector('canvas[data-zr-dom-id="zr_1"]'));
        }, 1000);

    });