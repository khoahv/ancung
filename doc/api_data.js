define({ "api": [
  {
    "type": "get",
    "url": "api/auth",
    "title": "GET USER BY TOKEN",
    "description": "<p>API Get user by token</p>",
    "version": "0.0.1",
    "name": "auth",
    "group": "AUTH",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/auth",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n      \"_id\": \"599545c60548b62a678409b9\",\n       \"email\": \"minhvuong@gmail.com\",\n       \"name\": \"vuong 12345\",\n       \"password\": \"123\",\n       \"createdDate\": \"2017-08-17T07:29:10.635Z\",\n       \"__v\": 0,\n       \"role\": \"User\"   \n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "documents/auth.document.js",
    "groupTitle": "AUTH"
  },
  {
    "type": "post",
    "url": "api/user",
    "title": "AUTH LOGIN",
    "description": "<p>API login</p>",
    "version": "0.0.1",
    "name": "loginUser",
    "group": "AUTH",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/auth/login",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"token\": \"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmllbmQiOltdLC\n              JfaWQiOiI1YjUxYTJjYjIwY2RlYjA0NDA4MzAxM2IiLCJlbWFpbCI6ImJvYi5taW5odnVvbm\n              AZ21haWwuY29tIiwibmFtZSI6Im1pbmh2dW9uZyIsInNleCI6Im5hbSIsInBob25lIjoiMTIzN\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email user</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password user</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-400-Response:",
          "content": " {\n     \"statusCode\": 400,\n     \"message\": \"PASS_WRONG\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"statusCode\": 404,\n     \"message\": \"EMAIL_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/auth.document.js",
    "groupTitle": "AUTH"
  },
  {
    "type": "post",
    "url": "api/party/:id",
    "title": "JOIN USER PARTY",
    "description": "<p>API</p>",
    "version": "0.0.1",
    "name": "JoinUserParty",
    "group": "PARTY",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/party/joinParty/599545c60548b62a678409b9",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Params": [
          {
            "group": "Request Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>party id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"statusCode\":200,\n  \"message\": \"USER_REGISTERED\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ],
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-404-Response:",
          "content": " { \n     \"statusCode\":404,\n     \"message\": \"PARTY_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": " { \n     \"statusCode\":404,\n     \"message\": \"RESTAURANT_NOT_FOUND\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response:",
          "content": " { \n     \"statusCode\":400,\n     \"message\": \"PARTY_ALREADY_FULL\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/party.document.js",
    "groupTitle": "PARTY"
  },
  {
    "type": "post",
    "url": "api/user",
    "title": "CREATE PARTY",
    "description": "<p>API Create party</p>",
    "version": "0.0.1",
    "name": "createparty",
    "group": "PARTY",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/party",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "request Body": [
          {
            "group": "request Body",
            "type": "String",
            "optional": false,
            "field": "titel",
            "description": "<p>titel party, event</p>"
          },
          {
            "group": "request Body",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>field</p>"
          },
          {
            "group": "request Body",
            "type": "Number",
            "optional": false,
            "field": "numberMax",
            "description": "<p>number user max</p>"
          },
          {
            "group": "request Body",
            "type": "String",
            "optional": false,
            "field": "timeStart",
            "description": "<p>time start</p>"
          },
          {
            "group": "request Body",
            "type": "String",
            "optional": false,
            "field": "timeEnd",
            "description": "<p>time End</p>"
          },
          {
            "group": "request Body",
            "type": "Date",
            "optional": false,
            "field": "dateStart",
            "description": "<p>date start</p>"
          },
          {
            "group": "request Body",
            "type": "String",
            "optional": false,
            "field": "idRestaurant",
            "description": "<p>id Restaurant</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"_id\": \"5b50ad6d205d29464880cf25\",\n         \"titel\": \"ăn \",\n         \"field\": \" nhậu\",\n         \"numberMax\": 5,\n         \"currentNumber\": 1,\n         \"status\": true,\n         \"timeStart\": \"7h\",\n         \"dateStart\": \"2018-07-30T17:00:00.000Z\",\n         \"idRestaurant\": \"5b4da355dedc7030b83064c1\",\n         \"listUser\": [\n             {\n                 \"_id\": \"5b50ad6d205d29464880cf26\",\n                 \"id\": \"5b4d577bfa23a111acb45870\",\n                 \"leader\": true\n             }\n         ],\n         \"createAt\": \"2018-07-19T15:25:33.468Z\",\n         \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-400-Response:",
          "content": " {\n     \"statusCode\": 400,\n     \"message\": \"RESTAURANT_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/party.document.js",
    "groupTitle": "PARTY"
  },
  {
    "type": "delete",
    "url": "api/party/joinParty:id",
    "title": "DELETE PARTY",
    "description": "<p>API Delete join party</p>",
    "version": "0.0.1",
    "name": "delete_join_party",
    "group": "PARTY",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/party/joinParty/:id",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Params": [
          {
            "group": "Request Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>party id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   {\n   \"listUser\": [\n     {\n           \"_id\": \"5b595299abf652459c662ee9\",\n           \"id\": \"5b51a2cb20cdeb044083013b\",\n           \"leader\": true\n     },\n       {\n           \"_id\": \"5b6511a35d0d7a00208195d1\",\n           \"id\": \"5b56b004906ae50020888ce0\",\n            \"leader\": false\n        }\n    ],\n    \"_id\": \"5b595299abf652459c662ee8\",\n    \"titel\": \"test fix date \",\n    \"field\": \"Mô tả\",\n    \"numberMax\": 5,\n    \"currentNumber\": 2,\n    \"status\": false,\n    \"timeStart\": \"5h30\",\n    \"timeEnd\": \"6h30\",\n    \"dateStart\": \"2018-06-25T17:00:00.000Z\",\n    \"idRestaurant\": \"5b5459837c82af0020002fb4\",\n    \"createAt\": \"2018-07-26T04:48:25.080Z\",\n    \"__v\": 5\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-404-Response:",
          "content": " {\n      \"statusCode\": 404,\n      \"message\": \"PARTY_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/party.document.js",
    "groupTitle": "PARTY"
  },
  {
    "type": "delete",
    "url": "api/party/:id",
    "title": "DELETE PARTY",
    "description": "<p>API Delete party</p>",
    "version": "0.0.1",
    "name": "deleteparty",
    "group": "PARTY",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/party/599545c60548b62a678409b9",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Params": [
          {
            "group": "Request Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>party id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"statusCode\":200,\n    \"message\": \"PARTY_DELETED\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"statusCode\":404,\n     \"message\": \"PARTY_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/party.document.js",
    "groupTitle": "PARTY"
  },
  {
    "type": "get",
    "url": "api/party/:id",
    "title": "GET ONE PARTY",
    "description": "<p>API Get one type food</p>",
    "version": "0.0.1",
    "name": "party",
    "group": "PARTY",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/party/5b4f500cb3f8ba2e24de3177",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Request Params": [
          {
            "group": "Request Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>party id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>party id</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "titel",
            "description": "<p>titel party, event</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>field</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "numberMax",
            "description": "<p>number user max</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "currentNumber",
            "description": "<p>current Number user</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>party active or unactive</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "timeStart",
            "description": "<p>time start</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "timeEnd",
            "description": "<p>time End</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "dateStart",
            "description": "<p>date start</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "idRestaurant",
            "description": "<p>id Restaurant</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "listUser",
            "description": "<p>list user participation</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "createAt",
            "description": "<p>date create party</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n      \"listUser\": [\n            {\n                \"_id\": \"5b4f500cb3f8ba2e24de3178\",\n                \"id\": \"5b4f500cb3f8ba2e24de3177\",\n                \"leader\": true\n            },\n            {\n                \"_id\": \"5b4f508c1fa148122c0e96eb\",\n                \"id\": \"5b4ed87ea588892fa8db6590\",\n                \"leader\": false\n            },\n            {\n                \"_id\": \"5b4f50b575565e39708b3522\",\n                \"id\": \"5b4ed87ea588892fa8db6590\",\n                \"leader\": false\n            },\n            {\n                \"_id\": \"5b4f50cd3f37653748d34279\",\n                \"id\": \"5b4ed87ea588892fa8db6590\",\n                \"leader\": false\n            }\n        ],\n        \"_id\": \"5b4f500cb3f8ba2e24de3177\",\n        \"titel\": \"ăn \",\n        \"field\": \" nhậu\",\n        \"numberMax\": 5,\n        \"currentNumber\": 1,\n        \"status\": true,\n        \"timeStart\": \"7h\",\n        \"dateStart\": \"2018-07-18T17:00:00.000Z\",\n        \"idRestaurant\": \"5b4da355dedc7030b83064c1\",\n        \"createAt\": \"2018-07-18T14:34:52.831Z\",\n        \"__v\": 3\n   }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"statusCode\":404,\n     \"message\": \"PARTY_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/party.document.js",
    "groupTitle": "PARTY"
  },
  {
    "type": "post",
    "url": "api/party/:id",
    "title": "UPDATE PARTY",
    "description": "<p>API Update party</p>",
    "version": "0.0.1",
    "name": "updateParty",
    "group": "PARTY",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/party/599545c60548b62a678409b9",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "request Body": [
          {
            "group": "request Body",
            "type": "String",
            "optional": false,
            "field": "titel",
            "description": "<p>titel party, event</p>"
          },
          {
            "group": "request Body",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>field</p>"
          },
          {
            "group": "request Body",
            "type": "Number",
            "optional": false,
            "field": "numberMax",
            "description": "<p>number user max</p>"
          },
          {
            "group": "request Body",
            "type": "String",
            "optional": false,
            "field": "timeStart",
            "description": "<p>time start</p>"
          },
          {
            "group": "request Body",
            "type": "String",
            "optional": false,
            "field": "timeEnd",
            "description": "<p>time End</p>"
          },
          {
            "group": "request Body",
            "type": "Date",
            "optional": false,
            "field": "dateStart",
            "description": "<p>date start</p>"
          },
          {
            "group": "request Body",
            "type": "String",
            "optional": false,
            "field": "idRestaurant",
            "description": "<p>id Restaurant</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"statusCode\":200,\n  \"message\": \"PARTY_UPDATED\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-404-Response:",
          "content": " { \n     \"statusCode\":404,\n     \"message\": \"PARTY_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/party.document.js",
    "groupTitle": "PARTY"
  },
  {
    "type": "get",
    "url": "api/public/restaurant/:nameImage",
    "title": "SHOW IMAGES",
    "description": "<p>API show images</p>",
    "version": "0.0.1",
    "name": "ShowImages",
    "group": "RESTAURANT",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/public/restaurant/restaurant_1fádasdassabdkjfbaw.png",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"HÌNH ẢNH\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/restaurant.document.js",
    "groupTitle": "RESTAURANT"
  },
  {
    "type": "post",
    "url": "api/user",
    "title": "CREATE RESTAURANT",
    "description": "<p>API Create restaurant</p>",
    "version": "0.0.1",
    "name": "createRestaurant",
    "group": "RESTAURANT",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/restaurant",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"statusCode\": 201,\n      \"message\": \"RESTAURANT_FOOD_CREATED\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name restaurant</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "typeFood",
            "description": "<p>id TypeFood</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "minPrice",
            "description": "<p>minPrice</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "maxPrice",
            "description": "<p>maxPrice</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "timeStart",
            "description": "<p>timeStart</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "timeAnd",
            "description": "<p>timeAnd</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address</p>"
          },
          {
            "group": "Request Body",
            "type": "Date",
            "optional": false,
            "field": "createAt",
            "description": "<p>create date</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-400-Response:",
          "content": " {\n     \"statusCode\": 400,\n     \"message\": \"TYOE_FOOD_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/restaurant.document.js",
    "groupTitle": "RESTAURANT"
  },
  {
    "type": "delete",
    "url": "api/restaurant/:id",
    "title": "DELETE RESTAURANT",
    "description": "<p>API Delete restaurant</p>",
    "version": "0.0.1",
    "name": "deleterestaurant",
    "group": "RESTAURANT",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/typefood/599545c60548b62a678409b9",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Params": [
          {
            "group": "Request Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>typefood id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"statusCode\":201,\n    \"message\": \"RESTAURANT_FOOD_DELETED\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"statusCode\":404,\n     \"mesage\": \"RESTAURANT_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/restaurant.document.js",
    "groupTitle": "RESTAURANT"
  },
  {
    "type": "get",
    "url": "api/restaurant/:id",
    "title": "GET ONE RESTAURANT",
    "description": "<p>API Get one restaurant</p>",
    "version": "0.0.1",
    "name": "restaurant",
    "group": "RESTAURANT",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/restaurant/599545c60548b62a678409b9",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Request Params": [
          {
            "group": "Request Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>restaurant id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>typefood id</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name restaurant</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>list image</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "typeFood",
            "description": "<p>id TypeFood</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "timeStart",
            "description": "<p>timeStart</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "timeAnd",
            "description": "<p>timeAnd</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>lat</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "long",
            "description": "<p>long</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "minPrice",
            "description": "<p>minPrice</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "maxPrice",
            "description": "<p>maxPrice</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "detail",
            "description": "<p>detail</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "averageRate",
            "description": "<p>averageRate</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "createAt",
            "description": "<p>create date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n     \"image\": [],\n        \"listRate\": [\n            {\n                \"_id\": \"5b4db55690d489190096b555\",\n                \"idUser\": \"5b4d577bfa23a111acb45870\",\n                \"rate\": 10\n            },\n            {\n                \"_id\": \"5b4dcf63df4e88193484b96e\",\n                \"idUser\": \"5b4d5782fa23a111acb45871\",\n                \"rate\": 4\n            },\n            {\n                \"_id\": \"5b4ed65e09ac793284361891\",\n                \"idUser\": \"5b4ed62609ac793284361890\"\n            }\n        ],\n        \"_id\": \"5b4db55690d489190096b554\",\n        \"name\": \"bánh gạo\",\n        \"typeFood\": \"5b4d611436d25b1f302d71a2\",\n        \"timeStart\": \"5h30p\",\n        \"timeAnd\": \"7h30\",\n        \"address\": \"610 hà huy giáp\",\n        \"averageRate\": 7,\n        \"__v\": 2\n   }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"statusCode\":404,\n     \"message\": \"RESTAURANT_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/restaurant.document.js",
    "groupTitle": "RESTAURANT"
  },
  {
    "type": "get",
    "url": "api/restaurant?page=?&&limit=?",
    "title": "GET PAGE RESTAURANT",
    "description": "<p>API Get Pgae restaurant</p>",
    "version": "0.0.1",
    "name": "restaurant",
    "group": "RESTAURANT",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/restaurant?page=1&&limit=10",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Request Query": [
          {
            "group": "Request Query",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>page get</p>"
          },
          {
            "group": "Request Query",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>limit get</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>typefood id</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name restaurant</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>list image</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "typeFood",
            "description": "<p>id TypeFood</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "timeStart",
            "description": "<p>timeStart</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "timeAnd",
            "description": "<p>timeAnd</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>lat</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "long",
            "description": "<p>long</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "minPrice",
            "description": "<p>minPrice</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "maxPrice",
            "description": "<p>maxPrice</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "detail",
            "description": "<p>detail</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "averageRate",
            "description": "<p>averageRate</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "createAt",
            "description": "<p>create date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n     \"image\": [],\n        \"listRate\": [\n            {\n                \"_id\": \"5b4db55690d489190096b555\",\n                \"idUser\": \"5b4d577bfa23a111acb45870\",\n                \"rate\": 10\n            },\n            {\n                \"_id\": \"5b4dcf63df4e88193484b96e\",\n                \"idUser\": \"5b4d5782fa23a111acb45871\",\n                \"rate\": 4\n            },\n            {\n                \"_id\": \"5b4ed65e09ac793284361891\",\n                \"idUser\": \"5b4ed62609ac793284361890\"\n            }\n        ],\n        \"_id\": \"5b4db55690d489190096b554\",\n        \"name\": \"bánh gạo\",\n        \"typeFood\": \"5b4d611436d25b1f302d71a2\",\n        \"timeStart\": \"5h30p\",\n        \"timeAnd\": \"7h30\",\n        \"address\": \"610 hà huy giáp\",\n        \"averageRate\": 7,\n        \"__v\": 2\n   }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"statusCode\":404,\n     \"message\": \"RESTAURANT_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/restaurant.document.js",
    "groupTitle": "RESTAURANT"
  },
  {
    "type": "post",
    "url": "/public/restaurant/:id",
    "title": "IMAGE RESTAURANT",
    "description": "<p>API image restaurant</p>",
    "version": "0.0.1",
    "name": "updateImageRestaurant",
    "group": "RESTAURANT",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/public/restaurant/599545c60548b62a678409b9.png",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Params": [
          {
            "group": "Request Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Restaurant id</p>"
          }
        ],
        "Request files": [
          {
            "group": "Request files",
            "type": "form-data",
            "optional": false,
            "field": "file",
            "description": "<p>image restaurant</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"statusCode\":201,\n    \"message\": \"RESTAURANT_FOOD_UPDATED_IMAGE\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-404-Response:",
          "content": " { \n     \"statusCode\":404,\n     \"message\": \"RESTAURANT_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/restaurant.document.js",
    "groupTitle": "RESTAURANT"
  },
  {
    "type": "post",
    "url": "api/restaurant/rate/:id",
    "title": "RATE RESTAURANT",
    "description": "<p>API rate restaurant</p>",
    "version": "0.0.1",
    "name": "updateRateRestaurant",
    "group": "RESTAURANT",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/restaurant/rate/599545c60548b62a678409b9",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Params": [
          {
            "group": "Request Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Restaurant id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Request Body 200": [
          {
            "group": "Request Body 200",
            "type": "String",
            "optional": false,
            "field": "rate",
            "description": "<p>review rate restaurant</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"image\": [],\n     \"listRate\": [\n         {\n             \"_id\": \"5b4db55690d489190096b555\",\n             \"idUser\": \"5b4d577bfa23a111acb45870\",\n             \"rate\": 10\n         },\n         {\n             \"_id\": \"5b4dcf63df4e88193484b96e\",\n             \"idUser\": \"5b4d5782fa23a111acb45871\",\n             \"rate\": 4\n         }\n     ],\n     \"_id\": \"5b4db55690d489190096b554\",\n     \"name\": \"bánh gạo\",\n     \"typeFood\": \"5b4d611436d25b1f302d71a2\",\n     \"timeStart\": \"5h30p\",\n     \"timeAnd\": \"7h30\",\n     \"address\": \"610 hà huy giáp\",\n     \"averageRate\": 7,\n     \"__v\": 2\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-404-Response:",
          "content": " { \n     \"statusCode\":404,\n     \"message\": \"RESTAURANT_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/restaurant.document.js",
    "groupTitle": "RESTAURANT"
  },
  {
    "type": "put",
    "url": "api/restaurant/:id",
    "title": "UPDATE RESTAURANT",
    "description": "<p>API Update restaurant</p>",
    "version": "0.0.1",
    "name": "updaterestaurant",
    "group": "RESTAURANT",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/restaurant/599545c60548b62a678409b9",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Params": [
          {
            "group": "Request Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Restaurant id</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name restaurant</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "typeFood",
            "description": "<p>id TypeFood</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "minPrice",
            "description": "<p>minPrice</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "maxPrice",
            "description": "<p>maxPrice</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "timeStart",
            "description": "<p>timeStart</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "timeAnd",
            "description": "<p>timeAnd</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "lat",
            "description": "<p>lat</p>"
          },
          {
            "group": "Request Body",
            "type": "Number",
            "optional": false,
            "field": "long",
            "description": "<p>long</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "detail",
            "description": "<p>detail</p>"
          },
          {
            "group": "Request Body",
            "type": "Date",
            "optional": false,
            "field": "createAt",
            "description": "<p>create date</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"image\": [],\n         \"listRate\": [],\n         \"_id\": \"5b50a13f709922460069131e\",\n         \"name\": \"bánh gạo nếp 1\",\n         \"typeFood\": \"5b4d611436d25b1f302d71a2\",\n         \"minPrice\": 40,\n         \"maxPrice\": 400000,\n         \"timeStart\": \"5h30p\",\n         \"timeAnd\": \"7h30\",\n         \"address\": \"610 hà huy giáp\",\n         \"detail\":\"aa aa a aaa a\",\n         \"createAt\": \"2018-07-19T14:33:35.933Z\",\n         \"__v\": 0,\n         \"lat\": 121212,\n         \"long\": 121212\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-404-Response:",
          "content": " { \n     \"statusCode\":404,\n     \"message\": \"RESTAURANT_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/restaurant.document.js",
    "groupTitle": "RESTAURANT"
  },
  {
    "type": "post",
    "url": "api/user",
    "title": "CREATE TYPE FOOD",
    "description": "<p>API Create type food</p>",
    "version": "0.0.1",
    "name": "createtypefood",
    "group": "TYPEFOOD",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/typefood",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name type food</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"statusCode\": 201,\n      \"message\": \"TYPE_FOOD_CREATED\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-400-Response:",
          "content": " {\n     \"statusCode\": 400,\n     \"message\": \"TYOE_FOOD_IS_EXIST\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/typefood.document.js",
    "groupTitle": "TYPEFOOD"
  },
  {
    "type": "delete",
    "url": "api/typefood/:id",
    "title": "DELETE TYPE FOOD",
    "description": "<p>API Delete TypeFood</p>",
    "version": "0.0.1",
    "name": "deleteTypeFood",
    "group": "TYPEFOOD",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/typefood/599545c60548b62a678409b9",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Params": [
          {
            "group": "Request Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>typefood id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"statusCode\":404,\n    \"message\": \"TYPE_FOOD_DELETED\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"statusCode\":404,\n     \"message\": \"TYPE_FOOD_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/typefood.document.js",
    "groupTitle": "TYPEFOOD"
  },
  {
    "type": "get",
    "url": "api/typefood/:id",
    "title": "GET ONE TYPE FOOD",
    "description": "<p>API Get one type food</p>",
    "version": "0.0.1",
    "name": "typefood",
    "group": "TYPEFOOD",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/typefood/599545c60548b62a678409b9",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Request Params": [
          {
            "group": "Request Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>typefood id</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name type food</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "createAt",
            "description": "<p>create date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n     \"_id\": \"5b5095800fa8a134e864f2cb\",\n        \"name\": \"gà quay\",\n        \"createAt\": \"2018-07-19T13:43:28.278Z\",\n        \"__v\": 0\n   }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"statusCode\":404,\n     \"message\": \"TYPE_FOOD_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/typefood.document.js",
    "groupTitle": "TYPEFOOD"
  },
  {
    "type": "get",
    "url": "api/typefood",
    "title": "GET ALL TYPE FOOD",
    "description": "<p>API Get all TYPE FOOD</p>",
    "version": "0.0.1",
    "name": "typefood",
    "group": "TYPEFOOD",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/typefood",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>typefood id</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name type food</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "createAt",
            "description": "<p>create date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n     \"_id\": \"5b5095800fa8a134e864f2cb\",\n        \"name\": \"gà quay\",\n        \"createAt\": \"2018-07-19T13:43:28.278Z\",\n        \"__v\": 0\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "documents/typefood.document.js",
    "groupTitle": "TYPEFOOD"
  },
  {
    "type": "post",
    "url": "api/user/:id",
    "title": "UPDATE TYPEFOOD",
    "description": "<p>API Update Typefood</p>",
    "version": "0.0.1",
    "name": "updateTypefood",
    "group": "TYPEFOOD",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/typefood/599545c60548b62a678409b9",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Params": [
          {
            "group": "Request Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>type food id</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name type food</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>type food name</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "createAt",
            "description": "<p>create date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"5b5095800fa8a134e864f2cb\",\n    \"name\": \"gà quay new\",\n    \"createAt\": \"2018-07-19T13:43:28.278Z\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-404-Response:",
          "content": " { \n     \"statusCode\":404,\n     \"message\": \"TYPE_FOOD_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/typefood.document.js",
    "groupTitle": "TYPEFOOD"
  },
  {
    "type": "get",
    "url": "api/party",
    "title": "GET ALL PARTY",
    "description": "<p>API Get all PARTY</p>",
    "version": "0.0.1",
    "name": "get_all_party",
    "group": "UPDATE",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/party",
        "type": "curl"
      },
      {
        "title": "Example usage get page:",
        "content": "curl -i http://localhost/api/party?page=1&&limit=10",
        "type": "curl"
      },
      {
        "title": "Example usage get party status = true:",
        "content": "curl -i http://localhost/api/party?status=true",
        "type": "curl"
      },
      {
        "title": "Example usage get party status = false:",
        "content": "curl -i http://localhost/api/party?status=false",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>party id</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "titel",
            "description": "<p>titel party, event</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>field</p>"
          },
          {
            "group": "Response Body 200",
            "type": "StNumberring",
            "optional": false,
            "field": "numberMax",
            "description": "<p>number user max</p>"
          },
          {
            "group": "Response Body 200",
            "type": "Number",
            "optional": false,
            "field": "currentNumber",
            "description": "<p>current Number user</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>party active or unactive</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "timeStart",
            "description": "<p>time start</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "timeEnd",
            "description": "<p>time End</p>"
          },
          {
            "group": "Response Body 200",
            "type": "Date",
            "optional": false,
            "field": "dateStart",
            "description": "<p>date start</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "idRestaurant",
            "description": "<p>id Restaurant</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "listUser",
            "description": "<p>list user participation</p>"
          },
          {
            "group": "Response Body 200",
            "type": "Date",
            "optional": false,
            "field": "createAt",
            "description": "<p>date create party</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n      \"listUser\": [\n            {\n                \"_id\": \"5b4f500cb3f8ba2e24de3178\",\n                \"id\": \"5b4f500cb3f8ba2e24de3177\",\n                \"leader\": true\n            },\n            {\n                \"_id\": \"5b4f508c1fa148122c0e96eb\",\n                \"id\": \"5b4ed87ea588892fa8db6590\",\n                \"leader\": false\n            },\n            {\n                \"_id\": \"5b4f50b575565e39708b3522\",\n                \"id\": \"5b4ed87ea588892fa8db6590\",\n                \"leader\": false\n            },\n            {\n                \"_id\": \"5b4f50cd3f37653748d34279\",\n                \"id\": \"5b4ed87ea588892fa8db6590\",\n                \"leader\": false\n            }\n        ],\n        \"_id\": \"5b4f500cb3f8ba2e24de3177\",\n        \"titel\": \"ăn \",\n        \"field\": \" nhậu\",\n        \"numberMax\": 5,\n        \"currentNumber\": 1,\n        \"status\": true,\n        \"timeStart\": \"7h\",\n        \"dateStart\": \"2018-07-18T17:00:00.000Z\",\n        \"idRestaurant\": \"5b4da355dedc7030b83064c1\",\n        \"createAt\": \"2018-07-18T14:34:52.831Z\",\n        \"__v\": 3\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "documents/updateNew.documnet.js",
    "groupTitle": "UPDATE"
  },
  {
    "type": "get",
    "url": "api/party?status=true",
    "title": "GET PARTY FORTHCOMMING",
    "description": "<p>API get forthComming</p>",
    "version": "0.0.1",
    "name": "get_forthComming",
    "group": "UPDATE",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/party?status=true",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  [\n   {\n      \"listUser\": [\n            {\n                \"_id\": \"5b4f500cb3f8ba2e24de3178\",\n                \"id\": \"5b4f500cb3f8ba2e24de3177\",\n                \"leader\": true\n            },\n            {\n                \"_id\": \"5b4f508c1fa148122c0e96eb\",\n                \"id\": \"5b4ed87ea588892fa8db6590\",\n                \"leader\": false\n            },\n            {\n                \"_id\": \"5b4f50b575565e39708b3522\",\n                \"id\": \"5b4ed87ea588892fa8db6590\",\n                \"leader\": false\n            },\n            {\n                \"_id\": \"5b4f50cd3f37653748d34279\",\n                \"id\": \"5b4ed87ea588892fa8db6590\",\n                \"leader\": false\n            }\n        ],\n        \"_id\": \"5b4f500cb3f8ba2e24de3177\",\n        \"titel\": \"ăn \",\n        \"field\": \" nhậu\",\n        \"numberMax\": 5,\n        \"currentNumber\": 1,\n        \"status\": true,\n        \"timeStart\": \"7h\",\n        \"dateStart\": \"2018-07-18T17:00:00.000Z\",\n        \"idRestaurant\": \"5b4da355dedc7030b83064c1\",\n        \"createAt\": \"2018-07-18T14:34:52.831Z\",\n        \"__v\": 3\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "documents/updateNew.documnet.js",
    "groupTitle": "UPDATE"
  },
  {
    "type": "get",
    "url": "api/party?page=?&&limit=?",
    "title": "GET PAGE PARTY",
    "description": "<p>API Get page type food</p>",
    "version": "0.0.1",
    "name": "get_page_party",
    "group": "UPDATE",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/party?page=1&&limit=10",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Request query": [
          {
            "group": "Request query",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>page get</p>"
          },
          {
            "group": "Request query",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>limit get</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>party id</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "titel",
            "description": "<p>titel party, event</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>field</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "numberMax",
            "description": "<p>number user max</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "currentNumber",
            "description": "<p>current Number user</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>party active or unactive</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "timeStart",
            "description": "<p>time start</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "timeEnd",
            "description": "<p>time End</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "dateStart",
            "description": "<p>date start</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "idRestaurant",
            "description": "<p>id Restaurant</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "listUser",
            "description": "<p>list user participation</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "createAt",
            "description": "<p>date create party</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n      \"listUser\": [\n            {\n                \"_id\": \"5b4f500cb3f8ba2e24de3178\",\n                \"id\": \"5b4f500cb3f8ba2e24de3177\",\n                \"leader\": true\n            },\n            {\n                \"_id\": \"5b4f508c1fa148122c0e96eb\",\n                \"id\": \"5b4ed87ea588892fa8db6590\",\n                \"leader\": false\n            },\n            {\n                \"_id\": \"5b4f50b575565e39708b3522\",\n                \"id\": \"5b4ed87ea588892fa8db6590\",\n                \"leader\": false\n            },\n            {\n                \"_id\": \"5b4f50cd3f37653748d34279\",\n                \"id\": \"5b4ed87ea588892fa8db6590\",\n                \"leader\": false\n            }\n        ],\n        \"_id\": \"5b4f500cb3f8ba2e24de3177\",\n        \"titel\": \"ăn \",\n        \"field\": \" nhậu\",\n        \"numberMax\": 5,\n        \"currentNumber\": 1,\n        \"status\": true,\n        \"timeStart\": \"7h\",\n        \"dateStart\": \"2018-07-18T17:00:00.000Z\",\n        \"idRestaurant\": \"5b4da355dedc7030b83064c1\",\n        \"createAt\": \"2018-07-18T14:34:52.831Z\",\n        \"__v\": 3\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "documents/updateNew.documnet.js",
    "groupTitle": "UPDATE"
  },
  {
    "type": "get",
    "url": "api/party?idRestaurant=?",
    "title": "GET PARTY BY ID RESTAURANT",
    "description": "<p>API type food by idrestaurant</p>",
    "version": "0.0.1",
    "name": "get_party_by_id_restaurant",
    "group": "UPDATE",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/party?idrestaurant=5b4f500cb3f8ba2e24de3178",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Request Query": [
          {
            "group": "Request Query",
            "type": "String",
            "optional": false,
            "field": "idrestaurant",
            "description": "<p>restaurant id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>party id</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "titel",
            "description": "<p>titel party, event</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>field</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "numberMax",
            "description": "<p>number user max</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "currentNumber",
            "description": "<p>current Number user</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>party active or unactive</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "timeStart",
            "description": "<p>time start</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "timeEnd",
            "description": "<p>time End</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "dateStart",
            "description": "<p>date start</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "idRestaurant",
            "description": "<p>id Restaurant</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "listUser",
            "description": "<p>list user participation</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "createAt",
            "description": "<p>date create party</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n      \"listUser\": [\n            {\n                \"_id\": \"5b4f500cb3f8ba2e24de3178\",\n                \"id\": \"5b4f500cb3f8ba2e24de3177\",\n                \"leader\": true\n            },\n            {\n                \"_id\": \"5b4f508c1fa148122c0e96eb\",\n                \"id\": \"5b4ed87ea588892fa8db6590\",\n                \"leader\": false\n            },\n            {\n                \"_id\": \"5b4f50b575565e39708b3522\",\n                \"id\": \"5b4ed87ea588892fa8db6590\",\n                \"leader\": false\n            },\n            {\n                \"_id\": \"5b4f50cd3f37653748d34279\",\n                \"id\": \"5b4ed87ea588892fa8db6590\",\n                \"leader\": false\n            }\n        ],\n        \"_id\": \"5b4f500cb3f8ba2e24de3177\",\n        \"titel\": \"ăn \",\n        \"field\": \" nhậu\",\n        \"numberMax\": 5,\n        \"currentNumber\": 1,\n        \"status\": true,\n        \"timeStart\": \"7h\",\n        \"dateStart\": \"2018-07-18T17:00:00.000Z\",\n        \"idRestaurant\": \"5b4da355dedc7030b83064c1\",\n        \"createAt\": \"2018-07-18T14:34:52.831Z\",\n        \"__v\": 3\n   }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"statusCode\":404,\n     \"message\": \"RESTAURANT_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/updateNew.documnet.js",
    "groupTitle": "UPDATE"
  },
  {
    "type": "get",
    "url": "api/restaurant",
    "title": "GET ALL RESTAURANT",
    "description": "<p>API Get one restaurant</p>",
    "version": "0.0.1",
    "name": "restaurant",
    "group": "UPDATE",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/restaurant/599545c60548b62a678409b9",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>typefood id</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name restaurant</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>list image</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "typeFood",
            "description": "<p>id TypeFood</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "timeStart",
            "description": "<p>timeStart</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "timeAnd",
            "description": "<p>timeAnd</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>lat</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "long",
            "description": "<p>long</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "minPrice",
            "description": "<p>minPrice</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "maxPrice",
            "description": "<p>maxPrice</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "detail",
            "description": "<p>detail</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "averageRate",
            "description": "<p>averageRate</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "createAt",
            "description": "<p>create date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n     \"image\": [],\n        \"listRate\": [\n            {\n                \"_id\": \"5b4db55690d489190096b555\",\n                \"idUser\": \"5b4d577bfa23a111acb45870\",\n                \"rate\": 10\n            },\n            {\n                \"_id\": \"5b4dcf63df4e88193484b96e\",\n                \"idUser\": \"5b4d5782fa23a111acb45871\",\n                \"rate\": 4\n            },\n            {\n                \"_id\": \"5b4ed65e09ac793284361891\",\n                \"idUser\": \"5b4ed62609ac793284361890\"\n            }\n        ],\n        \"_id\": \"5b4db55690d489190096b554\",\n        \"name\": \"bánh gạo\",\n        \"typeFood\": \"5b4d611436d25b1f302d71a2\",\n        \"timeStart\": \"5h30p\",\n        \"timeAnd\": \"7h30\",\n        \"address\": \"610 hà huy giáp\",\n        \"averageRate\": 7,\n        \"__v\": 2\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "documents/updateNew.documnet.js",
    "groupTitle": "UPDATE"
  },
  {
    "type": "get",
    "url": "api/public/avatar/:nameImage",
    "title": "SHOW IMAGES",
    "description": "<p>API show images</p>",
    "version": "0.0.1",
    "name": "ShowImages",
    "group": "User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/public/avatar/avatar_1fádasdassabdkjfbaw.png",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"HÌNH ẢNH\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/user.document.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "api/addfriend",
    "title": "ADDFRIEND",
    "description": "<p>API addfriend</p>",
    "version": "0.0.1",
    "name": "addfriend",
    "group": "User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/addfriend/:id",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Params": [
          {
            "group": "Request Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"statusCode\": 200,\n       \"message\": \"MAKE_FRIEND_SUCCES\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 401": [
          {
            "group": "Response Body 401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-401-Response:",
          "content": " {\n     \"statusCode\": 400,\n        \"message\": \"USER_EXIST\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/user.document.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "api/avatar",
    "title": "UPADTE AVATAR",
    "description": "<p>API Update Avatar User</p>",
    "version": "0.0.1",
    "name": "avatar",
    "group": "User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/avatar",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request form-data": [
          {
            "group": "Request form-data",
            "type": "files",
            "optional": false,
            "field": "file",
            "description": "<p>file image</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"statusCode\":201\n    \"message\": \"USER_AVATAR_UPDATED\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"statusCode\":404,\n     \"message\": \"USER_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/user.document.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "api/user",
    "title": "CREATE ADMIN",
    "description": "<p>API Create Admin</p>",
    "version": "0.0.1",
    "name": "createAdmin",
    "group": "User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/user/admin",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>gender</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"statusCode\": 201,\n      \"message\": \"USER_CREATE\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-400-Response:",
          "content": " {\n     \"statusCode\": 400,\n     \"message\": \"USER_EXIST\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/user.document.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "api/user",
    "title": "CREATE USER",
    "description": "<p>API Create user</p>",
    "version": "0.0.1",
    "name": "createUser",
    "group": "User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/user",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>gender</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"statusCode\": 201,\n      \"message\": \"USER_CREATE\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-400-Response:",
          "content": " {\n     \"statusCode\": 400,\n     \"message\": \"USER_EXIST\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/user.document.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "api/user/:id",
    "title": "DELETE USER",
    "description": "<p>API Delete User</p>",
    "version": "0.0.1",
    "name": "deleteUser",
    "group": "User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/user/599545c60548b62a678409b9",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Params": [
          {
            "group": "Request Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"statusCode\":404,\n    \"message\": \"USER_DELETED\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"mesage\": \"USER_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/user.document.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "api/addfriend",
    "title": "DELETEFRIEND",
    "description": "<p>API deletefriend</p>",
    "version": "0.0.1",
    "name": "delete_friend",
    "group": "User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/addfriend/:id",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Params": [
          {
            "group": "Request Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"friend\": [],\n     \"_id\": \"5b66b3fca2ce753428c8656d\",\n     \"email\": \"vuong1@gmail.com\",\n     \"name\": \"GalaxyPham\",\n     \"salt\": \"CxAFCGvmRD0lfrgZWqei\",\n     \"password\": \"C9fjSiaMUoiZVZVwL/y1ZzSvwVqzwC9/BOJZhIIBBScJj4Y6kt155Lki8K9WzdxSzER9nfIZgsZP2SJO+BHRaFwi9xDYCP7H8wT20h10hyZYebxIh9Sb/EcLAaloyJg14HNKbLC2xUWa5FH5o+uFhmnqlyGkMnPgmmbd6UUp2qQ=\",\n     \"sex\": \"male\",\n     \"phone\": \"949022004\",\n     \"role\": \"USER\",\n     \"createAt\": \"2018-08-05T08:23:24.094Z\",\n     \"__v\": 21\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 401": [
          {
            "group": "Response Body 401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-401-Response:",
          "content": " {\n     \"statusCode\": 400,\n        \"message\": \"USER_EXIST\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/user.document.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "api/user",
    "title": "GET ALL USER",
    "description": "<p>API Get all user</p>",
    "version": "0.0.1",
    "name": "getAllUser",
    "group": "User",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/user",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Full name</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "salt",
            "description": "<p>Salt</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone</p>"
          },
          {
            "group": "Response Body 200",
            "type": "Date",
            "optional": false,
            "field": "birtdate",
            "description": "<p>birtdate</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>sex</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>image</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "friend",
            "description": "<p>friend</p>"
          },
          {
            "group": "Response Body 200",
            "type": "Date",
            "optional": false,
            "field": "createAt",
            "description": "<p>Created At</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n        \"friend\": [\n            {\n                \"_id\": \"5b4d57d2fa23a111acb45874\",\n                \"id\": \"5b4d577bfa23a111acb45870\",\n                \"follow\": true\n            },\n            {\n                \"_id\": \"5b4d5ac9c18fd71f40bb9cab\",\n                \"id\": \"5b4d578efa23a111acb45873\",\n                \"follow\": true\n            }\n        ],\n        \"_id\": \"5b4d577bfa23a111acb45870\",\n        \"email\": \"bob.minhvuong@gmail.com\",\n        \"name\": \"vuong\",\n        \"salt\": \"0JyMHNrmbfa4FCRfKhbS\",\n        \"password\": \"/AJgU9V1lb+0Pdg0COnUJFwGCA7jn3LqC+x4s+nwIZ5cVfpUCKMKxdZ17wdGE1AWnIkfV7cHkGwhSOtB+bx/QOQT7NRqjdrYfJnCgy2LCm4Ne4Wyv78wTzEf6pDgtriA7WLXW3n5st3keJQjQRiboPuSsx/5Bj8eAUgq4aIvqXY=\",\n        \"sex\": \"nam111\",\n        \"phone\": \"1699994511\",\n        \"birtdate\": \"2018-07-12T17:00:00.000Z\",\n        \"__v\": 2,\n        \"image\": \"avatar_5b4d577bfa23a111acb45870.png\"\n   },\n    {\n        \"friend\": [],\n        \"_id\": \"5b4d5782fa23a111acb45871\",\n        \"email\": \"bob.minhvuong1@gmail.com\",\n        \"name\": \"vuong\",\n        \"salt\": \"04uTG0Lujt3wjP0IzkvV\",\n        \"password\": \"UY4oeGVm5uwD4HfcRpXO6u9MZ0w22E8Af/dxDvFk8Bx8h8Vc7Ya1IlOzKMaCwMvFelJDnT2SCVcxbisv2y6ZEVNXX8MdprP1nsd34IYtFqmk17RFmYr4SbL6yhV0WJTWAc1ndaR9UHEexm+7GgJHFNnYCOQw7rgluboHiTMtyNQ=\",\n        \"sex\": \"nam111\",\n        \"phone\": \"1699994511\",\n        \"birtdate\": \"2018-07-12T17:00:00.000Z\",\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "documents/user.document.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "api/user/:id",
    "title": "GET ONE USER",
    "description": "<p>API Get one user</p>",
    "version": "0.0.1",
    "name": "getUser",
    "group": "User",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/user/599545c60548b62a678409b9",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Params": [
          {
            "group": "Request Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Full name</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "salt",
            "description": "<p>Salt</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "rate",
            "description": "<p>rate</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "birtdate",
            "description": "<p>birtdate</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>sex</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>image</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "friend",
            "description": "<p>friend</p>"
          },
          {
            "group": "Response Body 200",
            "type": "Date",
            "optional": false,
            "field": "createAt",
            "description": "<p>Created At</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"friend\": [\n        {\n            \"_id\": \"5b4d58f3495e240b085aed6d\",\n            \"id_friend\": \"5b4d5782fa23a111acb45871\",\n            \"follow\": true\n        },\n        {\n            \"_id\": \"5b4d5a641f152b12a873d575\",\n            \"id_friend\": \"5b4d5787fa23a111acb45872\",\n            \"follow\": true\n        },\n        {\n            \"_id\": \"5b4d5ac9c18fd71f40bb9caa\",\n            \"id_friend\": \"5b4d577bfa23a111acb45870\",\n            \"follow\": true\n        }\n    ],\n    \"_id\": \"5b4d578efa23a111acb45873\",\n    \"email\": \"bob.minhvuong3@gmail.com\",\n    \"name\": \"vuong\",\n    \"salt\": \"sTXqXyo9B68IxNHY38H5\",\n    \"password\": \"jG8UTJSpVby7/XvLe6lFVYDDMtLJz7D263VSwWSBaoCiRwJxBEOXNDfSFSbD0WSRuRTteaErJme6xtMpYS1otO+wkovTqXBJVy0f5EJ3+/1LBsqm2rrePProwPg0Xe83iYFXAur0GyPNchKaSCkp+m2m/mdMyu8ACtHlpgJN8hU=\",\n    \"sex\": \"nam111\",\n    \"phone\": \"1699994511\",\n    \"birtdate\": \"2018-07-12T17:00:00.000Z\",\n    \"__v\": 3\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-404-Response:",
          "content": " {\n     \"statusCode\":404,\n     \"message\": \"USER_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/user.document.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "api/user/invitefriend",
    "title": "INVITEFRIEND MAIL",
    "description": "<p>API send mail (gửi lời mời đến party)</p>",
    "version": "0.0.1",
    "name": "invitefriend",
    "group": "User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/user/invitefriend",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request mail": [
          {
            "group": "Request mail",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>User Email User Invite Friend</p>"
          }
        ],
        "Request idParty": [
          {
            "group": "Request idParty",
            "type": "String",
            "optional": false,
            "field": "idParty",
            "description": "<p>id Party</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"statusCode\": 202,\n    \"message\": \"SENT_MAIL_SUCCESSFULLY\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 401": [
          {
            "group": "Response Body 401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-401-Response:",
          "content": " {\n     \"statusCode\": 401,\n        \"message\": \"EMAIL_INVALID\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/user.document.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "api/user/sendemail",
    "title": "SEND MAIL",
    "description": "<p>API send mail (gửi lời mời đến ứng dụng)</p>",
    "version": "0.0.1",
    "name": "sendemail",
    "group": "User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/user/sendemail",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request mail": [
          {
            "group": "Request mail",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>User Email User</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"statusCode\": 202,\n    \"message\": \"SENT_MAIL_SUCCESSFULLY\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 401": [
          {
            "group": "Response Body 401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-401-Response:",
          "content": " {\n     \"statusCode\": 401,\n        \"message\": \"EMAIL_INVALID\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/user.document.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "api/user/:id",
    "title": "UPDATE USER",
    "description": "<p>API Update User</p>",
    "version": "0.0.1",
    "name": "updateUser",
    "group": "User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/api/user/599545c60548b62a678409b9",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Request Header": [
          {
            "group": "Request Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Params": [
          {
            "group": "Request Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ],
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response Header 200": [
          {
            "group": "Response Header 200",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Content Type</p>"
          }
        ],
        "Response Body 200": [
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Full name</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "birtdate",
            "description": "<p>birtdate</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>sex</p>"
          },
          {
            "group": "Response Body 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"_id\": \"599545c60548b62a678409b9\",\n    \"email\": \"minhvuong@gmail.com\",\n    \"name\": \"vuong 12345\",\n    \"password\": \"123\",\n    \"createdDate\": \"2017-08-17T07:29:10.635Z\",\n    \"__v\": 0,\n    \"role\": \"User\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-404-Response:",
          "content": " { \n     \"statusCode\":404,\n     \"message\": \"USER_NOT_FOUND\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "documents/user.document.js",
    "groupTitle": "User"
  }
] });
