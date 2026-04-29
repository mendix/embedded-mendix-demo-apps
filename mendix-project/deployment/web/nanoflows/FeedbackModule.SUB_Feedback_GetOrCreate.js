import { addEnumerations, t } from "mendix";
import { Get_And_Set_Feedback_NPE } from "./FeedbackModule.Get_And_Set_Feedback_NPE.js";

export const SUB_Feedback_GetOrCreate = {
  "name": "FeedbackModule.SUB_Feedback_GetOrCreate",
  "useListParameterByReference": true,
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "c80b6cfc-5fd8-4fdd-a052-86636083b9d0",
      "action": () => require("/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/javascriptsource/feedbackmodule/actions/JS_isStrictMode").JS_isStrictMode,
      "outputVar": "isStrictMode",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "fb4ded62-403c-4fac-963a-667a59164ea0",
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
        "false": "5f331da5-9edd-4c3d-a385-78197cc7cadb",
        "true": "956425ec-bd67-4d5b-9c60-c0e517c3a6ad"
      }
    },
    {
      "type": "tryCatch",
      "label": "956425ec-bd67-4d5b-9c60-c0e517c3a6ad",
      "catchTarget": "01519e9f-dd29-494c-8106-e78c822d8034",
      "body": [
        {
          "type": "javaScriptActionCall",
          "action": () => require("/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/javascriptsource/feedbackmodule/actions/JS_GetFeedbackStorageObject").JS_GetFeedbackStorageObject,
          "outputVar": "LocalFeedback",
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
                "value": "FeedbackModule.Feedback"
              }
            }
          ]
        },
        {
          "type": "return",
          "result": {
            "type": "literal",
            "value": true
          },
          "resultKind": "primitive"
        }
      ]
    },
    {
      "type": "switch",
      "label": "7ae7b999-cd1f-4b9e-b1e3-bdf301e4b1ad",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "LocalFeedback"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "false": "a0321db6-85d9-4ada-9091-efcc03f2f08f",
        "true": "bfed06b5-1b32-4bed-b4e4-b59246aaafc2"
      }
    },
    {
      "type": "return",
      "label": "bfed06b5-1b32-4bed-b4e4-b59246aaafc2",
      "result": {
        "type": "variable",
        "variable": "LocalFeedback"
      },
      "resultKind": "object"
    },
    {
      "type": "jump",
      "label": "a0321db6-85d9-4ada-9091-efcc03f2f08f",
      "target": "404b3036-d3bc-48fe-a86f-aa8d1f0fbad1"
    },
    {
      "type": "createObject",
      "label": "404b3036-d3bc-48fe-a86f-aa8d1f0fbad1",
      "objectType": "FeedbackModule.Feedback",
      "outputVar": "NewFeedback"
    },
    {
      "type": "return",
      "label": "c01865bb-4b21-4d71-aacc-0ccba161a9f4",
      "result": {
        "type": "variable",
        "variable": "NewFeedback"
      },
      "resultKind": "object"
    },
    {
      "type": "jump",
      "label": "01519e9f-dd29-494c-8106-e78c822d8034",
      "target": "a0321db6-85d9-4ada-9091-efcc03f2f08f"
    },
    {
      "type": "jump",
      "label": "a0321db6-85d9-4ada-9091-efcc03f2f08f",
      "target": "404b3036-d3bc-48fe-a86f-aa8d1f0fbad1"
    },
    {
      "type": "jump",
      "label": "5f331da5-9edd-4c3d-a385-78197cc7cadb",
      "target": "4ea7180f-4f88-4b6c-9a07-e780631c6ade"
    },
    {
      "type": "nanoflowCall",
      "label": "4ea7180f-4f88-4b6c-9a07-e780631c6ade",
      "flow": () => Get_And_Set_Feedback_NPE,
      "parameters": [],
      "outputVar": "StrictModeFeedback"
    },
    {
      "type": "return",
      "label": "114c89b6-ddcb-4bbe-abee-c7941eec3888",
      "result": {
        "type": "variable",
        "variable": "StrictModeFeedback"
      },
      "resultKind": "object"
    }
  ]
};
