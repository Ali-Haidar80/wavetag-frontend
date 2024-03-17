import ContactNavbar from "@/Components/Navbars/ContactNavbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ContactNavbar />
      <div className="mx-6">
        {children}
      </div>
    </>
  );
};

export default layout;
