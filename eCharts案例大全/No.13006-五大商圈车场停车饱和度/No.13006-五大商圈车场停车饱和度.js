const fontColor = "#e5f1ff";
const colorArray = ['#1573ac', '#2595d3', '#f2c621', '#f09718', '#eb6712'];
const titleTextStyle = {
    "color": fontColor,
    'fontFamily': 'Microsoft YaHei',
    'fontWeight': 'normal',
    'fontSize': 16
};
let cheOrange = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAZCAYAAADqrKTxAAAB2UlEQVQ4jY3UT0sVYRTH8c+9dzKtSMX+CKNUuq8kKlrVdhb1FiqiTWs3YQPG3fQCegeFizYRVNMmkGhZVAhJERTGWCjZH8rs6s0W86ijoLcDwzw8zHfO7/zOeZ7K6OgoSPMsxnWcQQ3LqKCJp7hZj5NnUA1AN+7hEgZwEIfCewDn8TDNs4FVCFdwDA3MWh9zmMdeDEOleflkBS9wBIuYwmAJ+oBetGMGg1V0Iw4fVBFtyLSMbWHdg/4I29EWNmvo3wAdKJVRQ0eEpbA5hQm8x+dQx+6gYhBDQdViFORUMFKPk9s2iTTPrila0qwqXJsO7mwVe/AGQxGe4wm60jzrQCd2BQVL+ImFIO0+xqN6nHxK82wm6M8C0B6KbgaggUnM1eMkL9v7Dae3kPcy1FZbgebxu0VNDSzW46S54v9f7G8B9QTJ65q28z+gP2VoGuMtoHf4WIYaCse2ijZFC1ahBXS1gDrxi7WJPqWYras4jD5FM78ESa9xHAker0DncKceJzc2S5Pm2QWMYLjcp7Npnk3gLX6EOiPFhPQproJ18r7jKMbw1drRaFMMcm8wYbwMPcKJsO4Oz8ZYxgPW3Lur9Rg1w89XM00q7ruLivO1DzsUrZjFK9wK9foHPFZ7z+O3jw0AAAAASUVORK5CYII=";
let cheBackground = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAZCAYAAADqrKTxAAAB2UlEQVQ4jY3Uu2tUQRQG8N8+jK4GkxAfgSRYbK8GUbTx2lpota2LYmedRmJjI/kD/AtWsTALNgqCCFmxVFQCBh+oRAhi8InGmGS9FjM3uS4k64ELc2fmm/Od7zszhTRNQVJvDuMyTqCEFAW08RBXW43aIyikaSqpNwdwD4dym7PI/hdwtNWovSnGhQsRsBwX8/EZi9iNcSgcPzNVwBMcwArmUM2B3mEI2/AR1SIGMBw3FFHuyJRiSxwPYrSMreiJkyWMdoD2xcOy9UoZq3FyDjN4iw+xjp2RRRVjkdVKOdIpYKLVqF23QST15iXBknZRUG0+qrNZ7MILjJXxGA/Qn9SbFfShNzJYxQ8sRWq3MZ2ZewWVyLtXkLckdMOS4N8sXrUatcm8vF+RbELvaaytlIEW8atLTctYaTVq7Uz/P9jbBTQYKf9j2o7/AP3Og+Yx3QX0Gu/zoGVBsc2iR7BgDbSE/i6gPvxkvaOPCR5dxH6MCGZ+ipSe4zBO4n4GOo2brUZtcqM0Sb15FhMYz/t0Kqk3Z/AS32OdZaFDRnC+k943HMQNfLF+NXqERh6KIkznQXdxJI4H4tcZKe6wrt4t3duoHQ9fyzQrvHfnhPu1B9sFKxbwDNdivf4C0Et+79BeMTUAAAAASUVORK5CYII=';
let cheYellow = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAZCAYAAADqrKTxAAAB30lEQVQ4jY3US2tTQRjG8V/SY22j2IZ6KbTFRRfZqUUSdKVbF34HxZ1rN6IbN34Cv4Hi1o2iIEIRV0FRKdhEi0rFKi3WC+ZY08ZxcSbtMdDGFwbmzDv/mee9zCmEEEDarE3gGk5jAAEFdPAEN0qV+lMohBCkzVoZD3E8t7lr3e8VnChV6m+L0XExAu3ozNsqUhzAJSi0GtUCnuMo1rGI6Rz0HuMYwjKmiyhjIm4oIum5KWBXnI9hKsFuDMbFAUz1QIfjYV3/cIKNuLiIObzD5xjHvqhiGjNR1XoS5RRwpVSp37KNpc3aVVlJOkVZ1pZidnay/WhiJsEzPMZo2qwNYwR7o4IN/MRalHYXs0mpUv+UNmvLUf/9CAzFoDsRaGMeq6VK/WM+vd9wagd5L2JsA10oxa8+MbWxXqrUO938/8GhPtBYlPxP0fb8B/Q7Dy1htg+0gA95qC3L2E42KCvBJrSG0T7QCFpsdfRJWW9dxhFMyor5JUp6hSrO4JEQglajutBqVK+HEGw3Wo3quVaj+iaEIF+ns2mzNofX+BHjTGQdMokLvfK+4xhu46utpzEoa+TxmITZPPQAtTgvx9FrAffy2bujfxt14uGbN83L/nfnZe/rIEqyUqzgJW7GeP0Fpu+hIaqtp+YAAAAASUVORK5CYII=';
let cheGreen = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAZCAYAAADqrKTxAAAB10lEQVQ4jY3UvWtUQRQF8N9+GI0GkxA/AkmweL0aRNFKWwv9GxRhca3TSGxsJH+AsLitYmFjoyCIsIilohIwqFmVCEEMfqIxZrM+i5mXPBey64UH82bmzD33nDtTSNMU1JvVMVzGCZSQooA2HuFqJak9hkKapurN6jDu41BucxbZ/xKOVpLam2JcuBABq3ExH5+xjN2YgsK1+fMFPMUBtLCAJAd6h1Fsw0ckRQxjLG4ootyRKcWWOB7BRBlb0RcnS5joAO2Lh2Xr/WWsxckFzOItPsQ6dkYWCSYjq1Y50ilgupLUbtgk6s3qJcGSdlFQbTGq0y124SUmy3iChxiqN6v9GMRAZLCGH1iJ1O6gkZl7Bf2R94Agb0nohhXBvzm8riS1mby8X3G8C71nsbZSBlrGrx41raJVSWrtTP8/2NsDNBIp/2Pajv8A/c6DFtHoAZrH+zxoVVCsW/QJFqyDVjDUAzSIn2x09DHBo4vYj3HBzE+R0gscxkk8yECncauS1GY2S1NvVs9gGlN5n07Vm9VZvML3WGdZ6JBxnOuk9w0HcRNfbFyNPqGRR6MIjTzoHo7E8XD8OiPFXTbUu613G7Xj4euZ5oT37qxwv/Zgu2DFEp7jeqzXX0htgLRw8zezAAAAAElFTkSuQmCC';
option = {
    backgroundColor: '#2c343c',
    "title": {
        "text": "五大商圈车场停车饱和度",
        "left": "center",
        "y": "23",
        "textStyle": titleTextStyle
    },

    "grid": {
        "left": "17%",
        "top": "22%",
        'right': "22%",
        "bottom": 26
    },
    "tooltip": {
        "trigger": "item",
        "textStyle": {
            "fontSize": 14
        },
        "formatter": "{b0}:{c0}"
    },
    "xAxis": {
        "max": 300,
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisLabel": {
            "show": false
        },
        "axisTick": {
            "show": false
        }
    },
    "yAxis": [{
            "type": "category",
            "inverse": false,
            "data": [
                "小寨商圈",
                "小寨商圈",
                "小寨商圈",
                "小寨商圈",
                "小寨商圈",
            ],
            "axisLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "axisLabel": {
                "margin": -10,
                "textStyle": {
                    "color": fontColor,
                    "fontSize": 14
                }
            }
        }
        /*  {
            show: true,
            inverse: true,
            data:  [683, 234, 234, 523, 345],
            axisLabel: {
              "margin": 30,
              textStyle: {
                fontSize: 14,
                color: '#fff',
              },
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },

          }*/

    ],
    "series": [{
            "type": "pictorialBar",
            "symbol": cheOrange,
            //"symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAZCAYAAADqrKTxAAAB2UlEQVQ4jY3UT0sVYRTH8c+9dzKtSMX+CKNUuq8kKlrVdhb1FiqiTWs3YQPG3fQCegeFizYRVNMmkGhZVAhJERTGWCjZH8rs6s0W86ijoLcDwzw8zHfO7/zOeZ7K6OgoSPMsxnWcQQ3LqKCJp7hZj5NnUA1AN+7hEgZwEIfCewDn8TDNs4FVCFdwDA3MWh9zmMdeDEOleflkBS9wBIuYwmAJ+oBetGMGg1V0Iw4fVBFtyLSMbWHdg/4I29EWNmvo3wAdKJVRQ0eEpbA5hQm8x+dQx+6gYhBDQdViFORUMFKPk9s2iTTPrila0qwqXJsO7mwVe/AGQxGe4wm60jzrQCd2BQVL+ImFIO0+xqN6nHxK82wm6M8C0B6KbgaggUnM1eMkL9v7Dae3kPcy1FZbgebxu0VNDSzW46S54v9f7G8B9QTJ65q28z+gP2VoGuMtoHf4WIYaCse2ijZFC1ahBXS1gDrxi7WJPqWYras4jD5FM78ESa9xHAker0DncKceJzc2S5Pm2QWMYLjcp7Npnk3gLX6EOiPFhPQproJ18r7jKMbw1drRaFMMcm8wYbwMPcKJsO4Oz8ZYxgPW3Lur9Rg1w89XM00q7ruLivO1DzsUrZjFK9wK9foHPFZ7z+O3jw0AAAAASUVORK5CYII=",
            "symbolRepeat": "fixed",
            "symbolMargin": "13%",
            "symbolClip": true,
            "symbolSize": [13, 25],
            "symbolPosition": "start",
            "symbolOffset": [
                20,
                0
            ],
            "symbolBoundingData": 300,
            "data": [
                13,
                42,
                67,
                81,
                {
                    "symbol": cheYellow,
                    'value': 22
                }
            ],
            "z": 10
        },
        {
            "type": "pictorialBar",
            "itemStyle": {
                "normal": {
                    // "opacity": 0.3
                }
            },
            "label": {
                "normal": {
                    show: true,
                    formatter: function(params) {
                        return (params.value / 300 * 100).toFixed(1) + ' %';
                    },
                    position: 'right',
                    offset: [5, 0],
                    // margin: 30,
                    textStyle: {
                        fontSize: 14,
                        color: fontColor
                    },
                }
            },
            "animationDuration": 0,
            "symbolRepeat": "fixed",
            "symbolMargin": "13%",
            "symbol": cheBackground,
            "symbolSize": [13, 25],
            "symbolBoundingData": 300,
            "symbolPosition": "start",
            "symbolOffset": [
                20,
                0
            ],
            "data": [
                13,
                42,
                67,
                81,
                86,
            ],
            "z": 5
        }
    ]
}

