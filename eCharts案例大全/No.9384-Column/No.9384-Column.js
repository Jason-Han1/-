// 建议用SVG当背景,图片会模糊
// 如果有设计方面要求这个方法可以满足所有人的基本需求

var imgDatUrl = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAHYCAYAAAAf9/U9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFGREE1QThDMTBGMTExRUFBREM0QjYwNEExMDIyQzUzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFGREE1QThEMTBGMTExRUFBREM0QjYwNEExMDIyQzUzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUZEQTVBOEExMEYxMTFFQUFEQzRCNjA0QTEwMjJDNTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUZEQTVBOEIxMEYxMTFFQUFEQzRCNjA0QTEwMjJDNTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6bez2UAAAGj0lEQVR42uzbW4iUdRjH8f+rmxvaOTLCbqLsfBGUGERp2TmxoDQvgqC6qKQoIhCEDhdddFMZWVBdRERQUFFYRBFWlJpRN5rloVhbMzXbbdXc3dnd+fcfGtElzWlmWt955/PAg+w48+7O19/zfd7/yGYxxqAOXOMgAAecZldHlmVNu9jO7KxMcoyVAgecOoXc5OsRsrFS4IBDyJIztslp8nkoD8mJkmOsCFlyWjU5hCw54IADTgGFnAfYhGyswAGHkHMCuyw5xgoccFpVyM2sPHxkkUlOC65yH5MSsgIHHGcrq9xYgQMOIROysVLggNMkIedShoRsrNzn5GmsJIeQCdlYETIhGysFjlVOyMYKHHDaU8h5qLYRciXZZWO1r6amfj7196m3VP98IfWZYx7BndlZk5p4vaMafP3sKpgJB/i7Uup7Uy89xDX2FDE5U/8FTKg+/vxYJqjZcLIG+sF/AbM/oAca/D41d56SM7PG513ejkI+ocbnHT9WP3eeVnlPjYB6w9+/x5m1U3KW1fi8T9txrJ5NPXiI51TW+TPtCGdD9T7mYIAqjy+oPq/tVnmlP0x9Teq3qg7a66K3q49/MFZrvNKVO+SjmwjnmBwkcLePLHyeA05uy/8+tMgdsrECBxxCbmshSw44VrnkEDIhGytCJmRjpcCxygnZWIEDDiETMiFzjgKHkJv7M0gOOPlY5ZzDOQoccJytci7koSyMOyJk8bC+oyxryj/QnlDOmgJnSeg97rnYs3j5ObP+mNwxYfCwsumcMNDoNbpLezouW7vs3Ibh3BQ3T1sdBl4qhzAlffl6q4/Sqzu6jryn69trR2I8pW4428PwuOti9/09YWRh+nJ8q0MZiuXs5g3LJ3/Ut+3Gve+nLiE/EXdMfi30LRkMccboF8eWlPLa/p1HXPnDZxf0DJcuakjI18fumetDaUk5xJOKsJGe3rp+4qLuNbPT+zmx7m21LpQ65sdfFvaFkfuKsLIHyiPjrl73+ZRVu3tmN7TKH47bT30v7HpxKMSLipCWr3b/3nnDui+m7y4Pn9fQfc6s+PP1XaG0ONnk2CKAWbR59TFP/bp+Tno/h/w9s4MK+cvQ37kgbn1sVxi5o1bL5nnWeodL46/44bPTvu/feVVDd8j3xq1nfBL+fHE4xPOKkJaP+7Z1zt24YkbyzOkNHR9mxE3zfgnDT8YQJxYBzN1d35zwym9dlXuXI+s+W70Tdk16JP72ZDpTzC0ClK1DAx2Xrl12djoKXNrQwfP2uOX8laG/MkanFwHMGz3dE+/86etZwzGe2tCp/JK46a5tYfjRNEYTigDm1o0rTn63d8ucZnzikA1ePC+GAlXnyjebdi2fBIJTr5BjREFywAFnDJ0DguTUd3wQHckBh5Alh5AlBxxClhy1LzlRdCSHcyQHHHAcHwjZWIGjwCFkQjZW4IADDiFb5cZKgQMOIROysQIHHEKWHGVbSQ7nSA44hCw5hFx0ONgYK0LmHGMFDjjgFFfIjCw54IADDiFLDjjgOJUryaktOaIjOeAQsuQQsuSAQ8iSo8CxrTjHWIEDDiETchvAwYZzwAHHtrKtjBU44HCOsq2MFTjgEDIhGytwOEdyFDi2leQQsuSAQ8iSQ8hKcsAB5/90DulIDjjggJMLIUdClhxwwAHHHbLkgANOOzoHBMmpKzmiIzngELLkELLkgEPIkqPAsa04x1iBAw44tpVtZawUOOBwjm1lrMBp2bEyVIRMyJwDDjiETMjGChzFOZIDjm0lOYQsOeAQsuQoQpYccMDJh3NIR3LAAQccQpYccMABRzmV1wYHHWNVV3LkhnOMFSFLDjiELDmELDmKcyQHHHDAscptK2MFDjiKkAnZWIEDDufYVsYKHAUOIROysQIHHEKWnMInJ4qO5HCO5IDj+CA5hCw54ChClhxClhxwwGkx55CO5IADDjjggAMOOOAocMABBxxwwAEHHHDAUeCAAw444IADDjjgKHDAAQcccMABBxxwwFHggAMOOOCAAw444ChwwAEHHHDAAQcccMBR4IADDjjg5K5GUj/UgcM/anvq+amXgTO6VqW+JXW3sRpdL6e+bC+YSklOCKXUC6pwRlW7w9mc+ubqONlW+9WnqS88GJh2hvNU6quqm+mg1W5jtSf1HanfqOXJ7QTnx9Q3pV7jDnl0vZ962n8B0y5wHk89J3Xvf31hkceqL/VtqZfWe4Giwvmu6peNTuWj683U0xsFU6m/BBgAnuKEy7OV/l4AAAAASUVORK5CYII='
var dimensions = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var currentMonth = [325, 375, 425, 595, 485, 325, 395];
var option = {
    backgroundColor: '#070023',
    title: {
        text: '哎呦,不错哦',
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20,
        },
        top: '5%',
        left: 'center',
    },
    grid: {
        top: "25%",
        bottom: "10%",
        left: "3%",
        right: "3%"
    },
    tooltip: {
        show: true,
        formatter: "{b}:{c}"
    },
    xAxis: {
        data: dimensions,
        type: 'category',
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: "#878787",
            fontSize: 14,
            margin: 20
        }
    },
    yAxis: {
        splitNumber: 4,
        interval: 200,
        splitLine: {
            show: true,
            lineStyle: {
                color: "#3d304c",
            }
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            color: "#878787",
            fontSize: 14
        }
    },
    series: [{
        name: '本月',
        type: 'pictorialBar',
        barWidth: 45,
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}',
                textStyle: {
                    color: '#fff'
                }
            }
        },
        symbol: imgDatUrl,
        barGap: 0,
        symbolSize: ['100%', '100%'],
        data: currentMonth
    }]
};