import EditPatientForm from "./EditPatientForm";

const EditPatient = () => {
  return (
    <>
      <div className="bg-white shadow-soft min-h-[82.5dvh] flex flex-col items-center justify-start gap-8 py-14 px-14 rounded-lg">
        <header className="text-center">
          <h1 className="font-playfair text-4xl pb-2">Edit Patient</h1>
          <h2 className="text-xl">Siam Hospital</h2>
        </header>
        <EditPatientForm />
      </div>
    </>
  );
};

export default EditPatient;
