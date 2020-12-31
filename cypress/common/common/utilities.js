/// <reference types="cypress" />

import { Constant } from "../constant/constant";

export class Utilities {

    constant = new Constant();

    ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    /**
     * @author tuan.ngo
     *
     *         Generates the random string.
     * 
     * @return String, the random string
     *
     */
    generateRandomString(value, len) {
        var ch = Array.from(this.ALPHABET);
        var c = new Array(len);

        var i;
        for (i = 0; i < len; i++) {
            c[i] = ch[Math.floor(Math.random() * Math.floor(ch.length))];
            value += c[i];
        }
        return value;
    }

    /**
     * @author tuan.ngo
     *
     *         Generates the random number.
     * 
     * @return number, the random number
     *
     */
    generateRandomNumber(min, max) {
        return Math.floor(Math.random() * Math.floor(max)) + min;
    }

    /**
     * @author tuan.ngo
     *
     *         Generates the date.
     * 
     * @return String, the date
     *
     */
    generateDate(days = 0) {
        let result = new Date(Date.now() + (days * this.constant.SECONDS_PER_DAY));
        return (result.getMonth() + 1) + "/" + result.getDate() + "/" + result.getFullYear();
    }

    /**
     * @author tuan.ngo
     *
     *         Generates the date.
     * 
     * @return String, the full date
     *
     */
    generateFullDate(days = 0) {
        return new Date(Date.now() + (days * this.constant.SECONDS_PER_DAY));
    }

    /**
     * @author tuan.ngo
     *
     *         Converts dates by format.
     * 
     * @return String, the date is formatted
     *
     */
    generateDateWithFormat(expectedFormat, days = 0) {
        var todaysDate = Cypress.moment();
        return todaysDate.add(days, 'days').format(expectedFormat);
    }

    /**
     * @author tuan.ngo
     *
     *         Converts the color from Hex to RGB.
     * 
     * @return String, the color with RGB format
     *
     */
    hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    /**
     * @author tuan.ngo
     *
     *         Converts the color from RGB to Hex.
     * 
     * @return String, the color with Hex format
     *
     */
    rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

}