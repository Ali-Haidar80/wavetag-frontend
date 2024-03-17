"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Table from "./Table";
import ContactModal from "./ContactModal";

const Container: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormDate] = useState<Record<string, string>>({})

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleViewClick = (rowData: Record<string, string>) => {
    openModal()
    setFormDate(rowData)
  };
  const columns = [
    { key: "serialNo", title: "SL No" },
    { key: "name", title: "Name" },
    { key: "mobile", title: "Mobile" },
    { key: "email", title: "Email" },
    { key: "date", title: "Date" },
    { key: "message", title: "Message" },

    // Add more columns as needed
  ];

  const data = [
    {
      serialNo: "01.",
      name: "John Doe",
      mobile: "123-456-7890",
      email: "john@example.com",
      date: "2022/02/15",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      serialNo: "02.",
      name: "Jane Doe",
      mobile: "987-654-3210",
      email: "jane@example.com",
      date: "2022/02/16",
      message:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more data rows as needed
  ];
  return (
    <div className="bg-light-100 px-6 py-2 w-[100%] rounded-b-2xl mt-[1px]">
      <Table columns={columns} data={data} onViewClick={handleViewClick} />
      <ContactModal data={formData} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Container;





