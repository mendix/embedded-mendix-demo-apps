import { addEnumerations, t } from "mendix";

export const ACT_Feedback_UploadImage = {
  "name": "FeedbackModule.ACT_Feedback_UploadImage",
  "useListParameterByReference": true,
  "instructions": [
    {
      "type": "setVariable",
      "label": "fc944525-3e40-4521-bc06-bc0966aab258",
      "value": {
        "type": "literal",
        "value": ".gif,.png,.jpg,.jpeg"
      },
      "outputVar": "mimeTypes",
      "outputKind": "primitive"
    },
    {
      "type": "setVariable",
      "label": "97ce601c-c737-450f-85e7-29553b871d1c",
      "value": {
        "type": "literalNumeric",
        "value": "5"
      },
      "outputVar": "fileUploadSize",
      "outputKind": "primitive"
    },
    {
      "type": "javaScriptActionCall",
      "label": "47367d63-6341-403c-bbc3-ce7bbb54bec5",
      "action": () => require("/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/javascriptsource/feedbackmodule/actions/JS_UploadAndConvertToFileBlobURL").JS_UploadAndConvertToFileBlobURL,
      "outputVar": "fileBlobURL",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "mimeTypes"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileUploadSize"
          }
        }
      ]
    },
    {
      "type": "switch",
      "label": "ca0c3107-b679-491e-ad28-b49ea8bf169e",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "uploadCancelled"
          }
        ]
      },
      "targets": {
        "true": "2257af9b-047b-4463-a27c-cd62e51c733f",
        "false": "aea1e234-8d24-48ce-91cc-43a53b90d79c"
      }
    },
    {
      "type": "return",
      "label": "aea1e234-8d24-48ce-91cc-43a53b90d79c",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "2257af9b-047b-4463-a27c-cd62e51c733f",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "false": "2133e4dc-e2ad-4dda-9338-7bdc7dd500ad",
        "true": "438edbff-82a3-497b-b5be-80794e323964"
      }
    },
    {
      "type": "switch",
      "label": "438edbff-82a3-497b-b5be-80794e323964",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "fileSizeNotAccepted"
          }
        ]
      },
      "targets": {
        "true": "89a6e39b-addd-4edf-9469-832c18b328fd",
        "false": "928a3a5d-9420-42ae-8810-3f56451fceb5"
      }
    },
    {
      "type": "showMessage",
      "label": "928a3a5d-9420-42ae-8810-3f56451fceb5",
      "messageType": "error",
      "message": t([
        {
          "type": "literal",
          "value": "Maximum image size allowed is 5MB."
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "cab47e3e-bc15-423a-a2e7-2fed58482efc",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "89a6e39b-addd-4edf-9469-832c18b328fd",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "fileTypeNotAccepted"
          }
        ]
      },
      "targets": {
        "false": "1b9063a1-4ad9-41e9-ae7f-04fb743873e0",
        "true": "8e920f72-6295-4bc9-a210-eb3f9e17aeed"
      }
    },
    {
      "type": "closeForm",
      "label": "8e920f72-6295-4bc9-a210-eb3f9e17aeed"
    },
    {
      "type": "javaScriptActionCall",
      "label": "eb71eff3-1717-4832-bfef-378e571094e9",
      "action": () => require("/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/javascriptsource/feedbackmodule/actions/JS_ToggleFeedbackAnnotateWidget").JS_ToggleFeedbackAnnotateWidget,
      "outputVar": "base64ImageFromWidget",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileBlobURL"
          }
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "3192c3f5-6f58-422d-804d-5692f1fb8bd7",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "base64ImageFromWidget"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "nsLpRdy0YFONoZtvnpnmJw",
      "inputVar": "Feedback"
    },
    {
      "type": "openForm",
      "label": "4bf9450e-9d49-4637-8db2-d4ec9145d6bd",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "711bf10f-1d94-4c44-8b1a-e11a43afea78",
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
      "label": "b4cc41c5-0814-42bb-b86f-5f33731c2608",
      "action": () => require("/Users/wim.jongeneel/embedded-mendix-demo-app/mendix-project/javascriptsource/feedbackmodule/actions/JS_RevokeUploadedFileFromMemory").JS_RevokeUploadedFileFromMemory,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileBlobURL"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "22ea78bf-f888-4c3c-bb30-664b1272aebd",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "showMessage",
      "label": "1b9063a1-4ad9-41e9-ae7f-04fb743873e0",
      "messageType": "error",
      "message": t([
        {
          "type": "literal",
          "value": "Only images with format of .gif .jpg .jpeg .png are allowed"
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "3232b2df-0dd1-491a-8052-d2f8875118ff",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "showMessage",
      "label": "2133e4dc-e2ad-4dda-9338-7bdc7dd500ad",
      "messageType": "error",
      "message": t([
        {
          "type": "literal",
          "value": "Upload failed, please try again."
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "34fc4510-fe29-440c-b2f2-ba569084826f",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
