export const findNoteInCollection = (collection, id) => {
    return collection.some(item => item.id === id);
  };
  