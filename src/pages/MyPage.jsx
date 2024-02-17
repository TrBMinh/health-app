import BodyRecord from '../features/my-page/BodyRecord';
import PercentComplete from '../features/my-page/PercentComplete';

function MyPage() {
  return (
    <div className="grid grid-cols-5">
      <PercentComplete className="col-span-2" />
      <div className="bg-dark-600 col-span-3">
        <BodyRecord />
      </div>
    </div>
  );
}

export default MyPage;
