import { addEnumerations, t } from "mendix";

export const Get_And_Set_Feedback_NPE = {
  "name": "FeedbackModule.Get_And_Set_Feedback_NPE",
  "useListParameterByReference": true,
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "7e9e6e71-8c50-4e9b-833a-b435a4bf30a8",
      "action": () => require("/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
      "outputVar": "AppID",
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
            "type": "literal",
            "value": "AppID"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "a40ad350-8772-4fb1-8a33-a7b28fe16d1c",
      "action": () => require("/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
      "outputVar": "Subject",
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
            "type": "literal",
            "value": "Subject"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "680fd61b-7529-4a3c-8b31-6d8d2b1b5c62",
      "action": () => require("/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
      "outputVar": "Description",
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
            "type": "literal",
            "value": "Description"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "9718e54e-ae09-4c5c-a242-f8ba2c9ab6e2",
      "action": () => require("/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
      "outputVar": "SubmitterUUID",
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
            "type": "literal",
            "value": "SubmitterUUID"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "076d8caa-553f-48ff-9219-8502515b10f6",
      "action": () => require("/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
      "outputVar": "SubmitterEmail",
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
            "type": "literal",
            "value": "SubmitterEmail"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "663d63fe-f7f9-4fcb-8cdf-29e2770572ae",
      "action": () => require("/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
      "outputVar": "SubmitterDisplayName",
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
            "type": "literal",
            "value": "SubmitterDisplayName"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "ae5d09d2-1b40-4b3c-a505-0cfdd283c963",
      "action": () => require("/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
      "outputVar": "ImageB64",
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
            "type": "literal",
            "value": "ImageB64"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "f76562aa-6f61-4ebc-bee6-e6b7cdd3de68",
      "action": () => require("/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/javascriptsource/feedbackmodule/actions/JS_GetSingleLocalStorageObjectItem").JS_GetSingleLocalStorageObjectItem,
      "outputVar": "_showEmail",
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
            "type": "literal",
            "value": "_showEmail"
          }
        }
      ]
    },
    {
      "type": "createObject",
      "label": "0ef11f1a-ed07-4781-868b-91efcf4749d7",
      "objectType": "FeedbackModule.Feedback",
      "outputVar": "NewFeedback"
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "AppID",
      "value": {
        "type": "variable",
        "variable": "AppID"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "Subject",
      "value": {
        "type": "variable",
        "variable": "Subject"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "Description",
      "value": {
        "type": "variable",
        "variable": "Description"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "SubmitterUUID",
      "value": {
        "type": "variable",
        "variable": "SubmitterUUID"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "SubmitterEmail",
      "value": {
        "type": "variable",
        "variable": "SubmitterEmail"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "SubmitterDisplayName",
      "value": {
        "type": "variable",
        "variable": "SubmitterDisplayName"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "ImageB64"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewFeedback",
      "member": "_showEmail",
      "value": {
        "type": "conditional",
        "condition": {
          "type": "function",
          "name": "=",
          "parameters": [
            {
              "type": "variable",
              "variable": "_showEmail"
            },
            {
              "type": "literal",
              "value": "true"
            }
          ]
        },
        "then": {
          "type": "literal",
          "value": true
        },
        "else": {
          "type": "literal",
          "value": false
        }
      }
    },
    {
      "type": "return",
      "label": "b66baf4f-d3cf-4847-9c25-045a5174f73e",
      "result": {
        "type": "variable",
        "variable": "NewFeedback"
      },
      "resultKind": "object"
    }
  ]
};
