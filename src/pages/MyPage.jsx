import PercentComplete from '../features/my-page/PercentComplete';

function MyPage() {
  return (
    <div className="grid grid-cols-5">
      <PercentComplete className="col-span-2" />
      <PercentComplete className="col-span-3" />
    </div>
  );
}

export default MyPage;
