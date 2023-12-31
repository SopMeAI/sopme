export const simpleResponse = {
  DocumentMetadata: {
    Pages: 1,
  },
  Blocks: [
    {
      BlockType: 'PAGE',
      Geometry: {
        BoundingBox: {
          Width: 1,
          Height: 1,
          Left: 0,
          Top: 0,
        },
        Polygon: [
          {
            X: 8.772549335844815e-7,
            Y: 0,
          },
          {
            X: 1,
            Y: 0.00031649001175537705,
          },
          {
            X: 1,
            Y: 1,
          },
          {
            X: 0,
            Y: 1,
          },
        ],
      },
      Id: 'aa747e76-9aef-43bc-88db-1edf5990564d',
      Relationships: [
        {
          Type: 'CHILD',
          Ids: [
            '703adbaf-e7b6-4aae-af18-c0277d34ae3b',
            'f5ddddef-36ca-4310-8077-16b05d7e5e1c',
            'dddda589-f278-4926-a08a-a1a533e11495',
            '92ec3224-e479-465c-8d8b-19703047adbe',
            '67bae72b-0232-4c4d-8703-2214b396aae6',
            '4146ef41-96f6-4746-84e1-674dd4109785',
            '444e059a-20fe-47ef-a272-85516f0989e5',
          ],
        },
      ],
    },
    {
      BlockType: 'LINE',
      Confidence: 99.90127563476562,
      Text: 'Textract checkbox test',
      Geometry: {
        BoundingBox: {
          Width: 0.4329058527946472,
          Height: 0.03695688024163246,
          Left: 0.25387418270111084,
          Top: 0.17965319752693176,
        },
        Polygon: [
          {
            X: 0.25393176078796387,
            Y: 0.17965319752693176,
          },
          {
            X: 0.6867800354957581,
            Y: 0.1800253540277481,
          },
          {
            X: 0.6867247819900513,
            Y: 0.21661007404327393,
          },
          {
            X: 0.25387418270111084,
            Y: 0.21623480319976807,
          },
        ],
      },
      Id: '703adbaf-e7b6-4aae-af18-c0277d34ae3b',
      Relationships: [
        {
          Type: 'CHILD',
          Ids: [
            'fb130f13-9e0f-44b0-bffa-a027287922d9',
            '4ccac48c-3845-4504-8ebc-5fd935b85390',
            '71edbb96-447e-46a2-b4a4-5dd18987c887',
          ],
        },
      ],
    },
    {
      BlockType: 'LINE',
      Confidence: 99.90840911865234,
      Text: 'This checkbox has been checked',
      Geometry: {
        BoundingBox: {
          Width: 0.5624518990516663,
          Height: 0.0398116260766983,
          Left: 0.22954043745994568,
          Top: 0.45409727096557617,
        },
        Polygon: [
          {
            X: 0.22960242629051208,
            Y: 0.45409727096557617,
          },
          {
            X: 0.7919923663139343,
            Y: 0.45461124181747437,
          },
          {
            X: 0.7919335961341858,
            Y: 0.49390891194343567,
          },
          {
            X: 0.22954043745994568,
            Y: 0.49339058995246887,
          },
        ],
      },
      Id: 'f5ddddef-36ca-4310-8077-16b05d7e5e1c',
      Relationships: [
        {
          Type: 'CHILD',
          Ids: [
            'bd935731-f192-4314-bdcf-a07aca0bd891',
            '2e522bec-6814-484f-a02c-73138ef26fe8',
            'fca8dd7f-7f40-42d6-955b-de17c7e88a18',
            '513a2e41-3c59-4191-a8f2-691fcf7ed25d',
            '5b63e61d-0809-4cf4-acdf-44a8aaf5744e',
          ],
        },
      ],
    },
    {
      BlockType: 'LINE',
      Confidence: 99.93358612060547,
      Text: 'This checkbox has not been checked',
      Geometry: {
        BoundingBox: {
          Width: 0.638882577419281,
          Height: 0.04014785960316658,
          Left: 0.21974638104438782,
          Top: 0.7192552089691162,
        },
        Polygon: [
          {
            X: 0.21980878710746765,
            Y: 0.7192552089691162,
          },
          {
            X: 0.8586289286613464,
            Y: 0.7198724150657654,
          },
          {
            X: 0.8585702180862427,
            Y: 0.7594030499458313,
          },
          {
            X: 0.21974638104438782,
            Y: 0.758780837059021,
          },
        ],
      },
      Id: 'dddda589-f278-4926-a08a-a1a533e11495',
      Relationships: [
        {
          Type: 'CHILD',
          Ids: [
            'a12e9650-cc3d-413c-9e31-82eba4af84fe',
            'dd54bc26-021f-4a52-9961-387b9fc22b40',
            '885f9c53-e6dc-4b41-b191-2b2e402bfc88',
            'd52ab646-8f46-48fe-9d49-6b43d6da2a32',
            'bc11cdb7-804a-47d9-bfc9-a3cbd5dbb792',
            'cbb36274-f304-41d0-9b37-19d19b0300e2',
          ],
        },
      ],
    },
    {
      BlockType: 'WORD',
      Confidence: 99.85517120361328,
      Text: 'Textract',
      TextType: 'HANDWRITING',
      Geometry: {
        BoundingBox: {
          Width: 0.16920870542526245,
          Height: 0.034496061503887177,
          Left: 0.25387418270111084,
          Top: 0.18188539147377014,
        },
        Polygon: [
          {
            X: 0.2539282441139221,
            Y: 0.18188539147377014,
          },
          {
            X: 0.4230828881263733,
            Y: 0.18203090131282806,
          },
          {
            X: 0.42302966117858887,
            Y: 0.21638146042823792,
          },
          {
            X: 0.25387418270111084,
            Y: 0.21623480319976807,
          },
        ],
      },
      Id: 'fb130f13-9e0f-44b0-bffa-a027287922d9',
    },
    {
      BlockType: 'WORD',
      Confidence: 99.88186645507812,
      Text: 'checkbox',
      TextType: 'HANDWRITING',
      Geometry: {
        BoundingBox: {
          Width: 0.1543361395597458,
          Height: 0.03664621710777283,
          Left: 0.439458966255188,
          Top: 0.17981275916099548,
        },
        Polygon: [
          {
            X: 0.43951547145843506,
            Y: 0.17981275916099548,
          },
          {
            X: 0.593795120716095,
            Y: 0.17994540929794312,
          },
          {
            X: 0.5937394499778748,
            Y: 0.2164589762687683,
          },
          {
            X: 0.439458966255188,
            Y: 0.21632522344589233,
          },
        ],
      },
      Id: '4ccac48c-3845-4504-8ebc-5fd935b85390',
    },
    {
      BlockType: 'WORD',
      Confidence: 99.96678924560547,
      Text: 'test',
      TextType: 'HANDWRITING',
      Geometry: {
        BoundingBox: {
          Width: 0.08259635418653488,
          Height: 0.034895431250333786,
          Left: 0.6041818261146545,
          Top: 0.18120314180850983,
        },
        Polygon: [
          {
            X: 0.6042348146438599,
            Y: 0.18120314180850983,
          },
          {
            X: 0.68677818775177,
            Y: 0.18127413094043732,
          },
          {
            X: 0.6867255568504333,
            Y: 0.21609856188297272,
          },
          {
            X: 0.6041818261146545,
            Y: 0.21602700650691986,
          },
        ],
      },
      Id: '71edbb96-447e-46a2-b4a4-5dd18987c887',
    },
    {
      BlockType: 'WORD',
      Confidence: 99.90208435058594,
      Text: 'This',
      TextType: 'HANDWRITING',
      Geometry: {
        BoundingBox: {
          Width: 0.07641757279634476,
          Height: 0.030090492218732834,
          Left: 0.22954462468624115,
          Top: 0.46071144938468933,
        },
        Polygon: [
          {
            X: 0.2295919954776764,
            Y: 0.46071144938468933,
          },
          {
            X: 0.3059622049331665,
            Y: 0.4607813358306885,
          },
          {
            X: 0.3059151768684387,
            Y: 0.49080193042755127,
          },
          {
            X: 0.22954462468624115,
            Y: 0.4907315969467163,
          },
        ],
      },
      Id: 'bd935731-f192-4314-bdcf-a07aca0bd891',
    },
    {
      BlockType: 'WORD',
      Confidence: 99.74781036376953,
      Text: 'checkbox',
      TextType: 'HANDWRITING',
      Geometry: {
        BoundingBox: {
          Width: 0.15269410610198975,
          Height: 0.03768515959382057,
          Left: 0.3231399953365326,
          Top: 0.4559323489665985,
        },
        Polygon: [
          {
            X: 0.32319870591163635,
            Y: 0.4559323489665985,
          },
          {
            X: 0.47583410143852234,
            Y: 0.4560719132423401,
          },
          {
            X: 0.47577622532844543,
            Y: 0.49361753463745117,
          },
          {
            X: 0.3231399953365326,
            Y: 0.49347683787345886,
          },
        ],
      },
      Id: '2e522bec-6814-484f-a02c-73138ef26fe8',
    },
    {
      BlockType: 'WORD',
      Confidence: 99.99019622802734,
      Text: 'has',
      TextType: 'HANDWRITING',
      Geometry: {
        BoundingBox: {
          Width: 0.06414923816919327,
          Height: 0.029657762497663498,
          Left: 0.48820504546165466,
          Top: 0.4608024060726166,
        },
        Polygon: [
          {
            X: 0.48825064301490784,
            Y: 0.4608024060726166,
          },
          {
            X: 0.5523542761802673,
            Y: 0.46086108684539795,
          },
          {
            X: 0.552308976650238,
            Y: 0.49046018719673157,
          },
          {
            X: 0.48820504546165466,
            Y: 0.49040114879608154,
          },
        ],
      },
      Id: 'fca8dd7f-7f40-42d6-955b-de17c7e88a18',
    },
    {
      BlockType: 'WORD',
      Confidence: 99.97881317138672,
      Text: 'been',
      TextType: 'HANDWRITING',
      Geometry: {
        BoundingBox: {
          Width: 0.07679056376218796,
          Height: 0.03744698688387871,
          Left: 0.5671137571334839,
          Top: 0.45558181405067444,
        },
        Polygon: [
          {
            X: 0.5671708583831787,
            Y: 0.45558181405067444,
          },
          {
            X: 0.6439042687416077,
            Y: 0.4556519687175751,
          },
          {
            X: 0.6438475847244263,
            Y: 0.49302881956100464,
          },
          {
            X: 0.5671137571334839,
            Y: 0.49295809864997864,
          },
        ],
      },
      Id: '513a2e41-3c59-4191-a8f2-691fcf7ed25d',
    },
    {
      BlockType: 'WORD',
      Confidence: 99.92316436767578,
      Text: 'checked',
      TextType: 'HANDWRITING',
      Geometry: {
        BoundingBox: {
          Width: 0.1322500854730606,
          Height: 0.03896978870034218,
          Left: 0.6597422361373901,
          Top: 0.45449042320251465,
        },
        Polygon: [
          {
            X: 0.6598011255264282,
            Y: 0.45449042320251465,
          },
          {
            X: 0.7919923663139343,
            Y: 0.45461124181747437,
          },
          {
            X: 0.7919342517852783,
            Y: 0.4934602379798889,
          },
          {
            X: 0.6597422361373901,
            Y: 0.493338406085968,
          },
        ],
      },
      Id: '5b63e61d-0809-4cf4-acdf-44a8aaf5744e',
    },
    {
      BlockType: 'WORD',
      Confidence: 99.89310455322266,
      Text: 'This',
      TextType: 'HANDWRITING',
      Geometry: {
        BoundingBox: {
          Width: 0.07730834931135178,
          Height: 0.02989535965025425,
          Left: 0.21975146234035492,
          Top: 0.725740909576416,
        },
        Polygon: [
          {
            X: 0.21979855000972748,
            Y: 0.725740909576416,
          },
          {
            X: 0.2970598042011261,
            Y: 0.7258156538009644,
          },
          {
            X: 0.2970130741596222,
            Y: 0.7556362748146057,
          },
          {
            X: 0.21975146234035492,
            Y: 0.7555610537528992,
          },
        ],
      },
      Id: 'a12e9650-cc3d-413c-9e31-82eba4af84fe',
    },
    {
      BlockType: 'WORD',
      Confidence: 99.80113220214844,
      Text: 'checkbox',
      TextType: 'HANDWRITING',
      Geometry: {
        BoundingBox: {
          Width: 0.15397165715694427,
          Height: 0.038020242005586624,
          Left: 0.31338632106781006,
          Top: 0.7210017442703247,
        },
        Polygon: [
          {
            X: 0.3134455978870392,
            Y: 0.7210017442703247,
          },
          {
            X: 0.46735796332359314,
            Y: 0.7211504578590393,
          },
          {
            X: 0.46729955077171326,
            Y: 0.7590219378471375,
          },
          {
            X: 0.31338632106781006,
            Y: 0.7588720321655273,
          },
        ],
      },
      Id: 'dd54bc26-021f-4a52-9961-387b9fc22b40',
    },
    {
      BlockType: 'WORD',
      Confidence: 99.99015045166016,
      Text: 'has',
      TextType: 'HANDWRITING',
      Geometry: {
        BoundingBox: {
          Width: 0.0632249265909195,
          Height: 0.028557978570461273,
          Left: 0.47966960072517395,
          Top: 0.7264922857284546,
        },
        Polygon: [
          {
            X: 0.4797135293483734,
            Y: 0.7264922857284546,
          },
          {
            X: 0.5428945422172546,
            Y: 0.7265533804893494,
          },
          {
            X: 0.5428508520126343,
            Y: 0.7550502419471741,
          },
          {
            X: 0.47966960072517395,
            Y: 0.7549887299537659,
          },
        ],
      },
      Id: '885f9c53-e6dc-4b41-b191-2b2e402bfc88',
    },
    {
      BlockType: 'WORD',
      Confidence: 99.98523712158203,
      Text: 'not',
      TextType: 'HANDWRITING',
      Geometry: {
        BoundingBox: {
          Width: 0.058348629623651505,
          Height: 0.03123582899570465,
          Left: 0.558051347732544,
          Top: 0.7233148813247681,
        },
        Polygon: [
          {
            X: 0.5580990314483643,
            Y: 0.7233148813247681,
          },
          {
            X: 0.6163999438285828,
            Y: 0.7233712673187256,
          },
          {
            X: 0.6163525581359863,
            Y: 0.7545507550239563,
          },
          {
            X: 0.558051347732544,
            Y: 0.7544940114021301,
          },
        ],
      },
      Id: 'd52ab646-8f46-48fe-9d49-6b43d6da2a32',
    },
    {
      BlockType: 'WORD',
      Confidence: 99.98527526855469,
      Text: 'been',
      TextType: 'HANDWRITING',
      Geometry: {
        BoundingBox: {
          Width: 0.07622688263654709,
          Height: 0.036976709961891174,
          Left: 0.633539080619812,
          Top: 0.7210690975189209,
        },
        Polygon: [
          {
            X: 0.6335951089859009,
            Y: 0.7210690975189209,
          },
          {
            X: 0.7097659707069397,
            Y: 0.7211427092552185,
          },
          {
            X: 0.7097102999687195,
            Y: 0.7580457925796509,
          },
          {
            X: 0.633539080619812,
            Y: 0.7579716444015503,
          },
        ],
      },
      Id: 'bc11cdb7-804a-47d9-bfc9-a3cbd5dbb792',
    },
    {
      BlockType: 'WORD',
      Confidence: 99.94660186767578,
      Text: 'checked',
      TextType: 'HANDWRITING',
      Geometry: {
        BoundingBox: {
          Width: 0.13307374715805054,
          Height: 0.03877013176679611,
          Left: 0.7255551815032959,
          Top: 0.7197438478469849,
        },
        Polygon: [
          {
            X: 0.7256133556365967,
            Y: 0.7197438478469849,
          },
          {
            X: 0.8586289286613464,
            Y: 0.7198724150657654,
          },
          {
            X: 0.8585715293884277,
            Y: 0.7585139870643616,
          },
          {
            X: 0.7255551815032959,
            Y: 0.7583844661712646,
          },
        ],
      },
      Id: 'cbb36274-f304-41d0-9b37-19d19b0300e2',
    },
    {
      BlockType: 'SELECTION_ELEMENT',
      Confidence: 99.74535369873047,
      Geometry: {
        BoundingBox: {
          Width: 0.061373911798000336,
          Height: 0.06227448582649231,
          Left: 0.13557171821594238,
          Top: 0.7125217914581299,
        },
        Polygon: [
          {
            X: 0.1356707215309143,
            Y: 0.7125217914581299,
          },
          {
            X: 0.19694563746452332,
            Y: 0.7125809192657471,
          },
          {
            X: 0.19684718549251556,
            Y: 0.7747963070869446,
          },
          {
            X: 0.13557171821594238,
            Y: 0.7747364044189453,
          },
        ],
      },
      Id: '13ba1f64-648a-4ce3-86b7-7c2abd4909d0',
      SelectionStatus: 'NOT_SELECTED',
    },
    {
      BlockType: 'SELECTION_ELEMENT',
      Confidence: 99.5547866821289,
      Geometry: {
        BoundingBox: {
          Width: 0.06427867710590363,
          Height: 0.07165347784757614,
          Left: 0.13682979345321655,
          Top: 0.4429442584514618,
        },
        Polygon: [
          {
            X: 0.13694371283054352,
            Y: 0.4429442584514618,
          },
          {
            X: 0.20110847055912018,
            Y: 0.44300276041030884,
          },
          {
            X: 0.20099522173404694,
            Y: 0.5145977139472961,
          },
          {
            X: 0.13682979345321655,
            Y: 0.5145383477210999,
          },
        ],
      },
      Id: '974c6f63-fe0f-4a0d-984a-ef8ccf2779d9',
      SelectionStatus: 'SELECTED',
    },
    {
      BlockType: 'KEY_VALUE_SET',
      Confidence: 74.27606201171875,
      Geometry: {
        BoundingBox: {
          Width: 0.5675486922264099,
          Height: 0.03681919723749161,
          Left: 0.22792978584766388,
          Top: 0.4573403000831604,
        },
        Polygon: [
          {
            X: 0.22798706591129303,
            Y: 0.4573403000831604,
          },
          {
            X: 0.7954784631729126,
            Y: 0.4578592777252197,
          },
          {
            X: 0.795424222946167,
            Y: 0.4941594898700714,
          },
          {
            X: 0.22792978584766388,
            Y: 0.49363642930984497,
          },
        ],
      },
      Id: '92ec3224-e479-465c-8d8b-19703047adbe',
      Relationships: [
        {
          Type: 'VALUE',
          Ids: ['67bae72b-0232-4c4d-8703-2214b396aae6'],
        },
        {
          Type: 'CHILD',
          Ids: [
            'bd935731-f192-4314-bdcf-a07aca0bd891',
            '2e522bec-6814-484f-a02c-73138ef26fe8',
            'fca8dd7f-7f40-42d6-955b-de17c7e88a18',
            '513a2e41-3c59-4191-a8f2-691fcf7ed25d',
            '5b63e61d-0809-4cf4-acdf-44a8aaf5744e',
          ],
        },
      ],
      EntityTypes: ['KEY'],
    },
    {
      BlockType: 'KEY_VALUE_SET',
      Confidence: 74.27606201171875,
      Geometry: {
        BoundingBox: {
          Width: 0.055436499416828156,
          Height: 0.05837218835949898,
          Left: 0.14333093166351318,
          Top: 0.4449506998062134,
        },
        Polygon: [
          {
            X: 0.1434236615896225,
            Y: 0.4449506998062134,
          },
          {
            X: 0.19876742362976074,
            Y: 0.44500115513801575,
          },
          {
            X: 0.19867515563964844,
            Y: 0.5033228993415833,
          },
          {
            X: 0.14333093166351318,
            Y: 0.503271758556366,
          },
        ],
      },
      Id: '67bae72b-0232-4c4d-8703-2214b396aae6',
      Relationships: [
        {
          Type: 'CHILD',
          Ids: ['974c6f63-fe0f-4a0d-984a-ef8ccf2779d9'],
        },
      ],
      EntityTypes: ['VALUE'],
    },
    {
      BlockType: 'KEY_VALUE_SET',
      Confidence: 68.8299331665039,
      Geometry: {
        BoundingBox: {
          Width: 0.6417418122291565,
          Height: 0.035082172602415085,
          Left: 0.22009022533893585,
          Top: 0.7241998314857483,
        },
        Polygon: [
          {
            X: 0.2201446294784546,
            Y: 0.7241998314857483,
          },
          {
            X: 0.8618320226669312,
            Y: 0.7248204350471497,
          },
          {
            X: 0.8617808222770691,
            Y: 0.7592819929122925,
          },
          {
            X: 0.22009022533893585,
            Y: 0.7586570382118225,
          },
        ],
      },
      Id: '4146ef41-96f6-4746-84e1-674dd4109785',
      Relationships: [
        {
          Type: 'VALUE',
          Ids: ['444e059a-20fe-47ef-a272-85516f0989e5'],
        },
        {
          Type: 'CHILD',
          Ids: [
            'a12e9650-cc3d-413c-9e31-82eba4af84fe',
            'dd54bc26-021f-4a52-9961-387b9fc22b40',
            '885f9c53-e6dc-4b41-b191-2b2e402bfc88',
            'd52ab646-8f46-48fe-9d49-6b43d6da2a32',
            'bc11cdb7-804a-47d9-bfc9-a3cbd5dbb792',
            'cbb36274-f304-41d0-9b37-19d19b0300e2',
          ],
        },
      ],
      EntityTypes: ['KEY'],
    },
    {
      BlockType: 'KEY_VALUE_SET',
      Confidence: 68.8299331665039,
      Geometry: {
        BoundingBox: {
          Width: 0.059023793786764145,
          Height: 0.06190185993909836,
          Left: 0.13609735667705536,
          Top: 0.7120816707611084,
        },
        Polygon: [
          {
            X: 0.13619577884674072,
            Y: 0.7120816707611084,
          },
          {
            X: 0.1951211541891098,
            Y: 0.7121385335922241,
          },
          {
            X: 0.1950232833623886,
            Y: 0.7739835381507874,
          },
          {
            X: 0.13609735667705536,
            Y: 0.7739259600639343,
          },
        ],
      },
      Id: '444e059a-20fe-47ef-a272-85516f0989e5',
      Relationships: [
        {
          Type: 'CHILD',
          Ids: ['13ba1f64-648a-4ce3-86b7-7c2abd4909d0'],
        },
      ],
      EntityTypes: ['VALUE'],
    },
  ],
  AnalyzeDocumentModelVersion: '1.0',
}
