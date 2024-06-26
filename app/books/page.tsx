"use client";

export default function Page() {
    return (
        <div>
            <h1>Book page</h1>
            <table>
                <caption>List of book data</caption>
                <thead>
                    <tr>
                        <th>BookID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Categories</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>91975e66-668a-46b1-9d16-2a1287154b6a</td>
                        <td>Oedipus the King</td>
                        <td>Yasunari Kawabata</td>
                        <td>
                            The radio quite enormously talk the bevy indeed
                            faithfully closely.
                        </td>
                        <td>Crime</td>
                        <td>
                            <button
                                onClick={(evt) => {
                                    alert("edit Oedipus the King");
                                }}
                            >
                                Edit
                            </button>
                            <button 
                                onClick={(evt) => {
                                    alert("delete Oedipus the King");
                                }}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>9a4763ea-799a-4eda-a3c9-899d31a94c57</td>
                        <td>Odyssey</td>
                        <td>Homer</td>
                        <td>A frightening lake listen an economics.</td>
                        <td>Adventure</td>
                        <td>
                            <button
                                onClick={(evt) => {
                                    alert("edit Odyssey");
                                }}
                            >
                                Edit
                            </button>
                            <button
                                onClick={(evt) => {
                                    alert("delete Odyssey");
                                }}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
