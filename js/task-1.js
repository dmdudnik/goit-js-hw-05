const Account = function ({ login, email }) {
  this._login = login;
  this._email = email;
};

Account.prototype.getInfo = function () {
  console.log(`login: ${this._login}, email: ${this._email}`);
};

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
