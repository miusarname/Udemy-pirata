import crypto from "crypto";

export function decrypt(req, res) {
  let encryptedValue = req.body.encryptedValue;
  const secret = "tu_clave_secreta"; // Debe coincidir con tu clave secreta real
  const decipher = crypto.createDecipher("aes-256-cbc", secret);
  let decrypted = decipher.update(encryptedValue, "hex", "utf8");
  decrypted += decipher.final("utf8");
  console.log(decrypted);
  res.json({
    url: decrypted,
  });
}
