
type Layout = {
  h1: string;
  component: JSX.Element;
}

const FormLayout: React.FC<Layout> = ({ h1,  component }) => {
  return (
    <>
      <div className="bg-white shadow-soft min-h-[10dvh] h-fit flex flex-col items-center justify-start gap-8 py-14 px-14 rounded-lg">
        <header className="text-center">
          <h1 className="font-playfair text-4xl pb-2">{h1}</h1>
          <h2 className="text-xl">Siam Hospital</h2>
        </header>
        {component}
      </div>
    </>
  );
};

export default FormLayout;
