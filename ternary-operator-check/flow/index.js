// @flow strict

const f = () => () => true;

const check = f() ? true : false;
