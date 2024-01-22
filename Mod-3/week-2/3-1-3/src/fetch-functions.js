export const getFirstThreeFantasyBooks = async () => {
  const url = `https://openlibrary.org/subjects/fantasy.json`
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Failed to get fantasy books')

    const { works } = await response.json();;

    return works.slice(0, 3).map((book) => {
      const { title, authors, cover_id } = book;
      const author = {
        name: authors[0].name,
        urlKey: authors[0].key,
      };
      const coverUrl = `https://covers.openlibrary.org/a/id/${cover_id}-M.jpg`;

      return { title, author, coverUrl };
    });
  } catch (error) {
    console.warn(error.message)
    return null;
  }
};

export const getAuthor = async (authorUrlKey) => {
  const url = `https://openlibrary.org${authorUrlKey}.json`
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Failed to get author')
    const { birth_date: birthDate, bio, wikipedia, name, photos } = await response.json();
    const pictureUrl = `https://covers.openlibrary.org/a/id/${photos[0]}-M.jpg`

    const val = { birthDate, bio, wikipediaUrl: wikipedia, name, pictureUrl };
    return val;
  } catch (error) {
    console.warn(error.message)
    return null;
  }
};

export const createNewUser = async (newUserData) => {
  const userUrl = 'https://jsonplaceholder.typicode.com/users'
  try {
    const response = await fetch(userUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUserData)
    })
    if (!response.ok) throw new Error('Failed to create new user')

    return response.json();
  } catch (error) {
    console.warn(error.message)
    return null;
  }
}