const AbstractManager = require("./AbstractManager");

class TracksManager extends AbstractManager {
  constructor() {
    super({ table: "track" });
  }

  insert(track) {
    const {title, youtube_url, id_album} = track

    return this.database.query(`insert into ${this.table} (title, youtube_url, id_album) values (?, ?, ?)`, [
      title, youtube_url, id_album
    ]);
  }

  update(track) {
    const {title, youtube_url, id_album, id} = track

    return this.database.query(
      `update ${this.table} set title = ?, youtube_url = ?, id_album = ? where id = ?`,
      [title,  youtube_url, id_album, id]
    );
  }
}

module.exports = TracksManager;