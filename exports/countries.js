"use strict";

const data = require("../data/countries.json");

let nameMap = {};
let codeMap = {};

function mapCodeAndName(country) {
  nameMap[country.name.toLowerCase()] = country.code;
  codeMap[country.name.toLowerCase()] = country.name;
}

data.forEach(mapCodeAndName);

exports.getCode = name => {
  return nameMap[name.toLowerCase()];
};

exports.getName = code => {
  return codeMap[name.toLowerCase()];
};

exports.getNames = function getNames() {
  return data.map(function(country) {
    return country.name;
  });
};

exports.getCodes = function getCodes() {
  return data.map(function(country) {
    return country.code;
  });
};

exports.getCodeList = function getCodeList() {
  return codeMap;
};

exports.getNameList = function getNameList() {
  return nameMap;
};

exports.getData = function getData() {
  return data;
};
