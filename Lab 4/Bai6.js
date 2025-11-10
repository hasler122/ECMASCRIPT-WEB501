function fetchMultipleData(urls) {
  return Promise.all(
    urls.map(url =>
      Promise.resolve({ url, name: url.includes("1") ? "Alice" : "Bob" })
    )
  );
}

fetchMultipleData(["/api/user/1", "/api/user/2"]).then(users =>
  console.log(users)
);
