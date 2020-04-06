import Application from './Application';
import createConnection from './database';
import { database } from './settings';

createConnection(database.uri);
const application = new Application();
application.listen(3000);

