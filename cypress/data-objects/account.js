/// <reference types="cypress" />

import { Utilities } from '../common/common/utilities';
import { Constant } from '../common/constant/constant'

export class Account {

    utilities = new Utilities();
    constant = new Constant();

    // Defining fields
    email;
    password;
    confirmPassword;
    pid;

    // Defining constructor
    /**
     * Account constructor using fields
     * 
     * @param email
     * @param password
     * @param pid
     */
    Account(email, password) {
        // The account details
        this.email = email;
        this.password = password;
    }

    /**
     * Create account constructor using fields
     * 
     * @param email
     * @param password
     * @param confirmPassword
     * @param pid
     */
    createAccount(email, password, confirmPassword, pid) {
        // The account details
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.pid = pid;
    }

    Account() {
    }

    /**
     * @author tuan.ngo
     * 
     *         Gets the email.
     * 
     * @return String, the email
     */
    getEmail() {
        return this.email;
    }

    /**
     * @author tuan.ngo
     * 
     *         Instantiates a new email.
     *
     */
    setEmail(email) {
        this.email = email;
    }

    /**
     * @author tuan.ngo
     * 
     *         Gets the password.
     * 
     * @return String, the password
     */
    getPassword() {
        return this.password;
    }

    /**
     * @author tuan.ngo
     * 
     *         Instantiates a new password.
     *
     */
    setPassword(password) {
        this.password = password;
    }

    /**
     * @author tuan.ngo
     * 
     *         Gets the PID.
     * 
     * @return String, the PID
     */
    getPid() {
        return this.pid;
    }

    /**
     * @author tuan.ngo
     * 
     *         Instantiates a new PID.
     *
     */
    setPid(pid) {
        this.pid = pid;
    }

    /**
     * @author tuan.ngo
     * 
     *         Gets the confirm password.
     * 
     * @return String, the confirm password
     */
    getConfirmPassword() {
        return this.confirmPassword;
    }

    /**
     * @author tuan.ngo
     * 
     *         Instantiates a new confirm password.
     *
     */
    setConfirmPassword(confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    /**
     * @author tuan.ngo
     * 
     *         Initialize a account.
     * 
     */
    initAccount() {
        this.email = this.utilities.generateRandomString(this.constant.REGISTER_USERNAME, this.constant.RANDOM_LENGTH) + this.constant.EMAIL_EXTENSION;
        this.password = this.constant.REGISTER_PASSWORD;
        this.confirmPassword = this.password;
        this.pid = this.constant.REGISTER_PID;
    }
}