const maxData = 300;
setInterval(function() {
    let dynamicData = [random(), random(), random(), random(), random()];
    let mock = dynamicData.slice();
    let data = [],
        bgData = [],
        textData = [];
    /*{
      "symbol": '',
      'value':''
    };*/
    /*50= - 80= 黄色
     * 50以下 绿色
     * 80以上 红色
     * (params.value / 300 * 100).toFixed(1) + ' %';
     * */
    let s = 0;
    for (let i in mock) {
        s = (mock[i] / maxData * 100).toFixed(1);
        if (s >= 50 && s <= 80) {
            data.push({
                value: mock[i],
                symbol: cheYellow
            });
            textData.push({
                value: mock[i],
                textStyle: {
                    color: 'Yellow'
                }
            });
        } else if (s < 50) {
            data.push({
                value: mock[i],
                symbol: cheGreen
            });
            textData.push({
                value: mock[i],
                textStyle: {
                    color: 'Green'
                }
            });
        } else if (s > 80) {
            data.push({
                value: mock[i],
                symbol: cheOrange
            });
            textData.push({
                value: mock[i],
                textStyle: {
                    color: 'Orange'
                }
            });
        }
        bgData.push(mock[i]);
    }
    myChart.setOption({
        /* yAxis:[{},{data:textData.reverse()}],*/
        series: [{
            data: data
        }, {
            data: bgData
        }]
    })
}, 3000);

function random() {
    return +(Math.random() * (maxData - 10)).toFixed(1);
}