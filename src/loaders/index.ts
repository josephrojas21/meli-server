import { Application } from 'express';
import expressLoader from './express';
import errorHandlerLoader from './errorHandler';


class Loader {
    constructor(
        private app: Application
    ) {}

    async config() {
        await expressLoader({ app: this.app });
        console.log(`Express loader succeeded`);

        await errorHandlerLoader({ app: this.app });
        console.log(`Error Handler loader succeeded`);
    }
}

export default Loader;