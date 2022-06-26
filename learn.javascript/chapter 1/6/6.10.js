'use strict';

// Исправьте функцию, теряющую "this"

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// Использование частично применённой функции для логина

askPassword(user.login.bind(user, true), user.login.bind(user, false));