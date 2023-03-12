option = {
    "title": {
        "show": true,
        "text": "玩家卡顿频次",
        "subtext": "单位：次（统计精度为0.5h）",
        "left": "center"
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            "animation": false,
            "label": {
                "backgroundColor": "#ccc",
                "borderColor": "#aaa",
                "borderWidth": 1,
                "shadowBlur": 0,
                "shadowOffsetX": 0,
                "shadowOffsetY": 0,
                "color": "#222"
            }
        }
    },
    "toolbox": {
        "feature": {
            "dataZoom": {
                "yAxisIndex": "none"
            },
            "dataView": {
                "show": true,
                "readOnly": false
            },
            "magicType": {
                "show": true,
                "type": [
                    "line",
                    "bar"
                ]
            },
            "restore": {
                "show": true
            },
            "saveAsImage": {
                "show": true
            }
        }
    },
    "dataZoom": [{
            "type": "inside",
            "start": 0,
            "end": 100
        },
        {
            "start": 0,
            "xAxisIndex": [
                0
            ],
            "bottom": 50,
            "end": 100,
            "handleIcon": "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
            "handleSize": "80%",
            "handleStyle": {
                "color": "#fff",
                "shadowBlur": 3,
                "shadowColor": "rgba(0, 0, 0, 0.6)",
                "shadowOffsetX": 2,
                "shadowOffsetY": 2
            }
        },
        {
            "type": "inside",
            "start": 0,
            "end": 100
        },
        {
            "start": 0,
            "yAxisIndex": [
                0
            ],
            "end": 100,
            "handleIcon": "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
            "handleSize": "80%",
            "handleStyle": {
                "color": "#fff",
                "shadowBlur": 3,
                "shadowColor": "rgba(0, 0, 0, 0.6)",
                "shadowOffsetX": 2,
                "shadowOffsetY": 2
            }
        }
    ],
    "color": [
        "#1890FF",
        "#2FC25B",
        "#FACC14",
        "#F04864",
        "#8543E0",
        "#13C2C2",
        "#3436C7",
        "#FF99C3",
        "#223273",
        "#FF9D4D",
        "#5D7092"
    ],
    "legend": {
        "bottom": 0,
        "data": [
            "服务器1",
            "服务器2",
            "服务器3",
            "服务器4",
            "服务器5",
            "服务器6",
            "服务器7",
            "服务器8",
            "服务器9",
            "服务器10"
        ],
        "type": "scroll"
    },
    "grid": {
        "left": 80,
        "right": 60,
        "bottom": 100
    },
    "dataset": {
        "source": []
    },
    "xAxis": {
        "type": "time",
        "max": "2020-06-11 10:52:21",
        "min": "2020-06-10 22:52:21"
    },
    "yAxis": {
        "type": "value"
    },
    "series": [{
            "name": "服务器1",
            "type": "line",
            "symbol": "none",
            "data": [{
                    "value": [
                        "2020-06-10 23:15:18",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:15:18",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:16:58",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:16:58",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:18:58",
                        null
                    ],
                    "date": "2020-06-10 11:18:58"
                },
                {
                    "value": [
                        "2020-06-10 23:21:58",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:21:58",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:23:58",
                        null
                    ],
                    "date": "2020-06-10 11:23:58"
                },
                {
                    "value": [
                        "2020-06-10 23:43:38",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:43:38",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:45:38",
                        null
                    ],
                    "date": "2020-06-10 11:45:38"
                },
                {
                    "value": [
                        "2020-06-10 23:55:18",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:55:18",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:57:18",
                        null
                    ],
                    "date": "2020-06-10 11:57:18"
                },
                {
                    "value": [
                        "2020-06-11 00:03:38",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 00:03:38",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:05:18",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 00:05:18",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:06:58",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 00:06:58",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 12:08:58",
                        null
                    ],
                    "date": "2020-06-11 12:08:58"
                },
                {
                    "value": [
                        "2020-06-11 00:41:58",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 00:41:58",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:43:38",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 00:43:38",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 12:45:38",
                        null
                    ],
                    "date": "2020-06-11 12:45:38"
                },
                {
                    "value": [
                        "2020-06-11 00:55:18",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 00:55:18",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 12:57:18",
                        null
                    ],
                    "date": "2020-06-11 12:57:18"
                },
                {
                    "value": [
                        "2020-06-11 01:15:18",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 01:15:18",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 1:17:18",
                        null
                    ],
                    "date": "2020-06-11 1:17:18"
                },
                {
                    "value": [
                        "2020-06-11 01:31:58",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 01:31:58",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 1:33:58",
                        null
                    ],
                    "date": "2020-06-11 1:33:58"
                },
                {
                    "value": [
                        "2020-06-11 02:40:18",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:40:18",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:42:18",
                        null
                    ],
                    "date": "2020-06-11 2:42:18"
                },
                {
                    "value": [
                        "2020-06-11 02:45:18",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:45:18",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 02:46:58",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:46:58",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:48:58",
                        null
                    ],
                    "date": "2020-06-11 2:48:58"
                },
                {
                    "value": [
                        "2020-06-11 03:05:18",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:05:18",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:07:18",
                        null
                    ],
                    "date": "2020-06-11 3:07:18"
                },
                {
                    "value": [
                        "2020-06-11 03:33:38",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:33:38",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:35:38",
                        null
                    ],
                    "date": "2020-06-11 3:35:38"
                },
                {
                    "value": [
                        "2020-06-11 03:36:58",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:36:58",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:38:58",
                        null
                    ],
                    "date": "2020-06-11 3:38:58"
                },
                {
                    "value": [
                        "2020-06-11 03:55:18",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:55:18",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:57:18",
                        null
                    ],
                    "date": "2020-06-11 3:57:18"
                },
                {
                    "value": [
                        "2020-06-11 04:16:58",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 04:16:58",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:18:58",
                        null
                    ],
                    "date": "2020-06-11 4:18:58"
                },
                {
                    "value": [
                        "2020-06-11 04:45:18",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 04:45:18",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:47:18",
                        null
                    ],
                    "date": "2020-06-11 4:47:18"
                },
                {
                    "value": [
                        "2020-06-11 05:13:38",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:13:38",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:15:38",
                        null
                    ],
                    "date": "2020-06-11 5:15:38"
                },
                {
                    "value": [
                        "2020-06-11 05:33:38",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:33:38",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:35:38",
                        null
                    ],
                    "date": "2020-06-11 5:35:38"
                },
                {
                    "value": [
                        "2020-06-11 06:23:38",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 06:23:38",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:25:38",
                        null
                    ],
                    "date": "2020-06-11 6:25:38"
                },
                {
                    "value": [
                        "2020-06-11 06:55:18",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 06:55:18",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:57:18",
                        null
                    ],
                    "date": "2020-06-11 6:57:18"
                },
                {
                    "value": [
                        "2020-06-11 07:20:18",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 07:20:18",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 07:21:58",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 07:21:58",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:23:58",
                        null
                    ],
                    "date": "2020-06-11 7:23:58"
                },
                {
                    "value": [
                        "2020-06-11 07:31:58",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 07:31:58",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:33:58",
                        null
                    ],
                    "date": "2020-06-11 7:33:58"
                },
                {
                    "value": [
                        "2020-06-11 08:00:18",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 08:00:18",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:02:18",
                        null
                    ],
                    "date": "2020-06-11 8:02:18"
                },
                {
                    "value": [
                        "2020-06-11 08:31:58",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 08:31:58",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:33:58",
                        null
                    ],
                    "date": "2020-06-11 8:33:58"
                },
                {
                    "value": [
                        "2020-06-11 08:55:18",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 08:55:18",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:57:18",
                        null
                    ],
                    "date": "2020-06-11 8:57:18"
                },
                {
                    "value": [
                        "2020-06-11 09:00:18",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:00:18",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:02:18",
                        null
                    ],
                    "date": "2020-06-11 9:02:18"
                },
                {
                    "value": [
                        "2020-06-11 09:46:58",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:46:58",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:48:58",
                        null
                    ],
                    "date": "2020-06-11 9:48:58"
                },
                {
                    "value": [
                        "2020-06-11 09:50:18",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:50:18",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 09:51:58",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:51:58",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:53:58",
                        null
                    ],
                    "date": "2020-06-11 9:53:58"
                },
                {
                    "value": [
                        "2020-06-11 09:57:04",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:57:04",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 09:58:44",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:58:44",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:00:26",
                        2
                    ],
                    "count": 2,
                    "vendor": "PC",
                    "date": "2020-06-11 10:00:26",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:02:26",
                        null
                    ],
                    "date": "2020-06-11 10:02:26"
                },
                {
                    "value": [
                        "2020-06-11 10:04:26",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:04:26",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:06:26",
                        null
                    ],
                    "date": "2020-06-11 10:06:26"
                },
                {
                    "value": [
                        "2020-06-11 10:06:38",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:06:38",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:08:38",
                        null
                    ],
                    "date": "2020-06-11 10:08:38"
                },
                {
                    "value": [
                        "2020-06-11 10:11:30",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:11:30",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:13:30",
                        null
                    ],
                    "date": "2020-06-11 10:13:30"
                },
                {
                    "value": [
                        "2020-06-11 10:19:37",
                        4
                    ],
                    "count": 4,
                    "vendor": "PC",
                    "date": "2020-06-11 10:19:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:21:37",
                        null
                    ],
                    "date": "2020-06-11 10:21:37"
                },
                {
                    "value": [
                        "2020-06-11 10:23:16",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:23:16",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:25:16",
                        null
                    ],
                    "date": "2020-06-11 10:25:16"
                },
                {
                    "value": [
                        "2020-06-11 10:29:56",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:29:56",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:31:36",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:31:36",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:33:36",
                        null
                    ],
                    "date": "2020-06-11 10:33:36"
                },
                {
                    "value": [
                        "2020-06-11 10:38:24",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:38:24",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:40:04",
                        2
                    ],
                    "count": 2,
                    "vendor": "PC",
                    "date": "2020-06-11 10:40:04",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:41:46",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:41:46",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:43:26",
                        2
                    ],
                    "count": 2,
                    "vendor": "PC",
                    "date": "2020-06-11 10:43:26",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Precision Tower 3620 (Dell Inc.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                }
            ]
        },
        {
            "name": "服务器2",
            "type": "line",
            "symbol": "none",
            "data": [{
                    "value": [
                        "2020-06-10 22:54:34",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 22:54:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 10:56:34",
                        null
                    ],
                    "date": "2020-06-10 10:56:34"
                },
                {
                    "value": [
                        "2020-06-10 23:07:54",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:07:54",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:09:54",
                        null
                    ],
                    "date": "2020-06-10 11:09:54"
                },
                {
                    "value": [
                        "2020-06-10 23:16:14",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:16:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:18:14",
                        null
                    ],
                    "date": "2020-06-10 11:18:14"
                },
                {
                    "value": [
                        "2020-06-10 23:24:34",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:24:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:26:34",
                        null
                    ],
                    "date": "2020-06-10 11:26:34"
                },
                {
                    "value": [
                        "2020-06-11 00:06:14",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 00:06:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 12:08:14",
                        null
                    ],
                    "date": "2020-06-11 12:08:14"
                },
                {
                    "value": [
                        "2020-06-11 00:54:34",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 00:54:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 12:56:34",
                        null
                    ],
                    "date": "2020-06-11 12:56:34"
                },
                {
                    "value": [
                        "2020-06-11 01:06:14",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 01:06:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 1:08:14",
                        null
                    ],
                    "date": "2020-06-11 1:08:14"
                },
                {
                    "value": [
                        "2020-06-11 01:39:34",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 01:39:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 1:41:34",
                        null
                    ],
                    "date": "2020-06-11 1:41:34"
                },
                {
                    "value": [
                        "2020-06-11 02:11:14",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:11:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:13:14",
                        null
                    ],
                    "date": "2020-06-11 2:13:14"
                },
                {
                    "value": [
                        "2020-06-11 02:16:14",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:16:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:18:14",
                        null
                    ],
                    "date": "2020-06-11 2:18:14"
                },
                {
                    "value": [
                        "2020-06-11 02:29:34",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:29:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:31:34",
                        null
                    ],
                    "date": "2020-06-11 2:31:34"
                },
                {
                    "value": [
                        "2020-06-11 02:37:54",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:37:54",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 02:39:34",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:39:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:41:34",
                        null
                    ],
                    "date": "2020-06-11 2:41:34"
                },
                {
                    "value": [
                        "2020-06-11 03:07:54",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:07:54",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:09:54",
                        null
                    ],
                    "date": "2020-06-11 3:09:54"
                },
                {
                    "value": [
                        "2020-06-11 03:14:34",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:14:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:16:34",
                        null
                    ],
                    "date": "2020-06-11 3:16:34"
                },
                {
                    "value": [
                        "2020-06-11 03:49:34",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:49:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:51:34",
                        null
                    ],
                    "date": "2020-06-11 3:51:34"
                },
                {
                    "value": [
                        "2020-06-11 03:59:34",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:59:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:01:34",
                        null
                    ],
                    "date": "2020-06-11 4:01:34"
                },
                {
                    "value": [
                        "2020-06-11 05:09:34",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:09:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 05:11:14",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:11:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:13:14",
                        null
                    ],
                    "date": "2020-06-11 5:13:14"
                },
                {
                    "value": [
                        "2020-06-11 05:14:34",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:14:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:16:34",
                        null
                    ],
                    "date": "2020-06-11 5:16:34"
                },
                {
                    "value": [
                        "2020-06-11 05:46:14",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:46:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:48:14",
                        null
                    ],
                    "date": "2020-06-11 5:48:14"
                },
                {
                    "value": [
                        "2020-06-11 06:01:14",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 06:01:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:03:14",
                        null
                    ],
                    "date": "2020-06-11 6:03:14"
                },
                {
                    "value": [
                        "2020-06-11 06:46:14",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 06:46:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:48:14",
                        null
                    ],
                    "date": "2020-06-11 6:48:14"
                },
                {
                    "value": [
                        "2020-06-11 07:04:34",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 07:04:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 07:06:14",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 07:06:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:08:14",
                        null
                    ],
                    "date": "2020-06-11 7:08:14"
                },
                {
                    "value": [
                        "2020-06-11 07:51:14",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 07:51:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:53:14",
                        null
                    ],
                    "date": "2020-06-11 7:53:14"
                },
                {
                    "value": [
                        "2020-06-11 08:01:14",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 08:01:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:03:14",
                        null
                    ],
                    "date": "2020-06-11 8:03:14"
                },
                {
                    "value": [
                        "2020-06-11 09:09:34",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:09:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:11:34",
                        null
                    ],
                    "date": "2020-06-11 9:11:34"
                },
                {
                    "value": [
                        "2020-06-11 09:21:14",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:21:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:23:14",
                        null
                    ],
                    "date": "2020-06-11 9:23:14"
                },
                {
                    "value": [
                        "2020-06-11 09:37:54",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:37:54",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                }
            ]
        },
        {
            "name": "服务器3",
            "type": "line",
            "symbol": "none",
            "data": [{
                    "value": [
                        "2020-06-10 22:59:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 22:59:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:01:37",
                        null
                    ],
                    "date": "2020-06-10 11:01:37"
                },
                {
                    "value": [
                        "2020-06-10 23:06:17",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:06:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:08:17",
                        null
                    ],
                    "date": "2020-06-10 11:08:17"
                },
                {
                    "value": [
                        "2020-06-10 23:16:17",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:16:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:18:17",
                        null
                    ],
                    "date": "2020-06-10 11:18:17"
                },
                {
                    "value": [
                        "2020-06-10 23:19:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:19:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:21:37",
                        null
                    ],
                    "date": "2020-06-10 11:21:37"
                },
                {
                    "value": [
                        "2020-06-10 23:27:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:27:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:29:57",
                        null
                    ],
                    "date": "2020-06-10 11:29:57"
                },
                {
                    "value": [
                        "2020-06-10 23:34:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:34:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:36:37",
                        null
                    ],
                    "date": "2020-06-10 11:36:37"
                },
                {
                    "value": [
                        "2020-06-10 23:57:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:57:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:59:57",
                        null
                    ],
                    "date": "2020-06-10 11:59:57"
                },
                {
                    "value": [
                        "2020-06-11 00:09:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 00:09:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 12:11:37",
                        null
                    ],
                    "date": "2020-06-11 12:11:37"
                },
                {
                    "value": [
                        "2020-06-11 00:36:17",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 00:36:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 12:38:17",
                        null
                    ],
                    "date": "2020-06-11 12:38:17"
                },
                {
                    "value": [
                        "2020-06-11 00:59:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 00:59:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 1:01:37",
                        null
                    ],
                    "date": "2020-06-11 1:01:37"
                },
                {
                    "value": [
                        "2020-06-11 01:06:17",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 01:06:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 1:08:17",
                        null
                    ],
                    "date": "2020-06-11 1:08:17"
                },
                {
                    "value": [
                        "2020-06-11 01:19:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 01:19:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 1:21:37",
                        null
                    ],
                    "date": "2020-06-11 1:21:37"
                },
                {
                    "value": [
                        "2020-06-11 01:29:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 01:29:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 1:31:37",
                        null
                    ],
                    "date": "2020-06-11 1:31:37"
                },
                {
                    "value": [
                        "2020-06-11 01:37:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 01:37:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 1:39:57",
                        null
                    ],
                    "date": "2020-06-11 1:39:57"
                },
                {
                    "value": [
                        "2020-06-11 01:46:17",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 01:46:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:47:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 01:47:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 1:49:57",
                        null
                    ],
                    "date": "2020-06-11 1:49:57"
                },
                {
                    "value": [
                        "2020-06-11 01:54:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 01:54:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 1:56:37",
                        null
                    ],
                    "date": "2020-06-11 1:56:37"
                },
                {
                    "value": [
                        "2020-06-11 02:06:17",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:06:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:08:17",
                        null
                    ],
                    "date": "2020-06-11 2:08:17"
                },
                {
                    "value": [
                        "2020-06-11 02:36:17",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:36:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:38:17",
                        null
                    ],
                    "date": "2020-06-11 2:38:17"
                },
                {
                    "value": [
                        "2020-06-11 02:42:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:42:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:44:57",
                        null
                    ],
                    "date": "2020-06-11 2:44:57"
                },
                {
                    "value": [
                        "2020-06-11 02:47:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:47:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:49:57",
                        null
                    ],
                    "date": "2020-06-11 2:49:57"
                },
                {
                    "value": [
                        "2020-06-11 03:12:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:12:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:14:57",
                        null
                    ],
                    "date": "2020-06-11 3:14:57"
                },
                {
                    "value": [
                        "2020-06-11 03:27:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:27:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:29:57",
                        null
                    ],
                    "date": "2020-06-11 3:29:57"
                },
                {
                    "value": [
                        "2020-06-11 04:04:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 04:04:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:06:37",
                        null
                    ],
                    "date": "2020-06-11 4:06:37"
                },
                {
                    "value": [
                        "2020-06-11 04:17:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 04:17:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:19:57",
                        null
                    ],
                    "date": "2020-06-11 4:19:57"
                },
                {
                    "value": [
                        "2020-06-11 04:47:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 04:47:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:49:57",
                        null
                    ],
                    "date": "2020-06-11 4:49:57"
                },
                {
                    "value": [
                        "2020-06-11 04:56:17",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 04:56:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 04:57:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 04:57:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 04:59:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 04:59:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:01:37",
                        null
                    ],
                    "date": "2020-06-11 5:01:37"
                },
                {
                    "value": [
                        "2020-06-11 05:09:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:09:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:11:37",
                        null
                    ],
                    "date": "2020-06-11 5:11:37"
                },
                {
                    "value": [
                        "2020-06-11 05:12:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:12:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:14:57",
                        null
                    ],
                    "date": "2020-06-11 5:14:57"
                },
                {
                    "value": [
                        "2020-06-11 05:17:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:17:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:19:57",
                        null
                    ],
                    "date": "2020-06-11 5:19:57"
                },
                {
                    "value": [
                        "2020-06-11 05:24:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:24:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:26:37",
                        null
                    ],
                    "date": "2020-06-11 5:26:37"
                },
                {
                    "value": [
                        "2020-06-11 05:29:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:29:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:31:37",
                        null
                    ],
                    "date": "2020-06-11 5:31:37"
                },
                {
                    "value": [
                        "2020-06-11 05:37:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:37:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:39:57",
                        null
                    ],
                    "date": "2020-06-11 5:39:57"
                },
                {
                    "value": [
                        "2020-06-11 05:47:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:47:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:49:57",
                        null
                    ],
                    "date": "2020-06-11 5:49:57"
                },
                {
                    "value": [
                        "2020-06-11 06:04:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 06:04:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:06:37",
                        null
                    ],
                    "date": "2020-06-11 6:06:37"
                },
                {
                    "value": [
                        "2020-06-11 06:22:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 06:22:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:24:57",
                        null
                    ],
                    "date": "2020-06-11 6:24:57"
                },
                {
                    "value": [
                        "2020-06-11 06:26:17",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 06:26:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:28:17",
                        null
                    ],
                    "date": "2020-06-11 6:28:17"
                },
                {
                    "value": [
                        "2020-06-11 06:47:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 06:47:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 06:49:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 06:49:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:51:37",
                        null
                    ],
                    "date": "2020-06-11 6:51:37"
                },
                {
                    "value": [
                        "2020-06-11 07:57:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 07:57:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:59:57",
                        null
                    ],
                    "date": "2020-06-11 7:59:57"
                },
                {
                    "value": [
                        "2020-06-11 08:02:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 08:02:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 08:04:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 08:04:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:06:37",
                        null
                    ],
                    "date": "2020-06-11 8:06:37"
                },
                {
                    "value": [
                        "2020-06-11 08:17:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 08:17:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:19:57",
                        null
                    ],
                    "date": "2020-06-11 8:19:57"
                },
                {
                    "value": [
                        "2020-06-11 08:27:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 08:27:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:29:57",
                        null
                    ],
                    "date": "2020-06-11 8:29:57"
                },
                {
                    "value": [
                        "2020-06-11 08:52:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 08:52:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 08:54:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 08:54:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:56:37",
                        null
                    ],
                    "date": "2020-06-11 8:56:37"
                },
                {
                    "value": [
                        "2020-06-11 09:16:17",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:16:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 09:17:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:17:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:19:57",
                        null
                    ],
                    "date": "2020-06-11 9:19:57"
                },
                {
                    "value": [
                        "2020-06-11 09:36:17",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:36:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:38:17",
                        null
                    ],
                    "date": "2020-06-11 9:38:17"
                },
                {
                    "value": [
                        "2020-06-11 09:59:47",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:59:47",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:01:47",
                        null
                    ],
                    "date": "2020-06-11 10:01:47"
                },
                {
                    "value": [
                        "2020-06-11 10:21:29",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:21:29",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:23:29",
                        null
                    ],
                    "date": "2020-06-11 10:23:29"
                },
                {
                    "value": [
                        "2020-06-11 10:35:29",
                        2
                    ],
                    "count": 2,
                    "vendor": "PC",
                    "date": "2020-06-11 10:35:29",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:37:29",
                        null
                    ],
                    "date": "2020-06-11 10:37:29"
                },
                {
                    "value": [
                        "2020-06-11 10:42:10",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:42:10",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:44:10",
                        null
                    ],
                    "date": "2020-06-11 10:44:10"
                },
                {
                    "value": [
                        "2020-06-11 10:48:50",
                        2
                    ],
                    "count": 2,
                    "vendor": "PC",
                    "date": "2020-06-11 10:48:50",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                }
            ]
        },
        {
            "name": "服务器4",
            "type": "line",
            "symbol": "none",
            "data": [{
                    "value": [
                        "2020-06-10 23:03:41",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:03:41",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-10 11:05:41",
                        null
                    ],
                    "date": "2020-06-10 11:05:41"
                },
                {
                    "value": [
                        "2020-06-10 23:13:41",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:13:41",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-10 11:15:41",
                        null
                    ],
                    "date": "2020-06-10 11:15:41"
                },
                {
                    "value": [
                        "2020-06-11 00:17:01",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 00:17:01",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 12:19:01",
                        null
                    ],
                    "date": "2020-06-11 12:19:01"
                },
                {
                    "value": [
                        "2020-06-11 00:32:01",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 00:32:01",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 12:34:01",
                        null
                    ],
                    "date": "2020-06-11 12:34:01"
                },
                {
                    "value": [
                        "2020-06-11 00:37:01",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 00:37:01",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 12:39:01",
                        null
                    ],
                    "date": "2020-06-11 12:39:01"
                },
                {
                    "value": [
                        "2020-06-11 01:20:21",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 01:20:21",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 1:22:21",
                        null
                    ],
                    "date": "2020-06-11 1:22:21"
                },
                {
                    "value": [
                        "2020-06-11 01:28:41",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 01:28:41",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 1:30:41",
                        null
                    ],
                    "date": "2020-06-11 1:30:41"
                },
                {
                    "value": [
                        "2020-06-11 02:37:01",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:37:01",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 2:39:01",
                        null
                    ],
                    "date": "2020-06-11 2:39:01"
                },
                {
                    "value": [
                        "2020-06-11 03:27:01",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:27:01",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 3:29:01",
                        null
                    ],
                    "date": "2020-06-11 3:29:01"
                },
                {
                    "value": [
                        "2020-06-11 03:40:21",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:40:21",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 3:42:21",
                        null
                    ],
                    "date": "2020-06-11 3:42:21"
                },
                {
                    "value": [
                        "2020-06-11 03:53:41",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:53:41",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 3:55:41",
                        null
                    ],
                    "date": "2020-06-11 3:55:41"
                },
                {
                    "value": [
                        "2020-06-11 04:02:01",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 04:02:01",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 04:03:41",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 04:03:41",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 4:05:41",
                        null
                    ],
                    "date": "2020-06-11 4:05:41"
                },
                {
                    "value": [
                        "2020-06-11 04:07:01",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 04:07:01",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 4:09:01",
                        null
                    ],
                    "date": "2020-06-11 4:09:01"
                },
                {
                    "value": [
                        "2020-06-11 04:23:41",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 04:23:41",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 4:25:41",
                        null
                    ],
                    "date": "2020-06-11 4:25:41"
                },
                {
                    "value": [
                        "2020-06-11 04:52:01",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 04:52:01",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 04:53:41",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 04:53:41",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 4:55:41",
                        null
                    ],
                    "date": "2020-06-11 4:55:41"
                },
                {
                    "value": [
                        "2020-06-11 05:00:21",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:00:21",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 5:02:21",
                        null
                    ],
                    "date": "2020-06-11 5:02:21"
                },
                {
                    "value": [
                        "2020-06-11 05:08:41",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:08:41",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 5:10:41",
                        null
                    ],
                    "date": "2020-06-11 5:10:41"
                },
                {
                    "value": [
                        "2020-06-11 05:12:01",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:12:01",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 5:14:01",
                        null
                    ],
                    "date": "2020-06-11 5:14:01"
                },
                {
                    "value": [
                        "2020-06-11 05:20:21",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:20:21",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 5:22:21",
                        null
                    ],
                    "date": "2020-06-11 5:22:21"
                },
                {
                    "value": [
                        "2020-06-11 06:03:41",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 06:03:41",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 6:05:41",
                        null
                    ],
                    "date": "2020-06-11 6:05:41"
                },
                {
                    "value": [
                        "2020-06-11 08:10:21",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 08:10:21",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 8:12:21",
                        null
                    ],
                    "date": "2020-06-11 8:12:21"
                },
                {
                    "value": [
                        "2020-06-11 09:00:21",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:00:21",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 9:02:21",
                        null
                    ],
                    "date": "2020-06-11 9:02:21"
                },
                {
                    "value": [
                        "2020-06-11 09:43:41",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:43:41",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 9:45:41",
                        null
                    ],
                    "date": "2020-06-11 9:45:41"
                },
                {
                    "value": [
                        "2020-06-11 10:00:21",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:00:21",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 10:02:21",
                        null
                    ],
                    "date": "2020-06-11 10:02:21"
                },
                {
                    "value": [
                        "2020-06-11 10:07:01",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:07:01",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                }
            ]
        },
        {
            "name": "服务器5",
            "type": "line",
            "symbol": "none",
            "data": [{
                    "value": [
                        "2020-06-11 06:52:32",
                        4
                    ],
                    "count": 4,
                    "vendor": "联想",
                    "date": "2020-06-11 06:52:32",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 06:54:16",
                        4
                    ],
                    "count": 4,
                    "vendor": "联想",
                    "date": "2020-06-11 06:54:16",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 6:56:16",
                        null
                    ],
                    "date": "2020-06-11 6:56:16"
                },
                {
                    "value": [
                        "2020-06-11 07:00:56",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 07:00:56",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 07:02:36",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 07:02:36",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 7:04:36",
                        null
                    ],
                    "date": "2020-06-11 7:04:36"
                },
                {
                    "value": [
                        "2020-06-11 07:10:56",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 07:10:56",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 7:12:56",
                        null
                    ],
                    "date": "2020-06-11 7:12:56"
                },
                {
                    "value": [
                        "2020-06-11 07:14:51",
                        5
                    ],
                    "count": 5,
                    "vendor": "联想",
                    "date": "2020-06-11 07:14:51",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 07:16:35",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 07:16:35",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 07:18:15",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 07:18:15",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 7:20:15",
                        null
                    ],
                    "date": "2020-06-11 7:20:15"
                },
                {
                    "value": [
                        "2020-06-11 07:21:35",
                        2
                    ],
                    "count": 2,
                    "vendor": "联想",
                    "date": "2020-06-11 07:21:35",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 07:23:17",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 07:23:17",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 7:25:17",
                        null
                    ],
                    "date": "2020-06-11 7:25:17"
                },
                {
                    "value": [
                        "2020-06-11 07:26:37",
                        2
                    ],
                    "count": 2,
                    "vendor": "联想",
                    "date": "2020-06-11 07:26:37",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 7:28:37",
                        null
                    ],
                    "date": "2020-06-11 7:28:37"
                },
                {
                    "value": [
                        "2020-06-11 07:48:17",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 07:48:17",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 7:50:17",
                        null
                    ],
                    "date": "2020-06-11 7:50:17"
                },
                {
                    "value": [
                        "2020-06-11 07:56:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 07:56:37",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 7:58:37",
                        null
                    ],
                    "date": "2020-06-11 7:58:37"
                },
                {
                    "value": [
                        "2020-06-11 08:11:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 08:11:37",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 8:13:37",
                        null
                    ],
                    "date": "2020-06-11 8:13:37"
                },
                {
                    "value": [
                        "2020-06-11 08:19:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 08:19:57",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 8:21:57",
                        null
                    ],
                    "date": "2020-06-11 8:21:57"
                },
                {
                    "value": [
                        "2020-06-11 08:29:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 08:29:57",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 8:31:57",
                        null
                    ],
                    "date": "2020-06-11 8:31:57"
                },
                {
                    "value": [
                        "2020-06-11 08:38:17",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 08:38:17",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 8:40:17",
                        null
                    ],
                    "date": "2020-06-11 8:40:17"
                },
                {
                    "value": [
                        "2020-06-11 08:46:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 08:46:37",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 8:48:37",
                        null
                    ],
                    "date": "2020-06-11 8:48:37"
                },
                {
                    "value": [
                        "2020-06-11 08:53:17",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 08:53:17",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 8:55:17",
                        null
                    ],
                    "date": "2020-06-11 8:55:17"
                },
                {
                    "value": [
                        "2020-06-11 09:01:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 09:01:37",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 9:03:37",
                        null
                    ],
                    "date": "2020-06-11 9:03:37"
                },
                {
                    "value": [
                        "2020-06-11 09:09:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 09:09:57",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 9:11:57",
                        null
                    ],
                    "date": "2020-06-11 9:11:57"
                },
                {
                    "value": [
                        "2020-06-11 09:19:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 09:19:57",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 9:21:57",
                        null
                    ],
                    "date": "2020-06-11 9:21:57"
                },
                {
                    "value": [
                        "2020-06-11 09:26:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 09:26:37",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 9:28:37",
                        null
                    ],
                    "date": "2020-06-11 9:28:37"
                },
                {
                    "value": [
                        "2020-06-11 09:48:17",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 09:48:17",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 9:50:17",
                        null
                    ],
                    "date": "2020-06-11 9:50:17"
                },
                {
                    "value": [
                        "2020-06-11 10:08:17",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 10:08:17",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 10:10:17",
                        null
                    ],
                    "date": "2020-06-11 10:10:17"
                },
                {
                    "value": [
                        "2020-06-11 10:19:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 10:19:57",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                }
            ]
        },
        {
            "name": "服务器6",
            "type": "line",
            "symbol": "none",
            "data": [{
                    "value": [
                        "2020-06-10 22:55:13",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 22:55:13",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-10 10:57:13",
                        null
                    ],
                    "date": "2020-06-10 10:57:13"
                },
                {
                    "value": [
                        "2020-06-10 23:06:54",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:06:54",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-10 11:08:54",
                        null
                    ],
                    "date": "2020-06-10 11:08:54"
                },
                {
                    "value": [
                        "2020-06-10 23:33:33",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:33:33",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-10 11:35:33",
                        null
                    ],
                    "date": "2020-06-10 11:35:33"
                },
                {
                    "value": [
                        "2020-06-10 23:53:33",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:53:33",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-10 11:55:33",
                        null
                    ],
                    "date": "2020-06-10 11:55:33"
                },
                {
                    "value": [
                        "2020-06-11 00:16:54",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 00:16:54",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 12:18:54",
                        null
                    ],
                    "date": "2020-06-11 12:18:54"
                },
                {
                    "value": [
                        "2020-06-11 00:35:13",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 00:35:13",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 12:37:13",
                        null
                    ],
                    "date": "2020-06-11 12:37:13"
                },
                {
                    "value": [
                        "2020-06-11 00:43:34",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 00:43:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 12:45:34",
                        null
                    ],
                    "date": "2020-06-11 12:45:34"
                },
                {
                    "value": [
                        "2020-06-11 01:01:54",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 01:01:54",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 1:03:54",
                        null
                    ],
                    "date": "2020-06-11 1:03:54"
                },
                {
                    "value": [
                        "2020-06-11 01:05:14",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 01:05:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 1:07:14",
                        null
                    ],
                    "date": "2020-06-11 1:07:14"
                },
                {
                    "value": [
                        "2020-06-11 01:11:53",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 01:11:53",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 1:13:53",
                        null
                    ],
                    "date": "2020-06-11 1:13:53"
                },
                {
                    "value": [
                        "2020-06-11 01:16:53",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 01:16:53",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 1:18:53",
                        null
                    ],
                    "date": "2020-06-11 1:18:53"
                },
                {
                    "value": [
                        "2020-06-11 02:00:13",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:00:13",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 2:02:13",
                        null
                    ],
                    "date": "2020-06-11 2:02:13"
                },
                {
                    "value": [
                        "2020-06-11 02:11:53",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:11:53",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 2:13:53",
                        null
                    ],
                    "date": "2020-06-11 2:13:53"
                },
                {
                    "value": [
                        "2020-06-11 02:21:54",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:21:54",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 2:23:54",
                        null
                    ],
                    "date": "2020-06-11 2:23:54"
                },
                {
                    "value": [
                        "2020-06-11 02:36:54",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:36:54",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 2:38:54",
                        null
                    ],
                    "date": "2020-06-11 2:38:54"
                },
                {
                    "value": [
                        "2020-06-11 02:45:13",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:45:13",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 2:47:13",
                        null
                    ],
                    "date": "2020-06-11 2:47:13"
                },
                {
                    "value": [
                        "2020-06-11 02:51:54",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:51:54",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 2:53:54",
                        null
                    ],
                    "date": "2020-06-11 2:53:54"
                },
                {
                    "value": [
                        "2020-06-11 03:06:54",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:06:54",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 3:08:54",
                        null
                    ],
                    "date": "2020-06-11 3:08:54"
                },
                {
                    "value": [
                        "2020-06-11 03:10:14",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:10:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 03:11:54",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:11:54",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 3:13:54",
                        null
                    ],
                    "date": "2020-06-11 3:13:54"
                },
                {
                    "value": [
                        "2020-06-11 03:31:53",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:31:53",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 3:33:53",
                        null
                    ],
                    "date": "2020-06-11 3:33:53"
                },
                {
                    "value": [
                        "2020-06-11 03:40:14",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:40:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 3:42:14",
                        null
                    ],
                    "date": "2020-06-11 3:42:14"
                },
                {
                    "value": [
                        "2020-06-11 04:13:34",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 04:13:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 4:15:34",
                        null
                    ],
                    "date": "2020-06-11 4:15:34"
                },
                {
                    "value": [
                        "2020-06-11 04:33:34",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 04:33:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 4:35:34",
                        null
                    ],
                    "date": "2020-06-11 4:35:34"
                },
                {
                    "value": [
                        "2020-06-11 05:10:14",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:10:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 5:12:14",
                        null
                    ],
                    "date": "2020-06-11 5:12:14"
                },
                {
                    "value": [
                        "2020-06-11 05:31:53",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:31:53",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 5:33:53",
                        null
                    ],
                    "date": "2020-06-11 5:33:53"
                },
                {
                    "value": [
                        "2020-06-11 05:50:13",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:50:13",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 5:52:13",
                        null
                    ],
                    "date": "2020-06-11 5:52:13"
                },
                {
                    "value": [
                        "2020-06-11 06:15:13",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 06:15:13",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 6:17:13",
                        null
                    ],
                    "date": "2020-06-11 6:17:13"
                },
                {
                    "value": [
                        "2020-06-11 06:23:33",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 06:23:33",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 06:25:14",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 06:25:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 6:27:14",
                        null
                    ],
                    "date": "2020-06-11 6:27:14"
                },
                {
                    "value": [
                        "2020-06-11 06:51:53",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 06:51:53",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 6:53:53",
                        null
                    ],
                    "date": "2020-06-11 6:53:53"
                },
                {
                    "value": [
                        "2020-06-11 07:06:53",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 07:06:53",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 7:08:53",
                        null
                    ],
                    "date": "2020-06-11 7:08:53"
                },
                {
                    "value": [
                        "2020-06-11 07:15:13",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 07:15:13",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 7:17:13",
                        null
                    ],
                    "date": "2020-06-11 7:17:13"
                },
                {
                    "value": [
                        "2020-06-11 07:20:13",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 07:20:13",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 7:22:13",
                        null
                    ],
                    "date": "2020-06-11 7:22:13"
                },
                {
                    "value": [
                        "2020-06-11 07:33:33",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 07:33:33",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 7:35:33",
                        null
                    ],
                    "date": "2020-06-11 7:35:33"
                },
                {
                    "value": [
                        "2020-06-11 07:45:14",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 07:45:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 7:47:14",
                        null
                    ],
                    "date": "2020-06-11 7:47:14"
                },
                {
                    "value": [
                        "2020-06-11 08:41:54",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 08:41:54",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 8:43:54",
                        null
                    ],
                    "date": "2020-06-11 8:43:54"
                },
                {
                    "value": [
                        "2020-06-11 09:06:53",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:06:53",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 9:08:53",
                        null
                    ],
                    "date": "2020-06-11 9:08:53"
                },
                {
                    "value": [
                        "2020-06-11 09:11:54",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:11:54",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 9:13:54",
                        null
                    ],
                    "date": "2020-06-11 9:13:54"
                },
                {
                    "value": [
                        "2020-06-11 09:40:13",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:40:13",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 9:42:13",
                        null
                    ],
                    "date": "2020-06-11 9:42:13"
                },
                {
                    "value": [
                        "2020-06-11 09:43:34",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:43:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 9:45:34",
                        null
                    ],
                    "date": "2020-06-11 9:45:34"
                },
                {
                    "value": [
                        "2020-06-11 09:46:53",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:46:53",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 9:48:53",
                        null
                    ],
                    "date": "2020-06-11 9:48:53"
                },
                {
                    "value": [
                        "2020-06-11 09:50:13",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:50:13",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                },
                {
                    "value": [
                        "2020-06-11 9:52:13",
                        null
                    ],
                    "date": "2020-06-11 9:52:13"
                },
                {
                    "value": [
                        "2020-06-11 10:10:13",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:10:13",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "省电"
                }
            ]
        },
        {
            "name": "服务器7",
            "type": "line",
            "symbol": "none",
            "data": [{
                    "value": [
                        "2020-06-10 23:06:40",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:06:40",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:08:40",
                        null
                    ],
                    "date": "2020-06-10 11:08:40"
                },
                {
                    "value": [
                        "2020-06-10 23:18:20",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:18:20",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:20:20",
                        null
                    ],
                    "date": "2020-06-10 11:20:20"
                },
                {
                    "value": [
                        "2020-06-10 23:28:20",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:28:20",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:30:20",
                        null
                    ],
                    "date": "2020-06-10 11:30:20"
                },
                {
                    "value": [
                        "2020-06-10 23:36:40",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:36:40",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:38:40",
                        null
                    ],
                    "date": "2020-06-10 11:38:40"
                },
                {
                    "value": [
                        "2020-06-10 23:43:20",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:43:20",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:45:20",
                        null
                    ],
                    "date": "2020-06-10 11:45:20"
                },
                {
                    "value": [
                        "2020-06-10 23:53:20",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:53:20",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:55:20",
                        null
                    ],
                    "date": "2020-06-10 11:55:20"
                },
                {
                    "value": [
                        "2020-06-11 00:16:40",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 00:16:40",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 12:18:40",
                        null
                    ],
                    "date": "2020-06-11 12:18:40"
                },
                {
                    "value": [
                        "2020-06-11 00:26:40",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 00:26:40",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 12:28:40",
                        null
                    ],
                    "date": "2020-06-11 12:28:40"
                },
                {
                    "value": [
                        "2020-06-11 00:35:00",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 00:35:00",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 12:37:00",
                        null
                    ],
                    "date": "2020-06-11 12:37:00"
                },
                {
                    "value": [
                        "2020-06-11 01:10:00",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 01:10:00",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 1:12:00",
                        null
                    ],
                    "date": "2020-06-11 1:12:00"
                },
                {
                    "value": [
                        "2020-06-11 02:11:40",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:11:40",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:13:40",
                        null
                    ],
                    "date": "2020-06-11 2:13:40"
                },
                {
                    "value": [
                        "2020-06-11 02:25:00",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:25:00",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:27:00",
                        null
                    ],
                    "date": "2020-06-11 2:27:00"
                },
                {
                    "value": [
                        "2020-06-11 03:06:40",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:06:40",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:08:40",
                        null
                    ],
                    "date": "2020-06-11 3:08:40"
                },
                {
                    "value": [
                        "2020-06-11 03:16:40",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:16:40",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:18:40",
                        null
                    ],
                    "date": "2020-06-11 3:18:40"
                },
                {
                    "value": [
                        "2020-06-11 03:28:20",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:28:20",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:30:20",
                        null
                    ],
                    "date": "2020-06-11 3:30:20"
                },
                {
                    "value": [
                        "2020-06-11 03:46:40",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:46:40",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:48:40",
                        null
                    ],
                    "date": "2020-06-11 3:48:40"
                },
                {
                    "value": [
                        "2020-06-11 03:55:00",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:55:00",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:57:00",
                        null
                    ],
                    "date": "2020-06-11 3:57:00"
                },
                {
                    "value": [
                        "2020-06-11 04:03:20",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 04:03:20",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:05:20",
                        null
                    ],
                    "date": "2020-06-11 4:05:20"
                },
                {
                    "value": [
                        "2020-06-11 04:56:40",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 04:56:40",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:58:40",
                        null
                    ],
                    "date": "2020-06-11 4:58:40"
                },
                {
                    "value": [
                        "2020-06-11 05:05:00",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:05:00",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:07:00",
                        null
                    ],
                    "date": "2020-06-11 5:07:00"
                },
                {
                    "value": [
                        "2020-06-11 05:46:40",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:46:40",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:48:40",
                        null
                    ],
                    "date": "2020-06-11 5:48:40"
                },
                {
                    "value": [
                        "2020-06-11 06:03:20",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 06:03:20",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:05:20",
                        null
                    ],
                    "date": "2020-06-11 6:05:20"
                },
                {
                    "value": [
                        "2020-06-11 06:33:20",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 06:33:20",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:35:20",
                        null
                    ],
                    "date": "2020-06-11 6:35:20"
                },
                {
                    "value": [
                        "2020-06-11 06:48:20",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 06:48:20",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:50:20",
                        null
                    ],
                    "date": "2020-06-11 6:50:20"
                },
                {
                    "value": [
                        "2020-06-11 06:53:20",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 06:53:20",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:55:20",
                        null
                    ],
                    "date": "2020-06-11 6:55:20"
                },
                {
                    "value": [
                        "2020-06-11 07:01:40",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 07:01:40",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:03:40",
                        null
                    ],
                    "date": "2020-06-11 7:03:40"
                },
                {
                    "value": [
                        "2020-06-11 07:25:00",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 07:25:00",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:27:00",
                        null
                    ],
                    "date": "2020-06-11 7:27:00"
                },
                {
                    "value": [
                        "2020-06-11 07:30:00",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 07:30:00",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:32:00",
                        null
                    ],
                    "date": "2020-06-11 7:32:00"
                },
                {
                    "value": [
                        "2020-06-11 09:00:00",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:00:00",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 09:01:42",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:01:42",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 09:03:22",
                        3
                    ],
                    "count": 3,
                    "vendor": "PC",
                    "date": "2020-06-11 09:03:22",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 09:05:02",
                        3
                    ],
                    "count": 3,
                    "vendor": "PC",
                    "date": "2020-06-11 09:05:02",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:07:02",
                        null
                    ],
                    "date": "2020-06-11 9:07:02"
                },
                {
                    "value": [
                        "2020-06-11 09:10:02",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:10:02",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:12:02",
                        null
                    ],
                    "date": "2020-06-11 9:12:02"
                },
                {
                    "value": [
                        "2020-06-11 09:20:02",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:20:02",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:22:02",
                        null
                    ],
                    "date": "2020-06-11 9:22:02"
                },
                {
                    "value": [
                        "2020-06-11 09:26:42",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:26:42",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:28:42",
                        null
                    ],
                    "date": "2020-06-11 9:28:42"
                },
                {
                    "value": [
                        "2020-06-11 09:30:02",
                        2
                    ],
                    "count": 2,
                    "vendor": "PC",
                    "date": "2020-06-11 09:30:02",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:32:02",
                        null
                    ],
                    "date": "2020-06-11 9:32:02"
                },
                {
                    "value": [
                        "2020-06-11 09:38:26",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:38:26",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 09:40:06",
                        2
                    ],
                    "count": 2,
                    "vendor": "PC",
                    "date": "2020-06-11 09:40:06",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:42:06",
                        null
                    ],
                    "date": "2020-06-11 9:42:06"
                },
                {
                    "value": [
                        "2020-06-11 09:45:06",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:45:06",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:47:06",
                        null
                    ],
                    "date": "2020-06-11 9:47:06"
                },
                {
                    "value": [
                        "2020-06-11 09:50:06",
                        3
                    ],
                    "count": 3,
                    "vendor": "PC",
                    "date": "2020-06-11 09:50:06",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 09:51:47",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:51:47",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:53:47",
                        null
                    ],
                    "date": "2020-06-11 9:53:47"
                },
                {
                    "value": [
                        "2020-06-11 09:58:27",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:58:27",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:00:27",
                        null
                    ],
                    "date": "2020-06-11 10:00:27"
                },
                {
                    "value": [
                        "2020-06-11 10:01:48",
                        2
                    ],
                    "count": 2,
                    "vendor": "PC",
                    "date": "2020-06-11 10:01:48",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:03:48",
                        null
                    ],
                    "date": "2020-06-11 10:03:48"
                },
                {
                    "value": [
                        "2020-06-11 10:06:49",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:06:49",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:08:49",
                        null
                    ],
                    "date": "2020-06-11 10:08:49"
                },
                {
                    "value": [
                        "2020-06-11 10:10:14",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:10:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:12:14",
                        null
                    ],
                    "date": "2020-06-11 10:12:14"
                },
                {
                    "value": [
                        "2020-06-11 10:13:37",
                        2
                    ],
                    "count": 2,
                    "vendor": "PC",
                    "date": "2020-06-11 10:13:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:15:37",
                        null
                    ],
                    "date": "2020-06-11 10:15:37"
                },
                {
                    "value": [
                        "2020-06-11 10:16:58",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:16:58",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:18:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:18:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:20:17",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:20:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:21:58",
                        2
                    ],
                    "count": 2,
                    "vendor": "PC",
                    "date": "2020-06-11 10:21:58",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:23:37",
                        3
                    ],
                    "count": 3,
                    "vendor": "PC",
                    "date": "2020-06-11 10:23:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:25:17",
                        2
                    ],
                    "count": 2,
                    "vendor": "PC",
                    "date": "2020-06-11 10:25:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:26:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:26:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:28:57",
                        null
                    ],
                    "date": "2020-06-11 10:28:57"
                },
                {
                    "value": [
                        "2020-06-11 10:30:17",
                        2
                    ],
                    "count": 2,
                    "vendor": "PC",
                    "date": "2020-06-11 10:30:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:32:17",
                        null
                    ],
                    "date": "2020-06-11 10:32:17"
                },
                {
                    "value": [
                        "2020-06-11 10:35:17",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:35:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:36:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:36:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:38:57",
                        null
                    ],
                    "date": "2020-06-11 10:38:57"
                },
                {
                    "value": [
                        "2020-06-11 10:40:17",
                        2
                    ],
                    "count": 2,
                    "vendor": "PC",
                    "date": "2020-06-11 10:40:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:42:17",
                        null
                    ],
                    "date": "2020-06-11 10:42:17"
                },
                {
                    "value": [
                        "2020-06-11 10:43:37",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:43:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:45:17",
                        2
                    ],
                    "count": 2,
                    "vendor": "PC",
                    "date": "2020-06-11 10:45:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:46:57",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:46:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:48:57",
                        null
                    ],
                    "date": "2020-06-11 10:48:57"
                },
                {
                    "value": [
                        "2020-06-11 10:50:17",
                        4
                    ],
                    "count": 4,
                    "vendor": "PC",
                    "date": "2020-06-11 10:50:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows编辑器",
                    "device_model": "Z370 HD3 (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                }
            ]
        },
        {
            "name": "服务器8",
            "type": "line",
            "symbol": "none",
            "data": [{
                    "value": [
                        "2020-06-10 22:52:39",
                        7
                    ],
                    "count": 7,
                    "vendor": "PC",
                    "date": "2020-06-10 22:52:39",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 22:54:20",
                        5
                    ],
                    "count": 5,
                    "vendor": "PC",
                    "date": "2020-06-10 22:54:20",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 22:56:04",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-10 22:56:04",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 22:57:48",
                        12
                    ],
                    "count": 12,
                    "vendor": "PC",
                    "date": "2020-06-10 22:57:48",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 22:59:32",
                        8
                    ],
                    "count": 8,
                    "vendor": "PC",
                    "date": "2020-06-10 22:59:32",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:01:17",
                        10
                    ],
                    "count": 10,
                    "vendor": "PC",
                    "date": "2020-06-10 23:01:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:03:01",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-10 23:03:01",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:04:42",
                        10
                    ],
                    "count": 10,
                    "vendor": "PC",
                    "date": "2020-06-10 23:04:42",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:06:26",
                        9
                    ],
                    "count": 9,
                    "vendor": "PC",
                    "date": "2020-06-10 23:06:26",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:08:10",
                        10
                    ],
                    "count": 10,
                    "vendor": "PC",
                    "date": "2020-06-10 23:08:10",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:09:55",
                        6
                    ],
                    "count": 6,
                    "vendor": "PC",
                    "date": "2020-06-10 23:09:55",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:11:40",
                        5
                    ],
                    "count": 5,
                    "vendor": "PC",
                    "date": "2020-06-10 23:11:40",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:13:24",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-10 23:13:24",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:15:05",
                        4
                    ],
                    "count": 4,
                    "vendor": "PC",
                    "date": "2020-06-10 23:15:05",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:16:49",
                        9
                    ],
                    "count": 9,
                    "vendor": "PC",
                    "date": "2020-06-10 23:16:49",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:18:34",
                        5
                    ],
                    "count": 5,
                    "vendor": "PC",
                    "date": "2020-06-10 23:18:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:20:19",
                        10
                    ],
                    "count": 10,
                    "vendor": "PC",
                    "date": "2020-06-10 23:20:19",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:22:04",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-10 23:22:04",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:23:48",
                        6
                    ],
                    "count": 6,
                    "vendor": "PC",
                    "date": "2020-06-10 23:23:48",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:25:29",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-10 23:25:29",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:27:13",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-10 23:27:13",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:28:58",
                        9
                    ],
                    "count": 9,
                    "vendor": "PC",
                    "date": "2020-06-10 23:28:58",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:30:43",
                        12
                    ],
                    "count": 12,
                    "vendor": "PC",
                    "date": "2020-06-10 23:30:43",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:32:28",
                        12
                    ],
                    "count": 12,
                    "vendor": "PC",
                    "date": "2020-06-10 23:32:28",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:34:13",
                        12
                    ],
                    "count": 12,
                    "vendor": "PC",
                    "date": "2020-06-10 23:34:13",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:35:54",
                        12
                    ],
                    "count": 12,
                    "vendor": "PC",
                    "date": "2020-06-10 23:35:54",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:37:38",
                        18
                    ],
                    "count": 18,
                    "vendor": "PC",
                    "date": "2020-06-10 23:37:38",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:39:24",
                        16
                    ],
                    "count": 16,
                    "vendor": "PC",
                    "date": "2020-06-10 23:39:24",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:41:09",
                        10
                    ],
                    "count": 10,
                    "vendor": "PC",
                    "date": "2020-06-10 23:41:09",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:42:54",
                        8
                    ],
                    "count": 8,
                    "vendor": "PC",
                    "date": "2020-06-10 23:42:54",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:44:39",
                        10
                    ],
                    "count": 10,
                    "vendor": "PC",
                    "date": "2020-06-10 23:44:39",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:46:20",
                        15
                    ],
                    "count": 15,
                    "vendor": "PC",
                    "date": "2020-06-10 23:46:20",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:48:04",
                        9
                    ],
                    "count": 9,
                    "vendor": "PC",
                    "date": "2020-06-10 23:48:04",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:49:50",
                        7
                    ],
                    "count": 7,
                    "vendor": "PC",
                    "date": "2020-06-10 23:49:50",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:51:35",
                        9
                    ],
                    "count": 9,
                    "vendor": "PC",
                    "date": "2020-06-10 23:51:35",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:53:20",
                        8
                    ],
                    "count": 8,
                    "vendor": "PC",
                    "date": "2020-06-10 23:53:20",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:55:11",
                        9
                    ],
                    "count": 9,
                    "vendor": "PC",
                    "date": "2020-06-10 23:55:11",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:56:52",
                        5
                    ],
                    "count": 5,
                    "vendor": "PC",
                    "date": "2020-06-10 23:56:52",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 23:58:36",
                        4
                    ],
                    "count": 4,
                    "vendor": "PC",
                    "date": "2020-06-10 23:58:36",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:00:22",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-11 00:00:22",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:02:07",
                        7
                    ],
                    "count": 7,
                    "vendor": "PC",
                    "date": "2020-06-11 00:02:07",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:03:52",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-11 00:03:52",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:05:43",
                        6
                    ],
                    "count": 6,
                    "vendor": "PC",
                    "date": "2020-06-11 00:05:43",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:07:24",
                        10
                    ],
                    "count": 10,
                    "vendor": "PC",
                    "date": "2020-06-11 00:07:24",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:09:09",
                        10
                    ],
                    "count": 10,
                    "vendor": "PC",
                    "date": "2020-06-11 00:09:09",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:10:55",
                        7
                    ],
                    "count": 7,
                    "vendor": "PC",
                    "date": "2020-06-11 00:10:55",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:12:40",
                        10
                    ],
                    "count": 10,
                    "vendor": "PC",
                    "date": "2020-06-11 00:12:40",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:14:26",
                        8
                    ],
                    "count": 8,
                    "vendor": "PC",
                    "date": "2020-06-11 00:14:26",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:16:11",
                        8
                    ],
                    "count": 8,
                    "vendor": "PC",
                    "date": "2020-06-11 00:16:11",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:17:52",
                        10
                    ],
                    "count": 10,
                    "vendor": "PC",
                    "date": "2020-06-11 00:17:52",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:19:37",
                        8
                    ],
                    "count": 8,
                    "vendor": "PC",
                    "date": "2020-06-11 00:19:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:21:23",
                        8
                    ],
                    "count": 8,
                    "vendor": "PC",
                    "date": "2020-06-11 00:21:23",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:23:08",
                        9
                    ],
                    "count": 9,
                    "vendor": "PC",
                    "date": "2020-06-11 00:23:08",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:24:54",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-11 00:24:54",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:26:40",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-11 00:26:40",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:28:21",
                        7
                    ],
                    "count": 7,
                    "vendor": "PC",
                    "date": "2020-06-11 00:28:21",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:30:06",
                        9
                    ],
                    "count": 9,
                    "vendor": "PC",
                    "date": "2020-06-11 00:30:06",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:31:52",
                        13
                    ],
                    "count": 13,
                    "vendor": "PC",
                    "date": "2020-06-11 00:31:52",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:33:38",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-11 00:33:38",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:35:24",
                        8
                    ],
                    "count": 8,
                    "vendor": "PC",
                    "date": "2020-06-11 00:35:24",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:37:10",
                        9
                    ],
                    "count": 9,
                    "vendor": "PC",
                    "date": "2020-06-11 00:37:10",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:38:51",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-11 00:38:51",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:40:36",
                        10
                    ],
                    "count": 10,
                    "vendor": "PC",
                    "date": "2020-06-11 00:40:36",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:42:29",
                        15
                    ],
                    "count": 15,
                    "vendor": "PC",
                    "date": "2020-06-11 00:42:29",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:44:21",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-11 00:44:21",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:46:07",
                        22
                    ],
                    "count": 22,
                    "vendor": "PC",
                    "date": "2020-06-11 00:46:07",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:47:54",
                        13
                    ],
                    "count": 13,
                    "vendor": "PC",
                    "date": "2020-06-11 00:47:54",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:49:35",
                        19
                    ],
                    "count": 19,
                    "vendor": "PC",
                    "date": "2020-06-11 00:49:35",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:51:20",
                        26
                    ],
                    "count": 26,
                    "vendor": "PC",
                    "date": "2020-06-11 00:51:20",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:53:06",
                        17
                    ],
                    "count": 17,
                    "vendor": "PC",
                    "date": "2020-06-11 00:53:06",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:54:53",
                        22
                    ],
                    "count": 22,
                    "vendor": "PC",
                    "date": "2020-06-11 00:54:53",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:56:39",
                        24
                    ],
                    "count": 24,
                    "vendor": "PC",
                    "date": "2020-06-11 00:56:39",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 00:58:32",
                        25
                    ],
                    "count": 25,
                    "vendor": "PC",
                    "date": "2020-06-11 00:58:32",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:00:15",
                        21
                    ],
                    "count": 21,
                    "vendor": "PC",
                    "date": "2020-06-11 01:00:15",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:02:00",
                        26
                    ],
                    "count": 26,
                    "vendor": "PC",
                    "date": "2020-06-11 01:02:00",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:03:48",
                        25
                    ],
                    "count": 25,
                    "vendor": "PC",
                    "date": "2020-06-11 01:03:48",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:05:35",
                        27
                    ],
                    "count": 27,
                    "vendor": "PC",
                    "date": "2020-06-11 01:05:35",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:07:24",
                        23
                    ],
                    "count": 23,
                    "vendor": "PC",
                    "date": "2020-06-11 01:07:24",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:09:12",
                        23
                    ],
                    "count": 23,
                    "vendor": "PC",
                    "date": "2020-06-11 01:09:12",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:10:56",
                        25
                    ],
                    "count": 25,
                    "vendor": "PC",
                    "date": "2020-06-11 01:10:56",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:12:45",
                        23
                    ],
                    "count": 23,
                    "vendor": "PC",
                    "date": "2020-06-11 01:12:45",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:14:36",
                        19
                    ],
                    "count": 19,
                    "vendor": "PC",
                    "date": "2020-06-11 01:14:36",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:16:32",
                        18
                    ],
                    "count": 18,
                    "vendor": "PC",
                    "date": "2020-06-11 01:16:32",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:18:23",
                        20
                    ],
                    "count": 20,
                    "vendor": "PC",
                    "date": "2020-06-11 01:18:23",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:20:15",
                        18
                    ],
                    "count": 18,
                    "vendor": "PC",
                    "date": "2020-06-11 01:20:15",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:22:01",
                        17
                    ],
                    "count": 17,
                    "vendor": "PC",
                    "date": "2020-06-11 01:22:01",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:23:52",
                        13
                    ],
                    "count": 13,
                    "vendor": "PC",
                    "date": "2020-06-11 01:23:52",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:25:45",
                        15
                    ],
                    "count": 15,
                    "vendor": "PC",
                    "date": "2020-06-11 01:25:45",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:27:39",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-11 01:27:39",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:29:34",
                        13
                    ],
                    "count": 13,
                    "vendor": "PC",
                    "date": "2020-06-11 01:29:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:31:29",
                        7
                    ],
                    "count": 7,
                    "vendor": "PC",
                    "date": "2020-06-11 01:31:29",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:33:17",
                        12
                    ],
                    "count": 12,
                    "vendor": "PC",
                    "date": "2020-06-11 01:33:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:35:11",
                        7
                    ],
                    "count": 7,
                    "vendor": "PC",
                    "date": "2020-06-11 01:35:11",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:37:07",
                        6
                    ],
                    "count": 6,
                    "vendor": "PC",
                    "date": "2020-06-11 01:37:07",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:39:02",
                        8
                    ],
                    "count": 8,
                    "vendor": "PC",
                    "date": "2020-06-11 01:39:02",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:40:59",
                        7
                    ],
                    "count": 7,
                    "vendor": "PC",
                    "date": "2020-06-11 01:40:59",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:42:56",
                        5
                    ],
                    "count": 5,
                    "vendor": "PC",
                    "date": "2020-06-11 01:42:56",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:44:48",
                        4
                    ],
                    "count": 4,
                    "vendor": "PC",
                    "date": "2020-06-11 01:44:48",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:46:44",
                        2
                    ],
                    "count": 2,
                    "vendor": "PC",
                    "date": "2020-06-11 01:46:44",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:48:43",
                        6
                    ],
                    "count": 6,
                    "vendor": "PC",
                    "date": "2020-06-11 01:48:43",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:50:42",
                        6
                    ],
                    "count": 6,
                    "vendor": "PC",
                    "date": "2020-06-11 01:50:42",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:52:41",
                        5
                    ],
                    "count": 5,
                    "vendor": "PC",
                    "date": "2020-06-11 01:52:41",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:54:41",
                        8
                    ],
                    "count": 8,
                    "vendor": "PC",
                    "date": "2020-06-11 01:54:41",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:56:35",
                        9
                    ],
                    "count": 9,
                    "vendor": "PC",
                    "date": "2020-06-11 01:56:35",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 01:58:34",
                        6
                    ],
                    "count": 6,
                    "vendor": "PC",
                    "date": "2020-06-11 01:58:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:00:34",
                        null
                    ],
                    "date": "2020-06-11 2:00:34"
                },
                {
                    "value": [
                        "2020-06-11 02:00:36",
                        5
                    ],
                    "count": 5,
                    "vendor": "PC",
                    "date": "2020-06-11 02:00:36",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:02:36",
                        null
                    ],
                    "date": "2020-06-11 2:02:36"
                },
                {
                    "value": [
                        "2020-06-11 02:02:37",
                        7
                    ],
                    "count": 7,
                    "vendor": "PC",
                    "date": "2020-06-11 02:02:37",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:04:37",
                        null
                    ],
                    "date": "2020-06-11 2:04:37"
                },
                {
                    "value": [
                        "2020-06-11 02:04:40",
                        6
                    ],
                    "count": 6,
                    "vendor": "PC",
                    "date": "2020-06-11 02:04:40",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:06:40",
                        null
                    ],
                    "date": "2020-06-11 2:06:40"
                },
                {
                    "value": [
                        "2020-06-11 02:06:49",
                        13
                    ],
                    "count": 13,
                    "vendor": "PC",
                    "date": "2020-06-11 02:06:49",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 02:08:46",
                        8
                    ],
                    "count": 8,
                    "vendor": "PC",
                    "date": "2020-06-11 02:08:46",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:10:46",
                        null
                    ],
                    "date": "2020-06-11 2:10:46"
                },
                {
                    "value": [
                        "2020-06-11 02:10:48",
                        8
                    ],
                    "count": 8,
                    "vendor": "PC",
                    "date": "2020-06-11 02:10:48",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:12:48",
                        null
                    ],
                    "date": "2020-06-11 2:12:48"
                },
                {
                    "value": [
                        "2020-06-11 02:12:53",
                        7
                    ],
                    "count": 7,
                    "vendor": "PC",
                    "date": "2020-06-11 02:12:53",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:14:53",
                        null
                    ],
                    "date": "2020-06-11 2:14:53"
                },
                {
                    "value": [
                        "2020-06-11 02:14:56",
                        8
                    ],
                    "count": 8,
                    "vendor": "PC",
                    "date": "2020-06-11 02:14:56",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:16:56",
                        null
                    ],
                    "date": "2020-06-11 2:16:56"
                },
                {
                    "value": [
                        "2020-06-11 02:17:01",
                        10
                    ],
                    "count": 10,
                    "vendor": "PC",
                    "date": "2020-06-11 02:17:01",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:19:01",
                        null
                    ],
                    "date": "2020-06-11 2:19:01"
                },
                {
                    "value": [
                        "2020-06-11 02:19:06",
                        6
                    ],
                    "count": 6,
                    "vendor": "PC",
                    "date": "2020-06-11 02:19:06",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 02:21:06",
                        8
                    ],
                    "count": 8,
                    "vendor": "PC",
                    "date": "2020-06-11 02:21:06",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:23:06",
                        null
                    ],
                    "date": "2020-06-11 2:23:06"
                },
                {
                    "value": [
                        "2020-06-11 02:23:10",
                        8
                    ],
                    "count": 8,
                    "vendor": "PC",
                    "date": "2020-06-11 02:23:10",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:25:10",
                        null
                    ],
                    "date": "2020-06-11 2:25:10"
                },
                {
                    "value": [
                        "2020-06-11 02:25:17",
                        9
                    ],
                    "count": 9,
                    "vendor": "PC",
                    "date": "2020-06-11 02:25:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:27:17",
                        null
                    ],
                    "date": "2020-06-11 2:27:17"
                },
                {
                    "value": [
                        "2020-06-11 02:27:25",
                        7
                    ],
                    "count": 7,
                    "vendor": "PC",
                    "date": "2020-06-11 02:27:25",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:29:25",
                        null
                    ],
                    "date": "2020-06-11 2:29:25"
                },
                {
                    "value": [
                        "2020-06-11 02:29:32",
                        12
                    ],
                    "count": 12,
                    "vendor": "PC",
                    "date": "2020-06-11 02:29:32",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:31:32",
                        null
                    ],
                    "date": "2020-06-11 2:31:32"
                },
                {
                    "value": [
                        "2020-06-11 02:31:40",
                        7
                    ],
                    "count": 7,
                    "vendor": "PC",
                    "date": "2020-06-11 02:31:40",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:33:40",
                        null
                    ],
                    "date": "2020-06-11 2:33:40"
                },
                {
                    "value": [
                        "2020-06-11 02:33:42",
                        9
                    ],
                    "count": 9,
                    "vendor": "PC",
                    "date": "2020-06-11 02:33:42",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:35:42",
                        null
                    ],
                    "date": "2020-06-11 2:35:42"
                },
                {
                    "value": [
                        "2020-06-11 02:35:49",
                        18
                    ],
                    "count": 18,
                    "vendor": "PC",
                    "date": "2020-06-11 02:35:49",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:37:49",
                        null
                    ],
                    "date": "2020-06-11 2:37:49"
                },
                {
                    "value": [
                        "2020-06-11 02:37:58",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-11 02:37:58",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:39:58",
                        null
                    ],
                    "date": "2020-06-11 2:39:58"
                },
                {
                    "value": [
                        "2020-06-11 02:40:08",
                        8
                    ],
                    "count": 8,
                    "vendor": "PC",
                    "date": "2020-06-11 02:40:08",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:42:08",
                        null
                    ],
                    "date": "2020-06-11 2:42:08"
                },
                {
                    "value": [
                        "2020-06-11 02:42:18",
                        7
                    ],
                    "count": 7,
                    "vendor": "PC",
                    "date": "2020-06-11 02:42:18",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:44:18",
                        null
                    ],
                    "date": "2020-06-11 2:44:18"
                },
                {
                    "value": [
                        "2020-06-11 02:44:29",
                        5
                    ],
                    "count": 5,
                    "vendor": "PC",
                    "date": "2020-06-11 02:44:29",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:46:29",
                        null
                    ],
                    "date": "2020-06-11 2:46:29"
                },
                {
                    "value": [
                        "2020-06-11 02:46:34",
                        8
                    ],
                    "count": 8,
                    "vendor": "PC",
                    "date": "2020-06-11 02:46:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:48:34",
                        null
                    ],
                    "date": "2020-06-11 2:48:34"
                },
                {
                    "value": [
                        "2020-06-11 02:48:43",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-11 02:48:43",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:50:43",
                        null
                    ],
                    "date": "2020-06-11 2:50:43"
                },
                {
                    "value": [
                        "2020-06-11 02:50:55",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-11 02:50:55",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:52:55",
                        null
                    ],
                    "date": "2020-06-11 2:52:55"
                },
                {
                    "value": [
                        "2020-06-11 02:53:08",
                        6
                    ],
                    "count": 6,
                    "vendor": "PC",
                    "date": "2020-06-11 02:53:08",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:55:08",
                        null
                    ],
                    "date": "2020-06-11 2:55:08"
                },
                {
                    "value": [
                        "2020-06-11 02:55:20",
                        7
                    ],
                    "count": 7,
                    "vendor": "PC",
                    "date": "2020-06-11 02:55:20",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:57:20",
                        null
                    ],
                    "date": "2020-06-11 2:57:20"
                },
                {
                    "value": [
                        "2020-06-11 02:57:33",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-11 02:57:33",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:59:33",
                        null
                    ],
                    "date": "2020-06-11 2:59:33"
                },
                {
                    "value": [
                        "2020-06-11 02:59:41",
                        8
                    ],
                    "count": 8,
                    "vendor": "PC",
                    "date": "2020-06-11 02:59:41",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:01:41",
                        null
                    ],
                    "date": "2020-06-11 3:01:41"
                },
                {
                    "value": [
                        "2020-06-11 03:01:53",
                        6
                    ],
                    "count": 6,
                    "vendor": "PC",
                    "date": "2020-06-11 03:01:53",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:03:53",
                        null
                    ],
                    "date": "2020-06-11 3:03:53"
                },
                {
                    "value": [
                        "2020-06-11 03:04:07",
                        8
                    ],
                    "count": 8,
                    "vendor": "PC",
                    "date": "2020-06-11 03:04:07",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:06:07",
                        null
                    ],
                    "date": "2020-06-11 3:06:07"
                },
                {
                    "value": [
                        "2020-06-11 03:06:21",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-11 03:06:21",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:08:21",
                        null
                    ],
                    "date": "2020-06-11 3:08:21"
                },
                {
                    "value": [
                        "2020-06-11 03:08:36",
                        15
                    ],
                    "count": 15,
                    "vendor": "PC",
                    "date": "2020-06-11 03:08:36",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:10:36",
                        null
                    ],
                    "date": "2020-06-11 3:10:36"
                },
                {
                    "value": [
                        "2020-06-11 03:10:52",
                        12
                    ],
                    "count": 12,
                    "vendor": "PC",
                    "date": "2020-06-11 03:10:52",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:12:52",
                        null
                    ],
                    "date": "2020-06-11 3:12:52"
                },
                {
                    "value": [
                        "2020-06-11 03:13:01",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-11 03:13:01",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:15:01",
                        null
                    ],
                    "date": "2020-06-11 3:15:01"
                },
                {
                    "value": [
                        "2020-06-11 03:15:15",
                        13
                    ],
                    "count": 13,
                    "vendor": "PC",
                    "date": "2020-06-11 03:15:15",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:17:15",
                        null
                    ],
                    "date": "2020-06-11 3:17:15"
                },
                {
                    "value": [
                        "2020-06-11 03:17:40",
                        17
                    ],
                    "count": 17,
                    "vendor": "PC",
                    "date": "2020-06-11 03:17:40",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:19:40",
                        null
                    ],
                    "date": "2020-06-11 3:19:40"
                },
                {
                    "value": [
                        "2020-06-11 03:19:57",
                        15
                    ],
                    "count": 15,
                    "vendor": "PC",
                    "date": "2020-06-11 03:19:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:21:57",
                        null
                    ],
                    "date": "2020-06-11 3:21:57"
                },
                {
                    "value": [
                        "2020-06-11 03:22:14",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-11 03:22:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:24:14",
                        null
                    ],
                    "date": "2020-06-11 3:24:14"
                },
                {
                    "value": [
                        "2020-06-11 03:24:33",
                        7
                    ],
                    "count": 7,
                    "vendor": "PC",
                    "date": "2020-06-11 03:24:33",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:26:33",
                        null
                    ],
                    "date": "2020-06-11 3:26:33"
                },
                {
                    "value": [
                        "2020-06-11 03:26:44",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-11 03:26:44",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:28:44",
                        null
                    ],
                    "date": "2020-06-11 3:28:44"
                },
                {
                    "value": [
                        "2020-06-11 03:29:01",
                        8
                    ],
                    "count": 8,
                    "vendor": "PC",
                    "date": "2020-06-11 03:29:01",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:31:01",
                        null
                    ],
                    "date": "2020-06-11 3:31:01"
                },
                {
                    "value": [
                        "2020-06-11 03:31:21",
                        7
                    ],
                    "count": 7,
                    "vendor": "PC",
                    "date": "2020-06-11 03:31:21",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:33:21",
                        null
                    ],
                    "date": "2020-06-11 3:33:21"
                },
                {
                    "value": [
                        "2020-06-11 03:33:41",
                        10
                    ],
                    "count": 10,
                    "vendor": "PC",
                    "date": "2020-06-11 03:33:41",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:35:41",
                        null
                    ],
                    "date": "2020-06-11 3:35:41"
                },
                {
                    "value": [
                        "2020-06-11 03:36:01",
                        13
                    ],
                    "count": 13,
                    "vendor": "PC",
                    "date": "2020-06-11 03:36:01",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:38:01",
                        null
                    ],
                    "date": "2020-06-11 3:38:01"
                },
                {
                    "value": [
                        "2020-06-11 03:38:21",
                        7
                    ],
                    "count": 7,
                    "vendor": "PC",
                    "date": "2020-06-11 03:38:21",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:40:21",
                        null
                    ],
                    "date": "2020-06-11 3:40:21"
                },
                {
                    "value": [
                        "2020-06-11 03:40:36",
                        9
                    ],
                    "count": 9,
                    "vendor": "PC",
                    "date": "2020-06-11 03:40:36",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:42:36",
                        null
                    ],
                    "date": "2020-06-11 3:42:36"
                },
                {
                    "value": [
                        "2020-06-11 03:42:55",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-11 03:42:55",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:44:55",
                        null
                    ],
                    "date": "2020-06-11 3:44:55"
                },
                {
                    "value": [
                        "2020-06-11 03:45:18",
                        9
                    ],
                    "count": 9,
                    "vendor": "PC",
                    "date": "2020-06-11 03:45:18",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:47:18",
                        null
                    ],
                    "date": "2020-06-11 3:47:18"
                },
                {
                    "value": [
                        "2020-06-11 03:47:40",
                        8
                    ],
                    "count": 8,
                    "vendor": "PC",
                    "date": "2020-06-11 03:47:40",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:49:40",
                        null
                    ],
                    "date": "2020-06-11 3:49:40"
                },
                {
                    "value": [
                        "2020-06-11 03:50:02",
                        5
                    ],
                    "count": 5,
                    "vendor": "PC",
                    "date": "2020-06-11 03:50:02",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:52:02",
                        null
                    ],
                    "date": "2020-06-11 3:52:02"
                },
                {
                    "value": [
                        "2020-06-11 03:52:34",
                        10
                    ],
                    "count": 10,
                    "vendor": "PC",
                    "date": "2020-06-11 03:52:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:54:34",
                        null
                    ],
                    "date": "2020-06-11 3:54:34"
                },
                {
                    "value": [
                        "2020-06-11 03:54:51",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-11 03:54:51",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:56:51",
                        null
                    ],
                    "date": "2020-06-11 3:56:51"
                },
                {
                    "value": [
                        "2020-06-11 03:57:13",
                        12
                    ],
                    "count": 12,
                    "vendor": "PC",
                    "date": "2020-06-11 03:57:13",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:59:13",
                        null
                    ],
                    "date": "2020-06-11 3:59:13"
                },
                {
                    "value": [
                        "2020-06-11 03:59:38",
                        9
                    ],
                    "count": 9,
                    "vendor": "PC",
                    "date": "2020-06-11 03:59:38",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:01:38",
                        null
                    ],
                    "date": "2020-06-11 4:01:38"
                },
                {
                    "value": [
                        "2020-06-11 04:02:03",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-11 04:02:03",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:04:03",
                        null
                    ],
                    "date": "2020-06-11 4:04:03"
                },
                {
                    "value": [
                        "2020-06-11 04:04:28",
                        5
                    ],
                    "count": 5,
                    "vendor": "PC",
                    "date": "2020-06-11 04:04:28",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:06:28",
                        null
                    ],
                    "date": "2020-06-11 4:06:28"
                },
                {
                    "value": [
                        "2020-06-11 04:06:54",
                        12
                    ],
                    "count": 12,
                    "vendor": "PC",
                    "date": "2020-06-11 04:06:54",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:08:54",
                        null
                    ],
                    "date": "2020-06-11 4:08:54"
                },
                {
                    "value": [
                        "2020-06-11 04:09:22",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-11 04:09:22",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:11:22",
                        null
                    ],
                    "date": "2020-06-11 4:11:22"
                },
                {
                    "value": [
                        "2020-06-11 04:11:47",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-11 04:11:47",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:13:47",
                        null
                    ],
                    "date": "2020-06-11 4:13:47"
                },
                {
                    "value": [
                        "2020-06-11 04:14:14",
                        9
                    ],
                    "count": 9,
                    "vendor": "PC",
                    "date": "2020-06-11 04:14:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:16:14",
                        null
                    ],
                    "date": "2020-06-11 4:16:14"
                },
                {
                    "value": [
                        "2020-06-11 04:16:41",
                        13
                    ],
                    "count": 13,
                    "vendor": "PC",
                    "date": "2020-06-11 04:16:41",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:18:41",
                        null
                    ],
                    "date": "2020-06-11 4:18:41"
                },
                {
                    "value": [
                        "2020-06-11 04:19:08",
                        9
                    ],
                    "count": 9,
                    "vendor": "PC",
                    "date": "2020-06-11 04:19:08",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:21:08",
                        null
                    ],
                    "date": "2020-06-11 4:21:08"
                },
                {
                    "value": [
                        "2020-06-11 04:21:36",
                        12
                    ],
                    "count": 12,
                    "vendor": "PC",
                    "date": "2020-06-11 04:21:36",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:23:36",
                        null
                    ],
                    "date": "2020-06-11 4:23:36"
                },
                {
                    "value": [
                        "2020-06-11 04:23:57",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-11 04:23:57",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:25:57",
                        null
                    ],
                    "date": "2020-06-11 4:25:57"
                },
                {
                    "value": [
                        "2020-06-11 04:26:24",
                        15
                    ],
                    "count": 15,
                    "vendor": "PC",
                    "date": "2020-06-11 04:26:24",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:28:24",
                        null
                    ],
                    "date": "2020-06-11 4:28:24"
                },
                {
                    "value": [
                        "2020-06-11 04:28:55",
                        12
                    ],
                    "count": 12,
                    "vendor": "PC",
                    "date": "2020-06-11 04:28:55",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:30:55",
                        null
                    ],
                    "date": "2020-06-11 4:30:55"
                },
                {
                    "value": [
                        "2020-06-11 04:31:25",
                        13
                    ],
                    "count": 13,
                    "vendor": "PC",
                    "date": "2020-06-11 04:31:25",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:33:25",
                        null
                    ],
                    "date": "2020-06-11 4:33:25"
                },
                {
                    "value": [
                        "2020-06-11 04:33:55",
                        15
                    ],
                    "count": 15,
                    "vendor": "PC",
                    "date": "2020-06-11 04:33:55",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:35:55",
                        null
                    ],
                    "date": "2020-06-11 4:35:55"
                },
                {
                    "value": [
                        "2020-06-11 04:36:26",
                        8
                    ],
                    "count": 8,
                    "vendor": "PC",
                    "date": "2020-06-11 04:36:26",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:38:26",
                        null
                    ],
                    "date": "2020-06-11 4:38:26"
                },
                {
                    "value": [
                        "2020-06-11 04:38:50",
                        16
                    ],
                    "count": 16,
                    "vendor": "PC",
                    "date": "2020-06-11 04:38:50",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:40:50",
                        null
                    ],
                    "date": "2020-06-11 4:40:50"
                },
                {
                    "value": [
                        "2020-06-11 04:41:20",
                        10
                    ],
                    "count": 10,
                    "vendor": "PC",
                    "date": "2020-06-11 04:41:20",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:43:20",
                        null
                    ],
                    "date": "2020-06-11 4:43:20"
                },
                {
                    "value": [
                        "2020-06-11 04:43:52",
                        9
                    ],
                    "count": 9,
                    "vendor": "PC",
                    "date": "2020-06-11 04:43:52",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:45:52",
                        null
                    ],
                    "date": "2020-06-11 4:45:52"
                },
                {
                    "value": [
                        "2020-06-11 04:46:25",
                        20
                    ],
                    "count": 20,
                    "vendor": "PC",
                    "date": "2020-06-11 04:46:25",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:48:25",
                        null
                    ],
                    "date": "2020-06-11 4:48:25"
                },
                {
                    "value": [
                        "2020-06-11 04:48:58",
                        19
                    ],
                    "count": 19,
                    "vendor": "PC",
                    "date": "2020-06-11 04:48:58",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:50:58",
                        null
                    ],
                    "date": "2020-06-11 4:50:58"
                },
                {
                    "value": [
                        "2020-06-11 04:51:31",
                        9
                    ],
                    "count": 9,
                    "vendor": "PC",
                    "date": "2020-06-11 04:51:31",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:53:31",
                        null
                    ],
                    "date": "2020-06-11 4:53:31"
                },
                {
                    "value": [
                        "2020-06-11 04:53:58",
                        15
                    ],
                    "count": 15,
                    "vendor": "PC",
                    "date": "2020-06-11 04:53:58",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:55:58",
                        null
                    ],
                    "date": "2020-06-11 4:55:58"
                },
                {
                    "value": [
                        "2020-06-11 04:56:30",
                        18
                    ],
                    "count": 18,
                    "vendor": "PC",
                    "date": "2020-06-11 04:56:30",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:58:30",
                        null
                    ],
                    "date": "2020-06-11 4:58:30"
                },
                {
                    "value": [
                        "2020-06-11 04:59:04",
                        16
                    ],
                    "count": 16,
                    "vendor": "PC",
                    "date": "2020-06-11 04:59:04",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:01:04",
                        null
                    ],
                    "date": "2020-06-11 5:01:04"
                },
                {
                    "value": [
                        "2020-06-11 05:01:39",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-11 05:01:39",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:03:39",
                        null
                    ],
                    "date": "2020-06-11 5:03:39"
                },
                {
                    "value": [
                        "2020-06-11 05:04:14",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-11 05:04:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:06:14",
                        null
                    ],
                    "date": "2020-06-11 5:06:14"
                },
                {
                    "value": [
                        "2020-06-11 05:06:49",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-11 05:06:49",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:08:49",
                        null
                    ],
                    "date": "2020-06-11 5:08:49"
                },
                {
                    "value": [
                        "2020-06-11 05:09:16",
                        12
                    ],
                    "count": 12,
                    "vendor": "PC",
                    "date": "2020-06-11 05:09:16",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:11:16",
                        null
                    ],
                    "date": "2020-06-11 5:11:16"
                },
                {
                    "value": [
                        "2020-06-11 05:11:49",
                        5
                    ],
                    "count": 5,
                    "vendor": "PC",
                    "date": "2020-06-11 05:11:49",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:13:49",
                        null
                    ],
                    "date": "2020-06-11 5:13:49"
                },
                {
                    "value": [
                        "2020-06-11 05:14:27",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-11 05:14:27",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:16:27",
                        null
                    ],
                    "date": "2020-06-11 5:16:27"
                },
                {
                    "value": [
                        "2020-06-11 05:17:03",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-11 05:17:03",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:19:03",
                        null
                    ],
                    "date": "2020-06-11 5:19:03"
                },
                {
                    "value": [
                        "2020-06-11 05:19:40",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-11 05:19:40",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:21:40",
                        null
                    ],
                    "date": "2020-06-11 5:21:40"
                },
                {
                    "value": [
                        "2020-06-11 05:22:19",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-11 05:22:19",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:24:19",
                        null
                    ],
                    "date": "2020-06-11 5:24:19"
                },
                {
                    "value": [
                        "2020-06-11 05:24:49",
                        8
                    ],
                    "count": 8,
                    "vendor": "PC",
                    "date": "2020-06-11 05:24:49",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:26:49",
                        null
                    ],
                    "date": "2020-06-11 5:26:49"
                },
                {
                    "value": [
                        "2020-06-11 05:27:35",
                        13
                    ],
                    "count": 13,
                    "vendor": "PC",
                    "date": "2020-06-11 05:27:35",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:29:35",
                        null
                    ],
                    "date": "2020-06-11 5:29:35"
                },
                {
                    "value": [
                        "2020-06-11 05:30:15",
                        13
                    ],
                    "count": 13,
                    "vendor": "PC",
                    "date": "2020-06-11 05:30:15",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:32:15",
                        null
                    ],
                    "date": "2020-06-11 5:32:15"
                },
                {
                    "value": [
                        "2020-06-11 05:32:55",
                        12
                    ],
                    "count": 12,
                    "vendor": "PC",
                    "date": "2020-06-11 05:32:55",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:34:55",
                        null
                    ],
                    "date": "2020-06-11 5:34:55"
                },
                {
                    "value": [
                        "2020-06-11 05:35:34",
                        16
                    ],
                    "count": 16,
                    "vendor": "PC",
                    "date": "2020-06-11 05:35:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:37:34",
                        null
                    ],
                    "date": "2020-06-11 5:37:34"
                },
                {
                    "value": [
                        "2020-06-11 05:38:15",
                        21
                    ],
                    "count": 21,
                    "vendor": "PC",
                    "date": "2020-06-11 05:38:15",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:40:15",
                        null
                    ],
                    "date": "2020-06-11 5:40:15"
                },
                {
                    "value": [
                        "2020-06-11 05:40:47",
                        9
                    ],
                    "count": 9,
                    "vendor": "PC",
                    "date": "2020-06-11 05:40:47",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:42:47",
                        null
                    ],
                    "date": "2020-06-11 5:42:47"
                },
                {
                    "value": [
                        "2020-06-11 05:43:26",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-11 05:43:26",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:45:26",
                        null
                    ],
                    "date": "2020-06-11 5:45:26"
                },
                {
                    "value": [
                        "2020-06-11 05:46:09",
                        17
                    ],
                    "count": 17,
                    "vendor": "PC",
                    "date": "2020-06-11 05:46:09",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:48:09",
                        null
                    ],
                    "date": "2020-06-11 5:48:09"
                },
                {
                    "value": [
                        "2020-06-11 05:48:50",
                        10
                    ],
                    "count": 10,
                    "vendor": "PC",
                    "date": "2020-06-11 05:48:50",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:50:50",
                        null
                    ],
                    "date": "2020-06-11 5:50:50"
                },
                {
                    "value": [
                        "2020-06-11 05:51:34",
                        15
                    ],
                    "count": 15,
                    "vendor": "PC",
                    "date": "2020-06-11 05:51:34",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:53:34",
                        null
                    ],
                    "date": "2020-06-11 5:53:34"
                },
                {
                    "value": [
                        "2020-06-11 05:54:17",
                        17
                    ],
                    "count": 17,
                    "vendor": "PC",
                    "date": "2020-06-11 05:54:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:56:17",
                        null
                    ],
                    "date": "2020-06-11 5:56:17"
                },
                {
                    "value": [
                        "2020-06-11 05:56:52",
                        16
                    ],
                    "count": 16,
                    "vendor": "PC",
                    "date": "2020-06-11 05:56:52",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:58:52",
                        null
                    ],
                    "date": "2020-06-11 5:58:52"
                },
                {
                    "value": [
                        "2020-06-11 05:59:33",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-11 05:59:33",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:01:33",
                        null
                    ],
                    "date": "2020-06-11 6:01:33"
                },
                {
                    "value": [
                        "2020-06-11 06:02:19",
                        13
                    ],
                    "count": 13,
                    "vendor": "PC",
                    "date": "2020-06-11 06:02:19",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:04:19",
                        null
                    ],
                    "date": "2020-06-11 6:04:19"
                },
                {
                    "value": [
                        "2020-06-11 06:05:03",
                        12
                    ],
                    "count": 12,
                    "vendor": "PC",
                    "date": "2020-06-11 06:05:03",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:07:03",
                        null
                    ],
                    "date": "2020-06-11 6:07:03"
                },
                {
                    "value": [
                        "2020-06-11 06:07:47",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-11 06:07:47",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:09:47",
                        null
                    ],
                    "date": "2020-06-11 6:09:47"
                },
                {
                    "value": [
                        "2020-06-11 06:10:32",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-11 06:10:32",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:12:32",
                        null
                    ],
                    "date": "2020-06-11 6:12:32"
                },
                {
                    "value": [
                        "2020-06-11 06:13:09",
                        17
                    ],
                    "count": 17,
                    "vendor": "PC",
                    "date": "2020-06-11 06:13:09",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:15:09",
                        null
                    ],
                    "date": "2020-06-11 6:15:09"
                },
                {
                    "value": [
                        "2020-06-11 06:15:53",
                        15
                    ],
                    "count": 15,
                    "vendor": "PC",
                    "date": "2020-06-11 06:15:53",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:17:53",
                        null
                    ],
                    "date": "2020-06-11 6:17:53"
                },
                {
                    "value": [
                        "2020-06-11 06:18:40",
                        19
                    ],
                    "count": 19,
                    "vendor": "PC",
                    "date": "2020-06-11 06:18:40",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:20:40",
                        null
                    ],
                    "date": "2020-06-11 6:20:40"
                },
                {
                    "value": [
                        "2020-06-11 06:21:27",
                        9
                    ],
                    "count": 9,
                    "vendor": "PC",
                    "date": "2020-06-11 06:21:27",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:23:27",
                        null
                    ],
                    "date": "2020-06-11 6:23:27"
                },
                {
                    "value": [
                        "2020-06-11 06:24:13",
                        16
                    ],
                    "count": 16,
                    "vendor": "PC",
                    "date": "2020-06-11 06:24:13",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:26:13",
                        null
                    ],
                    "date": "2020-06-11 6:26:13"
                },
                {
                    "value": [
                        "2020-06-11 06:27:01",
                        12
                    ],
                    "count": 12,
                    "vendor": "PC",
                    "date": "2020-06-11 06:27:01",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:29:01",
                        null
                    ],
                    "date": "2020-06-11 6:29:01"
                },
                {
                    "value": [
                        "2020-06-11 06:29:42",
                        18
                    ],
                    "count": 18,
                    "vendor": "PC",
                    "date": "2020-06-11 06:29:42",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:31:42",
                        null
                    ],
                    "date": "2020-06-11 6:31:42"
                },
                {
                    "value": [
                        "2020-06-11 06:32:28",
                        20
                    ],
                    "count": 20,
                    "vendor": "PC",
                    "date": "2020-06-11 06:32:28",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:34:28",
                        null
                    ],
                    "date": "2020-06-11 6:34:28"
                },
                {
                    "value": [
                        "2020-06-11 06:35:17",
                        10
                    ],
                    "count": 10,
                    "vendor": "PC",
                    "date": "2020-06-11 06:35:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:37:17",
                        null
                    ],
                    "date": "2020-06-11 6:37:17"
                },
                {
                    "value": [
                        "2020-06-11 06:38:05",
                        19
                    ],
                    "count": 19,
                    "vendor": "PC",
                    "date": "2020-06-11 06:38:05",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:40:05",
                        null
                    ],
                    "date": "2020-06-11 6:40:05"
                },
                {
                    "value": [
                        "2020-06-11 06:40:55",
                        10
                    ],
                    "count": 10,
                    "vendor": "PC",
                    "date": "2020-06-11 06:40:55",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:42:55",
                        null
                    ],
                    "date": "2020-06-11 6:42:55"
                },
                {
                    "value": [
                        "2020-06-11 06:43:44",
                        21
                    ],
                    "count": 21,
                    "vendor": "PC",
                    "date": "2020-06-11 06:43:44",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:45:44",
                        null
                    ],
                    "date": "2020-06-11 6:45:44"
                },
                {
                    "value": [
                        "2020-06-11 06:46:26",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-11 06:46:26",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:48:26",
                        null
                    ],
                    "date": "2020-06-11 6:48:26"
                },
                {
                    "value": [
                        "2020-06-11 06:49:14",
                        21
                    ],
                    "count": 21,
                    "vendor": "PC",
                    "date": "2020-06-11 06:49:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:51:14",
                        null
                    ],
                    "date": "2020-06-11 6:51:14"
                },
                {
                    "value": [
                        "2020-06-11 06:52:17",
                        9
                    ],
                    "count": 9,
                    "vendor": "PC",
                    "date": "2020-06-11 06:52:17",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:54:17",
                        null
                    ],
                    "date": "2020-06-11 6:54:17"
                },
                {
                    "value": [
                        "2020-06-11 06:55:08",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-11 06:55:08",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:57:08",
                        null
                    ],
                    "date": "2020-06-11 6:57:08"
                },
                {
                    "value": [
                        "2020-06-11 06:57:59",
                        10
                    ],
                    "count": 10,
                    "vendor": "PC",
                    "date": "2020-06-11 06:57:59",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:59:59",
                        null
                    ],
                    "date": "2020-06-11 6:59:59"
                },
                {
                    "value": [
                        "2020-06-11 07:00:53",
                        15
                    ],
                    "count": 15,
                    "vendor": "PC",
                    "date": "2020-06-11 07:00:53",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:02:53",
                        null
                    ],
                    "date": "2020-06-11 7:02:53"
                },
                {
                    "value": [
                        "2020-06-11 07:03:36",
                        25
                    ],
                    "count": 25,
                    "vendor": "PC",
                    "date": "2020-06-11 07:03:36",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:05:36",
                        null
                    ],
                    "date": "2020-06-11 7:05:36"
                },
                {
                    "value": [
                        "2020-06-11 07:06:27",
                        18
                    ],
                    "count": 18,
                    "vendor": "PC",
                    "date": "2020-06-11 07:06:27",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:08:27",
                        null
                    ],
                    "date": "2020-06-11 7:08:27"
                },
                {
                    "value": [
                        "2020-06-11 07:09:20",
                        16
                    ],
                    "count": 16,
                    "vendor": "PC",
                    "date": "2020-06-11 07:09:20",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:11:20",
                        null
                    ],
                    "date": "2020-06-11 7:11:20"
                },
                {
                    "value": [
                        "2020-06-11 07:12:14",
                        16
                    ],
                    "count": 16,
                    "vendor": "PC",
                    "date": "2020-06-11 07:12:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:14:14",
                        null
                    ],
                    "date": "2020-06-11 7:14:14"
                },
                {
                    "value": [
                        "2020-06-11 07:15:07",
                        20
                    ],
                    "count": 20,
                    "vendor": "PC",
                    "date": "2020-06-11 07:15:07",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:17:07",
                        null
                    ],
                    "date": "2020-06-11 7:17:07"
                },
                {
                    "value": [
                        "2020-06-11 07:18:02",
                        22
                    ],
                    "count": 22,
                    "vendor": "PC",
                    "date": "2020-06-11 07:18:02",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:20:02",
                        null
                    ],
                    "date": "2020-06-11 7:20:02"
                },
                {
                    "value": [
                        "2020-06-11 07:20:47",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-11 07:20:47",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:22:47",
                        null
                    ],
                    "date": "2020-06-11 7:22:47"
                },
                {
                    "value": [
                        "2020-06-11 07:23:40",
                        18
                    ],
                    "count": 18,
                    "vendor": "PC",
                    "date": "2020-06-11 07:23:40",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:25:40",
                        null
                    ],
                    "date": "2020-06-11 7:25:40"
                },
                {
                    "value": [
                        "2020-06-11 07:26:36",
                        19
                    ],
                    "count": 19,
                    "vendor": "PC",
                    "date": "2020-06-11 07:26:36",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:28:36",
                        null
                    ],
                    "date": "2020-06-11 7:28:36"
                },
                {
                    "value": [
                        "2020-06-11 07:29:33",
                        18
                    ],
                    "count": 18,
                    "vendor": "PC",
                    "date": "2020-06-11 07:29:33",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:31:33",
                        null
                    ],
                    "date": "2020-06-11 7:31:33"
                },
                {
                    "value": [
                        "2020-06-11 07:32:29",
                        17
                    ],
                    "count": 17,
                    "vendor": "PC",
                    "date": "2020-06-11 07:32:29",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:34:29",
                        null
                    ],
                    "date": "2020-06-11 7:34:29"
                },
                {
                    "value": [
                        "2020-06-11 07:35:25",
                        20
                    ],
                    "count": 20,
                    "vendor": "PC",
                    "date": "2020-06-11 07:35:25",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:37:25",
                        null
                    ],
                    "date": "2020-06-11 7:37:25"
                },
                {
                    "value": [
                        "2020-06-11 07:38:14",
                        15
                    ],
                    "count": 15,
                    "vendor": "PC",
                    "date": "2020-06-11 07:38:14",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:40:14",
                        null
                    ],
                    "date": "2020-06-11 7:40:14"
                },
                {
                    "value": [
                        "2020-06-11 07:41:10",
                        19
                    ],
                    "count": 19,
                    "vendor": "PC",
                    "date": "2020-06-11 07:41:10",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:43:10",
                        null
                    ],
                    "date": "2020-06-11 7:43:10"
                },
                {
                    "value": [
                        "2020-06-11 07:44:09",
                        15
                    ],
                    "count": 15,
                    "vendor": "PC",
                    "date": "2020-06-11 07:44:09",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:46:09",
                        null
                    ],
                    "date": "2020-06-11 7:46:09"
                },
                {
                    "value": [
                        "2020-06-11 07:47:07",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-11 07:47:07",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:49:07",
                        null
                    ],
                    "date": "2020-06-11 7:49:07"
                },
                {
                    "value": [
                        "2020-06-11 07:50:06",
                        15
                    ],
                    "count": 15,
                    "vendor": "PC",
                    "date": "2020-06-11 07:50:06",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:52:06",
                        null
                    ],
                    "date": "2020-06-11 7:52:06"
                },
                {
                    "value": [
                        "2020-06-11 07:53:16",
                        16
                    ],
                    "count": 16,
                    "vendor": "PC",
                    "date": "2020-06-11 07:53:16",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:55:16",
                        null
                    ],
                    "date": "2020-06-11 7:55:16"
                },
                {
                    "value": [
                        "2020-06-11 07:56:06",
                        23
                    ],
                    "count": 23,
                    "vendor": "PC",
                    "date": "2020-06-11 07:56:06",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:58:06",
                        null
                    ],
                    "date": "2020-06-11 7:58:06"
                },
                {
                    "value": [
                        "2020-06-11 07:59:04",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-11 07:59:04",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:01:04",
                        null
                    ],
                    "date": "2020-06-11 8:01:04"
                },
                {
                    "value": [
                        "2020-06-11 08:02:06",
                        16
                    ],
                    "count": 16,
                    "vendor": "PC",
                    "date": "2020-06-11 08:02:06",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:04:06",
                        null
                    ],
                    "date": "2020-06-11 8:04:06"
                },
                {
                    "value": [
                        "2020-06-11 08:05:07",
                        22
                    ],
                    "count": 22,
                    "vendor": "PC",
                    "date": "2020-06-11 08:05:07",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:07:07",
                        null
                    ],
                    "date": "2020-06-11 8:07:07"
                },
                {
                    "value": [
                        "2020-06-11 08:08:08",
                        17
                    ],
                    "count": 17,
                    "vendor": "PC",
                    "date": "2020-06-11 08:08:08",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:10:08",
                        null
                    ],
                    "date": "2020-06-11 8:10:08"
                },
                {
                    "value": [
                        "2020-06-11 08:11:11",
                        17
                    ],
                    "count": 17,
                    "vendor": "PC",
                    "date": "2020-06-11 08:11:11",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:13:11",
                        null
                    ],
                    "date": "2020-06-11 8:13:11"
                },
                {
                    "value": [
                        "2020-06-11 08:14:04",
                        20
                    ],
                    "count": 20,
                    "vendor": "PC",
                    "date": "2020-06-11 08:14:04",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:16:04",
                        null
                    ],
                    "date": "2020-06-11 8:16:04"
                },
                {
                    "value": [
                        "2020-06-11 08:17:05",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-11 08:17:05",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:19:05",
                        null
                    ],
                    "date": "2020-06-11 8:19:05"
                },
                {
                    "value": [
                        "2020-06-11 08:20:08",
                        16
                    ],
                    "count": 16,
                    "vendor": "PC",
                    "date": "2020-06-11 08:20:08",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:22:08",
                        null
                    ],
                    "date": "2020-06-11 8:22:08"
                },
                {
                    "value": [
                        "2020-06-11 08:23:11",
                        19
                    ],
                    "count": 19,
                    "vendor": "PC",
                    "date": "2020-06-11 08:23:11",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:25:11",
                        null
                    ],
                    "date": "2020-06-11 8:25:11"
                },
                {
                    "value": [
                        "2020-06-11 08:26:16",
                        18
                    ],
                    "count": 18,
                    "vendor": "PC",
                    "date": "2020-06-11 08:26:16",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:28:16",
                        null
                    ],
                    "date": "2020-06-11 8:28:16"
                },
                {
                    "value": [
                        "2020-06-11 08:29:19",
                        18
                    ],
                    "count": 18,
                    "vendor": "PC",
                    "date": "2020-06-11 08:29:19",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:31:19",
                        null
                    ],
                    "date": "2020-06-11 8:31:19"
                },
                {
                    "value": [
                        "2020-06-11 08:32:16",
                        20
                    ],
                    "count": 20,
                    "vendor": "PC",
                    "date": "2020-06-11 08:32:16",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:34:16",
                        null
                    ],
                    "date": "2020-06-11 8:34:16"
                },
                {
                    "value": [
                        "2020-06-11 08:35:19",
                        17
                    ],
                    "count": 17,
                    "vendor": "PC",
                    "date": "2020-06-11 08:35:19",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:37:19",
                        null
                    ],
                    "date": "2020-06-11 8:37:19"
                },
                {
                    "value": [
                        "2020-06-11 08:38:36",
                        18
                    ],
                    "count": 18,
                    "vendor": "PC",
                    "date": "2020-06-11 08:38:36",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:40:36",
                        null
                    ],
                    "date": "2020-06-11 8:40:36"
                },
                {
                    "value": [
                        "2020-06-11 08:41:41",
                        18
                    ],
                    "count": 18,
                    "vendor": "PC",
                    "date": "2020-06-11 08:41:41",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:43:41",
                        null
                    ],
                    "date": "2020-06-11 8:43:41"
                },
                {
                    "value": [
                        "2020-06-11 08:44:47",
                        17
                    ],
                    "count": 17,
                    "vendor": "PC",
                    "date": "2020-06-11 08:44:47",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:46:47",
                        null
                    ],
                    "date": "2020-06-11 8:46:47"
                },
                {
                    "value": [
                        "2020-06-11 08:47:53",
                        13
                    ],
                    "count": 13,
                    "vendor": "PC",
                    "date": "2020-06-11 08:47:53",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:49:53",
                        null
                    ],
                    "date": "2020-06-11 8:49:53"
                },
                {
                    "value": [
                        "2020-06-11 08:50:50",
                        12
                    ],
                    "count": 12,
                    "vendor": "PC",
                    "date": "2020-06-11 08:50:50",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:52:50",
                        null
                    ],
                    "date": "2020-06-11 8:52:50"
                },
                {
                    "value": [
                        "2020-06-11 08:53:55",
                        17
                    ],
                    "count": 17,
                    "vendor": "PC",
                    "date": "2020-06-11 08:53:55",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:55:55",
                        null
                    ],
                    "date": "2020-06-11 8:55:55"
                },
                {
                    "value": [
                        "2020-06-11 08:57:02",
                        19
                    ],
                    "count": 19,
                    "vendor": "PC",
                    "date": "2020-06-11 08:57:02",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:59:02",
                        null
                    ],
                    "date": "2020-06-11 8:59:02"
                },
                {
                    "value": [
                        "2020-06-11 09:00:10",
                        12
                    ],
                    "count": 12,
                    "vendor": "PC",
                    "date": "2020-06-11 09:00:10",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:02:10",
                        null
                    ],
                    "date": "2020-06-11 9:02:10"
                },
                {
                    "value": [
                        "2020-06-11 09:03:18",
                        17
                    ],
                    "count": 17,
                    "vendor": "PC",
                    "date": "2020-06-11 09:03:18",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:05:18",
                        null
                    ],
                    "date": "2020-06-11 9:05:18"
                },
                {
                    "value": [
                        "2020-06-11 09:06:26",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-11 09:06:26",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:08:26",
                        null
                    ],
                    "date": "2020-06-11 9:08:26"
                },
                {
                    "value": [
                        "2020-06-11 09:09:36",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-11 09:09:36",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:11:36",
                        null
                    ],
                    "date": "2020-06-11 9:11:36"
                },
                {
                    "value": [
                        "2020-06-11 09:12:44",
                        12
                    ],
                    "count": 12,
                    "vendor": "PC",
                    "date": "2020-06-11 09:12:44",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:14:44",
                        null
                    ],
                    "date": "2020-06-11 9:14:44"
                },
                {
                    "value": [
                        "2020-06-11 09:15:54",
                        17
                    ],
                    "count": 17,
                    "vendor": "PC",
                    "date": "2020-06-11 09:15:54",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:17:54",
                        null
                    ],
                    "date": "2020-06-11 9:17:54"
                },
                {
                    "value": [
                        "2020-06-11 09:19:04",
                        23
                    ],
                    "count": 23,
                    "vendor": "PC",
                    "date": "2020-06-11 09:19:04",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:21:04",
                        null
                    ],
                    "date": "2020-06-11 9:21:04"
                },
                {
                    "value": [
                        "2020-06-11 09:22:15",
                        14
                    ],
                    "count": 14,
                    "vendor": "PC",
                    "date": "2020-06-11 09:22:15",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:24:15",
                        null
                    ],
                    "date": "2020-06-11 9:24:15"
                },
                {
                    "value": [
                        "2020-06-11 09:25:26",
                        11
                    ],
                    "count": 11,
                    "vendor": "PC",
                    "date": "2020-06-11 09:25:26",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 9:27:26",
                        null
                    ],
                    "date": "2020-06-11 9:27:26"
                },
                {
                    "value": [
                        "2020-06-11 09:59:43",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:59:43",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:01:43",
                        null
                    ],
                    "date": "2020-06-11 10:01:43"
                },
                {
                    "value": [
                        "2020-06-11 10:15:13",
                        4
                    ],
                    "count": 4,
                    "vendor": "PC",
                    "date": "2020-06-11 10:15:13",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:17:13",
                        null
                    ],
                    "date": "2020-06-11 10:17:13"
                },
                {
                    "value": [
                        "2020-06-11 10:17:58",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:17:58",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:19:58",
                        null
                    ],
                    "date": "2020-06-11 10:19:58"
                },
                {
                    "value": [
                        "2020-06-11 10:26:18",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:26:18",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:28:18",
                        null
                    ],
                    "date": "2020-06-11 10:28:18"
                },
                {
                    "value": [
                        "2020-06-11 10:39:06",
                        3
                    ],
                    "count": 3,
                    "vendor": "PC",
                    "date": "2020-06-11 10:39:06",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:40:47",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 10:40:47",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 10:42:47",
                        null
                    ],
                    "date": "2020-06-11 10:42:47"
                },
                {
                    "value": [
                        "2020-06-11 10:44:09",
                        2
                    ],
                    "count": 2,
                    "vendor": "PC",
                    "date": "2020-06-11 10:44:09",
                    "space_name": "苏澜郡",
                    "os_name": "Windows",
                    "device_model": "B250M-DS3H (Gigabyte Technology Co., Ltd.)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                }
            ]
        },
        {
            "name": "服务器9",
            "type": "line",
            "symbol": "none",
            "data": [{
                    "value": [
                        "2020-06-10 23:15:24",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:15:24",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:17:24",
                        null
                    ],
                    "date": "2020-06-10 11:17:24"
                },
                {
                    "value": [
                        "2020-06-10 23:18:44",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:18:44",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:20:44",
                        null
                    ],
                    "date": "2020-06-10 11:20:44"
                },
                {
                    "value": [
                        "2020-06-10 23:23:44",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:23:44",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:25:44",
                        null
                    ],
                    "date": "2020-06-10 11:25:44"
                },
                {
                    "value": [
                        "2020-06-10 23:40:24",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-10 23:40:24",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-10 11:42:24",
                        null
                    ],
                    "date": "2020-06-10 11:42:24"
                },
                {
                    "value": [
                        "2020-06-11 00:48:44",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 00:48:44",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 12:50:44",
                        null
                    ],
                    "date": "2020-06-11 12:50:44"
                },
                {
                    "value": [
                        "2020-06-11 00:53:44",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 00:53:44",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 12:55:44",
                        null
                    ],
                    "date": "2020-06-11 12:55:44"
                },
                {
                    "value": [
                        "2020-06-11 01:30:24",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 01:30:24",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 1:32:24",
                        null
                    ],
                    "date": "2020-06-11 1:32:24"
                },
                {
                    "value": [
                        "2020-06-11 01:50:24",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 01:50:24",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 1:52:24",
                        null
                    ],
                    "date": "2020-06-11 1:52:24"
                },
                {
                    "value": [
                        "2020-06-11 02:07:04",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:07:04",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:09:04",
                        null
                    ],
                    "date": "2020-06-11 2:09:04"
                },
                {
                    "value": [
                        "2020-06-11 02:18:44",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:18:44",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:20:44",
                        null
                    ],
                    "date": "2020-06-11 2:20:44"
                },
                {
                    "value": [
                        "2020-06-11 02:25:24",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:25:24",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:27:24",
                        null
                    ],
                    "date": "2020-06-11 2:27:24"
                },
                {
                    "value": [
                        "2020-06-11 02:40:24",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 02:40:24",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 2:42:24",
                        null
                    ],
                    "date": "2020-06-11 2:42:24"
                },
                {
                    "value": [
                        "2020-06-11 03:30:24",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:30:24",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:32:24",
                        null
                    ],
                    "date": "2020-06-11 3:32:24"
                },
                {
                    "value": [
                        "2020-06-11 03:50:24",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 03:50:24",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:52:24",
                        null
                    ],
                    "date": "2020-06-11 3:52:24"
                },
                {
                    "value": [
                        "2020-06-11 04:08:44",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 04:08:44",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:10:44",
                        null
                    ],
                    "date": "2020-06-11 4:10:44"
                },
                {
                    "value": [
                        "2020-06-11 04:25:24",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 04:25:24",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:27:24",
                        null
                    ],
                    "date": "2020-06-11 4:27:24"
                },
                {
                    "value": [
                        "2020-06-11 04:35:24",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 04:35:24",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:37:24",
                        null
                    ],
                    "date": "2020-06-11 4:37:24"
                },
                {
                    "value": [
                        "2020-06-11 04:45:24",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 04:45:24",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 4:47:24",
                        null
                    ],
                    "date": "2020-06-11 4:47:24"
                },
                {
                    "value": [
                        "2020-06-11 05:10:28",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:10:28",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:12:28",
                        null
                    ],
                    "date": "2020-06-11 5:12:28"
                },
                {
                    "value": [
                        "2020-06-11 05:27:08",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:27:08",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:29:08",
                        null
                    ],
                    "date": "2020-06-11 5:29:08"
                },
                {
                    "value": [
                        "2020-06-11 05:48:48",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 05:48:48",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 5:50:48",
                        null
                    ],
                    "date": "2020-06-11 5:50:48"
                },
                {
                    "value": [
                        "2020-06-11 06:00:28",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 06:00:28",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:02:28",
                        null
                    ],
                    "date": "2020-06-11 6:02:28"
                },
                {
                    "value": [
                        "2020-06-11 06:35:28",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 06:35:28",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 6:37:28",
                        null
                    ],
                    "date": "2020-06-11 6:37:28"
                },
                {
                    "value": [
                        "2020-06-11 07:13:48",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 07:13:48",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 7:15:48",
                        null
                    ],
                    "date": "2020-06-11 7:15:48"
                },
                {
                    "value": [
                        "2020-06-11 08:10:28",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 08:10:28",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 8:12:28",
                        null
                    ],
                    "date": "2020-06-11 8:12:28"
                },
                {
                    "value": [
                        "2020-06-11 09:20:28",
                        1
                    ],
                    "count": 1,
                    "vendor": "PC",
                    "date": "2020-06-11 09:20:28",
                    "space_name": "公会驻地",
                    "os_name": "Windows编辑器",
                    "device_model": "System Product Name (System manufacturer)",
                    "device_level": "顶配",
                    "quality_level": "精致"
                }
            ]
        },
        {
            "name": "服务器10",
            "type": "line",
            "symbol": "none",
            "data": [{
                    "value": [
                        "2020-06-11 03:50:05",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 03:50:05",
                    "space_name": "客船",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "精致"
                },
                {
                    "value": [
                        "2020-06-11 3:52:05",
                        null
                    ],
                    "date": "2020-06-11 3:52:05"
                },
                {
                    "value": [
                        "2020-06-11 03:58:25",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 03:58:25",
                    "space_name": "客船",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 4:00:25",
                        null
                    ],
                    "date": "2020-06-11 4:00:25"
                },
                {
                    "value": [
                        "2020-06-11 04:23:35",
                        3
                    ],
                    "count": 3,
                    "vendor": "联想",
                    "date": "2020-06-11 04:23:35",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 04:25:15",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 04:25:15",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 04:27:01",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 04:27:01",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 04:28:48",
                        4
                    ],
                    "count": 4,
                    "vendor": "联想",
                    "date": "2020-06-11 04:28:48",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 04:30:29",
                        2
                    ],
                    "count": 2,
                    "vendor": "联想",
                    "date": "2020-06-11 04:30:29",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 04:32:10",
                        3
                    ],
                    "count": 3,
                    "vendor": "联想",
                    "date": "2020-06-11 04:32:10",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 04:33:50",
                        2
                    ],
                    "count": 2,
                    "vendor": "联想",
                    "date": "2020-06-11 04:33:50",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 04:35:31",
                        3
                    ],
                    "count": 3,
                    "vendor": "联想",
                    "date": "2020-06-11 04:35:31",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 04:37:12",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 04:37:12",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 04:38:52",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 04:38:52",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 04:40:32",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 04:40:32",
                    "space_name": "试炼海岛",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 04:42:17",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 04:42:17",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 04:44:13",
                        3
                    ],
                    "count": 3,
                    "vendor": "联想",
                    "date": "2020-06-11 04:44:13",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 04:46:10",
                        3
                    ],
                    "count": 3,
                    "vendor": "联想",
                    "date": "2020-06-11 04:46:10",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 04:47:50",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 04:47:50",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 4:49:50",
                        null
                    ],
                    "date": "2020-06-11 4:49:50"
                },
                {
                    "value": [
                        "2020-06-11 04:51:12",
                        2
                    ],
                    "count": 2,
                    "vendor": "联想",
                    "date": "2020-06-11 04:51:12",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 04:53:01",
                        3
                    ],
                    "count": 3,
                    "vendor": "联想",
                    "date": "2020-06-11 04:53:01",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 04:54:44",
                        2
                    ],
                    "count": 2,
                    "vendor": "联想",
                    "date": "2020-06-11 04:54:44",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 04:56:36",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 04:56:36",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 04:58:26",
                        3
                    ],
                    "count": 3,
                    "vendor": "联想",
                    "date": "2020-06-11 04:58:26",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 5:00:26",
                        null
                    ],
                    "date": "2020-06-11 5:00:26"
                },
                {
                    "value": [
                        "2020-06-11 05:01:52",
                        4
                    ],
                    "count": 4,
                    "vendor": "联想",
                    "date": "2020-06-11 05:01:52",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 5:03:52",
                        null
                    ],
                    "date": "2020-06-11 5:03:52"
                },
                {
                    "value": [
                        "2020-06-11 05:03:56",
                        2
                    ],
                    "count": 2,
                    "vendor": "联想",
                    "date": "2020-06-11 05:03:56",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 05:05:51",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 05:05:51",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 05:07:48",
                        3
                    ],
                    "count": 3,
                    "vendor": "联想",
                    "date": "2020-06-11 05:07:48",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 05:09:38",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 05:09:38",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 05:11:28",
                        3
                    ],
                    "count": 3,
                    "vendor": "联想",
                    "date": "2020-06-11 05:11:28",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 05:13:19",
                        5
                    ],
                    "count": 5,
                    "vendor": "联想",
                    "date": "2020-06-11 05:13:19",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 5:15:19",
                        null
                    ],
                    "date": "2020-06-11 5:15:19"
                },
                {
                    "value": [
                        "2020-06-11 05:16:40",
                        5
                    ],
                    "count": 5,
                    "vendor": "联想",
                    "date": "2020-06-11 05:16:40",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 05:18:28",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 05:18:28",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 05:20:11",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 05:20:11",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 5:22:11",
                        null
                    ],
                    "date": "2020-06-11 5:22:11"
                },
                {
                    "value": [
                        "2020-06-11 05:23:34",
                        2
                    ],
                    "count": 2,
                    "vendor": "联想",
                    "date": "2020-06-11 05:23:34",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 05:25:17",
                        3
                    ],
                    "count": 3,
                    "vendor": "联想",
                    "date": "2020-06-11 05:25:17",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 05:27:03",
                        2
                    ],
                    "count": 2,
                    "vendor": "联想",
                    "date": "2020-06-11 05:27:03",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 5:29:03",
                        null
                    ],
                    "date": "2020-06-11 5:29:03"
                },
                {
                    "value": [
                        "2020-06-11 05:30:36",
                        2
                    ],
                    "count": 2,
                    "vendor": "联想",
                    "date": "2020-06-11 05:30:36",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 05:32:20",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 05:32:20",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 05:34:09",
                        2
                    ],
                    "count": 2,
                    "vendor": "联想",
                    "date": "2020-06-11 05:34:09",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 05:35:50",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 05:35:50",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 05:37:35",
                        2
                    ],
                    "count": 2,
                    "vendor": "联想",
                    "date": "2020-06-11 05:37:35",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 05:39:18",
                        4
                    ],
                    "count": 4,
                    "vendor": "联想",
                    "date": "2020-06-11 05:39:18",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 05:41:03",
                        2
                    ],
                    "count": 2,
                    "vendor": "联想",
                    "date": "2020-06-11 05:41:03",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 05:42:50",
                        2
                    ],
                    "count": 2,
                    "vendor": "联想",
                    "date": "2020-06-11 05:42:50",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 05:44:36",
                        3
                    ],
                    "count": 3,
                    "vendor": "联想",
                    "date": "2020-06-11 05:44:36",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 05:46:22",
                        4
                    ],
                    "count": 4,
                    "vendor": "联想",
                    "date": "2020-06-11 05:46:22",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 05:48:04",
                        2
                    ],
                    "count": 2,
                    "vendor": "联想",
                    "date": "2020-06-11 05:48:04",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 05:49:53",
                        3
                    ],
                    "count": 3,
                    "vendor": "联想",
                    "date": "2020-06-11 05:49:53",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 5:51:53",
                        null
                    ],
                    "date": "2020-06-11 5:51:53"
                },
                {
                    "value": [
                        "2020-06-11 05:54:55",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 05:54:55",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 05:56:53",
                        2
                    ],
                    "count": 2,
                    "vendor": "联想",
                    "date": "2020-06-11 05:56:53",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 05:58:47",
                        3
                    ],
                    "count": 3,
                    "vendor": "联想",
                    "date": "2020-06-11 05:58:47",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 06:00:28",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 06:00:28",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 06:02:10",
                        3
                    ],
                    "count": 3,
                    "vendor": "联想",
                    "date": "2020-06-11 06:02:10",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 6:04:10",
                        null
                    ],
                    "date": "2020-06-11 6:04:10"
                },
                {
                    "value": [
                        "2020-06-11 06:24:11",
                        4
                    ],
                    "count": 4,
                    "vendor": "联想",
                    "date": "2020-06-11 06:24:11",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 06:25:53",
                        3
                    ],
                    "count": 3,
                    "vendor": "联想",
                    "date": "2020-06-11 06:25:53",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 06:27:36",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 06:27:36",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 06:29:16",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 06:29:16",
                    "space_name": "灵墟·寻幽",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 06:30:59",
                        5
                    ],
                    "count": 5,
                    "vendor": "联想",
                    "date": "2020-06-11 06:30:59",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 06:32:39",
                        3
                    ],
                    "count": 3,
                    "vendor": "联想",
                    "date": "2020-06-11 06:32:39",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                },
                {
                    "value": [
                        "2020-06-11 06:34:20",
                        1
                    ],
                    "count": 1,
                    "vendor": "联想",
                    "date": "2020-06-11 06:34:20",
                    "space_name": "苏澜郡",
                    "os_name": "Android",
                    "device_model": "Lenovo Lenovo L78121",
                    "device_level": "低端",
                    "quality_level": "流畅"
                }
            ]
        }
    ]
}