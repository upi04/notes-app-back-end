const { up } = require("../../migrations/1679618111544_create-table-notes")

const mapDBToModel=({
    id,
    title,
    body,
    tags,
    created_at,
    updated_at
})=>({
    id,
    title,
    body,
    tags,
    createdAT: created_at,
   updatedAT:updated_at,
})

module.exports={ mapDBToModel };
