
import { Schema, model } from 'mongoose';

export interface Field {
    name: string;
    type: string;
    required?: boolean;
}

export abstract class Document {
    static readonly collectionName: string = '';
    [key: string]: any;

    static get schema(): Schema {
        const schema = new Schema({});
        const modelDefinition = require(`./models/${this.collectionName}.json`);

        for (const field of modelDefinition.fields) {
            schema.add(field.name, field.type);
            if (field.required) {
                schema.path(field.name).required(true);
            }
        }

        return schema;
    }

    static model = model(this.collectionName, this.schema);

    constructor(data: Record<string, unknown>) {
        for (const [key, value] of Object.entries(data)) {
            this[key] = value;
        }
    }
}
