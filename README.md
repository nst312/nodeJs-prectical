3
# Node.js Practical




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT = 3000`

`SECRET = your_secret_key`

`DB_URL = mongodb://localhost:27017/Your_Database_Url`



## Installation

Install Node.js practical with npm

```bash
  npm install
```
    
## Deployment

To deploy this project run

```bash
  # development
  $ npm run start

  # watch mode
  $ npm run start:dev

  # production mode
  $ npm run build
  $ npm run start:prod
```


## API Reference

#### **User Signup**

```http
  Post /api/user/signup
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**.  The name of the user.|
| `email` | `string` | **Required**.  The email address of the user.|
| `password` | `string` | **Required**.  The password for the user account.|
| `role` | `enum: (User)` | **Required**. The role of the user.|

#### **User Login**

```http
  Post /api/user/signup
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Email of user |
| `password`      | `string` | **Required**. Password of user |

#### **User Information**

```http
  Get /api/user/me
```
| Header | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization`      | `string` | **Required**. Your login token |


#### **Random Jokes**

```http
  Get /api/random-joke
```
| Header | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization`      | `string` | **Required**. Your login token |

#### **User Logout**

```http
  Get /api/user/logout
```
| Header | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization`      | `string` | **Required**. Your login token |

#### **Product test**

```http
  Get /api/test
```




