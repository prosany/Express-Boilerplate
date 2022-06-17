require("dotenv").config();
const Config = {};

Config.PORT = process.env.PORT || 7645;
Config.APP_ENV = process.env.APP_ENV;
Config.DB_URL = process.env.DB_URL;
Config.DB_NAME = process.env.DB_NAME;
Config.DB_PASSWORD = process.env.DB_PASSWORD;
Config.DB_USER = process.env.DB_USER;
Config.SMS_KEY = process.env.SMS_KEY;
Config.GMAIL_MAIL = process.env.GMAIL_MAIL;
Config.GMAIL_MAIL_PASS = process.env.GMAIL_MAIL_PASS;
Config.GOOGLE_API_CLIENT_ID = process.env.GOOGLE_API_CLIENT_ID;
Config.GOOGLE_API_CLIENT_SECRET = process.env.GOOGLE_API_CLIENT_SECRET;
Config.GOOGLE_API_REDIRECT_URI = process.env.GOOGLE_API_REDIRECT_URI;
Config.GOOGLE_API_REFRESH_TOKEN = process.env.GOOGLE_API_REFRESH_TOKEN;

module.exports = Config;
