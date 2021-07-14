module.exports = {
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "victor",
  "password": "impressora",
  "database": "alphacoredb",
  "migrations": ["src/database/migrations/*.ts"],
  "entities": ["src/entities/*.ts"],
  "cli": {
    "migrationsDir": "src/database/migrations",
    "entitiesDir": 'src/entities/*.ts'
  }
}