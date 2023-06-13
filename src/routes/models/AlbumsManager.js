const AbstractManager = require('./AbstractManager');

class AlbumsManager extends AbstractManager {
  constructor() {
    super({ table: 'albums' });
  }

  insert(album) {
    const { title, genre, picture, artist } = album;

    return this.database.query(
      `insert into ${this.table} (title, genre, picture, artist) values (?, ?, ?, ?)`,
      [title, genre, picture, artist]
    );
  }

  update(album) {
    const { title, genre, picture, artist, id } = album;

    return this.database.query(
      `update ${this.table} set title = ?, genre = ?, picture = ?, artist = ? where id = ?`,
      [title, genre, picture, artist, id]
    );
  }
}

module.exports = AlbumsManager;
