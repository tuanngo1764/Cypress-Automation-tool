/// <reference types="cypress" />

export class Constant {
    // Connect to sites
    evernoteUrl = 'https://evernote.com/intl/vi/?delay-new-todo=5000';

    // Enum Evernote Version
    EvernoteVersion = Object.freeze({ "BASIC": "BASIC", "PREMIUM": "PREMIUM", "BUSINESS": "BUSINESS" });
    // Enum Left Nav Option
    LeftNavOption = Object.freeze({ "WHY_CHOOSE_EVERNOTE": "Vì sao chọn Evernote", "FEATURE": "Tính năng", "SUBSCRIPTION_PACKAGE": "Gói thuê bao", "HELP": "Trợ giúp", "LOGIN": "Đăng nhập" });
    // Enum Feature Option
    FeatureOption = Object.freeze({ "NOTES_APP": "notes-app", "WEBCLIPPER": "webclipper", "TEMPLATES": "templates", "PDF_DOCUMENT_SEARCH": "pdf-document-search", "SPACES": "spaces", "SEARCH_HANDWRITING": "search-handwriting", "DOCUMENT_SCANNING": "document-scanning", "INTEGRATION": "integrations" });

    // Seconds per day
    SECONDS_PER_DAY = 86400000;

    // Register account info
    REGISTER_USERNAME = "lgtest";
    EMAIL_EXTENSION = "@gmail.com";
    REGISTER_PASSWORD = "12345678";
    REGISTER_PID = "987654321";
    RANDOM_LENGTH = 7;

    // Waits time: mili seconds
    TIME_SLEEP = 1000;
    SHORT_TIME = 10000;
    MEDIUM_TIME = 30000;
    LONG_TIME = 60000;
}
