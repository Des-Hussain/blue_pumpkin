define({ "api": [
  {
    "type": "post",
    "url": "localhost:8080/blue_pumpkin/server/index.php/userController/createUser",
    "title": "Create User From Admin Portal API",
    "name": "Create_User_From_Admin_Portal_API",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fname",
            "description": "<p>FirstName</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lname",
            "description": "<p>LastName</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "active",
            "description": "<p>Active</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "role",
            "description": "<p>Role</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Message corresponding to request.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "application/controllers/userController.php",
    "groupTitle": "User"
  }
] });
