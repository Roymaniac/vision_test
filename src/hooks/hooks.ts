
const hooks: Record<string, Function[]> = {
    afterStart: [],
    beforeMigrate: [],
    afterMigrate: []
};

export function registerHook(eventName: string, callback: Function) {
    hooks[eventName].push(callback);
}

export async function executeHooks(eventName: string) {
    for (const hook of hooks[eventName]) {
        await hook();
    }
}
