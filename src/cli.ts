
import { program } from 'commander';
import { createModel } from './model';

program
    .version("1.0.0")
    .description("A Node js Command Line Model Generator")

program
    .option("-m, --model <modelName>", "create a model")
    .parse(process.argv)

const { model } = program.opts()

createModel(model)

setTimeout(() => {
    console.log("Task finished.....");
}, 1000);