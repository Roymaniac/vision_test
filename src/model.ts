
import * as fs from 'fs';
import path from 'path';

export function createModel(modelName: string) {
    console.log("Generating Model Setup....");
    // get file path
    const folder = path.join(__dirname)

    const modelDir = `${folder}/models`;
    const modelFile = `${modelDir}/${modelName}.ts`;
    const modelJson = `${modelDir}/${modelName}.json`;

    fs.mkdirSync(modelDir, { recursive: true });
    fs.writeFileSync(
        modelFile,
        `export class ${modelName} extends Document {\n}\n`,
        'utf-8'
    );
    fs.writeFileSync(
        modelJson,
        JSON.stringify({
            fields: [
                { name: 'id', type: 'number', required: true },
                { name: 'name', type: 'string', required: true },
                { name: 'age', type: 'number', required: false },
                { name: 'email', type: 'string', required: false },
                { name: 'createdAt', type: 'Date', required: true },
                { name: 'updatedAt', type: 'Date', required: true },
            ]
        }, null, 2),
        'utf-8'
    );
    console.log(`Model ${modelName} created successfully.`);
}

