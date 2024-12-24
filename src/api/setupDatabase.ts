import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'musicFav.db',
    location: 'default',
  },
  () => console.log('Database opened successfully'),
  err => console.error('Error opening database', err),
);

export const setupDatabase = () => {
  console.log('Initializing database setup...');
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
      );`,
      [],
      () => console.log('Table "users" created or already exists.'),
      (_, error) => console.error('Error creating table:', error),
    );

    tx.executeSql(
      `INSERT OR IGNORE INTO users (username, password) VALUES (?, ?)`,
      ['arie', 'arie123'],
      () => console.log('Default user inserted or already exists.'),
      (_, error) => console.error('Error inserting default user:', error),
    );
  });
};
