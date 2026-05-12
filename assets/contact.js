(function () {
  const user = ["aykut", "ssert"].join("");
  const domain = ["g", "mail", ".", "com"].join("");
  const address = [user, domain].join("@");

  document.querySelectorAll(".contact-link").forEach((link) => {
    link.href = `mailto:${address}`;
  });
})();
