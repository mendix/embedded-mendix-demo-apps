import { addEnumerations, t } from "mendix";
import { SUB_Feedback_GetOrCreate } from "./FeedbackModule.SUB_Feedback_GetOrCreate.js";

export const DS_Feedback_Populate = {
  "name": "FeedbackModule.DS_Feedback_Populate",
  "useListParameterByReference": true,
  "instructions": [
    {
      "type": "nanoflowCall",
      "label": "f3da22b0-30f1-431b-a401-4cb3c7ac0b01",
      "flow": () => SUB_Feedback_GetOrCreate,
      "parameters": [],
      "outputVar": "Feedback"
    },
    {
      "type": "microflowCall",
      "label": "68781c5a-a071-4628-8b7b-5f237fbeb0a0",
      "operationId": "l6Tgj9exUl+iSb+/MQMBjQ",
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "26de0331-793d-427c-8cc4-19ed28955bdd",
      "inputVar": "Feedback",
      "member": "_showEmail",
      "value": {
        "type": "conditional",
        "condition": {
          "type": "variable",
          "variable": "Feedback",
          "path": "_showEmail"
        },
        "then": {
          "type": "literal",
          "value": true
        },
        "else": {
          "type": "conditional",
          "condition": {
            "type": "conditional",
            "condition": {
              "type": "function",
              "name": "!=",
              "parameters": [
                {
                  "type": "variable",
                  "variable": "Feedback",
                  "path": "SubmitterEmail"
                },
                {
                  "type": "literal",
                  "value": null
                }
              ]
            },
            "then": {
              "type": "function",
              "name": "!=",
              "parameters": [
                {
                  "type": "variable",
                  "variable": "Feedback",
                  "path": "SubmitterEmail"
                },
                {
                  "type": "literal",
                  "value": ""
                }
              ]
            },
            "else": {
              "type": "literal",
              "value": false
            }
          },
          "then": {
            "type": "literal",
            "value": false
          },
          "else": {
            "type": "literal",
            "value": true
          }
        }
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "6a637ab2-a07c-4e0b-9b46-cc0245e2f97d",
      "action": () => require("/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/javascriptsource/feedbackmodule/actions/JS_PopulateFeedbackMetadata").JS_PopulateFeedbackMetadata,
      "parameters": [
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "d31266b6-3e85-47d8-8dc3-b08cb061bb00",
      "action": () => require("/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/javascriptsource/feedbackmodule/actions/JS_SetFeedbackStorageObject").JS_SetFeedbackStorageObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "7deafb02-0bf3-4257-a1ac-f692fbf464d0",
      "action": () => require("/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/javascriptsource/feedbackmodule/actions/JS_Recalculate_MendixModal_Error_PopUp_Zindex").JS_Recalculate_MendixModal_Error_PopUp_Zindex,
      "parameters": []
    },
    {
      "type": "return",
      "label": "859d8f99-d3a6-4286-adfa-8318157784a0",
      "result": {
        "type": "variable",
        "variable": "Feedback"
      },
      "resultKind": "object"
    }
  ]
};
