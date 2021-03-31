import express from 'express';
import Loaders from './loaders';

class App {
    constructor(
        public app = express(),
    ) {
        this.config();
    }

    private async config(): Promise<void> {
        await new Loaders( this.app ).config();
    }
};

export default new App().app;