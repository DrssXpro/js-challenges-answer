console.log("123" instanceof String, new String(123) instanceof String);

console.log(["123", "456", "789", new String("123")].map((s) => (typeof s === "string" ? "string" : "String")));
