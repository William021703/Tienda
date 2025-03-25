const express = require("express");
const db = require("../confing/db");

const login = async (nombre) => {
  try {
    const [user] = await db
      .promise()
      .query(" SELECT * FROM usuario WHERE nombre = ?", [nombre]);
    return user.length > 0 ? user[0] : null;
  } catch (error) {
    throw error;
  }
};

module.exports = login;
