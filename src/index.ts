import dotenv from 'dotenv';
import emoji from 'node-emoji';
dotenv.config();

import App from './app';

function main() {
    App.listen(App.get('port') || 500);
    console.log(`${emoji.get('coffee')} Server running on port ${App.get('port')}`)
};

main();
