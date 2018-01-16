//定义mapbox底图
export const maplayer = {
  simple: {
    "version": 8,
    "name": "Bright",
    "sources": {
      "ProvincialRegion":{
        "tiles": [
          "http://192.168.15.41:9999/smapapi/automate/monitor/pbf/outline/{z}/{x}/{y}?convListId=''"
        ],
        "type": "vector"
      },
      "ProvincialPoint":{
        "tiles": [
          "http://192.168.15.41:9999/smapapi/automate/monitor/pbf/midpoint/{z}/{x}/{y}"
        ],
        "type": "vector"
      },
      "mapblock":{
        "tiles": [
          "http://192.168.15.41:9999/smapapi/automate/monitor/pbf/meshoutline/{z}/{x}/{y}"
        ],
        "type": "vector"
      },
      "Zlevel": {
        "tiles": [
          "http://minedata.cn/data/Zlevel/{z}/{x}/{y}?token=fa502cb69dfc4b7bb8a99ac6f092ab47&solu=3994"
        ],
        "type": "vector"
      },
      "Landuse": {
        "tiles": [
          "http://minedata.cn/data/Landuse/{z}/{x}/{y}?token=fa502cb69dfc4b7bb8a99ac6f092ab47&solu=3994"
        ],
        "type": "vector"
      },
      "Merge_1": {
        "tiles": [
          "http://minedata.cn/mergeddata/Villtown,Road,Adminflag,Annotation,Worldannotation/{z}/{x}/{y}?token=fa502cb69dfc4b7bb8a99ac6f092ab47&solu=3994"
        ],
        "type": "vector"
      },
      "Buildingmore": {
        "tiles": [
          "http://minedata.cn/data/Buildingmore/{z}/{x}/{y}?token=fa502cb69dfc4b7bb8a99ac6f092ab47&solu=3994"
        ],
        "type": "vector"
      },
      "Greenface": {
        "tiles": [
          "http://minedata.cn/data/Greenface/{z}/{x}/{y}?token=fa502cb69dfc4b7bb8a99ac6f092ab47&solu=3994"
        ],
        "type": "vector"
      },
      "Waterline": {
        "tiles": [
          "http://minedata.cn/data/Waterface/{z}/{x}/{y}?token=fa502cb69dfc4b7bb8a99ac6f092ab47&solu=3994"
        ],
        "type": "vector"
      },
      "Worldwaterface": {
        "tiles": [
          "http://minedata.cn/data/Worldwaterface/{z}/{x}/{y}?token=fa502cb69dfc4b7bb8a99ac6f092ab47&solu=3994"
        ],
        "type": "vector"
      },
      "Worldcountries": {
        "tiles": [
          "http://minedata.cn/data/Worldcountries/{z}/{x}/{y}?token=fa502cb69dfc4b7bb8a99ac6f092ab47&solu=3994"
        ],
        "type": "vector"
      },
      "Waterface": {
        "tiles": [
          "http://minedata.cn/data/Waterface/{z}/{x}/{y}?token=fa502cb69dfc4b7bb8a99ac6f092ab47&solu=3994"
        ],
        "type": "vector"
      },
      "Adminbound": {
        "tiles": [
          "http://minedata.cn/data/Adminbound/{z}/{x}/{y}?token=fa502cb69dfc4b7bb8a99ac6f092ab47&solu=3994"
        ],
        "type": "vector"
      }
    },
    "glyphs": "http://minedata.cn/minemapapi/v1.3/fonts/{fontstack}/{range}.pbf",
    "sprite": "http://192.168.15.41:9998/static/sprite/sprite",
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
        "id": "415474f1b13243118fb428c340b2e1fd",
        "maxzoom": 5.0,
        "source": "Worldwaterface",
        "layout": {
          "visibility": "visible"
        },
        "source-layer": "Worldwaterface",
        "paint": {
          "fill-color": "#041023"
        },
        "minzoom": 3,
        "type": "fill"
      },
      {
        "id": "b0d99c3385ac400287b766c6674b1bd0",
        "maxzoom": 8.5,
        "source": "Worldcountries",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#17305b",
          "fill-opacity": 0.6
        },
        "source-layer": "Worldcountries",
        "minzoom": 3,
        "type": "fill"
      },
      {
        "id": "04076cfa3b38492fa9ba71a556a72aa0",
        "maxzoom": 17.5,
        "source": "Waterface",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#041023"
        },
        "source-layer": "Waterface",
        "minzoom": 5.0,
        "type": "fill",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ]
        ]
      },
      {
        "id": "c539caf5078d4d18be842d5d6143e0b6",
        "maxzoom": 17.5,
        "source": "Landuse",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#042235"
        },
        "source-layer": "Landuse",
        "minzoom": 12,
        "type": "fill",
        "filter": ["all", ["==", "kind", 11]]
      },
      {
        "id": "fafd24c4496c44bc9f1a7fa1bb952936",
        "maxzoom": 17.5,
        "source": "Landuse",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#0a2b3a"
        },
        "source-layer": "Landuse",
        "minzoom": 12,
        "type": "fill",
        "filter": ["all", ["==", "kind", 12]]
      },
      {
        "id": "82cb514a94f644e7b5ed4bab591a70c4",
        "maxzoom": 17.5,
        "source": "Landuse",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#052442"
        },
        "source-layer": "Landuse",
        "minzoom": 12,
        "type": "fill",
        "filter": [
          "all",
          [
            "==",
            "kind",
            7
          ]
        ]
      },
      {
        "id": "4648517cc9d242ba8be100c6d6f95882",
        "maxzoom": 17.5,
        "source": "Landuse",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#072d45"
        },
        "source-layer": "Landuse",
        "minzoom": 12,
        "type": "fill",
        "filter": [
          "all",
          [
            "in",
            "kind",
            30,
            36,
            35,
            2
          ]
        ]
      },
      {
        "id": "f400d0d8a8dd4b0b89adf11aa8897b4c",
        "maxzoom": 17.5,
        "source": "Landuse",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#032033"
        },
        "source-layer": "Landuse",
        "minzoom": 12,
        "type": "fill",
        "filter": [
          "all",
          [
            "in",
            "kind",
            32,
            34,
            33,
            39
          ]
        ]
      },
      {
        "id": "ef8954911a4d4a979ff94c5e2f20cc34",
        "maxzoom": 17.5,
        "source": "Landuse",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#052337"
        },
        "source-layer": "Landuse",
        "minzoom": 12,
        "type": "fill",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ]
        ]
      },
      {
        "id": "b7772d48b6dc4429961c793789e4ea7c",
        "maxzoom": 17.5,
        "source": "Landuse",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#032439"
        },
        "source-layer": "Landuse",
        "minzoom": 12,
        "type": "fill",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ]
        ]
      },
      {
        "id": "87e30f334ff240ac897ca098f9e0c803",
        "maxzoom": 17.5,
        "source": "Landuse",
        "layout": {
          "visibility": "visible"
        },
        "source-layer": "Landuse",
        "paint": {
          "fill-color": "#0c3149",
          "fill-opacity": 0.25
        },
        "minzoom": 12,
        "type": "fill",
        "filter": [
          "all",
          [
            "in",
            "kind",
            6,
            40
          ]
        ]
      },
      {
        "id": "f9a7763dd2bf4ca193755ec78202841a",
        "maxzoom": 17.5,
        "source": "Greenface",
        "layout": {
          "visibility": "visible"
        },
        "source-layer": "Greenface",
        "paint": {
          "fill-color": "#0f486d"
        },
        "minzoom": 8.0,
        "type": "fill",
        "filter": [
          "all",
          [
            "==",
            "kind",
            "1"
          ]
        ]
      },
      {
        "id": "c4e84c22f63546688ef8d808227d523e",
        "maxzoom": 8.0,
        "source": "Greenface",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#0f486d"
        },
        "source-layer": "Greenface",
        "minzoom": 5.0,
        "type": "fill",
        "filter": [
          "all",
          [
            ">=",
            "area_level",
            75
          ],
          [
            "==",
            "kind",
            "1"
          ]
        ]
      },
      {
        "id": "9fecd8d3b2274f2b9acd02619839b492",
        "maxzoom": 9.0,
        "source": "Greenface",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#0f486d"
        },
        "source-layer": "Greenface",
        "minzoom": 8.0,
        "type": "fill",
        "filter": [
          "all",
          [
            "in",
            "kind",
            "7",
            "9",
            "6",
            "8"
          ],
          [
            ">=",
            "area_level",
            98
          ]
        ]
      },
      {
        "id": "bf5d9a51a5ca444d9eca72a33cc30fba",
        "maxzoom": 10.0,
        "source": "Greenface",
        "layout": {
          "visibility": "visible"
        },
        "source-layer": "Greenface",
        "paint": {
          "fill-color": "#0f486d"
        },
        "minzoom": 9.0,
        "type": "fill",
        "filter": [
          "all",
          [
            "in",
            "kind",
            "7",
            "9",
            "6",
            "8"
          ],
          [
            ">=",
            "area_level",
            97
          ]
        ]
      },
      {
        "id": "06fca40f8cd14195be8dbf06b36e479f",
        "maxzoom": 12.0,
        "source": "Greenface",
        "layout": {
          "visibility": "visible"
        },
        "source-layer": "Greenface",
        "paint": {
          "fill-color": "#0f486d"
        },
        "minzoom": 10.0,
        "type": "fill",
        "filter": [
          "all",
          [
            "in",
            "kind",
            "7",
            "9",
            "6",
            "8"
          ],
          [
            ">=",
            "area_level",
            90
          ]
        ]
      },
      {
        "id": "499979d1cd4745418b5dbbe412ea3d49",
        "maxzoom": 14.0,
        "source": "Greenface",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#0f486d"
        },
        "source-layer": "Greenface",
        "minzoom": 12.0,
        "type": "fill",
        "filter": [
          "all",
          [
            "in",
            "kind",
            "7",
            "9",
            "6",
            "8"
          ],
          [
            ">=",
            "area_level",
            75
          ]
        ]
      },
      {
        "id": "e16353324b6048a9ac6c115bd653a8af",
        "maxzoom": 17.5,
        "source": "Greenface",
        "layout": {
          "visibility": "visible"
        },
        "source-layer": "Greenface",
        "paint": {
          "fill-color": "#0f486d"
        },
        "minzoom": 14.0,
        "type": "fill",
        "filter": [
          "all",
          [
            "in",
            "kind",
            "7",
            "9",
            "6",
            "8"
          ]
        ]
      },
      {
        "id": "32c908d172f1452195a7881459877cd6",
        "maxzoom": 7.0,
        "source": "Waterline",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#022440",
          "line-width": {
            "stops": [
              [
                5,
                0.7
              ],
              [
                6,
                0.8
              ],
              [
                7,
                1.6
              ],
              [
                9,
                1.6
              ],
              [
                20,
                10
              ]
            ],
            "base": 1
          }
        },
        "source-layer": "Waterline",
        "minzoom": 4.0,
        "type": "line"
      },
      {
        "id": "354d4d880ecd431d8ffc3588546923bb",
        "maxzoom": 17.5,
        "source": "Waterface",
        "layout": {
          "visibility": "visible"
        },
        "source-layer": "Waterface",
        "paint": {
          "fill-color": "#022440"
        },
        "minzoom": 3.0,
        "type": "fill",
        "filter": [
          "all",
          [
            "==",
            "kind",
            5
          ],
          [
            "==",
            "display_class",
            8
          ]
        ]
      },
      {
        "id": "a1d5deecbf0545389b235850bbdfb893",
        "maxzoom": 17.5,
        "source": "Waterface",
        "layout": {
          "visibility": "visible"
        },
        "source-layer": "Waterface",
        "paint": {
          "fill-color": "#022440"
        },
        "minzoom": 13.0,
        "type": "fill",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ]
        ]
      },
      {
        "id": "9e30b8e1ded743e4a8b5d1da77982144",
        "maxzoom": 13.0,
        "source": "Waterface",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#022440"
        },
        "source-layer": "Waterface",
        "minzoom": 10.0,
        "type": "fill",
        "filter": [
          "all",
          [
            ">=",
            "display_class",
            1
          ],
          [
            ">=",
            "area_level",
            72
          ],
          [
            "==",
            "kind",
            3
          ]
        ]
      },
      {
        "id": "04cadb0e4c824773aa22cb42d9a87ae4",
        "maxzoom": 14.0,
        "source": "Waterface",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#022440"
        },
        "source-layer": "Waterface",
        "minzoom": 12.0,
        "type": "fill",
        "filter": [
          "all",
          [
            ">=",
            "display_class",
            2
          ],
          [
            "==",
            "kind",
            3
          ]
        ]
      },
      {
        "id": "0f3183087ca04d5da748c22b7dd10151",
        "maxzoom": 12.0,
        "source": "Waterface",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#022440"
        },
        "source-layer": "Waterface",
        "minzoom": 10.0,
        "type": "fill",
        "filter": [
          "all",
          [
            ">=",
            "display_class",
            3
          ],
          [
            "==",
            "kind",
            3
          ]
        ]
      },
      {
        "id": "b9f6b778a8294f58823d9d6f8733845c",
        "maxzoom": 10.0,
        "source": "Waterface",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#022440"
        },
        "source-layer": "Waterface",
        "minzoom": 9.0,
        "type": "fill",
        "filter": [
          "all",
          [
            ">=",
            "display_class",
            5
          ],
          [
            "==",
            "kind",
            3
          ]
        ]
      },
      {
        "id": "796462bfe80a4b11ac9c9be2d5d61ed0",
        "maxzoom": 10.0,
        "source": "Waterface",
        "layout": {
          "visibility": "visible"
        },
        "source-layer": "Waterface",
        "paint": {
          "fill-color": "#022440"
        },
        "minzoom": 7.0,
        "type": "fill",
        "filter": [
          "all",
          [
            ">=",
            "display_class",
            7
          ],
          [
            "==",
            "kind",
            3
          ]
        ]
      },
      {
        "id": "5ef9a598eedb4aea99044f74791d3890",
        "maxzoom": 7.0,
        "source": "Waterface",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#022440"
        },
        "source-layer": "Waterface",
        "minzoom": 3.0,
        "type": "fill",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            "==",
            "display_class",
            8
          ]
        ]
      },
      {
        "id": "ed8c7937ad114305ab51ffafc56ac568",
        "maxzoom": 10.0,
        "source": "Waterface",
        "layout": {
          "visibility": "visible"
        },
        "source-layer": "Waterface",
        "paint": {
          "fill-color": "#022440"
        },
        "minzoom": 7.0,
        "type": "fill",
        "filter": [
          "all",
          [
            "==",
            "display_class",
            -2
          ]
        ]
      },
      {
        "id": "33ed503501c2460e8b25be5b37034d1d",
        "maxzoom": 17.5,
        "source": "Waterface",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#022440"
        },
        "source-layer": "Waterface",
        "minzoom": 14.0,
        "type": "fill",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            ">=",
            "display_class",
            1
          ]
        ]
      },
      {
        "id": "866b61fe7d8b4a8c9fbb5b428647fb0e",
        "maxzoom": 14.0,
        "source": "Waterface",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#022440"
        },
        "source-layer": "Waterface",
        "minzoom": 11.0,
        "type": "fill",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            ">=",
            "display_class",
            1
          ],
          [
            ">=",
            "area_level",
            10
          ]
        ]
      },
      {
        "id": "2b0e62904cff48e4987d088007b94332",
        "maxzoom": 11.0,
        "source": "Waterface",
        "layout": {
          "visibility": "visible"
        },
        "source-layer": "Waterface",
        "paint": {
          "fill-color": "#022440"
        },
        "minzoom": 10.0,
        "type": "fill",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            ">=",
            "display_class",
            1
          ],
          [
            ">=",
            "area_level",
            20
          ]
        ]
      },
      {
        "id": "a939939493ed4f98943859eae4aaf5c5",
        "maxzoom": 10.0,
        "source": "Waterface",
        "layout": {
          "visibility": "visible"
        },
        "source-layer": "Waterface",
        "paint": {
          "fill-color": "#022440"
        },
        "minzoom": 9.0,
        "type": "fill",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            ">=",
            "display_class",
            1
          ],
          [
            ">=",
            "area_level",
            40
          ]
        ]
      },
      {
        "id": "1b88392b7a5448b49d1b47a27ae7812e",
        "maxzoom": 9.0,
        "source": "Waterface",
        "layout": {
          "visibility": "visible"
        },
        "source-layer": "Waterface",
        "paint": {
          "fill-color": "#022440"
        },
        "minzoom": 8.0,
        "type": "fill",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            ">=",
            "display_class",
            1
          ],
          [
            ">=",
            "area_level",
            85
          ]
        ]
      },
      {
        "id": "84c925ac22204c0891920aeb0d795e5a",
        "maxzoom": 8.0,
        "source": "Waterface",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#022440"
        },
        "source-layer": "Waterface",
        "minzoom": 6.0,
        "type": "fill",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            ">=",
            "display_class",
            4
          ],
          [
            ">=",
            "area_level",
            50
          ]
        ]
      },
      {
        "id": "46fb33bcb55547538cd9f992e42ac148",
        "maxzoom": 6.0,
        "source": "Waterface",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#022440"
        },
        "source-layer": "Waterface",
        "minzoom": 5.0,
        "type": "fill",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            ">=",
            "display_class",
            7
          ]
        ]
      },
      {
        "id": "b010de99209b4a3694727c9ae079691d",
        "maxzoom": 17.5,
        "source": "Waterface",
        "layout": {
          "visibility": "visible"
        },
        "source-layer": "Waterface",
        "paint": {
          "fill-color": "#022440"
        },
        "minzoom": 7.0,
        "type": "fill",
        "filter": [
          "all",
          [
            "==",
            "display_class",
            -1
          ]
        ]
      },
      {
        "id": "54c7701f61e64ceab95de07c097ed1f0",
        "maxzoom": 8.5,
        "source": "Adminbound",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Adminbound",
        "paint": {
          "line-dasharray": [
            6,
            3,
            3,
            4
          ],
          "line-color": "#09263b",
          "line-opacity": 1.0,
          "line-width": 1.0
        },
        "minzoom": 3,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ]
        ]
      },
      {
        "id": "ab41fc8efb614630bd1cf86f53139f93",
        "maxzoom": 8.5,
        "source": "Adminbound",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#09263b",
          "line-opacity": 1.0,
          "line-width": {
            "stops": [
              [3, 0.5],
              [8, 1]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Adminbound",
        "minzoom": 3,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            5
          ]
        ]
      },
      {
        "id": "d939d049aed9410d8141a8576a35b3cf",
        "maxzoom": 7.0,
        "source": "Adminbound",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#262121",
          "line-width": {
            "stops": [
              [
                3,
                1
              ],
              [
                8,
                3
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Adminbound",
        "minzoom": 3,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ]
        ]
      },
      {
        "id": "71748dc24f564815861e024bc96e2ce6",
        "maxzoom": 7.0,
        "source": "Adminbound",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Adminbound",
        "paint": {
          "line-color": "#6991a0",
          "line-width": {
            "stops": [
              [
                3,
                0.5
              ],
              [
                8,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 3,
        "type": "line",
        "filter": [
          "all",
          [
            "in",
            "kind",
            3,
            1
          ]
        ]
      },
      {
        "id": "1d1c41c6b12f4bdfb4213cad65514af7",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {

          "line-color": "#9b9b9b",
          "line-width": 2
        },
        "minzoom": 14.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "functionclass",
            5
          ],
          [
            "in",
            "kind",
            13,
            10,
            8,
            9
          ],
          [
            "in",
            "const_st",
            3,
            4
          ]
        ]
      },
      {
        "id": "03775a9cd410427eac18bb56ca7c3b18",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "text-size": 14,
          "visibility": "visible",
          "text-field": "{name_zh}",
          "symbol-placement": "line"
        },
        "paint": {
          "text-halo-color": "#ffffff",
          "text-color": "#09091d",
          "text-halo-width": 1,
          "icon-color": "#ff0000"
        },
        "source-layer": "Road",
        "minzoom": 12.0,
        "type": "symbol",
        "filter": [
          "all",
          [
            "in",
            "functionclass",
            5
          ],
          [
            "in",
            "const_st",
            3,
            4
          ],
          [
            "in",
            "kind",
            2,
            1,
            3,
            4
          ]
        ]
      },
      {
        "id": "35cd6acc6a664ed5bf84df7ac845e532",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {

          "line-color": "#9b9b9b",
          "line-width": 2
        },
        "source-layer": "Road",
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "functionclass",
            5
          ],
          [
            "in",
            "kind",
            2,
            1,
            3,
            4
          ],
          [
            "in",
            "const_st",
            3,
            4
          ]
        ]
      },
      {
        "id": "a8aa7d41434444f28d5512068a06b7b9",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "text-size": 14.0,
          "visibility": "visible",
          "text-field": "{name_zh}",
          "symbol-placement": "line"
        },
        "source-layer": "Road",
        "paint": {
          "text-halo-color": "#ffffff",
          "text-halo-width": 1,
          "text-color": "#09091d",
          "icon-color": "#ff0000"
        },
        "minzoom": 11.0,
        "type": "symbol",
        "filter": [
          "all",
          [
            "in",
            "functionclass",
            1,
            4,
            2,
            3
          ],
          [
            "in",
            "const_st",
            3,
            4
          ]
        ]
      },
      {
        "id": "568dc9764f914848bacaf15a12c16dde",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {

          "line-color": "#9b9b9b",
          "line-width": 2.0
        },
        "source-layer": "Road",
        "minzoom": 11.0,
        "type": "line",
        "filter": [
          "all",
          [
            "in",
            "functionclass",
            1,
            4,
            2,
            3
          ],
          [
            "in",
            "const_st",
            3,
            4
          ]
        ]
      },
      {
        "id": "5cc0ff6188ad46eea69da977cd0e5fb8",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "source-layer": "Road",
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "07d28f7ab6e84331aa0f6ff699cc10e6",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "0dd2fdba998f4d2eb5a01174bf414e40",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 12,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "011e4778adb9435fa28ceda0bab664ee",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 9,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            "==",
            "functionclass",
            4
          ]
        ]
      },
      {
        "id": "d783b1fe232c4b6db93fe68fe6cf8ea8",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 9,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            "==",
            "functionclass",
            4
          ]
        ]
      },
      {
        "id": "b85e83b82c484019b1ca3318fdc893b0",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 9.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            4
          ]
        ]
      },
      {
        "id": "f0e58b6f0d314e42a5212e1b78651c48",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 9.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            4
          ]
        ]
      },
      {
        "id": "8126ff5f576b49109c5a241cb67e5333",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 10,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "9f242c5f6dc24660b890b445b89a9005",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 8,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "96304ea4f99f4fada20b3c7486a93075",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 8.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "69c371712a344cb4bf28642fc3e86b3e",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 8,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "349dfa716f1d49fdacb91a5d51461458",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 8,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "e66a4ae07e0f4e46ba4cf0c3096af22f",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            "==",
            "functionclass",
            2
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "e983f969b6b04c6faff54f6de21e6aa6",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            "==",
            "functionclass",
            2
          ]
        ]
      },
      {
        "id": "ba30e53f37ba46f4a56e6ab596dc67f4",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            2
          ]

        ]
      },
      {
        "id": "ef7209bd1b3046a2b4162cd955413ef9",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            2
          ]
        ]
      },
      {
        "id": "d2d3840ac2c34b0ba17ff7fe814c4554",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 7.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            1
          ]
        ]
      },
      {
        "id": "31a442351a88407388352e7ee905cd41",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                3
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            1
          ]
        ]
      },
      {
        "id": "7b32bc2b26514bef908592f29b965ff8",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "source-layer": "Road",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "e7ea48552e7e4b68ad27278bf38c3f52",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "source-layer": "Road",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 12,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "812a98b2d3c54c7fbe99f03db2c277e6",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "source-layer": "Road",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 9,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            "==",
            "functionclass",
            4
          ]
        ]
      },
      {
        "id": "86c4e81832b54abcb436fa3f028aceb3",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          }
        },
        "source-layer": "Road",
        "minzoom": 9,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            "==",
            "functionclass",
            4
          ]
        ]
      },
      {
        "id": "a03e61446d2e4fc4a9ff78f816de8700",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "source-layer": "Road",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 9.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            4
          ]
        ]
      },
      {
        "id": "a8945779aae546f9a5e946d83415d8d1",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "source-layer": "Road",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 9.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            4
          ]
        ]
      },
      {
        "id": "b890926d76014ae9a5223b7319dd221b",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "source-layer": "Road",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 8,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "b59a1f05e2274feea7897a093c01d826",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "source-layer": "Road",
        "minzoom": 8,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "629f80b7374b4503a5d03def956ea3c8",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "source-layer": "Road",
        "minzoom": 8.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "70765f986dc4497da00f2481ef208a29",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "source-layer": "Road",
        "minzoom": 8,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "c836e4cc6e314fbba8601efb56985792",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "square"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "source-layer": "Road",
        "minzoom": 8,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "73415403237b4a00ade435375ab11670",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {

          "line-color": "#6f8aa9",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                4
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            13
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "9fdb62426f4a495b9f20bd6044d52ae5",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {

          "line-color": "#6f8aa9",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                4
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 9,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            13
          ],
          [
            "==",
            "functionclass",
            4
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "bf34f7731add4bdc969002dcb7426ab8",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {

          "line-color": "#6f8aa9",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                4
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 9,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            13
          ],
          [
            "==",
            "functionclass",
            3
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "63824cd78cb9490ebef97c0509faf24f",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {

          "line-color": "#6f8aa9",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                4
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 9,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            13
          ],
          [
            "==",
            "functionclass",
            2
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "23f90d1aa6f348fcae668ddacfc39ad8",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {

          "line-color": "#7090b5",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                4
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 9.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            13
          ],
          [
            "==",
            "functionclass",
            1
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "b28ab61dd5b04497abf6dcd10d60ae34",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                14,
                1
              ],
              [
                18,
                4
              ]
            ],
            "base": 1.2
          },
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                12,
                0.5
              ],
              [
                14,
                0.8
              ],
              [
                18,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "minzoom": 14.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            10
          ]
        ]
      },
      {
        "id": "dd07d96a7d40450c88c5b17f651ed8cc",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                14,
                1
              ],
              [
                18,
                6
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 14.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            10
          ]
        ]
      },
      {
        "id": "eb7e007e7e404faea713705919f23bc2",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                8
              ]
            ],
            "base": 1.2
          },
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "source-layer": "Road",
        "minzoom": 14.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            9
          ]
        ]
      },
      {
        "id": "5d6e5ec4c612405ead58a2c28db24370",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                8
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 14.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            9
          ]
        ]
      },
      {
        "id": "fd4eb47f5a9c4ce49833b1c87a56308e",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                4
              ]
            ],
            "base": 1.2
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "minzoom": 14.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            8
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "1a62692598be4fbda7380e9cc7964df8",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                4
              ]
            ],
            "base": 1.2
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "minzoom": 9.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            8
          ],
          [
            "==",
            "functionclass",
            4
          ]
        ]
      },
      {
        "id": "7a9e0cbfc50c4ecbad518c1f44b1e274",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                4
              ]
            ],
            "base": 1.2
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "minzoom": 8.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            8
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "6e9ab5f68e784005b86f8052063a3722",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                4
              ]
            ],
            "base": 1.2
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "source-layer": "Road",
        "minzoom": 7.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            8
          ],
          [
            "==",
            "functionclass",
            2
          ]
        ]
      },
      {
        "id": "782e22a61899465f9867819fa5fb4f48",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                4
              ]
            ],
            "base": 1.2
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "source-layer": "Road",
        "minzoom": 7.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            8
          ],
          [
            "==",
            "functionclass",
            1
          ]
        ]
      },
      {
        "id": "05b507d90988442ca13186d9c323e865",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                4
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 14.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            8
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "6d7470a667df455a820b81fd311f0ed6",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                4
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 9.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            8
          ],
          [
            "==",
            "functionclass",
            4
          ]
        ]
      },
      {
        "id": "d41a9bb39824451fb80f7c4bcd628b7d",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                4
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 8.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            8
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "ebfeebc6c90c4bc18106a69282aef067",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                12,
                1
              ],
              [
                13,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.5
          },
          "line-color": "#6991a0",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            7
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "492974b189104dc88b922c34c1a40f44",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                9,
                1
              ],
              [
                12,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          },
          "line-color": "#6991a0",
          "line-width": {
            "stops": [
              [
                12,
                0.2
              ],
              [
                18,
                1.2
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            7
          ],
          [
            "==",
            "functionclass",
            4
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "54d8d01e57904acf8066e44305b8c7be",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                9,
                1
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          },
          "line-color": "#6991a0",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "source-layer": "Road",
        "minzoom": 11.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            7
          ],
          [
            "==",
            "functionclass",
            3
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "9f0d0ffcec6746a29d464af46242e0ae",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                9,
                1
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          },
          "line-color": "#6991a0",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            7
          ],
          [
            "==",
            "functionclass",
            2
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "d07882c8d7f2491ca321c4ec6f5f345d",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                9,
                1
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          },
          "line-color": "#6991a0",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            7
          ],
          [
            "==",
            "functionclass",
            1
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "72abde0213734561a690aa0746170e9f",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                12,
                1
              ],
              [
                13,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.5
          },

          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "source-layer": "Road",
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            7
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "93b0725ce70a44b0bd84a696cafe6446",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                12,
                1
              ],
              [
                13,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          },

          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "source-layer": "Road",
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            7
          ],
          [
            "==",
            "functionclass",
            4
          ]
        ]
      },
      {
        "id": "cecd8b054672451b8b0af8e03c216cd7",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {

          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                9,
                1
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          },
          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "minzoom": 11,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            7
          ],
          [
            "==",
            "functionclass",
            3
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "91c8a86755014a8e963a741f27779a1b",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {

          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                9,
                1
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          },
          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            7
          ],
          [
            "==",
            "functionclass",
            2
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "c8b4c3b912f8463fb384848d63d37718",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {

          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                9,
                1
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          },
          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            7
          ],
          [
            "==",
            "functionclass",
            1
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "7a54ad2f279b4244b7da9322dfa4cca7",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                12,
                1
              ],
              [
                13,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            7
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "5eda36c9671846abae940354d198ea00",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                12,
                1
              ],
              [
                13,
                3
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 9.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            7
          ],
          [
            "==",
            "functionclass",
            4
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "7d33864f20d64c8cb6b63113fef1ff52",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                9,
                1
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 8.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            7
          ],
          [
            "==",
            "functionclass",
            3
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "e35be00d035f43beb96cc0d0857df995",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                9,
                1
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 5,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            7
          ],
          [
            "==",
            "functionclass",
            2
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "73401d57cc8b44a985934829e70cecd6",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {
          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                9,
                1
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 5,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            7
          ],
          [
            "==",
            "functionclass",
            1
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "d181060ab6e54a1cb39f8f928dcdfb7e",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                11,
                1
              ],
              [
                13,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          },
          "line-color": "#6991a0",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "source-layer": "Road",
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "0e1af11a86f64accb9df167ffb363030",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                12,
                1
              ],
              [
                13,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          },
          "line-color": "#6991a0",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            "==",
            "functionclass",
            4
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "407cf077aa544459bafe355c786f3708",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                12,
                1
              ],
              [
                13,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          },
          "line-color": "#6991a0",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "minzoom": 10.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            "==",
            "functionclass",
            3
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "4f921c048b304c18a9ce796e790224ff",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },
          "line-color": "#6991a0",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            "==",
            "functionclass",
            2
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "6348969e60ce49c0a4a3d99b9e8963b8",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },
          "line-color": "#6991a0",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            "==",
            "functionclass",
            1
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "f972ff4fe43d42fd82e9cd20591813f1",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {

          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                12,
                1
              ],
              [
                13,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          },
          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                18,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "source-layer": "Road",
        "minzoom": 12,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "ac83a1da2430470388e71a04fd795248",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                12,
                1
              ],
              [
                13,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          },

          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            "==",
            "functionclass",
            4
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "4cecc80a7cfc4000a2599f34c7309fae",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {

          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                12,
                1
              ],
              [
                13,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          },
          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "source-layer": "Road",
        "minzoom": 11.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            "==",
            "functionclass",
            3
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "a5b0205a8e434a64aeda5b3a1b88d73c",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },

          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            "==",
            "functionclass",
            2
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "15f4cc3d85cb439abde82a7f27358786",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },
          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            "==",
            "functionclass",
            1
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "8c35b137c86a4e8c90b6c09b6564d516",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                12,
                1
              ],
              [
                13,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "85bb2e435b624c699ff3ae2564c42cd2",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {
          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                12,
                1
              ],
              [
                13,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 9.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            "==",
            "functionclass",
            4
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "c2df7d8dfa1a48f2ba042a09d77e7979",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                12,
                1
              ],
              [
                13,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 8.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            "==",
            "functionclass",
            3
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "bd9e81bd980242b39a876e89631a19fe",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {
          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 5,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            "==",
            "functionclass",
            2
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "abed30b81cd84d0fa1be3bf3db673382",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {
          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 5,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            "==",
            "functionclass",
            1
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "2306c7d10df44dad9dd43a4a597778de",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#6991a0",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "source-layer": "Road",
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            "==",
            "functionclass",
            5
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "1c64507e26b94603b7f756895e79bb8e",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },

          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "minzoom": 12,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            "==",
            "functionclass",
            5
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "ef3e624a5d8b4f60acb71e2c8fff0a63",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#6991a0",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "source-layer": "Road",
        "minzoom": 9.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            "==",
            "functionclass",
            4
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "5009035ea541436a8ec58bab57cbffa7",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },

          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "source-layer": "Road",
        "minzoom": 9,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            "==",
            "functionclass",
            4
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "66f2845d366943db89446d04873a1c7a",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#6991a0",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "minzoom": 9.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            "==",
            "functionclass",
            3
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "c0fbf04150634b1f81851b24c58568ea",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },

          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "minzoom": 9.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            "==",
            "functionclass",
            3
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "7f473707cba14bf8ac41d146a27f1c72",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#6991a0",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            "==",
            "functionclass",
            2
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "20b2c0c9c5ac4be5874f7d2c2679e27c",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {

          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            "==",
            "functionclass",
            2
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "1da1c4f9e4a74d72ae367849de388cd0",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#6991a0",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            "==",
            "functionclass",
            1
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "c517382d37ef4d8d9de6eb27d6945f75",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },

          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            "==",
            "functionclass",
            1
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "c6db375c52cd4f78bc4f667fd0b8499a",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {
          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            "==",
            "functionclass",
            5
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "82d61d915df742ec9d5eae40254f5413",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "source-layer": "Road",
        "minzoom": 9.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            "==",
            "functionclass",
            4
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "96d63cf0b0de4131acf8dff988a11448",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {
          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 8.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            "==",
            "functionclass",
            3
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "5fa12ee5329c40438c8ace0b3a0817fc",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "source-layer": "Road",
        "minzoom": 5,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            "==",
            "functionclass",
            2
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "a34726f3acc24578908a487a4f8db8c8",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {
          "line-color": "#021f3c",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 5,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            "==",
            "functionclass",
            1
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "4fe78bceb5a04dda8c6c9c4352a7f228",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            "==",
            "functionclass",
            5
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "4aed5b5774634e7f8c7d21afead3b6b4",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {

          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 12,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            "==",
            "functionclass",
            5
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "45359a4c5da1445a9190f526e2055180",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 9.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            "==",
            "functionclass",
            4
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "60a35de7a11f4da49833a2dc0e437872",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {

          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 9,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            "==",
            "functionclass",
            4
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "218cd36200ae47299a39e263cc372335",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },

          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 8,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            "==",
            "functionclass",
            3
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "b5833e405ffc424b999b06c65d4f6a91",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 8.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            "==",
            "functionclass",
            3
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "d8d1f912cbb34d17922405c878607850",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            "==",
            "functionclass",
            2
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "5e0b1148b8604002961985cf77133984",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },

          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            "==",
            "functionclass",
            2
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "cc4a06b1850b450fa8745d8e7b3268a4",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            "==",
            "functionclass",
            1
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "2d7114fab4ea4ac2909bf33b60d947b1",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {

          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            "==",
            "functionclass",
            1
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "e1a9affc748441ea868425c857c5461b",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            "==",
            "functionclass",
            5
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "105c84b3277a44d6a06847b4c69968b1",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          }
        },
        "source-layer": "Road",
        "minzoom": 9.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            "==",
            "functionclass",
            4
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "ca25311d010842c18704b6d5d23ae9f7",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 8.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            "==",
            "functionclass",
            3
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "38ef965e1c544630802763cb545bfb1c",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                17,
                1
              ]
            ],
            "base": 1
          }
        },
        "source-layer": "Road",
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            5
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "8c55775474724b919f1eb8c8f32de638",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                2
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 9.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            4
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "de18831fe929416d99d040a252e58f27",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },

          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                2
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 12,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            5
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "d8b7149808624235959cf360650eb259",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                2
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            5
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "82c93011444440deaea5ba79999cc28c",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                2
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 9.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            4
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "2ba37c7bec9446fcb66b2d013a391629",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                2
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 8.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            3
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "3fd74f8716de483297970b025a3451a7",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },

          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                2
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 9,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            4
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "7be90d6e4dc0490985fa37b8137e568e",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                2
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 8.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            3
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "3579c31991a548b29f05dc07666edda2",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {

          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                2
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 8,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            3
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "3fcabfc23ab54c62836901fdd46272aa",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1
          }
        },
        "minzoom": 7.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            2
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "ca46344028634d7f85d7211e9d9a81d2",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1
          }
        },
        "source-layer": "Road",
        "minzoom": 7.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            2
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "a780bb3d63284e0995bed433ca7be033",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {

          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                2
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            2
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "40f40bda020e44f5ad0657b0e9c1935c",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                2
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 7.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            1
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "7c651965e2f942dd9e25514d6d8d3567",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                2
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 7.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            1
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "7f4be0754c4a410cbffaa75b070598d9",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {

          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                2
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            1
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "c9495555f2c04f0fa30d671018e4c7db",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.6
              ],
              [
                6,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "source-layer": "Road",
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            5
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "520148a21ac64873924e69be3dae501d",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.6
              ],
              [
                6,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 9.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            4
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "b2ddab28a6eb46f6b6ead362936f6507",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.6
              ],
              [
                6,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "source-layer": "Road",
        "minzoom": 8.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            3
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "b8746e5f630a4f21ab7bdc3a7f33e661",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.6
              ],
              [
                6,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            5
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "ef58ff3b5880402f86b94028c1f114b7",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.6
              ],
              [
                6,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "source-layer": "Road",
        "minzoom": 9.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            4
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "d3cd962c4efb4a1f9df29e28d0dc54e4",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.6
              ],
              [
                6,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 8.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            "==",
            "functionclass",
            3
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },

      {
        "id": "bef028000c8a4da88555982977f5aa7f",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                2
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            5
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "56de02b681ee45328f2ad30f09af5153",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {

          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                2
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 12,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            5
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "1736a3c4d4d347c5a5ea393b8a9e6c7a",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                2
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 9.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            4
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "f046e1fe924947e7a158089e3203a277",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },

          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                2
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 9,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            4
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "241fa6ca73ab4dcfbdfd87a8014ce4d1",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                2
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 8.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            3
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "aa314ee6dbe543dcb2de0fd4d0486480",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {

          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                2
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 8,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            3
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "a2ea583bcc204bbd8c06b5772434cf09",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                2
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            2
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "9b9ff265354d46c19e0f81af338fdc14",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {

          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                2
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            2
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "005b114f8f744f31934343246ce275a2",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                2
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            1
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "1c5fbdcceb7b477e853a3c750d2b0f84",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },

          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                2
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Road",
        "minzoom": 7,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            1
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "9b38f75f2b3d44c498c99007db0ed4d3",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "source-layer": "Road",
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            5
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "a2e15bb3a38f47a695927f3a42522b43",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Road",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 9.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            4
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "4a965aa5b9c2410b8a5c5c6e37f11b0a",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "source-layer": "Road",
        "minzoom": 8.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            3
          ],
          [
            "==",
            "const_st",
            1
          ]
        ]
      },
      {
        "id": "2e36962c92504c6e951e206695d60863",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                18,
                1
              ]
            ],
            "base": 1
          }
        },
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "92fd7e2512714680870a5faf344a34bf",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                18,
                1
              ]
            ],
            "base": 1
          }
        },
        "source-layer": "Road",
        "minzoom": 9.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            4
          ]
        ]
      },
      {
        "id": "839c40829b5e4fa699228c4a2c324ea3",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                18,
                1
              ]
            ],
            "base": 1
          }
        },
        "minzoom": 8.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "3ac32a16db7d44ee99b24e753d0c54e0",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                18,
                1
              ]
            ],
            "base": 1
          }
        },
        "source-layer": "Road",
        "minzoom": 7.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            2
          ]
        ]
      },
      {
        "id": "0bb05237742642909c43e9f076592983",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Road",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                18,
                1
              ]
            ],
            "base": 1
          }
        },
        "minzoom": 7.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            1
          ]
        ]
      },
      {
        "id": "aaad28066e5c4a28994a81919eb987ef",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "source-layer": "Road",
        "minzoom": 12.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "73154fdc688d4bafafdf019516e1a79c",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.8
              ],
              [
                6,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "source-layer": "Road",
        "minzoom": 9.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            4
          ]
        ]
      },
      {
        "id": "11d753cb199f4c43afbb015533d218cc",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                0.8
              ],
              [
                6,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "source-layer": "Road",
        "minzoom": 8.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "179015cbcef84bbe8e9a9f842c993e0f",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                4
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Zlevel",
        "minzoom": 14,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            8
          ],
          [
            ">=",
            "zvalue",
            1
          ]
        ]
      },
      {
        "id": "0e6bdcf44e194f31a8cb318e36ded8ea",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                4
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 14.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            8
          ],
          [
            ">=",
            "zvalue",
            1
          ]
        ]
      },
      {
        "id": "839f408c5bc442c4a8ce31874e03c31f",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                12,
                1
              ],
              [
                13,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "source-layer": "Zlevel",
        "minzoom": 14.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            7
          ],
          [
            ">=",
            "zvalue",
            1
          ]
        ]
      },
      {
        "id": "21a80142562f44f7b77e8f661bce177d",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                12,
                1
              ],
              [
                13,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Zlevel",
        "minzoom": 14.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            7
          ],
          [
            ">=",
            "zvalue",
            1
          ]
        ]
      },
      {
        "id": "66a960ecbeb448efafc0d8ee2613a981",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                12,
                1
              ],
              [
                13,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "minzoom": 13,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "86b3a8789f4e4f689c5fa4c9fa872ae6",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                12,
                1
              ],
              [
                13,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            4
          ]
        ]
      },
      {
        "id": "e59068e4918142fbb69e634ea923e3a0",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                12,
                1
              ],
              [
                13,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1.2
              ]
            ],
            "base": 1
          }
        },
        "source-layer": "Zlevel",
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "d450fe505e4b43bfb0d9da815047dc77",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                12,
                1
              ],
              [
                13,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                0.5
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            2
          ]
        ]
      },
      {
        "id": "e1ff466ad81843ee9908d021989534b3",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                12,
                1
              ],
              [
                13,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                0.5
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            1
          ]
        ]
      },
      {
        "id": "41c02e1c6f9e4627ba3fe8392c92d79e",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                12,
                1
              ],
              [
                13,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Zlevel",
        "minzoom": 13,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "3e7fbc36ba7b46a9b66c27dec9ee9957",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                12,
                1
              ],
              [
                13,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Zlevel",
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            4
          ]
        ]
      },
      {
        "id": "90cc7ae7b5714398ab5c9ba33c964d0b",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                12,
                1
              ],
              [
                13,
                4
              ],
              [
                18,
                12
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Zlevel",
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "55ddae873b82458ea8f74d9459c1cfaf",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "source-layer": "Zlevel",
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            2
          ]
        ]
      },
      {
        "id": "24f761b3f8ea45429141c86f851c18af",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            6
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            1
          ]
        ]
      },
      {
        "id": "b182776d2b1d449780e616b856cb0d55",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "76a273238fde4158986c1ea46a9996a9",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                14,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            4
          ]
        ]
      },
      {
        "id": "993b75e03f514fe89efb2631b9118c93",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                14,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "82fef27953c946ad9412506df3c06c18",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            2
          ]
        ]
      },
      {
        "id": "c33196a6b33b4f17bfab82b8e01afa69",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Zlevel",
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            1
          ]
        ]
      },
      {
        "id": "8600ec8d13af44388cfe0385d90464b0",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 13,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "b2fac686f14342338e9e636da0abea9c",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 13,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            4
          ]
        ]
      },
      {
        "id": "3f985978a70d4c9595b74ae02134e0f1",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "e0b458aa0a8940dda164e1e757517e83",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            2
          ]
        ]
      },
      {
        "id": "a826dcb422c945c5adfc761a17d49c47",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            4
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            1
          ]
        ]
      },
      {
        "id": "a994e2676fae46dd9da603952a4dd9e3",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                0.5
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Zlevel",
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "a189077d3ecc44b9815c30c80eaac163",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                0.5
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            4
          ]
        ]
      },
      {
        "id": "f0cd52d32a354ebfb263311a332ddf26",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                0.5
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "de59844be49947cdb6213cb6d7ed0f2f",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                0.5
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            2
          ]
        ]
      },
      {
        "id": "e7f708d7801641599e4541e113a4d26d",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                0.5
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Zlevel",
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            1
          ]
        ]
      },
      {
        "id": "1e469eeb4b064f2b8db25468ab37a934",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "ebbd0a2b5bb74e11aa2f57373b153810",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          }
        },
        "source-layer": "Zlevel",
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            4
          ]
        ]
      },
      {
        "id": "51a3213618154b668d108466dd31d046",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          }
        },
        "source-layer": "Zlevel",
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "805324a24eaf435fa97fc0dc740bb35f",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          }
        },
        "source-layer": "Zlevel",
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            2
          ]
        ]
      },
      {
        "id": "948cfce670114f789c2f6be48d86d129",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                32
              ]
            ],
            "base": 1.5
          }
        },
        "source-layer": "Zlevel",
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            3
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            1
          ]
        ]
      },
      {
        "id": "0175be44739146e7a6ed54fb13ddfce4",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "289c4f4c473842279879cdaee0e8baf2",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            4
          ]
        ]
      },
      {
        "id": "bf9dcd66d0ec49bab6a90340720a8904",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Zlevel",
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "b51f05530a7842f0b1d9d5c32fe90b3d",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            2
          ]
        ]
      },
      {
        "id": "31d8f037839a40b0bf8de49216f56285",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            1
          ]
        ]
      },
      {
        "id": "2df71c84d2b640e0ab862f428f1e74e1",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Zlevel",
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            ">=",
            "zvalue",
            1
          ]
        ]
      },
      {
        "id": "9c4da0148c6b497fab07d5955c7cb537",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "source-layer": "Zlevel",
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "3292571d1feb4d47be1bfc63455d6d12",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            4
          ]
        ]
      },
      {
        "id": "56c01472ef6f45e7bdd8c6154067a0fe",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "7423c83432a5495294d58bf0a6e976b2",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            2
          ]
        ]
      },
      {
        "id": "8110443b105542069bb441935125038e",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            1
          ]
        ]
      },
      {
        "id": "ea0ea76889484882a1422e6bf2f32560",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            2
          ],
          [
            ">=",
            "zvalue",
            1
          ]
        ]
      },
      {
        "id": "24ee6e618a0540af8480a4503c52495d",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Zlevel",
        "minzoom": 13,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "53e3ea2edb2841dca567d00936cdf486",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            4
          ]
        ]
      },
      {
        "id": "c181098b14284b15b537e3d14bb46803",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.1
              ],
              [
                18,
                1
              ]
            ],
            "base": 1.2
          }
        },
        "source-layer": "Zlevel",
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "5ab1a3656bc04957ab2a5eda89a9eed1",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "butt"
        },
        "paint": {
          "line-gap-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          },
          "line-color": "#346778",
          "line-width": {
            "stops": [
              [
                5,
                0.5
              ],
              [
                18,
                1
              ]
            ],
            "base": 1
          }
        },
        "source-layer": "Zlevel",
        "minzoom": 13,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            ">=",
            "zvalue",
            1
          ]
        ]
      },
      {
        "id": "a234511f83464c0591df2862072f8d3a",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 13,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            5
          ]
        ]
      },
      {
        "id": "8afb8c2421d9491796be3bff4733277f",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            4
          ]
        ]
      },
      {
        "id": "6448ef04be114382a44024fd563cbef4",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "source-layer": "Zlevel",
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            3
          ]
        ]
      },
      {
        "id": "eeb81fdbe5a042a6833b458a1be529a0",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            2
          ]
        ]
      },
      {
        "id": "5becc429dbcf4dd5bd32052db6677170",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            ">=",
            "zvalue",
            1
          ],
          [
            "==",
            "functionclass",
            1
          ]
        ]
      },
      {
        "id": "2d5a988186db4a4a9788bf243a760535",
        "maxzoom": 17.5,
        "source": "Zlevel",
        "layout": {
          "line-join": "round",
          "visibility": "visible",
          "line-cap": "round"
        },
        "source-layer": "Zlevel",
        "paint": {
          "line-color": "#040d17",
          "line-width": {
            "stops": [
              [
                5,
                1
              ],
              [
                18,
                24
              ]
            ],
            "base": 1.5
          }
        },
        "minzoom": 13.0,
        "type": "line",
        "filter": [
          "all",
          [
            "==",
            "kind",
            1
          ],
          [
            ">=",
            "zvalue",
            1
          ]
        ]
      },
      {
        "id": "448712e8119d4ac8ac605bceddc8d981",
        "maxzoom": 16.0,
        "source": "Buildingmore",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#0c3755",
          "fill-opacity": 1.0
        },
        "source-layer": "Buildingmore",
        "minzoom": 14.0,
        "type": "fill"
      },
      {
        "id": "2af52dd1a94d4416a87e1c6341825e3a",
        "maxzoom": 17.5,
        "source": "Merge_1",
        "layout": {
          "text-size": 11.0,
          "symbol-avoid-edges": true,
          "visibility": "visible",
          "text-field": "{name_zh}",
          "text-font": [
            "REGULAR"
          ],
          "symbol-placement": "line"
        },
        "source-layer": "Road",
        "paint": {
          "text-halo-color": "#01070f",
          "text-color": "#888888",
          "text-halo-width": 1,
          "icon-color": "#ff0000"
        },
        "minzoom": 15.0,
        "type": "symbol",
        "filter": ["all", ["==", "kind", 9]]
      },
      {
        "id": "40cea26b72f245ff9ccc1180c2824fc0",
        "maxzoom": 8.5,
        "source": "Merge_1",
        "layout": {
          "text-size": 12.0,
          "text-pitch-alignment": "viewport",
          "visibility": "visible",
          "symbol-avoid-edges": false,
          // "text-field": "{name_zh}",
          "text-rotation-alignment": "viewport",
          "text-font": [
            "REGULAR"
          ]
        },
        "source-layer": "Worldannotation",
        "paint": {
          "text-halo-color": "#000202",
          "text-halo-width": 1.0,
          "text-color": "#808080",
          "icon-color": "#ff0000"
        },
        "minzoom": 2,
        "type": "symbol",
        "filter": [
          "all",
          [
            "==",
            "kind",
            "405002"
          ]
        ]
      },
      {
        id: 'ProvincialRegion_success',
        type: 'fill',
        interactive: true,
        "source" : "ProvincialRegion",
        'source-layer': 'outarea',
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#ff7474",
        },
        "filter": ["==", "status", "1" ]
      },
      {
        id: 'ProvincialRegion_fail',
        type: 'fill',
        interactive: true,
        "source" : "ProvincialRegion",
        'source-layer': 'outarea',
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#ffae45",
          'fill-outline-color': '#ffffff'
        },
        "filter": ["==", "status", "0" ]
      },
      {
        id: 'ProvincialRegion_running',
        type: 'fill',
        interactive: true,
        "source" : "ProvincialRegion",
        'source-layer': 'outarea',
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#67ba2f",
        },
        "filter": ["==", "status", "2" ]
      }, {
        id: 'ProvincialRegion_unrun',
        type: 'fill',
        interactive: true,
        "source" : "ProvincialRegion",
        'source-layer': 'outarea',
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#36aeea",
        },
        "filter": ["==", "status", "3" ]
      },{
        id: 'ProvincialRegion_abandon',
        type: 'fill',
        interactive: true,
        "source" : "ProvincialRegion",
        'source-layer': 'outarea',
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#CDE5FD",
        },
        "filter": ["==", "status", "4" ]
      },
      {
        id: 'mapblock_layer',
        type: 'fill',
        interactive: true,
        "source" : "mapblock",
        'source-layer': 'mesharea',
        "layout": {
          "visibility": "none"
        },
        "paint": {
          "fill-color": "rgba(255,204,204,0.7)"
        }
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
