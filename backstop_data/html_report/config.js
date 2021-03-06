report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_React_app_test_0_document_0_phone.png",
        "test": "../bitmaps_test/20201029-161851/backstop_default_React_app_test_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_React_app_test_0_document_0_phone.png",
        "label": "React app test",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -20
          },
          "misMatchPercentage": "6.25",
          "analysisTime": 21
        },
        "diffImage": "../bitmaps_test/20201029-161851/failed_diff_backstop_default_React_app_test_0_document_0_phone.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});