module.exports = {
	BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 12,
	NODE_ENV: process.env.NODE_ENV || "development",
	PORT: process.env.PORT || 9000,
}
