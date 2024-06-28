"use client";

import Table from "@/components/table";
import { useState } from "react";
import { faker } from "@faker-js/faker";

//TODO: Will remove after implement fetching
const initialDataList = [
    {
        book_id: "91975e66-668a-46b1-9d16-2a1287154b6a",
        title: "Oedipus the King",
        author: "Yasunari Kawabata",
        description:
            "The radio quite enormously talk the bevy indeed faithfully closely.",
        categories: ["Crime"],
    },
    {
        book_id: "9a4763ea-799a-4eda-a3c9-899d31a94c57",
        title: "Odyssey",
        author: "Homer",
        description: "A frightening lake listen an economics.",
        categories: ["Adventure"],
    },
    {
        book_id: "a5d3f3c6-8085-4603-b26d-3e4a824b343d",
        title: "The Stranger Author",
        author: "Albert Camus",
        description: "The gorgeous temple clap shiny problem.",
        categories: ["Erotic", "Science"],
    },
];

type Book = {
    book_id: string;
    title: string;
    author: string;
    description: string;
    categories: string[];
};

const tableProperties = {
    primary_header: "book_id",
    header_orders: ["book_id", "title", "author", "description", "categories"],
    name: {
        book_id: "ID",
    },
};

function generateBook(): Book {
    return {
        book_id: faker.string.uuid(),
        title: faker.music.songName(),
        author: faker.person.fullName(),
        description: faker.lorem.paragraph(),
        categories: faker.word.noun().split(" "),
    };
}

export default function BookPage() {
    const [bookData, setData] = useState(initialDataList);

    function addData() {

        const newBook = generateBook()
        setData([...bookData, newBook])
    }

    //TODO: Fix function to fetch data instead
    function editData(data: Book, currentData: any[]) {
        const editedIndex = currentData.indexOf(data);
        const editedData = {
            ...generateBook(),
            book_id: data.book_id
        };

        currentData[editedIndex] = editedData;
        setData([...currentData]);
    }

    function deleteData(data: Book, currentData: Book[]) {
        const deletedIndex = currentData.indexOf(data);
        currentData.splice(deletedIndex, 1);

        setData([...currentData]);
    }

    return (
        <div className="font-sans space-y-10 m-10">
            <h1 className="text-4xl font-bold">Book</h1>

            <div className="container m-auto space-y-5">
                {`Book count: ${bookData.length}`}
            </div>
            <div className="container m-auto ">
                <button
                    className="p-2 border-green-500 border rounded hover:bg-green-500 transition"
                    onClick={(e) => {
                        e.preventDefault();
                        addData();
                    }}
                >
                    Add
                </button>
                <Table
                    caption="List of book data"
                    data={bookData}
                    table={tableProperties}
                    onEdit={(data) => {
                        editData(data, bookData);
                    }}
                    onDelete={(data) => {
                        deleteData(data, bookData);
                    }}
                />
            </div>
        </div>
    );
}
