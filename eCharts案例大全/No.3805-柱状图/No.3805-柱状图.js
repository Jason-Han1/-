option = {
    backgroundColor: '#071347',
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 16.25
            }
        },
        axisTick: {
            show: false
        },
        data: [
            '山西',
            '四川',
            '西藏',
            '北京',
        ],
    },
    yAxis: [{
            inverse: false,
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 16.25
                }
            }
        },

    ],
    series: [{
            type: "pictorialBar",
            itemStyle: {
                normal: {
                    color: "#061348"
                }
            },
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2QUY3NjAwNTkxRTkxMUVCQjczNEFBRjAyNTI2OTZGNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2QUY3NjAwNjkxRTkxMUVCQjczNEFBRjAyNTI2OTZGNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZBRjc2MDAzOTFFOTExRUJCNzM0QUFGMDI1MjY5NkY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZBRjc2MDA0OTFFOTExRUJCNzM0QUFGMDI1MjY5NkY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+PaqpNwAAAnRJREFUeNp0kktoE0EYx/+zk7Shig9I0/TgoaJ48AGePHhQW6o3DypeDFSKmja2qfioDzRiVNQ2JiVIq41akXiSiq8qiEIRxB7EXgStIhaqTaNS6yGhiZkdv91sl3azHRj29dvf/Of7himnEzvhdBbwZ2pExNo+wTIczZ36VbqXgjgQBzadN78rD5+DYXBkEitrFuhvvny7w3L5VnXrmvxskfLiA2R5GYiDwYG44iINQSgLozdWV4SjZ1gmC1RX7XX1P91mTUNSEAfiUOQ8cHwfh+LgqFi8iEy1fm26uS8UwMfJHM1pul8npYR1aix9AzHAWA60Czi9W6AYi/1m4+mb/EKXD1Jl4lRwyOE7u8Ga6N+r6yAOxAGZDLCiuD1lFpMvJM/d5xfju6GCi5PB1yRaaytKpaH0D1C1ZYkEzromDXjCL5GIAHGi9Y3DF1puJ4LWoa+jpZKZOlKiR/xyfCNtrVwcbxkm0XorJMKNZocUSZW2Di1RIRl+x69c206JXKL9INUoVGfXNW0wDKfAO7vBJn7ahAKXXo9ftAdi+kNH9w7intF25AxQVl1Lkvc/dBeP9MwnWkKiBnG0uUMXRXp8xD0gkTAPI49QkaQKccQP6a20k0zRTwn6OWBwSeJ28dBtZkq01flVTUTFOtw0nyhLXB9xm4kTxN2Ft3KPKdELM/ELPGokOnQAsqpURPHVwr3zb4mrh6pCrd+UYIOf26gmzGxxUdSrHyDRtt9WZHBDPNYbRCaroGaZVqdVc84JS5OoK1FMFNw3R6S13UgkiHusDLzsQ7FHrpLDpovit8BIpLY0QnrcdqIUcvljGB37qz3/F2AALB0qIG2fJkQAAAAASUVORK5CYII=',
            symbolRepeat: "auto",
            symbolMargin: -2,
            symbolSize: [32, 17],
            symbolPosition: "start",
            symbolBoundingData: 60,
            symbolClip: true,
            z: 2,
            data: [20, 40, 30, 50],
            animationEasing: "elasticOut"
        },

        {
            name: "外框",
            type: "bar",
            barGap: "-120%", // 设置外框粗细
            data: [20, 40, 30, 50],
            barWidth: 32,
            itemStyle: {
                normal: {
                    color: "transparent",
                    barBorderColor: "#00C0D9",
                    barBorderWidth: 1,
                }
            },
            z: 0
        }
    ]
};