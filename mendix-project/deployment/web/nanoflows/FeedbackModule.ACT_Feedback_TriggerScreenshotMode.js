import { addEnumerations, t } from "mendix";

export const ACT_Feedback_TriggerScreenshotMode = {
  "name": "FeedbackModule.ACT_Feedback_TriggerScreenshotMode",
  "useListParameterByReference": true,
  "instructions": [
    {
      "type": "closeForm",
      "label": "2d996947-5dae-4dbc-8143-3fc1e58caeb1"
    },
    {
      "type": "javaScriptActionCall",
      "label": "cf73f0a8-f179-4b33-963a-1ce63045df46",
      "action": () => require("/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/javascriptsource/feedbackmodule/actions/JS_ToggleFeedbackScreenshotWidget").JS_ToggleFeedbackScreenshotWidget,
      "outputVar": "base64FromWidget",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "55aa7577-d0af-4e45-a7b3-de43a3b6f305",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "base64FromWidget"
          },
          {
            "type": "literal",
            "value": "uploadCancelled"
          }
        ]
      },
      "targets": {
        "true": "c8a61996-7c01-4181-a8af-eb6f142fbca2",
        "false": "cec062b6-7c71-4969-9cd1-730a98c55e0c"
      }
    },
    {
      "type": "jump",
      "label": "cec062b6-7c71-4969-9cd1-730a98c55e0c",
      "target": "43298f9c-c783-4e06-9e4f-d6a8590597ae"
    },
    {
      "type": "jump",
      "label": "43298f9c-c783-4e06-9e4f-d6a8590597ae",
      "target": "14e4c269-5a6b-4559-a59f-dab3d97c69dd"
    },
    {
      "type": "jump",
      "label": "14e4c269-5a6b-4559-a59f-dab3d97c69dd",
      "target": "00634166-2bd3-470c-be53-5408f1f7d0a8"
    },
    {
      "type": "openForm",
      "label": "00634166-2bd3-470c-be53-5408f1f7d0a8",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "return",
      "label": "ad60c1c6-64bc-4f77-9d0b-d3e15073f156",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "c8a61996-7c01-4181-a8af-eb6f142fbca2",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "base64FromWidget"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "true": "276e193a-977c-4c09-b42c-a5f6535ea7a3",
        "false": "78d6c54d-5e71-4eca-8e3b-22d1b396a39e"
      }
    },
    {
      "type": "return",
      "label": "78d6c54d-5e71-4eca-8e3b-22d1b396a39e",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "javaScriptActionCall",
      "label": "276e193a-977c-4c09-b42c-a5f6535ea7a3",
      "action": () => require("/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/javascriptsource/feedbackmodule/actions/JS_isStrictMode").JS_isStrictMode,
      "outputVar": "isStrictMode",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "dd68204a-bdac-4db2-a45a-46a064324631",
      "condition": {
        "type": "function",
        "name": "=",
        "parameters": [
          {
            "type": "variable",
            "variable": "isStrictMode"
          },
          {
            "type": "literal",
            "value": false
          }
        ]
      },
      "targets": {
        "true": "d71d45eb-662f-4ceb-b7c3-7e8ba3f88205",
        "false": "7b03bd8a-4559-4e2b-8aa0-33047d9d278d"
      }
    },
    {
      "type": "jump",
      "label": "7b03bd8a-4559-4e2b-8aa0-33047d9d278d",
      "target": "ad43979c-d4b8-4d3d-907b-1e8e8a57e6fd"
    },
    {
      "type": "javaScriptActionCall",
      "label": "ad43979c-d4b8-4d3d-907b-1e8e8a57e6fd",
      "action": () => require("/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/javascriptsource/feedbackmodule/actions/JS_SetSingleLocalStorageObjectItem").JS_SetSingleLocalStorageObjectItem,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "base64FromWidget"
          }
        }
      ]
    },
    {
      "type": "jump",
      "label": "306ae060-1dfe-4b7c-9913-2358efef12bb",
      "target": "14e4c269-5a6b-4559-a59f-dab3d97c69dd"
    },
    {
      "type": "jump",
      "label": "14e4c269-5a6b-4559-a59f-dab3d97c69dd",
      "target": "00634166-2bd3-470c-be53-5408f1f7d0a8"
    },
    {
      "type": "changeObject",
      "label": "d71d45eb-662f-4ceb-b7c3-7e8ba3f88205",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "base64FromWidget"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "D5BynDsQCFSIme000F3Apg",
      "inputVar": "Feedback"
    },
    {
      "type": "jump",
      "label": "14e4c269-5a6b-4559-a59f-dab3d97c69dd",
      "target": "00634166-2bd3-470c-be53-5408f1f7d0a8"
    }
  ]
};
