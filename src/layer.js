//定义mapbox底图
import { appConfig } from './config';
export const maplayer = {
  simple: {
    "version": 8,
    "name": "Bright",
    "sources": {
      "ProvincialPoint":{
        "tiles": [
          appConfig.developUrl+"monitor/pbf/midpoint/{z}/{x}/{y}"
        ],
        "type": "vector"
      }
    },
    "glyphs": "http://minedata.cn/minemapapi/v1.3/fonts/{fontstack}/{range}.pbf",
    "sprite": appConfig.webLocation+"/static/map/sprite/sprite",
    "layers": [
      {
        "id": "305e7db2535044feb87d3045a268898b",
        "maxzoom": 18.0,
        "source": "",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "background-color": "#112138"
        },
        "source-layer": "",
        "minzoom": 3.0,
        "type": "background"
      },
      {
        id: 'ProvincialPoint_name',
        type: 'symbol',
        interactive: true,
        "source" : "ProvincialPoint",
        'source-layer': 'poi',
        layout:{
            'icon-image': 'circle-brown-11',
            "text-field": "{provinceName}",
            'text-size':12,
            "text-offset":[0,1.5],
            "text-justify": "center",
            "visibility": "visible"
          },
        paint: {
            'icon-color': '#ff2d2d',
            "text-halo-width": 0.5,
            "text-color": "#ffffff",
          }
      }
    ]
  }
}
