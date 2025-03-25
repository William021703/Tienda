const express = require("express");
const db = require("../confing/db");

const roles = async () => {
  try {
    const [rows, field] = await db.promise().query("SELECT * FROM roles");
    if (!rows) {
      const error = "hubo un error";
      return error;
    }
    return rows;
  } catch (error) {
    throw error;
  }
};

module.exports = { roles };
