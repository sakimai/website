"use client";

interface PublicationProps {
  title: string;
  author: string; // Example: "Saki Imai, John Doe, Jane Smith"
  conference: string;
  pdfLink: string;
}

const Publication: React.FC<PublicationProps> = ({ title, author, conference, pdfLink }) => {
  const myName = "Saki Imai"; // Your name to be bolded

  // Split the authors and format them
  const formattedAuthors = author.split(", ").map((name, index) => {
    if (name.trim() === myName) {
      return (
        <strong key={index} className="font-bold">
          {name}
        </strong>
      );
    }
    return name;
  });

  return (
    <div className="border border-stone-200 rounded-lg p-3 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">
        {formattedAuthors.map((author, index) => (
          <span key={index}>
            {author}
            {index < formattedAuthors.length - 1 && ", "}
          </span>
        ))}
      </p>
      <p className="text-gray-600">{conference}</p>
      <div className="inline-flex items-center space-x-2">
        <a
          href={pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-pink-200 text-pink-800 px-2 rounded-full text-xs font-semibold uppercase"
        >
          PDF
        </a>
      </div>
    </div>
  );
};

export default Publication;
