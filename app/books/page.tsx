"use client";

import Table from "@/components/table";

//TODO: Will change to fetching data instead
const data = [
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

const tableProperties = {
    primary_header: "book_id",
    header_orders: ["book_id", "title", "author", "description", "categories"],
    name: {
        book_id: "ID",
    },
};

export default function Page() {
    return (
        <div className="font-sans space-y-10 m-10">
            <h1 className="text-4xl font-bold">Book</h1>

            <div className="container m-auto ">
                <button className="p-2 border-green-500 border rounded hover:bg-green-500 transition">
                    Add
                </button>
                <Table
                    caption="List of book data"
                    data={data}
                    table={tableProperties}
                />
            </div>
        </div>
    );
}
