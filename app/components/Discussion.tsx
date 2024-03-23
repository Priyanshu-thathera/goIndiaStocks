import UserCard from "./UserCard";
import userData from '../Data/DisccusionData.json'

const Discussion = () => {
  return (
    <>
      <div className="content sm:w-5/6">
        <div className="bg-slate-200 text-red-400 font-bold	px-2 py-1 mb-4 mt-2 w-fit whitespace-nowrap	hidden sm:block ">
          <h2>DISCUSSION FOURM </h2>
        </div>

        <div className="mb-4 mr-4 ">
          {userData.map((el,index)=>(
              <UserCard 
              key={index}
              user={el.name}
              description={el.descriptions}
              like={el.likes}
              view = {el.views}
              comments={el.comments}
          />
            )
          )}
          
        </div>
      </div>
    </>
  );
};

export default Discussion;
