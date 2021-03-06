const knex = require('./knex.js')

const Shows = () => {
  return knex('shows')
}

const Episodes = () => {
  return knex('episodes')
}

const getAll = () => {
  return Shows().select()
    .orderBy('id', 'asc')
}

const getSingle = (showId) => {
  return Shows().where('id', parseInt(showId)).first()
}

const add = (show) => {
  return Shows().insert(show, 'id')
}

const update = (showId, updates) => {
  return Shows().where('id', parseInt(showId)).update(updates)
}

const deleteShow = (showId) => {
  return Shows().where('id', parseInt(showId)).del()
}

const getEpisodes = (showId) => {
  return Episodes().where('show_id', parseInt(showId))
    .orderBy('episode_number', 'asc')
}

module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update,
  deleteShow: deleteShow,
  getEpisodes: getEpisodes
}
