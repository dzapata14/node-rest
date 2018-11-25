process.env.PORT = process.env.PORT || 3000;

// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Base de datos
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// vecimiento del token
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// SEED del Token
process.env.SEED = process.env.SEED || 'seed-desarrollo';

//Google Client
process.env.CLIENT_ID = process.env.CLIENT_ID || '748805533151-328npd5t0f9tu3k2ja9k3d1n06v9v2og.apps.googleusercontent.com';