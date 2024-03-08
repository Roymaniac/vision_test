# Backend Application

This is a small backend application showcasing features such as hooks system, CLI for model creation, model structure and validation, and API endpoint development. It is implemented using TypeScript, Node.js, Express, and MongoDB.

## Installation

Clone this repository to your local machine:
bash

```bash
git clone <repository-url>
```

- Navigate to the project directory:

```bash
cd vision_test
```

- Install dependencies using npm:

```bash
npm install
```

- Set up your MongoDB database and configure the connection details in the .env file:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=your_database_name
```

### Usage

**Hooks System**:
The hooks system allows you to run functions at specific events in the application lifecycle. You can add hooks and define functions to be executed at these events.

Example usage:

```typescript
import { addHook, runHooks } from "./hooks";

addHook("afterStart", async () => {
  console.log("After start hook 1");
});

addHook("afterStart", async () => {
  console.log("After start hook 2");
});

runHooks("afterStart");
```

**CLI for Model Creation**:
The CLI tool allows you to create new models in the database. Use the following command to create a new model:

Run build

```bash
npm run build
```

Model creation cli

```bash
node dist/cli.js --model <modelName>
```

or using the short form

```bash
node dist/cli.js -m <modelName>
```

Replace <modelName> with the desired name of your model.

**Model Structure and Validation**:
Ensure table names follow the pattern tab <ModelName>. Model properties and validations are defined in JSON files corresponding to each model.

**API Endpoint**:
An API endpoint is provided to retrieve data based on a model name, fields, and filters. The endpoint is accessible at /api/data and accepts query parameters for modelName, fields, and filters.

Example usage:

```re
GET /api/data?modelName=User&fields=["name"]&filters={"fullName":"David"}
```

### Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License

MIT
