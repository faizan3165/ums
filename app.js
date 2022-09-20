import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

import indexRoute from './routes/index.js';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

app.engine('.hbs', engine({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use('/', indexRoute);

app.listen(3000, () => {
	console.log('====================================');
	console.log('Listening on port 3000');
	console.log('====================================');
});
