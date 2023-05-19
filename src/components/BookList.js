import React, { useState, useEffect } from 'react';

const BookList = ({searchQuery}) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, [searchQuery]);

  const fetchBooks = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${searchQuery}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      console.log(data);

      setBooks(data.docs);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Book List</h2>
        <table>
            <thead>
                <th>Title</th>
                <th>Author</th>
                <th>Published Year</th>

            </thead>
            <tbody>
                {books.map((book) => {
                    return (
                        <tr key={book.key}>
                            <td>{book.title}</td>
                            <td>{book.author_name?.join(', ')}</td>
                            <td>{book.first_publish_year}</td>
                        </tr>
                    )
                })}


            </tbody>
        </table>




    
    </div>
  );
};

export default BookList;
