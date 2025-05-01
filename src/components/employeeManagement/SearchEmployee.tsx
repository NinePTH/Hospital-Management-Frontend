import SearchEmployeeForm from "./SearchEmployeeForm";

const SearchEmployee = () => {
  return (
    <>
      <div className="bg-white shadow-soft min-h-[10dvh] h-fit flex flex-col items-center justify-start gap-8 py-14 px-14 rounded-lg">
        <header className="text-center">
          <h1 className="font-playfair text-4xl pb-2">Employee Information</h1>
          <h2 className="text-xl">Siam Hospital</h2>
        </header>
        <SearchEmployeeForm />
      </div>
      
      <div className="bg-white shadow-soft min-h-[10dvh] h-fit flex flex-col items-center justify-start gap-8 py-14 px-14 mt-4 rounded-lg">
        <div className="text-center">
          <h1 className="text-4xl text-[#2C6975]">No result</h1>
        </div>
      </div>
    </>
  );
};

export default SearchEmployee;
