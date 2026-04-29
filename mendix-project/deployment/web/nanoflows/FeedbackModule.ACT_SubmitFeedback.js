import { addEnumerations, t } from "mendix";
import { SUB_Feedback_ResetLocalStorage } from "./FeedbackModule.SUB_Feedback_ResetLocalStorage.js";

export const ACT_SubmitFeedback = {
  "name": "FeedbackModule.ACT_SubmitFeedback",
  "useListParameterByReference": true,
  "instructions": [
    {
      "type": "microflowCall",
      "label": "95028747-c5fa-41aa-85bd-1bdb64933d14",
      "operationId": "UfnTertmC1WuynovlSTNpA",
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ],
      "outputVar": "isValid"
    },
    {
      "type": "switch",
      "label": "50a81754-bf84-41e2-a34b-fdb381978983",
      "condition": {
        "type": "variable",
        "variable": "isValid"
      },
      "targets": {
        "true": "46e3e826-c984-4b49-8d36-4ad405725791",
        "false": "b48940bb-fe3f-489e-9b2d-110e313d427a"
      }
    },
    {
      "type": "return",
      "label": "b48940bb-fe3f-489e-9b2d-110e313d427a",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "microflowCall",
      "label": "46e3e826-c984-4b49-8d36-4ad405725791",
      "operationId": "mGD0KsuSNFusYxcUSNyZAA",
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ],
      "outputVar": "ResponseHelper"
    },
    {
      "type": "closeForm",
      "label": "0b2384f0-d6c9-467e-86e3-f6253a093530",
      "numberOfPagesToClose": {
        "type": "literalNumeric",
        "value": "1"
      }
    },
    {
      "type": "switch",
      "label": "65331876-3295-46c3-89b3-de2d66fc0104",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "ResponseHelper"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "true": "a376ec19-ada0-45bd-be4f-53883c77e902",
        "false": "1d73640c-3d9d-4ebc-afb0-0e971f3a5852"
      }
    },
    {
      "type": "jump",
      "label": "1d73640c-3d9d-4ebc-afb0-0e971f3a5852",
      "target": "d86f6d69-2aec-4f48-8195-2d9ea6895f26"
    },
    {
      "type": "openForm",
      "label": "d86f6d69-2aec-4f48-8195-2d9ea6895f26",
      "path": "FeedbackModule/PopupFailure.page.xml",
      "params": {
        "name": "FeedbackModule/PopupFailure.page.xml",
        "location": "modal",
        "resizable": false
      }
    },
    {
      "type": "return",
      "label": "237d371b-43ee-4b21-9c12-e663e6b539bd",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "openForm",
      "label": "a376ec19-ada0-45bd-be4f-53883c77e902",
      "path": "FeedbackModule/PopupSuccess.page.xml",
      "params": {
        "name": "FeedbackModule/PopupSuccess.page.xml",
        "location": "modal",
        "resizable": false
      },
      "inputArgs": {
        "$Response": {
          "type": "variable",
          "variable": "ResponseHelper"
        }
      }
    },
    {
      "type": "nanoflowCall",
      "label": "1d05ca9a-f9fa-474e-9a12-550a24735785",
      "flow": () => SUB_Feedback_ResetLocalStorage,
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
      "type": "return",
      "label": "8d50181a-64f4-4bda-8191-b9ad111c41f5",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
