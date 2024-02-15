import IconGoTop from '/src/assets/icons/btn/go-top.svg?react';

function BtnGoTop() {
  const clickHandler = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <button
      onClick={clickHandler}
      className="fixed bottom-36 right-4 flex flex-col gap-2"
    >
      <IconGoTop width={48} height={48} />
    </button>
  );
}

export default BtnGoTop;
