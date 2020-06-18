const contacts = function () {
  return [
    { name: "adam", email: "adam@mit.edu" },
    { name: "anne", email: "anne@mit.edu" },
    { name: "fred", email: "fred@mit.edu" },
  ];
};
try {
  exports.contacts = contacts;
} catch (e) {
  console.log("catch error");
}
