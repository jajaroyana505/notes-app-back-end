const { nanoid } = require("nanoid");

const notes = require("./notes");

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = { title, tags, body, id, createdAt, updatedAt };
  notes.push(newNote);

  const isSuccess = notes.filter((note) => note.id == id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: "success",
      message: "Catatan berhasil ditambahkan",
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }
  const response = h.response({
    status: "fail",
    message: "Data gagal ditambahkan",
  });
  response.code(500);
  return response;
};

const getAllNotesHandler = () => ({
  status: "success",
  data: {
    notes,
  },
});

const getNoteByIdHanler = (request, h) => {
  const { id } = request.params;

  const note = notes.filter((n) => n.id === id)[0];
  if (note !== undefined) {
    return {
      status: "success",
      data: {
        note,
      },
    };
  }
  const response = h.response({
    status: "fail",
    message: "Data tidak ditemukan hehehe",
  });

  response.code(404);
  return response;
};

const editNoteByIdHandler = (request, h) => {
  const { id } = request.params;
  //   console.log(request.params);

  const { title, tag, body } = request.payload;
  const updatedAt = new Date().toISOString();
  const index = notes.findIndex((note) => note.id === id);
  console.log(index);

  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tag,
      body,
      updatedAt,
    };
    const response = h.response({
      status: "success",
      message: "Catatan berhasil diperbarui",
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: "success",
    message: "Catatan berhasil diperbarui",
  });
  response.code(200);
  return response;
};

const deleteNoteByIdHandler = (request, h) => {
  const id = request.params.id;

  const index = notes.findIndex((n) => n.id === id);

  if (index !== -1) {
    notes.splice(index, 1);
    const response = h.response({
      status: "success",
      message: "data berhasil dihapus",
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: "fail",
    message: "data gagal dihapus",
    index: index,
  });
  response.code(404);
  return response;
};
module.exports = {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHanler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
};
