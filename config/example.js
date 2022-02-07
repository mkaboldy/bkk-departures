module.exports = {    
    http_host     : "127.0.0.1",
    http_port     : 8080,
    https_host    : "127.0.0.1",
    https_port    : 8443,
    ssl_cert      : "/full/path/to/your/certificate.crt",
    ssl_key       : "/full/path/to/your/privateKey.key"
}
/**
 * Install openSSL:
 * https://slproweb.com/download/Win64OpenSSL_Light-3_0_1.msi
 * 
 * Create ssl cert and key:
 * 
 * openssl req -x509 -out localhost.crt -keyout localhost.key -newkey rsa:2048 -nodes -sha256 -subj /CN=localhost
 */
 