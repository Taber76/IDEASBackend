require('dotenv').config()

module.exports.staticFiles = process.env.STATICFILES
module.exports.port = process.env.PORT

module.exports.jwtsecretkey = process.env.JWTSECRETKEY
module.exports.jwtsecretadminkey = process.env.JWTSECRETADMINKEY
module.exports.jwtexpires = process.env.JWTEXPIRES

module.exports.postgresuser = process.env.POSTGRESUSER
module.exports.postgreshost = process.env.POSTGRESHOST
module.exports.postgresdb = process.env.POSTGRESDB
module.exports.postgrespassword = process.env.POSTGRESPASSWORD
module.exports.postgresport = process.env.POSTGRESPORT

module.exports.postgres_url = process.env.POSTGRES_URL

module.exports.treblleApiKey = process.env.TREBLLEAPIKEY
module.exports.treblleProjectId = process.env.TREBLLEPROJECTID
